'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Trust from '../components/Trust';
import Recommended from '../components/Recommended';
import LatestGrid from '../components/LatestGrid';
import Footer from '../components/Footer';

export default function AuthIndexPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const authPages = [
    {
      title: 'Sign In',
      description: 'Login to your Developer.X account',
      href: '/auth/signin',
      icon: '🔐',
      features: ['Email & Password', 'Remember Me', 'Social Login', 'Forgot Password']
    },
    {
      title: 'Sign Up',
      description: 'Create a new Developer.X account',
      href: '/auth/signup',
      icon: '👤',
      features: ['Full Name', 'Email', 'Password', 'Terms Agreement']
    },
    {
      title: 'Forgot Password',
      description: 'Reset your password',
      href: '/auth/forgot-password',
      icon: '🔑',
      features: ['Email Reset', 'Security Link', 'Quick Recovery']
    }
  ];

  const filteredPages = authPages.filter(page =>
    page.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    page.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    page.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen relative">
      {/* Blurred Background - Complete Homepage */}
      <div className="absolute inset-0 blur-sm">
        <div className="font-sans min-h-screen bg-white">
          <Navbar />
          <Hero />
          <Trust />
          <Recommended />
          <LatestGrid />
          <Footer />
        </div>
      </div>

      {/* Modal Overlay */}
      <div className="absolute inset-0 bg-black/20 flex items-center justify-center p-4">
        <div className="w-full max-w-4xl">
          {/* Auth Index Card */}
          <div className="bg-[#f6efe1] rounded-2xl shadow-2xl p-8">
            {/* Logo */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <div className="flex items-center">
                  <span className="text-4xl font-bold text-blue-600">D</span>
                  <span className="text-4xl font-bold text-orange-500">X</span>
                </div>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Developer.X</h1>
              <p className="text-lg text-gray-600">Authentication Center</p>
              <p className="text-gray-600 mt-3">
                Choose your authentication method or search for specific features
              </p>
            </div>

            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative max-w-md mx-auto">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-100 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
                  placeholder="Search authentication features..."
                />
              </div>
            </div>

            {/* Auth Pages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredPages.map((page, index) => (
                <Link
                  key={index}
                  href={page.href}
                  className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4">{page.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {page.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{page.description}</p>
                    
                    <div className="space-y-2">
                      {page.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                          <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4 text-blue-600 font-medium group-hover:text-blue-700">
                      Access {page.title} →
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* No Results */}
            {filteredPages.length === 0 && (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No Results Found</h3>
                <p className="text-gray-600">Try searching for different terms like "login", "signup", "password", etc.</p>
              </div>
            )}

            {/* Quick Links */}
            <div className="mt-8 pt-6 border-t border-gray-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Quick Links</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/auth/signin" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Sign In
                </Link>
                <Link href="/auth/signup" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  Sign Up
                </Link>
                <Link href="/auth/forgot-password" className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                  Reset Password
                </Link>
                <Link href="/" className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
