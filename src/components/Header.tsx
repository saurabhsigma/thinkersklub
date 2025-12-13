'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="site-header">
      <div className="container h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight text-gradient">
          ThinkersKlub
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {[
            ['Home', '/'],
            ['Courses', '/courses'],
            ['About', '/about'],
            ['Shop', '/shop'],
            ['Contact', '/contact'],
          ].map(([label, href]) => (
            <Link key={href} href={href} className="nav-link">
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/courses"
            className="btn btn-primary text-sm py-2 px-4 shadow-none doodle-shadow hover:shadow-none transition-all"
          >
            Start Learning
          </Link>
        </div>
      </div>
    </header>
  );
}
