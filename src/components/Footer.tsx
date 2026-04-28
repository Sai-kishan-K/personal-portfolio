export default function Footer() {
  return (
    <footer className="border-t border-border/30 py-8">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Sai Kishan Kumar. Designed to turn experience into impact.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground transition-colors">Top ↑</a>
        </div>
      </div>
    </footer>
  );
}
