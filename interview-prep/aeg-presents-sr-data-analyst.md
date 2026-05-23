# Interview Intel: AEG Presents — Sr Data Analyst (Data Strategy & Analytics)

**Report:** N/A (no prior evaluation report)
**Researched:** 2026-05-11
**Round 1:** 2026-05-13 — ✅ PASSED
**Round 2:** ~2026-05-26 (next week) — Hiring Manager / Technical Panel
**Sources:** Glassdoor (AEG Presents interview page), AEG job listings, InterviewQuery AEG guide

---

## Process Overview

- **Rounds:** 2 rounds typical
- **Format:** Recruiter/HR screen (Zoom) → Hiring manager / panel (Zoom, second round may be preferred in-person at LA HQ)
- **Difficulty:** 2.59/5 (Glassdoor, AEG Presents reviews — rated as low-moderate difficulty)
- **Positive experience rate:** ~60%
- **Timeline:** Analyst roles historically avg ~120 days end-to-end (slow pipeline at AEG — don't read ghosting as rejection early)
- **Known quirks:**
  - Second round sometimes preferred in-person at LA office
  - Interviewers range from highly engaged to "superficial questions and hypotheticals" — quality varies by hiring manager
  - HR has generally stayed communicative; some candidates ghosted after "expect next steps"
- **Sources:** [AEG Presents Interview Questions — Glassdoor](https://www.glassdoor.com/Interview/AEG-Presents-Interview-Questions-E348194.htm) | [AEG Interview Questions — Glassdoor](https://www.glassdoor.com/Interview/AEG-Interview-Questions-E239105.htm)

---

## Round-by-Round Breakdown

### Round 1: HR / Recruiter Screen
- **Duration:** 30 min (estimate)
- **Conducted by:** Talent Acquisition
- **What they evaluate:** Background fit, communication, culture signal, comp alignment, logistics
- **Reported questions:**
  - "Walk me through your background" — [source: Glassdoor AEG Presents]
  - "What problems did you face when you analyze a large dataset?" — [source: Glassdoor AEG Presents]
  - "Why AEG / why live entertainment?" — [inferred from JD + company profile]
  - "What's your salary expectation?" — [inferred — expect it early]
- **How to prepare:**
  1. Have a clean 90-second "who I am" that pivots Navy/defense data work → fan-facing analytics. Lead with "I build automated analytics systems" not "I'm a Data Scientist at the Navy."
  2. Have a ready comp answer. The posted range ($96.6K–$97.5K) is below your stated minimum ($110K). Decide before the call how you want to handle this — either negotiate upward or understand the trade-offs.

### Round 2: Hiring Manager / Panel
- **Duration:** 45–60 min (estimate)
- **Conducted by:** Likely a mix of direct manager (Data Strategy & Analytics) and cross-functional stakeholder (Marketing, possibly Product)
- **What they evaluate:** Technical depth (SQL, Tableau), stakeholder communication, ability to own the analytics stack, data storytelling
- **Reported questions:**
  - No specific technical round reported for analyst roles — skews behavioral and situational [source: Glassdoor]
  - Expect "hypotheticals" about how you'd approach a business problem with data [source: Glassdoor]
  - "How do you prioritize competing analytical requests?" — [inferred from JD: cross-functional with Product, Media, Talent Buying, Marketing]
  - "Walk me through an automated reporting system you built" — [inferred from JD: "Create, monitor and maintain automated report inventory"]
- **How to prepare:**
  1. Prepare 2–3 concrete examples of automated dashboards/reports you built. NWCF Tableau pipeline maps directly here.
  2. Bring a "how I'd approach customer behavior analytics" answer — show you've thought about the domain shift from defense to entertainment.

---

## Likely Questions

### Technical

**Q: Walk me through an end-to-end data pipeline you owned.**
- [inferred from JD: "Own analytic toolset from implementation and maintenance standpoint, including adding data sources/pipelines"]
- **Your angle:** NWCF Budget Forecasting — Python ingestion → XGBoost model → Python API → live Tableau dashboard. Fully automated. Frame it as: owned the whole thing, not just the model.

**Q: How do you identify and handle data quality issues or anomalies?**
- [inferred from JD: "Identify anomalies in the data to help trouble-shoot issues like data integrity, missing fields, broken data and UX flows"]
- **Your angle:** ML pipeline validation work at NAVSEA — enforcing preprocessing standards, catching bad data before model consumption. Be specific about what signals you look for (nulls, outlier spikes, schema drift).

**Q: What Tableau features do you use to communicate insights to non-technical audiences?**
- [inferred from JD: "Visualize key metrics on an ongoing basis to succinctly communicate out to marketing, executive team and key stakeholders"]
- **Your angle:** NWCF dashboard used in Congressional budget cycles — you built for a non-technical audience (Navy financial planners, leadership). Mention calculated fields, parameter controls, executive-friendly layouts.

**Q: Write a SQL query to find [X — likely customer behavior or event attendance pattern].**
- [inferred from JD: SQL required; AEG analytics centers on customer engagement data]
- **Your angle:** Strong SQL/KQL background. Practice: CTEs, window functions (LAG/LEAD for customer frequency), aggregation patterns for behavioral cohorts, self-joins.

**Q: How would you design an A/B test for [email campaign / ticket pricing / fan re-engagement]?**
- [inferred from JD: "Suggest A/B tests to challenge assumptions or ratify strategies"]
- **Your angle:** Reference A/B testing in your technical skills. Be ready to define: control/treatment split, metric selection, sample size/power, significance threshold, and how to read the result.

### Behavioral

**Q: Tell me about a time you made a business decision with imperfect or incomplete data.**
- [inferred from JD: "provide guidance for stakeholders in order to make informed decisions"]
- **Best story:** NWCF Budget Forecasting — worked with fragmented financial datasets. Mention how you handled gaps and communicated confidence intervals to planners.

**Q: Describe a time you had to explain a complex data finding to a non-technical stakeholder.**
- **Best story:** NAVSEA Budget Insights for Leadership — translated timecard + budget analysis into concise management summaries, became a recurring deliverable.

**Q: Give an example of owning a project end-to-end with minimal direction.**
- **Best story:** Internal AI Agent & RAG System — no prior requirements doc, self-directed, shipped. Reframe for this audience: "I identified a recurring data access problem and built a system to solve it autonomously."

**Q: Tell me about a time you identified a trend or opportunity that others hadn't noticed.**
- [inferred — senior-level behavioral, cross-functional influence]
- **Your angle:** Flight Hours Forecasting — noticed manual cost estimation variance, proposed and deployed automated forecasting. 10% accuracy improvement.

**Q: How do you handle competing priorities from multiple stakeholders?**
- [inferred from JD: serves Marketing, Product, Media, Talent Buying simultaneously]
- **Prep:** Have a framework ready — triage by business impact and deadline, communicate timeline trade-offs explicitly, don't silently drop requests.

### Role-Specific

**Q: AEG works across ticketing, venues, and live events. What customer signals would you prioritize tracking for a music festival?**
- [inferred — domain knowledge probe, checks if you've thought about the industry]
- **Your angle:** Map your ML thinking to their domain: purchase frequency, time-to-purchase before event, channel attribution (email vs. organic vs. social), repeat fan vs. first-timer segmentation. Show curiosity, not expertise you don't have.

**Q: How would you build a reporting cadence for the marketing team that needs weekly KPI visibility?**
- [inferred from JD: "Create, monitor and maintain automated report inventory" + serves marketing]
- **Your angle:** NWCF project — automated Tableau dashboard with live refresh. Walk through: what metrics to track, refresh cadence, how to handle data freshness issues, who owns updates.

**Q: What's your experience with email marketing analytics?**
- [JD: "Experience with email marketing software a plus"]
- **Honest answer:** No direct email marketing tool experience (Mailchimp, Salesforce Marketing Cloud, Braze). Frame as: "I haven't used email-specific platforms, but I've built engagement pipelines that track similar signals — open/click behavior maps to user engagement signals I've worked with in behavioral datasets. I'd ramp on the tool quickly." Don't oversell.

### Background / Red Flag Questions

**Q: Your background is in Navy/defense ML. Why a Data Analyst role at a live entertainment company?**
- **Why it comes up:** Your CV is defense-heavy, ML-heavy — the interviewer will want to know you're not settling or just applying broadly.
- **Recommended framing:** "My core skill is translating messy, large-scale data into decisions — that's what I did for Navy financial and operational planning. The domain changes, the craft doesn't. Live entertainment is one of the highest-velocity consumer data environments — customer signals, ticketing patterns, campaign performance — and I want to apply that craft where the output is directly fan-facing. It's a deliberate move, not a fallback."

**Q: This role is Data Analyst, not Data Scientist. You have an MDS and ML experience — are you overqualified?**
- **Why it comes up:** Your title at NAVSEA is Data Scientist; MDS is on the CV.
- **Recommended framing:** "I'm not looking for a title — I'm looking for analytical impact. The analyst function here owns the toolset, shapes how execs see the business, and works across Product, Marketing, and Talent Buying. That's high-leverage work. I've seen what happens when ML is disconnected from business — I prefer the role that sits at the intersection and drives decisions."

**Q: You've worked in a secure government environment. How do you adapt to a faster-moving, commercial setting?**
- **Recommended framing:** "Government environments are slow to adopt tools but fast to demand results under constraints. I operated with tight timelines, fragmented data, and no tolerance for broken pipelines — because downstream consequences (budget cycles, Congressional reporting) were real. That discipline translates directly. The pace increases here, which I prefer."

---

## Story Bank Mapping

| # | Likely question/topic | Best story | Fit |
|---|----------------------|-----------|-----|
| 1 | End-to-end automated pipeline | NWCF Budget Forecasting | strong |
| 2 | Communicating to non-technical stakeholders | NAVSEA Budget Insights for Leadership | strong |
| 3 | Data quality / anomaly detection | Enforcing ML Best Practices | partial — reframe toward data integrity, not ML standards |
| 4 | Self-directed project / ownership | Internal AI Agent & RAG System | strong |
| 5 | Forecasting / accuracy improvement | Flight Hours Forecasting | strong |
| 6 | Cross-functional collaboration | NAVSEA (coordinating with infrastructure teams) | partial — light story, needs more detail |
| 7 | A/B test design | **GAP — no existing story** | none |
| 8 | Customer behavior analytics | **GAP — no existing story** | none |
| 9 | Prioritizing competing stakeholder requests | **GAP — no existing story** | none |

**Gap 7 (A/B testing):** You have A/B Testing listed as a skill. If you've run any test — even informally — build a STAR story around it. If not, be ready to answer conceptually: "I haven't shipped a formal A/B test yet but I can walk you through how I'd design one for [specific AEG use case]."

**Gap 8 (Customer behavior):** Pull from your RAG system story — "team members querying and extracting insights" = internal user behavior analytics. Stretch it: "I tracked which queries were asked most, which data sources got hit, and used that to prioritize what to index next."

**Gap 9 (Prioritizing stakeholders):** Recall any moment at NAVSEA when multiple program offices needed analysis simultaneously. Build a brief story around how you triaged — even a simple one works here.

---

## Technical Prep Checklist

- [ ] **SQL window functions** (LAG, LEAD, RANK, PARTITION BY) — why: customer behavior analysis requires time-series patterns; standard for analyst interviews
- [ ] **SQL CTEs and subquery patterns** — why: complex reporting queries at AEG likely involve multi-step transformations
- [ ] **Tableau: calculated fields, LOD expressions, parameter controls** — why: JD explicitly calls for Tableau power user; you need concrete examples ready
- [ ] **A/B test design: sample size, significance, metric selection** — why: JD explicitly mentions suggesting A/B tests; likely to come up in technical or situational questions
- [ ] **Customer engagement metrics vocabulary** — why: domain shift from defense; know the terms: DAU/MAU, churn, LTV, retention curves, channel attribution
- [ ] **Email marketing funnel metrics** — why: JD mentions email marketing as a plus; open rate, CTR, conversion, list segmentation
- [ ] **Excel advanced (pivot tables, VLOOKUP/XLOOKUP, Power Query)** — why: JD explicitly calls for Excel power user
- [ ] **Data anomaly detection patterns** — why: JD explicitly calls for identifying anomalies; be ready with a systematic approach

---

## Company Signals

**Values they screen for:**
- "Innovation, artistry, and community" — from careers page. They care about cultural contribution, not just technical output.
- Cross-functional collaboration — JD explicitly lists Product, Media, Talent Buying, Marketing. Show you thrive in matrix environments.
- Adaptability — "Comfortable adopting new technologies" is in the required qualifications.

**Vocabulary to use:**
- "Customer behavior signals" and "engagement" — their language in the JD, not "user metrics"
- "Touchpoints" — mentioned in JD for multi-channel analysis
- "Macro and micro indicators" — exact JD phrase; repeat it when describing your analytical approach
- "Fan" not just "customer" — AEG thinks about fans, not generic users

**Things to avoid:**
- Don't over-index on ML and modeling — this role is analytics and visualization, not ML. Lead with SQL, Tableau, automated reporting.
- Don't make the defense background sound bureaucratic or slow — position it as high-stakes and output-driven
- Don't mention comp frustration if the salary comes up — engage constructively or defer it

**Questions to ask them:**
1. "The JD mentions owning the analytic toolset end-to-end — what does the current data infrastructure look like, and what's the biggest gap you're hoping this hire addresses?"
2. "How does the data team currently support Talent Buying and Media — is it primarily ad hoc requests, or is there a self-serve reporting layer being built?"
3. "What does success look like at 90 days for this role — what's the first deliverable you'd want to see?"

---

## Comp Note

Posted range: $96,611–$97,500. Your stated minimum is $110K. This is a meaningful gap. Before the interview:
- Decide if you're willing to negotiate (room may be limited — this is a flat band) or need them to move significantly
- If asked early, consider: "I'm currently evaluating a few opportunities. Can you share the full comp structure including bonus and benefits?" (No bonus per JD, but benefits package is comprehensive.)
- Don't lie about your expectation — it creates problems later.

---

## Round 2 Deep Prep (Added 2026-05-22 — Technical Panel)

### What Changed for Round 2

You passed the HR screen — they're no longer vetting fit, they're vetting depth. Expect:
- **SQL live coding or whiteboard** — not guaranteed, but likely given the JD's emphasis on SQL
- **Situational/hypothetical problems** — "how would you approach X?" with follow-up probes
- **Portfolio walkthrough** — they may ask you to walk through a project in detail
- Potentially a **stakeholder or cross-functional panel** — someone from Marketing or Product may be on the call

Your defense background is no longer a risk factor — they hired you into Round 2 knowing it. Shift your energy from justifying your background to demonstrating analytical judgment.

---

## SQL Practice — AEG-Specific Exercises

These are the query patterns most likely to come up for a fan/customer analytics role. Practice each until you can write them cold.

### 1. Purchase Frequency by Customer (fan recency/frequency)

```sql
-- How many times has each fan purchased a ticket in the last 12 months?
SELECT
    customer_id,
    COUNT(*) AS purchase_count,
    MAX(purchase_date) AS last_purchase,
    DATEDIFF('day', MAX(purchase_date), CURRENT_DATE) AS days_since_last_purchase
FROM ticket_purchases
WHERE purchase_date >= DATEADD('month', -12, CURRENT_DATE)
GROUP BY customer_id
ORDER BY purchase_count DESC;
```

**Follow-up probe:** "Now segment them into frequency tiers (1x, 2-3x, 4+x)." → wrap in a CTE and add a CASE statement.

### 2. Event Attendance with Window Functions

```sql
-- For each fan, rank their events by purchase date and find their first and most recent event
WITH ranked AS (
    SELECT
        customer_id,
        event_id,
        event_name,
        purchase_date,
        ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY purchase_date ASC)  AS rn_first,
        ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY purchase_date DESC) AS rn_last
    FROM ticket_purchases
)
SELECT
    customer_id,
    MAX(CASE WHEN rn_first = 1 THEN event_name END) AS first_event,
    MAX(CASE WHEN rn_last  = 1 THEN event_name END) AS most_recent_event
FROM ranked
GROUP BY customer_id;
```

### 3. Fan Retention Cohort

```sql
-- Month-over-month retention: how many fans who bought in month M also bought in month M+1?
WITH monthly AS (
    SELECT
        customer_id,
        DATE_TRUNC('month', purchase_date) AS purchase_month
    FROM ticket_purchases
    GROUP BY 1, 2
)
SELECT
    m1.purchase_month AS cohort_month,
    COUNT(DISTINCT m1.customer_id) AS original_fans,
    COUNT(DISTINCT m2.customer_id) AS retained_next_month,
    ROUND(COUNT(DISTINCT m2.customer_id) * 100.0 / COUNT(DISTINCT m1.customer_id), 1) AS retention_pct
FROM monthly m1
LEFT JOIN monthly m2
    ON m1.customer_id = m2.customer_id
    AND m2.purchase_month = DATEADD('month', 1, m1.purchase_month)
GROUP BY m1.purchase_month
ORDER BY cohort_month;
```

### 4. Days Between Purchases (time-to-repurchase)

```sql
-- Average gap between a fan's consecutive purchases (LAG pattern)
WITH ordered AS (
    SELECT
        customer_id,
        purchase_date,
        LAG(purchase_date) OVER (PARTITION BY customer_id ORDER BY purchase_date) AS prev_purchase
    FROM ticket_purchases
)
SELECT
    customer_id,
    AVG(DATEDIFF('day', prev_purchase, purchase_date)) AS avg_days_between_purchases
FROM ordered
WHERE prev_purchase IS NOT NULL
GROUP BY customer_id;
```

### 5. Email Campaign Funnel Analysis

```sql
-- Open → Click → Purchase conversion for a campaign
SELECT
    campaign_id,
    COUNT(DISTINCT CASE WHEN event_type = 'sent'     THEN customer_id END) AS sent,
    COUNT(DISTINCT CASE WHEN event_type = 'opened'   THEN customer_id END) AS opened,
    COUNT(DISTINCT CASE WHEN event_type = 'clicked'  THEN customer_id END) AS clicked,
    COUNT(DISTINCT CASE WHEN event_type = 'purchased'THEN customer_id END) AS purchased,
    ROUND(COUNT(DISTINCT CASE WHEN event_type = 'opened'   THEN customer_id END) * 100.0
          / NULLIF(COUNT(DISTINCT CASE WHEN event_type = 'sent' THEN customer_id END), 0), 1) AS open_rate_pct,
    ROUND(COUNT(DISTINCT CASE WHEN event_type = 'purchased' THEN customer_id END) * 100.0
          / NULLIF(COUNT(DISTINCT CASE WHEN event_type = 'clicked' THEN customer_id END), 0), 1) AS click_to_purchase_pct
FROM email_events
GROUP BY campaign_id;
```

**Key habits to demonstrate:**
- Always alias clearly
- Use CTEs over nested subqueries when there are 2+ steps
- Mention `NULLIF` when dividing to handle zero-division
- Say your approach out loud before writing — "I'd start with a CTE to isolate the cohort, then join back"

---

## Technical System Design Walkthroughs

These are the "how would you build X?" questions likely in Round 2. Have a structured answer ready for each.

### Design: Weekly Marketing KPI Dashboard

**Structure your answer in 3 parts:**

1. **Clarify requirements (30 seconds):** "Before I design — who are the consumers? How fresh does the data need to be? What are the 3-5 metrics they care about most?"
2. **Data layer:** Identify source systems (ticketing DB, email platform, CRM), transformation logic (daily/weekly aggregations, de-duplication), storage (a mart or materialized view)
3. **Visualization layer:** Tableau with scheduled refresh. Segment by event type, region, campaign. Add a "freshness timestamp" so viewers know when it was last updated.

**Your proof point to reference:** NWCF Budget Forecasting — exactly this pattern. Python → model → Tableau live dashboard. Mention the Congressional reporting use case as evidence the output was production-quality.

**Anticipate follow-up:** "What happens when the source data is late or broken?" → Answer: monitoring alert on the ingestion job, a "last updated" indicator in the dashboard, and a documented fallback (use yesterday's snapshot).

### Design: Fan Re-engagement Pipeline

**Problem framing:** "Fans who haven't purchased in 12 months — identify them and trigger a campaign."

1. **Segmentation query:** Retention cohort SQL (see above) — identify lapsed fans
2. **Signal enrichment:** Join with past purchase history to add genre affinity, last event type, average spend
3. **Handoff to marketing:** Export a clean CSV or API feed to their email platform (Braze/Mailchimp) with the segment + personalization fields
4. **Measurement:** Track re-activation rate (did the lapsed fan buy after receiving the campaign?) — requires tagging the campaign and joining back to purchases

**Frame it as:** "My job is to get the right data to the right system in the right format — the marketing team drives the creative. I own the signal pipeline."

### Design: A/B Test for Ticket Pricing

**When asked "how would you design an A/B test for pricing?":**

1. **Hypothesis:** "Fans in the $X spend tier are price-sensitive — a 10% discount on pre-sale will lift conversion without eroding margin"
2. **Unit of randomization:** Customer (not event) — avoid contamination where fans see both prices
3. **Metrics:** Primary = ticket conversion rate. Secondary = revenue per customer (to catch margin cannibalization)
4. **Sample size:** "I'd use a power calculation — 80% power at α=0.05 with a minimum detectable effect of [X]%"
5. **Duration:** Run through at least one full pre-sale cycle to avoid novelty effects
6. **Stopping rules:** Don't peek early; define the analysis date before running

**Your proof point:** Model comparison in Flight Hours Forecasting — defined evaluation criteria before running, validated on holdout windows. Same discipline, different domain.

---

## Behavioral Drill — Round 2 Questions

These are the deeper follow-up questions likely in a panel with a hiring manager. Practice the full STAR+R for each.

**Q: "You said you built an automated pipeline at NAVSEA. How did you know it was working correctly once it was live?"**
→ Monitoring approach, validation checks, error handling. Key: show you thought about production reliability, not just build-time correctness.

**Q: "Walk me through a time a stakeholder disagreed with your analysis. How did you handle it?"**
→ Pick a real example. The point isn't "I was right" — it's showing you can hold a position with evidence and adjust when wrong.

**Q: "You've worked in a highly structured government environment. AEG moves faster. Give me an example of when you moved quickly with imperfect information."**
→ RAG system story works here. No requirements doc, self-directed, iterated based on usage signals. Frame: "speed was possible because I scoped narrowly and shipped early."

**Q: "This role will interface with Marketing, Talent Buying, and Product simultaneously. Which of those relationships do you think will be hardest to manage and why?"**
→ No wrong answer — they want to see self-awareness and planning. Honest answer: Talent Buying may be least data-fluent, requiring the most translation work. Show you've thought about it.

**Q: "What would you do in the first 30 days?"**
→ Structure: Week 1 = listen and inventory (what reports exist? what breaks?). Week 2-3 = identify the highest-pain manual process and fix it. Day 30 = a clear view of what the team actually needs vs. what they think they need.

---

## Pre-Interview Checklist (Round 2)

- [ ] Re-read the JD and map each bullet to a story or skill you can cite
- [ ] Practice the 5 SQL exercises above — write them by hand, not just read them
- [ ] Have a 2-minute version of NWCF Budget Forecasting ready (your anchor story for this role)
- [ ] Prepare your "first 30 days" answer
- [ ] Prepare your comp answer — the gap is real ($96K posted vs. $110K target); decide your position before the call
- [ ] Test your Zoom/audio 10 minutes early
- [ ] Have your 3 questions for them ready (already in this file above)
