# Repository instructions

## Project purpose

This repository maintains the AI Safety Standards & Publications Matrix. `index.html` is the current source of truth unless a later repository document explicitly designates a structured data source.

## Standards audit workflow

- Before any scheduled or requested standards audit, read `docs/maintenance/standards-audit.md` and the latest relevant entry in `docs/maintenance/audit-log.md`.
- Begin with `git status --short`. If it prints any tracked, staged, untracked, or conflicted path, do not edit files. Report that the audit is blocked and list the paths.
- Do not commit, push, publish, open pull requests, or change repository or GitHub settings as part of an audit.
- Use only authoritative primary sources for factual matrix changes.
- Preserve the matrix schema, behavior, visual design, and the explicit distinction between issuer facts and the editorial Physical-AI relevance rating.
- Leave supported changes as an uncommitted diff for human review.

## Products audit workflow

- Before any scheduled or requested products-and-vendors audit, read docs/maintenance/products-audit.md and the latest relevant entry in docs/maintenance/products-audit-log.md.
- Begin with git status --short. If it prints any tracked, staged, untracked, or conflicted path, do not edit files. Report that the audit is blocked and list the paths.
- Do not commit, push, publish, open pull requests, or change repository or GitHub settings as part of an audit.
- Use provider, official acquirer, product-documentation, or other authoritative primary sources for factual matrix changes. Discovery catalogues may identify candidates but are not evidence or endorsements.
- Preserve the product matrix schema, behavior, visual design, and the explicit editorial status of standards relevance and Physical-AI relevance.
- Leave supported changes as an uncommitted diff for human review.

## General editing rules

- Keep project-specific maintenance instructions and material audit decisions in this repository.
- Avoid unrelated formatting or wording churn.
- Do not install dependencies for validation.
