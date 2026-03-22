import { useState } from "react";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "Responsive Design", level: 90, category: "frontend" },

  // Data Science / ML
  { name: "Python", level: 85, category: "data" },
  { name: "Pandas", level: 80, category: "data" },
  { name: "NumPy", level: 75, category: "data" },
  { name: "Matplotlib", level: 75, category: "data" },
  { name: "Seaborn", level: 75, category: "data" },
  { name: "Data Analysis", level: 85, category: "data" },
  { name: "Data Visualization", level: 85, category: "data" },
  { name: "EDA (Exploratory Data Analysis)", level: 80, category: "data" },
  { name: "Machine Learning", level: 80, category: "data" },
  { name: "PyTorch", level: 75, category: "data" },
  { name: "Power BI", level: 95, category: "data" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Jupyter Notebook", level: 90, category: "tools" },
];

const categories = ["all", "frontend", "data", "tools"];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full transition capitalize ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:bg-primary/10"
              }`}
            >
              {category === "data" ? "Data Science / ML" : category}
            </button>
          ))}
        </div>

        {/* Skill Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg border border-border card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>

              <div className="w-full bg-border h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-700"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;