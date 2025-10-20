# .context/ - Conversation Input Materials

This folder is dedicated to storing documents and files that need to be referenced in Claude Code conversations.

## Purpose

Use this folder to organize materials you want to feed into AI coding conversations without cluttering the main repository structure.

## Structure

- **`current/`** - Place active conversation materials here (requirements, designs, notes, etc.)
- **`processed/`** - Move completed/archived conversation materials here

## Usage Examples

```
.context/
├── current/
│   ├── feature-requirements.md
│   ├── design-mockups.pdf
│   └── api-specification.json
└── processed/
    └── old-requirements.md
```

## Git Ignore

Contents of `current/` and `processed/` folders are gitignored by default to prevent accidental commits of private or temporary information. Only this README and .gitkeep files are tracked.

## Best Practices

1. **Keep it organized** - Use clear, descriptive filenames
2. **Move to processed/** - Archive materials when conversation/task is complete
3. **Don't commit** - Sensitive information stays local (already gitignored)
4. **Reference easily** - Use paths like `.context/current/requirements.md` in conversations
