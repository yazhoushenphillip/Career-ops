# Story Bank — Master STAR+R Stories

This file accumulates your best interview stories over time. Each evaluation (Block F) adds new stories here. Instead of memorizing 100 answers, maintain 5-10 deep stories that you can bend to answer almost any behavioral question.

## How it works

1. Every time `/career-ops oferta` generates Block F (Interview Plan), new STAR+R stories get appended here
2. Before your next interview, review this file — your stories are already organized by theme
3. The "Big Three" questions can be answered with stories from this bank:
   - "Tell me about yourself" → combine 2-3 stories into a narrative
   - "Tell me about your most impactful project" → pick your highest-impact story
   - "Tell me about a conflict you resolved" → find a story with a Reflection

## Stories

<!-- Stories will be added here as you evaluate offers -->
<!-- Format:
### [Theme] Story Title
**Source:** Report #NNN — Company — Role
**S (Situation):** ...
**T (Task):** ...
**A (Action):** ...
**R (Result):** ...
**Reflection:** What I learned / what I'd do differently
**Best for questions about:** [list of question types this story answers]
-->

### [Data / Analytics] NWCF Budget Forecasting — End-to-End Automated System
**Source:** Report #015 — JPMorgan Chase — Data Analyst
**S:** Navy needed a reliable budget forecasting system from fragmented financial datasets across multiple programs.
**T:** Build an end-to-end automated pipeline: data ingestion → model → live dashboard used by planners.
**A:** Built Python + SQL/KQL ingestion pipeline, deployed an XGBoost forecasting model, and connected outputs to a live Tableau dashboard via a Python API layer. Fully automated from data ingest to visualization.
**R:** Automated pipeline used in active Navy budget planning workflows, including Congressional budget cycles.
**Reflection:** Would instrument the model with drift detection earlier — manual monitoring doesn't scale.
**Best for questions about:** "Tell me about a complex data project you built," "How do you approach end-to-end analytics," "Give an example of using data to support business decisions"

### [Communication / Stakeholder] NAVSEA Budget Insights for Leadership
**Source:** Report #015 — JPMorgan Chase — Data Analyst
**S:** NAVSEA management needed actionable financial planning insights from timecard and budget data they couldn't easily parse themselves.
**T:** Analyze financial datasets and translate findings into clear management summaries for resource allocation decisions.
**A:** Used SQL analysis to process timecard and budget data, then structured outputs into concise leadership summaries with specific recommendations.
**R:** Outputs directly used by management for financial planning and resource allocation — recurring ask became a standard deliverable.
**Reflection:** Should have built self-serve reporting earlier to reduce dependency on me for ad-hoc requests.
**Best for questions about:** "How do you communicate data insights to non-technical stakeholders," "Tell me about influencing a decision with data," "Give an example of presenting to leadership"

### [Quality / Standards] Enforcing ML Best Practices Across Contractor Teams
**Source:** Report #015 — JPMorgan Chase — Data Analyst
**S:** Multiple contractor teams at NAVSEA had inconsistent data preprocessing and model validation standards, creating reproducibility risk.
**T:** Establish and enforce consistent ML engineering standards across teams without direct authority over contractors.
**A:** Implemented code reviews, documented validation requirements, and established pipeline reproducibility checks as a standard before any model deployment.
**R:** Reduced model reproducibility issues across programs; standards adopted as baseline for new contractor onboarding.
**Reflection:** Written documentation of validation standards would have scaled better than relying on code review feedback loops.
**Best for questions about:** "Tell me about maintaining data quality," "How do you handle working with external teams," "Describe a time you improved a process"

### [Forecasting / Production] Flight Hours Forecasting — Accuracy Under Operational Constraints
**Source:** Report #018 — Northrop Grumman — Principal Data Scientist
**S:** Navy required reliable flight-hour cost estimates to drive annual budget planning cycles — manual estimation had meaningful variance.
**T:** Own full model development and deployment into an active planning workflow.
**A:** Evaluated AutoTS and Random Forest approaches, iterated on feature engineering, validated against historical actuals across cycles. Deployed the pipeline to run automatically for each planning cycle.
**R:** 10% improvement in cost estimation accuracy; model outputs integrated into the planning process replacing manual estimates.
**Reflection:** Accuracy improvement mattered less than pipeline reliability — learned to prioritize uptime and reproducibility over marginal model gains.
**Best for questions about:** "Tell me about deploying a model in production," "How do you validate a model before shipping," "Describe a forecasting problem you solved"

