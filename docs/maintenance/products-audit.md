# AI safety products and vendors audit playbook

This playbook is the canonical workflow for maintaining the AI Safety Products & Vendors Matrix. The external Codex automation should contain only its schedule, repository target, and an instruction to follow this file and the root AGENTS.md.

## 1. Preflight gate

Run git status --short before reading external sources or editing files.

- If the command prints any path, stop without editing.
- Report every changed, staged, untracked, or conflicted path.
- Do not stash, discard, reset, clean, commit, or otherwise modify the existing worktree.

## 2. Repository context

- Read AGENTS.md, this playbook, and the latest relevant entry in products-audit-log.md.
- Read candidate-issues.md and review every open GitHub issue matching `is:issue is:open label:candidate label:"matrix:products"`. Route candidates by their current status, inspect deferred candidates for material activity since their latest audit disposition, and normalize invalid ready-for-change states before relying on them. If GitHub issue access is unavailable, report that the candidate queue was not reviewed and continue the audit.
- Treat products.html as the source of truth unless the repository later explicitly designates a structured data source.
- Inspect the embedded data before research so the audit prioritizes recent startups, acquisitions, integrated products, fragile links, and offerings whose availability may change quickly.
- Keep this audit separate from the standards audit. Do not change index.html or docs/maintenance/audit-log.md.
- Use Codex web retrieval for external research and URL checks. Do not use sandboxed shell-network failures as evidence about an external site.

## 3. Research scope

Review every provider and offering represented in the product matrix for material changes since the most recent recorded material audit.

Prioritize:

1. Shutdowns, discontinued products, or offerings no longer available.
2. Acquisitions, ownership changes, rebrands, mergers, and product integrations.
3. Material changes to product scope, delivery model, or target market.
4. Broken, redirected, access-blocked, or wrong-target provider URLs.
5. New commercially relevant products or providers with a clear AI safety, trust, governance, assurance, security, evaluation, monitoring, or Physical-AI validation function.
6. Material changes to the four discovery sources listed below the matrix.

Use the discovery sources listed in products.html to identify candidates and category shifts:

- OECD Catalogue of Tools & Metrics for Trustworthy AI
- NIST AI Resource Center
- Ethical AI Database market map
- AI Security Startups Map

Discovery-source inclusion is not an endorsement and is not sufficient evidence for a factual row. Verify each factual change through the provider's own site, official product documentation, an official acquirer page, an official press release, or another authoritative primary source.

## 4. Evidence standard

For every proposed data change, capture in the audit report and, when a material edit is made, in products-audit-log.md:

- Candidate issue number, when the change originated from the candidate queue.
- Provider and offering.
- Affected field.
- Exact primary-source URL.
- Evidence supporting the status, ownership, offering, access, or URL change.
- Whether the change is a confirmed provider fact or an editorial judgment.

Do not claim that a product is effective, certified, compliant, or independently validated unless authoritative evidence supports that exact claim. Product descriptions should neutrally summarize publicly marketed capabilities.

Potential standards relevance and Physical-AI relevance are always editorial classifications. Do not describe them as provider, standards-body, regulator, or certification-body determinations.

## 5. Editing rules

- Edit products.html only when primary evidence supports a material matrix change.
- Preserve every required field: provider, offering, category, lifecycle, type, domain, physical, summary, relevance, access, and url.
- Preserve sorting, filtering, pagination, CSV export, counts, layout, navigation, responsive behavior, and visual design.
- Avoid wording-only churn.
- Prefer a stable official HTTPS product URL when one exists.
- Do not introduce duplicate provider-and-offering combinations.
- When matrix data materially changes, update the header's Last updated date to the current local date. Otherwise leave it unchanged.
- Give each newly added row an `added` field containing the local audit date in `YYYY-MM-DD` format. Preserve that original value when the row is later updated; the matrix uses it to show the New badge for 30 days.
- Append a concise entry to products-audit-log.md only when a material matrix change is made. A no-change audit must not edit repository files.

## 6. Validation

Run available local checks without installing dependencies:

