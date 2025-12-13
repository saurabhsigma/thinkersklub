import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  name: string;
  role: string;
  quote: string;
}

export default function Testimonial({ name, role, quote }: TestimonialProps) {
  return (
    <div className="bg-white dark:bg-slate-900/50 dark:border-white/10 dark:backdrop-blur-sm p-8 border-2 border-slate-900 shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:-translate-y-1 transition-all relative rounded-[255px_15px_225px_15px/15px_225px_15px_255px] dark:shadow-[4px_4px_0_0_rgba(255,255,255,0.2)]">
      <div className="absolute -top-4 -left-2 bg-amber-400 text-white p-2 rounded-xl rotate-3 shadow-sm">
        <Quote size={20} fill="currentColor" stroke="none" />
      </div>

      <p className="text-lg italic text-slate-700 dark:text-slate-300 mb-6 relative z-10 leading-relaxed">
        "{quote}"
      </p>

      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden border-2 border-slate-900 shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
          {/* Fallback avatar if no image */}
          <div className="w-full h-full flex items-center justify-center bg-emerald-100 text-emerald-800 font-bold text-xl">
            {name.charAt(0)}
          </div>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white">{name}</h4>
          <p className="text-sm text-emerald-600 dark:text-emerald-400 font-semibold uppercase tracking-wider">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}
