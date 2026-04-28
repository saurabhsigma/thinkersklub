'use client';
import React from 'react';
import Link from 'next/link';
import AnimationWrapper from '@/components/AnimationWrapper';
import {
  CheckCircle,
  Building2,
  ShieldCheck,
  Users,
  Globe,
  Rocket,
  GraduationCap,
  Workflow,
} from 'lucide-react';

export default function AboutPage() {
  const founderImage =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1hmVd7SARE5LWNDk618W2MpHmBmpDegdNNnW81ROJlAS74PSc7jGMdKlrfEjktCpPTlZ2BjL0E5h-rxx54g&s&ec=121643169';

  const team = [
    {
      name: 'Devesh Singh',
      role: 'Technology Leadership',
      image: '/devesh.jpeg',
      bio: 'Focused on product direction and software execution.',
    },
    {
      name: 'Bhartendu Kumar',
      role: 'AI and Systems',
      image: '/Bhartendu.jpeg',
      bio: 'Working on intelligent workflows and scalable architecture.',
    },
    {
      name: 'Aman Singh',
      role: 'Academic Strategy',
      image: '/aman.jpeg',
      bio: 'Bringing pedagogy and classroom understanding into product decisions.',
    },
    {
      name: 'Abhay Singh',
      role: 'Operations',
      image: '/abhay.jpg',
      bio: 'Supporting execution, delivery, and institutional coordination.',
    },
  ];

  return (
    <main className="container site-main overflow-hidden">
      <section className="py-24 bg-white dark:bg-transparent relative">
        <div className="absolute top-10 left-10 opacity-10 animate-spin-slow">
          <Globe size={100} className="text-emerald-500" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-10 animate-bounce">
          <Rocket size={80} className="text-sky-500" />
        </div>

        <AnimationWrapper className="text-center max-w-4xl mx-auto relative z-10">
          <span className="badge badge-primary mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold text-sm">
            <Users size={16} /> About ThinkersKlub
          </span>
          <h1 className="mb-8 text-5xl font-extrabold leading-tight text-slate-900 dark:text-white">
            Building practical software for schools that want to operate with more clarity and control.
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed">
            ThinkersKlub is focused on helping educational institutions adopt digital systems that actually support daily school operations, teaching workflows, student assessment, and parent communication.
          </p>
        </AnimationWrapper>
      </section>

      <section className="py-20 relative">
        <div className="container">
          <AnimationWrapper
            delay={0.2}
            className="text-center space-y-6 max-w-3xl mx-auto rounded-3xl border border-emerald-200/80 bg-white p-10 shadow-[0_18px_60px_rgba(16,185,129,0.12)] relative overflow-hidden dark:border-emerald-500/20 dark:bg-slate-900/85 dark:shadow-[0_18px_60px_rgba(2,6,23,0.45)]"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-emerald-300 via-emerald-500 to-cyan-400" />
            <div className="absolute top-6 left-8 text-6xl text-emerald-200 font-serif leading-3">
              “
            </div>

            <blockquote className="text-2xl font-medium text-slate-900 dark:text-slate-100 italic relative z-10 leading-relaxed">
              Schools should not have to manage academics, communication, and administration through disconnected tools. We are building a more unified operating layer for education.
            </blockquote>

            <div className="inline-flex items-center justify-center gap-3 rounded-2xl border border-emerald-100 bg-emerald-50 px-5 py-4 mx-auto shadow-sm dark:border-white/10 dark:bg-white/5">
              <ShieldCheck size={20} className="text-emerald-600 dark:text-emerald-400" />
              <p className="font-medium text-slate-700 dark:text-slate-300">School-focused. Practical. Long-term.</p>
            </div>

            <div className="mx-auto flex max-w-md items-center gap-4 rounded-4xl border border-slate-200 bg-white/90 p-4 text-left shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full ring-4 ring-white shadow-lg dark:ring-slate-900">
                <img
                  src={founderImage}
                  alt="Founder portrait"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400">
                  Founder
                </p>
                <p className="text-base font-bold text-slate-900 dark:text-white">
                  ThinkersKlub
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Building practical software for schools.
                </p>
              </div>
            </div>
          </AnimationWrapper>

          <div className="w-full h-px bg-slate-200 dark:bg-white/10 my-16"></div>

          <div className="grid md:grid-cols-[220px_1fr] gap-8 mb-16">
            <h3 className="text-xl font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wide flex items-center gap-2">
              <Building2 size={20} /> What We Do
            </h3>
            <AnimationWrapper animation="slide-in-right" className="space-y-4">
              <h4 className="text-3xl font-bold text-slate-900 dark:text-white">
                We package digital infrastructure for modern schools.
              </h4>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                Our product suite is designed around the real workflows of school management teams, teachers, students, and parents. Instead of selling isolated utilities, we bring together the tools institutions need to run and grow with confidence.
              </p>
            </AnimationWrapper>
          </div>

          <div className="grid md:grid-cols-[220px_1fr] gap-8">
            <h3 className="text-xl font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wide flex items-center gap-2">
              <Workflow size={20} /> Core Focus
            </h3>
            <div className="space-y-6">
              <AnimationWrapper animation="slide-in-right" delay={0.2}>
                <h4 className="text-3xl font-bold text-slate-900 dark:text-white">
                  A software business built around four connected products.
                </h4>
                <p className="text-slate-800 dark:text-slate-300 text-lg leading-relaxed">
                  ThinkersKlub is organized around TestWest, LMS, Parent Teacher App, and ERP. Together, they address assessment, learning management, communication, and school operations in a way that feels coherent for institutions evaluating long-term digital adoption.
                </p>
              </AnimationWrapper>

              <div className="grid md:grid-cols-2 gap-4 pt-4">
                {[
                  'Assessment with TestWest',
                  'Academic delivery through LMS',
                  'Parent engagement through the Parent Teacher App',
                  'Operational control through ERP',
                ].map((item, idx) => (
                  <AnimationWrapper key={item} delay={0.3 + idx * 0.1}>
                    <div className="flex items-center gap-3 p-4 rounded-xl text-slate-900 bg-white dark:bg-white/10 dark:text-slate-100 border border-slate-100 dark:border-white/10 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all duration-300">
                      <div className="bg-emerald-100 text-emerald-600 p-1.5 rounded-full shrink-0">
                        <CheckCircle size={18} strokeWidth={2.5} />
                      </div>
                      <span className="font-medium text-slate-900 dark:text-slate-100">{item}</span>
                    </div>
                  </AnimationWrapper>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section relative overflow-hidden bg-slate-50 py-20 text-slate-900 dark:bg-slate-950 dark:text-white">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]"></div>
        <div className="container relative z-10">
          <div className="grid md:grid-cols-4 items-center gap-12 text-center md:text-left">
            <AnimationWrapper>
              <h2 className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-cyan-400">
                Why it matters
              </h2>
              <p className="text-slate-600 dark:text-slate-300">The value is in integration, clarity, and execution.</p>
            </AnimationWrapper>

            {[
              { label: 'Integrated products', value: '4', icon: Building2 },
              { label: 'Primary audience', value: 'Schools', icon: Users },
              { label: 'Product direction', value: 'AI + Ops', icon: GraduationCap },
            ].map((stat, idx) => (
              <AnimationWrapper
                key={stat.label}
                delay={idx * 0.1}
                className="text-center md:text-left p-6 rounded-2xl bg-white/90 border border-slate-200 text-slate-900 shadow-sm hover:shadow-md transition-colors backdrop-blur-sm dark:bg-white/5 dark:border-white/10 dark:text-white"
              >
                <div className="flex items-center justify-center md:justify-start gap-4 mb-3">
                  <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400">
                    <stat.icon size={24} />
                  </div>
                  <div className="stat-number text-3xl font-bold text-slate-900 dark:text-white">{stat.value}</div>
                </div>
                <div className="stat-label font-medium pl-13 text-slate-700 dark:text-slate-300">{stat.label}</div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 team-section bg-white dark:bg-transparent">
        <div className="container">
          <AnimationWrapper className="text-center mb-16">
            <span className="text-emerald-600 font-bold tracking-wider text-sm uppercase mb-2 block">
              Leadership
            </span>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              The team behind the suite
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
              A cross-functional team working across technology, academics, AI, and delivery.
            </p>
          </AnimationWrapper>

          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <AnimationWrapper key={member.name} delay={idx * 0.1} className="group relative">
                <div className="relative rounded-2xl overflow-hidden aspect-3/4 shadow-md border border-slate-200 mb-4 bg-white dark:bg-slate-800">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-90 transition-opacity"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-xs font-bold uppercase tracking-wider text-white drop-shadow-md mb-1">
                      {member.role}
                    </p>
                    <p className="text-sm font-semibold text-white drop-shadow-lg line-clamp-2">
                      {member.bio}
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors text-center">
                  {member.name}
                </h3>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <AnimationWrapper className="bg-emerald-600 rounded-[3rem] p-10 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Ready to modernize your school systems?</h2>
              <p className="text-emerald-100 text-xl mb-10 leading-relaxed">
                Let’s discuss the right starting point for your institution, whether that is TestWest alone or the full ThinkersKlub suite.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-emerald-800 font-bold py-4 px-10 rounded-full shadow-[0_10px_0_rgb(6,78,59)] active:shadow-[0_4px_0_rgb(6,78,59)] active:translate-y-1.5 transition-all hover:-translate-y-1 text-lg"
              >
                Book a consultation <Rocket size={20} />
              </Link>
            </div>
          </AnimationWrapper>
        </div>
      </section>
    </main>
  );
}
