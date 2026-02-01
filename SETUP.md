# Digital Twin III - Setup Guide

## 🚀 Getting Started

Your Digital Twin III infrastructure is ready! Follow these steps to launch your cybersecurity portfolio.

---

## 📋 Prerequisites

You need:
- **Node.js** v20.19+ (Your current: v20.11.1 - needs update)
- **PostgreSQL** database (local or cloud)
- **OpenAI API Key** (for AI chatbot)
- **Arcjet API Key** (for security features)

---

## Step 1: Update Node.js

Your current Node version (20.11.1) is too old for Prisma 7. Update it:

**Option A - Using nvm (recommended):**
```powershell
nvm install 20.19.0
nvm use 20.19.0
```

**Option B - Download from nodejs.org:**
https://nodejs.org/en/download/

---

## Step 2: Install Dependencies

After updating Node.js:

```powershell
cd C:\Users\Avani\Desktop\digital-twin-3\digital-twin-3
npm install
```

This will install:
- ✅ Prisma (database ORM)
- ✅ @arcjet/next (security layer)
- ✅ OpenAI + AI SDK (chatbot)
- ✅ All frontend dependencies

---

## Step 3: Set Up Database

### Option A: Local PostgreSQL

1. Install PostgreSQL: https://www.postgresql.org/download/windows/
2. Create database:
```sql
CREATE DATABASE digitaltwin3;
```

### Option B: Cloud Database (Recommended)

Use **Supabase** (free tier):
1. Go to https://supabase.com
2. Create new project
3. Copy connection string

---

## Step 4: Environment Variables

Create `.env` file (copy from `.env.example`):

```powershell
cp .env.example .env
```

Edit `.env` and fill in:

```env
# Database - Get from Supabase or local PostgreSQL
DATABASE_URL="postgresql://user:password@host:5432/digitaltwin3"

# OpenAI - Get from https://platform.openai.com/api-keys
OPENAI_API_KEY="sk-proj-..."

# Arcjet - Get from https://app.arcjet.com
ARCJET_KEY="ajkey_..."

# App
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NODE_ENV="development"
```

---

## Step 5: Initialize Database

Run Prisma migrations to create all tables:

```powershell
npx prisma migrate dev --name init
```

This creates:
- `AttackLog` - Security incident tracking
- `ThreatIntel` - Aggregated threat data
- `BlogPost` - AI-generated content
- `Project` - Portfolio projects
- `Conversation` - Chatbot interactions
- `AnalyticsEvent` - User behavior

Generate Prisma client:

```powershell
npx prisma generate
```

---

## Step 6: Run Development Server

```powershell
npm run dev
```

Visit: **http://localhost:3000**

---

## 🎯 Test Your Three Pillars

### 1️⃣ REPRESENT (AI Chatbot)
- Click chat icon in navbar
- Ask: "What is your cybersecurity experience?"
- Should get AI-powered response

### 2️⃣ DEFEND (Security Layer)
- Go to `/hack-me` page
- Try SQL injection: `'; DROP TABLE users--`
- Should see attack blocked in real-time

### 3️⃣ LEARN (Analytics Dashboard)
- Go to `/dashboard`
- View live attack statistics
- See threat charts and logs

---

## 🛡️ How to Get API Keys

### Arcjet (Security)
1. Go to https://app.arcjet.com
2. Sign up (free tier available)
3. Create new site/app
4. Copy API key → `.env` as `ARCJET_KEY`

### OpenAI (Chatbot)
1. Go to https://platform.openai.com
2. Create account
3. Add payment method (pay-as-you-go)
4. Generate API key → `.env` as `OPENAI_API_KEY`

### Supabase (Database - Optional)
1. Go to https://supabase.com
2. Create new project
3. Go to Settings → Database
4. Copy connection string (pooling mode)
5. Paste → `.env` as `DATABASE_URL`

---

## 📁 Project Structure

```
digital-twin-3/
├── app/
│   ├── api/
│   │   ├── attacks/route.ts      # Attack logging API
│   │   ├── analytics/route.ts    # Dashboard data API
│   │   ├── chat/route.ts         # AI chatbot API
│   │   └── hack-me/route.ts      # Ethical hacking API
│   ├── dashboard/page.tsx        # Analytics dashboard
│   ├── hack-me/page.tsx          # Ethical hacking zone
│   └── ...other pages
├── components/
│   ├── chatbot-widget.tsx        # AI assistant (connected)
│   ├── attack-log.tsx            # Live attack feed (connected)
│   ├── stats-cards.tsx           # Analytics cards (connected)
│   └── ...other components
├── lib/
│   ├── db.ts                     # Prisma client
│   └── arcjet-config.ts          # Security rules
├── prisma/
│   └── schema.prisma             # Database schema
└── .env                          # Your secrets (create this!)
```

---

## 🔥 Quick Commands

```powershell
# Install dependencies
npm install

# Run development server
npm run dev

# Database migrations
npx prisma migrate dev

# View database
npx prisma studio

# Build for production
npm run build

# Start production server
npm start
```

---

## 🐛 Troubleshooting

### "Module not found: @prisma/client"
```powershell
npx prisma generate
```

### "Database connection failed"
- Check `.env` DATABASE_URL is correct
- Ensure PostgreSQL is running
- Test connection in Prisma Studio: `npx prisma studio`

### "Arcjet API key invalid"
- Verify key in https://app.arcjet.com
- Check `.env` has `ARCJET_KEY="ajkey_..."`
- Restart dev server after changing .env

### "OpenAI API error"
- Verify API key at https://platform.openai.com/api-keys
- Check billing is enabled
- Ensure you have credits

---

## 🎓 Next Steps

1. **Customize AI Persona**: Edit `/app/api/chat/route.ts` system prompt
2. **Add Blog Posts**: Create API for AI to write content
3. **Deploy to Vercel**: Push to GitHub, connect to Vercel
4. **Add More Defenses**: Expand Arcjet rules in `/lib/arcjet-config.ts`
5. **Create MCP Tools**: Let AI manage blog/projects autonomously

---

## 📚 Documentation References

- **Prisma**: https://www.prisma.io/docs
- **Arcjet**: https://docs.arcjet.com
- **Vercel AI SDK**: https://sdk.vercel.ai/docs
- **Next.js**: https://nextjs.org/docs

---

## 🌟 Your Digital Twin is Ready!

You've built:
- ✅ Real-time attack detection & logging
- ✅ AI-powered chatbot with security guards
- ✅ Analytics dashboard with live metrics
- ✅ Ethical hacking playground
- ✅ Production-grade cybersecurity architecture

**This is your resume. This is your proof of skill. Deploy it and show the world.**

---

Made with 🛡️ by Digital Twin III
