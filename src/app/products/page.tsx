import Link from 'next/link';
import AnimationWrapper from '@/components/AnimationWrapper';
import {
  ArrowRight,
  BookOpenCheck,
  Building2,
  LayoutDashboard,
  MessageSquareMore,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

const products = [
  {
    name: 'TestWest',
    icon: BookOpenCheck,
    summary:
      'An AI-enabled test taking and assessment platform for schools as well as solo learners who want structured self-evaluation.',
    bullets: [
      'Online tests, practice series, and mock exams',
      'School-branded assessment workflows',
      'Performance reports and academic analytics',
    ],
  },
  {
    name: 'LMS',
    icon: LayoutDashboard,
    summary:
      'A learning management platform that helps schools manage classes, homework, digital content, and academic visibility.',
    bullets: [
      'Classroom content and assignment delivery',
      'Teacher-facing academic workflows',
      'Student progress tracking and reporting',
    ],
  },
  {
    name: 'Parent Teacher App',
    icon: MessageSquareMore,
    summary:
      'A dedicated communication app that keeps parents informed and helps schools build stronger day-to-day coordination.',
    bullets: [
      'Attendance, notices, and school updates',
      'Parent-teacher communication touchpoints',
      'Student progress visibility for families',
    ],
  },
  {
    name: 'ERP',
    icon: Building2,
    summary:
      'An upcoming ERP layer for institutions that want tighter control over administrative and operational workflows.',
    bullets: [
      'Admissions, records, and school administration',
      'Fee and finance process visibility',
      'Operational control for growing institutions',
    ],
  },
];

export default function ProductsPage() {
  return (
    <main className="container py-24">
      <AnimationWrapper className="max-w-3xl mx-auto text-center mb-16">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 font-semibold text-sm">
          <Sparkles size={16} /> Product suite
        </span>
        <h1 className="mt-6 text-4xl md:text-6xl font-bold text-slate-950 dark:text-white">
          A focused software suite for schools
        </h1>
        <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">
          ThinkersKlub brings together assessment, learning delivery, parent communication, and institutional operations in one professional product family.
        </p>
      </AnimationWrapper>

      <div className="grid lg:grid-cols-2 gap-6">
        {products.map((product, index) => (
          <AnimationWrapper key={product.name} delay={index * 0.08}>
            <article className="h-full rounded-4xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl transition-all">
              <div className="flex items-start justify-between gap-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <product.icon size={28} />
                </div>
                <div className="text-sm font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                  School-ready
                </div>
              </div>
              <h2 className="mt-6 text-3xl font-bold text-slate-950 dark:text-white">{product.name}</h2>
              <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">{product.summary}</p>
              <ul className="mt-6 space-y-3 text-slate-700 dark:text-slate-300">
                {product.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          </AnimationWrapper>
        ))}
      </div>

      <AnimationWrapper className="mt-16 rounded-4xl bg-slate-950 text-white p-10 md:p-14 shadow-2xl">
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 mb-4">
              <ShieldCheck size={16} /> One implementation partner
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need the complete school software stack?</h2>
            <p className="text-slate-300 text-lg max-w-2xl">
              We can package the full suite for your school and guide the rollout based on your academic and operational priorities.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-slate-950 font-bold py-4 px-8 rounded-full shadow-[0_10px_0_rgb(15,23,42)] active:shadow-[0_4px_0_rgb(15,23,42)] active:translate-y-1.5 transition-all hover:-translate-y-1 text-lg"
          >
            Talk to sales <ArrowRight size={20} />
          </Link>
        </div>
      </AnimationWrapper>
    </main>
  );
}
