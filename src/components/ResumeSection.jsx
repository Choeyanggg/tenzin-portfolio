import { useState } from "react";

const resumeData = {
  education: [
    {
      institution: "Lovely Professional University",
      location: "Punjab, India",
      degree: "B.Tech - Computer Science and Engineering",
      period: "Since August 2023",
      details: "CGPA: 7.73",
    },
    {
      institution: "TCV Selakui School",
      location: "Dehradun, Uttarkhand",
      degree: "Intermediate",
      period: "2021 - 2022",
      details: "Percentage: 79.8%",
    },
  ],

  skills: [
    {
      category: "Programming",
      items: ["Python", "C++", "Java", "JavaScript"],
    },
    {
      category: "Frontend",
      items: [
        "HTML/CSS",
        "JavaScript",
        "React",
        "Responsive Design",
      ],
    },
    {
      category: "Data Science & ML",
      items: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Data Analysis",
        "Data Visualization",
        "EDA",
        "Machine Learning",
        "PyTorch",
        "Power BI",
      ],
    },
    {
      category: "Database",
      items: [
        "MySQL",
        "PL/SQL",
      ],
    },
    {
      category: "Tools",
      items: [
        "Git/GitHub",
        "VS Code",
        "Jupyter Notebook",
      ],
    },
  ],

  projects: [
    {
        title: "Tibetan OCR",
        period: "April, 2025",
        description: [
          "Developed a Tibetan handwriting recognition system using deep learning for accurate character extraction",
          "Applied image preprocessing techniques including normalization, denoising, and segmentation to enhance input quality",
          "Trained a CNN-based model in PyTorch for multi-class Tibetan character classification",
          "Built an end-to-end pipeline for text segmentation, prediction, and reconstruction of Tibetan script",
          "Improved model performance through data augmentation and hyperparameter optimization"
        ],
        tech: "Pytorch, Machine Learning, Neural Network",
        link: "https://github.com/Choeyanggg/TibetanOCR.git"
    },
    {
        title: "Macroeconomic Inflation Prediction",
        period: "Nov, 2025",
        description: [
          "Analyzed inflation trends in India using RBI time-series data with exploratory data analysis and lag-based feature engineering",
          "Built supervised machine learning models (Random Forest, XGBoost) to forecast short-term inflation using rolling CPI averages",
          "Applied unsupervised learning (K-Means, Hierarchical Clustering) to identify structural inflation regimes via elbow and dendrogram analysis",
          "Demonstrated inflation persistence and regime-dependent behavior, with forecasts of ~2.78% (Random Forest) and ~3.15% (XGBoost)"
        ],
        tech: "Python, Machine Learning, Matplotlib",
        link: "https://github.com/Choeyanggg/Macroeconomic-Inflation-Prediction.git"
    },
    {
        title: "Electric Vehicle Population Analytics",
        period: "Dec, 2025",
        description: [
          "Developed an interactive Power BI dashboard to track EV adoption trends using Washington State vehicle population data",
          "Transformed raw datasets through data cleaning, modeling, and feature structuring for effective analysis",
          "Created dynamic visualizations for manufacturer performance, regional distribution, and time-based trends",
          "Generated actionable insights into EV growth patterns to support strategic and data-driven decisions"
        ],
        tech: "PowerBI, EDA, Data Analysis",
        link: "https://github.com/Choeyanggg/Electric-Vehicle-Population-Analytics.git"
    },
  ],

  extracurricular: [
    {
      title: "Central Tibetan Administration Intern",
      period: "2025",
      points: [
        "Improved clarity, organization, and usability of departmental reports.",
        "Designed and deployed Power BI dashboards for internal KPIs, reducing report creation time by 30%",
        "Supported the team in organizing community programs and narrating presentation content",
      ],
    },
    {
      title: "Student for Free Tibet Social Media Handler",
      period: "2025",
      points: [
        "Managed and curated content across social media platforms to raise awareness about Tibetan issues",
        "Designed and scheduled posts to improve audience engagement and outreach",
        "Analyzed engagement metrics to optimize content strategy and increase visibility"
      ],
    },
  ],

  certificates: [
    {
      title: "Privacy and Security in Online Social Media",
      issuer: "NPTEL",
      date: "October 2025",
    },
    {
      title: "Deep Learning",
      issuer: "Coursera",
      date: "December 2025",
    },
    {
      title: "Legacy Responsive Web Design V8",
      issuer: "freeCodeCamp",
      date: "November 2023",
    },
  ],

  achievements: [
    {
      title: "Filed Patent on AI-based System",
      date: "2025",
      description:
        "Proposed and documented an AI-driven solution addressing real-world problems with practical implementation potential",
    },
  ],
};