### [Ambiguity / High Agency] Internal AI Agent & RAG System — Self-Directed Build
**Source:** Report #018 — Northrop Grumman — Principal Data Scientist
**S:** Team members spent significant time on manual lookups through internal documentation and datasets — no internal tool existed to address this.
**T:** Define scope, build, and deploy a solution with no prior requirements document or stakeholder mandate.
**A:** Built a RAG system (vector embeddings + retrieval pipeline) indexing internal docs and datasets. Integrated via VSCode extension for in-IDE access. Added tool-use patterns for structured data queries without manual analyst intervention.
**R:** Team members could query internal data and documentation via natural language; reduced analyst intervention for ad-hoc data questions.
**Reflection:** Started too broad — scoped to one data source after early feedback. Narrower initial scope = faster trust = bigger eventual adoption.
**Best for questions about:** "Tell me about a time you identified and solved a problem without being asked," "How do you operate in ambiguity," "Describe a self-directed project"

---

## Stories Added for AEG Presents Interview

### [A/B Testing / Experimentation] Model Comparison — Flight Hours Forecasting
**Source:** AEG Presents interview prep — 2026-05-11
**S:** Navy budget planning relied on manual flight-hour cost estimates with meaningful variance. I needed to determine which automated forecasting approach to deploy into an active planning workflow — there was no room for a wrong pick, because the output feeds real budget cycles.
**T:** Evaluate two candidate approaches (AutoTS vs. Random Forest) and select the one to deploy, with evidence to back the decision.
**A:** Structured a comparison using a historical holdout period as the test set. Defined evaluation criteria upfront: prediction accuracy, runtime consistency, and maintainability by non-ML staff. Ran both approaches through identical feature engineering, validated on the same holdout windows, and documented the delta. Iterated feature engineering on the winning approach before deployment.
**R:** Selected Random Forest based on validated holdout performance. Deployed into the planning pipeline — improved cost estimation accuracy by 10% vs. the prior manual baseline.
**Reflection:** The comparison was rigorous but informal — no written hypothesis document before I started. In future experiments I'd define success criteria and confidence thresholds before running, not after seeing results.
**Best for questions about:** "Walk me through how you'd design an A/B test," "How do you validate an analytical approach before committing to it," "Describe a time you chose between two competing solutions with data"

### [User / Customer Behavior Analytics] RAG System Usage Analytics — Behavior-Driven Iteration
**Source:** AEG Presents interview prep — 2026-05-11
**S:** After deploying the internal RAG agent, adoption was uneven — some team members used it daily, others didn't touch it. I needed to understand the pattern to improve it, not just assume what wasn't working.
**T:** Instrument the system to track usage behavior and use those signals to prioritize what to improve next.
**A:** Tracked query patterns (which topics got asked most), data source hit rates (which indexes got retrieved), and failed queries (where the system returned low-confidence or empty results). Mapped high-failure query types back to missing or poorly indexed data sources. Used that behavioral signal — not intuition — to decide what to index next and which retrieval parameters to tune.
**R:** Narrowed the next development sprint to the two highest-traffic data sources with the worst retrieval accuracy. Adoption among active users increased after those targeted improvements — fewer dead-end queries.
**Reflection:** Treating your own tool's users as a dataset is the fastest feedback loop. Should have instrumented from day one instead of retrofitting logging after launch.
**Best for questions about:** "How do you use data to understand user behavior," "Tell me about iterating on a product based on usage signals," "Describe a time you let data drive a prioritization decision"

### [Stakeholder Prioritization] Managing Competing Analytical Requests Across Navy Programs
**Source:** AEG Presents interview prep — 2026-05-11
**S:** As the primary data scientist supporting multiple Navy programs at NAVSEA, I regularly had simultaneous requests — budget analysis from one program office, model validation from another, ad hoc data pulls from a third — all marked urgent.
**T:** Sequence and deliver across all programs without dropping anything or creating the impression that any program was being deprioritized.
**A:** Built a simple mental triage framework: impact (program budget size and downstream consequences of delay) × timing (Congressional cycle deadlines and hard reporting dates). Applied it consistently and — critically — communicated the sequencing explicitly to each program lead upfront rather than silently queuing. If something would take three days instead of one, I said so immediately with a reason.
**R:** Delivered to all programs on time for their respective budget cycles across my tenure. The proactive communication eliminated most escalations — program leads could plan around my timeline because they knew it in advance.
**Reflection:** The triage framework mattered less than the communication. Stakeholders can handle "yours is third in queue" — they can't handle silence. I now communicate sequencing by default, not as a last resort.
**Best for questions about:** "How do you handle competing priorities from multiple stakeholders," "Describe a time you had to manage multiple deadlines simultaneously," "How do you say no (or not yet) to a stakeholder"
