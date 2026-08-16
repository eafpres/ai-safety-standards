# AI Safety Standards & Publications Matrix

A curated, cross-sector reference for exploring AI safety standards, publications, products, and assurance providers.

The repository contains two interactive, standalone matrices:

- **Standards & Publications** — standards, regulations, guidance, and work items related to AI governance, safety, risk, testing, cybersecurity, conformity assessment, and Physical AI.
- **Products & Vendors** — commercial products, open-source projects, specialist companies, and assurance providers working across AI governance, evaluation, security, monitoring, and physical-system validation.

Both matrices are sortable, filterable, responsive, and exportable to CSV. Their data and application logic are embedded directly in the HTML files.

## Explore the matrices

| Matrix | Source of truth | Coverage |
| --- | --- | --- |
| Standards & Publications | [`index.html`](index.html) | Standards, regulations, guidance, and publications |
| Products & Vendors | [`products.html`](products.html) | Products, platforms, projects, vendors, and assurance providers |

Open `index.html` in a modern browser to begin. Use the navigation at the top of either page to switch between matrices.

No build step or dependency installation is required.

## Features

- Full-text search
- Filtering by issuer, status, category, domain, lifecycle, provider type, and Physical-AI relevance
- Sortable columns
- Pagination and adjustable page size
- Export of filtered results to CSV
- Responsive light and dark themes
- Print-friendly layouts
- Direct links to official sources and provider pages
- “New” indicators for recently added entries
- Audit flags for access-restricted or temporarily unverifiable links

## How to interpret the data

This project is a decision-support resource, not an exhaustive catalogue, legal opinion, procurement recommendation, or certification determination.

Important distinctions include:

- A published standard is not necessarily certifiable.
- Management-system certification, product certification, type approval, regulatory review, and supporting assurance evidence are different mechanisms.
- Inclusion of a product or provider is not an endorsement.
- Potential standards relevance in the products matrix is an editorial classification, not a compliance claim.
- Physical-AI relevance is an editorial High, Medium, or Low rating—not a designation made by an issuer, regulator, provider, or certification body.
- Drafts, work items, product availability, ownership, and regulatory status can change. Verify current information using the linked authoritative source before relying on an entry.

## Data model

The standards matrix embeds records with these required fields:

```text
issuer
publication
title
date
status
category
domain
physical
summary
conformity
access
url
```

The products matrix embeds records with these required fields:

```text
provider
offering
category
lifecycle
type
domain
physical
summary
relevance
access
url
```

New records may also contain an `added` date, which controls the 30-day “New” indicator. Audit-related fields may identify links that were access-restricted or could not be verified during the latest review.

## Suggest an addition

Missing standards and products are collected through structured GitHub issues:

- [Suggest a standard or publication](https://github.com/eafpres/ai-safety-standards/issues/new?template=standards-candidate.yml)
- [Suggest a product or provider](https://github.com/eafpres/ai-safety-standards/issues/new?template=product-candidate.yml)

A submitted link is treated as a candidate, not as evidence or an endorsement. Proposed factual changes must be verified against authoritative primary sources.

See [`docs/maintenance/candidate-issues.md`](docs/maintenance/candidate-issues.md) for the candidate-review workflow.

## Maintenance

The matrices use separate audit workflows:

- [`docs/maintenance/standards-audit.md`](docs/maintenance/standards-audit.md) — standards and publications
- [`docs/maintenance/products-audit.md`](docs/maintenance/products-audit.md) — products and vendors
- [`docs/maintenance/audit-log.md`](docs/maintenance/audit-log.md) — material standards changes
- [`docs/maintenance/products-audit-log.md`](docs/maintenance/products-audit-log.md) — material product changes

Factual matrix changes must be supported by authoritative primary sources. Confirmed issuer or provider facts are recorded separately from editorial judgments.

Audits preserve the existing schema, filtering, sorting, pagination, CSV export, responsive behavior, and visual design. Supported changes are left as an uncommitted diff for human review.

## Repository structure

```text
.
├── index.html
├── products.html
├── docs/
│   └── maintenance/
│       ├── standards-audit.md
│       ├── products-audit.md
│       ├── audit-log.md
│       ├── products-audit-log.md
│       └── candidate-issues.md
├── AGENTS.md
└── LICENSE
```

## License

This project is available under the [MIT License](LICENSE).
