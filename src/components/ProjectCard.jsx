import { ArrowUpRight, Github } from "lucide-react";
import { useTilt } from "../hooks/useTilt";
import Reveal from "./Reveal";

const ProjectCard = ({ project, index }) => {
  const tilt = useTilt(6);

  return (
    <Reveal
      className={`grid md:grid-cols-2 gap-8 md:gap-14 items-center ${
        index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <a
        ref={tilt.ref}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor-hover
        className="group block rounded-lg overflow-hidden border border-border shadow-sm will-change-transform [transform-style:preserve-3d]"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
      </a>

      <div>
        <p className="font-mono text-xs tracking-wide text-primary mb-3">
          {project.eyebrow}
        </p>
        <h3 className="font-display text-2xl font-semibold mb-3">
          {project.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-5">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span key={tag} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor-hover
          className="inline-flex items-center gap-1.5 font-medium text-sm hover:text-primary transition-colors group"
        >
          <Github size={16} />
          <span className="inline-block transition-transform duration-200 group-hover:scale-105">
            View repository
          </span>
          <ArrowUpRight
            size={14}
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </Reveal>
  );
};

export default ProjectCard;