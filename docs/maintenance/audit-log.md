# Material audit log

This log records audits that produced a material matrix change. No-change runs are intentionally not recorded here because scheduled audits must leave a clean repository untouched.

## 2026-08-20

### Confirmed factual changes

- Added published `ISO/IEC TS 25058:2024`. ISO records the SQuaRE guidance for AI-system quality evaluation as published at stage 60.60 on 24 January 2024 and now marked for revision. Source: https://www.iso.org/standard/82570.html
- Added `ISO/IEC AWI 25058`. ISO records the proposed second edition at stage 20.00; it adds quality measures and guidance tied to ISO/IEC 25059 and is intended to replace ISO/IEC TS 25058:2024. Source: https://www.iso.org/standard/91881.html
- Added active IEEE projects `P3927` and `P3927.1`. IEEE records PAR approval on 12 February 2026 for auditable capability assessment of industrial embodied-intelligence systems and for requirements and acceptance criteria governing training data for embodied-intelligence robots. Sources: https://standards.ieee.org/ieee/3927/12432/ and https://standards.ieee.org/ieee/3927.1/12433/
- Added active IEEE projects `P3960` and `P3961`. IEEE records PAR approval on 12 February 2026 for industrial embodied-intelligence operating-system architecture, including modules, interfaces, and security, and for swarm-intelligence architecture and communication requirements, including security. Sources: https://standards.ieee.org/ieee/3960/12440/ and https://standards.ieee.org/ieee/3961/12441
- Added `IEEE P7007.1`. IEEE records PAR approval on 14 May 2026 for ontologies that define, characterize, and classify AI-system risks and physical or non-physical harms in robotics and automated systems. Source: https://standards.ieee.org/ieee/7007.1/12558/

### Editorial judgments

- Rated `ISO/IEC TS 25058:2024` and `ISO/IEC AWI 25058` Medium for Physical-AI relevance because their cross-sector quality-evaluation methods can support cyber-physical assurance without defining domain-specific product-safety requirements.
- Rated `IEEE P3927`, `IEEE P3927.1`, `IEEE P3960`, and `IEEE P7007.1` High because they directly address assessment, training data, architecture/security, or risk classification for embodied AI, robots, or industrial physical systems.
- Rated `IEEE P3961` Medium because swarm-intelligence architecture and security can support physical multi-agent systems, but IEEE's stated scope does not limit the project to safety-critical or physically embodied products.

### Validation

- Evaluated all embedded matrix rows as JavaScript in an isolated runtime.
- Verified 138 entries, 11 issuer groups, 103 current-status entries, and 67 High Physical-AI entries.
- Verified all required fields, HTTPS-only URLs, and no duplicate publication identifiers.
- Exercised representative search, single-filter, combined-filter, sort, and pagination derivations.
- Crawled all 125 unique matrix URLs: 114 healthy, 0 redirected, 0 broken, 4 temporarily unavailable, and 7 access-blocked.
- The temporarily unavailable URLs affect `SAE J3016_202104`, `SAE J3018_202012`, `IEEE P4106`, and `IEEE 7010-2020`. Each exact publication was confirmed through another official SAE or IEEE page or authoritative official indexed record.
- The access-blocked URLs affect `Regulation (EU) 2017/745`; `Regulation (EU) 2024/1689`; `EN 18286:2026`; `UN Regulation No. 155` and `UN Regulation No. 156` (shared UNECE page); `UN Regulation No. 157`; `UN Regulation on Automated Driving Systems (ADS)`; and `Canada Directive on Automated Decision-Making`. Each represented publication was confirmed through another official page or authoritative official indexed record; none was classified as broken.
- `git diff --check` passed, and the standards-matrix diff was reviewed for unintended changes.

### Candidate queue and follow-up items

- The connected GitHub repository had no open issues matching `is:issue is:open label:candidate label:"matrix:standards"`; no candidate disposition or committed-change reconciliation was required.
- UNECE's official records still do not expose a final regulation number or exact entry-into-force date for the adopted ADS regulation; retain `Adopted` status.
- No final EASA AI Concept Paper Issue 3 was found after the Proposed Issue 3 consultation closed; retain `Proposed` status.
- NIST continues to identify AI RMF 1.0 as the current framework while stating that it is being revised; retain the current row.

## 2026-08-19