1. Evaluate the embedded data as JavaScript.
2. Confirm every row contains all required fields.
3. Check for duplicate provider-and-offering combinations.
4. Check that URLs use HTTPS where available and are syntactically valid.
5. Before the full crawl, use web retrieval to open one known provider URL. If web retrieval is unavailable, report the external-review portion as environment-blocked and do not infer that every URL is unavailable.
6. Crawl every unique, nonempty row URL and all discovery-source URLs with bounded parallelism. Follow redirects and record the final URL. Retry transient failures before classifying a result.
7. Classify each crawled URL as healthy, redirected, broken, temporarily unavailable, access-blocked, or wrong target. A provider homepage is healthy only when it still identifies the represented provider or clearly redirects to an official acquirer or successor. A product URL is a wrong target when the final page no longer identifies the represented offering or an official successor.
8. Manually inspect redirected, broken, unavailable, access-blocked, and wrong-target results against authoritative primary sources. Do not replace or remove an entry solely because an automated request was blocked or failed transiently.
9. Recalculate row, category, specialist-company, and High Physical-AI counts.
10. Exercise representative search, single-filter, combined-filter, pagination, sorting, and CSV-export derivations.
11. Run git diff --check.
12. Review the diff for products.html and docs/maintenance/products-audit-log.md for unintended changes.

## 7. Candidate issue disposition

Follow candidate-issues.md after verifying each product candidate. A supported candidate remains open with `status:ready-for-change` until its uncommitted matrix diff has received human review and the approved change is committed outside the audit workflow. Do not treat the submitted link, discovery-source inclusion, or issue text as evidence; cite the exact authoritative primary source used for the disposition.

After the clean-worktree preflight, normalize and route the candidate queue before committed-change reconciliation:

1. Inspect each issue's labels, comments, and latest audit disposition.
2. If a deferred candidate has new evidence or a material correction after its latest audit disposition, replace `status:deferred` with `status:needs-verification` and evaluate it in the current audit. Leave unchanged deferred candidates without new material activity; do not repeat the same research.
3. For every candidate labeled `status:ready-for-change`, confirm that its latest supported audit disposition cites exact authoritative evidence, identifies the affected fields, and records the exact recommended or prepared provider-and-offering change. A manual label change or unverified issue comment does not satisfy this requirement.
4. If a ready-for-change candidate fails that check, or material new evidence supersedes its supported disposition, replace its status with `status:needs-verification` and evaluate it again. Apply the supported, deferred, duplicate/out-of-scope/unsupported, or needs-more-research disposition based on the current evidence.

Then reconcile every product candidate that still validly carries `status:ready-for-change`:

1. Inspect `products.html` on the GitHub repository's default branch, not the local working tree, and confirm that the exact approved provider-and-offering change is present.
2. Identify the specific pushed commit reachable from the default branch that introduced the approved change. An issue reference, commit message, local diff, staged change, or unmerged branch is not sufficient.
3. If both the implemented change and its pushed commit are unambiguous, comment on the issue with the commit link, remove `status:ready-for-change`, and close the issue as completed.
4. If the implementation or commit cannot be verified exactly, leave the issue open with `status:ready-for-change` and report the ambiguity as a follow-up item.

Candidate reconciliation is GitHub issue bookkeeping, not a material matrix change. It must not by itself edit products.html or products-audit-log.md.

## 8. Report and handoff

If changes were made:

- List each provider or offering added, changed, removed, or flagged.
- List each reviewed candidate issue and its disposition.
- List each reconciled `status:ready-for-change` issue, the implementing commit, and whether it was closed or left open.
- Cite the exact primary sources and summarize their evidence.
- Separate confirmed facts from editorial judgments.
- List validation performed and its result.
- Report URL-crawl totals by classification and identify every redirected, broken, temporarily unavailable, access-blocked, or wrong-target URL.
- Report discovery-source availability separately from provider URLs.
- Identify unavailable or ambiguous sources as follow-up items.
- Leave the diff uncommitted for human review.

If no supported changes were found:

- Make no file edits.
- Report the provider and discovery sources checked.
- Report URL-crawl totals by classification and identify every redirected, broken, temporarily unavailable, access-blocked, or wrong-target URL.
- If external review was environment-blocked, report that condition separately and do not present it as a URL-crawl result.
- List unavailable or ambiguous sources as follow-up items.
- List each reviewed candidate issue and its disposition.
- List each reconciled `status:ready-for-change` issue, the implementing commit when found, and whether it was closed or left open.
