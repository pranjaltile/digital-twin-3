import arcjet, {
  detectBot,
  tokenBucket,
  shield,
  sensitiveInfo,
  validateEmail,
} from "@arcjet/next";

// Core Arcjet instance for Digital Twin III
export const aj = arcjet({
  key: process.env.ARCJET_KEY!,
  characteristics: ["ip.src"], // Track by IP address
  rules: [
    // Shield against common attacks
    shield({
      mode: "LIVE",
    }),
    // Detect and block bots
    detectBot({
      mode: "LIVE",
      allow: [
        "CATEGORY:SEARCH_ENGINE", // Allow Google, Bing, etc.
      ],
    }),
    // Rate limiting - 100 requests per minute per IP
    tokenBucket({
      mode: "LIVE",
      refillRate: 100,
      interval: 60,
      capacity: 100,
    }),
  ],
});

// Specialized Arcjet for AI chatbot endpoints
export const ajChatbot = arcjet({
  key: process.env.ARCJET_KEY!,
  characteristics: ["ip.src"],
  rules: [
    shield({ mode: "LIVE" }),
    detectBot({ mode: "LIVE", allow: [] }), // No bots allowed in chatbot
    // Rate limiting - More restrictive for AI endpoint
    tokenBucket({
      mode: "LIVE",
      refillRate: 10, // More restrictive for AI endpoint
      interval: 60,
      capacity: 20,
    }),
  ],
});

// Arcjet for hack-me demonstration page
export const ajHackMe = arcjet({
  key: process.env.ARCJET_KEY!,
  characteristics: ["ip.src"],
  rules: [
    shield({ mode: "LIVE" }),
    // More lenient rate limiting for testing
    tokenBucket({
      mode: "LIVE",
      refillRate: 20,
      interval: 60,
      capacity: 30,
    }),
  ],
});
