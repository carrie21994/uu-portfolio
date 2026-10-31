import { playground } from "@/content/projects";
import Reveal from "./Reveal";

export default function Playground() {
  return (
    <section id="playground" className="mx-auto w-full max-w-6xl px-5 py-28">
      <Reveal>
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-teal">
          04 · Playground
        </p>
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          实验区 — 可点击的 AI 原型
        </h2>
        <p className="mt-4 max-w-2xl text-base text-muted">
          正在生长的想法。点开就能玩，是判断一个设计手感最快的方式。
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
        {playground.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.08}>
            <a
              href={p.link || "#"}
              className="card-lift flex h-full flex-col rounded-2xl border border-dashed border-accent/40 bg-accent/[0.06] p-6"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-teal">
                  ⚡ Lab
                </span>
                <span className="rounded-full bg-teal/15 px-2.5 py-1 font-mono text-[10px] text-teal">
                  可交互
                </span>
              </div>
              <div className="mt-6 font-display text-lg font-semibold">{p.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.description}</p>
              <div className="mt-auto pt-6 font-mono text-xs text-teal">try it →</div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
