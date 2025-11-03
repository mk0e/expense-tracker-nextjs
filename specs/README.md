# Feature Specifications

This directory contains implementation plans and reports for all features developed in this project.

## Structure

Each feature has its own subdirectory with the following files:

```
specs/
├── <feature-slug>/
│   ├── plan.md                    # Implementation plan
│   └── implementation-report.md   # Execution report
```

## Workflow

### 1. Plan a Feature

```bash
/plan-feature-impl <github-issue-url>
```

This command:
- Fetches the GitHub issue details
- Analyzes the current codebase
- Creates a detailed implementation plan
- Saves to `specs/<feature-slug>/plan.md`

### 2. Implement the Feature

```bash
/implement-plan <feature-slug>
```

This command:
- Reads the plan from `specs/<feature-slug>/plan.md`
- Executes changes across Database, Backend, and Frontend layers
- Tracks progress with todo lists
- Saves implementation report to `specs/<feature-slug>/implementation-report.md`

## Example

```bash
# Plan implementation for issue #42
/plan-feature-impl https://github.com/owner/repo/issues/42

# Execute the plan (assuming slug is "expense-categories")
/implement-plan expense-categories
```

This creates:
```
specs/
└── expense-categories/
    ├── plan.md
    └── implementation-report.md
```
