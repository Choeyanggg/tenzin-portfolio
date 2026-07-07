import { useMagnetic } from "../hooks/useMagnetic";
import Reveal from "./Reveal";

const stack = [
  "Python",
  "C++",
  "NumPy",
  "PostgreSQL",
  "FastAPI",
  "Scikit-learn",
  "LangChain",
  "Pandas",
  "Power BI",
  "Apache Hadoop",
  "Apache Hive",
  "MySQL",
  "Docker",
  "Git",
];

const facts = [
  { label: "Focus", value: "AI / ML | Data Engineering" },
  { label: "Studying", value: "B.Tech CSE, LPU Punjab" },
  { label: "Based in", value: "Punjab, India" },
];

const AboutSection = () => {
  const magneticTouch = useMagnetic(14);
  const magneticCV = useMagnetic(14);

  return (
    <section id="about" className="py-24 md:py-32 hairline">
      <div className="container-page">
        <Reveal>
          <p className="prompt-label mb-3">cat about.md</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-16">
            About me
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-5 gap-14">
          <Reveal delay={80} className="md:col-span-3 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm a B.Tech CSE student focused on data science and machine 
              learning, with a growing interest in AI engineering,
              particularly retrieval-augmented systems and applied ML.
            </p>
            <p>
              I like building things end-to-end: training a model is only
              half the job, so I spend just as much time on the data pipelines,
              APIs, and deployment that make a project actually usable.
            </p>
            <p>
              Alongside project work, I've been sharpening my
              problem-solving through data structures and algorithms, and I'm
              currently exploring internship opportunities where I can apply
              both.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                ref={magneticTouch.ref}
                onMouseMove={magneticTouch.onMouseMove}
                onMouseLeave={magneticTouch.onMouseLeave}
                href="mailto:tchoeyang2005@gmail.com"
                data-cursor-hover
                className="btn-primary will-change-transform"
              >
                Get in touch
              </a>
              <a
                ref={magneticCV.ref}
                onMouseMove={magneticCV.onMouseMove}
                onMouseLeave={magneticCV.onMouseLeave}
                href="https://drive.google.com/file/d/14kmf7_4e5jCY-oVRV3rq-tlJT4dxXTNW/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className="btn-outline will-change-transform"
              >
                Download CV
              </a>
            </div>
          </Reveal>

          <Reveal delay={160} className="md:col-span-2 space-y-8">
            <div className="rounded-lg border border-border p-6 space-y-4 transition-shadow duration-300 hover:shadow-md">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <p className="font-mono text-xs text-muted-foreground mb-1">
                    {fact.label}
                  </p>
                  <p className="font-medium">{fact.value}</p>
                </div>
              ))}
            </div>

            <div>
              <p className="font-mono text-xs text-muted-foreground mb-3">
                Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {stack.map((item) => (
                  <span key={item} className="tag-pill">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
