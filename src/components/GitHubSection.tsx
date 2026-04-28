import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Github, Star, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const repos = [
  {
    name: "VoiceScaffold-AI",
    desc: "Voice Scaffold is a local full-stack app that converts architecture intent (voice or text) into a validated infrastructure AST, generates scaffolded project files, and can run generated stacks with Docker Compose.",
    lang: "Python",
    stars: 4,
    topics: ["ai", "voice Ai", "infrastructure as code"],
  },
  {
    name: "paris-smartcity-datamanagement",
    desc: "Real-time IoT data ingestion and analysis for Paris bike stations",
    lang: "Python",
    stars: 3,
    topics: ["iot", "duckdb", "docker"],
  },
  {
    name: "rag-chatbot-builder",
    desc: "Document Q&A chatbot using LangChain and RAG",
    lang: "Python",
    stars: 7,
    topics: ["langchain", "rag", "fastapi"],
  },
  {
    name: "azure-cloud-pipeline",
    desc: "Azure Data Factory & Databricks batch processing pipeline",
    lang: "Python",
    stars: 2,
    topics: ["azure", "data-factory"],
  },
  {
    name: "spark-data-utils",
    desc: "Reusable PySpark utility functions for data transformation",
    lang: "Python",
    stars: 5,
    topics: ["pyspark", "utilities"],
  },
  {
    name: "VoiceScaffold-AI",
    desc: "Voice Scaffold is a local full-stack app that converts architecture intent (voice or text) into a validated infrastructure AST, generates scaffolded project files, and can run generated stacks with Docker Compose.",
    lang: "Python",
    stars: 3,
    topics: ["sql", "analytics"],
  },
];

export default function GitHubSection() {
  const ref = useScrollReveal();

  return (
    <section className="py-24 md:py-32">
      <div ref={ref} className="section-fade-in container mx-auto px-6 max-w-5xl">
        <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">Open Source</p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
          GitHub <span className="glow-text">Repos</span>
        </h2>
        <p className="mt-3 text-muted-foreground text-sm max-w-lg">
          Selected repositories that reflect my work in data engineering, analytics, and AI systems.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {repos.map((r) => (
            <a
              key={r.name}
              href={`https://github.com/Sai-kishan-K/${r.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-5 transition-all duration-300 hover:-translate-y-1 group block"
            >
              <div className="flex items-center gap-2 mb-2">
                <Code2 size={14} className="text-primary" />
                <h3 className="text-sm font-semibold font-mono group-hover:text-primary transition-colors truncate">{r.name}</h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">{r.desc}</p>

              <div className="flex flex-wrap gap-1 mb-3">
                {r.topics.map((t) => (
                  <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-secondary/80 text-muted-foreground border border-border/50">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 inline-block" />
                  {r.lang}
                </span>
                <span className="flex items-center gap-1">
                  <Star size={12} />
                  {r.stars}
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github size={18} />
              View Full GitHub Profile
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
