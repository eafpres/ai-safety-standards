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

## Audit disposition

The applicable audit checks each candidate for duplication and verifies factual claims against the primary-source rules in its playbook. Record the issue number in the audit report and use one of these dispositions:

- **Supported:** Replace `status:needs-verification` with `status:ready-for-change`, comment with the official evidence and affected fields, and leave the issue open while the uncommitted diff receives human review.
- **Deferred:** Replace the current status label with `status:deferred` and comment with the missing or ambiguous evidence and the condition for reconsideration.
- **Duplicate, out of scope, or unsupported:** Comment with the reason and relevant existing row or issue, then close the issue as not planned.
- **Needs more research:** Keep `status:needs-verification` and comment with the specific follow-up needed.

After a supported matrix change is reviewed and committed outside the audit workflow, close its issue as completed and reference the commit. Do not close an accepted candidate merely because an audit prepared an uncommitted diff.
