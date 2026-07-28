/* ============================================================
   PORTFOLIO DATA — edit this file to update your content.
   Everything the site shows comes from here.
   ============================================================ */

const PROFILE = {
  name: "SATHWIK H NAIK",
  role: "Data Scientist / Data Engineer / AI Engineer",
  email: "sathwikhnaik@gmail.com",
  phone: "+1 (240) 438-0411",
  linkedin: "https://www.linkedin.com/in/sathwikhnaik",
  github: "https://github.com/sathwikhnaik",
  resume: "Sathwik_Naik_Data_Scientist_Resume.pdf",
  location: "College Park, Maryland, USA",
};

/* Main-menu modes. `key` maps to a render function in script.js */
const MENU = [
  { key: "profile",      label: "PROFILE",        sub: "Who is Player 01?" },
  { key: "skills",       label: "SKILL TREE",     sub: "Stats & abilities" },
  { key: "experience",   label: "QUEST LOG",      sub: "Work experience" },
  { key: "projects",     label: "LEVELS",         sub: "Projects cleared" },
  { key: "achievements", label: "ACHIEVEMENTS",   sub: "Education & certs" },
  { key: "contact",      label: "MULTIPLAYER",    sub: "Contact & connect" },
];

const ABOUT = {
  lede: `I'm a <b>data scientist & engineer</b> who completed an <span class="hl">M.S. in Data Science at the University of Maryland</span> (GPA 3.81). I build analytics platforms, ML systems, and data pipelines that hold up under real constraints — from governed BI dashboards to RAG evaluation labs and lakehouse architectures. Previously a Software Engineer at <b>Elevance Health</b> (Fortune 50 healthcare), where I shipped Power BI reporting, ETL workflows, and self-serve KPI frameworks.`,
  stats: [
    { num: "3.81", lab: "Grad GPA / UMD" },
    { num: "1+ yr", lab: "Fortune 50 exp." },
    { num: "20+ hrs", lab: "Weekly effort cut" },
    { num: "6",    lab: "Flagship projects" },
  ],
};

const SKILLS = [
  {
    cat: "DATA & SQL",
    items: [
      { name: "SQL / DuckDB / PostgreSQL", lv: 94 },
      { name: "ETL & Data Pipelines", lv: 90 },
      { name: "Snowflake", lv: 86 },
      { name: "Data Cleaning / Governance", lv: 88 },
    ],
  },
  {
    cat: "DATA ENGINEERING",
    items: [
      { name: "dbt", lv: 88 },
      { name: "Kafka / Spark", lv: 85 },
      { name: "Airflow", lv: 84 },
      { name: "Delta Lake / Databricks", lv: 82 },
    ],
  },
  {
    cat: "ANALYTICS & BI",
    items: [
      { name: "Power BI / DAX", lv: 92 },
      { name: "Grafana / Plotly", lv: 88 },
      { name: "Tableau / Streamlit", lv: 84 },
      { name: "KPI Dashboards", lv: 90 },
    ],
  },
  {
    cat: "ML & AI",
    items: [
      { name: "PyTorch / Deep Learning", lv: 88 },
      { name: "scikit-learn / LightGBM", lv: 90 },
      { name: "SHAP / Explainability", lv: 86 },
      { name: "GANs / Time Series", lv: 85 },
    ],
  },
  {
    cat: "LLM & RAG",
    items: [
      { name: "RAG / Hybrid Search", lv: 90 },
      { name: "ChromaDB / Ollama", lv: 88 },
      { name: "RAGAS / LangChain", lv: 86 },
      { name: "Retrieval Evaluation", lv: 88 },
    ],
  },
  {
    cat: "STATS & TOOLS",
    items: [
      { name: "Causal Inference / A/B", lv: 88 },
      { name: "Python / pandas", lv: 95 },
      { name: "Docker / FastAPI / Git", lv: 88 },
      { name: "Terraform / CI/CD", lv: 80 },
    ],
  },
];

const TOOLBELT = [
  "Python", "SQL", "pandas", "DuckDB", "PostgreSQL", "Snowflake",
  "Power BI", "DAX", "Grafana", "Plotly", "Tableau", "Streamlit",
  "dbt", "Kafka", "Spark", "Airflow", "Delta Lake", "Databricks", "Terraform",
  "PyTorch", "scikit-learn", "LightGBM", "SHAP", "GANs",
  "RAG", "ChromaDB", "Ollama", "RAGAS", "LangChain",
  "Causal Inference", "FastAPI", "Docker", "Git", "CI/CD",
];