### Confirmed factual changes

- Added `ISO/IEC DIS 24029-3`. ISO records the statistical-methods robustness-assessment draft at stage 40.99 since 17 August 2026, when the DIS was approved for registration as an FDIS. Source: https://www.iso.org/standard/86901.html
- Added `ISO/IEC WD TS 25570`. ISO records the AI-system reliability-assessment project at stage 20.60, with its working-draft study initiated on 27 May 2026 and comment period closed on 9 July 2026. Source: https://www.iso.org/standard/90757.html
- Added `ISO/IEC CD 25589`. ISO records the human-machine-teaming framework at stage 30.20, with CD consultation initiated on 1 July 2026; its scope covers concepts, technical characteristics, and design principles for human-machine teams. Source: https://www.iso.org/standard/90831.html
- Added `ISO/CD 9241-812`. ISO records the human-systems ergonomics draft at stage 30.60 and explicitly includes physical interaction with robots, autonomous vehicles, and intelligent environments. Source: https://www.iso.org/standard/88374.html
- Added `IEEE P8000.1`. IEEE records an active standards project approved on 4 June 2026 for a seven-score method to assess AI-system trustworthiness across the supply chain, intended as the foundation for a trust-rating service and certification program. Source: https://standards.ieee.org/ieee/8000.1/12593/

### Editorial judgments

- Rated `ISO/IEC DIS 24029-3` High for Physical-AI relevance because statistical neural-network robustness assessment can directly support verification evidence for safety-relevant perception and control functions.
- Rated `ISO/CD 9241-812` High because its scope explicitly covers physical interaction with robots, autonomous vehicles, smart environments, and combinations of intelligent systems.
- Rated `ISO/IEC WD TS 25570`, `ISO/IEC CD 25589`, and `IEEE P8000.1` Medium because their cross-sector reliability, human-machine-teaming, and trustworthiness-assessment methods can support cyber-physical assurance but do not define domain-specific product-safety requirements.

### Validation

- Evaluated all embedded matrix rows as JavaScript using Windows Script Host.
- Verified 131 entries, 11 issuer groups, 102 current-status entries, and 63 High Physical-AI entries.
- Verified all required fields, HTTPS-only URLs, and no duplicate publication identifiers.
- Exercised representative search, single-filter, combined-filter, sort, and pagination derivations: `medical` returned 18 entries, IEC returned 9, Automotive plus High returned 16, issuer/publication sorting retained all rows, and a page size of 10 produced 14 pages.
- Crawled all 118 unique matrix URLs: 100 healthy, 0 redirected, 0 broken, 5 temporarily unavailable, and 13 access-blocked.
- The temporarily unavailable URLs affect `NIST AI 700-2`, `SAE J3018_202012`, `IEEE 3119-2025`, `IEEE P4106`, and `IEEE P4502`. Each exact publication was confirmed through another official NIST, SAE, or IEEE page or authoritative official indexed record.
- The access-blocked URLs affect `Directive (EU) 2024/2853`; `Regulation (EU) 2017/745`; `Regulation (EU) 2023/1230`; `Regulation (EU) 2023/988`; `Regulation (EU) 2024/1689`; `Regulation (EU) 2024/2847`; `EN 18286:2026`; `UN Regulation No. 155` and `UN Regulation No. 156` (shared UNECE page); `UN Regulation No. 157`; `UN Regulation on Automated Driving Systems (ADS)`; `EASA AI Concept Paper Issue 2`; `EASA NPA 2025-07 / proposed DS.AI`; and `Canada Directive on Automated Decision-Making`. Each represented publication was confirmed through another official page or authoritative official indexed record; none was classified as broken.
- `git diff --check` passed, and the standards-matrix diff was reviewed for unintended changes.

### Candidate queue and follow-up items

- The connected GitHub repository had no open issues matching `is:issue is:open label:candidate label:"matrix:standards"`; no candidate disposition or committed-change reconciliation was required.
- UNECE's available official records still identify the adopted ADS measure without exposing a final regulation number or exact entry-into-force date; retain `Adopted` status.
- No final EASA AI Concept Paper Issue 3 was found after the Proposed Issue 3 consultation closed; retain `Proposed` status.
- NIST states that AI RMF 1.0 is being revised but does not expose a replacement publication; retain the current AI RMF 1.0 row.

