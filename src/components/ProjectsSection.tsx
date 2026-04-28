import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ExternalLink, Github, Image as ImageIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import aviationImg from "@/assets/project-aviation-pipeline.jpg";
import parisImg from "@/assets/project-paris-iot.jpg";
import ragImg from "@/assets/project-rag-chatbot.jpg";
import azureImg from "@/assets/project-azure-cloud.jpg";

const projects = [
  {
    title: "Youtube Music Data Pipeline",
    label: "ETL Pipeline",
    desc: "Automated ETL pipeline processing messy Excel aviation data across multiple regions using Medallion Architecture (Bronze → Silver → Gold). Final data stored as Delta Tables in Databricks.",
    context: "Airlines needed a reliable way to consolidate fragmented regional data spread across dozens of inconsistent Excel files.",
    highlights: [
      "60% reduction in manual data processing time",
      "Medallion Architecture for data quality control",
      "Automated schema validation across regions",
    ],
    stack: ["Python", "PySpark", "Databricks", "Delta Lake"],
    github: "https://github.com/Sai-kishan-K/youtube_music-DE-pipeline",
    demo: "https://github.com/Sai-kishan-K/youtube_music-DE-pipeline/blob/main/docs/Youtube_ar_Diagram.jpg",
    image: aviationImg,
    imageLabel: "Pipeline Architecture",
  },
  {
    title: "Paris Smart City IoT Pipeline",
    label: "Real-Time Data",
    desc: "Real-time data ingestion from Paris IoT bike station APIs. Transformation pipeline using DuckDB and Spark, delivering analytical insights on station availability and system health.",
    context: "Paris bike-sharing data needed real-time processing to track station health and availability patterns across 1,400+ stations.",
    highlights: [
      "Real-time ingestion from public IoT APIs",
      "Fully Dockerized and reproducible",
      "Analytical dashboards for station health monitoring",
    ],
    stack: ["Python", "DuckDB", "Spark", "Docker", "IoT APIs"],
    github: "https://github.com/Sai-kishan-K/paris-smartcity-datamanagement",
    demo: "https://github.com/Sai-kishan-K/paris-smartcity-datamanagement",
    image: parisImg,
    imageLabel: "System Architecture",
  },
  {
    title: "AI Chatbot Builder (RAG)",
    label: "RAG Application",
    desc: "Document-based Q&A chatbot using LangChain and Retrieval-Augmented Generation. Features FastAPI backend with vector database for semantic search and a Streamlit frontend.",
    context: "Organizations needed a way to query large document collections conversationally without manual search.",
    highlights: [
      "Semantic search across uploaded documents",
      "FastAPI backend with vector DB integration",
      "Interactive Streamlit frontend for Q&A",
    ],
    stack: ["LangChain", "FastAPI", "RAG", "Streamlit", "Vector DB"],
    github: "https://github.com/Sai-kishan-K/Chatbot_Assistant",
    demo: "https://github.com/Sai-kishan-K/Chatbot_Assistant/blob/main/Chatbot%20demo.png",
    image: ragImg,
    imageLabel: "System Flow",
  },
  {
    title: "Cloud Data Engineering – Azure",
    label: "Cloud Architecture",
    desc: "End-to-end cloud data pipeline using Azure Data Factory, Databricks, and Blob Storage for batch data processing and analytics at scale.",
    context: "Enterprise-grade batch processing pipeline for analytical workloads on Azure cloud infrastructure.",
    highlights: [
      "Azure-native architecture with managed services",
      "Scalable batch processing for large datasets",
      "Cost-optimized compute with auto-scaling clusters",
    ],
    stack: ["Azure", "Data Factory", "Databricks", "Blob Storage"],
    github: "https://github.com/Sai-kishan-K/fabric-retail-sales",
    demo: "https://github.com/Sai-kishan-K/fabric-retail-sales/blob/main/Architecture.png",
    image: azureImg,
    imageLabel: "Azure Architecture",
  },
];

export default function ProjectsSection() {
  const ref = useScrollReveal();
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24 md:py-32">
      <div ref={ref} className="section-fade-in container mx-auto px-6 max-w-5xl">
        <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">Portfolio</p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
          Featured <span className="glow-text">Projects</span>
        </h2>
        <p className="mt-3 text-muted-foreground text-sm max-w-lg">
          End-to-end data engineering solutions — from ingestion to insight, built for real-world impact.
        </p>

        <div className="mt-10 space-y-6">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="glass-card gradient-border p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 group"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full bg-primary/15 text-primary border border-primary/20">
                      {p.label}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-200">
                    {p.title}
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>

                  <p className="mt-2 text-xs text-muted-foreground/60 italic">{p.context}</p>

                  <div className="mt-4">
                    <p className="text-xs font-semibold text-foreground/80 mb-2">Key Highlights</p>
                    <ul className="space-y-1.5">
                      {p.highlights.map((h) => (
                        <li key={h} className="text-xs text-muted-foreground flex gap-2 items-start">
                          <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.stack.map((t) => (
                      <span key={t} className="tag-pill text-[11px]">{t}</span>
                    ))}
                  </div>

                  <div className="mt-5 flex gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <a href={p.github} target="_blank" rel="noopener noreferrer">
                        <Github size={14} />
                        Code
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={p.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={14} />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Architecture Image */}
                <div className="lg:w-72 flex-shrink-0">
                  <button
                    onClick={() => setLightbox(p.image)}
                    className="w-full rounded-lg overflow-hidden border border-glass-border/50 hover:border-primary/40 transition-all duration-300 group/img cursor-pointer"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={p.image}
                        alt={`${p.title} – ${p.imageLabel}`}
                        className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-background/40 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
                        <span className="flex items-center gap-1.5 text-xs font-medium text-foreground bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
                          <ImageIcon size={12} />
                          {p.imageLabel}
                        </span>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-xl p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-foreground/60 hover:text-foreground transition-colors"
          >
            <X size={24} />
          </button>
          <img
            src={lightbox}
            alt="Project architecture"
            className="max-w-full max-h-[85vh] rounded-xl border border-glass-border/50 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
