import { Community } from "@/components/Community";
import { ContentMatrix } from "@/components/ContentMatrix";
import { Hero } from "@/components/Hero";
import { LatestVideos } from "@/components/LatestVideos";
import { Milestones } from "@/components/Milestones";
import { TimeNote } from "@/components/TimeNote";
import { Footer, Header } from "@/components/Shell";
import { getBilibiliVideos } from "@/lib/aggregators";
export default async function Home() {
  const videos = await getBilibiliVideos();
  return <><Header /><main id="main-content"><Hero /><ContentMatrix /><LatestVideos videos={videos} /><Milestones /><TimeNote /><Community /></main><Footer /></>;
}
