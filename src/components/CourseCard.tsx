import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description?: string;
  level?: string;
  color?: string; // tailwind gradient classes like 'from-indigo-500 to-purple-500'
}

export default function CourseCard({
  title,
  description,
  level,
  color = 'from-indigo-500 to-purple-500',
}: CourseCardProps) {
  return (
    <article className="group relative h-full flex flex-col">
      <div className="h-full flex flex-col overflow-hidden border-2 border-slate-900 bg-white p-0 transition-transform duration-300 group-hover:-translate-y-2 group-hover:rotate-1 shadow-[4px_4px_0_0_#1e293b] rounded-[255px_15px_225px_15px/15px_225px_15px_255px] dark:bg-slate-900/50 dark:backdrop-blur-sm dark:border-white/20 dark:shadow-[4px_4px_0_0_rgba(255,255,255,0.2)]">
        {/* Course Thumbnail Area */}
        <div
          className={`h-48 w-full bg-gradient-to-br ${color} p-6 flex flex-col justify-between relative overflow-hidden`}
        >
          <div className="absolute top-0 right-0 p-4 opacity-20 transform group-hover:scale-110 transition-transform duration-500">
            <Star size={80} fill="currentColor" stroke="none" className="text-white" />
          </div>

          {level && (
            <span className="self-start inline-block px-3 py-1 text-xs font-bold tracking-wide rounded-full bg-white/20 text-white backdrop-blur-sm border border-white/30">
              {level}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
            {title}
          </h3>

          {description && (
            <p className="text-slate-600 mb-6 flex-grow leading-relaxed">{description}</p>
          )}

          <div className="flex gap-3 mt-auto pt-4 border-t border-slate-100">
            <Link
              href="/courses"
              className="flex-1 btn bg-slate-900 text-white hover:bg-emerald-600 border-none justify-center gap-2 group/btn"
            >
              Start
              <ArrowRight
                size={16}
                className="group-hover/btn:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/courses"
              className="flex-1 btn bg-slate-100 text-slate-700 hover:bg-slate-200 border-none justify-center"
            >
              Preview
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
