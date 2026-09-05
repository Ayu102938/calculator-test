# AI Development Rules

## Git Workflow

- Never commit or push directly to `main` or `develop`.
- All AI work must use a branch starting with `ai/`.
- **Always branch from `develop`**, never from `main`.
- Before modifying files, verify the current branch.
- If the current branch is `main` or `develop`, create a new branch:
  `ai/<task-name>`

Example:

```bash
git checkout develop
git pull origin develop
git checkout -b ai/<task-name>
```

## Branch Strategy

```
main (production)
  ↑
  └── develop (integration)
        ↑
        └── ai/<task-name> (feature branches)
```

## Before Push

Before pushing:

1. Run relevant tests.
2. Check git diff.
3. Commit changes with a descriptive message.
4. Push only the `ai/*` branch.
5. Create a Pull Request targeting `develop`.

Never merge the Pull Request automatically.
Never delete or rewrite the main or develop branch.

## PR Targets

- Feature work: `ai/*` → `develop`
- Releases: `develop` → `main` (user-managed only)

## Exception: Project Initialization

The only allowed direct push to main is the initial project setup commit.
After that, all changes must go through develop and ai/* branches.

## Commit Messages

Use conventional commits:

- `feat:` new feature
- `fix:` bug fix
- `docs:` documentation
- `refactor:` code refactoring
- `test:` adding tests
- `chore:` maintenance
