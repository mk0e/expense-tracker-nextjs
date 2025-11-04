# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a simple expense tracker application built with Next.js 14, TypeScript, and Prisma (SQLite). The app allows users to track income and expenses with real-time balance calculations.

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

# Push schema changes to database (development)
npx prisma db push

# Reset database (delete and recreate)
npm run db:reset

# Prisma Best Practices for Development
# For SQLite: Use 'npx prisma db push' instead of 'npx prisma migrate dev'
# After schema changes: Run 'npx prisma generate' twice with a delay to ensure types update fully

# Open Prisma Studio to view/edit data
npx prisma studio
```

## Environment Setup

Required environment variables in `.env.local`:
- `DATABASE_URL`: Database connection string (currently using SQLite)

## Architecture

### Database Schema

Single model in Prisma schema:
- **Transaction**: Expense/income records with `amount` (positive = income, negative = expense), `text` description, and `createdAt` timestamp

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
- Page components in `app/` directory
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

## Project Conventions

### Libraries and Patterns

- **Toast Notifications**: Use `react-toastify` (already installed). Do NOT use `react-hot-toast` or other toast libraries.
- **Prisma Type Imports**: Use `import type { Model } from '@prisma/client'` for type-only imports to avoid runtime overhead.

### Code Consistency

Before creating new code:
1. Check existing codebase for established patterns (component structure, import styles, library choices)
2. Match existing conventions for Server/Client Components
3. Use the same libraries and approaches already in the project
4. Ensure new components follow the established RSC patterns
