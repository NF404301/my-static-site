import type { Metadata } from "next";
import { ZonePage } from "@/components/ZonePage";
import { DailyImage } from "@/components/DailyImage";
import { contentSections } from "@/data/sections";
const section = contentSections[2];
export const metadata: Metadata = { title: section.title, description: section.description, alternates: { canonical: "/pan/" } };
export default function PanPage() { return <ZonePage {...section}><DailyImage /></ZonePage>; }
