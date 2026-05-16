'use client';

import { ChevronRight } from 'lucide-react';

export default function Signup() {
  return (
    <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-2xl border border-gray-200 p-10 shadow-sm">
          {/* Logo */}
          <div className="text-center mb-8">
            <p className="font-bold text-2xl text-black">BrokerEngine</p>
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-bold text-black mb-8 text-center">
            Create your account
          </h1>

          {/* Form */}
          <div className="space-y-4 mb-6">
            <input
              type="text"
              placeholder="Full name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            />
            <input
              type="email"
              placeholder="Work email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            />
          </div>

          {/* Create Account Button */}
          <button className="w-full px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-900 transition mb-6">
            Create account
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 border-t border-gray-200"></div>
            <p className="text-sm text-gray-500">or</p>
            <div className="flex-1 border-t border-gray-200"></div>
          </div>

          {/* Sign In Link */}
          <div className="text-center mb-8">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <a href="/login" className="text-black font-medium hover:underline inline-flex items-center gap-1">
                Sign in <ChevronRight size={16} />
              </a>
            </p>
          </div>

          {/* Legal Copy */}
          <p className="text-xs text-gray-500 text-center">
            By creating an account, you agree to our{' '}
            <a href="#" className="text-black hover:underline">
              Terms
            </a>{' '}
            and{' '}
            <a href="#" className="text-black hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
