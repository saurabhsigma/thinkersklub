import Link from 'next/link';
import AnimationWrapper from '@/components/AnimationWrapper';
import {
  ArrowRight,
  BookOpenCheck,
  Building2,
  LayoutDashboard,
  MessageSquareMore,
  MonitorSmartphone,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';

export default function Home() {
  const products = [
    {
      name: 'TestWest',
      description:
        'An AI-enabled assessment platform for school exams, practice tests, mock series, and self-evaluation for individual learners.',
      icon: BookOpenCheck,
      accent: 'from-emerald-400 to-teal-500',
    },
    {
      name: 'LMS',
      description:
        'A school learning management system for classes, assignments, digital content, and academic progress tracking.',
      icon: LayoutDashboard,
      accent: 'from-sky-400 to-blue-500',
    },
    {
      name: 'Parent Teacher App',
      description:
        'A communication layer for attendance, announcements, student updates, and stronger parent-school coordination.',
      icon: MessageSquareMore,
      accent: 'from-amber-400 to-orange-500',
    },
    {
      name: 'ERP',
      description:
        'An upcoming operations platform for administration, fees, records, and day-to-day school management.',
      icon: Building2,
      accent: 'from-slate-500 to-slate-700',
    },
  ];

  const schoolBenefits = [
    'One software ecosystem for academics, communication, assessments, and administration.',
    'Built for school management teams, teachers, parents, and students with role-based access.',
    'Suitable for institutional rollouts while still supporting solo learners through TestWest.',
  ];

  const platformModules = [
    'TestWest for exams, practice, and analytics',
    'LMS for classes, content, homework, and tracking',
    'Parent Teacher App for updates and engagement',
    'ERP for administration, fees, and records',
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 lg:py-28 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.14),transparent_28%)] pointer-events-none" />
        <div className="absolute top-16 left-8 opacity-10 animate-spin-slow pointer-events-none">
          <Sparkles size={64} className="text-emerald-500" />
        </div>

        <div className="container grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center relative z-10">
          <div className="space-y-6">
            <AnimationWrapper animation="fade-up" delay={0.1}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-emerald-100 text-emerald-700 text-sm font-semibold shadow-sm backdrop-blur-sm">
                <ShieldCheck size={16} /> Integrated school software suite
              </span>
            </AnimationWrapper>
            <AnimationWrapper animation="fade-up" delay={0.2}>
              <h1 className="leading-tight text-4xl lg:text-6xl font-bold text-slate-950 dark:text-white max-w-3xl">
                Professional software for schools that want one reliable digital system.
                <span className="block text-gradient mt-3">
                  Assessment, learning, communication, and operations in one suite
                </span>
              </h1>
            </AnimationWrapper>
            <AnimationWrapper animation="fade-up" delay={0.3}>
              <p className="text-lg md:text-xl font-light max-w-2xl text-slate-600 dark:text-slate-300">
                ThinkersKlub helps schools run modern academic and operational workflows through a
                connected product suite that includes TestWest, LMS, Parent Teacher App, and ERP.
              </p>
            </AnimationWrapper>
            <AnimationWrapper animation="fade-up" delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/products"
                  className="btn btn-primary text-lg px-8 py-3 shadow-lg hover:shadow-xl transition-all"
                >
                  Explore Products
                </Link>
                <Link href="/contact" className="btn btn-primary text-lg px-8 py-3">
                  Book a Demo
                </Link>
              </div>
            </AnimationWrapper>
            <AnimationWrapper animation="fade-up" delay={0.5}>
              <div className="pt-8 grid sm:grid-cols-3 gap-3 text-sm text-slate-600 dark:text-slate-300">
                {[
                  ['4', 'core products'],
                  ['School-first', 'implementation approach'],
                  ['AI-enabled', 'assessment workflows'],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/70 bg-white/80 backdrop-blur-sm p-4 shadow-sm"
                  >
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">{value}</div>
                    <div>{label}</div>
                  </div>
                ))}
              </div>
            </AnimationWrapper>
          </div>

          <AnimationWrapper
            animation="scale-in"
            delay={0.3}
            className="relative h-[420px] lg:h-[560px]"
          >
            <div className="w-full h-full rounded-4xl overflow-hidden shadow-2xl border border-white/70 bg-slate-950 text-white p-8 lg:p-10 flex flex-col justify-between transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.3em] text-white">Platform snapshot</p>
                <h2
                  className="text-3xl lg:text-4xl font-bold max-w-md text-white"
                  style={{ color: '#ffffff' }}
                >
                  A complete digital stack for progressive schools.
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 mt-8">
                {[
                  ['TestWest', 'Assessments, mock tests, and analytics'],
                  ['LMS', 'Teaching workflows and content delivery'],
                  ['Parent Teacher App', 'Parent communication and visibility'],
                  ['ERP', 'Administration and institutional control'],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-2xl bg-white/10 border border-white/10 p-4">
                    <div className="font-semibold text-lg text-white">{title}</div>
                    <div className="text-sm text-white/90 mt-1">{text}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </section>

      <section className="py-20 bg-white/70 dark:bg-transparent relative overflow-hidden">
        <div className="container relative z-10">
          <AnimationWrapper className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="mb-4 text-slate-950 dark:text-white">Why schools choose ThinkersKlub</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Built for institutions that want better control, better communication, and fewer disconnected tools.
            </p>
          </AnimationWrapper>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: 'One system for every stakeholder',
                desc: 'Serve management, teachers, students, and parents from one connected platform.',
              },
              {
                icon: MonitorSmartphone,
                title: 'Practical and accessible',
                desc: 'Designed to work across desktop and mobile for consistent everyday school usage.',
              },
              {
                icon: MessageSquareMore,
                title: 'Communication built in',
                desc: 'Keep parents informed and teams aligned without depending on scattered tools.',
              },
            ].map((item, idx) => (
              <AnimationWrapper key={item.title} delay={idx * 0.1} className="h-full">
                <div className="h-full rounded-4xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
                    <item.icon size={24} />
                  </div>
                  <h3 className="text-xl mb-3 font-bold text-slate-950 dark:text-white">{item.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{item.desc}</p>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="flex justify-between items-end mb-12 gap-4 flex-wrap">
            <div>
              <h2 className="mb-2">Product suite</h2>
              <p>Four focused products designed for modern school delivery and management</p>
            </div>
            <Link
              href="/products"
              className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline"
            >
              View all products →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, idx) => (
              <AnimationWrapper key={idx} delay={idx * 0.1}>
                <div className="group h-full rounded-4xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-linear-to-br ${product.accent} text-white flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <product.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-950 dark:text-white mb-3">{product.name}</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{product.description}</p>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.35),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.22),transparent_30%)]" />

        <div className="container relative z-10 grid lg:grid-cols-[1fr_0.9fr] gap-10 items-center">
          <div>
            <AnimationWrapper>
              <h2
                className="text-4xl lg:text-5xl font-bold leading-tight max-w-xl text-white"
                style={{ color: '#ffffff' }}
              >
                A school software bundle designed to scale with your institution.
              </h2>
            </AnimationWrapper>
          </div>

          <AnimationWrapper
            delay={0.15}
            className="rounded-4xl bg-white/5 border border-white/10 p-8 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold mb-6">Included modules</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {platformModules.map((item) => (
                <div key={item} className="rounded-2xl bg-white/10 px-4 py-3 text-sm text-slate-100">
                  {item}
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="/contact" className="btn btn-primary bg-white text-slate-950 border-none">
                Request a demo
              </Link>
              <Link
                href="/pricing"
                className="btn border-white text-white hover:bg-white hover:text-slate-950"
              >
                Compare pricing
              </Link>
            </div>
          </AnimationWrapper>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <AnimationWrapper className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4 text-slate-950 dark:text-white">Why the model works</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              ThinkersKlub is structured as a practical business solution for schools, not just a set of disconnected software tools.
            </p>
          </AnimationWrapper>

          <div className="grid lg:grid-cols-3 gap-6">
            {schoolBenefits.map((benefit, idx) => (
              <AnimationWrapper key={benefit} delay={idx * 0.1}>
                <div className="rounded-4xl border border-slate-200 bg-white p-7 shadow-sm h-full">
                  <div className="flex items-center gap-3 text-emerald-600 font-semibold mb-3">
                    <Users size={20} /> Advantage {idx + 1}
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{benefit}</p>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <AnimationWrapper className="rounded-4xl bg-linear-to-r from-emerald-600 to-teal-600 p-10 md:p-14 text-white shadow-2xl">
            <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Looking for a professional software partner for your school?</h2>
                <p className="text-emerald-50 text-lg max-w-2xl">
                  We can help you evaluate the right rollout, whether you need one product or the complete suite.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-emerald-800 font-bold py-4 px-8 rounded-full shadow-[0_10px_0_rgb(6,95,70)] active:shadow-[0_4px_0_rgb(6,95,70)] active:translate-y-1.5 transition-all hover:-translate-y-1 text-lg"
              >
                Contact us <ArrowRight size={20} />
              </Link>
            </div>
          </AnimationWrapper>
        </div>
      </section>
    </div>
  );
}
