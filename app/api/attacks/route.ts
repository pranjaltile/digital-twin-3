import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { aj } from "@/lib/arcjet-config";

// Types will be available after running: npx prisma generate
type AttackType =
  | "PROMPT_INJECTION"
  | "SQL_INJECTION"
  | "XSS"
  | "BOT_TRAFFIC"
  | "RATE_LIMIT_EXCEEDED"
  | "SUSPICIOUS_PATTERN"
  | "DDoS_ATTEMPT"
  | "INVALID_INPUT";

type Severity = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";

export async function POST(req: NextRequest) {
  try {
    const decision = await aj.protect(req, { requested: 1 });

    // Log the attack attempt
    const body = await req.json();
    const {
      attackType,
      severity,
      endpoint,
      payload,
      blocked = true,
      detectionMethod,
    } = body;

    const attackLog = await prisma.attackLog.create({
      data: {
        ipAddress: typeof decision.ip === 'string' ? decision.ip : (decision.ip as any)?.ip || "unknown",
        userAgent: req.headers.get("user-agent") || undefined,
        attackType: attackType as AttackType,
        severity: severity as Severity,
        endpoint,
        payload,
        blocked,
        detectionMethod,
        metadata: {
          arcjetDecision: decision.conclusion,
          arcjetReason: decision.reason.toString(),
        },
      },
    });

    return NextResponse.json({
      success: true,
      id: attackLog.id,
      message: "Attack logged successfully",
    });
  } catch (error) {
    console.error("Error logging attack:", error);
    return NextResponse.json(
      { error: "Failed to log attack" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const decision = await aj.protect(req, { requested: 1 });

    if (decision.isDenied()) {
      return NextResponse.json(
        { error: "Too many requests" },
        { status: 429 }
      );
    }

    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get("limit") || "50");
    const severity = searchParams.get("severity");
    const attackType = searchParams.get("type");

    const where: any = {};
    if (severity) where.severity = severity;
    if (attackType) where.attackType = attackType;

    const attacks = await prisma.attackLog.findMany({
      where,
      orderBy: { timestamp: "desc" },
      take: limit,
      select: {
        id: true,
        timestamp: true,
        attackType: true,
        severity: true,
        endpoint: true,
        blocked: true,
        detectionMethod: true,
      },
    });

    return NextResponse.json({ attacks });
  } catch (error) {
    console.error("Error fetching attacks:", error);
    return NextResponse.json(
      { error: "Failed to fetch attacks" },
      { status: 500 }
    );
  }
}
