import { site } from "@/content/site";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-line">
      <div
        className="blob left-1/2 top-[-40%] h-[400px] w-[400px] -translate-x-1/2 bg-accent/40"
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-6xl px-5 py-28 text-center">
        <Reveal>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-teal">
            06 · Contact
          </p>
          <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            让我们一起 <span className="text-gradient">把 AI 产品做得更好</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted">{site.status}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${site.email}`}
              className="rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
            >
              发邮件给我
            </a>
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-line px-6 py-3.5 text-sm text-foreground transition-colors hover:border-accent/50 hover:text-teal"
              >
                {s.label} · {s.handle}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
