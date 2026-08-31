# Material audit log

This log records audits that produced a material matrix change. No-change runs are intentionally not recorded here because scheduled audits must leave a clean repository untouched.

## 2026-08-31

### Confirmed factual changes

- Added `ISO/IEC WD 25959.2`. ISO records the deep-learning attack-potential project at stage 20.20 after a working-draft study was initiated on 16 July 2026; its scope expressly covers image recognition in autonomous driving, face recognition, and video surveillance. Source: https://www.iso.org/standard/92164.html
- Added `ISO/IEC AWI 26160`. ISO records the AI-specific Common Criteria evaluation-guidance project at stage 20.00, covering application notes for security assurance requirements and evaluation work units plus an extended class of AI security functional requirements. Source: https://www.iso.org/standard/92749.html
- Added `ETSI DTR 104 197`. ETSI records version 0.0.4 of its secure-by-design, safety, security, and assurance work item as a final draft for approval dated 19 August 2026; the document is not yet ready for publication. Source: https://portal.etsi.org/webapp/WorkProgram/Report_WorkItem.asp?WKI_ID=74867
- Added `ETSI DTS 104 216`. ETSI records version 0.0.7 of the conformance-assessment and metrics work item for EN 304 223 as a final draft dated 24 August 2026; it is not yet published. Source: https://portal.etsi.org/webapp/WorkProgram/Report_WorkItem.asp?WKI_ID=74988
- Added `FDA GenAI-enabled medical devices discussion paper`. FDA issued the discussion paper on 18 August 2026 to seek feedback on risk assessment, premarket evaluation, clinical confirmation, postmarket monitoring, foundation models, and agentic AI; FDA explicitly states that it is not draft or final guidance. Source: https://www.fda.gov/media/194242/download
- Updated `ANSI/CAN/UL 3300 Ed. 1` for the 14 August 2026 revision. UL records ANSI and SCC approval and identifies new verification and validation test cases for obstacle variation, travel around humans, and robots employing AI in safety functions. Source: https://www.shopulstandards.com/ProductDetail.aspx?productId=UL3300_1_S_20240514

### Editorial judgments

- Rated `ISO/IEC WD 25959.2` High for Physical-AI relevance because its attack-potential method expressly includes autonomous-driving image recognition and other sensing applications with real-world safety consequences.
- Rated `ISO/IEC AWI 26160`, `ETSI DTR 104 197`, and `ETSI DTS 104 216` Medium because their security-assurance and conformance methods can support physical-AI evidence but are cross-sector rather than product-domain safety standards.
- Rated the FDA discussion paper High because it addresses risk-proportionate evaluation and monitoring of medical-device functions that can direct or autonomously take clinically consequential actions.
- Preserved the existing High rating for UL 3300; the issuer's 2026 revision supports the factual description but does not determine the editorial Physical-AI rating.

### Validation

- Parsed all embedded matrix rows and verified every required field, HTTPS URL, and publication identifier; no required field was missing and no duplicate publication identifier was found.
- Verified 164 entries, 160 unique URLs, 11 issuer groups, 108 current-status entries, and 73 High Physical-AI entries.
- Exercised representative behavior derivations: the `medical` search returned 19 entries, the ETSI filter returned 9, Automotive plus High returned 16, publication sorting retained all rows, and a page size of 10 produced 17 pages.
- Crawled all 160 unique matrix URLs with browser or web retrieval and manually reviewed exceptions: 157 healthy, 0 redirected, 0 broken, 2 temporarily unavailable, and 1 access-blocked. `IEC 60601-1:2005 + A1/A2` and `SAE J3321_202603` timed out after retry while their initial browser titles identified the expected publications. The `Canada Directive on Automated Decision-Making` target rejected the request and remains access-blocked. All three URLs were retained because no evidence showed a broken or wrong target.
- `git diff --check` passed, and the standards-matrix diff was reviewed for unintended changes.

### Discovery sweep, candidate queue, and follow-up items

