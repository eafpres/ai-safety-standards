# Material audit log

This log records audits that produced a material matrix change. No-change runs are intentionally not recorded here because scheduled audits must leave a clean repository untouched.

## 2026-08-13

### Confirmed factual changes

- Added `ISO/IEC TR 42106:2026`. ISO records publication at stage 60.60 on 20 July 2026 and describes an overview of differentiated benchmarking for AI system quality characteristics. Source: https://www.iso.org/standard/86903.html
- Updated `IEC 62061:2021` to include Amendments 1:2024 and 2:2026. IEC records the consolidated edition `IEC 62061:2021+AMD1:2024+AMD2:2026 CSV`. Source: https://webstore.iec.ch/en/publication/112847
- Added the UN Regulation on Automated Driving Systems. UNECE records WP.29 adoption on 24 June 2026, with safety-management, testing, safety-case, monitoring, and data-storage requirements, and stated that entry into force would follow in about a month. Source: https://unece.org/media/Sustainable-Development/press/414913
- Added `ISO/TS 24971-2:2026`. ISO records publication at stage 60.60 on 17 June 2026 and limits its scope to applying ISO 14971 to ML-enabled medical devices other than LLM or generative-AI devices. Source: https://www.iso.org/standard/24971-2
- Added proposed `IMDRF N93`. IMDRF records a public consultation from 10 April through 10 July 2026 for its AI medical-device lifecycle framework; it remains proposed rather than final guidance. Source: https://www.imdrf.org/consultations/technical-framework-artificial-intelligence-life-cycle-management
- Added the `OECD Due Diligence Guidance for Responsible AI`, published on 19 February 2026 as practical enterprise guidance for implementing OECD responsible-business-conduct standards and AI Principles. Source: https://www.oecd.org/en/publications/2026/02/oecd-due-diligence-guidance-for-responsible-ai_7831bb49.html

### Editorial judgments

- Rated `ISO/IEC TR 42106:2026` Medium for Physical-AI relevance because context-sensitive quality benchmarking can support cyber-physical assurance but is cross-sector and informative.
- Rated `ISO/TS 24971-2:2026` and the UN ADS Regulation High because they directly support the risk management or regulatory assurance of safety-relevant physical systems.
- Rated proposed `IMDRF N93` Medium because it is medical-device lifecycle guidance but remains nonbinding and under development.
- Rated the OECD due-diligence guidance Low because it is primarily organizational and informational.

### Validation

- Embedded data evaluated successfully as JavaScript using the available Windows Script Host runtime.
- Verified 111 entries, 11 issuer groups, 95 current-status entries, and 54 High Physical-AI entries.
- Verified all required fields, HTTPS-only URLs, and no duplicate publication identifiers.
- Exercised representative search, single-filter, and combined-filter derivations.
- `git diff --check` passed.

### Follow-up items

- The EASA Proposed Issue 3 landing page still does not expose the stated 12 August 2026 consultation deadline in retrievable official text, so that claim was not changed.
- UNECE's official adoption announcement does not state the final regulation number or an exact entry-into-force date; retain `Adopted` status until a treaty-office or final regulation record confirms those facts.

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
