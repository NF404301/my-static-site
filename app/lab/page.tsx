import type { Metadata } from "next";
import { ZonePage } from "@/components/ZonePage";
import { Projects } from "@/components/Projects";
import { getGithubRepos } from "@/lib/aggregators";
import { contentSections } from "@/data/sections";
const section = contentSections[3];
export const metadata: Metadata = { title: section.title, description: section.description, alternates: { canonical: "/lab/" } };
export default async function LabPage() {
  const repos = await getGithubRepos();
  return <ZonePage {...section}><Projects repos={repos} /></ZonePage>;
}