- Checked the required SC 42 and SC 27 work programmes, ISO lifecycle-stage codes, ITU AI Standards Exchange, AI Standards Hub, NIST AI Standards page, and NCSL 2025 legislation baseline. The SC 27 programme produced the two supported ISO/IEC additions above; the other available discovery sources produced no further primary-source-supported matrix change.
- ISO Online Browsing Platform exposed only its client-side application shell to retrieval and remains access-limited. NCSL's 2025 baseline did not link a 2026 successor. These are follow-up items rather than evidence of no underlying activity.
- Reviewed every represented ISO/IEC, IEEE, IEC, UL Standards & Engagement, NIST, EU/CEN-CENELEC, ETSI, automotive, medical/health, aviation, and government/professional issuer family through official sources. ETSI `TS 104 225` and `TS 104 275` remain final-draft leads to revisit at publication because their privacy and deepfake scopes are less directly tied to the matrix's safety-and-assurance focus. EASA still exposes Proposed Issue 3, and UNECE still does not expose an unambiguous final regulation number and exact entry-into-force date for the adopted ADS regulation.
- The live GitHub standards candidate queue returned no open issues matching `is:issue is:open label:candidate label:"matrix:standards"`; no routing, normalization, disposition, or committed-change reconciliation was required.

## 2026-08-29

### Confirmed factual changes

- Advanced `ISO/IEC FDIS 24970` from stage 50.00 to 50.20. ISO records the proof sent to the secretariat or initiation of the eight-week FDIS ballot on 28 August 2026. Source: https://www.iso.org/standard/88723.html

### Validation

- Evaluated the embedded data in the bundled JavaScript runtime and verified all required fields, HTTPS URLs, unique publication identifiers, and representative search, filter, sort, and pagination derivations.
- Verified 159 entries, 155 unique URLs, 11 issuer groups, 108 current-status entries, and 71 High Physical-AI entries.
- Crawled all 155 unique matrix URLs: 146 healthy, 0 redirected, 0 broken, 2 temporarily unavailable, 5 access-blocked, and 2 environment-blocked. The non-healthy targets were retained because they were corroborated through another official page or official indexed record, or because the retrieval limitation supplied no evidence of a broken target.
- `git diff --check` passed, and the standards-matrix diff was reviewed for unintended changes.

### Discovery sweep, candidate queue, and follow-up items

- Checked the required SC 42 work programme, ISO lifecycle-stage codes, ITU AI Standards Exchange, AI Standards Hub, NIST AI Standards page, NCSL 2025 baseline, and NCSL's current 2025-present AI legislation database. The SC 42 programme produced the supported `ISO/IEC FDIS 24970` transition; the other available discovery sources produced no further primary-source-supported matrix change.
- The SC 27 work programme timed out on both attempts, and the ISO Online Browsing Platform required client-side JavaScript that web retrieval could not execute. These two discovery sources remain follow-up items.
- Reviewed every represented ISO/IEC, IEEE, IEC, UL Standards & Engagement, NIST, EU/CEN-CENELEC, ETSI, automotive, medical/health, aviation, and government/professional issuer family through official matrix targets. No other status, edition, legal-significance, or link change was supported.
- GitHub candidate-queue access was unavailable because `gh` is not installed and the public issue search page could not be retrieved; no issue state was changed.

## 2026-08-28

### Confirmed factual changes

- Added `ISO/IEC AWI TS 42119-8`. ISO records the prompt-based text-to-text generative-AI quality-assessment project at stage 20.00, registered in the SC 42 work programme on 13 September 2025, with safety assessment, red teaming, result interpretation, and documentation in scope. Source: https://www.iso.org/standard/91609.html
- Added `NIST AI 300-1 (initial public draft)`. NIST published the public-facing AI documentation zero draft on 30 July 2026 and is accepting input through 16 September 2026 before a possible later submission into voluntary-consensus standardization. Sources: https://www.nist.gov/publications/guidance-and-templates-public-facing-ai-documentation-ai-standards-zero-draft-initial and https://www.nist.gov/artificial-intelligence/nists-ai-standards-zero-drafts-pilot-project-accelerate-standardization

### Editorial judgments

