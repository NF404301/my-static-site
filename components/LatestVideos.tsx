import { ArrowUpRight, Play, Video } from "lucide-react";
import type { VideoItem } from "@/lib/aggregators";
import { site } from "@/data/site";
import { SectionHeader } from "@/components/SectionHeader";
export function LatestVideos({ videos }: { videos: VideoItem[] }) {
  return <section id="updates" className="site-container videos-section" aria-labelledby="videos-title">
    <div className="section-topline"><SectionHeader eyebrow="02 / SELECTED WORK" title="一些值得分享的实践" description="把实用的方法讲清楚，把有趣的发现分享给你。" id="videos-title" /><a href={site.bilibiliSpace} target="_blank" rel="noopener noreferrer" className="text-link">全部视频 <ArrowUpRight aria-hidden="true" /></a></div>
    <div className="video-grid">{videos.slice(0, 3).map((video, index) => <a key={video.href} href={video.href} target="_blank" rel="noopener noreferrer" className="video-link">
      <div className="video-meta"><span className="video-tag"><Video />{video.tag}</span><span>0{index + 1}</span></div>
      <h3>{video.title}</h3>
      <p className="video-description">{video.description}</p>
      <div className="video-bottom"><span>{video.views || video.publishedAt}</span><span className="video-watch">观看教程<span className="video-play" aria-hidden="true"><Play /></span></span></div>
    </a>)}</div>
  </section>;
}
