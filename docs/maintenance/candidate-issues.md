# Candidate-link issue workflow

Use GitHub issues to capture standards and product links found outside the scheduled audits. Candidate issues are research leads, not evidence or endorsements, and do not change either matrix until the applicable audit verifies them.

## Submit a candidate

From the repository's **Issues** page, choose **New issue**, select **Standards candidate** or **Product candidate**, complete the form, and submit it. The forms automatically apply the matrix and workflow labels.

Use these repository issue searches to review the queues:

- All open candidates: `is:issue is:open label:candidate`
- Standards awaiting verification: `is:issue is:open label:"matrix:standards" label:"status:needs-verification"`
- Products awaiting verification: `is:issue is:open label:"matrix:products" label:"status:needs-verification"`
- Deferred candidates: `is:issue is:open label:candidate label:"status:deferred"`
- Verified candidates awaiting an approved matrix change: `is:issue is:open label:candidate label:"status:ready-for-change"`

## Labels

- `candidate` identifies the manually submitted research queue.
- `matrix:standards` and `matrix:products` route a candidate to the applicable audit.
- `status:needs-verification` means the candidate has not yet been confirmed through the evidence standard in the applicable audit playbook.
- `status:ready-for-change` means the candidate is supported and an audit has prepared or recommended a matrix change.
- `status:deferred` means the candidate remains relevant but available evidence is unavailable, ambiguous, or insufficient.

Only one `status:` label should be present on an open candidate issue.

## State invariants and reactivation

Status labels are workflow routing, not evidence. Validate a candidate's state before relying on its label.

- Reserve `status:ready-for-change` for a candidate whose latest audit disposition cites the exact authoritative evidence, identifies the affected fields, and records the exact recommended or prepared matrix change.
- A manual label change, issue-body edit, submitted link, or new comment does not by itself make a candidate ready for change.
- When new evidence or a material correction is added to a deferred issue, replace `status:deferred` with `status:needs-verification`. The applicable audit must verify the new information before the issue can become ready for change.
- Each audit reviews all open candidates for its matrix. Leave a deferred candidate unchanged without repeating research when there has been no material activity since its latest audit disposition. Reactivate and evaluate it in the current audit when new evidence or a material correction has been added.
- Before committed-change reconciliation, normalize every `status:ready-for-change` candidate. If the issue does not satisfy the ready-for-change evidence requirement, or material new evidence supersedes its latest supported disposition, replace the status with `status:needs-verification` and evaluate the candidate again.

## Audit disposition

The applicable audit checks each candidate for duplication and verifies factual claims against the primary-source rules in its playbook. Record the issue number in the audit report and use one of these dispositions:

- **Supported:** After verification, replace the current status with `status:ready-for-change`, comment with the official evidence, affected fields, and exact recommended or prepared matrix change, and leave the issue open while the uncommitted diff receives human review.
- **Deferred:** Replace the current status label with `status:deferred` and comment with the missing or ambiguous evidence and the condition for reconsideration.
- **Duplicate, out of scope, or unsupported:** Comment with the reason and relevant existing row or issue, then close the issue as not planned.
- **Needs more research:** Replace the current status with `status:needs-verification` and comment with the specific follow-up needed.

## Committed-change reconciliation

After the clean-worktree preflight and state normalization, each audit reconciles the applicable candidates that still validly carry `status:ready-for-change`.

Close a supported candidate as completed only when all of the following are true:

- The exact approved change is present in the applicable source-of-truth file on the GitHub repository's default branch.
- A specific pushed commit reachable from the default branch can be identified as introducing that change.
- The issue receives a comment linking the implementing commit.
- `status:ready-for-change` is removed when the issue is closed so that the label continues to mean that a committed change is still pending.

Do not close a candidate based only on a local working-tree change, staged change, unmerged branch, issue reference, or commit message. If the implementation or commit is ambiguous, leave the issue open and unchanged and record the required follow-up in the audit report.

Do not close an accepted candidate merely because an audit prepared an uncommitted diff. Reconciliation of an already committed change is issue bookkeeping and does not require a matrix or material-audit-log edit.