## 2026-08-18

### Confirmed factual changes

- Added `ISO/IEC FDIS 27091`. ISO records the AI privacy-protection project at stage 50.00 since 13 July 2026, after its DIS was approved for registration as an FDIS. The draft provides lifecycle guidance for identifying, evaluating, and treating privacy risks in AI systems and machine-learning models. Source: https://www.iso.org/standard/56582.html?browse=tc
- Added `IEEE 7015-2026`. IEEE records an active standard approved on 4 June 2026 that defines an operational framework for data and AI literacy, skills, and readiness across proficiency levels. Source: https://standards.ieee.org/ieee/7015/10688/
- Added `SAE J3329_202604`. SAE records the Information Report as issued on 12 April 2026 and covering technical, operational, safety, security, and regulatory challenges for AI in ground vehicles and supporting infrastructure. Source: https://saemobilus.sae.org/standards/j3329_202604-artificial-intelligence-ground-vehicles-technical-operational-regulatory-challenges

### Editorial judgments

- Rated `ISO/IEC FDIS 27091` Low for Physical-AI relevance because it is cross-sector privacy guidance rather than direct physical-system safety or assurance material.
- Rated `IEEE 7015-2026` Low because it addresses literacy, competencies, and organizational readiness rather than product or physical-system assurance.
- Rated `SAE J3329_202604` High because it directly addresses lifecycle and operational challenges, including safety and security, for AI deployed in ground vehicles and supporting infrastructure.

### Validation

- Parsed and evaluated all embedded matrix rows with PowerShell.
- Verified 126 entries, 11 issuer groups, 102 current-status entries, and 61 High Physical-AI entries.
- Verified all required fields, HTTPS-only URLs, and no duplicate publication identifiers.
- Exercised representative search, single-filter, combined-filter, sort, and pagination derivations: `medical` returned 18 entries, IEC returned 9, Automotive plus High returned 16, issuer/publication sorting retained all rows, and a page size of 10 produced 13 pages.
- Crawled all 113 unique matrix URLs: 104 healthy, 0 redirected, 0 broken, 1 temporarily unavailable, and 8 access-blocked. The temporarily unavailable SAE page affects `SAE J3321_202603`; its exact official record was confirmed through SAE's authoritative indexed result. The access-blocked URLs affect `Regulation (EU) 2017/745`; `Regulation (EU) 2023/1230`; `EN 18286:2026`; `UN Regulation No. 155` and `UN Regulation No. 156` (shared UNECE page); `UN Regulation No. 157`; `UN Regulation on Automated Driving Systems (ADS)`; `EASA NPA 2025-07 / proposed DS.AI`; and `Canada Directive on Automated Decision-Making`. Each represented publication was confirmed through another official page or authoritative official indexed record; none was classified as broken.
- `git diff --check` passed, and the standards-matrix diff was reviewed for unintended changes.

### Follow-up items

- UNECE's available official records still do not expose a final regulation number or exact entry-into-force date for the adopted ADS regulation; retain `Adopted` status.
- No final EASA AI Concept Paper Issue 3 was found after the Proposed Issue 3 consultation closed; retain `Proposed` status.
- NIST states that AI RMF 1.0 is being revised but does not expose a replacement publication; retain the current AI RMF 1.0 row.

## 2026-08-17

### Confirmed factual changes

- Added `ISO/IEC DTS 22443`. ISO records the draft Technical Specification at stage 50.00 since 18 May 2026, with final text registered for formal approval, for lifecycle guidance on societal concerns and ethical considerations that can harm individuals or society. Source: https://www.iso.org/standard/87119.html?browse=tc
- Added `IEEE P4106`. IEEE records an active standards project approved on 4 June 2026 for performance and safety evaluation of AI-based smart mandibular advancement devices, including sensing, actuation, control algorithms, fail-safe mechanisms, clinical validation, interoperability, and cybersecurity. Source: https://standards.ieee.org/ieee/4106/12621/
- Replaced the generic SAE catalogue URL for `SAE ARP4754B / ARP4761A` with SAE's exact ARP4754B record, which explicitly identifies ARP4761A as the companion safety-assessment process. Source: https://saemobilus.sae.org/standards/arp4754b-guidelines-development-civil-aircraft-systems

### Editorial judgments

