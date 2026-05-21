import type { Metadata } from "next";
import { ZonePage } from "@/components/ZonePage";

export const metadata: Metadata = {
  title: "Apple 专区",
  description: "iOS、TrollStore、TestFlight、Apple TV 与 Apple 资源入口。"
};

export default function ApplePage() {
  return (
    <ZonePage
      eyebrow="Apple Zone"
      title="Apple / iOS 折腾专区"
      description="这里承载 Apple 生态相关内容：TestFlight、Apple TV、iOS 工具、TrollStore、签名、快捷指令和资源站入口。"
      cards={[
        {
          title: "Apple Watch 配对",
          description: "123 网盘资料入口，适合保留为 Apple 专区核心卡片。",
          href: "https://www.123865.com/s/GCi5Vv-aRWHv?提取码:A4uP",
          label: "123 网盘"
        },
        {
          title: "AppleTV 应用合集",
          description: "Apple TV 应用与资源索引。",
          href: "https://github.com/bitxeno/awesome-appletv",
          label: "GitHub"
        },
        {
          title: "AppleTV 直播 TestFlight",
          description: "TestFlight 测试入口。",
          href: "https://testflight.apple.com/join/2oZuwSHJ",
          label: "TestFlight"
        },
        {
          title: "Switchr",
          description: "App Store 国家和地区切换工具，适合查询不同区服应用状态。",
          href: "http://switchr.imagility.io/",
          label: "推荐链接"
        },
        {
          title: "URL Scheme 大全",
          description: "iOS URL Scheme 查询资料，适合快捷指令和自动化折腾时参考。",
          href: "https://www.ydzms.com/archives/58/",
          label: "推荐链接"
        }
      ]}
    />
  );
}
