import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

const links = [
  { label: "About", sectionId: "about" },
  { label: "Skills", sectionId: "skills" },
  { label: "Projects", sectionId: "projects" },
  { label: "Experience", sectionId: "experience" },
  { label: "Education", sectionId: "education" },
  { label: "Contact", sectionId: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-lg font-bold glow-text tracking-tight"
        >
          SK
        </button>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.sectionId}
              type="button"
              onClick={() => scrollToSection(l.sectionId)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {l.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/50 px-6 pb-6 pt-2 space-y-4">
          {links.map((l) => (
            <button
              key={l.sectionId}
              type="button"
              onClick={() => {
                scrollToSection(l.sectionId);
                setOpen(false);
              }}
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
