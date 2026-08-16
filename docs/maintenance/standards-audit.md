# AI safety standards audit playbook

This playbook is the canonical workflow for maintaining the AI Safety Standards & Publications Matrix. The external Codex automation should contain only its schedule, repository target, and an instruction to follow this file and the root `AGENTS.md`.

## 1. Preflight gate

Run `git status --short` before reading external sources or editing files.

- If the command prints any path, stop without editing.
- Report every changed, staged, untracked, or conflicted path.
- Do not stash, discard, reset, clean, commit, or otherwise modify the existing worktree.

## 2. Repository context

- Read `AGENTS.md`, this playbook, and the latest relevant entry in `audit-log.md`.
- Read `candidate-issues.md` and review every open GitHub issue matching `is:issue is:open label:candidate label:"matrix:standards"`. Route candidates by their current status, inspect deferred candidates for material activity since their latest audit disposition, and normalize invalid ready-for-change states before relying on them. If GitHub issue access is unavailable, report that the candidate queue was not reviewed and continue the audit.
- Treat `index.html` as the source of truth unless the repository later contains explicit maintenance documentation that designates structured data files.
- Inspect the embedded data before research so the audit prioritizes current drafts, work items, revision markers, and potentially fragile links.
- Use Codex web retrieval for external research and URL checks. The workspace shell may be sandboxed from outbound HTTPS even when web retrieval is available; do not use shell-network failures as evidence about an issuer site.

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

- Candidate issue number, when the change originated from the candidate queue.
- Publication identifier and affected field.
- Exact official source URL.
- Official status, date, lifecycle stage, legal milestone, or other evidence supporting the change.
- Whether the change is a confirmed issuer fact or an editorial judgment.

Do not guess when a source is unavailable or ambiguous. Do not add speculative publication dates, draft milestones, certification schemes, or claims of legal presumption.

Physical-AI relevance is always editorial. Do not describe a High, Medium, or Low rating as an issuer designation.

## 5. Editing rules

- Edit `index.html` only when official evidence supports a material matrix change.
- Preserve every required field: `issuer`, `publication`, `title`, `date`, `status`, `category`, `domain`, `physical`, `summary`, `conformity`, `access`, and `url`.
- Give each newly added row an `added` field containing the local audit date in `YYYY-MM-DD` format. Preserve that original value when the row is later updated; the matrix uses it to show the New badge for 30 days.
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
5. Before the full crawl, use web retrieval to open one known official matrix URL. If web retrieval is unavailable, report the external-review portion as environment-blocked and do not infer that every matrix URL is unavailable. Do not substitute sandboxed shell HTTP commands for web retrieval.
6. Crawl every unique, nonempty `url` value in the embedded matrix with bounded parallelism using web retrieval or another execution path with confirmed outbound HTTPS. Follow redirects and record the final URL. Where the retrieval capability supports it, retry `GET` after a rejected or unsupported `HEAD`, and retry transient failures before classifying a result.
7. Classify each crawled URL as healthy, redirected, broken, temporarily unavailable, or access-blocked. Treat a successful response as healthy only when the final official page identifies the represented publication; a response that resolves to an unrelated publication is broken (wrong target). Report permanent not-found responses, DNS failures, and TLS failures as broken. Keep authentication challenges, rate limits, bot protections, timeouts, and transient server errors separate from broken links. Treat a repeated local sandbox-policy failure as environment-blocked, not as a URL classification.
8. Manually inspect redirected, broken, unavailable, and access-blocked results against an authoritative primary source. Do not replace or remove a matrix URL solely because an automated request was blocked or failed transiently.
9. Recalculate publication, issuer, current-status, and Physical-AI counts.
10. Exercise representative search, single-filter, and combined-filter cases.
11. Run `git diff --check`.
12. Review `git diff -- index.html docs/maintenance/audit-log.md` for unintended changes.

## 7. Candidate issue disposition

Follow `candidate-issues.md` after verifying each standards candidate. A supported candidate remains open with `status:ready-for-change` until its uncommitted matrix diff has received human review and the approved change is committed outside the audit workflow. Do not treat the submitted link or issue text as evidence; cite the exact authoritative primary source used for the disposition.

After the clean-worktree preflight, normalize and route the candidate queue before committed-change reconciliation:

1. Inspect each issue's labels, comments, and latest audit disposition.
2. If a deferred candidate has new evidence or a material correction after its latest audit disposition, replace `status:deferred` with `status:needs-verification` and evaluate it in the current audit. Leave unchanged deferred candidates without new material activity; do not repeat the same research.
3. For every candidate labeled `status:ready-for-change`, confirm that its latest supported audit disposition cites exact authoritative evidence, identifies the affected fields, and records the exact recommended or prepared issuer-and-publication change. A manual label change or unverified issue comment does not satisfy this requirement.
4. If a ready-for-change candidate fails that check, or material new evidence supersedes its supported disposition, replace its status with `status:needs-verification` and evaluate it again. Apply the supported, deferred, duplicate/out-of-scope/unsupported, or needs-more-research disposition based on the current evidence.

Then reconcile every standards candidate that still validly carries `status:ready-for-change`:

1. Inspect `index.html` on the GitHub repository's default branch, not the local working tree, and confirm that the exact approved issuer-and-publication change is present.
2. Identify the specific pushed commit reachable from the default branch that introduced the approved change. An issue reference, commit message, local diff, staged change, or unmerged branch is not sufficient.
3. If both the implemented change and its pushed commit are unambiguous, comment on the issue with the commit link, remove `status:ready-for-change`, and close the issue as completed.
4. If the implementation or commit cannot be verified exactly, leave the issue open with `status:ready-for-change` and report the ambiguity as a follow-up item.

Candidate reconciliation is GitHub issue bookkeeping, not a material matrix change. It must not by itself edit `index.html` or `audit-log.md`.

## 8. Report and handoff

If changes were made:

- List each publication added, changed, removed, or flagged.
- List each reviewed candidate issue and its disposition.
- List each reconciled `status:ready-for-change` issue, the implementing commit, and whether it was closed or left open.
- Cite the exact official sources and summarize their evidence.
- Separate confirmed facts from editorial judgments.
- List validation performed and its result.
- Report the URL crawl totals by classification and identify every redirected, broken, temporarily unavailable, or access-blocked URL with its affected publication identifier.
- If external review was environment-blocked, report that condition separately and do not present it as a URL-crawl result.
- Identify unavailable or ambiguous sources as follow-up items.
- Leave the diff uncommitted for human review.

If no supported changes were found:

- Make no file edits.
- Report the issuer sources checked.
- Report the URL crawl totals by classification and identify every redirected, broken, temporarily unavailable, or access-blocked URL with its affected publication identifier.
- If external review was environment-blocked, report that condition separately and do not present it as a URL-crawl result.
- List unavailable or ambiguous sources as follow-up items.
- List each reviewed candidate issue and its disposition.
- List each reconciled `status:ready-for-change` issue, the implementing commit when found, and whether it was closed or left open.
