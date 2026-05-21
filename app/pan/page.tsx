import type { Metadata } from "next";
import { ZonePage } from "@/components/ZonePage";

export const metadata: Metadata = {
  title: "Alist 网盘",
  description: "资料、文档、工具包与资源沉淀入口。"
};

export default function PanPage() {
  return (
    <ZonePage
      eyebrow="Pan"
      title="Alist 与资料沉淀"
      description="资源站不再塞满主站，而是作为独立资源层存在。主站负责解释它是什么，网盘负责承载长期资料。"
      cards={[
        {
          title: "Alist 网盘",
          description: "个人 Alist 网盘入口。",
          href: "http://13.70.6.48:5244/",
          label: "Alist"
        },
        {
          title: "Blogspot Blog",
          description: "个人博客与长文归档入口。",
          href: "https://wongtq.blogspot.com/",
          label: "Blog"
        },
        {
          title: "天翼云盘资源编号 9527",
          description: "天翼云盘资源网页入口。",
          href: "https://bh9527.pages.dev/",
          label: "Resource"
        },
        {
          title: "Follow 软件订阅",
          description: "资源订阅列表入口。",
          href: "https://app.follow.is/share/lists/71853151480300544",
          label: "Follow"
        }
      ]}
    />
  );
}
