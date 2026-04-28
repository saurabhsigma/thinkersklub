import Link from 'next/link';
import { ArrowRight, House, Search, Sparkles } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="container min-h-[calc(100vh-10rem)] py-20 md:py-24 flex items-center">
      <div className="relative w-full overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 md:p-14 shadow-[0_24px_80px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-slate-950/90 dark:shadow-[0_24px_80px_rgba(2,6,23,0.55)]">
        <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.12),transparent_28%)]" />
        <div className="absolute -top-10 right-8 text-emerald-500/20 dark:text-emerald-400/15">
          <Sparkles size={140} />
        </div>

        <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] items-center">
          <div className="space-y-6 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700 border border-emerald-100 dark:bg-white/5 dark:text-emerald-300 dark:border-white/10">
              <Search size={16} /> 404 - Page not found
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-slate-950 dark:text-white">
              That page wandered off.
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              The page you were looking for does not exist, but the rest of the ThinkersKlub site is ready. You can head back home, explore the products, or open the live TestWest platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-white font-bold shadow-[0_12px_0_rgb(15,23,42)] transition-all hover:-translate-y-1 hover:bg-emerald-600"
              >
                Go home <House size={18} />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 font-bold text-slate-700 transition-all hover:-translate-y-1 hover:border-emerald-200 hover:text-emerald-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-white"
              >
                View products <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
            <div className="rounded-[1.5rem] bg-linear-to-br from-emerald-500 to-teal-600 p-8 text-white shadow-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-50/90">
                Popular destinations
              </p>
              <div className="mt-4 space-y-3 text-sm">
                <div className="rounded-2xl bg-white/10 px-4 py-3">TestWest live platform</div>
                <div className="rounded-2xl bg-white/10 px-4 py-3">Products overview</div>
                <div className="rounded-2xl bg-white/10 px-4 py-3">Contact and rollout guidance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}