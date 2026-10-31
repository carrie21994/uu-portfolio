import { site } from "@/content/site";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-5 py-28">
      <Reveal>
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-teal">
          01 · About
        </p>
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          设计师 × AI 协作的实践者
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">{site.intro}</p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
        {site.skills.map((s, i) => (
          <Reveal key={s.group} delay={i * 0.08}>
            <div className="h-full rounded-2xl border border-line bg-white/[0.02] p-6">
              <div className="font-mono text-xs uppercase tracking-widest text-muted">
                {s.group}
              </div>
              <ul className="mt-4 space-y-2 text-sm text-foreground/90">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-teal" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {site.stats.map((s) => (
            <div key={s.label} className="flex flex-col items-start">
              <div className="text-gradient font-display text-4xl font-semibold">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-muted">{s.label}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
