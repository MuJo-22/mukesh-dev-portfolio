// ---------------------------------------------------------------------------
// All the content on the site lives here. Edit this file to update your
// bio, experience, projects, skills, and contact info without touching
// any component code.
// ---------------------------------------------------------------------------

export const PROFILE = {
  name: 'Mukesh M',
  role: 'Software Engineer III · Finance Systems & Full-Stack Engineer',
  location: 'Chennai, India',
  email: 'mukeshta1422@gmail.com',
  phone: '+91 7904636531',
  phoneRaw: '+917904636531',
  linkedin: 'https://www.linkedin.com/in/mukesh-m-sde/',
  linkedinLabel: '/in/mukesh-m-sde',
}

export const HERO = {
  eyebrow: 'Hello',
  sub: "Software Engineer III specializing in enterprise finance systems — 15+ modules shipped, 40% faster workflows, and still shipping. Open to full-stack, deployment, and AI/ML roles.",
}

export const ABOUT = {
  paragraphs: [
    "I'm a Software Engineer III at Eon Matrix Mindz India Pvt. Ltd, where I've grown from building full-stack ERP modules into leading finance-domain architecture — GL reports, multi-level trial balance, variance analysis, and the automation behind month-end close.",
    "Along the way I've also managed production deployments and CI/CD pipelines, and built machine learning models for real-time fraud detection in digital payments — which is why full-stack, deployment, and AI/ML all stayed on my radar, not just one lane.",
  ],
  stats: [
    { num: '2+ yrs', label: 'Full-stack & finance systems engineering' },
    { num: '15+', label: 'Financial modules shipped' },
    { num: '40%', label: 'Faster reconciliation workflows' },
    { num: '92%', label: 'Fraud-model classification accuracy' },
  ],
}

export const STACK = [
  { name: 'Frontend', tag: 'production', items: ['React.js', 'Next.js', 'Angular', 'Tailwind CSS', 'HTML5/CSS3'] },
  { name: 'Backend', tag: 'daily', items: ['Node.js', 'Express.js', 'REST APIs', 'Microservices', 'System Design'] },
  { name: 'Database', tag: 'daily', items: ['MySQL', 'MongoDB', 'SQL Optimization', 'Indexing'] },
  { name: 'Finance domain', tag: 'specialist', items: ['GL Reconciliation', 'Trial Balance', 'P&L Analysis', 'Receivables/Payables'] },
  { name: 'Machine learning', tag: 'applied', items: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Feature Engineering'] },
  { name: 'DevOps & cloud', tag: 'production', items: ['Docker', 'CI/CD', 'AWS', 'Git', 'Linux'] },
]

export const LEDGER = [
  {
    date: 'Mar 2026 — Present',
    role: 'Software Engineer III — Finance Domain Lead',
    company: 'Eon Matrix Mindz India Pvt. Ltd · Chennai, India',
    bullets: [
      'Architected a <b>comprehensive financial reporting suite</b> — GL reports, multi-level trial balance, variance analysis, drill-down — serving 50+ corporate users.',
      'Designed automation that cut <b>manual reconciliation and month-end closing time by 40%</b>, saving 80+ hours of operational time monthly.',
      'Built <b>real-time dashboard syncing</b> for live financial visibility for CFO and accounting teams.',
      'Architected the API framework for GL and receivables modules, supporting <b>1000+ transactions/second</b> concurrent processing.',
      'Mentored 2 junior developers on finance-domain concepts, React patterns, and backend optimization.',
    ],
  },
  {
    date: 'Jan 2026 — Feb 2026',
    role: 'Software Engineer III — Deployment & DevOps',
    company: 'Eon Matrix Mindz India Pvt. Ltd · Chennai, India',
    bullets: [
      'Streamlined a <b>Docker-based deployment pipeline</b>, cutting deployment time by 45% and enabling daily releases.',
      'Set up monitoring and alerting for production systems, supporting <b>99.2% uptime</b>.',
      'Coordinated production releases across QA, product, and infrastructure teams.',
    ],
  },
  {
    date: 'Apr 2024 — Dec 2025',
    role: 'Software Engineer III — Full Stack Development',
    company: 'Eon Matrix Mindz India Pvt. Ltd · Chennai, India',
    bullets: [
      'Designed and delivered <b>15+ financial modules</b> — Trial Balance, P&amp;L, Bank Reconciliation, Customer/Vendor Ledgers, Statement of Accounts, Receivables.',
      'Built <b>25+ production REST APIs</b> handling high-volume financial transactions with JWT auth and validation.',
      'Optimized SQL queries, cutting response time by <b>30%+</b> through indexing and execution-plan analysis.',
      'Implemented lazy loading and virtualization for dashboards rendering <b>10,000+ records</b> in milliseconds.',
    ],
  },
  {
    date: 'Sep 2023 — Nov 2023',
    role: 'Machine Learning Intern',
    company: 'Shiash Info Solution Private Limited · Chennai, India',
    bullets: [
      'Built <b>UPI fraud-detection models</b> (Logistic Regression, Decision Trees, Naïve Bayes) reaching <b>92% classification accuracy</b>.',
      'Ran feature engineering across 50+ transaction attributes, improving model recall by 35%.',
      'Deployed a <b>Flask REST API</b> for real-time inference integrated with production payment systems.',
    ],
  },
]

export const BUILDS = [
  {
    title: 'Enterprise Finance ERP Platform',
    status: 'deployed',
    statusLabel: 'Deployed',
    desc: 'Full-stack platform covering GL, receivables, payables, and reporting with a multi-tenant architecture.',
    tags: ['React.js', 'Node.js', 'MySQL', 'MongoDB', 'Docker', 'AWS'],
  },
  {
    title: 'Financial Dashboard Suite',
    status: 'deployed',
    statusLabel: 'Deployed',
    desc: '15+ interactive dashboards with variance analysis and drill-down reporting across 100K+ transactions, sub-second response.',
    tags: ['React', 'Recharts'],
  },
  {
    title: 'Workflow Automation Engine',
    status: 'deployed',
    statusLabel: 'Deployed',
    desc: 'Automates month-end closing, GL reconciliation, and consolidation — cutting manual effort by 40%.',
    tags: ['Node.js', 'Express', 'Job Queues', 'MySQL'],
  },
  {
    title: 'UPI Fraud Detection System',
    status: 'shipped',
    statusLabel: 'Shipped · ML',
    desc: 'Real-time fraud prevention for digital payments, reaching 92% classification accuracy.',
    tags: ['Python', 'TensorFlow', 'Scikit-learn', 'Flask'],
  },
  {
    title: 'City Bus Live Prediction',
    status: 'shipped',
    statusLabel: 'Shipped · CV',
    desc: 'Tracks public buses in real time with computer vision, built for commuters tired of guessing arrival times.',
    tags: ['Python', 'OpenCV', 'YOLOv5'],
  },
]

export const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#stack', label: 'Stack' },
  { href: '#ledger', label: 'Ledger' },
  { href: '#builds', label: 'Builds' },
  { href: '#contact', label: 'Contact' },
]

export const AI_SUGGESTIONS = [
  'What does Mukesh work on day to day?',
  "What's his experience with AI/ML?",
  'Is he open to relocation?',
]
