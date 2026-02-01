import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { ajHackMe } from "@/lib/arcjet-config";

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

// This endpoint is DESIGNED to be attacked for educational purposes
export async function POST(req: NextRequest) {
  const decision = await ajHackMe.protect(req, { requested: 1 });
  const body = await req.json();
  const { input, attackType } = body;

  // Classify and log every attempt
  let detectedType: AttackType = "SUSPICIOUS_PATTERN";
  let severity: Severity = "LOW";
  let blocked = true;
  let message = "";

  // SQL Injection detection
  if (
    /(\bSELECT\b|\bDROP\b|\bUNION\b|\bINSERT\b|\bDELETE\b|--|;|'|"|`)/i.test(
      input
    )
  ) {
    detectedType = "SQL_INJECTION";
    severity = "HIGH";
    message =
      "SQL injection detected! Input sanitized and parameterized queries used.";
  }
  // XSS detection
  else if (/<script|javascript:|onerror=|onload=/i.test(input)) {
    detectedType = "XSS";
    severity = "HIGH";
    message = "XSS attempt detected! Content is HTML-encoded before rendering.";
  }
  // Basic prompt injection
  else if (
    /ignore previous|system:|you are now|reveal prompt/i.test(input)
  ) {
    detectedType = "PROMPT_INJECTION";
    severity = "MEDIUM";
    message =
      "Prompt injection detected! System instructions are protected and isolated.";
  } else {
    detectedType = attackType || "SUSPICIOUS_PATTERN";
    severity = "LOW";
    blocked = false;
    message = "Input appears safe. No attack pattern detected.";
  }

  // Log the attempt
  await prisma.attackLog.create({
    data: {
      ipAddress: typeof decision.ip === 'string' ? decision.ip : (decision.ip as any)?.ip || "unknown",
      userAgent: req.headers.get("user-agent") || undefined,
      attackType: detectedType,
      severity,
      endpoint: "/api/hack-me",
      payload: input,
      blocked,
      detectionMethod: "pattern-matching + arcjet",
      metadata: {
        arcjetDecision: decision.conclusion,
        userSpecifiedType: attackType,
      },
    },
  });

  return NextResponse.json({
    detected: blocked,
    attackType: detectedType,
    severity,
    message,
    details: {
      inputLength: input.length,
      timestamp: new Date().toISOString(),
      rateLimitRemaining: decision.reason.isRateLimit()
        ? decision.reason.remaining
        : null,
    },
  });
}