- Rated `ISO/IEC AWI TS 42119-8` Low for Physical-AI relevance because its scope is prompt-based text-to-text generative AI rather than embodied or cyber-physical operation, despite its explicit safety-assessment content.
- Rated `NIST AI 300-1 (initial public draft)` Low because its transparency and documentation guidance is cross-sector and not specific to physical systems or product-safety assurance.

### Validation

- Evaluated the embedded data in an isolated JavaScript runtime and verified all required fields, HTTPS URLs, and unique publication identifiers.
- Verified 159 entries, 155 unique URLs, 11 issuer groups, 108 current-status entries, and 71 High Physical-AI entries; representative search, filter, sort, and pagination derivations passed.
- Crawled all 155 unique matrix URLs with browser and web retrieval, retrying and manually corroborating non-healthy results: 153 healthy, 0 redirected, 0 broken, 0 temporarily unavailable, and 2 access-blocked.
- The exact EUR-Lex AI Act target and the Treasury Board of Canada directive target were access-blocked during direct retrieval. The former was corroborated through the European Commission's official AI Act page, and the latter through official Government of Canada records and an indexed copy of the directive.
- `git diff --check` passed, and the standards-matrix diff was reviewed for unintended changes.

### Discovery sweep, candidate queue, and follow-up items

- Checked the required SC 42 and SC 27 work programmes, ISO Online Browsing Platform, ISO lifecycle-stage codes, ITU AI Standards Exchange, AI Standards Hub, NIST AI Standards page, and NCSL 2025 legislation baseline. The SC 42 and NIST sources produced the two supported additions above; the other discovery sources produced no further primary-source-supported matrix change.
- The guessed NCSL 2026 successor URL returned a not-found page and no current-year successor was linked from the 2025 baseline; revisit when NCSL publishes or links a successor.
- Reviewed the represented ISO/IEC, IEEE, IEC, UL Standards & Engagement, NIST, EU/CEN-CENELEC, ETSI, automotive, medical/health, aviation, and government/professional issuer families through their official matrix targets. No other status, edition, legal-significance, or link change was supported.
- The connected GitHub standards candidate queue was empty; no routing, normalization, disposition, or committed-change reconciliation was required.
- Direct rendered-page validation remained unavailable because no host JavaScript runtime is installed and local `file://` navigation is blocked. No dependency was installed; JavaScript data evaluation and behavior derivations passed.

## 2026-08-27

### Confirmed factual changes

- Added `ISO/IEC AWI 25870`. ISO records the AI-system incident-reporting data-elements project at stage 20.00, registered in the SC 42 work programme on 7 July 2025. Source: https://www.iso.org/standard/91804.html
- Added `ISO/IEC AWI 25880`. ISO records the organizational implementation of human-machine teaming project at stage 20.00, registered in the SC 42 work programme on 17 June 2026. Source: https://www.iso.org/standard/91833.html
- Added `IEEE P3396`. IEEE records an active PAR approved on 21 September 2023 for a lifecycle framework addressing AI risk, safety, trustworthiness, and responsibility. Source: https://standards.ieee.org/ieee/3396/11379/
- Updated `ISO/IEC DTS 22443` from stage 50.00 to 50.20 after ISO recorded the eight-week approval step on 26 August 2026. Source: https://www.iso.org/standard/87119.html
- Updated `ISO/IEC FDIS 42105` from stage 50.00 to 50.20 after ISO recorded the eight-week FDIS approval step on 26 August 2026. Source: https://www.iso.org/standard/86902.html
- Replaced the `Directive (EU) 2024/2853` URL with EUR-Lex's exact English ELI target and replaced the OECD Due Diligence Guidance URL with OECD's canonical publication target. Sources: https://eur-lex.europa.eu/eli/dir/2024/2853/oj/eng and https://www.oecd.org/en/publications/oecd-due-diligence-guidance-for-responsible-ai_41671712-en.html

### Editorial judgments

