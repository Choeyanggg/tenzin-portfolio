import { ArrowRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

const projects = [
  {
    id: 0,
    title: "NotebookLLM",
    eyebrow: "RAG APPLICATION",
    description:
      "A full-stack retrieval-augmented generation app — FastAPI, ChromaDB and LangChain on the backend, a React/Vite frontend, and Supabase-backed conversation history. Deployed to EC2 via Docker and GitHub Actions.",
    image: "/projects/project4.png",
    tags: ["FastAPI", "LangChain", "ChromaDB", "React", "Docker"],
    githubUrl: "https://github.com/Choeyanggg/NotebookLLM",
  },
  {
    id: 1,
    title: "Tibetan OCR",
    eyebrow: "COMPUTER VISION",
    description:
      "A deep-learning pipeline that transcribes Tibetan script from line images into digital text, using a CNN trained in PyTorch for character classification.",
    image: "/projects/project1.png",
    tags: ["PyTorch", "Machine Learning", "Neural Network"],
    githubUrl: "https://github.com/Choeyanggg/TibetanOCR.git",
  },
  {
    id: 2,
    title: "Macroeconomic Inflation Prediction",
    eyebrow: "TIME-SERIES ML",
    description:
      "Forecasting short-term inflation from RBI time-series data using Random Forest and XGBoost, with clustering to surface distinct inflation regimes.",
    image: "/projects/project2.png",
    tags: ["Python", "Machine Learning", "Matplotlib"],
    githubUrl: "https://github.com/Choeyanggg/Macroeconomic-Inflation-Prediction.git",
  },
  {
    id: 3,
    title: "Electric Vehicle Population Analytics",
    eyebrow: "DATA ANALYSIS",
    description:
      "An interactive Power BI dashboard analyzing the growth and regional distribution of EV adoption across Washington State.",
    image: "/projects/project3.png",
    tags: ["Power BI", "EDA", "Data Analysis"],
    githubUrl: "https://github.com/Choeyanggg/Electric-Vehicle-Population-Analytics.git",
  },
];

const ProjectsSection = () => {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="container-page">
        <Reveal>
          <p className="prompt-label mb-3">ls ./work</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Selected work
          </h2>
          <p className="text-muted-foreground max-w-xl mb-16">
            Projects spanning retrieval-augmented systems, computer vision, and
            applied data analysis.
          </p>
        </Reveal>

        <div className="space-y-16 md:space-y-24">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <Reveal className="text-center mt-20">
          <a
            href="https://github.com/Choeyanggg"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="btn-outline"
          >
            More on GitHub <ArrowRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default ProjectsSection;
