import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Tibetan OCR",
    description: "A system built to transcribe Tibetan script from line images into digital text.",
    image: "/projects/project1.png",
    tags: ["Pytorch", "Machine Learning", "Neural Network"],
    demoUrl: "#",
    githubUrl: "https://github.com/Choeyanggg/TibetanOCR.git",
  },
  {
    id: 2,
    title: "Macroeconomic Inflation Prediction",
    description:
      "A comprehensive analysis of macroeconomic inflation dynamics in India using RBI time-series data.",
    image: "/projects/project2.png",
    tags: ["Python", "Machine Learning", "Matplotlib"],
    demoUrl: "#",
    githubUrl: "https://github.com/Choeyanggg/Macroeconomic-Inflation-Prediction.git",
  },
  {
    id: 3,
    title: "Electric Vehicle Population Analytics",
    description:
      "An interactive Power BI dashboard analyzing the growth and distribution of electric vehicles (EVs) in Washington State.",
    image: "/projects/project3.png",
    tags: ["PowerBI", "EDA", "Data Analysis"],
    demoUrl: "#",
    githubUrl: "https://github.com/Choeyanggg/Electric-Vehicle-Population-Analytics.git",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Recent data science and machine learning projects focused on data analysis, modeling, and extracting insights from real-world data.

        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden border border-border card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-1">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex space-x-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary"
                  >
                    <ExternalLink size={20} />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Button */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button inline-flex items-center justify-center gap-2 w-fit mx-auto"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Choeyanggg"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;