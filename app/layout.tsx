import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UU — AI Product Experience Designer",
  description:
    "UU 的个人作品集：AI 产品体验设计师，专注 AI 原生产品的体验设计、交互原型与落地实现。",
  openGraph: {
    title: "UU — AI Product Experience Designer",
    description:
      "用设计让 AI 产品真正可用。6 年 UI/UX 背景，专注 AI 原生产品的体验设计、交互原型与落地实现。",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
