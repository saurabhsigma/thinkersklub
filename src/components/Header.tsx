'use client';
import Link from 'next/link';
import React from 'react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight text-gradient">
          ThinkersKlub
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {[
            ['Home', '/'],
            ['Products', '/products'],
            ['Pricing', '/pricing'],
            ['About', '/about'],
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
            href="/contact"
            className="btn btn-primary text-sm py-2 px-4 shadow-none doodle-shadow hover:shadow-none transition-all"
          >
            Book a Demo
          </Link>
        </div>
      </div>
    </header>
  );
}
