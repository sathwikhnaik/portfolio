export type Profile = {
  name: string;
  title: string;
  email: string;
  linkedin: string;
  github: string;
  location: string;
  resume: string;
  summary: string;
};

export type Experience = {
  role: string;
  organization: string;
  period: string;
  description: string;
  achievements: string[];
  stack: string[];
};

export type Project = {
  slug: string;
  title: string;
  year: string;
  category: string;
  summary: string;
  github?: string;
  stack: string[];
  metrics: { value: string; label: string }[];
  architecture: string[];
  outcomes: string[];
  lesson: string;
};

export type SkillGroup = { title: string; skills: string[] };
export type Education = { school: string; degree: string; period: string; detail: string };
export type Certification = { name: string; issuer: string };

export const profile: Profile = {
  name: "Sathwik H Naik",
  title: "Data Engineer & Data Scientist",
  email: "sathwikhnaik@gmail.com",
  linkedin: "https://www.linkedin.com/in/sathwikhnaik",
  github: "https://github.com/sathwikhnaik",
  location: "College Park, Maryland",
  resume: "/Sathwik-Naik-Resume.pdf",
  summary:
    "Recent M.S. Data Science graduate from the University of Maryland with one year of Fortune 50 healthcare experience. I build reliable data platforms, decision-ready analytics, and rigorously evaluated ML systems.",
};

export const evidence = [
  { value: "3.81", label: "M.S. GPA at UMD" },
  { value: "10+", label: "Power BI dashboards" },
  { value: "20+ hrs", label: "Weekly effort automated" },
  { value: "8", label: "End-to-end projects" },
];

export const experience: Experience[] = [
  {
    role: "Software Engineer",
    organization: "Elevance Health · Fortune 50 healthcare",
    period: "Aug 2023 — Aug 2024",
    description:
      "Built governed analytics and automation for teams working with regulated healthcare data.",
    achievements: [
      "Designed reusable KPI structures that translated operational requirements into consistent cross-team metrics.",
      "Built and maintained 10+ Power BI dashboards with DAX measures for internal teams.",
      "Developed ETL workflows to source, clean, and validate healthcare data for stakeholder reporting.",
      "Automated recurring preparation and reporting workflows, eliminating 20+ hours of weekly manual effort.",
      "Documented metric definitions, report logic, and validation rules for governed self-service reporting.",
    ],
    stack: ["Power BI", "DAX", "ETL", "Informatica", "Salesforce CRM", "Bitbucket"],
  },
];