- Rated `ISO/IEC DTS 22443` Medium for Physical-AI relevance because its cross-sector lifecycle guidance can support harm analysis for cyber-physical systems but is not a domain-specific product-safety publication.
- Rated `IEEE P4106` High because it directly evaluates sensing, physical actuation, safety controls, fail-safe behavior, clinical performance, and cybersecurity in an AI-enabled medical device.

### Validation

- Evaluated all embedded matrix rows as JavaScript using Windows Script Host.
- Verified 123 entries, 11 issuer groups, 100 current-status entries, and 60 High Physical-AI entries.
- Verified all required fields, HTTPS-only URLs, and no duplicate publication identifiers.
- Exercised representative search, single-filter, combined-filter, sort, and pagination derivations: `medical` returned 18 entries, IEC returned 9, Automotive plus High returned 15, issuer/publication sorting retained all rows, and a page size of 10 produced 13 pages.
- Crawled all 110 unique matrix URLs: 102 healthy, 0 redirected, 0 broken, 0 temporarily unavailable, and 8 access-blocked. The access-blocked URLs affect `Regulation (EU) 2017/745`; `Regulation (EU) 2023/1230`; `EN 18286:2026`; `UN Regulation No. 155` and `UN Regulation No. 156` (shared UNECE page); `UN Regulation No. 157`; `UN Regulation on Automated Driving Systems (ADS)`; `SAE ARP4754B / ARP4761A`; and `Canada Directive on Automated Decision-Making`. Each represented publication was confirmed through another official page or authoritative official indexed record; none was classified as broken.
- `git diff --check` passed, and the standards-matrix diff was reviewed for unintended changes.

### Follow-up items

- UNECE's available official records still do not expose a final regulation number or exact entry-into-force date for the adopted ADS regulation; retain `Adopted` status.
- No final EASA AI Concept Paper Issue 3 was found after the Proposed Issue 3 consultation closed; retain `Proposed` status.

## 2026-08-16

### Confirmed factual changes

- Updated `Regulation (EU) 2024/1689` to reflect Regulation (EU) 2026/1744. Chapter III Sections 1–3 now apply from 2 December 2027 for Article 6(2)/Annex III high-risk systems and from 2 August 2028 for Article 6(1)/Annex I systems, except Article 6(5). Source: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32026R1744
- Added `IEEE P4502`. IEEE records an active standards project, approved on 26 March 2026, for smart mandibular advancement devices with AI-based closed-loop control, mandatory control limits, and fail-safe mechanisms. Source: https://standards.ieee.org/ieee/4502/12502/
- Added `IEC PAS 63621:2026`. IEC records the medical-device AI data-management specification as published on 18 March 2026, covering data lifecycle and quality-management requirements. Source: https://webstore.iec.ch/en/publication/100814
- Added `UL 3115 Ed. 3`. UL records the active Outline of Investigation for AI-based products as published on 18 June 2026, with horizontal requirements applying to AI-embedded products including robots, autonomous vehicles, and medical devices. Source: https://www.shopulstandards.com/ProductDetail.aspx?productId=UL3115_3_O_20260618
- Added `SAE J3321_202603`. SAE records the Information Report as published on 16 March 2026, covering verification and validation of AI/ML-based systems in ground vehicles without establishing mandatory requirements. Source: https://saemobilus.sae.org/standards/j3321_202603-verification-validation-ai-ml-based-systems-ground-vehicles

### Editorial judgments

- Rated `IEEE P4502` High for Physical-AI relevance because it directly addresses sensing, AI inference, safety supervision, actuation, control limits, and fail-safe behavior in a medical device.
- Rated `IEC PAS 63621:2026` High because its normative data-lifecycle requirements directly support the safety and quality evidence for AI-enabled medical devices.
- Rated `UL 3115 Ed. 3` High because its horizontal product-safety scope explicitly includes robots, autonomous vehicles, medical devices, and other AI-embedded products.
- Rated `SAE J3321_202603` High because it directly addresses lifecycle verification and validation for AI/ML functions in ground vehicles.

### Validation

