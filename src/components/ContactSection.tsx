import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ContactSection() {
  const ref = useScrollReveal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSent(false);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mykklljk", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Message submission failed.");
      }

      form.reset();
      setSent(true);
    } catch {
      setError("Unable to send your message right now. Please try again in a moment.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div ref={ref} className="section-fade-in container mx-auto px-6 max-w-4xl">
        <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">Let's Connect</p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
          Get in <span className="glow-text">Touch</span>
        </h2>
        <p className="mt-3 text-muted-foreground text-sm max-w-md">
          Open to Data Engineering and Analytics roles across Europe. Let's talk about how I can contribute to your team.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          {/* Links */}
          <div className="space-y-4">
            {[
              { icon: Mail, label: "saik77556@gmail.com", href: "mailto:saik77556@gmail.com" },
              { icon: Linkedin, label: "linkedin.com/in/saikishan", href: "https://www.linkedin.com/in/sai-kishan-385713173" },
              { icon: Github, label: "github.com/saikishan", href: "https://github.com/Sai-kishan-K" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 flex items-center gap-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 group"
              >
                <div className="rounded-lg bg-primary/10 p-2.5 group-hover:bg-primary/20 transition-colors">
                  <item.icon size={18} className="text-primary" />
                </div>
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {item.label}
                </span>
              </a>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="glass-card gradient-border p-6 space-y-4">
            <input
              name="name"
              type="text"
              placeholder="Your name"
              required
              maxLength={100}
              className="w-full bg-secondary/50 border border-border/50 rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
            />
            <input
              name="email"
              type="email"
              placeholder="Your email"
              required
              maxLength={255}
              className="w-full bg-secondary/50 border border-border/50 rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
            />
            <textarea
              name="message"
              placeholder="Your message"
              required
              maxLength={1000}
              rows={4}
              className="w-full bg-secondary/50 border border-border/50 rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all resize-none"
            />
            <input type="hidden" name="_subject" value="New portfolio contact submission" />
            <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : sent ? "Message Sent ✓" : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </Button>
            {sent && (
              <p className="text-sm text-primary">Your message was sent successfully.</p>
            )}
            {error && (
              <p className="text-sm text-destructive">{error}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
