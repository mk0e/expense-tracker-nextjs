---
description: Execute implementation from feature plan
argument-hint: <feature-slug>
allowed-tools: Write, Edit, Read, Bash, TodoWrite, Glob, Grep, mcp__puppeteer__puppeteer_navigate, mcp__puppeteer__puppeteer_screenshot, mcp__puppeteer__puppeteer_click, mcp__puppeteer__puppeteer_fill, mcp__puppeteer__puppeteer_evaluate
---

Execute the feature implementation for: $ARGUMENTS

**IMPORTANT: DO NOT create unit tests, integration tests, or any test files during implementation.**

## Steps

1. **Create Feature Branch**:
   - Create and checkout a new branch: `git checkout -b feature/$ARGUMENTS`
   - Confirm branch creation with user

2. **Read the Plan**: Load and parse `specs/$ARGUMENTS/plan.md` to understand all required changes

3. **Create Todo List**: Use TodoWrite to create tasks for each implementation step:
   - Database changes
   - Backend changes
   - Frontend changes
   - **DO NOT create testing tasks**

4. **Implement in Order**: Execute each step sequentially, marking todos as in_progress/completed:

   **Phase 1 - Database**:
   - Update `prisma/schema.prisma` with new models/fields
   - Run `npx prisma generate`
   - Create migration: `npx prisma migrate dev --name <feature-name>`

   **Phase 2 - Backend**:
   - Create new server actions in `app/actions/`
   - Modify existing server actions as needed
   - Create utility functions in `lib/` if required
   - Follow patterns: `'use server'`, auth(), error handling, revalidatePath()

   **Phase 3 - Frontend**:
   - Create new components (mark `'use client'` for interactive components)
   - Modify existing components
   - Create new pages/routes if needed
   - Follow patterns: RSC by default, Client Components for forms/interactions

5. **Smoke Test with Puppeteer**:
   - Create screenshots folder: `specs/$ARGUMENTS/screenshots/`
   - Start dev server in background: `npm run dev` (if not already running)
   - Wait for server to be ready (check for "Ready" message or port 3000)
   - Use Puppeteer to perform simple verification tests:
     - Navigate to `http://localhost:3000`
     - Take screenshot of main page, save to `specs/$ARGUMENTS/screenshots/01-main-page.png`
     - Test basic feature functionality (e.g., click buttons, fill forms related to the feature)
     - Verify no obvious errors in console using puppeteer_evaluate
     - Take screenshots of key states, save to `specs/$ARGUMENTS/screenshots/` with descriptive names (02-feature-state.png, etc.)
   - Stop the dev server after testing
   - Report any issues found and update todo list

6. **Create Implementation Report**: Save to `specs/$ARGUMENTS/implementation-report.md`:

```markdown
# Implementation Report: [Feature]

## Date: [Current Date]

## Summary
[Brief overview of implementation]

## Files Created
- List of new files with descriptions

## Files Modified
- List of modified files with changes made

## Commands Executed
- Database migrations run
- Other commands executed

## Smoke Testing Results (Puppeteer)
- Screenshots folder: `screenshots/`
- Screenshots captured:
  - `screenshots/01-main-page.png` - Main page initial state
  - `screenshots/02-feature-state.png` - [Description]
  - [Additional screenshots...]
- Pages verified: [list of pages/routes tested]
- Interactive elements tested: [buttons, forms, etc.]
- Console errors: [none / list any found]
- Overall status: [Pass / Issues Found]

## Issues Encountered
- Any problems and how they were resolved

## Next Steps
- Manual testing recommendations
- Any follow-up tasks needed
```

Follow project conventions from CLAUDE.md and match existing code style.

**Remember: Do not create any test files (.test.ts, .spec.ts, etc.) or implement unit/integration tests.**
