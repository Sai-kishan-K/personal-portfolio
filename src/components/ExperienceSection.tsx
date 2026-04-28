import { useScrollReveal } from "@/hooks/useScrollReveal";

const experiences = [
  {
    role: "Senior Analyst – Data Analytics & Insights",
    company: "Marsh McLennan",
    period: "Sept 2024 - Oct 2025",
    highlights: [
      "Built and automated aviation data pipelines in Databricks using Python and PySpark, reducing manual processing time by 60 %",
      "Delivered actionable business insights from complex insurance datasets",
      "Built Power BI dashboards used by executive stakeholders across regions",
    ],
  },
  {
    role: "Junior Data Analyst",
    company: "Cognizant",
    period: "Dec 2022 - May 2024",
    highlights: [
      "Developed ETL scripts for large-scale data extraction and transformation",
      "Supported analytics team with SQL-based reporting and data validation",
      "Automated recurring data quality checks, cutting errors by 40%",
    ],
  },
  {
    role: "Programme Analyst Trainee – Intern",
    company: "Cognizant",
    period: "Feb 2022 – July 2022",
    highlights: [
      "Supported data preparation, reporting, and validation tasks for business teams",
      "Assisted in SQL-based analysis and Excel reporting workflows",
      "Built foundational skills in structured problem solving and data operations",
    ],
  },
];

export default function ExperienceSection() {
  const ref = useScrollReveal();

  return (
    <section id="experience" className="py-24 md:py-32">
      <div ref={ref} className="section-fade-in container mx-auto px-6 max-w-4xl">
        <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">Career</p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
          Work <span className="glow-text">Experience</span>
        </h2>

        <div className="mt-10 relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div
                key={`${exp.company}-${exp.role}`}
                className="relative pl-12 md:pl-16"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 md:left-4.5 top-7 w-3 h-3 rounded-full bg-primary border-2 border-background shadow-lg shadow-primary/30" />

                <div className="glass-card gradient-border p-6 md:p-8 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-4">
                    <div>
                      <h3 className="font-semibold text-base">{exp.role}</h3>
                      <p className="text-primary text-sm font-medium">{exp.company}</p>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full w-fit">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((h) => (
                      <li key={h} className="text-sm text-muted-foreground flex gap-2.5 items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
