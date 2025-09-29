"use client";
import { Suspense, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import AdminLocalePage from "@/app/[locale]/admin/page";

const TABS = [
  { id: "hero", label: "Hero", icon: "🏠" },
  { id: "programs", label: "Programs", icon: "📚" },
  { id: "admissions", label: "Admissions", icon: "🎓" },
  { id: "contact", label: "Contact", icon: "📞" }
] as const;

type TabId = typeof TABS[number]["id"];

function AdminContent() {
  const router = useRouter();
  const search = useSearchParams();
  const tab = (search.get("tab") as TabId) || "hero";
  const locale = useMemo(() => document.documentElement.getAttribute("lang") || "en", []);

  function setTab(next: TabId) {
    const p = new URLSearchParams(search.toString());
    p.set("tab", next);
    router.replace(`/admin?${p.toString()}`);
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 grid grid-cols-1 md:grid-cols-[260px_1fr]">
      <aside className="bg-white/95 dark:bg-slate-800/70 backdrop-blur border-r dark:border-slate-700 md:sticky md:top-0 md:h-[100svh] p-5 space-y-4 shadow-sm">
        <div>
          <h1 className="text-xl font-bold text-primary dark:text-slate-100">Admin Panel <span className="text-accent">(Demo)</span></h1>
          <p className="text-slate-600 dark:text-slate-300 text-xs">Manage your website content and settings.</p>
        </div>
        <nav className="space-y-1" aria-label="Admin sections">
          {TABS.map(t => (
            <button
              key={t.id}
              aria-current={tab === t.id ? 'page' : undefined}
              onClick={() => setTab(t.id)}
              className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-colors border
              ${tab === t.id
                ? "bg-primary text-white border-primary/20 shadow-sm"
                : "bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-600 border-slate-200 dark:border-slate-600"}`}
            >
              <span className="text-base">{t.icon}</span>
              <span>{t.label}</span>
            </button>
          ))}
        </nav>
      </aside>
      <main className="p-5 md:p-8">
        <div className="mx-auto w-full max-w-6xl">
          <AdminLocalePage params={{ locale: locale as any }} searchParams={{ tab }} />
        </div>
      </main>
    </div>
  );
}

export default function AdminShell() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-slate-600">Loading admin...</p>
        </div>
      </div>
    }>
      <AdminContent />
    </Suspense>
  );
}
