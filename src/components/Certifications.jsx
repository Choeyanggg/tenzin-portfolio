import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const certifications = [
  {
    title: "Privacy and Security in Online Social Media",
    issuer: "NPTEL",
    date: "Oct 2025",
    link: "https://drive.google.com/file/d/1ddofGnmb7zmTJItmLRPf4XpSh0etWNpR/view?usp=sharing",
  },
  {
    title: "Deep Learning Specialization",
    issuer: "Coursera",
    date: "Dec 2025",
    link: "https://www.coursera.org/account/accomplishments/specialization/52TDUHJXJ2FU",
  },
  {
    title: "Legacy Responsive Web Design V8",
    issuer: "freeCodeCamp",
    date: "Nov 2023",
    link: "https://www.freecodecamp.org/certification/fcc1306a8bd-f620-46f4-af97-67cfa4a84ce6/responsive-web-design",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 md:py-32 hairline">
      <div className="container-page">
        <Reveal>
          <p className="prompt-label mb-3">ls ./certifications</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-16">
            Certifications
          </h2>
        </Reveal>

        <div className="border-t border-border">
          {certifications.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 80} className="border-b border-border">
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className="group flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-6 hover:text-primary hover:pl-2 transition-all duration-300"
              >
                <div>
                  <h3 className="font-medium inline-block origin-left transition-transform duration-200 group-hover:scale-105">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    {cert.issuer}
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="font-mono text-xs text-muted-foreground">
                    {cert.date}
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                  />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;