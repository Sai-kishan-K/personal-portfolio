import { useScrollReveal } from "@/hooks/useScrollReveal";

const categories = [
  {
    title: "Languages",
    skills: ["Python", "SQL"],
  },
  {
    title: "Data Engineering",
    skills: ["Apache Spark", "PySpark", "Airflow", "Kafka", "DBT"],
  },
  {
    title: "Cloud & Platforms",
    skills: ["Azure", "Databricks"],
  },
  {
    title: "Tools",
    skills: ["Docker", "Git", "Power BI", "Streamlit"],
  },
  {
    title: "AI / ML",
    skills: ["LangChain", "RAG", "Machine Learning", "LLMs", "NLP"],
  },
];

export default function SkillsSection() {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="py-24 md:py-32">
      <div ref={ref} className="section-fade-in container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
          Technical <span className="glow-text">Skills</span>
        </h2>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className="glass-card gradient-border p-6 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <h3 className="text-xs font-mono uppercase tracking-widest text-primary mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span key={s} className="tag-pill">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
