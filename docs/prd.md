# Product Requirements Document (PRD)
## Digital Twin III - AI-Powered Cybersecurity Portfolio

> This document serves as persistent context for AI agents (GitHub Copilot, Claude, ChatGPT) working on this codebase.

---

## AI Study URLs

### Core Documentation
- [Next.js 16 App Router](https://nextjs.org/docs/app)
- [Prisma ORM Documentation](https://www.prisma.io/docs)
- [Vercel AI SDK](https://sdk.vercel.ai/docs)
- [Arcjet Security Platform](https://docs.arcjet.com/)
- [Groq API Documentation](https://console.groq.com/docs)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [Radix UI Components](https://www.radix-ui.com/docs/primitives)

### Security References
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [OWASP API Security Top 10](https://owasp.org/API-Security/)
- [Prompt Injection Prevention](https://simonwillison.net/2022/Sep/12/prompt-injection/)

---

## Technical Requirements

### Tech Stack (Mandatory)
| Layer | Technology | Version |
|-------|------------|---------|
| Framework | Next.js (App Router) | 16.0.10 |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 4.x |
| UI Components | Radix UI | Latest |
| Icons | Lucide React | 0.454.0 |
| Database | PostgreSQL (Supabase) | - |
| ORM | Prisma | 5.22 |
| AI/LLM | Groq (Llama 3.3 70B) | - |
| AI Framework | Vercel AI SDK | 6.x |
| Security | Arcjet | 1.0.0 |
| Runtime | Node.js | 20+ |

### Environment Variables Required
```env
DATABASE_URL        # PostgreSQL connection string (Supabase)
GROQ_API_KEY        # Groq API for LLM inference
ARCJET_KEY          # Arcjet security platform key
NEXT_PUBLIC_APP_URL # Application URL
```

---

## Functional Requirements

### Three Pillars Architecture

#### Pillar 1: REPRESENT (AI Digital Twin)
- [x] Chatbot widget with real-time streaming responses
- [x] Groq Llama 3.3 70B integration via Vercel AI SDK
- [x] Prompt injection detection and blocking
- [x] Conversation logging to database
- [ ] Context-aware responses about portfolio/projects

#### Pillar 2: DEFEND (Multi-Layer Security)
- [x] Arcjet integration (shield, bot detection, rate limiting)
- [x] SQL injection pattern detection
- [x] XSS attack pattern detection
- [x] Prompt injection pattern detection
- [x] Attack logging to PostgreSQL
- [x] `/hack-me` ethical hacking playground
- [x] Real-time attack visualization

#### Pillar 3: LEARN (Analytics Dashboard)
- [x] `/dashboard` with real-time attack statistics
- [x] Attack distribution by type and severity
- [x] Threat level calculation (LOW → CRITICAL)
- [x] Conversation count tracking
- [x] Blocked rate percentage calculation

### Pages
| Route | Status | Description |
|-------|--------|-------------|
| `/` | ✅ Complete | Hero, stats bar, chatbot widget |
| `/projects` | ✅ Complete | Project grid with images |
| `/about` | ✅ Complete | Professional background, skills |
| `/dashboard` | ✅ Complete | Security analytics |
| `/hack-me` | ✅ Complete | Attack testing playground |

### API Routes
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/chat` | POST | AI chatbot with security layers |
| `/api/attacks` | GET/POST | Attack log CRUD |
| `/api/analytics` | GET | Dashboard statistics |
| `/api/hack-me` | POST | Attack testing endpoint |

---

## Non-Functional Requirements

### Performance
- First Contentful Paint (FCP): < 1.5s
- Time to Interactive (TTI): < 3s
- API response time: < 500ms (except LLM streaming)
- Rate limits: 100 req/60s standard, 10 req/60s chatbot

### Security
- All API routes protected by Arcjet
- No sensitive data in client-side code
- Prompt injection patterns blocked before LLM
- All attacks logged with IP, timestamp, payload
- HTTPS required in production

### Scalability
- Stateless API design
- Database connection pooling via Prisma
- Vercel-compatible for edge deployment

---

## Acceptance Criteria

### Chatbot
- [ ] Responds within 2 seconds of user input
- [ ] Streams responses character-by-character
- [ ] Blocks known prompt injection patterns
- [ ] Logs all conversations to database

### Security Dashboard
- [ ] Displays real data from database (no hardcoded values)
- [ ] Updates every 30 seconds
- [ ] Shows accurate blocked percentage
- [ ] Calculates correct threat level

### Hack-Me Page
- [ ] Detects SQL injection, XSS, prompt injection patterns
- [ ] Returns detection result with severity
- [ ] Logs all attempts to database
- [ ] Updates live demonstration feed

---

## Database Schema Reference

See `prisma/schema.prisma` for complete schema.

### Active Models
- `AttackLog` - Security incident tracking
- `Conversation` - AI chat history

### Defined but Unused
- `BlogPost` - Content management (blog removed)
- `Project` - Portfolio projects (hardcoded currently)
- `ThreatIntel` - Aggregated patterns
- `AnalyticsEvent` - Visitor tracking

---

## File Structure Reference

```
app/
├── api/chat/route.ts       # AI chatbot endpoint
├── api/attacks/route.ts    # Attack logging
├── api/analytics/route.ts  # Dashboard stats
├── api/hack-me/route.ts    # Attack testing
├── dashboard/page.tsx      # Analytics page
├── hack-me/page.tsx        # Attack playground
├── projects/page.tsx       # Portfolio
└── about/page.tsx          # About page

components/
├── chatbot-widget.tsx      # Floating AI chat
├── attack-vectors.tsx      # Hack-me attack forms
├── stats-bar.tsx           # Homepage stats
├── stats-cards.tsx         # Dashboard cards
└── ui/                     # Radix UI components

lib/
├── arcjet-config.ts        # Security configurations
├── db.ts                   # Prisma client
└── security-helpers.ts     # Attack detection
```

---

*Last updated: February 2026*
