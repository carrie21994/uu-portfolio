/**
 * 作品数据 —— 想增删改作品，就在这里操作。
 *
 * 每张卡片可配媒体：media.src 填图片/视频地址（放在 public/media/ 下，
 * 路径写 "/media/xxx.png"），不填则显示占位视觉。
 * media.type: "image" | "video" | "figma"
 * type: "featured"（大卡旗舰项目）| "card"（常规卡）| "lab"（实验卡）
 */
export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  year: string;
  role: string;
  type: "featured" | "card" | "lab";
  media?: { type: "image" | "video" | "figma"; src: string; poster?: string };
  link?: string;
};

export const projects: Project[] = [
  {
    id: "peini-xiangxiang",
    title: "陪你想想",
    subtitle: "AI 学习助手 · Coze 智能体",
    description:
      "面向小学教辅场景的 AI 学习智能体：陪伴式引导而非直接给答案，把学习过程变成可对话的探索。完整展示了我从调研、原型到智能体实现的 AI 协作过程。",
    tags: ["AI", "Agents", "Coze", "教育", "Prompt Design"],
    year: "2026",
    role: "产品 · 设计 · 提示词工程",
    type: "featured",
    media: { type: "image", src: "" }, // ← 放主图：/media/peini.png
    link: "/work/peini-xiangxiang", // 详情页占位链接
  },
  {
    id: "xiangxiang-long",
    title: "想想龙",
    subtitle: "3D 潮玩 IP 设计",
    description:
      "为「陪你想想」设计的 3D 潮玩 IP：软乎乎的毛绒质感、无尖锐棱角，从 IP 人设、形象规范到矢量可编辑产出。",
    tags: ["3D IP", "角色设计", "AI 生图"],
    year: "2026",
    role: "IP 设计 · 视觉规范",
    type: "featured",
    media: { type: "image", src: "" }, // ← 放主图：/media/dragon.png
  },
  {
    id: "xiaolongxia",
    title: "小龙虾",
    subtitle: "AI 运营助手 · Coze 智能体",
    description:
      "面向自媒体运营场景的 AI 助手：把选题、文案、发布流程压缩成一条可对话的工作流，验证 AI 原生运营工具的产品形态。",
    tags: ["AI", "Agents", "Coze", "运营"],
    year: "2026",
    role: "产品 · 设计 · 实现",
    type: "card",
    media: { type: "image", src: "" }, // ← 放主图：/media/lobster.png
  },
  {
    id: "fintech-jindangjia",
    title: "金当家 · 金融 App",
    subtitle: "金融产品体验设计",
    description: "6 年 UI/UX 阶段的代表项目之一：金融产品从 0 到 1 的体验设计与设计系统搭建。",
    tags: ["金融", "UI/UX", "设计系统"],
    year: "2020",
    role: "UI/UX 设计师",
    type: "card",
    media: { type: "image", src: "" }, // ← 放主图：/media/jindangjia.png
  },
  {
    id: "edu-yiqidian",
    title: "亿起点 · 教育产品",
    subtitle: "教育产品体验设计",
    description: "面向教育场景的产品体验设计，用户研究与交互原型。",
    tags: ["教育", "UI/UX", "用户研究"],
    year: "2021",
    role: "UI/UX 设计师",
    type: "card",
    media: { type: "image", src: "" },
  },
  {
    id: "office-mimi",
    title: "MiMi · 办公产品",
    subtitle: "办公产品体验设计",
    description: "办公协作场景的产品体验设计与组件化设计系统。",
    tags: ["办公", "UI/UX"],
    year: "2022",
    role: "UI/UX 设计师",
    type: "card",
    media: { type: "image", src: "" },
  },
];

/** 实验区（Playground）—— 可点击的 AI 原型与玩具 */
export const playground: Project[] = [
  {
    id: "pg-peini",
    title: "陪你想想 · 对话 Demo",
    subtitle: "点开就能和 AI 学习助手对话",
    description: "可交互原型，展示陪伴式引导的学习对话体验。",
    tags: ["Demo", "可交互"],
    year: "2026",
    role: "设计 · 实现",
    type: "lab",
    link: "#", // ← 放你的 Demo 链接
  },
  {
    id: "pg-dragon",
    title: "想想龙 · 3D 展示",
    subtitle: "转动视角看 IP 形象",
    description: "3D 潮玩 IP 的展示交互原型。",
    tags: ["3D", "可交互"],
    year: "2026",
    role: "IP · 原型",
    type: "lab",
    link: "#", // ← 放你的 3D 展示链接
  },
  {
    id: "pg-lobster",
    title: "小龙虾 · 运营助手 Demo",
    subtitle: "体验 AI 运营工作流",
    description: "运营助手对话 Demo，展示选题到发布的工作流。",
    tags: ["Demo", "可交互"],
    year: "2026",
    role: "产品 · 实现",
    type: "lab",
    link: "#", // ← 放你的 Demo 链接
  },
];
