const links = [
  { href: "#work", label: "Work" },
  { href: "#workflow", label: "AI Workflow" },
  { href: "#playground", label: "Playground" },
  { href: "#writing", label: "Writing" },
];

export default function Nav() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-line bg-background/70 backdrop-blur-md">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight">
          UU<span className="text-gradient">·</span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-medium text-teal transition-colors hover:bg-accent/20"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}
