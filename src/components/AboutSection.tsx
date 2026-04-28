import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Briefcase, MapPin, Rocket } from "lucide-react";

export default function AboutSection() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-24 md:py-32">
      <div ref={ref} className="section-fade-in container mx-auto px-6 max-w-4xl">
        <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">About</p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
          About <span className="glow-text">Me</span>
        </h2>

        <p className="mt-6 text-muted-foreground leading-relaxed max-w-2xl text-pretty">
          Data Engineer with 2+ years of hands-on experience designing automated data pipelines, 
          processing large-scale datasets, and delivering business-critical insights. I've worked 
          across <span className="text-foreground font-medium">Cognizant</span> and{" "}
          <span className="text-foreground font-medium">Marsh McLennan</span>, building systems 
          that reduced manual effort by up to 60% and improved data reliability across teams.
          Currently pursuing a Master's in Data Engineering at Aivancity in Paris.
        </p>

        <div className="mt-10 grid sm:grid-cols-3 gap-4">
          {[
            { icon: Briefcase, label: "2+ years in industry", sub: "Data Engineering & Analytics" },
            { icon: MapPin, label: "Paris, France", sub: "Open to roles across Europe" },
            { icon: Rocket, label: "Full-stack data", sub: "Pipelines · Cloud · AI" },
          ].map((item) => (
            <div key={item.label} className="glass-card gradient-border p-5 flex items-start gap-4 transition-all duration-300 hover:-translate-y-1">
              <div className="mt-0.5 rounded-lg bg-primary/10 p-2.5">
                <item.icon size={18} className="text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm">{item.label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