- Rated `ISO/IEC AWI 25870` Medium for Physical-AI relevance because consistent incident reporting supports operational safety and post-market learning for physical AI, while the project is cross-sector.
- Rated `ISO/IEC AWI 25880` Medium because operational human-machine teaming can directly affect physical-system oversight, but the project applies across AI applications and is not a domain-specific product-safety standard.
- Rated `IEEE P3396` Medium because its AI-risk and safety framework spans the full lifecycle and can support physical-AI assurance, while remaining cross-sector and principles-based.

### Validation

- Parsed the embedded object literal through a strict JSON-compatible data check and verified required fields, HTTPS URLs, and unique publication identifiers.
- Verified publication, issuer-group, current-status, and High Physical-AI counts; verified representative search, filter, sort, and pagination derivations.
- Crawled all 153 unique matrix URLs with web retrieval, retried non-healthy results, and manually corroborated blocked or unavailable records through other official pages: 144 healthy, 0 redirected, 0 broken, 2 temporarily unavailable, 5 access-blocked, and 2 environment-blocked.
- `git diff --check` passed, and the standards-matrix diff was reviewed for unintended changes.

### Candidate queue and follow-up items

- The public GitHub standards candidate queue could not be reviewed because the issue search page was unavailable and the GitHub CLI is not installed; no issue state was changed.
- Direct JavaScript-runtime and rendered-page validation was unavailable because no local JavaScript runtime is installed and the in-app browser security policy blocks local `file://` pages. No dependency was installed; the strict data parse and behavior derivations passed.
- The CEN-CENELEC catalogue target for `EN 18286:2026` and the UNECE landing page shared by `UN Regulation No. 155` and `UN Regulation No. 156` were environment-blocked; their official records were corroborated through other authoritative pages.
- `IEEE 7009-2024` and `SAE J3016_202104` were temporarily unavailable after retry. The exact Product Liability Directive target, `UN Regulation No. 157`, the UNECE ADS regulation target, `EASA AI Concept Paper Issue 2`, and `EASA NPA 2025-07 / proposed DS.AI` were access-blocked. Each was corroborated through another official page or official indexed record during this run.

## 2026-08-25

### Confirmed factual changes

- Added `ISO/IEC DTS 42119-3.2`. ISO records the cross-sector verification-and-validation analysis guidance at stage 50.20, covering formal methods, simulation, and evaluation of AI systems across lifecycle stages. Source: https://www.iso.org/standard/85072.html
- Added `ISO/IEC AWI TS 25864`. ISO records the AI-system resilience-assessment project at stage 20.00 and describes methods, mechanisms, guidelines, methodologies, and quantifiable metrics for resilience assessment. Source: https://www.iso.org/standard/91831.html
- Added `ISO/IEC AWI TS 42119-7`. ISO records the AI red-teaming project at stage 20.00 and describes technology-agnostic guidance for planning, executing, documenting, and integrating red-teaming assessments across the AI lifecycle. Source: https://www.iso.org/standard/91240.html
- Added `IEEE P3953`. IEEE records an active PAR approved on 12 February 2026 for safety, reliability, predictable behavior, privacy, crisis escalation, and explainable deployment of user-facing conversational AI applications that use large language models. Source: https://standards.ieee.org/ieee/3953/12484/
- Added `NIST AI 200-2 (initial public draft)`. NIST released the TEVV-Athlon Framework on 7 August 2026 as a four-stage method for customized AI test, evaluation, verification, and validation assessments and is accepting input through 6 October 2026. Source: https://www.nist.gov/artificial-intelligence/ai-research/tevv-athlon-framework-evaluating-ai-systems

### Editorial judgments

- Rated `ISO/IEC DTS 42119-3.2` High for Physical-AI relevance because its verification-and-validation approaches can directly support assurance of safety-relevant AI system components and their interactions with non-AI components, although the work item itself is cross-sector.
- Rated `ISO/IEC AWI TS 25864` Medium because resilience assessment can support cyber-physical assurance, but the work item is cross-sector and does not define domain-specific product safety.
- Rated `ISO/IEC AWI TS 42119-7` Medium because red-teaming can identify safety and security weaknesses in physical AI, but the work item applies to all AI systems and is not domain-specific.
- Rated `IEEE P3953` Low because its safety scope concerns user-facing conversational AI and user well-being rather than embodied or cyber-physical operation.
- Rated `NIST AI 200-2 (initial public draft)` Medium because flexible TEVV and real-world impact assessment can support physical-AI evidence, while the framework remains cross-sector and voluntary.

