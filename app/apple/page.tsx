import type { Metadata } from "next";
import { ZonePage } from "@/components/ZonePage";
import { contentSections } from "@/data/sections";
const section = contentSections[0];
export const metadata: Metadata = { title: section.title, description: section.description, alternates: { canonical: "/apple/" } };
export default function ApplePage() { return <ZonePage {...section} />; }
