/* ============================================================
   PORTFOLIO DATA — edit this file to update your content.
   Everything the site shows comes from here.
   ============================================================ */

const PROFILE = {
  name: "SATHWIK H NAIK",
  role: "Data Analyst / Data Scientist",
  email: "sathwikhnaik@gmail.com",
  phone: "+1 (240) 438-0411",
  // ↓↓↓ Put your real LinkedIn URL here ↓↓↓
  linkedin: "https://www.linkedin.com/in/sathwikhnaik",
  // ↓↓↓ Put your real GitHub URL here ↓↓↓
  github: "https://github.com/sathwikhnaik",
  resume: "Sathwik_Naik_Resume.pdf",
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
  lede: `I'm a <b>data scientist & analyst</b> finishing my <span class="hl">M.S. in Data Science at the University of Maryland</span> (GPA 3.9). I turn messy, operational data into <span class="hl">KPIs, dashboards, and decisions</span> — and I build ML & generative-AI systems that hold up under real-world constraints. Previously an Associate Software Engineer at <b>Carelon Global Solutions</b> (an Elevance Health subsidiary), where I shipped Power BI reporting and automated delivery pipelines.`,
  stats: [
    { num: "3.9",  lab: "Grad GPA / UMD" },
    { num: "1+ yr", lab: "Industry experience" },
    { num: "~30%", lab: "Faster release cycles" },
    { num: "4+",   lab: "ML / data projects" },
  ],
};

const SKILLS = [
  {
    cat: "LANGUAGES & QUERY",
    items: [
      { name: "Python", lv: 95 },
      { name: "SQL", lv: 92 },
      { name: "R", lv: 80 },
      { name: "DAX", lv: 78 },
    ],
  },
  {
    cat: "VISUALIZATION & BI",
    items: [
      { name: "Power BI", lv: 92 },
      { name: "Tableau", lv: 85 },
      { name: "KPI Dashboards", lv: 90 },
      { name: "Excel", lv: 88 },
    ],
  },
  {
    cat: "DATA & ML",
    items: [
      { name: "Data Analysis", lv: 93 },
      { name: "Statistical Methods", lv: 88 },
      { name: "Data Pipelines", lv: 82 },
      { name: "Machine Learning", lv: 85 },
    ],
  },
  {
    cat: "TOOLS & OPS",
    items: [
      { name: "Git", lv: 88 },
      { name: "CI/CD", lv: 80 },
      { name: "Monitoring & Logging", lv: 78 },
      { name: "JIRA / Salesforce CRM", lv: 82 },
    ],
  },
];

const TOOLBELT = [
  "Python", "R", "SQL", "Excel", "Tableau", "Power BI", "DAX",
  "KPI Dashboards", "Operational Reporting", "Data Visualization",
  "Statistical Methods", "Data Pipelines", "Git", "CI/CD",
  "Monitoring", "Logging", "Salesforce CRM", "JIRA",
];

const EXPERIENCE = [
  {
    role: "Associate Software Engineer",
    org: "Carelon Global Solutions — Elevance Health subsidiary",
    date: "AUG 2023 – AUG 2024",
    bullets: [
      "Translated operational questions into <b>KPIs and recurring reporting</b> for stakeholders by gathering and clarifying business requirements.",
      "Built & maintained <b>Power BI dashboards and reports</b> to communicate performance metrics and improve visibility into operational health.",
      "Sourced and validated reporting data via <b>SQL analysis</b> and structured cleaning, ensuring accuracy and consistency across outputs.",
      "Designed analytics deliverables that <b>reduced manual effort</b> and enabled faster decision-making for internal teams.",
      "Documented report logic, KPI definitions, and refresh processes to enable <b>self-serve access</b> and reduce ambiguity.",
      "Automated deployment workflows, cutting release cycle time by <b>~30%</b> and strengthening monitoring discipline.",
      "Supported audit-friendly, controlled processes through change tracking, documentation, and post-release monitoring.",
    ],
  },
];

const PROJECTS = [
  {
    title: "Conditional Generative Data Augmentation for Image Classification",
    date: "MAY 2026",
    desc: "Built <b>CGAN & VAE-GAN</b> pipelines to generate synthetic training data; ran 12-setting ablations. Boosted Fashion-MNIST accuracy from <b>63.6% → 70.7% (+7.1pp)</b> under extreme data scarcity.",
    tags: ["PyTorch", "GANs", "VAE", "MNIST"],
  },
  {
    title: "TINYACE: Context Engineering for Small Language Models",
    date: "DEC 2025",
    desc: "Co-developed a <b>bounded working-memory framework</b> for small LLMs. Evaluated TinyLlama (1.1B), Phi-3 Mini (3.8B) & Mistral (7B), finding a model <b>capacity sweet spot</b> under token/latency limits.",
    tags: ["LLMs", "Context Eng.", "Evaluation"],
  },
  {
    title: "Advanced Time-Series Analytics on Google Cloud",
    date: "MAY 2025",
    desc: "Shipped a <b>refreshable analytics dashboard</b> with automated ingestion and time-windowed reporting (last 24h). Built moving-average KPIs & anomaly visuals in a reproducible <b>Docker + Git</b> workflow.",
    tags: ["GCP", "Time Series", "Docker"],
  },
  {
    title: "Real-time Sign Language Detection (CNN)",
    date: "JUN 2023",
    desc: "Built a real-time <b>ASL gesture recognition</b> tool with TensorFlow + OpenCV, achieving high frame-rate accuracy with an accessible, user-friendly UI.",
    tags: ["TensorFlow", "OpenCV", "CNN"],
  },
];

const EDUCATION = [
  {
    badge: "🎓",
    school: "University of Maryland, College Park",
    meta: "M.S. Data Science · GPA 3.9 · 2024–2026",
    sub: "Statistical Inference · Machine Learning · Data Modeling · Data Visualization · Experimental Design",
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
  { badge: "📋", name: "Foundations of Project Management", meta: "Google" },
];
