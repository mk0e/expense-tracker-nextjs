# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an expense tracker application built with Next.js 14, TypeScript, Prisma (SQLite), and Clerk authentication. The app allows authenticated users to track income and expenses with real-time balance calculations.

## Development Commands

```bash
# Install dependencies (also runs prisma generate)
npm install

# Run development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Generate Prisma client (runs automatically after npm install)
npx prisma generate

# Create and apply database migrations
npx prisma migrate dev

# Open Prisma Studio to view/edit data
npx prisma studio

# Reset database (warning: deletes all data)
npx prisma migrate reset
```

## Environment Setup

Required environment variables in `.env.local`:
- `DATABASE_URL`: Database connection string (currently using SQLite)
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: Clerk public key
- `CLERK_SECRET_KEY`: Clerk secret key

## Architecture

### Authentication Flow

Uses Clerk for authentication with a dual-user model:
1. Clerk manages authentication and user sessions
2. Local database stores user records linked via `clerkUserId`
3. The `checkUser()` utility (lib/checkUser.ts) synchronizes Clerk users with local database on first login
4. Server actions use `auth()` from Clerk to get `userId` for authorization

### Database Schema

Two main models in Prisma schema:
- **User**: Linked to Clerk users via `clerkUserId`, stores basic profile info
- **Transaction**: Expense/income records with `amount` (positive = income, negative = expense), cascades on user deletion

### Server Actions Pattern

All data mutations use Next.js Server Actions (marked with `'use server'`):
- Located in `app/actions/` directory
- Accept FormData and return typed result objects with `data` or `error` fields
- Call `revalidatePath('/')` after mutations to refresh UI
- Examples: `addTransaction.ts`, `deleteTransaction.ts`, `getUserBalance.ts`, `getIncomeExpense.ts`, `getTransactions.tsx`

### Component Architecture

Uses App Router with React Server Components (RSC):
- **Server Components** (default): Fetch data directly, used for Balance, IncomeExpense, TransactionList
- **Client Components** (`'use client'`): Handle forms, interactions, and client-side state (AddTransaction, TransactionItem)
- Page components in `app/` render conditionally based on auth state (Guest vs authenticated UI)
- Reusable UI components in `components/` directory

### Data Fetching Pattern

Server Components call action functions directly to fetch data:
```typescript
const { balance } = await getUserBalance();
```

Client Components use server actions via form actions or transitions.

### Database Access

Centralized Prisma client in `lib/db.ts` prevents multiple instances in development (hot reload safe).

### Path Aliases

Uses `@/*` path alias mapping to project root (configured in tsconfig.json).
