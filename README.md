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

## 三、正式访问地址（已上线 ✅）

**https://thisisuu.com** —— 你的正式域名，手机/电脑都能打开，已配置 HTTPS 证书。

- 域名：thisisuu.com（腾讯云购买，88 元/年，实名已通过）
- 托管：腾讯云 EdgeOne（加速区域：全球可用区不含中国大陆）
- 项目 ID：makers-titxilepnazk ｜ 部署 ID：dpzk2kbw9y2w
- 代码备份：GitHub 仓库 https://github.com/carrie21994/uu-portfolio

> ⚠️ 目前网站走"不含中国大陆"的海外加速节点，国内打开可用但速度一般。后续建议补做 ICP 备案（需购买可备案云资源），备案后可切到含大陆节点，国内访问更快更稳。

---

## 四、改完内容后怎么重新上线（每次更新必看）

1. 改内容（见上文第二部分）后，在项目目录打开终端：
   ```bash
   npm run build
   ```
2. 打包产物（产物在 `out/` 文件夹，整体压缩成一个 zip）：
   ```bash
   cd out && zip -r ../uu-portfolio-static.zip . && cd ..
   ```
3. 打开腾讯云 EdgeOne 控制台 → 项目「uu-portfolio」→「构建部署」→ 上传 `uu-portfolio-static.zip` 部署即可（或让豆包帮你完成）。

GitHub 仓库仅作代码备份；网页版 GitHub 直接编辑含中文文件不可靠，改内容建议在本地或让 AI 改。

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

## 五、待办

- [x] 替换 `content/site.ts` 里的邮箱（929558004@qq.com）和社交链接（小红书 UU｜AI产品设计师）
- [ ] 给每个作品加上图片/视频（`public/media/`，现为占位图）
- [ ] 给「陪你想想」做一个详情页（`app/work/` 目录）
- [ ] 文章板块替换成你的真实文章/小红书链接
- [ ] 后续补做 ICP 备案（需购买 CVM/轻量服务器等可备案云资源），备案后把 EdgeOne 加速区域切到含中国大陆
