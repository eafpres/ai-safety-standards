# Material audit log

This log records audits that produced a material matrix change. No-change runs are intentionally not recorded here because scheduled audits must leave a clean repository untouched.

## 2026-08-12

### Confirmed factual changes

- Added `ISO/IEC DIS 42007` as an under-development conformity-assessment publication. ISO records DIS registration at stage 40.00 on 8 June 2026. Source: https://www.iso.org/standard/89967.html
- Expanded the ISO/IEC 5259 series entry through `ISO/IEC TR 5259-6:2026`. ISO records publication at stage 60.60 on 4 May 2026 and describes Part 6 as a visualization framework for data-quality results. Source: https://www.iso.org/standard/86532.html
- Added `ISO/IEC FDIS 27090` as an under-development AI cybersecurity publication. ISO records the project at stage 50.20, with the proof or FDIS ballot initiated on 23 June 2026. Source: https://www.iso.org/standard/56581.html
- Updated Regulation (EU) 2024/1689 to record its general application from 2 August 2026 and the staged exception for Article 6(1) and corresponding obligations from 2 August 2027. Source: https://eur-lex.europa.eu/eli/reg/2024/1689/oj?locale=en

### Editorial judgments

- Rated `ISO/IEC DIS 42007` Low for Physical-AI relevance because it concerns scheme-level conformity infrastructure rather than direct physical-system assurance.
- Rated `ISO/IEC FDIS 27090` Medium because AI cybersecurity materially supports cyber-physical safety but is cross-sector and not a direct functional-safety standard.

### Validation

- Embedded data evaluated successfully as JavaScript.
- Verified 106 entries, 11 issuer groups, 92 current-status entries, and 52 High Physical-AI entries.
- Verified all required fields, HTTPS-only URLs, and no duplicate publication identifiers.
- Exercised representative search and filter derivations.
- `git diff --check` passed.

### Follow-up items

- UNECE landing pages were unavailable to the research environment, so no automotive regulatory text was changed.
- The retrievable EASA Proposed Issue 3 page confirmed the proposal but did not expose the stated 12 August 2026 consultation deadline; verify it directly before changing that claim.

