'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { ArrowRight, House, RotateCcw, TriangleAlert } from 'lucide-react';

export default function GlobalError({
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
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white">
        <main className="container min-h-screen py-20 md:py-24 flex items-center">
          <div className="relative w-full overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 md:p-14 shadow-[0_24px_80px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-slate-950/90 dark:shadow-[0_24px_80px_rgba(2,6,23,0.55)]">
            <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.12),transparent_28%)]" />

            <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] items-center">
              <div className="space-y-6 max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-2 text-sm font-bold text-rose-700 border border-rose-100 dark:bg-white/5 dark:text-rose-300 dark:border-white/10">
                  <TriangleAlert size={16} /> Global site error
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                  Something stopped the app.
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  This is the fallback for unexpected failures in the app shell. The best recovery path is to retry or navigate away and return.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button
                    onClick={reset}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-white font-bold shadow-[0_12px_0_rgb(15,23,42)] transition-all hover:-translate-y-1 hover:bg-emerald-600"
                  >
                    Retry app <RotateCcw size={18} />
                  </button>
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 font-bold text-slate-700 transition-all hover:-translate-y-1 hover:border-emerald-200 hover:text-emerald-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-white"
                  >
                    <House size={18} /> Home
                  </Link>
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
                <div className="rounded-[1.5rem] bg-linear-to-br from-emerald-500 to-teal-600 p-8 text-white shadow-2xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-50/90">
                    Recovery mode
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-emerald-50">
                    The site can still point users to products and the live TestWest platform while the error is being cleared.
                  </p>
                  <Link
                    href="/products"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-950 transition-all hover:-translate-y-0.5"
                  >
                    Explore products <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}