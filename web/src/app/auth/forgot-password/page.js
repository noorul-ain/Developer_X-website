'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Trust from '../../components/Trust';
import Recommended from '../../components/Recommended';
import LatestGrid from '../../components/LatestGrid';
import Footer from '../../components/Footer';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
    if (error) setError('');
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email) {
      setError('Email is required');
      return;
    }
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    // Handle forgot password logic here
    console.log('Reset password for:', email);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
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
          <div className="w-full max-w-md flex justify-center">
            {/* Success Card */}
            <div className="bg-[#f6efe1] rounded-2xl shadow-2xl p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Check your email</h2>
              <p className="text-gray-600 mb-6">
                We've sent a password reset link to <strong>{email}</strong>
              </p>
              <p className="text-sm text-gray-500 mb-6">
                Didn't receive the email? Check your spam folder or{' '}
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-blue-600 hover:text-blue-500 underline"
                >
                  try again
                </button>
              </p>
              <Link 
                href="/auth/signin"
                className="inline-block bg-[#DF8E3D] hover:bg-[#C77A2F] text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Back to Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
        <div className="w-full max-w-md flex justify-center">
          {/* Form Card */}
          <div className="bg-[#f6efe1] rounded-2xl shadow-2xl p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Forgot your password?</h2>
              <p className="text-gray-600">
                No worries! Enter your email address and we'll send you a link to reset your password.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 bg-gray-100 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors ${
                      error ? 'ring-2 ring-red-500' : ''
                    }`}
                    placeholder="Enter your email address"
                  />
                </div>
                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#DF8E3D] hover:bg-[#C77A2F] text-white font-medium py-3 px-4 rounded-lg transition-colors"
              >
                Send Reset Link
              </button>
            </form>

            {/* Back to Sign In */}
            <div className="text-center mt-6">
              <Link 
                href="/auth/signin"
                className="text-blue-600 hover:text-blue-500 text-sm"
              >
                ← Back to Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
