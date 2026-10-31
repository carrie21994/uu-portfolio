import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // 纯静态导出，可直接部署到 EdgeOne Pages 等静态托管
  cacheComponents: false, // 关闭 PPR 预渲染（静态导出模式下不兼容）
  partialPrefetching: false, // 关闭预取（静态导出站点无需此特性）
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
