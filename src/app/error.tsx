'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { ArrowRight, RotateCcw, Sparkles, TriangleAlert } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="container min-h-[calc(100vh-10rem)] py-20 md:py-24 flex items-center">
      <div className="relative w-full overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 md:p-14 shadow-[0_24px_80px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-slate-950/90 dark:shadow-[0_24px_80px_rgba(2,6,23,0.55)]">
        <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.12),transparent_28%)]" />

        <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] items-center">
          <div className="space-y-6 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-sm font-bold text-amber-700 border border-amber-100 dark:bg-white/5 dark:text-amber-300 dark:border-white/10">
              <TriangleAlert size={16} /> Something interrupted the page
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-slate-950 dark:text-white">
              We hit a temporary snag.
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              The site ran into an unexpected error, but the layout and navigation are still available. Try loading the page again or go somewhere else on the site.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={reset}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-white font-bold shadow-[0_12px_0_rgb(15,23,42)] transition-all hover:-translate-y-1 hover:bg-emerald-600"
              >
                Retry <RotateCcw size={18} />
              </button>
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
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 mb-5">
                <Sparkles size={16} /> Beautiful recovery path
              </div>
              <p className="text-sm leading-relaxed text-emerald-50">
                Refresh the page, open another section, or return to the homepage. The site should stay visually polished even when something breaks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}