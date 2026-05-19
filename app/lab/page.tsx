import type { Metadata } from "next";
import { ZonePage } from "@/components/ZonePage";

export const metadata: Metadata = {
  title: "AI 实验室",
  description: "AI、VPS、自动化、部署和工具实验记录。"
};

export default function LabPage() {
  return (
    <ZonePage
      eyebrow="AI Lab"
      title="AI / VPS / 自动化实验室"
      description="这里用于沉淀 AI 工具、自动化脚本、VPS 部署、工作流和数字工具实验，后续可接入 MDX 或数据库。"
      cards={[
        {
          title: "AI 工具观察",
          description: "记录 AI 工具使用体验、提示词、Agent 工作流和内容生产方法。",
          href: "/lab",
          label: "AI"
        },
        {
          title: "VPS 与部署",
          description: "Vercel、服务器、自动化任务、反代和域名配置的长期记录。",
          href: "/lab",
          label: "Deploy"
        },
        {
          title: "自动化工具",
          description: "把重复操作变成脚本、工作流和可复用的小工具。",
          href: "/lab",
          label: "Automation"
        }
      ]}
    />
  );
}
