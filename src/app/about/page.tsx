'use client';
import React from 'react';
import Link from 'next/link';
import AnimationWrapper from '@/components/AnimationWrapper';
import {
  CheckCircle,
  Target,
  Lightbulb,
  Users,
  Globe,
  Award,
  Heart,
  Rocket,
  GraduationCap,
} from 'lucide-react';

export default function AboutPage() {
  const team = [
    {
      name: 'Devesh Singh',
      role: 'IIT BHU',
      image: '/devesh.jpeg',
      bio: 'Leading with technical expertise',
    },
    {
      name: 'Bhartendu Kumar',
      role: 'IISc Bangalore, Microsoft',
      image: '/Bhartendu.jpeg',
      bio: 'Driving innovation in AI.',
    },
    {
      name: 'Aman Singh',
      role: 'DIET Pune',
      image: '/aman.jpeg',
      bio: 'Pedagogy and curriculum design.',
    },
    {
      name: 'Abhay Singh',
      role: 'Co-Founder',
      image: '/abhay.jpg',
      bio: 'Hands-on robotics expert.',
    },
  ];

  return (
    <main className="container site-main overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="py-24 bg-white dark:bg-transparent relative">
        {/* Abstract Background Doodles */}
        <div className="absolute top-10 left-10 opacity-10 animate-spin-slow">
          <Globe size={100} className="text-emerald-500" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-10 animate-bounce">
          <Rocket size={80} className="text-purple-500" />
        </div>

        <AnimationWrapper className="text-center max-w-4xl mx-auto relative z-10">
          <span className="badge badge-primary mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold text-sm">
            <Users size={16} /> About Us
          </span>
          <h1 className="mb-8 text-5xl font-extrabold leading-tight text-slate-900 dark:text-white">
            Bringing the future of learning to the{' '}
            <span className="text-emerald-600 dark:text-emerald-400 relative inline-block">
              heart of India.
              <svg
                className="absolute w-full h-3 -bottom-1 left-0 text-emerald-200 opacity-50 -z-10"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-xl max-w-2xl mx-auto leading-relaxed">
            From metropolitan classrooms to village schools, we are reimagining how children
            experience science, AI, Robotics, and Drone Technology.
          </p>
        </AnimationWrapper>
      </section>

      {/* 2. VISION & MISSION */}
      <section className="py-20 relative">
        <div className="container">
          {/* Founder Quote */}
          <AnimationWrapper
            delay={0.2}
            className="text-center space-y-6 max-w-3xl mx-auto bg-amber-100/70 dark:bg-amber-500/10 p-10 rounded-3xl border border-amber-300 dark:border-amber-500/20 shadow-md relative"
          >
            <div className="absolute top-6 left-8 text-6xl text-amber-300 dark:text-amber-500/30 font-serif leading-3">
              “
            </div>

            <blockquote className="text-2xl font-medium text-slate-900 dark:text-amber-300 italic relative z-10">
              "At Thinkersklub, we dream of an India where every child — from any village or city —
              can build, code, and create the future."
            </blockquote>

            <div className="font-bold text-slate-800 dark:text-white opacity-90">
              Divyanshu Singh
              <div className="text-sm font-normal text-slate-600 dark:text-slate-400">Founder</div>
            </div>
          </AnimationWrapper>

          <div className="w-full h-px bg-slate-200 dark:bg-white/10 my-16"></div>

          {/* Vision Text */}
          <div className="grid md:grid-cols-[200px_1fr] gap-8 mb-16">
            <h3 className="text-xl font-bold text-slate-400 uppercase tracking-wide flex items-center gap-2">
              <Lightbulb size={20} /> Our Vision
            </h3>
            <AnimationWrapper animation="slide-in-right" className="space-y-4">
              <h4 className="text-3xl font-bold text-slate-900 dark:text-white">
                Igniting young minds across every corner of India.
              </h4>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                We envision a future where every child learns to build, think, and dream fearlessly
                through AI, Robotics, and Aero Education — creating a generation of thinkers, doers,
                and leaders.
              </p>
            </AnimationWrapper>
          </div>

          {/* Mission Text */}
          <div className="grid md:grid-cols-[200px_1fr] gap-8">
            <h3 className="text-xl font-bold text-slate-400 uppercase tracking-wide flex items-center gap-2">
              <Target size={20} /> Our Mission
            </h3>
            <div className="space-y-6">
              <AnimationWrapper animation="slide-in-right" delay={0.2}>
                <h4 className="text-3xl font-bold text-slate-900 dark:text-white">
                  Bridging the gap between curiosity and creation.
                </h4>
                <p className="text-slate-800 dark:text-slate-300 text-lg leading-relaxed">
                  We strive to empower young learners with practical skills, futuristic thinking,
                  and the confidence to innovate — ensuring that no child's potential is limited by
                  geography.
                </p>
              </AnimationWrapper>

              <div className="grid md:grid-cols-2 gap-4 pt-4">
                {[
                  'Democratize Technology Education',
                  'Empower Rural Talent',
                  'Promote Experiential Learning',
                  'Collaborate with Schools & Communities',
                ].map((item, idx) => (
                  <AnimationWrapper key={item} delay={0.3 + idx * 0.1}>
                    <div className="flex items-center gap-3 p-4 rounded-xl text-white bg-white dark:bg-white/10 border border-slate-100 dark:border-white/10 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all duration-300">
                      <div className="bg-emerald-100 text-emerald-600 p-1.5 rounded-full shrink-0">
                        <CheckCircle size={18} strokeWidth={2.5} />
                      </div>
                      <span className="font-medium text-white dark:text-slate-200">{item}</span>
                    </div>
                  </AnimationWrapper>
                ))}
              </div>
            </div>
          </div>

          {/* Photo Grid Placeholder - "More Photos" Request */}
          <AnimationWrapper className="mt-24">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`rounded-2xl overflow-hidden shadow-lg border-4 border-white transform hover:scale-105 transition-transform duration-500 ${i % 2 === 0 ? 'mt-8' : ''}`}
                >
                  <div className="bg-slate-200 w-full h-48 flex items-center justify-center text-slate-400 relative group overflow-hidden">
                    {/* Placeholder for actual photos */}
                    <img
                      src={`https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=80`}
                      alt="Students learning"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                  </div>
                </div>
              ))}
            </div>
          </AnimationWrapper>
        </div>
      </section>

      {/* 3. STATS SECTION */}
      <section className="py-20 stats-section text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]"></div>
        <div className="container relative z-10">
          <div className="grid md:grid-cols-4 items-center gap-12 text-center md:text-left">
            <AnimationWrapper>
              <h2 className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Our Impact
              </h2>
              <p className="text-slate-400">Numbers that speak for themselves.</p>
            </AnimationWrapper>

            {[
              { label: 'Schools', value: '200+', icon: Award },
              { label: 'Instructors', value: '30+', icon: Users },
              { label: 'Students', value: '25k+', icon: GraduationCap },
            ].map((stat, idx) => (
              <AnimationWrapper
                key={stat.label}
                delay={idx * 0.1}
                className="text-center md:text-left p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                <div className="flex items-center justify-center md:justify-start gap-4 mb-3">
                  <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400">
                    <stat.icon size={24} />
                  </div>
                  <div className="stat-number text-3xl font-bold text-black">{stat.value}</div>
                </div>
                <div className="stat-label text-slate-400 font-medium pl-[3.25rem]">
                  {stat.label}
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TEAM SECTION */}
      <section className="py-24 team-section bg-white dark:bg-transparent">
        <div className="container">
          <AnimationWrapper className="text-center mb-16">
            <span className="text-emerald-600 font-bold tracking-wider text-sm uppercase mb-2 block">
              Our Leadership
            </span>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Meet The Team
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
              Guided by experts from top institutions like IIT BHU, IISc Bangalore, and Microsoft.
            </p>
          </AnimationWrapper>

          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <AnimationWrapper key={member.name} delay={idx * 0.1} className="group relative">
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-md border border-slate-200 mb-4 bg-white dark:bg-slate-800">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent dark:from-black/70 dark:to-transparentopacity-90transition-opacity"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-xs font-bold uppercase tracking-wider  text-white dark:text-emerald-300   /* WHITE ALWAYS VISIBLE IN LIGHT MODE */drop-shadow-mdmb-1">
                      {member.role}
                    </p>

                    <p
                      className="
                                            text-sm font-semibold 
                                            text-white dark:text-white 
                                            drop-shadow-lg 
                                            line-clamp-2
                                        "
                    >
                      {member.bio}
                    </p>
                  </div>
                </div>

                <h3
                  className="
                                    text-xl font-bold 
                                    text-slate-900 dark:text-white 
                                    group-hover:text-emerald-600 dark:group-hover:text-emerald-400 
                                    transition-colors text-center
                                "
                >
                  {member.name}
                </h3>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-24">
        <div className="container">
          <AnimationWrapper className="bg-emerald-600 rounded-[3rem] p-10 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Ready to start learning?</h2>
              <p className="text-emerald-100 text-xl mb-10 leading-relaxed">
                Join the All Access Membership and give your child the tools to shape the future.
              </p>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 bg-white text-emerald-800 font-bold py-4 px-10 rounded-full shadow-[0_10px_0_rgb(6,78,59)] active:shadow-[0_4px_0_rgb(6,78,59)] active:translate-y-1.5 transition-all hover:-translate-y-1 text-lg"
              >
                Subscribe & Save <Rocket size={20} />
              </Link>
            </div>
          </AnimationWrapper>
        </div>
      </section>
    </main>
  );
}
