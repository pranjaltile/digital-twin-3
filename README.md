# Digital Twin III

> A Living, Learning, Self-Defending Digital Presence

An AI-powered cybersecurity portfolio demonstrating modern full-stack development with intelligent chatbot, real-time threat detection, and advanced security analytics.

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-5.22-2D3748?style=flat-square&logo=prisma)](https://www.prisma.io/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

## Features

### Three Pillars Architecture

#### 1. REPRESENT - AI-Powered Digital Twin
- Intelligent chatbot powered by Groq (Llama 3.3 70B)
- Real-time streaming responses with Vercel AI SDK
- Context-aware conversations about portfolio and projects
- Built-in prompt injection protection

#### 2. DEFEND - Multi-Layer Security System
- Arcjet security integration (bot detection, rate limiting, OWASP protection)
- Real-time attack detection and logging
- Attack pattern analysis (SQL injection, XSS, prompt injection, DDoS)
- Three-tier security validation (Arcjet → Pattern Matching → Database Logging)
- Live attack feed with severity classification

#### 3. LEARN - Advanced Analytics Dashboard
- Real-time security metrics and statistics
- Attack distribution by type and severity
- 24-hour and 7-day threat analysis
- Interactive data visualization
- Threat level monitoring (LOW → ELEVATED → HIGH → CRITICAL)

## Tech Stack

### Frontend
- **Framework:** Next.js 16.0 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **Icons:** Lucide React

### Backend
- **Runtime:** Node.js 20+
- **Database:** PostgreSQL (Supabase)
- **ORM:** Prisma 5.22
- **AI/LLM:** Groq API (Llama 3.3 70B Versatile)
- **Security:** Arcjet (bot detection, rate limiting, shield)
- **AI Framework:** Vercel AI SDK

### Infrastructure
- **Database Hosting:** Supabase (PostgreSQL)
- **Security Layer:** Arcjet
- **Deployment Ready:** Vercel-compatible

## Installation

### Prerequisites
- Node.js 20.11.1 or higher
- PostgreSQL database (Supabase recommended)
- Groq API key (free at [console.groq.com](https://console.groq.com))
- Arcjet API key (free at [arcjet.com](https://arcjet.com))

### Setup Steps

1. **Clone the repository**
```bash
git clone https://github.com/pranjaltile/digital-twin-3.git
cd digital-twin-3
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://user:password@host:5432/database?sslmode=require"

# AI/LLM
GROQ_API_KEY="your_groq_api_key_here"

# Security
ARCJET_KEY="your_arcjet_key_here"

# App Configuration
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NODE_ENV="development"
```

4. **Set up the database**
```bash
# Generate Prisma Client
npx prisma generate

# Push schema to database
npx prisma db push

# (Optional) Open Prisma Studio to view data
npx prisma studio
```

5. **Run the development server**
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your application.

## Database Schema

The application uses six core models:

- **AttackLog** - Security incident tracking with attack type and severity
- **ThreatIntel** - Aggregated threat patterns and insights
- **BlogPost** - Content management for blog articles
- **Project** - Portfolio project showcase
- **Conversation** - AI chatbot interaction history
- **AnalyticsEvent** - User behavior and event tracking

## Application Structure

### Home Page
- Hero section with call-to-action buttons
- Live attack statistics bar
- Real-time attack feed
- AI chatbot widget

### Dashboard (`/dashboard`)
- 24-hour and 7-day attack statistics
- Attack distribution by type and severity
- Threat level indicator
- Hourly attack rate monitoring

### Hack-Me Page (`/hack-me`)
- Ethical hacking playground
- Test security defenses with real attack patterns
- Live feedback on blocked attacks
- Educational security demonstrations

### Projects (`/projects`)
- Digital Twin 2 - AI-powered portfolio
- AuthJS Authentication System - OAuth integration
- Healthcare Referral App - HIPAA-compliant system

### Blog (`/blog`)
- Security research articles
- Technical tutorials
- AI and cybersecurity insights

### About (`/about`)
- Professional background
- Philosophy and approach
- Skills and expertise

## Security Features

### Attack Detection
- **Prompt Injection** - Pattern-based detection for LLM exploits
- **SQL Injection** - Database query attack prevention
- **XSS** - Cross-site scripting protection
- **Bot Traffic** - Automated bot detection and blocking
- **Rate Limiting** - Configurable request throttling
- **DDoS Protection** - Distributed attack mitigation

### Security Layers
1. **Arcjet Shield** - OWASP Top 10 protection
2. **Bot Detection** - AI-powered bot identification
3. **Rate Limiting** - Token bucket algorithm (100 req/60s standard, 10 req/60s chatbot)
4. **Pattern Matching** - Custom regex-based attack detection
5. **Database Logging** - Comprehensive attack audit trail

## Project Structure

```
digital-twin-3/
├── app/                      # Next.js app router
│   ├── api/                  # API routes
│   │   ├── attacks/          # Attack logging endpoints
│   │   ├── analytics/        # Dashboard statistics
│   │   ├── chat/             # AI chatbot endpoint
│   │   └── hack-me/          # Security testing endpoint
│   ├── about/                # About page
│   ├── blog/                 # Blog section
│   ├── dashboard/            # Analytics dashboard
│   ├── hack-me/              # Security playground
│   └── projects/             # Portfolio projects
├── components/               # React components
│   ├── ui/                   # Radix UI components
│   └── [feature components]  # Feature-specific components
├── lib/                      # Utility libraries
│   ├── db.ts                 # Prisma client
│   ├── arcjet-config.ts      # Security configurations
│   └── security-helpers.ts   # Attack detection utilities
├── prisma/                   # Database schema
│   └── schema.prisma         # Prisma schema definition
└── public/                   # Static assets
```

## Deployment

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel
1. Push to GitHub
2. Import repository in Vercel
3. Configure environment variables
4. Deploy

Environment variables needed in production:
- `DATABASE_URL`
- `GROQ_API_KEY`
- `ARCJET_KEY`
- `NEXT_PUBLIC_APP_URL`

## Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint

# Database commands
npm run db:generate  # Generate Prisma Client
npm run db:push      # Push schema to database
npm run db:migrate   # Run database migrations
npm run db:studio    # Open Prisma Studio
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Pranjal Tile**
- Full Stack Developer & Security Enthusiast
- Portfolio: [Live Demo](#)
- GitHub: [@pranjaltile](https://github.com/pranjaltile)

## Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Prisma](https://www.prisma.io/) - Next-generation ORM
- [Groq](https://groq.com/) - Fast AI inference
- [Arcjet](https://arcjet.com/) - Security platform
- [Supabase](https://supabase.com/) - Database hosting
- [Vercel](https://vercel.com/) - Deployment platform
- [Radix UI](https://www.radix-ui.com/) - UI components

## Support

If you have any questions or need help with setup, please open an issue in the repository.

---

Made with care by Pranjal Tile
