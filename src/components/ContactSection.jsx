import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const links = [
  { label: "Email", value: "tchoeyang2005@gmail.com", href: "mailto:tchoeyang2005@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/tenzinchoeyang", href: "https://linkedin.com/in/tenzinchoeyang" },
  { label: "GitHub", value: "github.com/Choeyanggg", href: "https://github.com/Choeyanggg" },
  { label: "Phone", value: "+91 75597 65233", href: "tel:+917559765233" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 hairline">
      <div className="container-page">
        <Reveal>
          <p className="prompt-label mb-3">contact --send</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight mb-4 max-w-xl">
            Let's build something.
          </h2>
          <p className="text-muted-foreground max-w-md mb-14">
            Open to internships and collaborations in AI/ML engineering and
            data. Feel free to reach out.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2 mb-20">
          {links.map((link, i) => (
            <Reveal key={link.label} delay={i * 70}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                data-cursor-hover
                className="group flex items-center justify-between py-4 border-b border-border hover:text-primary hover:pl-2 transition-all duration-300"
              >
                <span>
                  <span className="font-mono text-xs text-muted-foreground block mb-1">
                    {link.label}
                  </span>
                  <span className="inline-block origin-left transition-transform duration-200 group-hover:scale-105">
                    {link.value}
                  </span>
                </span>
                <ArrowUpRight
                  size={16}
                  className="opacity-40 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                />
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="text-center text-sm text-muted-foreground font-mono">
          © 2026 Tenzin Choeyang
        </Reveal>
      </div>
    </section>
  );
};

export default ContactSection;