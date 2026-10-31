import { site } from "@/content/site";

const heroTags = ["Coze", "Codex", "Figma", "Prompt Design", "3D IP", "vibe coding"];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden px-5"
    >
      {/* 背景：细网格 + 有机漂浮光斑（纯 CSS，性能友好） */}
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div
        className="blob left-[-10%] top-[-20%] h-[420px] w-[420px] bg-accent/50"
        aria-hidden="true"
      />
      <div
        className="blob right-[-8%] top-[10%] h-[380px] w-[380px] bg-teal/40"
        style={{ animationDelay: "-9s" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-6xl py-24">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-muted">
          AI Product Experience Designer — Portfolio 2026
        </p>
        <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
          Hi, I&apos;m <span className="text-gradient">UU</span>
          <br />
          <span className="text-4xl font-normal sm:text-6xl lg:text-7xl">
            让 AI 产品真正可用
          </span>
        </h1>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          {site.intro}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {heroTags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-line px-3 py-1.5 font-mono text-xs text-muted"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-5">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            看我的作品
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a href="#contact" className="text-sm font-medium text-teal hover:underline">
            和我聊聊
          </a>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-8">
        <p className="font-mono text-xs text-muted">scroll ↓</p>
      </div>
    </section>
  );
}