const EXPERIENCE = [
  {
    role: "Software Engineer",
    org: "Elevance Health — Fortune 50 healthcare",
    date: "AUG 2023 – AUG 2024",
    bullets: [
      "Designed reusable <b>KPI</b> structures, translating operational requirements into consistent, self-serve cross-team metrics.",
      "Built and maintained <b>10+ Power BI</b> dashboards with <b>DAX</b> measures for multiple internal teams.",
      "Developed <b>ETL workflows</b> to source, clean, and validate healthcare data, improving quality for stakeholder reports.",
      "Automated recurring data-preparation and reporting workflows, eliminating <b>20+ hours</b> of manual weekly effort.",
      "Documented report logic, metric definitions, and validation rules enabling governed <b>self-service reporting</b>.",
    ],
  },
];

const PROJECTS = [
  {
    title: "Healthcare Insurance Claims Analytics & Fraud Signal Platform",
    date: "2026",
    github: "https://github.com/sathwikhnaik/claims-lakehouse-platform",
    desc: "13-week hybrid <b>lakehouse-warehouse</b> capstone: Kafka → Spark → Delta Lake/Databricks → dbt → Snowflake, orchestrated by Airflow and provisioned with Terraform. Rolling-baseline fraud rule hit <b>100% recall / 67% precision</b> on 50k synthetic claims.",
    tags: ["Kafka", "Spark", "dbt", "Airflow", "Snowflake", "Terraform"],
  },
  {
    title: "SaaS Subscription Churn & Revenue Analytics Platform",
    date: "2026",
    github: "https://github.com/sathwikhnaik/saas-churn-analytics",
    desc: "Full-stack SaaS analytics on 8,000 synthetic customers: DuckDB SQL (MRR waterfall, cohort retention), pandas, PostgreSQL marts, a <b>21-panel config-as-code Grafana</b> dashboard, plus Gradient Boosting churn with <b>SHAP</b> explainability.",
    tags: ["DuckDB", "pandas", "PostgreSQL", "Grafana", "SHAP"],
  },
  {
    title: "RAG Evaluation Lab (Retrieval Quality Lab)",
    date: "2026",
    github: "https://github.com/sathwikhnaik/rag-eval-lab",
    desc: "Open-source RAG system on SQuAD with a genuine <b>4-way retrieval ablation</b> (BM25 / dense / hybrid / hybrid+rerank). Hybrid+rerank reached <b>85.3% Recall@1</b>; 5-tab Streamlit dashboard surfaces generation quality, failure taxonomy, and latency.",
    tags: ["RAG", "ChromaDB", "Ollama", "RAGAS", "Streamlit"],
  },
  {
    title: "Banking Liquidity Forecast Lab",
    date: "2026",
    github: "https://github.com/sathwikhnaik/banking-liquidity-forecast",
    desc: "Retail-banking cash-outflow forecasting (seasonal naive vs. Holt-Winters vs. LightGBM, <b>9.48% WAPE</b>) plus residual anomaly detection and causal lift via interrupted time series & difference-in-differences — recovering a known <b>12% campaign effect within 0.4pp</b>.",
    tags: ["LightGBM", "Causal Inference", "FastAPI", "Docker"],
  },
  {
    title: "Conditional Generative Data Augmentation for Image Classification",
    date: "2026",
    github: "https://github.com/sathwikhnaik/data612-gan-augmentation",
    desc: "Built <b>cGAN & Conditional VAE-GAN</b> pipelines in PyTorch across MNIST and Fashion-MNIST. Under extreme scarcity (100 real samples), weighted real+synthetic cGAN augmentation lifted accuracy from <b>63.6% → 70.8% (+7.1pp)</b>.",
    tags: ["PyTorch", "GANs", "VAE-GAN", "Ablation"],
  },
  {
    title: "TinyACE: Bounded Working-Memory Context Engineering for SLMs",
    date: "2025",
    github: "https://github.com/sathwikhnaik/edge-slm-ace",
    desc: "Co-developed a bounded working-memory framework for small LLMs. Multi-scale eval on TinyLlama, Phi-3 Mini & Mistral found a <b>capacity sweet spot</b>: Phi-3 Mini gained <b>+4pp</b> (74% → 78%) on SciQ under a 512-token cap.",
    tags: ["LLMs", "Context Eng.", "PyTorch", "Ablation"],
  },
];

const EDUCATION = [
  {
    badge: "🎓",
    school: "University of Maryland, College Park",
    meta: "M.S. Data Science · GPA 3.81 · 2024–2026",
    sub: "Statistical Inference · Deep Learning · Data Modeling · Data Visualization · Experimental Design · Advanced Time Series",
  },
  {
    badge: "🏛️",
    school: "Reva University, India",
    meta: "B.Tech Computer Science & Engineering · GPA 3.55 · 2019–2023",
    sub: "Foundations in software engineering, algorithms & data structures.",
  },
];

const CERTS = [
  { badge: "🐍", name: "Introduction to Data Science in Python", meta: "University of Michigan" },
  { badge: "🤖", name: "Machine Learning", meta: "KTH Royal Institute of Technology" },
];
