import type { Metadata } from "next";
import { ZonePage } from "@/components/ZonePage";
import { tutorialCards } from "@/data/tutorials";

export const metadata: Metadata = {
  title: "教程下载",
  description: "客户教程、文档资料、天翼云盘资源与 Follow 订阅入口。"
};

export default function TutorialsPage() {
  return (
    <ZonePage
      eyebrow="Tutorial Downloads"
      title="教程下载专区"
      description="这里集中放置客户常用教程、文档资料和资源订阅入口，方便按需打开、下载和转发。"
      cards={tutorialCards}
    />
  );
}
