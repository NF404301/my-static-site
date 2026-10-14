import type { Metadata } from "next";
import { ZonePage } from "@/components/ZonePage";
import { contentSections } from "@/data/sections";
const section = contentSections[1];
export const metadata: Metadata = { title: section.title, description: section.description, alternates: { canonical: "/tutorials/" } };
export default function TutorialsPage() { return <ZonePage {...section} />; }