### Validation

- Evaluated all embedded matrix rows as JavaScript using the bundled Node.js runtime.
- Verified 154 entries, 11 issuer groups, 108 current-status entries, and 71 High Physical-AI entries.
- Verified all required fields, HTTPS-only URLs, and no duplicate publication identifiers.
- Exercised representative search, single-filter, combined-filter, sort, and pagination derivations: `medical` returned 18 entries, IEC returned 9, Automotive plus High returned 16, publication sorting retained all rows, and a page size of 10 produced 16 pages.
- Crawled all 150 unique matrix URLs with browser retrieval and manual official-source follow-up: 137 healthy, 0 redirected, 2 broken, 2 temporarily unavailable, 8 access-blocked, and 1 environment-blocked.
- Two EUR-Lex ELI targets redirected to the current Official Journal index rather than the represented acts and remain broken (wrong target): `Directive (EU) 2024/2853` and `Regulation (EU) 2017/745`. Exact CELEX alternatives encountered EUR-Lex bot protection, so no replacement was made.
- The temporarily unavailable URLs affect `Regulation (EU) 2023/1230` and `SAE J3016_202104`.
- The access-blocked URLs affect `Regulation (EU) 2024/1689`, `Regulation (EU) 2024/2847`, `Regulation (EU) 2023/988`, `UN Regulation No. 155` and `UN Regulation No. 156` (shared UNECE page), `UN Regulation No. 157`, `UN Regulation on Automated Driving Systems (ADS)`, `EASA NPA 2025-07 / proposed DS.AI`, and `Canada Directive on Automated Decision-Making`.
- The `EN 18286:2026` CEN-CENELEC catalogue URL was environment-blocked by the retrieval safety layer; its exact official record was retained from the latest confirmed audit disposition.
- `git diff --check` passed, and the standards-matrix diff was reviewed for unintended changes.

### Candidate queue and follow-up items

- The connected GitHub standards candidate queue was empty; no candidate routing, normalization, or committed-change reconciliation was required.
- Replace the two broken EUR-Lex ELI links when exact official targets can be shown to retrieve the represented acts consistently; do not substitute an unverified target.
- UNECE's official pages were access-blocked, and no final regulation number or exact entry-into-force date was verified for the adopted ADS regulation; retain `Adopted` status.
- EASA still exposes only Proposed Issue 3 of its AI Concept Paper and NPA 2025-07 remains proposed; retain both `Proposed` statuses.
- NIST continues to identify AI RMF 1.0 as the current framework while stating that it is being revised; retain the current row.
- Track the NIST AI 200-2 public draft after its 6 October 2026 comment deadline for a revised or final publication.
- IMDRF continues to identify N93 as a proposed document whose consultation is closed; retain `Proposed` status.

## 2026-08-24

### Confirmed factual changes

- Added `ISO/IEC DIS 25029`. ISO records the responsible-design guidance and requirements for AI-enhanced nudging at stage 40.20, with the 12-week DIS ballot initiated on 15 June 2026. Source: https://www.iso.org/standard/88817.html
- Added `ISO/IEC AWI TS 25223`. ISO records the lifecycle guidance and requirements for uncertainty quantification in AI systems as an Approved Work Item at stage 20.00. Source: https://www.iso.org/standard/89475.html
- Added `ISO/IEC CD TS 25568`. ISO records the generative-AI risk guidance at stage 30.60 after the committee-draft comment period closed on 4 July 2026. Source: https://www.iso.org/standard/90754.html
- Normalized the `IEEE P3961` URL to the canonical trailing-slash form after the official IEEE project page redirected the existing target and continued to identify an active PAR for swarm-intelligence architecture and communication requirements. Source: https://standards.ieee.org/ieee/3961/12441/

### Editorial judgments

