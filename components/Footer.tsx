export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-5 sm:flex-row">
        <p className="font-mono text-xs text-muted">
          © 2026 UU · AI Product Experience Designer
        </p>
        <p className="font-mono text-xs text-muted">
          Built with Next.js + Framer Motion · vibe coding
        </p>
        <a href="#top" className="font-mono text-xs text-teal hover:underline">
          back to top ↑
        </a>
      </div>
    </footer>
  );
}
