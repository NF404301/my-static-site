import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://000919.xyz"),
  title: {
    default: site.name,
    template: `%s | ${site.shortName}`
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.shortName, url: "https://000919.xyz" }],
  creator: site.shortName,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: site.name,
    description: site.description,
    url: "https://000919.xyz",
    siteName: site.name,
    locale: "zh_CN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#eef3f8"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