- Rated `ISO/IEC DIS 25029` and `ISO/IEC CD TS 25568` Low for Physical-AI relevance because their scopes concern cross-sector behavioural influence and generative-AI risk rather than direct assurance of physical systems.
- Rated `ISO/IEC AWI TS 25223` Medium for Physical-AI relevance because uncertainty quantification can materially support cyber-physical assurance, but the work item is cross-sector and remains at an early stage.

### Validation

- Evaluated all embedded matrix rows as JavaScript using Windows Script Host.
- Verified 149 entries, 11 issuer groups, 108 current-status entries, and 70 High Physical-AI entries.
- Verified all required fields, HTTPS-only URLs, and no duplicate publication identifiers.
- Exercised representative search, single-filter, combined-filter, sort, and pagination derivations: `medical` returned 18 entries, IEC returned 9, Automotive plus High returned 16, publication sorting retained all rows, and a page size of 10 produced 15 pages.
- Crawled all 145 unique matrix URLs with web retrieval and manual official-source follow-up: 132 healthy, 0 redirected, 4 broken, 4 temporarily unavailable, and 5 access-blocked.
- Four EUR-Lex ELI targets resolved to the unrelated Today's Official Journal page and were classified as broken (wrong target): `Regulation (EU) 2024/1689`, `Regulation (EU) 2024/2847`, `Directive (EU) 2024/2853`, and `Regulation (EU) 2023/988`. The represented acts remain confirmed through official EUR-Lex records, but no consistently retrievable replacement target was available during this run.
- The temporarily unavailable URLs affect `IEEE P4106`, `EN 18286:2026`, `SAE J3016_202104`, and `SAE ARP4754B / ARP4761A`. Each represented publication was confirmed through another official page or authoritative official indexed record.
- The access-blocked URLs affect `UN Regulation No. 155` and `UN Regulation No. 156` (shared UNECE page), `UN Regulation No. 157`, `UN Regulation on Automated Driving Systems (ADS)`, `EASA AI Concept Paper Proposed Issue 3`, and `EASA NPA 2025-07 / proposed DS.AI`. Each represented publication was confirmed through another official page or authoritative official indexed record.
- `git diff --check` passed, and the standards-matrix diff was reviewed for unintended changes.

### Candidate queue and follow-up items

- The standards candidate queue could not be reviewed because the local GitHub CLI is unavailable and GitHub issue-page retrieval failed; no candidate labels, comments, or issue states were changed.
- Replace the four broken EUR-Lex ELI links when exact official targets can be shown to retrieve the represented acts consistently; do not substitute an unverified target.
- UNECE's official records still do not expose a final regulation number or exact entry-into-force date for the adopted ADS regulation; retain `Adopted` status.
- EASA still exposes only Proposed Issue 3 of its AI Concept Paper after the consultation closed, and NPA 2025-07 remains proposed; retain both `Proposed` statuses.
- NIST continues to identify AI RMF 1.0 as the current framework while stating that it is being revised; retain the current row.
- IMDRF continues to identify N93 as a proposed document whose consultation closed on 10 July 2026; retain `Proposed` status.

## 2026-08-23

### Confirmed factual changes

- Updated `ISO/IEC DIS 24029-3` to `ISO/IEC FDIS 24029-3`. ISO records stage 50.00 on 21 August 2026, when the final text was received or the FDIS was registered for formal approval. Source: https://www.iso.org/standard/86901.html
- Updated `ISO/IEC FDIS 27090` to `ISO/IEC 27090` under publication. ISO records completion of the approval stage and stage 60.00 on 19 August 2026, with final production still in progress. Source: https://www.iso.org/standard/56581.html
- Added `IEEE P7027`. IEEE records an active PAR approved on 4 June 2026 for identifying, assessing, and mitigating relational risks from sustained interaction with physically embodied social robots in domestic, educational, child-facing, caregiving, and similar environments. Source: https://standards.ieee.org/ieee/7027/12643/
- Corrected the wrong-target links for `IEEE 3321-2024` and `IEEE 7002-2022` to their exact IEEE records. The official pages identify the represented active standards and their respective safety-model and privacy-process scopes. Sources: https://standards.ieee.org/ieee/3321/11616/ and https://standards.ieee.org/ieee/7002/6898/
- Removed an unnecessary `browse=tc` query from eight exact ISO records whose plain canonical URLs retrieved the represented publications successfully: `ISO/IEC 24029-2:2023`, `ISO/IEC 5259-3:2024`, `ISO/IEC 5259-4:2024`, `ISO/IEC 5259-5:2025`, `ISO/IEC TR 5259-6:2026`, and `ISO/IEC CD TS 22440-1`, `-2`, and `-3`. Sources: https://www.iso.org/standard/79804.html, https://www.iso.org/standard/81092.html, https://www.iso.org/standard/81093.html, https://www.iso.org/standard/84150.html, https://www.iso.org/standard/86532.html, https://www.iso.org/standard/89535.html, https://www.iso.org/standard/89536.html, and https://www.iso.org/standard/89537.html

