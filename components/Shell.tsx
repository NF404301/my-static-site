import Link from "next/link";
import { navigation, site } from "@/data/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-[#eef3f8]/72 backdrop-blur-2xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group inline-flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-xl bg-base-ink text-sm font-semibold text-white shadow-glass transition group-hover:scale-105">
            GY
          </span>
          <span>
            <span className="block text-sm font-semibold text-base-ink">{site.shortName}</span>
            <span className="block text-xs text-base-soft">Digital Base</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 rounded-full border border-white/60 bg-white/46 p-1 shadow-inset backdrop-blur md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-base-soft transition hover:bg-white/80 hover:text-base-ink"
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <Link
          href={site.telegramChannel}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-base-ink px-4 py-2 text-sm font-medium text-white shadow-glass transition hover:-translate-y-0.5 hover:bg-slate-700"
        >
          进入频道
        </Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-base-line/80 py-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 text-sm text-base-soft sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="font-semibold text-base-ink">{site.name}</p>
          <p className="mt-1">一个长期持续更新的数字基地。</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href={site.bilibiliSpace} target="_blank" rel="noopener noreferrer" className="hover:text-signal-blue">
            Bilibili
          </Link>
          <Link href={site.xiaohongshu} target="_blank" rel="noopener noreferrer" className="hover:text-signal-blue">
            小红书
          </Link>
          <Link href={site.github} target="_blank" rel="noopener noreferrer" className="hover:text-signal-blue">
            GitHub
          </Link>
          <Link href={site.blog} target="_blank" rel="noopener noreferrer" className="hover:text-signal-blue">
            Blog
          </Link>
          <Link href={site.alist} target="_blank" rel="noopener noreferrer" className="hover:text-signal-blue">
            Alist
          </Link>
          <Link href={site.telegramChannel} target="_blank" rel="noopener noreferrer" className="hover:text-signal-blue">
            Telegram
          </Link>
        </div>
      </div>
    </footer>
  );
}