const ResumeSection = () => {
  const [activeTab, setActiveTab] = useState("education");

  const tabs = [
    "education",
    "skills",
    "projects",
    "extracurricular",
    "certificates",
  ];

  const TabButton = ({ id }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
        activeTab === id
          ? "bg-primary text-primary-foreground shadow-md"
          : "text-muted-foreground hover:text-primary hover:scale-105"
      }`}
    >
      {id.charAt(0).toUpperCase() + id.slice(1)}
    </button>
  );

  return (
    <section id="resume" className="py-24 px-4">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Resume</span>
        </h2>

        <p className="text-center text-muted-foreground mb-10">
          A structured overview of my academics and experience.
        </p>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <a
            href="mailto:tchoeyang2005@gmail.com"
            className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border hover:bg-primary/10 transition"
          >
            📧 tchoeyang2005@gmail.com
          </a>

          <a
            href="tel:+91-7559765233"
            className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border hover:bg-primary/10 transition"
          >
            📱 +91-7559765233
          </a>

          <a
            href="https://www.linkedin.com/in/tenzinchoeyang"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border hover:bg-primary/10 transition"
          >
            🔗 LinkedIn
          </a>

          <a
            href="https://github.com/Choeyanggg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border hover:bg-primary/10 transition"
          >
            💻 GitHub
          </a>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {tabs.map((tab) => (
            <TabButton key={tab} id={tab} />
          ))}
        </div>

        {/* Content */}
        <div className="space-y-6">

          {/* EDUCATION */}
          {activeTab === "education" &&
            resumeData.education.map((edu, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition"
              >
                <div className="flex justify-between items-start">

                  {/* LEFT SIDE (STRICT LEFT ALIGN) */}
                  <div className="text-left space-y-1">
                    <h3 className="text-primary font-semibold text-lg">
                      {edu.institution}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      {edu.location}
                    </p>

                    <p className="font-medium mt-2">
                      {edu.degree}
                    </p>

                    <p className="text-sm text-muted-foreground">
                      {edu.details}
                    </p>
                  </div>

                  {/* RIGHT SIDE (DATE FIXED POSITION) */}
                  <div className="flex-shrink-0 self-start">
                    <span className="text-xs px-4 py-1.5 bg-primary/10 text-primary rounded-full">
                      {edu.period}
                    </span>
                  </div>

                </div>
              </div>
            ))}

          {/* SKILLS */}
          {activeTab === "skills" &&
            resumeData.skills.map((group, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition"
              >
                <div className="flex justify-between items-start">

                  {/* LEFT */}
                  <h3 className="text-primary font-semibold text-lg">
                    {group.category}
                  </h3>
                </div>

                {/* SKILLS LIST */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {group.items.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}

          {/* PROJECTS */}
          {activeTab === "projects" &&
            resumeData.projects.map((proj, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition"
              >
                <div className="flex justify-between items-start gap-4">

                  {/* LEFT CONTENT */}
                  <div className="text-left">

                    {/* TITLE */}
                    <h3 className="text-primary font-semibold text-lg">
                      {proj.title}
                    </h3>

                    {/* DESCRIPTION BULLETS */}
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      {proj.description.map((point, idx) => (
                        <li key={idx} className="flex gap-2 items-start">
                          <span className="text-primary mt-1">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* TECH STACK */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {proj.tech.split(",").map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs bg-secondary rounded-full"
                        >
                          {t.trim()}
                        </span>
                      ))}
                    </div>

                    {/* GITHUB LINK */}
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-sm text-primary hover:underline"
                    >
                      View Project →
                    </a>
                  </div>

                  {/* RIGHT SIDE (DATE) */}
                  <div className="flex-shrink-0">
                    <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full whitespace-nowrap">
                      {proj.period}
                    </span>
                  </div>

                </div>
              </div>
            ))}

          {/* EXTRACURRICULAR */}
          {activeTab === "extracurricular" &&
            resumeData.extracurricular.map((item, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition"
              >
                <div className="flex justify-between items-start gap-4">

                  {/* LEFT CONTENT */}
                  <div className="text-left">

                    {/* TITLE */}
                    <h3 className="text-primary font-semibold text-lg">
                      {item.title}
                    </h3>

                    {/* BULLET POINTS */}
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      {item.points.map((point, idx) => (
                        <li key={idx} className="flex gap-2 items-start">
                          <span className="text-primary mt-1">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                  </div>

                  {/* RIGHT SIDE (DATE) */}
                  <div className="flex-shrink-0">
                    <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full whitespace-nowrap">
                      {item.period}
                    </span>
                  </div>

                </div>
              </div>
            ))}
          {/* CERTIFICATES */}
          {activeTab === "certificates" && (
            <div className="space-y-6">

              {/* CERTIFICATES */}
              {resumeData.certificates.map((cert, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6">
                  <div className="flex justify-between items-center">

                    {/* LEFT */}
                    <div className="flex items-start gap-4">
                      <span className="text-2xl mt-1">🏆</span>

                      <div className="text-left">
                        <h3 className="text-primary font-semibold">
                          {cert.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>

                    {/* RIGHT */}
                    <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full whitespace-nowrap">
                      {cert.date}
                    </span>

                  </div>
                </div>
              ))}

              {/* ACHIEVEMENTS TITLE */}
              <h3 className="text-xl font-semibold text-primary mt-6">
                Achievements
              </h3>

              {/* ACHIEVEMENTS */}
              {resumeData.achievements.map((ach, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6">
                  <div className="flex justify-between items-start">

                    {/* LEFT */}
                    <div className="flex items-start gap-4">
                      <span className="text-2xl mt-1">🏆</span>

                      <div className="text-left">
                        <h3 className="text-primary font-semibold">
                          {ach.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {ach.description}
                        </p>
                      </div>
                    </div>

                    {/* RIGHT */}
                    <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full whitespace-nowrap">
                      {ach.date}
                    </span>

                  </div>
                </div>
              ))}

            </div>
          )}
        </div>

        {/* Download */}
        <div className="text-center mt-14">
          <a href="/resume.pdf" download className="cosmic-button">
            Download Resume
          </a>
        </div>

      </div>
    </section>
  );
};

export default ResumeSection;