- Parsed and evaluated all embedded matrix rows with PowerShell because Node.js was not available in this environment.
- Verified 121 entries, 11 issuer groups, 100 current-status entries, and 59 High Physical-AI entries.
- Verified all required fields, HTTPS-only URLs, and no duplicate publication identifiers.
- Exercised representative search, single-filter, combined-filter, sort, and pagination derivations: `medical` returned 17 entries, IEC returned 9, Automotive plus High returned 13, issuer/publication sorting retained all rows, and a page size of 10 produced 13 pages.
- Crawled all 108 unique matrix URLs: 100 healthy, 0 redirected, 0 broken, 0 temporarily unavailable, and 8 access-blocked. The access-blocked URLs affect `SAE ARP4754B / ARP4761A`; `SAE J3016_202104`; `EN 18286:2026`; `UN Regulation No. 155` and `UN Regulation No. 156` (shared UNECE page); `UN Regulation No. 157`; `UN Regulation on Automated Driving Systems (ADS)`; `EASA NPA 2025-07 / proposed DS.AI`; and `Canada Directive on Automated Decision-Making`. Each represented publication was confirmed through another official page or authoritative official indexed record; none was classified as broken.
- Normalized the new `IEEE P4502` URL to IEEE's final trailing-slash form after the initial official URL redirected.
- `git diff --check` passed, and the standards-matrix diff was reviewed for unintended changes.

### Follow-up items

- UNECE's available official records still do not expose a final regulation number or exact entry-into-force date for the adopted ADS regulation; retain `Adopted` status.
- No final EASA AI Concept Paper Issue 3 was found after the Proposed Issue 3 consultation closed; retain `Proposed` status.

## 2026-08-15

### Confirmed factual changes

- Updated `ISO/IEC DIS 42007` from DIS registration to its 12-week DIS ballot, which ISO records as initiated on 11 August 2026 at stage 40.20. Source: https://www.iso.org/standard/89967.html
- Added `ISO/IEC DIS 4213`. ISO records the expanded performance-measurement revision at stage 40.20, with its 12-week DIS ballot initiated on 28 July 2026; it is intended to replace ISO/IEC TS 4213:2022. Source: https://www.iso.org/standard/89455.html
- Added `ISO/IEC FDIS 24970`. ISO records the AI-system event-logging project at stage 50.00 since 18 May 2026. Source: https://www.iso.org/standard/88723.html
- Added `ISO/IEC FDIS 25059` as the proposed second edition of the AI-system quality model. ISO records stage 50.00 on 23 July 2026 and states that it will replace ISO/IEC 25059:2023; retained the published first edition as current while the replacement remains under development. Source: https://www.iso.org/standard/88234.html
- Added `IEEE 2863-2026`. IEEE records an active recommended practice for organizational AI governance, with Standards Board approval on 4 June 2026. Source: https://standards.ieee.org/ieee/2863/10142/
- Added `EN 18286:2026`. CEN-CENELEC records the AI quality-management-system standard as published with a 22 July 2026 date of availability and states that OJEU citation for Regulation (EU) 2024/1689 is expected. Source: https://standards.cencenelec.eu/ords/f?cs=12A382BDB5385F509EBAA7CD4808AFBF3&p=CEN%3A110%3A%3A%3A%3A%3AFSP_PROJECT%2CFSP_ORG_ID%3A80556%2C2916257
- Updated `Council of Europe CETS No. 225` to record the European Union's 15 May 2026 approval and clarify that the treaty has not yet met its entry-into-force threshold of five ratifications including at least three Council of Europe member states. Sources: https://www.coe.int/en/web/conventions/full-list?module=signatures-by-treaty&treatynum=225 and https://www.coe.int/en/web/conventions/full-list?module=treaty-detail&treatynum=225
- Confirmed the existing 12 August 2026 deadline for comments on EASA AI Concept Paper Proposed Issue 3 from EASA's official 3 June 2026 announcement; no matrix field required a change. Source: https://www.easa.europa.eu/en/newsroom-and-events/news/easa-releases-latest-issue-its-concept-paper-artificial-intelligence

### Editorial judgments

- Rated `ISO/IEC DIS 4213`, `ISO/IEC FDIS 24970`, and `ISO/IEC FDIS 25059` Medium for Physical-AI relevance because their cross-sector performance, logging, and quality-model provisions can support cyber-physical assurance but do not define domain-specific product safety.
- Rated `IEEE 2863-2026` Medium because organizational AI governance can support safety accountability across sectors but is not a direct physical-system safety standard.
- Rated `EN 18286:2026` Medium because its quality-management requirements support providers of high-risk AI, including safety-relevant systems, while remaining cross-sector and organizational.

