import { projects } from "@/content/projects";
import type { Project } from "@/content/projects";
import Reveal from "./Reveal";

/** 卡片视觉区：有媒体显示媒体，没有则显示占位提示（替换指引） */
function ProjectVisual({ p }: { p: Project }) {
  if (p.media?.src) {
    if (p.media.type === "video") {
      return (
        <video className="h-full w-full object-cover" poster={p.media.poster} preload="none" controls>
          <source src={p.media.src} />
        </video>
      );
    }
    return <img src={p.media.src} alt={p.title} className="h-full w-full object-cover" loading="lazy" />;
  }
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-accent/20 via-transparent to-teal/20 p-6 text-center">
      <span className="text-gradient font-display text-4xl font-semibold">
        {p.type === "featured" ? "★" : "◆"}
      </span>
      <span className="font-mono text-xs text-muted">在此放你的图片 / 视频 / Figma</span>
      <span className="font-mono text-[10px] text-muted/70">public/media/{p.id}.png</span>
    </div>
  );
}

function ProjectCard({
  p,
  className = "",
  horizontal = false,
}: {
  p: Project;
  className?: string;
  horizontal?: boolean;
}) {
  return (
    <Reveal className={className}>
      <a
        href={p.link || "#"}
        className={`card-lift group flex h-full overflow-hidden rounded-2xl border border-line bg-white/[0.02] ${
          horizontal ? "flex-col md:flex-row" : "flex-col"
        } ${p.type === "featured" ? "min-h-[420px] md:min-h-[480px]" : "min-h-[380px] md:min-h-[340px]"}`}
      >
        <div className={`w-full shrink-0 overflow-hidden ${horizontal ? "md:w-2/5" : ""} aspect-[16/10]`}>
          <ProjectVisual p={p} />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-display text-xl font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-1 text-sm text-teal">{p.subtitle}</p>
            </div>
            <span className="font-mono text-xs text-muted">{p.year}</span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted">{p.description}</p>
          <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
            {p.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-muted"
              >
                {t}
              </span>
            ))}
            <span className="ml-auto font-mono text-xs text-teal opacity-0 transition-opacity group-hover:opacity-100">
              view case →
            </span>
          </div>
        </div>
      </a>
    </Reveal>
  );
}

export default function Work() {
  const featured = projects.filter((p) => p.type === "featured");
  const cards = projects.filter((p) => p.type === "card");
  return (
    <section id="work" className="mx-auto w-full max-w-6xl px-5 py-28">
      <Reveal>
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-teal">
          02 · Selected Work
        </p>
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          精选作品{" "}
          <span className="text-muted">— 不是静态图，是可点击的故事</span>
        </h2>
      </Reveal>

      {/* Bento Grid：大卡 + 中卡 + 全宽条，不对称布局制造视觉层级 */}
      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-12">
        {featured[0] && <ProjectCard p={featured[0]} className="md:col-span-7" />}
        {featured[1] && <ProjectCard p={featured[1]} className="md:col-span-5" />}
        {cards[0] && <ProjectCard p={cards[0]} className="md:col-span-4" />}
        {cards[1] && <ProjectCard p={cards[1]} className="md:col-span-4" />}
        {cards[2] && <ProjectCard p={cards[2]} className="md:col-span-4" />}
        {cards[3] && <ProjectCard p={cards[3]} className="md:col-span-12" horizontal />}
      </div>
    </section>
  );
}
