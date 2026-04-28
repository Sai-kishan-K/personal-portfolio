import { ArrowDown, Send, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import profilePhoto from "@/assets/IMG_5825.PNG";
import { scrollToSection } from "@/lib/utils";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const resumeHref = `${import.meta.env.BASE_URL}resume.pdf`;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: { x: number; y: number; vx: number; vy: number; r: number; o: number }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        o: Math.random() * 0.4 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 72, 254, ${p.o})`;
        ctx.fill();
      }
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(99, 72, 254, ${0.08 * (1 - dist / 120)})`;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/8 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-blue-500/6 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 container mx-auto px-6 max-w-5xl flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono tracking-wide">
            📍 Based in Paris, France
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-balance leading-[1.05]">
            <span className="text-foreground">Sai Kishan</span>{" "}
            <span className="glow-text">Kumar</span>
          </h1>

          <p className="mt-4 text-lg md:text-xl text-muted-foreground font-medium">
            Data Engineer · Analytics & AI Enthusiast
          </p>

          <p className="mt-4 text-sm md:text-base text-muted-foreground/70 max-w-xl leading-relaxed">
            Data Engineer building scalable pipelines, cloud workflows, and intelligent data products — turning raw data into reliable business outcomes.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <Button variant="hero" size="lg" onClick={() => scrollToSection("projects")}>
              <ArrowDown size={18} />
              View Projects
            </Button>
            <Button variant="heroOutline" size="lg" onClick={() => scrollToSection("contact")}>
              <Send size={18} />
              Contact Me
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href={resumeHref} download>
                <Download size={18} />
                Resume
              </a>
            </Button>
          </div>
        </div>

        {/* Profile Photo */}
        <div className="flex-shrink-0">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/60 via-primary/20 to-blue-500/40 blur-md group-hover:blur-lg transition-all duration-500 opacity-80 group-hover:opacity-100" />
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/10">
              <img
                src={profilePhoto}
                alt="Sai Kishan Kumar – Data Engineer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
