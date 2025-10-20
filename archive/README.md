# Archive

This directory contains historical files, obsolete documents, and superseded materials organized by date.

## Purpose

Archive files that are no longer actively used but may be valuable for:
- Historical reference
- Understanding project evolution
- Recovery of previous implementations
- Audit trails

## Structure

Archives are organized by year-month (YYYY-MM format):

```
archive/
├── 2025-10/
│   ├── old-trds/          - Superseded technical requirement documents
│   ├── old-updates/       - Applied update files (v1-v6 JSON configs)
│   ├── assessments/       - Historical assessment reports
│   ├── test-prompts/      - Test and E2E prompt files
│   ├── build-artifacts/   - Build logs and outputs
│   └── duplicate-assets/  - Duplicate images and assets
└── extracted-pages-20251015/  - Legacy extracted page backups
```

## When to Archive

Archive files when:
- ✅ Document has been superseded by a newer version
- ✅ Feature/update has been successfully applied
- ✅ File is no longer referenced in active code
- ✅ Keeping for historical/audit purposes only

## What NOT to Archive

Do not archive:
- ❌ Currently referenced documentation
- ❌ Active configuration files
- ❌ Files needed for builds
- ❌ Critical project files

## Retention Policy

- Keep archives for at least 1 year
- Review annually for permanent deletion
- Major milestones: Keep indefinitely
