import Link from 'next/link';
import CourseCard from '@/components/CourseCard';
import Testimonial from '@/components/Testimonial';
import AnimationWrapper from '@/components/AnimationWrapper';
import { Sparkles, Brain, Zap, Code, Cpu, Rocket } from 'lucide-react';

export default function Home() {
  const popularCourses = [
    {
      title: 'Front End - HTML 5',
      description: 'Web Component Fundamentals',
      level: 'Beginner',
      color: 'from-orange-400 to-red-500',
    },
    {
      title: 'Front End - CSS 3',
      description: 'Mastering CSS 3 Flexbox With Real World Projects',
      level: 'Beginner',
      color: 'from-blue-400 to-indigo-500',
    },
    {
      title: 'Full Stack Web Dev',
      description: 'With React Hooks and Redux',
      level: 'Beginner',
      color: 'from-emerald-400 to-teal-500',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="py-20 lg:py-28 overflow-hidden relative">
        {/* Animated Background Icons */}
        <div className="absolute top-20 left-10 opacity-10 animate-spin-slow pointer-events-none">
          <Sparkles size={60} className="text-emerald-400" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-10 animate-bounce pointer-events-none">
          <Brain size={80} className="text-purple-400" />
        </div>
        <div className="absolute top-40 right-1/4 opacity-5 animate-pulse pointer-events-none">
          <Zap size={50} className="text-yellow-400" />
        </div>

        <div className="container grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <AnimationWrapper animation="fade-up" delay={0.1}>
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-semibold">
                🌱 Empowering India — community first
              </span>
            </AnimationWrapper>
            <AnimationWrapper animation="fade-up" delay={0.2}>
              <h1 className="leading-tight text-4xl lg:text-6xl font-bold text-emerald-900 dark:text-white">
                Empowering the Next Generation with{' '}
                <span className="text-gradient">Affordable AI & Robotics Education</span>
              </h1>
            </AnimationWrapper>
            <AnimationWrapper animation="fade-up" delay={0.3}>
              <p className="text-lg md:text-xl font-light max-w-lg text-slate-600 dark:text-slate-300">
                From Tier 2-3 Cities to Villages, We Make Cutting-Edge Technology Accessible,
                Practical, and Fun for Every Student.
              </p>
            </AnimationWrapper>
            <AnimationWrapper animation="fade-up" delay={0.4}>
              <div className="flex gap-4 pt-4 ">
                <Link
                  href="/courses"
                  className="btn btn-primary text-lg px-8 py-3 shadow-lg hover:shadow-xl transition-all"
                >
                  Start Course
                </Link>
                <Link href="/courses" className="btn btn-primary text-lg px-8 py-3 ">
                  View All Courses
                </Link>
              </div>
            </AnimationWrapper>
            {/* show people in it */}

            <AnimationWrapper animation="fade-up" delay={0.5}>
              <div className="pt-8 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-full bg-emerald-${i}00 border-2 border-white`}
                    ></div>
                  ))}
                </div>
                <span>Building 10 Lakhs worth of labs for 50 schools for free!</span>
              </div>
            </AnimationWrapper>
          </div>

          <AnimationWrapper
            animation="scale-in"
            delay={0.3}
            className="relative h-[400px] lg:h-[500px]"
          >
            <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-white/10 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              {/* Using the generated image */}
              <img
                src="/hero-ngo.png"
                alt="Happy students learning robotics"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </AnimationWrapper>
        </div>
      </section>

      {/* Features Section */}
      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-transparent relative overflow-hidden">
        {/* Decorative Icons */}
        <div className="absolute top-10 right-10 opacity-5 animate-spin-slow pointer-events-none">
          <Code size={100} className="text-slate-400" />
        </div>
        <div className="absolute bottom-10 left-10 opacity-5 animate-float pointer-events-none">
          <Cpu size={80} className="text-emerald-400" />
        </div>

        <div className="container relative z-10">
          <AnimationWrapper className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-4 text-emerald-900 dark:text-emerald-400">Our Mission</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              At Thinkersklub, we believe every child deserves access to the future of technology.
              Our mission is to bring affordable, hands-on education in AI, Robotics, and Drone
              Technology to Tier 2-3 cities and villages, empowering students to dream bigger and
              achieve more.
            </p>
          </AnimationWrapper>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '💰',
                title: 'Affordable',
                desc: 'Technology education that doesn’t cost a fortune.',
              },
              {
                icon: '🛠️',
                title: 'Practical',
                desc: 'Hands-on labs, projects, and competitions.',
              },
              { icon: '🚀', title: 'Future Ready', desc: 'Programs that shape the future.' },
            ].map((f, i) => (
              <AnimationWrapper key={i} delay={i * 0.1} className="h-full">
                <div className="h-full card p-8 bg-white dark:bg-white/5 border-emerald-100 hover:border-emerald-300 transition-colors shadow-sm hover:shadow-md">
                  <div className="text-4xl mb-4">{f.icon}</div>
                  <h3 className="text-xl mb-2 font-bold text-emerald-800 dark:text-emerald-400">
                    {f.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{f.desc}</p>
                </div>
              </AnimationWrapper>
            ))}
          </div>

          <div className="mt-16 text-center">
            <AnimationWrapper>
              <h3 className="text-2xl font-bold text-emerald-900 dark:text-emerald-400 mb-8">
                What We Offer
              </h3>
            </AnimationWrapper>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                'AI & Robotics Lab',
                'Industry Best Trainers',
                'Curriculum',
                'LMS',
                'Explore Labs',
              ].map((item, i) => (
                <AnimationWrapper key={i} delay={0.2 + i * 0.05}>
                  <div className="p-4 bg-white dark:bg-white/5 rounded-xl shadow-sm border border-emerald-50 dark:border-white/10 font-medium text-emerald-800 dark:text-emerald-300 hover:-translate-y-1 transition-transform cursor-default">
                    {item}
                  </div>
                </AnimationWrapper>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="container">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="mb-2">Popular Courses</h2>
              <p>Designed for ages 8-16</p>
            </div>
            <Link
              href="/courses"
              className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline"
            >
              View All →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {popularCourses.map((course, idx) => (
              <AnimationWrapper key={idx} delay={idx * 0.1}>
                <CourseCard {...course} />
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-transparent relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
          <Rocket size={400} className="text-slate-900 dark:text-white" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="mb-4 text-emerald-900 dark:text-emerald-400">Trusted by Thousands</h2>
            <p className="text-slate-600 dark:text-slate-300">See what our community has to say</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <AnimationWrapper delay={0.1}>
              <Testimonial
                name="Dr. Ajay Kumar Tiwari"
                role="Principal"
                quote="Thinkersklub has sparked innovation in our students like never before. Their hands-on AI and Robotics labs make learning truly exciting."
              />
            </AnimationWrapper>
            <AnimationWrapper delay={0.2}>
              <Testimonial
                name="Mrs. Anita Singh Pradhan"
                role="Chairman"
                quote="Our students now learn technology by doing, not just reading. Thinkersklub’s approach has brought real curiosity into our classrooms."
              />
            </AnimationWrapper>
            <AnimationWrapper delay={0.3}>
              <Testimonial
                name="Mrs. Sonali Gupta"
                role="Director"
                quote="Affordable, inspiring, and world-class — Thinkersklub makes future tech education possible even in small towns like ours."
              />
            </AnimationWrapper>
            <AnimationWrapper delay={0.4}>
              <Testimonial
                name="Dr. (Mrs) Deepa Roy Chowdhury"
                role="Principal"
                quote="Thinkersklub is shaping tomorrow’s innovators today. Our students eagerly await every session with pure excitement."
              />
            </AnimationWrapper>
          </div>
        </div>
      </section>
    </div>
  );
}
