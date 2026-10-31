/**
 * AI 工作流数据 —— 每个阶段：做了什么、用了哪些 AI 工具、产出什么。
 * 想改流程描述就在这里改。
 */
export type WorkflowStep = {
  step: string;
  name: string;
  en: string;
  description: string;
  aiTools: string[];
  output: string;
};

export const workflow: WorkflowStep[] = [
  {
    step: "01",
    name: "调研",
    en: "Research",
    description:
      "用 AI 加速用户研究：批量访谈摘要、竞品拆解、AI 能力边界测试。先搞清问题是什么，再动手。",
    aiTools: ["Claude", "Coze", "问卷 + AI 摘要"],
    output: "研究结论 · 竞品分析 · 机会点清单",
  },
  {
    step: "02",
    name: "定义",
    en: "Define",
    description:
      "把调研转成可执行的定义：用户画像、关键体验假设、AI 产品形态的取舍。",
    aiTools: ["Claude", "Notion AI"],
    output: "体验策略 · 功能优先级 · 验收标准",
  },
  {
    step: "03",
    name: "原型",
    en: "Prototype",
    description:
      "Figma 交互原型 + AI 生成视觉素材；用 Codex 快速把关键流程做成可点击的高保真 demo，验证手感。",
    aiTools: ["Figma", "AI 生图", "Codex"],
    output: "交互原型 · 可点击 Demo · 视觉规范",
  },
  {
    step: "04",
    name: "实现",
    en: "Implementation",
    description:
      "vibe coding 落地：Coze 编排智能体、Next.js 搭建前端，AI 写代码、我做设计与验收，迭代到可用。",
    aiTools: ["Coze", "Codex", "Next.js"],
    output: "可运行产品 · 上线版本",
  },
  {
    step: "05",
    name: "验证",
    en: "Validation",
    description:
      "真实用户测试 + 数据反馈，把结论回流到下一轮迭代。AI 让这个循环从月级变成天级。",
    aiTools: ["分析工具", "用户访谈"],
    output: "测试结论 · 迭代计划",
  },
];
