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
      location: "Dehradun",
      degree: "Intermediate",
      period: "2021 - 2022",
      details: "79.8%",
    },
  ],

  skills: [
    {
      category: "Programming",
      items: ["Python","C++", "Java", "JavaScript"],
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
      title: "ClassAid",
      desc: "Complaint tracking system with role-based access",
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Expenz",
      desc: "Expense tracker with graphs & auth system",
      tech: ["React", "Charts", "MongoDB"],
    },
  ],

  extracurricular: [
    "Smart India Hackathon participant",
    "Worked on farmer marketplace platform",
  ],

  certificates: [
    "Cloud Computing - NPTEL",
    "Node.js - Coursera",
    "Web Dev - Coursera",
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
      className={`px-5 py-2 rounded-full text-sm font-medium transition ${
        activeTab === id
          ? "bg-primary text-primary-foreground"
          : "text-muted-foreground hover:text-primary"
      }`}
    >
      {id.charAt(0).toUpperCase() + id.slice(1)}
    </button>
  );

  return (
    <section id="resume" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Resume</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12">
          A structured overview of my academics and experience.
        </p>

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
              <div key={i} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg">
                <div className="flex justify-between flex-wrap">
                  <h3 className="text-primary font-semibold">{edu.institution}</h3>
                  <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                    {edu.period}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground">{edu.location}</p>
                <p className="mt-2 font-medium">{edu.degree}</p>
                <p className="text-sm text-muted-foreground">{edu.details}</p>
              </div>
            ))}

          {/* SKILLS */}
          {activeTab === "skills" &&
            resumeData.skills.map((group, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-primary font-semibold mb-3">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}

          {/* PROJECTS */}
          {activeTab === "projects" &&
            resumeData.projects.map((proj, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-primary font-semibold">{proj.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{proj.desc}</p>
                <div className="flex gap-2 mt-3 flex-wrap">
                  {proj.tech.map((t, idx) => (
                    <span key={idx} className="px-2 py-1 text-xs bg-secondary rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}

          {/* EXTRACURRICULAR */}
          {activeTab === "extracurricular" && (
            <div className="bg-card border border-border rounded-xl p-6">
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                {resumeData.extracurricular.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* CERTIFICATES */}
          {activeTab === "certificates" && (
            <div className="bg-card border border-border rounded-xl p-6">
              <ul className="space-y-2">
                {resumeData.certificates.map((cert, i) => (
                  <li key={i} className="text-muted-foreground">
                    🏆 {cert}
                  </li>
                ))}
              </ul>
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