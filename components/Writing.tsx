import Reveal from "./Reveal";

const posts = [
  {
    date: "2026.10",
    title: "面试 AI 产品岗失败后，我重新理解了 AI 产品体验设计师",
    time: "6 min",
  },
  {
    date: "2026.10",
    title: "我用 Codex 从零搭了这个作品集：完整 AI 协作复盘",
    time: "8 min",
  },
  {
    date: "2026.09",
    title: "给 3D 潮玩 IP 一个可对话的人格：想想龙设计手记",
    time: "5 min",
  },
];

export default function Writing() {
  return (
    <section id="writing" className="mx-auto w-full max-w-6xl px-5 py-28">
      <Reveal>
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-teal">
          05 · Writing
        </p>
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          思考与记录
        </h2>
      </Reveal>

      <div className="mt-10 divide-y divide-line border-y border-line">
        {posts.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.06}>
            <a
              href="#"
              className="group flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
                <span className="font-mono text-xs text-muted">{p.date}</span>
                <span className="text-base font-medium transition-colors group-hover:text-teal">
                  {p.title}
                </span>
              </div>
              <span className="font-mono text-xs text-muted">{p.time} read →</span>
            </a>
          </Reveal>
        ))}
      </div>

      <p className="mt-6 font-mono text-xs text-muted">
        更多内容见小红书 @AI产品设计师UU · 文章链接为占位，替换为你的实际文章
      </p>
    </section>
  );
}
