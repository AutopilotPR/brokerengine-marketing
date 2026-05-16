'use client';

import { useState } from 'react';
import { Check, Menu, X, ChevronRight } from 'lucide-react';

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const prices = {
    starter: { monthly: 499, annual: 399 },
    pro: { monthly: 1299, annual: 1039 },
  };

  const starterFeatures = [
    '1 seat',
    'AI content engine (blog, LinkedIn, Quora)',
    'AI Visibility Score (weekly)',
    'Basic pipeline dashboard',
    'Voice profile setup',
    'Email support',
  ];

  const proFeatures = [
    '3 seats',
    'Everything in Starter',
    'Cold outreach machine (Instantly)',
    'Hot lead detection + SMS alerts',
    'AI reply classification + drafts',
    'GHL CRM sync (full pipeline)',
    'Buyer database + deal matching',
    'Pre-meeting deal briefs',
    'Podcast booking (PodMatch)',
    'Newsletter (Beehiiv)',
    'Priority support',
  ];

  const enterpriseFeatures = [
    'Unlimited seats',
    'White-label (your brand)',
    'Dedicated agent infrastructure',
    'Custom outreach sequences',
    'Full buyer DB matching',
    'Competitor intelligence suite',
    'SLA + dedicated CSM',
  ];

  return (
    <div className="w-full bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 h-[60px] flex items-center justify-between">
          <a href="/" className="font-bold text-xl text-black">
            BrokerEngine
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="/pricing" className="text-sm text-gray-600 hover:text-black font-medium">
              Pricing
            </a>
            <a href="/login" className="text-sm text-gray-600 hover:text-black">
              Login
            </a>
            <button className="px-6 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-900">
              Request access
            </button>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-4">
            Less than the sum of the parts.
          </h1>
          <p className="text-xl text-gray-500 mb-10">
            Replace Apollo, Instantly, GHL, Beehiiv, PodMatch, and your VA — for one flat price.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-6 mb-12">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`text-sm font-medium ${
                billingPeriod === 'monthly'
                  ? 'text-black'
                  : 'text-gray-500'
              }`}
            >
              Monthly
            </button>
            <div className="relative w-16 h-8 bg-gray-200 rounded-full cursor-pointer" onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'annual' : 'monthly')}>
              <div
                className={`absolute top-1 w-6 h-6 bg-black rounded-full transition-transform ${
                  billingPeriod === 'annual' ? 'translate-x-8' : 'translate-x-1'
                }`}
              ></div>
            </div>
            <button
              onClick={() => setBillingPeriod('annual')}
              className={`text-sm font-medium ${
                billingPeriod === 'annual'
                  ? 'text-black'
                  : 'text-gray-500'
              }`}
            >
              Annual <span className="text-green-600 ml-2 text-xs">Save 20%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="rounded-2xl border border-gray-200 p-8 bg-white hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-black mb-2">Starter</h3>
              <p className="text-gray-500 mb-6 text-sm">Content + visibility on autopilot</p>
              <div className="mb-8">
                <p className="text-4xl font-bold text-black">
                  ${billingPeriod === 'monthly' ? prices.starter.monthly : prices.starter.annual}
                </p>
                <p className="text-sm text-gray-500">/month</p>
                {billingPeriod === 'annual' && (
                  <p className="text-xs text-gray-400 mt-1">Billed annually</p>
                )}
              </div>
              <button className="w-full px-6 py-3 border-2 border-black text-black rounded-full font-medium hover:bg-black hover:text-white transition mb-8">
                Get started
              </button>
              <div className="space-y-4">
                {starterFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check size={18} className="text-black flex-shrink-0" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pro - Featured */}
            <div className="rounded-2xl border-2 border-black p-8 bg-black text-white hover:shadow-xl transition relative">
              <div className="absolute -top-4 left-6 bg-white text-black px-4 py-1 rounded-full text-xs font-bold">
                Most popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <p className="text-gray-300 mb-6 text-sm">Full revenue operation on autopilot</p>
              <div className="mb-8">
                <p className="text-4xl font-bold">
                  ${billingPeriod === 'monthly' ? prices.pro.monthly : prices.pro.annual}
                </p>
                <p className="text-sm text-gray-400">/month</p>
                {billingPeriod === 'annual' && (
                  <p className="text-xs text-gray-300 mt-1">Billed annually</p>
                )}
              </div>
              <button className="w-full px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition mb-8">
                Start free trial
              </button>
              <div className="space-y-4">
                {proFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check size={18} className="text-white flex-shrink-0" />
                    <span className="text-sm text-gray-200">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enterprise */}
            <div className="rounded-2xl border border-gray-200 p-8 bg-white hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-black mb-2">Enterprise</h3>
              <p className="text-gray-500 mb-6 text-sm">White-label for broker networks</p>
              <div className="mb-8">
                <p className="text-3xl font-bold text-black">Custom</p>
                <p className="text-sm text-gray-500">Contact sales for pricing</p>
              </div>
              <button className="w-full px-6 py-3 border-2 border-black text-black rounded-full font-medium hover:bg-black hover:text-white transition mb-8">
                Talk to sales
              </button>
              <div className="space-y-4">
                {enterpriseFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check size={18} className="text-black flex-shrink-0" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 px-6">
        <div className="mx-auto max-w-7xl flex justify-between items-center">
          <p className="font-bold text-black">BrokerEngine</p>
          <div className="flex gap-8 text-sm text-gray-600">
            <a href="/" className="hover:text-black">
              Product
            </a>
            <a href="/pricing" className="hover:text-black">
              Pricing
            </a>
            <a href="/login" className="hover:text-black">
              Login
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
