import { useScrollReveal } from "@/hooks/useScrollReveal";
import { GraduationCap } from "lucide-react";

export default function EducationSection() {
  const ref = useScrollReveal();

  return (
    <section id="education" className="py-24 md:py-32">
      <div ref={ref} className="section-fade-in container mx-auto px-6 max-w-4xl">
        <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">Background</p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
          <span className="glow-text">Education</span>
        </h2>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {/* Master's Education */}
          <div className="glass-card gradient-border p-6 md:p-8 transition-all duration-300 hover:-translate-y-1">
            <div className="rounded-lg bg-primary/10 p-3 w-fit mb-5">
              <GraduationCap size={22} className="text-primary" />
            </div>
            <h3 className="font-semibold text-base mb-1">Master of Science – Data Engineering & Cloud Computing</h3>
            <p className="text-primary text-sm font-medium mb-3">Aivancity School of Technology & Business</p>
            <ul className="space-y-2">
              {[
                "Focus: Data Engineering, Cloud Computing, Scalable Systems",
                "Applied projects in Spark, Databricks, and AI pipelines",
                "Paris-based program combining tech and business acumen",
              ].map((item) => (
                <li key={item} className="text-xs text-muted-foreground flex gap-2 items-start">
                  <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Bachelor's Education */}
          <div className="glass-card gradient-border p-6 md:p-8 transition-all duration-300 hover:-translate-y-1">
            <div className="rounded-lg bg-primary/10 p-3 w-fit mb-5">
              <GraduationCap size={22} className="text-primary" />
            </div>
            <h3 className="font-semibold text-base mb-1">Bachelor of Engineering in Computer Science</h3>
            <p className="text-primary text-sm font-medium mb-3">Panimalar Engineering College</p>
            <ul className="space-y-2">
              {[
                "Strong foundation in computer science fundamentals and software systems",
                "Coursework spanning programming, databases, algorithms, and system design",
                "Built the technical base for later work in data engineering and analytics",
              ].map((item) => (
                <li key={item} className="text-xs text-muted-foreground flex gap-2 items-start">
                  <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/*
          <div className="glass-card gradient-border p-6 md:p-8 transition-all duration-300 hover:-translate-y-1">
            <div className="rounded-lg bg-primary/10 p-3 w-fit mb-5">
              <Award size={22} className="text-primary" />
            </div>
            <h3 className="font-semibold text-base mb-4">Certifications & Learning</h3>
            <div className="space-y-3">
              {[
                { name: "Azure Data Engineering", org: "Microsoft Learn" },
                { name: "Databricks & Apache Spark", org: "Databricks Academy" },
                { name: "SQL & Data Analytics Foundations", org: "Professional Development" },
                { name: "Python for Data Engineering", org: "Self-directed" },
              ].map((cert) => (
                <div key={cert.name} className="flex items-start gap-3 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground/90">{cert.name}</p>
                    <p className="text-xs text-muted-foreground">{cert.org}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          */}
        </div>
      </div>
    </section>
  );
}
