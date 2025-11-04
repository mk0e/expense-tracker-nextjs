# Expense Tracker (Next.js, TypeScript, Prisma)

A simple local expense tracker application built with Next.js 14, TypeScript, and Prisma (SQLite). Track your income and expenses with real-time balance calculations - no authentication required, single user local app.

<div style="text-align:center;margin:30px auto;">
  <img src="public/screenshot.png" alt="" width="500" style="margin: 0 auto;" />
</div>

## Features

- Add and delete income/expense transactions
- Real-time balance calculations
- Track total income and expenses
- Local SQLite database (no external services required)
- Built with Next.js App Router and Server Components
- Type-safe database access with Prisma

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Database**: SQLite with Prisma ORM
- **UI**: React Server Components
- **Notifications**: react-toastify

## Getting Started

### Install dependencies:

```bash
pnpm install
```

### Environment Setup:

The project includes a `.env` file with the SQLite database configuration:

```env
DATABASE_URL="file:./prisma/dev.db"
```

No additional environment variables are required.

### Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the app.

### Build for production:

```bash
pnpm build
pnpm start
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm db:reset` - Reset the database (delete all data)
- `pnpm prisma studio` - Open Prisma Studio to view/edit data
- `pnpm prisma db push` - Push schema changes to database

## Project Structure

- `app/` - Next.js App Router pages and layouts
- `app/actions/` - Server Actions for data mutations
- `components/` - Reusable React components
- `lib/` - Utility functions and database client
- `prisma/` - Database schema and SQLite database file

## Database Schema

Single `Transaction` model:
- `id` - Auto-incrementing primary key
- `text` - Transaction description
- `amount` - Transaction amount (positive = income, negative = expense)
- `createdAt` - Timestamp
