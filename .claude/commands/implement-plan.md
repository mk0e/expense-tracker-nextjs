---
description: Execute implementation from feature plan
argument-hint: <feature-slug>
allowed-tools: Write, Edit, Read, Bash, TodoWrite, Glob, Grep
---

Execute the feature implementation for: $ARGUMENTS

## Steps

1. **Read the Plan**: Load and parse `specs/$ARGUMENTS/plan.md` to understand all required changes

2. **Create Todo List**: Use TodoWrite to create tasks for each implementation step:
   - Database changes
   - Backend changes
   - Frontend changes
   - Testing tasks

3. **Implement in Order**: Execute each step sequentially, marking todos as in_progress/completed:

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

4. **Verify Changes**:
   - Run `npm run lint` to check for issues
   - Update todo list with any issues found

5. **Create Implementation Report**: Save to `specs/$ARGUMENTS/implementation-report.md`:

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

## Testing Checklist
- [ ] Database schema updated correctly
- [ ] Server actions working as expected
- [ ] Components render properly
- [ ] Forms submit and validate correctly
- [ ] Authentication/authorization working
- [ ] Error handling tested
- [ ] Linting passes

## Issues Encountered
- Any problems and how they were resolved

## Next Steps
- Manual testing recommendations
- Any follow-up tasks needed
```

Follow project conventions from CLAUDE.md and match existing code style.
