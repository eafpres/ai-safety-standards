# Matrix taxonomy

This document defines the categorization model shared by the Standards & Publications and Products & Vendors matrices. It is the assignment rubric for new records and taxonomy changes.

## Core principles

- Keep the exact issuing or providing organization separate from its organizational type.
- Use `category` for the item's principal AI-safety or assurance function.
- Use `domain` only for the application industry, `technology` only for technical scope, and `jurisdiction` only for geographic or legal scope.
- Assign one primary value per facet. Choose the value that best explains why the item is in the matrix; use the summary for secondary characteristics.
- Treat category, domain, technology, provider profile, deployment context, potential standards relevance, and Physical-AI relevance as editorial classifications grounded in authoritative facts.
- Do not create a new controlled value merely to restate an issuer, provider, product name, or publication title.

The HTML pages generate filter choices directly from record values. Exact spelling therefore matters.

## Shared dimensions

### Category

Category describes the item's principal function. Standards and products use different controlled vocabularies because a publication and a commercial offering perform different roles. Crosswalks between product and standards categories are discovery aids, not certification or compliance claims.

### Domain

Use the narrowest applicable industry from the existing controlled values. Use `Cross-sector` when an item is not materially limited to one industry. Do not place technologies, jurisdictions, organization types, or regulatory intensity in this field.

Current shared or corresponding domains include:

- `Cross-sector`
- `Automotive`
- `Aviation`
- `Medical / health`
- `Financial services`
- `Industrial / manufacturing`
- `Robotics`
- `Consumer products`
- `Critical infrastructure`
- `Telecom / ICT`
- `Government / public sector`
- `Workplace / enterprise`

Not every value is currently used in both matrices.

### Technology

Technology captures the principal technical scope independently of industry. Current controlled values include:

- `General AI / machine learning`
- `Generative AI / agents`
- `Cloud / AI infrastructure`
- `Computer vision`
- `Autonomous systems`
- `Robotics / physical AI`
- `Medical AI / software`

Use `General AI / machine learning` when no narrower technical scope dominates.

### Jurisdiction

Jurisdiction records the geographic or legal scope of the issuing authority or represented requirement. International standards use `International`; national rules use the country; EU rules and EASA material use `European Union`. Product jurisdiction remains `Global / not specified` unless an authoritative provider source establishes a material restriction.

### Physical-AI relevance

Physical-AI relevance is always editorial:

- `High`: directly controls, tests, validates, certifies, or protects physical systems.
- `Medium`: materially supports cyber-physical deployment or safety without being primarily a physical-system control or assurance mechanism.
- `Low`: primarily digital, organizational, or informational.

## Standards & Publications

### Issuer and issuer type

`issuer` contains the exact normalized organization responsible for the publication. Never use an industry such as Automotive, Aviation, or Medical / health as the issuer.

`issuerType` classifies the organization:

- `Standards body`: consensus standards developers and standards-sector organizations.
- `Government / regulator`: national government agencies and regulatory authorities.
- `Intergovernmental body`: treaty, regional-government, international-policy, or multilateral regulator organizations.
- `Other organization`: reserved for an issuer that fits none of the above.

Joint publications may use a joint issuer label when responsibility is genuinely shared.

### Status

Status records the publication's own formal maturity or legal state, using the issuer's terminology where practical: `Published`, `Active`, `Under development`, `Draft`, `Proposed`, `Adopted`, `In force`, `Final guidance`, or `Open for signature`.

### Standards categories

Select the dominant assurance function from the existing vocabulary: governance and management; risk and impact; lifecycle and process; data quality and bias; testing and assurance; transparency; functional or operational safety; human oversight or factors; security and resilience; incident reporting; privacy and data governance; procurement and supply chain; conformity assessment; regulation and policy; terminology and architecture; or trustworthiness.

The conformity note must separately explain whether the publication supports management-system certification, product certification, type approval, regulatory review, assurance evidence, or no conformity mechanism.

## Products & Vendors

### Provider dimensions

`provider` contains the exact current organization presenting the offering.

`providerType` describes organizational form:

- `Commercial technology vendor`
- `Assurance / certification provider`
- `Open-source project`
- `Nonprofit / research organization`

`providerProfile` describes market positioning independently of organizational form:

- `Specialist`
- `Diversified platform`
- `Community / mission-led`

`ownershipStatus` records whether the offering is `Independent / provider-native` or `Acquired / integrated`. Do not use acquisition status as a provider type.

### Product category and lifecycle role

Category identifies the offering's main customer-facing function: governance and compliance, monitoring and observability, testing and evaluation, security and resilience, runtime guardrails, bias and explainability, Physical-AI validation, or assurance and certification.

`lifecycleRole` records where the offering principally acts in the AI-system lifecycle: `Govern & plan`, `Design & build`, `Verify & validate`, `Deploy & protect`, `Operate & monitor`, `Assure & audit`, or `Multiple stages`. It does not describe commercial maturity.

### Deployment, availability, and delivery

`deploymentContext` records a material operating or customer context such as regulated enterprise, workplace/enterprise, cloud infrastructure, regulated industry, or safety-critical physical systems. Use `General` otherwise.

`availabilityStatus` records the offering's own maturity: generally available, preview, early access, limited beta, limited availability, or partial/forthcoming.

`deliveryModel` is a controlled summary such as commercial platform, cloud platform, commercial software, hardware plus software, open source, commercial plus open source, professional services/resources, or assessment/certification services. Preserve material provider wording in `deliveryDetails`.

Potential standards relevance remains an editorial research pointer. It must never state or imply that the provider is certified, compliant, effective, or independently validated.
