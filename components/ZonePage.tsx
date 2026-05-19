import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Header, Footer } from "@/components/Shell";

type ZonePageProps = {
  eyebrow: string;
  title: string;
  description: string;
  cards: Array<{
    title: string;
    description: string;
    href: string;
    label: string;
  }>;
};

export function ZonePage({ eyebrow, title, description, cards }: ZonePageProps) {
  return (
    <main className="min-h-screen bg-radial-grid">
      <Header />
      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-base-soft hover:text-signal-blue">
          <ArrowLeft className="size-4" />
          返回主站
        </Link>
        <div className="mt-10 max-w-4xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-signal-blue">
            {eyebrow}
          </p>
          <h1 className="text-balance text-5xl font-semibold tracking-[-0.05em] text-base-ink sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-9 text-base-soft">{description}</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {cards.map((card) => (
            <Link
              href={card.href}
              target={card.href.startsWith("http") ? "_blank" : undefined}
              rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
              key={card.title}
              className="glass-panel group rounded-[1.75rem] p-6 transition hover:-translate-y-1"
            >
              <span className="rounded-full bg-signal-blue/10 px-3 py-1 text-xs font-semibold text-signal-blue">
                {card.label}
              </span>
              <h2 className="mt-5 text-2xl font-semibold text-base-ink">{card.title}</h2>
              <p className="mt-3 text-sm leading-7 text-base-soft">{card.description}</p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-base-ink">
                打开 <ArrowUpRight className="size-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
