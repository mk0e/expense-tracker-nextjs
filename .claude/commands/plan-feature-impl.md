---
description: Plan feature implementation from GitHub issue
argument-hint: <github-issue-url>
allowed-tools: Bash(gh *, mkdir *), Write, Read, mcp__context7__resolve-library-id, mcp__context7__get-library-docs
---

Create an implementation plan for the GitHub issue: $ARGUMENTS

1. Fetch the github issue details
2. Create feature folder: `specs/<feature-slug>/` (derive slug from issue title)
3. Read CLAUDE.md and review `prisma/schema.prisma`, `app/actions/`, and `components/`
4. **Identify required libraries**: Analyze the feature requirements and determine which libraries will be needed:
   - Check `package.json` for existing libraries (Next.js, Prisma, React, etc.)
   - Identify any new libraries that may need to be installed
   - For each key library that will be used for this feature, use context7 MCP tools:
     - Use `resolve-library-id` to get the Context7-compatible library ID
     - Use `get-library-docs` to fetch relevant documentation focusing on the specific functionality needed
     - Example: For a feature using Next.js App Router, fetch docs about routing, server components, or server actions
5. Plan changes across Database, Backend, and Frontend layers
6. Identify dependencies, potential issues, and execution order
7. **DO NOT** include test creation in the plan
8. Save to `specs/<feature-slug>/plan.md` using this structure:

```markdown
# Implementation Plan: [Title]

## Issue: [URL]

## Overview
[Brief feature summary]

## Library Documentation Insights
[Key insights from context7 documentation lookups that inform this implementation]
- **Next.js**: [Relevant patterns, APIs, or best practices for this feature]
- **Prisma**: [Schema patterns, query methods, or migration approaches]
- **[Other Libraries]**: [Relevant usage patterns]
- **New Libraries Needed**: [Any additional libraries and how they'll be used]

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
