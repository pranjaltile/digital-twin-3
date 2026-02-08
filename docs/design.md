# Technical Design Document
## Digital Twin III - AI-Powered Cybersecurity Portfolio

> Comprehensive technical architecture and design decisions for the Digital Twin III application.

---

## Table of Contents
1. [System Overview](#system-overview)
2. [Architecture](#architecture)
3. [Component Design](#component-design)
4. [Data Flow](#data-flow)
5. [Security Architecture](#security-architecture)
6. [Database Design](#database-design)
7. [API Design](#api-design)
8. [Frontend Design](#frontend-design)
9. [Integration Points](#integration-points)
10. [Design Decisions](#design-decisions)

---

## System Overview

### Purpose
Digital Twin III serves as an AI-powered cybersecurity portfolio that demonstrates:
- Real-time AI chatbot capabilities
- Multi-layer security implementation
- Attack detection and logging
- Security analytics visualization

### Three Pillars Architecture
```
┌─────────────────────────────────────────────────────────────────┐
│                     DIGITAL TWIN III                            │
├─────────────────┬─────────────────┬─────────────────────────────┤
│    REPRESENT    │     DEFEND      │           LEARN             │
│   AI Chatbot    │ Security Layers │    Analytics Dashboard      │
├─────────────────┼─────────────────┼─────────────────────────────┤
│ - Groq LLM      │ - Arcjet Shield │ - Real-time stats           │
│ - Streaming     │ - Rate Limiting │ - Attack distribution       │
│ - Context-aware │ - Bot Detection │ - Threat level calculation  │
│ - Prompt safety │ - Pattern Match │ - Historical trends         │
└─────────────────┴─────────────────┴─────────────────────────────┘
```

---

## Architecture

### High-Level Architecture
```
┌──────────────────────────────────────────────────────────────────┐
│                          CLIENT LAYER                            │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐   │
│  │   Next.js    │  │   React 19   │  │   Tailwind CSS 4     │   │
│  │  App Router  │  │  Components  │  │   + Radix UI         │   │
│  └──────────────┘  └──────────────┘  └──────────────────────┘   │
└──────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────────────┐
│                        API LAYER (Edge)                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐   │
│  │  /api/chat   │  │ /api/hack-me │  │   /api/analytics     │   │
│  │  AI Chatbot  │  │ Attack Test  │  │   Statistics         │   │
│  └──────────────┘  └──────────────┘  └──────────────────────┘   │
└──────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────────────┐
│                      SECURITY LAYER                              │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │                    ARCJET MIDDLEWARE                      │   │
│  │  ┌────────────┐  ┌────────────┐  ┌────────────────────┐  │   │
│  │  │   Shield   │  │    Rate    │  │   Bot Detection    │  │   │
│  │  │   (OWASP)  │  │  Limiting  │  │   (Fingerprint)    │  │   │
│  │  └────────────┘  └────────────┘  └────────────────────┘  │   │
│  └──────────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │              PATTERN MATCHING LAYER                       │   │
│  │  ┌────────────┐  ┌────────────┐  ┌────────────────────┐  │   │
│  │  │    SQL     │  │    XSS     │  │ Prompt Injection   │  │   │
│  │  │ Injection  │  │  Patterns  │  │    Detection       │  │   │
│  │  └────────────┘  └────────────┘  └────────────────────┘  │   │
│  └──────────────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────────────┐
│                      DATA LAYER                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐   │
│  │    Prisma    │  │  PostgreSQL  │  │      Supabase        │   │
│  │     ORM      │  │   Database   │  │   (Hosted DB)        │   │
│  └──────────────┘  └──────────────┘  └──────────────────────┘   │
└──────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────────────┐
│                    EXTERNAL SERVICES                             │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │                       GROQ API                            │   │
│  │            Llama 3.3 70B Versatile Model                  │   │
│  │              (LLM Inference Service)                      │   │
│  └──────────────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────────┘
```

### Technology Stack
| Layer | Technology | Purpose |
|-------|------------|---------|
| Frontend | Next.js 16 | Server-side rendering, App Router |
| UI | React 19 | Component library |
| Styling | Tailwind CSS 4 | Utility-first CSS |
| Components | Radix UI | Accessible primitives |
| API | Next.js Route Handlers | Serverless functions |
| Security | Arcjet | WAF, rate limiting, bot detection |
| Database | PostgreSQL | Persistent storage |
| ORM | Prisma 5.22 | Type-safe database access |
| AI | Groq + Vercel AI SDK | LLM inference + streaming |

---

## Component Design

### Frontend Components

```
components/
├── ui/                      # Base UI primitives (Radix-based)
│   ├── button.tsx          # Button variants
│   ├── card.tsx            # Card container
│   ├── badge.tsx           # Status badges
│   └── input.tsx           # Form inputs
│
├── Layout Components
│   ├── navbar.tsx          # Site navigation
│   └── footer.tsx          # Site footer
│
├── Page-Specific Components
│   ├── hero-section.tsx    # Homepage hero
│   ├── stats-bar.tsx       # Live statistics
│   ├── three-pillars.tsx   # Feature showcase
│   ├── chatbot-widget.tsx  # Floating AI chat
│   ├── attack-vectors.tsx  # Hack-me testing
│   ├── stats-cards.tsx     # Dashboard metrics
│   └── projects-grid.tsx   # Portfolio display
│
└── Feature Components
    ├── attack-log.tsx      # Live attack feed
    ├── charts-section.tsx  # Analytics charts
    └── live-demonstration.tsx # Real-time demo
```

### Component Hierarchy
```
RootLayout
├── Navbar
├── Page Content
│   ├── HomePage
│   │   ├── HeroSection
│   │   ├── StatsBar (fetches /api/analytics)
│   │   ├── ThreePillars
│   │   └── ChatbotWidget (streams /api/chat)
│   │
│   ├── DashboardPage
│   │   ├── DashboardHeader
│   │   ├── StatsCards (fetches /api/analytics)
│   │   └── ChartsSection
│   │
│   ├── HackMePage
│   │   ├── HackHeroBanner
│   │   ├── InstructionsSection
│   │   ├── AttackVectors (posts /api/hack-me)
│   │   └── LiveDemonstration
│   │
│   ├── ProjectsPage
│   │   ├── ProjectsHeader
│   │   └── ProjectsGrid
│   │
│   └── AboutPage
│       ├── AboutHero
│       ├── ExperienceTimeline
│       └── SkillsSection
│
└── Footer
```

---

## Data Flow

### Chatbot Flow
```
User Input
    │
    ▼
┌──────────────────┐
│ ChatbotWidget    │
│ (Client)         │
└────────┬─────────┘
         │ POST /api/chat
         ▼
┌──────────────────┐
│ Arcjet Shield    │──── BLOCKED ──→ 429 Response
│ Rate Limiting    │
└────────┬─────────┘
         │ ALLOWED
         ▼
┌──────────────────┐
│ Pattern Matching │──── INJECTION ──→ Log + Block
│ (Prompt Safety)  │
└────────┬─────────┘
         │ SAFE
         ▼
┌──────────────────┐
│ Groq LLM API     │
│ (Streaming)      │
└────────┬─────────┘
         │ Stream chunks
         ▼
┌──────────────────┐
│ Log Conversation │
│ (Prisma)         │
└────────┬─────────┘
         │
         ▼
    Response Stream → Client
```

### Attack Testing Flow
```
Test Payload
    │
    ▼
┌──────────────────┐
│ AttackVectors    │
│ (Client)         │
└────────┬─────────┘
         │ POST /api/hack-me
         ▼
┌──────────────────┐
│ Security Helpers │
│ detectAttackType │
└────────┬─────────┘
         │
    ┌────┴────┐
    │         │
 DETECTED   CLEAN
    │         │
    ▼         ▼
┌─────────┐ ┌─────────┐
│ Log     │ │ Return  │
│ Attack  │ │ No      │
│ (DB)    │ │ Threat  │
└────┬────┘ └────┬────┘
     │           │
     ▼           ▼
   Response with detection result
```

### Analytics Flow
```
Page Load
    │
    ▼
┌──────────────────┐
│ StatsBar /       │
│ StatsCards       │
└────────┬─────────┘
         │ GET /api/analytics
         ▼
┌──────────────────┐
│ Prisma Queries   │
│ - count attacks  │
│ - count blocked  │
│ - count convos   │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ Calculate        │
│ - blocked rate   │
│ - threat level   │
│ - distributions  │
└────────┬─────────┘
         │
         ▼
    JSON Response → Component State
```

---

## Security Architecture

### Defense in Depth
```
Layer 1: Edge Security (Arcjet)
├── OWASP Shield - Common attack patterns
├── Rate Limiting - 100 req/60s standard, 10 req/60s chat
├── Bot Detection - Automated request blocking
└── IP Fingerprinting - Request tracking

Layer 2: Application Security
├── Input Validation - Type checking, length limits
├── Pattern Matching - SQL, XSS, Prompt Injection regex
├── Output Sanitization - Escape special characters
└── Error Handling - No stack traces in production

Layer 3: Data Security
├── Parameterized Queries - Prisma ORM
├── Connection Pooling - Managed connections
├── Environment Variables - No hardcoded secrets
└── Audit Logging - All attacks logged
```

### Attack Detection Patterns
```typescript
// SQL Injection
const SQL_PATTERNS = [
  /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|UNION|ALTER)\b)/i,
  /(\bOR\b\s+\d+\s*=\s*\d+)/i,
  /(--|;|'|"|\bEXEC\b)/i,
]

// XSS
const XSS_PATTERNS = [
  /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
  /javascript:/i,
  /on\w+\s*=/i,
]

// Prompt Injection
const INJECTION_PATTERNS = [
  /ignore (previous|all|above) (instructions|prompts)/i,
  /you are now|act as|pretend to be/i,
  /system:|assistant:|user:/i,
  /reveal (your|the) (prompt|instructions)/i,
]
```

### Rate Limiting Strategy
| Endpoint | Limit | Window | Reason |
|----------|-------|--------|--------|
| `/api/chat` | 10 | 60s | Expensive LLM calls |
| `/api/hack-me` | 30 | 60s | Attack testing |
| `/api/analytics` | 100 | 60s | Read-only queries |
| `/api/attacks` | 50 | 60s | Log access |

---

## Database Design

### Entity Relationship Diagram
```
┌─────────────────┐
│   AttackLog     │
├─────────────────┤
│ id              │
│ timestamp       │
│ ipAddress       │
│ attackType      │──────────┐
│ severity        │          │
│ endpoint        │          │
│ payload         │          │
│ blocked         │          │
│ detectionMethod │          │
│ userAgent       │          │
│ country         │          │
│ responseCode    │          │
└─────────────────┘          │
                             │
┌─────────────────┐          │
│  ThreatIntel    │          │
├─────────────────┤          │
│ id              │          │
│ pattern         │──────────┘
│ category        │
│ occurrences     │
│ firstSeen       │
│ lastSeen        │
│ riskScore       │
└─────────────────┘

┌─────────────────┐
│  Conversation   │
├─────────────────┤
│ id              │
│ sessionId       │
│ messages        │ (JSON)
│ createdAt       │
│ updatedAt       │
│ ipAddress       │
│ blocked         │
└─────────────────┘

┌─────────────────┐
│    Project      │
├─────────────────┤
│ id              │
│ title           │
│ description     │
│ technologies    │ (String[])
│ githubUrl       │
│ liveUrl         │
│ imageUrl        │
│ featured        │
│ createdAt       │
└─────────────────┘
```

### Index Strategy
```sql
-- High-frequency queries
CREATE INDEX idx_attack_timestamp ON AttackLog(timestamp DESC);
CREATE INDEX idx_attack_type ON AttackLog(attackType);
CREATE INDEX idx_attack_blocked ON AttackLog(blocked);
CREATE INDEX idx_conversation_session ON Conversation(sessionId);
```

---

## API Design

### Endpoint Specifications

#### POST /api/chat
```typescript
// Request
{
  messages: Array<{ role: "user" | "assistant", content: string }>
}

// Response (Streaming)
text/event-stream with chunked response

// Error Responses
429 - Rate limited
400 - Invalid input
403 - Blocked (injection detected)
```

#### POST /api/hack-me
```typescript
// Request
{
  input: string  // Payload to test
}

// Response
{
  detected: boolean,
  attackType: "SQL_INJECTION" | "XSS" | "PROMPT_INJECTION" | null,
  severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL" | null,
  message: string
}
```

#### GET /api/analytics
```typescript
// Response
{
  totalAttacks: number,
  blockedAttacks: number,
  todayAttacks: number,
  attacksByType: { [type: string]: number },
  attacksBySeverity: { [severity: string]: number },
  recentAttacks: AttackLog[],
  threatLevel: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL",
  totalConversations: number,
  blockedRate: number
}
```

---

## Frontend Design

### Design System

#### Color Palette
```css
/* Background */
--bg-primary: slate-950    /* #020617 */
--bg-secondary: slate-900  /* #0f172a */
--bg-card: slate-800/50    /* rgba(30, 41, 59, 0.5) */

/* Text */
--text-primary: slate-100  /* #f1f5f9 */
--text-secondary: slate-300 /* #cbd5e1 */
--text-muted: slate-500    /* #64748b */

/* Accent */
--accent-primary: cyan-400  /* #22d3ee */
--accent-danger: red-500    /* #ef4444 */
--accent-success: green-500 /* #22c55e */
--accent-warning: yellow-500 /* #eab308 */
```

#### Component Variants
```tsx
// Button variants
<Button variant="default">Primary Action</Button>
<Button variant="outline">Secondary Action</Button>
<Button variant="ghost">Tertiary Action</Button>
<Button variant="destructive">Danger Action</Button>

// Badge variants
<Badge variant="default">Default</Badge>
<Badge variant="secondary">Info</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="outline">Outline</Badge>
```

### Responsive Breakpoints
```css
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1536px /* Extra large */
```

---

## Integration Points

### External Services
| Service | Purpose | Configuration |
|---------|---------|---------------|
| Supabase | PostgreSQL hosting | `DATABASE_URL` |
| Groq | LLM inference | `GROQ_API_KEY` |
| Arcjet | Edge security | `ARCJET_KEY` |
| Vercel | Deployment | Automatic |

### Internal Integrations
```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Prisma    │ ←── │   lib/db    │ ←── │ API Routes  │
│   Client    │     │  Singleton  │     │             │
└─────────────┘     └─────────────┘     └─────────────┘

┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Arcjet    │ ←── │ lib/arcjet  │ ←── │ API Routes  │
│   Service   │     │   config    │     │             │
└─────────────┘     └─────────────┘     └─────────────┘
```

---

## Design Decisions

### Decision Log

| Decision | Rationale | Alternatives Considered |
|----------|-----------|------------------------|
| Next.js App Router | Modern React patterns, server components | Pages Router, Remix |
| PostgreSQL | Relational data, Supabase integration | MongoDB, SQLite |
| Prisma ORM | Type safety, migrations | Drizzle, raw SQL |
| Groq LLM | Fast inference, cost-effective | OpenAI, Anthropic |
| Arcjet | Edge security, easy integration | Custom middleware |
| Tailwind CSS | Rapid styling, dark theme | CSS Modules, styled-components |

### Trade-offs
1. **Server Components vs Client Components**
   - Used client components only when interactivity needed
   - Stats components are client-side for real-time updates

2. **Streaming vs Batch Responses**
   - Chat uses streaming for better UX
   - Analytics uses batch for simpler caching

3. **Pattern Matching vs ML Detection**
   - Using regex for speed and transparency
   - ML would be more accurate but slower/costlier

---

*Last updated: February 2026*