### Validation

- Embedded data evaluated successfully as JavaScript using the bundled Node.js runtime.
- Verified 117 entries, 11 issuer groups, 97 current-status entries, and 55 High Physical-AI entries.
- Verified all required fields, HTTPS-only URLs, and no duplicate publication identifiers.
- Exercised representative search, single-filter, combined-filter, sort, and pagination derivations.
- Crawled all 104 unique matrix URLs: 96 healthy, 0 redirected, 0 broken, 0 temporarily unavailable, and 8 access-blocked. The access-blocked URLs affect `IEEE 7002-2022`; `UN Regulation No. 155` and `UN Regulation No. 156` (shared UNECE page); `UN Regulation No. 157`; `UN Regulation on Automated Driving Systems (ADS)`; `EASA AI Concept Paper Proposed Issue 3`; `EASA NPA 2025-07 / proposed DS.AI`; `UNESCO Recommendation on AI Ethics`; and `Canada Directive on Automated Decision-Making`. Each represented publication was confirmed through another official page or an authoritative indexed record; none was classified as broken.
- The `EN 18286:2026` catalogue URL initially failed direct retrieval but loaded successfully through the official CEN-CENELEC publication link on retry and was classified healthy.
- `git diff --check` passed, and the standards-matrix diff was reviewed for unintended changes.

### Follow-up items

- UNECE's available official records still identify the new ADS measure as an adopted draft UN Regulation without exposing a final regulation number or exact entry-into-force date; retain `Adopted` status.
- EASA's matrix landing pages were access-blocked in automated retrieval, although the official news announcement confirmed the Proposed Issue 3 consultation deadline.
- ETSI work-programme scheduling data for current SAI drafts contains ambiguous milestone ordering; no draft status or publication claim was changed without an unambiguous official record.

## 2026-08-14

### Confirmed factual changes

- Corrected the `ISO/IEC 42005:2025` URL from `https://www.iso.org/standard/42005.html` to ISO's official `https://www.iso.org/standard/42005`, and the `ISO/IEC 42006:2025` URL from `https://www.iso.org/standard/42006.html`, which resolves to unrelated withdrawn ISO 24095:2009, to ISO's official `https://www.iso.org/standard/42006?browse=tc`. ISO identifies both as published International Standards; the latter is the AIMS audit-and-certification-bodies standard. Sources: https://www.iso.org/standard/42005 and https://www.iso.org/standard/42006?browse=tc
- Corrected the `ISO/IEC 42001:2023` official URL from `https://www.iso.org/standard/42001.html`, which resolves to unrelated withdrawn ISO 12164-4, to ISO's official `ISO/IEC 42001:2023` landing page: https://www.iso.org/standard/42001
- Added `IEEE P4501`. IEEE records approval of the active standards project on 14 May 2026. Its official scope establishes a lifecycle framework for Physical AI in manufacturing, including terminology, high-level reliability and precision requirements, secure data governance, human-system interaction, and alignment with industrial safety and security standards. Source: https://standards.ieee.org/ieee/4501/12576/

### Editorial judgments

- Rated `IEEE P4501` High for Physical-AI relevance because it directly addresses AI systems that sense, decide, and actuate in industrial manufacturing environments. Classified it under Lifecycle & process because the official scope spans the full implementation lifecycle and uses existing safety standards rather than defining a standalone product-safety approval.

### Validation

- ISO's official page identifies `ISO/IEC 42001:2023` as a published International Standard with a December 2023 publication date.
- Embedded data evaluated successfully as JavaScript using the available Windows Script Host runtime.
- Verified 112 entries, 11 issuer groups, 95 current-status entries, and 55 High Physical-AI entries.
- Verified all required fields, HTTPS-only URLs, and no duplicate publication identifiers.
- Exercised representative search, single-filter, and combined-filter derivations.
- `git diff --check` passed.

### Follow-up items

- The EASA Proposed Issue 3 landing page still does not expose the stated 12 August 2026 consultation deadline in retrievable official text, so that claim was not changed.
- UNECE's available official records still identify the new ADS measure as an adopted draft UN Regulation without exposing a final regulation number or exact entry-into-force date; retain `Adopted` status.

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