### Editorial judgments

- Rated `IEEE P7027` High for Physical-AI relevance because IEEE expressly limits the project to physically embodied social robots and addresses risks arising from their sustained interaction with people in sensitive real-world environments.

### Validation

- Evaluated all embedded matrix rows as JavaScript using Windows Script Host.
- Verified 146 entries, 11 issuer groups, 108 current-status entries, and 70 High Physical-AI entries.
- Verified all required fields, HTTPS-only URLs, and no duplicate publication identifiers.
- Exercised representative search, single-filter, combined-filter, sort, and pagination derivations: `medical` returned 18 entries, IEC returned 9, Automotive plus High returned 16, publication sorting retained all rows, and a page size of 10 produced 15 pages.
- Crawled all 142 unique matrix URLs with individual retrieval and transient-failure retry: 133 healthy, 0 redirected, 0 broken, 7 temporarily unavailable, and 2 access-blocked.
- The temporarily unavailable URLs affect `Directive (EU) 2024/2853`; `Regulation (EU) 2024/2847`; `EN 18286:2026`; `IEEE P4106`; `UN Regulation No. 155` and `UN Regulation No. 156` (shared UNECE page); `UN Regulation No. 157`; and `UN Regulation on Automated Driving Systems (ADS)`. Each represented publication was confirmed through another official page or authoritative official indexed record; none was classified as broken.
- The access-blocked URLs affect `Canada Directive on Automated Decision-Making` and `UNESCO Recommendation on AI Ethics`. Both exact publications were confirmed through authoritative official indexed records.
- `git diff --check` passed, and the standards-matrix diff was reviewed for unintended changes.

### Candidate queue and follow-up items

- The connected GitHub repository had no open issues matching `is:issue is:open label:candidate label:"matrix:standards"`; no candidate disposition or committed-change reconciliation was required.
- UNECE's official records still do not expose a final regulation number or exact entry-into-force date for the adopted ADS regulation; retain `Adopted` status.
- EASA still exposes only Proposed Issue 3 of its AI Concept Paper after the consultation closed; retain `Proposed` status.
- NIST continues to identify AI RMF 1.0 as the current framework while stating that it is being revised; retain the current row.
- IMDRF continues to identify N93 as a proposed document whose consultation closed on 10 July 2026; retain `Proposed` status.

## 2026-08-20

### Confirmed factual changes

