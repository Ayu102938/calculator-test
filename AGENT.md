# AI Development Rules

## Git Workflow

- Never commit or push directly to `main` or `master`.
- All AI work must use a branch starting with `ai/`.
- Before modifying files, verify the current branch.
- If the current branch is `main` or `master`, create a new branch:
  `ai/<task-name>`

Example:

```bash
git checkout -b ai/<task-name>
```

## Before Push

Before pushing:

1. Run relevant tests.
2. Check git diff.
3. Commit changes with a descriptive message.
4. Push only the `ai/*` branch.
5. Create a Pull Request targeting `main`.

Never merge the Pull Request automatically.
Never delete or rewrite the main branch.

## Exception: Project Initialization

The only allowed direct push to main is the initial project setup commit.
After that, all changes must go through ai/* branches and Pull Requests.

## Commit Messages

Use conventional commits:

- `feat:` new feature
- `fix:` bug fix
- `docs:` documentation
- `refactor:` code refactoring
- `test:` adding tests
- `chore:` maintenance
