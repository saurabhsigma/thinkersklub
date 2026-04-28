'use client';
import React, { useMemo, useState } from 'react';
import AnimationWrapper from '@/components/AnimationWrapper';
import { Building2, Mail, MapPin, Phone, Send, ShieldCheck } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [message, setMessage] = useState('');

  const mailtoHref = useMemo(() => {
    const subject = organization
      ? `School software enquiry from ${organization}`
      : 'School software enquiry from website';

    const body = [
      `Name: ${name || '-'}`,
      `Email: ${email || '-'}`,
      `School / Organization: ${organization || '-'}`,
      '',
      'Requirement:',
      message || '-',
    ].join('\n');

    return `mailto:info@thinkersklub.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [email, message, name, organization]);

  return (
    <main className="container site-main py-12 md:py-20 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.12),transparent_55%)] pointer-events-none" />

      <AnimationWrapper className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 relative inline-block">
          <span className="relative z-10">Contact ThinkersKlub</span>
          <span className="absolute -bottom-2 left-0 w-full h-4 bg-emerald-200/60 -rotate-1 rounded-full z-0"></span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Speak with us about TestWest, LMS, Parent Teacher App, ERP, or a full-school software rollout.
        </p>
      </AnimationWrapper>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
        <AnimationWrapper animation="slide-in-left" className="h-full">
          <div className="doodle-border doodle-border-emerald h-full bg-gray-50 dark:bg-slate-800/50 p-8 md:p-12 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none transform group-hover:scale-110 transition-transform duration-500">
              <Building2 size={120} strokeWidth={1} />
            </div>

            <h3 className="text-3xl font-bold mb-8 text-neutral-800 dark:text-white">
              Sales and onboarding
            </h3>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="bg-emerald-100 dark:bg-emerald-600/20 p-3 rounded-xl rotate-3">
                  <MapPin className="text-emerald-600 dark:text-emerald-400" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-neutral-800 dark:text-white mb-1">
                    Location
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Lucknow, Uttar Pradesh, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-purple-100 dark:bg-purple-600/20 p-3 rounded-xl -rotate-2">
                  <Phone className="text-purple-600 dark:text-purple-400" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-neutral-800 dark:text-white mb-1">
                    Call us
                  </h4>
                  <a
                    href="tel:+916306244508"
                    className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors"
                  >
                    +91 6306244508
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-amber-100 dark:bg-amber-600/20 p-3 rounded-xl rotate-1">
                  <Mail className="text-amber-600 dark:text-amber-400" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-neutral-800 dark:text-white mb-1">
                    Email
                  </h4>
                  <a
                    href="mailto:info@thinkersklub.in"
                    className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors"
                  >
                    info@thinkersklub.in
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t-2 border-dashed border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-lg text-neutral-800 dark:text-white mb-4">
                We can help with
              </h4>
              <div className="grid grid-cols-2 gap-3 text-sm text-slate-600 dark:text-slate-300">
                {[
                  'Product demonstrations',
                  'Pilot deployments',
                  'Institutional onboarding',
                  'Commercial discussions',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <ShieldCheck size={16} className="text-emerald-600" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimationWrapper>

        <AnimationWrapper animation="slide-in-right" delay={0.2} className="h-full">
          <div className="bg-gray-50 dark:bg-slate-800/50 p-8 md:p-12 rounded-4xl shadow-2xl shadow-emerald-900/5 border border-gray-200 dark:border-slate-700 relative h-full">
            <h3 className="text-2xl font-bold mb-3 flex items-center gap-3 text-slate-900 dark:text-white">
              <span className="w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center text-sm">
                <Send size={16} />
              </span>
              Send an enquiry
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              This will open your email client and address the message directly to info@thinkersklub.in.
            </p>

            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">
                    Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-slate-900 text-slate-700 dark:text-white border-2 border-transparent focus:bg-white dark:focus:bg-slate-700 focus:border-emerald-400 focus:outline-none transition-all duration-200 font-medium"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@school.com"
                    className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-slate-900 text-slate-700 dark:text-white border-2 border-transparent focus:bg-white dark:focus:bg-slate-700 focus:border-emerald-400 focus:outline-none transition-all duration-200 font-medium"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">
                  School / Organization
                </label>
                <input
                  type="text"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  placeholder="School or institution name"
                  className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-slate-900 text-slate-700 dark:text-white border-2 border-transparent focus:bg-white dark:focus:bg-slate-700 focus:border-emerald-400 focus:outline-none transition-all duration-200 font-medium"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">
                  Requirement
                </label>
                <textarea
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us which product you need, your approximate student strength, and what kind of rollout you are evaluating."
                  className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-slate-900 text-slate-700 dark:text-white border-2 border-transparent focus:bg-white dark:focus:bg-slate-700 focus:border-emerald-400 focus:outline-none transition-all duration-200 font-medium resize-none"
                />
              </div>

              <a href={mailtoHref} className="btn-doodle w-full mt-4 flex items-center justify-center gap-2 group">
                Email ThinkersKlub
                <Send
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </a>
            </form>
          </div>
        </AnimationWrapper>
      </div>

      <AnimationWrapper animation="fade-up" delay={0.4} className="mt-20">
        <div className="bg-linear-to-r from-emerald-500 to-teal-600 rounded-4xl p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-emerald-900/20">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat"></div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
              Planning a school-wide software rollout?
            </h3>
            <p className="text-emerald-50 text-lg mb-8 opacity-90">
              Reach us at info@thinkersklub.in or call +91 6306244508 to discuss demos, onboarding, and pricing.
            </p>
            <a
              href="mailto:info@thinkersklub.in"
              className="inline-block bg-white text-emerald-800 font-bold py-4 px-10 rounded-full shadow-[0_10px_0_rgb(6,95,70)] active:shadow-[0_4px_0_rgb(6,95,70)] active:translate-y-1.5 transition-all hover:-translate-y-1 text-lg"
            >
              Email us directly
            </a>
          </div>
        </div>
      </AnimationWrapper>
    </main>
  );
}
