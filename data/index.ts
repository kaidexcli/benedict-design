export const portfolioData = {
  name: "Benedict Fusin",
  title: "Electronics and AI Engineering & Full-Stack Developer",
  intro: "I bridge hardware and software through embedded systems, AI, and scalable web applications. I focus on turning complex logic into functional, real-world prototypes.",
  contactInfo: "benedictfusin99@gmail.com",
  socials: [
    { name: "github", url: "https://github.com/kaidexcli" },
    { name: "linkedin", url: "https://linkedin.com/" },
    { name: "email", url: "mailto:benedictfusin99@gmail.com" },
  ],
  sidebarMenu: [
    { name: "Projects", icon: "box" },
    { name: "Experience", icon: "book" },
    { name: "Photography", icon: "monitor" },
  ],
  stats: [
    { value: "IECEP", label: "Polytechnic University of the Philippines" },
    { value: "NVIDIA and Anthropic", label: "Artificial Intelligence Engineering Certified" },
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
    { role: "Auren AI - Founder and CEO", period: "Present", description: "An Artificial Intelligence, Machine Learning, and SaaS startup company providing Software-as-a-Service solutions to other companies." },
    { role: "Data Engineering Pilipinas Associate", period: "Ongoing", description: "Collaborated with other data engineers at Data Engineering Pilipinas community and organization." },
    { role: "DEVCON Manila Volunteer", period: "Ongoing", description: "Volunteering for DEVCON Manila chapter throughout the events, specifically in tech team." },
    { role: "Google Developer Group on Campus - Machine Learning Cadet", period: "Ongoing", description: "Machine Learning Cadet in Google  Developer Group on Campus - PUP Manila branch."},
    { role: "IECEP Manila Student Chapter Associate", period: "Ongoing", description: "An associate in IECEP Manila Student Chapter, the national organization for ECE students."}
  ],
  achievements: [
    "DataCamp: AI and Data Engineering Scholar from December 2025 to Present. A Leaderboard learner in DC.",
    "Competitor in the UPMC Annual Nationwide Search for the Math Wizard (2026).",
    "Developed an automated study workflow converting source material into active recall datasets."
  ],
  
  // UNIQUE IMAGES ADDED BELOW:
  certificates: [
    { id: "c1", title: "DataCamp Scholar", tag: "Data Eng / AI", description: "Completed rigorous AI and Data Engineering tracks, reaching leaderboard status.", image: "/datacamp-cert.jpg" },
    { id: "c2", title: "Math Wizard", tag: "UPMC 2026", description: "Nationwide competitor tackling matrix polynomials and inverse integral calculus.", image: "/math-wizard.jpg" },
    { id: "c3", title: "Top #1 Ideathon", tag: "DOST Pylon", description: "Recognized within the university engineering track for academic excellence.", image: "/iskolar.jpg" },
    { id: "c4", title: "Enancing Wireless Performance", tag: "IECEP", description: "Certification for wireless device webinar and training.", image: "/wireless.jpg"},
    { id: "c5", title: "Leadership in Engineering", tag: "IECEP", description: "Certification for leading a team or the nation as an engineer.",  image: "/leadership.jpg"},
    { id: "c6", title: "Avionics Unlocked", tag: "IECEP", description: "Certification for webinar as Avionics in the filed of Electronics Engineering", image: "/avionics.jpg"},
    { id: "c7", title: "Where Wires Meet the Waves", tag: "IECEP", description: "Certiication for underwater related jobs and activities as an ECE", image: "/waves.jpg"},
    { id: "c8", title: "The AI-Enabled Electronics Engineer", tag: "IECEP", description: "Certification on how ECE will engage in AI enabled era", image: "/ai.jpg"},
    { id: "c9", title: "The Virtual  Aetelier", tag: "IECEP", description: "Simulation training of electronics, utilizing the Multisim", image: "/aetelier.jpg"},
    { id: "c10", title: "The Silicon Fiber", tag: "IECEP", description: "Chip and integrated circuit designing seminar compressed to engage semiconductor", image: "/silicon.jpg"},
    { id: "c11", title: "AI on Jetson Nano", tag: "NVIDIA", description: "Certification on AI building in Nvidia Deep Learning Institute", image: "/nvidia.jpg"},
    { id: "c12", title: "Generative AI and Prompt Engineering", tag: "IECEP", description: "Prompt engineering for Generative AI in the pursuit of a better academic impact", image: "/genai.jpg"},
    { id: "c13", title: "Cybersecurity Fundamentals", tag: "AWS Learning Club - Polar", description: "Cybersecurty fundamentals compressed in one workshop for easier understanding", image: "/cybersec.jpeg"}

  ],
  projects: [
    { id: "1", title: "BeMotion", tag: "IoT / Embedded", description: "An integrated IoT aquarium environment using sensor automation to maintain optimal aquatic parameters.", image: "/aquasmart.jpg" },
    { id: "2", title: "SecuWear", tag: "Electronics and AI", description: "A wearable safety device utilizing ESP32, GPS tracking, and GSM/SIM800 SMS alerts.", image: "/secuwear.jpg" },
    { id: "3", title: "iStud", tag: "Full-Stack and AI", description: "A GUI-based virtual laboratory to simulate DC circuits and compute node equations.", image: "/virtual-dc-lab.jpg" },
    { id: "4", title: "Arc-Studio", tag: "Business Grade AI", description: "Standalone ESP8266 robot car featuring local AP Wi-Fi hosting and responsive OLED facial expressions.", image: "/nodemcu-robot.jpg" }
  ],
  documentaries: [
    { id: "d1", title: "Local Portraiture", tag: "Photography", description: "Capturing graduation milestones, portraits, and event narratives for local clients.", image: "/photography-portraits.jpg" },
    { id: "d2", title: "Auren Origins", tag: "Startup", description: "Behind-the-scenes documentary of bootstrapping an AI SaaS architecture.", image: "/auren-startup.jpg" },
    { id: "d3", title: "DEVCON Manila", tag: "Community", description: "On-the-ground volunteer coordination and tech-community building.", image: "/devcon-manila.jpg" }
  ]
};