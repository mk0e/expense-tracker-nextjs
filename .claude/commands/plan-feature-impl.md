---
description: Plan feature implementation from GitHub issue
argument-hint: <github-issue-url>
allowed-tools: Bash(gh *, mkdir *), Write, Read
---

Create an implementation plan for the GitHub issue: $ARGUMENTS

1. Fetch the github issue details
2. Create feature folder: `specs/<feature-slug>/` (derive slug from issue title)
3. Read CLAUDE.md and review `prisma/schema.prisma`, `app/actions/`, and `components/`
4. Plan changes across Database, Backend, and Frontend layers
5. Identify dependencies, potential issues, and execution order
6. **DO NOT** include test creation in the plan
7. Save to `specs/<feature-slug>/plan.md` using this structure:

```markdown
# Implementation Plan: [Title]

## Issue: [URL]

## Overview
[Brief feature summary]

## Database Changes
- New/modified Prisma models with code examples
- Migrations required

## Backend Changes
- New server actions in `app/actions/`
- Modified existing actions
- New utilities in `lib/`

## Frontend Changes
- New components (Server/Client) in `components/`
- Modified components
- New pages/routes

## Dependencies
- New packages needed
- Potential issues and mitigations

## Implementation Steps
1. Database: Update `prisma/schema.prisma`, run migrations
2. Backend: Create/modify server actions
3. Frontend: Create/modify components and pages

## Complexity
Database: [Low/Medium/High] | Backend: [Low/Medium/High] | Frontend: [Low/Medium/High]
```

Output to user:
- Feature slug used: `<feature-slug>`
- Plan saved to: `specs/<feature-slug>/plan.md`
- Summary of main components, complexity, and blockers
- Next step: Run `/implement-plan <feature-slug>`
