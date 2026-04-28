import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Workflow, Database, BrainCircuit, Zap } from "lucide-react";

const values = [
  {
    icon: Workflow,
    title: "Scalable Data Pipelines",
    desc: "Designing end-to-end ETL workflows that process millions of records reliably across distributed systems.",
  },
  {
    icon: Database,
    title: "Raw → Business-Ready Data",
    desc: "Transforming messy, multi-source datasets into clean, structured assets that power decisions.",
  },
  {
    icon: BrainCircuit,
    title: "Analytics + AI Integration",
    desc: "Bridging data engineering with machine learning and retrieval-augmented generation for intelligent systems.",
  },
  {
    icon: Zap,
    title: "Automation-First Approach",
    desc: "Eliminating manual reporting and repetitive tasks — building systems that run themselves.",
  },
];

export default function ValueSection() {
  const ref = useScrollReveal();

  return (
    <section className="py-16 md:py-24">
      <div ref={ref} className="section-fade-in container mx-auto px-6 max-w-5xl">
        <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">What I Bring</p>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-balance">
          Engineering data systems that <span className="glow-text">deliver results</span>
        </h2>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="glass-card p-6 transition-all duration-300 hover:-translate-y-1 group"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="rounded-lg bg-primary/10 p-3 w-fit mb-4 group-hover:bg-primary/20 transition-colors duration-200">
                <v.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-semibold text-sm mb-2">{v.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
