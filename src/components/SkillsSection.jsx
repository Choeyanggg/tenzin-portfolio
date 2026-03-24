import React from "react";

const skillGroups = [
  {
    title: "Frontend Tech",
    skills: ["HTML", "CSS", "JavaScript", "React", "WordPress"],
  },
  {
    title: "Data Science / ML",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "EDA",
      "Machine Learning",
      "PyTorch",
      "Power BI",
    ],
  },
  {
    title: "Database",
    skills: ["MySQL", "PL/SQL"],
  },
  {
    title: "Tools & Interaction",
    skills: ["GitHub", "VS Code", "Jupyter Notebook"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading (MATCH YOUR THEME) */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12">
          Building data-driven solutions using machine learning and analytical thinking.
        </p>

        {/* GRID FIX */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 
              transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {/* TITLE */}
              <h3 className="text-primary font-semibold text-lg mb-4">
                {group.title}
              </h3>

              {/* SKILLS */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full 
                    bg-primary/10 text-primary border border-primary/20
                    transition-all duration-300 hover:bg-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;