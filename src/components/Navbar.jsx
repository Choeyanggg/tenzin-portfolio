import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

const RESUME_URL =
  "https://drive.google.com/file/d/14kmf7_4e5jCY-oVRV3rq-tlJT4dxXTNW/view?usp=sharing";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : ""
      }`}
    >
      <div className="container-page flex items-center justify-between h-16">
        <a
          href="#hero"
          className="font-display font-semibold text-base tracking-tight transition-transform duration-200 hover:scale-105 inline-block"
          data-cursor-hover
        >
          Tenzin<span className="text-primary">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              data-cursor-hover
              className="relative font-mono text-xs tracking-wide text-muted-foreground hover:text-foreground transition-colors group"
            >
              <span className="inline-block transition-transform duration-200 group-hover:scale-110">
                {item.name}
              </span>
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="px-4 py-1.5 rounded-md border border-foreground/20 font-mono text-xs transition-all duration-200 hover:border-primary hover:text-primary hover:scale-105"
          >
            Resume
          </a>
        </div>

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 z-50"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div
          className={`fixed inset-0 bg-background z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden ${
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="font-mono text-lg"
            >
              {item.name}
            </a>
          ))}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="px-5 py-2 rounded-md border border-foreground/20 font-mono text-lg"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;