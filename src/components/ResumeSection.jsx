import { useMagnetic } from "../hooks/useMagnetic";
import Reveal from "./Reveal";

const experience = [
  {
    title: "Central Tibetan Administration — Intern",
    period: "2025",
    detail:
      "Designed and deployed Power BI dashboards for internal KPIs, cutting report creation time by 30%.",
  },
  {
    title: "Student for Free Tibet — Social Media Handler",
    period: "2025",
    detail:
      "Managed content strategy across platforms, using engagement analytics to grow reach.",
  },
];

const RESUME_URL =
  "https://drive.google.com/file/d/14kmf7_4e5jCY-oVRV3rq-tlJT4dxXTNW/view?usp=sharing";

const ResumeSection = () => {
  const magnetic = useMagnetic(14);

  return (
    <section id="resume" className="py-24 md:py-32 hairline">
      <div className="container-page">
        <div className="grid md:grid-cols-5 gap-14">
          <Reveal className="md:col-span-2">
            <p className="prompt-label mb-3">./resume --summary</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              Experience
            </h2>
            <p className="text-muted-foreground mb-6">
              The full breakdown — education, skills, and project details —
              lives in the resume.
            </p>
            <a
              ref={magnetic.ref}
              onMouseMove={magnetic.onMouseMove}
              onMouseLeave={magnetic.onMouseLeave}
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="btn-primary will-change-transform"
            >
              View full resume
            </a>
          </Reveal>

          <div className="md:col-span-3 space-y-6">
            {experience.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 100}
                className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 border-b border-border pb-6 transition-transform duration-300 hover:translate-x-1"
              >
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    {item.detail}
                  </p>
                </div>
                <span className="font-mono text-xs text-muted-foreground shrink-0">
                  {item.period}
                </span>
              </Reveal>
            ))}

            <Reveal delay={200} className="flex items-start gap-3 pt-2">
              <span className="tag-pill shrink-0">2025</span>
              <p className="text-muted-foreground text-sm">
                Filed a patent for an AI-driven smart charging system that optimizes electronic 
                device charging through intelligent battery management and predictive analytics.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
