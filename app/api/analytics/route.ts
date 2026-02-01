import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { aj } from "@/lib/arcjet-config";

export async function GET(req: NextRequest) {
  try {
    const decision = await aj.protect(req, { requested: 1 });

    if (decision.isDenied()) {
      return NextResponse.json(
        { error: "Too many requests" },
        { status: 429 }
      );
    }

    // Get attack statistics
    const last24Hours = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const last7Days = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

    const [
      totalAttacks,
      attacksLast24h,
      attacksLast7Days,
      attacksByType,
      attacksBySeverity,
      recentAttacks,
    ] = await Promise.all([
      // Total attacks all time
      prisma.attackLog.count(),
      
      // Attacks in last 24 hours
      prisma.attackLog.count({
        where: { timestamp: { gte: last24Hours } },
      }),
      
      // Attacks in last 7 days
      prisma.attackLog.count({
        where: { timestamp: { gte: last7Days } },
      }),
      
      // Group by attack type
      prisma.attackLog.groupBy({
        by: ["attackType"],
        _count: { attackType: true },
        orderBy: { _count: { attackType: "desc" } },
      }),
      
      // Group by severity
      prisma.attackLog.groupBy({
        by: ["severity"],
        _count: { severity: true },
        orderBy: { _count: { severity: "desc" } },
      }),
      
      // Recent attacks (last 100)
      prisma.attackLog.findMany({
        take: 100,
        orderBy: { timestamp: "desc" },
        where: { timestamp: { gte: last24Hours } },
        select: {
          timestamp: true,
          attackType: true,
          severity: true,
        },
      }),
    ]);

    // Calculate threat level
    const hourlyRate = attacksLast24h / 24;
    let threatLevel = "LOW";
    if (hourlyRate > 100) threatLevel = "CRITICAL";
    else if (hourlyRate > 50) threatLevel = "HIGH";
    else if (hourlyRate > 10) threatLevel = "ELEVATED";

    return NextResponse.json({
      summary: {
        totalAttacks,
        attacksLast24h,
        attacksLast7Days,
        threatLevel,
        hourlyRate: Math.round(hourlyRate),
      },
      attacksByType: attacksByType.map((item: any) => ({
        type: item.attackType,
        count: item._count.attackType,
      })),
      attacksBySeverity: attacksBySeverity.map((item: any) => ({
        severity: item.severity,
        count: item._count.severity,
      })),
      timeline: recentAttacks,
    });
  } catch (error) {
    console.error("Error fetching analytics:", error);
    return NextResponse.json(
      { error: "Failed to fetch analytics" },
      { status: 500 }
    );
  }
}
