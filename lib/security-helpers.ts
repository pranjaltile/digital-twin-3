// Helper functions for attack classification and security

export type AttackType =
  | "PROMPT_INJECTION"
  | "SQL_INJECTION"
  | "XSS"
  | "BOT_TRAFFIC"
  | "RATE_LIMIT_EXCEEDED"
  | "SUSPICIOUS_PATTERN"
  | "DDoS_ATTEMPT"
  | "INVALID_INPUT"

export type Severity = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL"

// Classify severity based on attack type
export function classifySeverity(attackType: AttackType): Severity {
  switch (attackType) {
    case "SQL_INJECTION":
    case "XSS":
      return "CRITICAL"
    case "PROMPT_INJECTION":
    case "DDoS_ATTEMPT":
      return "HIGH"
    case "RATE_LIMIT_EXCEEDED":
    case "SUSPICIOUS_PATTERN":
      return "MEDIUM"
    default:
      return "LOW"
  }
}

// Calculate threat level based on attack frequency
export function calculateThreatLevel(attacksLast24h: number): string {
  const hourlyRate = attacksLast24h / 24

  if (hourlyRate > 100) return "CRITICAL"
  if (hourlyRate > 50) return "HIGH"
  if (hourlyRate > 10) return "ELEVATED"
  return "LOW"
}

// Format attack type for display
export function formatAttackType(type: AttackType): string {
  return type
    .split("_")
    .map((word) => word.charAt(0) + word.slice(1).toLowerCase())
    .join(" ")
}

// Detect common attack patterns
export const ATTACK_PATTERNS = {
  SQL_INJECTION: [
    /(\bSELECT\b|\bDROP\b|\bUNION\b|\bINSERT\b|\bDELETE\b|\bUPDATE\b)/i,
    /--|;|'|"|`/,
    /\bOR\b\s+\d+\s*=\s*\d+/i,
    /\bAND\b\s+\d+\s*=\s*\d+/i,
  ],
  XSS: [
    /<script/i,
    /javascript:/i,
    /onerror=/i,
    /onload=/i,
    /<iframe/i,
    /<img.*src/i,
  ],
  PROMPT_INJECTION: [
    /ignore (previous|all|above) (instructions|prompts)/i,
    /you are now|act as|pretend to be|roleplay/i,
    /system:|assistant:|user:/i,
    /\[INST\]|\[\/INST\]/i,
    /<\|im_start\|>|<\|im_end\|>/i,
    /forget (everything|what|your)/i,
    /reveal (your|the) (prompt|instructions|system)/i,
    /jailbreak|bypass|override/i,
  ],
}

// Detect attack type from input
export function detectAttackType(input: string): AttackType | null {
  for (const pattern of ATTACK_PATTERNS.SQL_INJECTION) {
    if (pattern.test(input)) return "SQL_INJECTION"
  }

  for (const pattern of ATTACK_PATTERNS.XSS) {
    if (pattern.test(input)) return "XSS"
  }

  for (const pattern of ATTACK_PATTERNS.PROMPT_INJECTION) {
    if (pattern.test(input)) return "PROMPT_INJECTION"
  }

  return null
}

// Sanitize input for safe display
export function sanitizeInput(input: string, maxLength: number = 200): string {
  return input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .slice(0, maxLength)
}

// Generate attack log message
export function generateLogMessage(
  attackType: AttackType,
  blocked: boolean,
  endpoint: string
): string {
  const action = blocked ? "BLOCKED" : "FLAGGED"
  return `[${action}] ${formatAttackType(attackType)} detected at ${endpoint}`
}