export const projects: Project[] = [
  {
    slug: "claims-lakehouse-platform",
    title: "Healthcare Claims Analytics & Fraud Signal Platform",
    year: "2026",
    category: "Data Engineering",
    summary:
      "A hybrid lakehouse-warehouse platform that turns synthetic healthcare claims into governed analytics and fraud signals.",
    github: "https://github.com/sathwikhnaik/claims-lakehouse-platform",
    stack: ["Kafka", "Spark", "Delta Lake", "Databricks", "dbt", "Airflow", "Snowflake", "Terraform"],
    metrics: [
      { value: "50K", label: "synthetic claims" },
      { value: "100%", label: "fraud-signal recall" },
      { value: "67%", label: "fraud-signal precision" },
    ],
    architecture: [
      "Kafka ingestion into Spark processing",
      "Bronze, Silver, and Gold Delta Lake layers",
      "dbt transformations into a Snowflake serving layer",
      "Airflow orchestration with Terraform-provisioned infrastructure",
    ],
    outcomes: [
      "Delivered a complete 13-week data engineering capstone spanning ingestion, quality, transformation, and serving.",
      "Validated a rolling-baseline fraud rule against known synthetic ground truth.",
      "Documented the trade-offs behind a hybrid lakehouse and warehouse architecture.",
    ],
    lesson:
      "Good platform work is not just moving data; it is making quality, lineage, and analytical intent explicit at every handoff.",
  },
  {
    slug: "ai-support-telemetry-platform",
    title: "AI Support Telemetry Reliability Platform",
    year: "2026",
    category: "Streaming Systems",
    summary:
      "A TypeScript reliability platform that reconciles streaming AI-support telemetry from transport to canonical storage.",
    github: "https://github.com/sathwikhnaik/ai-support-telemetry-platform",
    stack: ["TypeScript", "Kinesis", "LocalStack", "S3", "DuckDB", "AWS CDK", "Ajv"],
    metrics: [
      { value: "32,154", label: "records reconciled" },
      { value: "0", label: "unaccounted loss" },
      { value: "100%", label: "quarantine precision" },
    ],
    architecture: [
      "Schema-validated telemetry contracts",
      "Kinesis-compatible streaming through LocalStack",
      "S3-backed canonical and quarantine zones",
      "DuckDB reconciliation and reliability checks",
    ],
    outcomes: [
      "Reconciled 32,154 transport records with zero unaccounted loss.",
      "Removed 600 duplicates while preserving zero duplicate canonical keys.",
      "Quarantined invalid contracts at 100% precision and recall.",
    ],
    lesson:
      "Reliability becomes measurable when every transport outcome has an explicit contract and reconciliation path.",
  },
  {
    slug: "saas-churn-analytics",
    title: "SaaS Churn & Revenue Analytics Platform",
    year: "2026",
    category: "Analytics Engineering",
    summary:
      "A full-stack analytics system connecting subscription economics, retention cohorts, governed marts, and explainable churn modeling.",
    github: "https://github.com/sathwikhnaik/saas-churn-analytics",
    stack: ["DuckDB", "pandas", "PostgreSQL", "Grafana", "Plotly", "SHAP"],
    metrics: [
      { value: "8,000", label: "customers modeled" },
      { value: "21", label: "dashboard panels" },
      { value: "1", label: "governed metric layer" },
    ],
    architecture: [
      "DuckDB SQL for MRR waterfall and retention cohorts",
      "pandas temporal joins and analytical preparation",
      "PostgreSQL serving marts",
      "Config-as-code Grafana with an explainable Gradient Boosting model",
    ],
    outcomes: [
      "Modeled subscription performance across 8,000 synthetic customers.",
      "Delivered a reproducible 21-panel Grafana dashboard.",
      "Connected business metrics with SHAP-based churn explanations.",
    ],
    lesson:
      "Dashboards stay trustworthy when business metrics are computed once upstream rather than redefined in every panel.",
  },
  {
    slug: "rag-evaluation-lab",
    title: "RAG Evaluation Lab",
    year: "2026",
    category: "AI Engineering",
    summary:
      "An open-source retrieval lab that compares four search strategies and makes RAG quality, latency, and failure modes inspectable.",
    github: "https://github.com/sathwikhnaik/rag-eval-lab",
    stack: ["RAG", "BM25", "ChromaDB", "Ollama", "RAGAS", "Streamlit"],
    metrics: [
      { value: "4-way", label: "retrieval ablation" },
      { value: "85.3%", label: "Recall@1" },
      { value: "5", label: "dashboard views" },
    ],
    architecture: [
      "BM25, dense, hybrid RRF, and hybrid-plus-rerank retrieval",
      "SQuAD-based evaluation corpus",
      "EM, F1, grounding, relevancy, and latency evaluation",
      "Streamlit dashboard with explicit failure taxonomy",
    ],
    outcomes: [
      "Measured hybrid-plus-rerank at 85.3% Recall@1.",
      "Separated retrieval quality from generation quality instead of reporting one blended score.",
      "Surfaced failures and latency through a five-view evaluation interface.",
    ],
    lesson:
      "A credible RAG system explains where it fails and compares alternatives under the same evaluation conditions.",
  },
  {
    slug: "banking-liquidity-forecast",
    title: "Banking Liquidity Forecast Lab",
    year: "2026",
    category: "Data Science",
    summary:
      "A banking analytics lab combining walk-forward forecasting, anomaly detection, and causal inference for cash-outflow decisions.",
    github: "https://github.com/sathwikhnaik/banking-liquidity-forecast",
    stack: ["LightGBM", "Holt-Winters", "Causal Inference", "FastAPI", "Docker"],
    metrics: [
      { value: "9.48%", label: "forecast WAPE" },
      { value: "12%", label: "planted effect" },
      { value: "0.4pp", label: "recovery error" },
    ],
    architecture: [
      "Six-fold walk-forward model comparison",
      "Seasonal naive, Holt-Winters, and LightGBM forecasts",
      "Residual-based anomaly detection",
      "Interrupted time series and difference-in-differences estimation",
    ],
    outcomes: [
      "Reached 9.48% WAPE in the forecast comparison.",
      "Recovered a known 12% campaign effect within 0.4 percentage points.",
      "Served analytical outputs through FastAPI and Docker Compose.",
    ],
    lesson:
      "Model choice should follow honest validation; a classical baseline can beat a more complex learner under real seasonal structure.",
  },
  {
    slug: "conditional-generative-augmentation",
    title: "Conditional Generative Data Augmentation",
    year: "2026",
    category: "Deep Learning",
    summary:
      "A controlled PyTorch study of when class-conditioned synthetic images improve classifiers under extreme data scarcity.",
    github: "https://github.com/sathwikhnaik/data612-gan-augmentation",
    stack: ["PyTorch", "cGAN", "Conditional VAE-GAN", "CNN", "Ablation"],
    metrics: [
      { value: "100", label: "real samples" },
      { value: "+7.1pp", label: "accuracy lift" },
      { value: "70.8%", label: "final accuracy" },
    ],
    architecture: [
      "Class-conditioned cGAN and VAE-GAN pipelines",
      "MNIST and Fashion-MNIST experiments",
      "Real-only, synthetic-only, and weighted mixed regimes",
      "CNN evaluation under controlled data scarcity",
    ],
    outcomes: [
      "Improved accuracy from 63.6% to 70.8% using only 100 real samples.",
      "Measured when synthetic data helped instead of assuming generation quality implied downstream value.",
      "Compared multiple augmentation strategies under the same classifier setup.",
    ],
    lesson:
      "Synthetic data is useful only when downstream evaluation proves it adds signal under the target constraint.",
  },
  {
    slug: "tinyace-context-engineering",
    title: "TinyACE: Bounded Context Engineering for SLMs",
    year: "2025",
    category: "ML Research",
    summary:
      "A bounded working-memory framework exploring how compact language models use curated context under strict token limits.",
    github: "https://github.com/sathwikhnaik/edge-slm-ace",
    stack: ["TinyLlama", "Phi-3 Mini", "Mistral", "PyTorch", "Ablation"],
    metrics: [
      { value: "512", label: "token cap" },
      { value: "+4pp", label: "SciQ gain" },
      { value: "3", label: "model scales" },
    ],
    architecture: [
      "Bounded working-memory context store",
      "Multi-scale evaluation across three small language models",
      "Ablation of context capacity and retention behavior",
      "SciQ evaluation under a 512-token constraint",
    ],
    outcomes: [
      "Improved Phi-3 Mini from 74% to 78% on SciQ.",
      "Identified a capacity sweet spot rather than assuming more context was always better.",
      "Compared the framework across TinyLlama, Phi-3 Mini, and Mistral.",
    ],
    lesson:
      "For compact models, carefully selected context can matter more than simply allocating a larger memory budget.",
  },
  {
    slug: "advanced-time-series-dashboarding",
    title: "Advanced Time Series & Predictive Dashboarding",
    year: "2025",
    category: "Time Series",
    summary:
      "A refreshable monitoring pipeline for high-frequency operational signals, trend analysis, and reproducible anomaly inspection.",
    stack: ["Python", "Time Series", "Statistical Signals", "Docker", "Git"],
    metrics: [
      { value: "24h", label: "rolling window" },
      { value: "Live", label: "refreshable pipeline" },
      { value: "1", label: "reproducible stack" },
    ],
    architecture: [
      "Refreshable high-frequency metric ingestion",
      "Rolling 24-hour monitoring windows",
      "Moving-average and statistical trend signals",
      "Dockerized reproducible runtime",
    ],
    outcomes: [
      "Created a repeatable monitoring workflow for high-frequency operational metrics.",
      "Applied statistical trend signals to anomaly review.",
      "Packaged the environment for consistent cross-machine execution.",
    ],
    lesson:
      "Operational time-series analysis becomes useful when signal logic and the runtime are both reproducible.",
  },
];

