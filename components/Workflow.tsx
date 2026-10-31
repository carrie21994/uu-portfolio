import { workflow } from "@/content/workflow";
import Reveal from "./Reveal";

export default function Workflow() {
  return (
    <section id="workflow" className="mx-auto w-full max-w-6xl px-5 py-28">
      <Reveal>
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-teal">
          03 · AI Workflow
        </p>
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          从调研到实现的 AI 协作方法
        </h2>
        <p className="mt-4 max-w-2xl text-base text-muted">
          每个项目我都会走完这条流水线。AI 不是点缀，而是每个环节的协作者。
        </p>
      </Reveal>

      <ol className="mt-12">
        {workflow.map((w, i) => (
          <Reveal key={w.step} delay={i * 0.05}>
            <li className="flex flex-col gap-4 border-l border-line py-8 pl-8 sm:flex-row sm:gap-8">
              <div className="sm:w-48 sm:shrink-0">
                <div className="font-mono text-sm text-teal">{w.step}</div>
                <div className="mt-1 font-display text-2xl font-semibold tracking-tight">
                  {w.name}
                </div>
                <div className="font-mono text-xs uppercase tracking-widest text-muted">
                  {w.en}
                </div>
              </div>
              <div className="flex-1">
                <p className="text-sm leading-relaxed text-muted">{w.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {w.aiTools.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 font-mono text-[11px] text-teal"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-3 font-mono text-xs text-muted">→ {w.output}</div>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
