'use client';
import React from 'react';
import AnimationWrapper from '@/components/AnimationWrapper';
import { Mail, MapPin, Phone, Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <main className="container site-main py-12 md:py-20 relative overflow-hidden">
      {/* Background doodles could go here if implemented as absolute SVGs */}

      <AnimationWrapper className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 relative inline-block">
          <span className="relative z-10">Get in Touch</span>
          <span className="absolute -bottom-2 left-0 w-full h-4 bg-yellow-200/50 -rotate-1 rounded-full -z-0"></span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Have a question? We'd love to hear from you. Send us a message and we'll respond as soon
          as possible.
        </p>
      </AnimationWrapper>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
        {/* Contact Info Side */}
        <AnimationWrapper animation="slide-in-left" className="h-full">
          <div
            className="doodle-border doodle-border-emerald h-full 
                    bg-gray-50 dark:bg-slate-800/50 p-8 md:p-12 
                    relative overflow-hidden group hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none transform group-hover:scale-110 transition-transform duration-500">
              <Mail size={120} strokeWidth={1} />
            </div>

            <h3 className="text-3xl font-bold mb-8 text-neutral-800 dark:text-white">
              Contact Information
            </h3>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="bg-emerald-100 dark:bg-emerald-600/20 p-3 rounded-xl rotate-3">
                  <MapPin className="text-emerald-600 dark:text-emerald-400" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-neutral-800 dark:text-white mb-1">
                    Our Location
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
                    Phone Number
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
                    Email Address
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
              <h4 className="font-bold text-lg text-neutral-800 dark:text-white mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full 
                                          bg-gray-100 dark:bg-slate-900 flex items-center justify-center
                                          text-slate-500 dark:text-slate-300 hover:bg-emerald-500 hover:text-white 
                                          transition-all transform hover:-translate-y-1 doodle-shadow hover:shadow-none border border-gray-200 dark:border-slate-700"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </AnimationWrapper>

        {/* Form Side */}
        <AnimationWrapper animation="slide-in-right" delay={0.2} className="h-full">
          <div className="bg-gray-50 dark:bg-slate-800/50 p-8 md:p-12 rounded-[2rem] shadow-2xl shadow-emerald-900/5 border border-gray-200 dark:border-slate-700 relative h-full">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-slate-900 dark:text-white">
              <span className="w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center text-sm">
                <Send size={16} />
              </span>
              Send us a Message
            </h3>

            <form action="#" onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {['Name', 'Email'].map((label, idx) => (
                  <div key={idx} className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">
                      {label}
                    </label>
                    <input
                      type={label === 'Email' ? 'email' : 'text'}
                      placeholder={label === 'Email' ? 'john@example.com' : 'John Doe'}
                      className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-slate-900 text-slate-700 dark:text-white
                          border-2 border-transparent focus:bg-white dark:focus:bg-slate-700 focus:border-emerald-400 focus:outline-none
                          transition-all duration-200 font-medium"
                    />
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-slate-900 text-slate-700 dark:text-white
                      border-2 border-transparent focus:bg-white dark:focus:bg-slate-700 focus:border-emerald-400 focus:outline-none
                      transition-all duration-200 font-medium"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us more about your inquiry..."
                  className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-slate-900 text-slate-700 dark:text-white
                      border-2 border-transparent focus:bg-white dark:focus:bg-slate-700 focus:border-emerald-400 focus:outline-none
                      transition-all duration-200 font-medium resize-none"
                />
              </div>

              <button className="btn-doodle w-full mt-4 flex items-center justify-center gap-2 group">
                Send Message
                <Send
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </button>
            </form>
          </div>
        </AnimationWrapper>
      </div>

      <AnimationWrapper animation="fade-up" delay={0.4} className="mt-20">
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-[2.5rem] p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-emerald-900/20">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat"></div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
              Join the ThinkersKlub Community
            </h3>
            <p className="text-emerald-50 text-lg mb-8 opacity-90">
              Empowering young minds through innovation, nurturing creativity, and shaping the
              future details.
            </p>
            <a
              href="/subscribe"
              className="inline-block bg-white text-emerald-800 font-bold py-4 px-10 rounded-full shadow-[0_10px_0_rgb(6,95,70)] active:shadow-[0_4px_0_rgb(6,95,70)] active:translate-y-1.5 transition-all hover:-translate-y-1 text-lg"
            >
              Subscribe & Save
            </a>
          </div>
        </div>
      </AnimationWrapper>
    </main>
  );
}
