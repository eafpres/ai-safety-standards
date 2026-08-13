# AI safety standards audit playbook

This playbook is the canonical workflow for maintaining the AI Safety Standards & Publications Matrix. The external Codex automation should contain only its schedule, repository target, and an instruction to follow this file and the root `AGENTS.md`.

## 1. Preflight gate

Run `git status --short` before reading external sources or editing files.

- If the command prints any path, stop without editing.
- Report every changed, staged, untracked, or conflicted path.
- Do not stash, discard, reset, clean, commit, or otherwise modify the existing worktree.

## 2. Repository context

- Read `AGENTS.md`, this playbook, and the latest relevant entry in `audit-log.md`.
- Treat `index.html` as the source of truth unless the repository later contains explicit maintenance documentation that designates structured data files.
- Inspect the embedded data before research so the audit prioritizes current drafts, work items, revision markers, and potentially fragile links.

## 3. Research scope

Review authoritative primary sources for material changes since the most recent recorded material audit. Cover all issuer families represented in the matrix:

- ISO/IEC
- IEEE
- IEC
- UL Standards & Engagement
- NIST
- European Union and CEN-CENELEC
- ETSI
- Automotive sources, including ISO, SAE International, and UNECE WP.29
- Medical and health sources, including ISO/IEC, IMDRF, FDA, and EUR-Lex
- Aviation sources, including EASA, EUROCAE, FAA, RTCA, and SAE International
- Government and professional bodies represented in the data

Prioritize:

1. Draft or work-item status transitions.
2. Withdrawn, replaced, or superseded publications.
3. New editions, amendments, corrigenda, and revisions.
4. New publications directly relevant to AI safety or assurance.
5. Changed conformity-assessment, certification, type-approval, or legal significance.
6. Broken or redirected authoritative links.

Use only issuer, regulator, standards-body, treaty-office, or other primary official sources for factual updates. Search-result snippets can help locate a source but are not evidence. Open the official page or official document and verify the claim there.

## 4. Evidence standard

For every proposed data change, capture in the audit report and, when a material edit is made, in `audit-log.md`:

- Publication identifier and affected field.
- Exact official source URL.
- Official status, date, lifecycle stage, legal milestone, or other evidence supporting the change.
- Whether the change is a confirmed issuer fact or an editorial judgment.

Do not guess when a source is unavailable or ambiguous. Do not add speculative publication dates, draft milestones, certification schemes, or claims of legal presumption.

Physical-AI relevance is always editorial. Do not describe a High, Medium, or Low rating as an issuer designation.

## 5. Editing rules

- Edit `index.html` only when official evidence supports a material matrix change.
- Preserve every required field: `issuer`, `publication`, `title`, `date`, `status`, `category`, `domain`, `physical`, `summary`, `conformity`, `access`, and `url`.
- Preserve sorting, filtering, pagination, CSV export, counts, layout, and visual design.
- Avoid wording-only churn.
- Prefer an official HTTPS URL when one exists.
- Do not introduce duplicate publication identifiers.
- When matrix data materially changes, update the fallback `Last updated` date in the HTML to the current local date. Otherwise leave it unchanged.
- Append a concise entry to `audit-log.md` only when a material matrix change is made. A no-change audit must not edit repository files.

## 6. Validation

Run available local checks without installing dependencies:

1. Evaluate the embedded data as JavaScript.
2. Confirm every row contains all required fields.
3. Check for duplicate publication identifiers.
4. Check that official URLs use HTTPS where available.
5. Recalculate publication, issuer, current-status, and Physical-AI counts.
6. Exercise representative search, single-filter, and combined-filter cases.
7. Run `git diff --check`.
8. Review `git diff -- index.html docs/maintenance/audit-log.md` for unintended changes.

## 7. Report and handoff

If changes were made:

- List each publication added, changed, removed, or flagged.
- Cite the exact official sources and summarize their evidence.
- Separate confirmed facts from editorial judgments.
- List validation performed and its result.
- Identify unavailable or ambiguous sources as follow-up items.
- Leave the diff uncommitted for human review.

If no supported changes were found:

- Make no file edits.
- Report the issuer sources checked.
- List unavailable or ambiguous sources as follow-up items.

