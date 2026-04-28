import React from 'react';
import AnimationWrapper from './AnimationWrapper';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container relative z-10">
        <div className="footer-grid">
          <AnimationWrapper className="footer-brand">
            <div className="logo text-slate-950 dark:text-white font-black text-2xl tracking-tight rotate-1">
              ThinkersKlub
            </div>
            <p className="brand-desc border-l-4 border-emerald-400 pl-4 my-4 font-handwriting text-slate-700 dark:text-slate-300">
              ThinkersKlub builds professional software for schools through an integrated suite that includes TestWest, LMS, Parent Teacher App, and ERP.
            </p>
          </AnimationWrapper>

          <AnimationWrapper delay={0.1} className="footer-col">
            <h4 className="text-slate-950 dark:text-white">Products</h4>
            <ul>
              <li>TestWest</li>
              <li>LMS</li>
              <li>Parent Teacher App</li>
              <li>ERP</li>
            </ul>
          </AnimationWrapper>

          <AnimationWrapper delay={0.2} className="footer-col">
            <h4 className="text-slate-950 dark:text-white">Use Cases</h4>
            <ul>
              <li>School assessments</li>
              <li>Digital learning delivery</li>
              <li>Parent communication</li>
              <li>Administrative workflows</li>
            </ul>
          </AnimationWrapper>

          <AnimationWrapper delay={0.3} className="footer-col">
            <h4 className="text-slate-950 dark:text-white">Get In Touch</h4>
            <address>
              Lucknow, Uttar Pradesh, India
              <br />
              <a href="tel:+916306244508">+91 6306244508</a>
              <br />
              <a href="mailto:info@thinkersklub.in">info@thinkersklub.in</a>
            </address>
          </AnimationWrapper>
        </div>

        <div className="footer-bottom">
          <small>Copyright © 2026 ThinkersKlub</small>
          <small>School software for modern institutions</small>
        </div>
      </div>
    </footer>
  );
}