- Added published `ISO/IEC TS 25058:2024`. ISO records the SQuaRE guidance for AI-system quality evaluation as published at stage 60.60 on 24 January 2024 and now marked for revision. Source: https://www.iso.org/standard/82570.html
- Added `ISO/IEC AWI 25058`. ISO records the proposed second edition at stage 20.00; it adds quality measures and guidance tied to ISO/IEC 25059 and is intended to replace ISO/IEC TS 25058:2024. Source: https://www.iso.org/standard/91881.html
- Added active IEEE projects `P3927` and `P3927.1`. IEEE records PAR approval on 12 February 2026 for auditable capability assessment of industrial embodied-intelligence systems and for requirements and acceptance criteria governing training data for embodied-intelligence robots. Sources: https://standards.ieee.org/ieee/3927/12432/ and https://standards.ieee.org/ieee/3927.1/12433/
- Added active IEEE projects `P3960` and `P3961`. IEEE records PAR approval on 12 February 2026 for industrial embodied-intelligence operating-system architecture, including modules, interfaces, and security, and for swarm-intelligence architecture and communication requirements, including security. Sources: https://standards.ieee.org/ieee/3960/12440/ and https://standards.ieee.org/ieee/3961/12441
- Added `IEEE P7007.1`. IEEE records PAR approval on 14 May 2026 for ontologies that define, characterize, and classify AI-system risks and physical or non-physical harms in robotics and automated systems. Source: https://standards.ieee.org/ieee/7007.1/12558/
- Replaced the generic SC 42 committee-catalogue targets for `ISO/IEC TR 24027:2021`, `ISO/IEC TR 24028:2020`, `ISO/IEC TR 24029-1:2021`, `ISO/IEC 24029-2:2023`, `ISO/IEC 12792:2025`, and `ISO/IEC TS 6254:2025` with their exact official ISO publication records. Sources: https://www.iso.org/standard/77607.html?browse=tc, https://www.iso.org/standard/77608.html?browse=tc, https://www.iso.org/standard/77609.html?browse=tc, https://www.iso.org/standard/79804.html?browse=tc, https://www.iso.org/standard/84111.html?browse=tc, and https://www.iso.org/standard/82148.html?browse=tc
- Split the bundled ISO/IEC 5259 matrix entry into six individually linked publications. ISO records Parts 1 through 5 as published International Standards and Part 6 as a published Technical Report. Sources: https://www.iso.org/standard/81088.html?browse=tc, https://www.iso.org/standard/81860.html?browse=tc, https://www.iso.org/standard/81092.html?browse=tc, https://www.iso.org/standard/81093.html?browse=tc, https://www.iso.org/standard/84150.html?browse=tc, and https://www.iso.org/standard/86532.html?browse=tc
- Split the bundled ISO/IEC 22440 entry into Parts 1, 2, and 3. ISO records each as a Committee Draft Technical Specification at stage 30.60, with the comment period closed on 11 April 2026. Sources: https://www.iso.org/standard/89535.html?browse=tc, https://www.iso.org/standard/89536.html?browse=tc, and https://www.iso.org/standard/89537.html?browse=tc
- Corrected the human-oversight work item identifier to `ISO/IEC FDIS 42105` and linked its exact official project record, which ISO records at stage 50.00. Source: https://www.iso.org/standard/86902.html?browse=tc

### Presentation and navigation

- Added a separate standards-discovery resources section for the SC 42 and SC 27 work programmes, ISO Online Browsing Platform, and ISO lifecycle stage codes. Clarified that matrix publication links open the exact official record for the represented deliverable.

### Editorial judgments

- Rated `ISO/IEC TS 25058:2024` and `ISO/IEC AWI 25058` Medium for Physical-AI relevance because their cross-sector quality-evaluation methods can support cyber-physical assurance without defining domain-specific product-safety requirements.
- Rated `IEEE P3927`, `IEEE P3927.1`, `IEEE P3960`, and `IEEE P7007.1` High because they directly address assessment, training data, architecture/security, or risk classification for embodied AI, robots, or industrial physical systems.
- Rated `IEEE P3961` Medium because swarm-intelligence architecture and security can support physical multi-agent systems, but IEEE's stated scope does not limit the project to safety-critical or physically embodied products.

### Validation

- Evaluated all embedded matrix rows as JavaScript in an isolated runtime.
- Verified 145 entries, 11 issuer groups, 108 current-status entries, and 69 High Physical-AI entries.
- Verified all required fields, HTTPS-only URLs, and no duplicate publication identifiers.
- Exercised representative search, single-filter, combined-filter, sort, and pagination derivations.
- Crawled all 140 unique matrix URLs across the same-day audit and targeted navigation update: 129 healthy, 0 redirected, 0 broken, 4 temporarily unavailable, and 7 access-blocked. All 16 exact ISO records introduced by the navigation update were retrieved successfully; the four discovery-resource destinations were also verified separately.
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
