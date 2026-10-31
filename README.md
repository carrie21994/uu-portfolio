# UU · AI 产品体验设计师 — 个人作品集

用 Next.js + Tailwind CSS + Framer Motion 搭建的单页作品集网站。
深色沉浸风格 + Bento 网格 + 动效叙事，2026 年 AI 设计师作品集方向。

---

## 一、在本地预览网站

打开「终端」（Terminal），输入：

```bash
cd /Users/carrie/Doubao/chats/2026-10-31/new-chat-1/uu-portfolio
npm run dev
```

然后打开浏览器，访问：**http://localhost:3000**

看到网站就说明成功了。按 `Ctrl + C` 可以停止预览。

---

## 二、怎么修改网站内容（不用碰代码）

网站内容全部集中在 3 个"内容文件"里，用任何文本编辑器（或用 AI 对话）改完保存即可，页面自动更新。

| 文件 | 管什么 |
| --- | --- |
| `content/site.ts` | 你的名字、定位、介绍、联系方式、技能 |
| `content/projects.ts` | 作品卡片：标题、描述、标签、图片/视频 |
| `content/workflow.ts` | AI 工作流板块：每个阶段的说明 |

**放图片/视频**：把文件拖进 `public/media/` 文件夹，然后在 `projects.ts` 对应作品的 `media.src` 里填 `/media/你的文件名.png`。

**想加一个新作品**：在 `content/projects.ts` 的数组里复制一个已有项目，改掉标题和描述即可。

> 提示：你也可以直接把这些需求用自然语言告诉豆包/Codex，让 AI 帮你改。

---

## 三、发布上线（让别人也能访问）

1. 注册 [GitHub](https://github.com) 和 [Vercel](https://vercel.com)（免费）
2. 把项目推到 GitHub：
   ```bash
   git add .
   git commit -m "first version"
   git remote add origin <你的仓库地址>
   git push -u origin main
   ```
3. 在 Vercel 点 "Add New Project" → Import 这个仓库 → Deploy
4. 完成后你会得到一个 `https://xxx.vercel.app` 链接，以后每次改内容 push 上去，网站自动更新

---

## 四、项目结构速览

```
uu-portfolio/
├── app/
│   ├── layout.tsx      # 全局设置（标题、字体、SEO）
│   ├── page.tsx        # 首页：把各板块组装起来
│   └── globals.css     # 设计语言（深色主题、渐变、动画）
├── content/            # ★ 你的内容都在这里（改这里）
│   ├── site.ts
│   ├── projects.ts
│   └── workflow.ts
├── components/         # 页面组件（Nav/Hero/Work/...）
└── public/media/       # ★ 图片、视频放这里
```

---

## 五、待办（上线前建议补）

- [ ] 替换 `content/site.ts` 里的邮箱和社交链接
- [ ] 给每个作品加上图片/视频（`public/media/`）
- [ ] 给「陪你想想」做一个详情页（`app/work/` 目录）
- [ ] 文章板块替换成你的真实文章/小红书链接
