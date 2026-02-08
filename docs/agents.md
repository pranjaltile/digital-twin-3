# AI Agent Instructions
## Digital Twin III - Context for AI Development Tools

> This file provides project-specific context for GitHub Copilot, Claude, ChatGPT, and other AI coding assistants.

---

## Project Overview

**Digital Twin III** is a cybersecurity portfolio application built on three pillars:
1. **REPRESENT** - AI chatbot as digital presence
2. **DEFEND** - Multi-layer security with real attack detection
3. **LEARN** - Analytics dashboard with real-time metrics

---

## Tech Stack (Use These Exact Versions)

```yaml
Framework: Next.js 16 (App Router)
Language: TypeScript 5.x (strict mode)
Styling: Tailwind CSS 4.x
UI: Radix UI primitives + shadcn/ui patterns
Icons: Lucide React
Database: PostgreSQL via Supabase
ORM: Prisma 5.22
AI: Groq API (Llama 3.3 70B) + Vercel AI SDK
Security: Arcjet (bot detection, rate limiting, shield)
```

---

## Coding Standards

### File Naming
- Components: `kebab-case.tsx` (e.g., `chatbot-widget.tsx`)
- API routes: `route.ts` inside route folders
- Utilities: `kebab-case.ts` in `lib/`

### Component Patterns
```tsx
// Use "use client" only when needed (interactivity, hooks)
"use client"

// Import order: React → Next → External → Internal → Types
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { someHelper } from "@/lib/utils"
```

### API Route Pattern
```typescript
// Always protect with Arcjet
const decision = await aj.protect(req, { requested: 1 })
if (decision.isDenied()) {
  return NextResponse.json({ error: "Denied" }, { status: 429 })
}

// Log security events to database
await prisma.attackLog.create({ data: { ... } })
```

### Styling
- Use Tailwind utility classes
- Dark theme: `bg-slate-950`, `text-slate-300`, `border-slate-700`
- Accent: `cyan-400/500/600` for primary, `red-500/600` for danger
- Glass effect: `glass-dark` class, `backdrop-blur`

---

## Key Files to Reference

| Purpose | File Path |
|---------|-----------|
| Requirements | `docs/prd.md` |
| Database Schema | `prisma/schema.prisma` |
| Security Config | `lib/arcjet-config.ts` |
| Prisma Client | `lib/db.ts` |
| AI Chatbot API | `app/api/chat/route.ts` |
| Attack Detection | `app/api/hack-me/route.ts` |
| Analytics API | `app/api/analytics/route.ts` |

---

## Security Rules (ALWAYS Follow)

1. **Never expose API keys** in client components
2. **Always use Arcjet** on API routes: `aj.protect(req)`
3. **Log all attacks** to `prisma.attackLog.create()`
4. **Validate inputs** before passing to LLM
5. **Block prompt injection** patterns before AI processing:
   ```typescript
   const INJECTION_PATTERNS = [
     /ignore (previous|all|above) (instructions|prompts)/i,
     /you are now|act as|pretend to be/i,
     /system:|assistant:|user:/i,
     /reveal (your|the) (prompt|instructions)/i,
   ]
   ```

---

## Database Queries (Prisma)

```typescript
// Import the singleton client
import { prisma } from "@/lib/db"

// Create attack log
await prisma.attackLog.create({
  data: {
    ipAddress: "...",
    attackType: "SQL_INJECTION",
    severity: "HIGH",
    endpoint: "/api/chat",
    payload: userInput,
    blocked: true,
    detectionMethod: "pattern-matching",
  },
})

// Get analytics
const stats = await prisma.attackLog.count({
  where: { timestamp: { gte: last24Hours } },
})
```

---

## Component Library

Use existing components from `components/ui/`:
- `Button` - Primary actions
- `Card` - Content containers
- `Badge` - Tags and labels
- `Input` - Form inputs

Custom components in `components/`:
- `ChatbotWidget` - Floating AI chat
- `Navbar` - Navigation
- `StatsBar` - Homepage metrics
- `AttackVectors` - Hack-me forms

---

## API Response Patterns

### Success
```typescript
return NextResponse.json({ success: true, data: {...} })
```

### Error
```typescript
return NextResponse.json({ error: "Message" }, { status: 4xx })
```

### Streaming (AI Chat)
```typescript
const result = streamText({
  model: groq("llama-3.3-70b-versatile"),
  messages: [...],
})
return result.toTextStreamResponse()
```

---

## What NOT To Do

- ❌ Don't use `pages/` directory (we use App Router)
- ❌ Don't add new dependencies without checking `package.json` first
- ❌ Don't hardcode statistics (fetch from `/api/analytics`)
- ❌ Don't skip Arcjet protection on API routes
- ❌ Don't use `getServerSideProps` (use Server Components or Route Handlers)
- ❌ Don't commit `.env` files

---

## Quick Commands

```bash
npm run dev          # Start dev server (localhost:3000)
npm run build        # Production build
npm run db:push      # Push schema to database
npm run db:studio    # Open Prisma Studio
```

---

## When In Doubt

1. Check `docs/prd.md` for requirements
2. Check `prisma/schema.prisma` for data models
3. Check `lib/arcjet-config.ts` for security setup
4. Follow existing patterns in similar files

---

*This file is read automatically by AI coding assistants. Keep it updated.*
