import { useRef } from "react";
import { useTilt } from "../hooks/useTilt";
import { useMagnetic } from "../hooks/useMagnetic";
import TypedPrompt from "./TypedPrompt";

const commands = [
  'whoami',
  'cat focus.md',
  './resume --download',
];

const fields = [
  { label: "name", value: "Tenzin Choeyang" },
  { label: "role", value: "Aspiring Backend & Data Engineer" },
  { label: "based", value: "Punjab, India" },
  { label: "focus", value: "AI · Data Engineering · DSA" },
  { label: "now", value: "DSA & building projects" },
  { label: "status", value: "open to internships", highlight: true },
];

const HeroSection = () => {
  const cardTilt = useTilt(10);
  const photoTilt = useTilt(14);
  const magneticView = useMagnetic(12);
  const magneticContact = useMagnetic(12);
  const spotlightRef = useRef(null);

  const handleSpotlight = (e) => {
    const el = spotlightRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <section
      id="hero"
      ref={spotlightRef}
      onMouseMove={handleSpotlight}
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(600px circle at var(--x, 70%) var(--y, 30%), hsl(var(--primary) / 8%), transparent 70%)",
      }}
    >
      <div className="container-page grid md:grid-cols-2 gap-14 items-center">
        <div className="opacity-0 animate-fade-up">
          <TypedPrompt commands={commands} />

          <h1 className="mt-6 font-display text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            Tenzin Choeyang
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            CSE student building backend systems, 
            data pipelines, and AI/ML applications 
            with a focus on scalable and efficient software.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              ref={magneticView.ref}
              onMouseMove={magneticView.onMouseMove}
              onMouseLeave={magneticView.onMouseLeave}
              href="#work"
              className="btn-primary will-change-transform"
              data-cursor-hover
            >
              View my work
            </a>
            <a
              ref={magneticContact.ref}
              onMouseMove={magneticContact.onMouseMove}
              onMouseLeave={magneticContact.onMouseLeave}
              href="#contact"
              className="btn-outline will-change-transform"
              data-cursor-hover
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* whoami identity card + photo card, each tilt independently */}
        <div className="hidden md:block relative max-w-sm ml-auto mt-8 mr-4">
          <div
            ref={photoTilt.ref}
            onMouseMove={photoTilt.onMouseMove}
            onMouseLeave={photoTilt.onMouseLeave}
            className="group absolute -top-8 -right-8 w-28 h-28 z-10 will-change-transform transition-transform duration-200 ease-out [transform-style:preserve-3d]"
          >
            <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-foreground rounded-2xl" />
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border shadow-lg bg-primary-soft">
              <img
                src="tenzin.jpg"
                alt="Tenzin Choeyang"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>
          </div>

          <div
            ref={cardTilt.ref}
            onMouseMove={cardTilt.onMouseMove}
            onMouseLeave={cardTilt.onMouseLeave}
            className="will-change-transform transition-transform duration-200 ease-out [transform-style:preserve-3d]"
          >
            <div className="rounded-xl border border-border bg-card shadow-xl overflow-hidden">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-3 font-mono text-xs text-muted-foreground">
                  whoami
                </span>
              </div>
              <div className="p-6 font-mono text-sm space-y-3">
                {fields.map((f) => (
                  <div key={f.label} className="flex items-baseline gap-3">
                    <span className="text-muted-foreground w-14 shrink-0">
                      {f.label}
                    </span>
                    <span
                      className={
                        f.highlight ? "text-primary" : "text-foreground/80"
                      }
                    >
                      {f.value}
                    </span>
                  </div>
                ))}
                <p className="text-muted-foreground pt-1">$ _</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;