import Link from 'next/link';
import React from 'react';
import AnimationWrapper from './AnimationWrapper';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid relative z-10">
        <AnimationWrapper className="footer-brand">
          <div className="logo dark:text-white font-black text-2xl tracking-tight rotate-1">
            ThinkersKlub
          </div>
          <p className="brand-desc border-l-4 border-emerald-400 pl-4 my-4 font-handwriting">
            ThinkersKlub is a community-driven initiative bringing affordable, hands-on AI,
            Robotics, and STEM education to schools across India.
          </p>
        </AnimationWrapper>

        <AnimationWrapper delay={0.1} className="footer-col">
          <h4 className="dark:text-white">Learning Path</h4>
          <ul>
            <li>AI & Robotics</li>
            <li>Drone Technology</li>
            <li>IoT & Electronics</li>
            <li>3D Printing</li>
          </ul>
        </AnimationWrapper>

        <AnimationWrapper delay={0.2} className="footer-col">
          <h4 className="dark:text-white">Topics</h4>
          <ul>
            <li>Arduino</li>
            <li>Raspberry Pi</li>
            <li>Python for AI</li>
            <li>Circuit Design</li>
          </ul>
        </AnimationWrapper>

        <AnimationWrapper delay={0.3} className="footer-col">
          <h4 className="dark:text-white">Get In Touch</h4>
          <address>
            Gorabarik, Sultanpur, Uttar Pradesh 228001
            <br />
            <a href="tel:+916306244508">+91 6306244508</a>
            <br />
            <a href="mailto:info@thinkersklub.in">info@thinkersklub.in</a>
          </address>
        </AnimationWrapper>
      </div>

      <div className="footer-bottom">
        <small>Copyright © 2025 Thinkersklub</small>
        <small>Powered by Thinkersklub</small>
      </div>
    </footer>
  );
}
