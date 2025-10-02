"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#0f1216] text-white border-b border-amber-600/70">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8 h-10 sm:h-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 sm:gap-3">
          <Image src="/image8.png" alt="Developer.X Logo" width={32} height={28} className="sm:w-[45px] sm:h-[40px]" />
          <div className="flex flex-col">
            <span className="text-white font-bold text-sm sm:text-lg">Developer.X</span>
            <span className="text-[10px] sm:text-xs text-gray-400">Tech Company</span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-[11px] text-neutral-300">
          <Link href="/" className="hover:text-white">Home</Link>
          <Link href="/articles" className="hover:text-white">Articles</Link>
          <Link href="/categories" className="hover:text-white">Categories</Link>
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </nav>

        <div className="flex items-center gap-3">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-neutral-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Search Bar */}
          <div className="relative hidden sm:block">
            <input
              className="w-32 sm:w-44 md:w-60 rounded-full bg-white text-[10px] sm:text-[11px] placeholder:text-neutral-500 text-neutral-900 pl-6 sm:pl-8 pr-2 sm:pr-3 py-1 sm:py-1.5 outline-none ring-1 ring-neutral-300 focus:ring-amber-500/70"
              placeholder="Search articles..."
            />
            <svg className="absolute left-2 sm:left-2.5 top-1 sm:top-1.5 h-3 w-3 sm:h-4 sm:w-4 text-neutral-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
            </svg>
          </div>

          {/* Social Icons */}
          <a href="#" className="hidden md:inline-flex text-neutral-300 hover:text-white" aria-label="GitHub">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.07-.74.08-.73.08-.73 1.18.08 1.8 1.21 1.8 1.21 1.05 1.8 2.75 1.28 3.42.98.11-.76.41-1.28.75-1.58-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.58.23 2.75.11 3.04.75.81 1.2 1.84 1.2 3.1 0 4.43-2.69 5.39-5.25 5.67.42.36.8 1.07.8 2.17 0 1.57-.01 2.84-.01 3.23 0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" clipRule="evenodd"/>
            </svg>
          </a>
          <a href="#" className="hidden md:inline-flex text-neutral-300 hover:text-white" aria-label="Twitter">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2H21.5l-7.5 8.571L22.75 22h-6.01l-4.7-5.657L6.5 22H3.244l8.06-9.2L1.5 2h6.135l4.31 5.143L18.244 2Zm-1.053 18h1.676L7.09 4h-1.7l11.8 16Z"/>
            </svg>
          </a>
          <a href="#" className="hidden md:inline-flex text-neutral-300 hover:text-white" aria-label="LinkedIn">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>

        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0f1216] border-t border-neutral-700">
          <nav className="px-4 py-3 space-y-2">
            <Link href="/" className="block text-[11px] text-neutral-300 hover:text-white py-2" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link href="/articles" className="block text-[11px] text-neutral-300 hover:text-white py-2" onClick={() => setIsMobileMenuOpen(false)}>Articles</Link>
            <Link href="/categories" className="block text-[11px] text-neutral-300 hover:text-white py-2" onClick={() => setIsMobileMenuOpen(false)}>Categories</Link>
            <Link href="/about" className="block text-[11px] text-neutral-300 hover:text-white py-2" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <Link href="/contact" className="block text-[11px] text-neutral-300 hover:text-white py-2" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}


