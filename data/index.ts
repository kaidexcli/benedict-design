export const portfolioData = {
  name: "Benedict Fusin",
  title: "Electronics Engineering & Full-Stack Developer",
  intro: "I bridge hardware and software through embedded systems, AI, and scalable web applications. I focus on turning complex logic into functional, real-world prototypes.",
  contactInfo: "benedict.fusin@example.com",
  socials: [
    { name: "github", url: "https://github.com/kaidexcli" }, // Updated!
    { name: "linkedin", url: "https://linkedin.com/" },
    { name: "email", url: "mailto:benedictfusin99@example.com" }, // Updated!
  ],
  sidebarMenu: [
    { name: "Projects", icon: "box" },
    { name: "Experience", icon: "book" },
    { name: "Photography", icon: "monitor" },
  ],
  stats: [
    { value: "IECEP", label: "Polytechnic University of the Philippines" },
    { value: "NVIDIA and Anthropic", label: "Artificial Intelligence Engineering Certified" }, // Updated!
    { value: "AI, ML, Edge AI", label: "Integration and Development" },
  ],
  techStackCategories: [
    { category: "Frontend & Core", items: ["JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Tailwind CSS", "SCSS", "Styled Components", "Vite", "Webpack", "ESLint", "Prettier"] },
    { category: "Backend", items: ["Node.js", "Python", "Java", "PHP", "Express.js", "NestJS", "FastAPI", "Spring"] },
    { category: "DevOps & Cloud", items: ["AWS", "GCP", "Azure", "GitHub Actions", "Jenkins", "GitLab CI", "Terraform", "AWS CloudFormation", "Docker", "Kubernetes", "Prometheus", "Grafana", "Datadog"] },
    { category: "AI & ML", items: ["TensorFlow", "PyTorch", "LangChain", "Transformers", "OpenAI", "Anthropic", "Mistral", "Huggingface", "LlamaIndex", "AutoGPT", "Claude Code", "Codex"] },
    { category: "Security & Identity", items: ["AWS IAM", "Azure AD", "Okta", "SAP CDC", "Auth0", "Cognito", "AES", "RSA", "SHA", "GDPR", "SOC 2", "ISO 27001"] },
    { category: "CMS & No-code", items: ["WordPress", "Strapi", "Bubble", "Webflow", "Microsoft Power Platform", "n8n"] },
    { category: "Developer Tools", items: ["Git", "GitHub", "GitLab", "Bitbucket", "VS Code", "JetBrains IntelliJ", "PyCharm", "Slack", "Discord", "Teams", "JIRA", "Trello", "ClickUp"] }
  ],
  experiences: [
    { role: "Auren Founder and CEO", period: "Present", description: "An AI and SaaS startup company providing Software-as-a-Service solutions to other companies" },
    { role: "Edge AI and IoT Freelance Researcher", period: "Ongoing", description: "Developing automated testing Edge Artificial Intelligence workflows and IoT architectures utilizing Microcontroller and Fetch/Fast API." },
    { role: "DEVCON Manila Volunteer", period: "Ongoing", description: "Volunteering for DEVCON Manila chapter throughout the events" }
  ],
  achievements: [
    "DataCamp: AI and Data Engineering Scholar from December 2025 to Present. A Leaderboard learner in DC.",
    "Competitor in the UPMC Annual Nationwide Search for the Math Wizard (2026).",
    "Developed an automated study workflow converting source material into active recall datasets."
  ],
  
  // REQUIRED FOR THE 3-COLUMN CARD UI:
  certificates: [
    { id: "c1", title: "DataCamp Scholar", tag: "Data Eng / AI", description: "Completed rigorous AI and Data Engineering tracks, reaching leaderboard status." },
    { id: "c2", title: "Math Wizard", tag: "UPMC 2026", description: "Nationwide competitor tackling matrix polynomials and inverse integral calculus." },
    { id: "c3", title: "Iskolar ng Husay", tag: "Engineering", description: "Recognized within the university engineering track for academic excellence." }
  ],
  projects: [
    { id: "1", title: "AquaSmart", tag: "IoT / Embedded", description: "An integrated IoT aquarium environment using sensor automation to maintain optimal aquatic parameters." },
    { id: "2", title: "SecuWear", tag: "Hardware / C++", description: "A wearable safety device utilizing ESP32, GPS tracking, and GSM/SIM800 SMS alerts." },
    { id: "3", title: "Virtual DC Lab", tag: "MATLAB / GUI", description: "A GUI-based virtual laboratory to simulate DC circuits and compute node equations." },
    { id: "4", title: "NodeMCU Robotics", tag: "Hardware / Web API", description: "Standalone ESP8266 robot car featuring local AP Wi-Fi hosting and responsive OLED facial expressions." }
  ],
  documentaries: [
    { id: "d1", title: "Local Portraiture", tag: "Photography", description: "Capturing graduation milestones, portraits, and event narratives for local clients." },
    { id: "d2", title: "Auren Origins", tag: "Startup", description: "Behind-the-scenes documentary of bootstrapping an AI SaaS architecture." },
    { id: "d3", title: "DEVCON Manila", tag: "Community", description: "On-the-ground volunteer coordination and tech-community building." }
  ]
};