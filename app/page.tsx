import { Community } from "@/components/Community";
import { ContentMatrix } from "@/components/ContentMatrix";
import { Hero } from "@/components/Hero";
import { LatestVideos } from "@/components/LatestVideos";
import { Projects } from "@/components/Projects";
import { Footer, Header } from "@/components/Shell";
import { UpdatesAndLab } from "@/components/UpdatesAndLab";
import { getBilibiliVideos, getGithubRepos } from "@/lib/aggregators";

export default async function Home() {
  const [videos, repos] = await Promise.all([getBilibiliVideos(), getGithubRepos()]);

  return (
    <main>
      <Header />
      <Hero />
      <ContentMatrix />
      <LatestVideos videos={videos} />
      <UpdatesAndLab />
      <Community />
      <Projects repos={repos} />
      <Footer />
    </main>
  );
}