export const skillGroups: SkillGroup[] = [
  { title: "Data Platforms", skills: ["SQL", "DuckDB", "PostgreSQL", "Snowflake", "dbt", "Delta Lake", "Databricks"] },
  { title: "Streaming & Orchestration", skills: ["Kafka", "Spark", "Airflow", "Kinesis", "AWS CDK", "Terraform"] },
  { title: "Analytics", skills: ["Power BI", "DAX", "Grafana", "Plotly", "Tableau", "Streamlit"] },
  { title: "Machine Learning", skills: ["PyTorch", "scikit-learn", "LightGBM", "SHAP", "Forecasting", "Causal Inference"] },
  { title: "LLM & Retrieval", skills: ["RAG", "BM25", "ChromaDB", "Ollama", "RAGAS", "LangChain"] },
  { title: "Engineering", skills: ["Python", "TypeScript", "FastAPI", "Docker", "Git", "CI/CD"] },
];

export const education: Education[] = [
  {
    school: "University of Maryland, College Park",
    degree: "M.S. Data Science · GPA 3.81/4.0",
    period: "2024 — 2026",
    detail: "Statistical inference, deep learning, data modeling, visualization, experimental design, and advanced time series.",
  },
  {
    school: "Reva University",
    degree: "B.Tech Computer Science & Engineering · GPA 3.55/4.0",
    period: "2019 — 2023",
    detail: "Software engineering, algorithms, data structures, and computing foundations.",
  },
];

export const certifications: Certification[] = [
  { name: "Introduction to Data Science in Python", issuer: "University of Michigan" },
  { name: "Machine Learning", issuer: "KTH Royal Institute of Technology" },
];

export const projectBySlug = (slug: string) => projects.find((project) => project.slug === slug);
