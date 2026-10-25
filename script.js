(function() {
  "use strict";

  // ---------- RANDOMIZATION DATA ----------
  const quotes = [
    "Code is like humor. When you have to explain it, it’s bad.",
    "Innovation distinguishes between a leader and a follower.",
    "The best way to predict the future is to create it.",
    "Simplicity is the soul of efficiency.",
    "Learning never exhausts the mind.",
    "Talk is cheap. Show me the code.",
    "Security is not a product, but a process.",
    "The cloud is just someone else's computer.",
    "First, solve the problem. Then, write the code.",
    "Any sufficiently advanced technology is indistinguishable from magic."
  ];

  const majors = [
    "Cybersecurity & Networks",
    "Software Engineering",
    "Data Science",
    "Cloud Computing",
    "AI & Machine Learning",
    "Network Infrastructure",
    "Web & Mobile Development"
  ];

  const skillSets = [
    ["Python", "Java", "SQL", "Linux"],
    ["JavaScript", "React", "Node.js", "REST API"],
    ["Network Security", "Wireshark", "Firewalls", "VPN"],
    ["Cloud (AWS)", "Docker", "Kubernetes", "CI/CD"],
    ["Data Analysis", "Pandas", "TensorFlow", "Statistics"],
    ["HTML5/CSS3", "Figma", "UI/UX", "Responsive Design"],
    ["C#", ".NET", "Azure", "Git"],
    ["Ethical Hacking", "Pen Testing", "Cryptography"]
  ];

  const certifications = [
    "Cisco CCNA (in progress)",
    "CompTIA Security+ (expected 2026)",
    "AWS Cloud Practitioner",
    "Google IT Support",
    "Microsoft Azure Fundamentals",
    "Linux LPIC-1"
  ];

  const projects = [
    "Smart Campus IoT Dashboard",
    "E‑commerce Microservices",
    "Network Vulnerability Scanner",
    "Personal Portfolio v2",
    "Library Management System",
    "Chatbot with NLP",
    "Cloud File Storage App",
    "Campus Navigation AR"
  ];

  // Helper: random item from array
  const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

  // ---------- UPDATE RANDOM CONTENT ----------
  function randomizeAll() {
    // 1. Random major
    const majorEl = document.getElementById('randomMajor');
    if (majorEl) majorEl.textContent = randomItem(majors);

    // 2. Random quote
    const quoteEl = document.getElementById('quoteText');
    if (quoteEl) quoteEl.textContent = `“${randomItem(quotes)}”`;

    // 3. Random skills (3 or 4 tags)
    const skillContainer = document.getElementById('skillContainer');
    if (skillContainer) {
      const selectedSkills = randomItem(skillSets);
      const count = Math.random() > 0.5 ? 4 : 3;
      const shuffled = [...selectedSkills].sort(() => Math.random() - 0.5).slice(0, count);
      skillContainer.innerHTML = shuffled.map(skill => 
        `<span class="skill-tag">${skill}</span>`
      ).join('');
    }

    // 4. Random certification
    const certEl = document.getElementById('certText');
    if (certEl) certEl.textContent = randomItem(certifications);

    // 5. Random project
    const projectEl = document.getElementById('projectText');
    if (projectEl) projectEl.textContent = randomItem(projects);
  }

  // ---------- CV DOWNLOAD ----------
  function downloadCV() {
    const name = "Alex Rivera";
    const title = "ICT Student · University of ICT";
    const email = "alex.rivera@student.ict.edu";
    const phone = "+1 (555) 782-3412";
    const education = "BSc in Information and Communication Technology, University of ICT (2023 – 2027 expected)";
    const projectsList = [
      "Smart Campus IoT Dashboard – real‑time sensor data with MQTT",
      "Network Vulnerability Scanner – automated pentesting toolkit",
      "Cloud File Storage – AWS S3 + Lambda backend"
    ];
    const certs = ["Cisco CCNA (in progress)", "AWS Cloud Practitioner (2026)", "CompTIA Security+ (expected)"];

    const cvContent = `
============================================
          CURRICULUM VITAE
============================================
${name}
${title}
📧 ${email}  |  📞 ${phone}

--------------------------------------------
PROFESSIONAL SUMMARY
--------------------------------------------
Motivated ICT student with a strong foundation in networking, 
programming, and cloud technologies. Passionate about cybersecurity 
and building scalable solutions. Quick learner and team player.

--------------------------------------------
EDUCATION
--------------------------------------------
${education}

--------------------------------------------
TECHNICAL SKILLS
--------------------------------------------
• Programming: Python, JavaScript, Java, SQL
• Networking: TCP/IP, Routing, Firewalls, Wireshark
• Cloud: AWS (EC2, S3, Lambda), Docker basics
• Web: React, Node.js, HTML5/CSS3, REST APIs
• Security: Vulnerability assessment, Cryptography basics
• Tools: Git, Linux, Figma, VS Code

--------------------------------------------
PROJECTS
--------------------------------------------
${projectsList.map(p => `• ${p}`).join('\n')}

--------------------------------------------
CERTIFICATIONS
--------------------------------------------
${certs.map(c => `• ${c}`).join('\n')}

--------------------------------------------
LANGUAGES
--------------------------------------------
English (fluent), Spanish (intermediate)

--------------------------------------------
References available upon request.
============================================
    `.trim();

    const blob = new Blob([cvContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Alex_Rivera_CV.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    const btn = document.getElementById('downloadCvBtn');
    if (btn) {
      btn.style.transform = 'scale(0.96)';
      setTimeout(() => { btn.style.transform = ''; }, 200);
    }
  }

  // ---------- INITIALIZATION ----------
  document.addEventListener('DOMContentLoaded', () => {
    randomizeAll();

    setInterval(() => {
      randomizeAll();
    }, 15000);

    const cvBtn = document.getElementById('downloadCvBtn');
    if (cvBtn) {
      cvBtn.addEventListener('click', (e) => {
        e.preventDefault();
        downloadCV();
      });
    }
  });
})();