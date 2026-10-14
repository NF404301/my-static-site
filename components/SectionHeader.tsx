type SectionHeaderProps = { eyebrow: string; title: string; description?: string; align?: "left" | "center"; id?: string };
export function SectionHeader({ eyebrow, title, description, align = "left", id }: SectionHeaderProps) {
  return <div className={align === "center" ? "text-center" : undefined}><p className="eyebrow">{eyebrow}</p><h2 id={id} className="section-title">{title}</h2>{description && <p className="section-description">{description}</p>}</div>;
}
