'use client';
import React, { useState } from 'react';
import AnimationWrapper from '@/components/AnimationWrapper';
import CourseCard from '@/components/CourseCard';
import { Send, BookOpen } from 'lucide-react';

export default function CoursesPage() {
  const courses = [
    {
      title: 'Junior Robotics Master',
      description: 'Build your first robot using Arduino. Learn sensors, motors, and basic coding.',
      level: 'Beginner (Age 8-12)',
      color: 'from-emerald-400 to-teal-500',
    },
    {
      title: 'AI for Young Minds',
      description: 'Understand how computers think. Create simple AI models and chat bots.',
      level: 'Intermediate (Age 10+)',
      color: 'from-purple-400 to-indigo-500',
    },
    {
      title: 'Drone Pilot 101',
      description: 'Learn the physics of flight and pilot micro-drones through obstacle courses.',
      level: 'Beginner (Age 10+)',
      color: 'from-orange-400 to-red-500',
    },
    {
      title: 'IoT Home Automation',
      description: 'Smart homes start here. Control lights and fans with your phone.',
      level: 'Advanced (Age 12+)',
      color: 'from-blue-400 to-cyan-500',
    },
    {
      title: '3D Printing & Design',
      description: 'Bring your imagination to life. Design and print your own toys and parts.',
      level: 'Beginner (Age 8+)',
      color: 'from-pink-400 to-rose-500',
    },
    {
      title: 'Coding with Python',
      description: 'The language of AI. Master the basics of Python programming.',
      level: 'Intermediate (Age 12+)',
      color: 'from-yellow-400 to-amber-500',
    },
  ];

  const [formData, setFormData] = useState({
    name: '',
    course: 'Junior Robotics Master',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Course Enrollment Inquiry: ${formData.course}`;
    const body = `Name: ${formData.name}%0D%0ACourse: ${formData.course}%0D%0AMessage: ${formData.message}`;
    window.location.href = `mailto:saurabh962003@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container">
        {/* Header */}
        <section className="mb-16 text-center max-w-3xl mx-auto">
          <AnimationWrapper>
            <div className="badge badge-primary mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-800 font-semibold text-sm">
              <BookOpen size={18} /> Our Curriculum
            </div>
            <h1 className="text-5xl font-black text-slate-900 dark:text-white mb-6">
              Explore Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
                Curriculum
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Hands-on, project-based courses designed to spark curiosity and build real-world
              skills.
            </p>
          </AnimationWrapper>
        </section>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {courses.map((course, idx) => (
            <AnimationWrapper key={idx} delay={idx * 0.1}>
              <CourseCard {...course} />
            </AnimationWrapper>
          ))}
        </div>

        {/* Enrollment Form */}
        <section className="max-w-2xl mx-auto relative">
          <div className="absolute top-10 -left-10 text-6xl animate-bounce hidden lg:block">👇</div>

          <AnimationWrapper
            animation="fade-up"
            className="card doodle-shadow-purple 
                      bg-indigo-50 dark:bg-slate-800/50 
                      border-indigo-200 dark:border-indigo-500/30"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                Enroll Today
              </h2>
              <p className="text-slate-600 dark:text-slate-300">
                Interested in a course? Send us a message directly!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full p-3 rounded-xl border-2 border-slate-300 dark:border-slate-700
                            bg-indigo-50 dark:bg-slate-900 text-slate-900 dark:text-white
                            focus:border-indigo-500 outline-none transition-colors"
                  placeholder="Student Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                  Select Course
                </label>
                <select
                  className="w-full p-3 rounded-xl border-2 border-slate-300 dark:border-slate-700
                            bg-indigo-50 dark:bg-slate-900 text-slate-900 dark:text-white
                            focus:border-indigo-500 outline-none transition-colors"
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                >
                  {courses.map((c) => (
                    <option key={c.title} value={c.title}>
                      {c.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  className="w-full p-3 rounded-xl border-2 border-slate-300 dark:border-slate-700
                            bg-indigo-50 dark:bg-slate-900 text-slate-900 dark:text-white
                            focus:border-indigo-500 outline-none transition-colors h-32 resize-none"
                  placeholder="Any specific questions or preferred batch timings?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn btn-primary py-4 text-lg items-center gap-3"
              >
                <Send size={20} /> Send Inquiry
              </button>

              <p className="text-center text-xs text-slate-500 mt-4">
                This will open your default email client to send a message to
                saurabh962003@gmail.com
              </p>
            </form>
          </AnimationWrapper>
        </section>
      </div>
    </div>
  );
}
