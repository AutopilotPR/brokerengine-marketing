'use client';

import { useState } from 'react';
import { Check, Menu, X } from 'lucide-react';

const FEATURES = [
  '500 prospects/mo — Apollo included, we cover the cost',
  'Secure deal room + NDA e-sign',
  'AI CIM generator (Claude Sonnet — structured sections, your voice)',
  'Valuation calculators: SaaS, ecommerce, services, content site',
  'HOT / WARM / COLD reply classification',
  'HOT lead alerts (Discord + SMS)',
  'Buyer database + deal matching',
  'Leads-for-sale referral marketplace',
  'AI operator / assistant (knows your live deals)',
  'Competitor intel feed',
  'Connect your own Instantly account for outreach',
  'White-glove onboarding for founding brokers',
];

export default function Pricing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 h-[60px] flex items-center justify-between">
          <a href="/" className="font-bold text-xl text-black">
            BrokerEngine
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-sm text-gray-600 hover:text-black">Product</a>
            <a href="/pricing" className="text-sm text-gray-600 hover:text-black font-medium">Pricing</a>
            <a href="/login" className="text-sm text-gray-600 hover:text-black">Login</a>
            <a href="/signup" className="px-6 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-900">
              Apply for founding access
            </a>
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Header */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-black text-white rounded-full text-xs font-semibold">
            Now accepting founding brokers — 5 slots
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-4">
            $200/mo.<br />
            <span className="text-gray-400">Everything included.</span>
          </h1>
          <p className="text-xl text-gray-500 mb-4 max-w-2xl mx-auto">
            One plan. Replaces the $481–$742/mo stack brokers assemble themselves — deal room, CRM, CIM writer, outreach, e-sign — in one login.
          </p>
          <p className="text-sm text-gray-400 mb-10">
            This is the founding broker price. It locks in for life for the first 5 brokers. It will go up after launch.
          </p>
        </div>
      </section>

      {/* Single Pricing Card */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-lg">
          <div className="rounded-2xl border-2 border-black bg-black text-white p-10 relative">
            <div className="absolute -top-4 left-8 bg-white text-black px-4 py-1 rounded-full text-xs font-bold">
              Founding broker price
            </div>

            <div className="mb-8">
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-2">BrokerEngine</p>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-6xl font-bold">$200</span>
                <span className="text-gray-400">/month</span>
              </div>
              <p className="text-sm text-gray-400">Locked for life for founding brokers. Will rise post-launch.</p>
            </div>

            <a
              href="/signup"
              className="w-full block text-center px-6 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-100 transition mb-10 text-base"
            >
              Apply for founding access
            </a>

            <div className="space-y-4">
              {FEATURES.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <Check size={16} className="text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-200">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stack comparison callout */}
          <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-6">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">What this replaces</p>
            <div className="space-y-2 text-sm">
              {[
                { tool: 'Secure deal room (ShareVault / SecureDocs)', price: '$160–$250/mo' },
                { tool: 'CRM / pipeline (Pipedrive / HubSpot)', price: '$39–$90/mo' },
                { tool: 'Cold outreach (Instantly / Lemlist)', price: '$94/mo' },
                { tool: 'Prospect database (Apollo)', price: '$49–$99/mo' },
                { tool: 'E-sign / NDA (DocuSign / PandaDoc)', price: '$19–$30/mo' },
                { tool: 'AI CIM writer (Deliverables.ai / ChatGPT)', price: '$20–$179/mo' },
              ].map((item) => (
                <div key={item.tool} className="flex justify-between items-center">
                  <span className="text-gray-600">{item.tool}</span>
                  <span className="text-gray-500 font-medium ml-4 flex-shrink-0">{item.price}</span>
                </div>
              ))}
              <div className="border-t border-gray-200 pt-2 mt-2 flex justify-between items-center font-bold">
                <span className="text-black">Stack total (without buyer matching)</span>
                <span className="text-black">$481–$742/mo</span>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              No credit card required to apply. Apollo prospecting is included — we cover the cost. Bring your own Instantly API key for email sequences.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 px-6">
        <div className="mx-auto max-w-7xl flex justify-between items-center">
          <p className="font-bold text-black">BrokerEngine</p>
          <div className="flex gap-8 text-sm text-gray-600">
            <a href="/" className="hover:text-black">Product</a>
            <a href="/pricing" className="hover:text-black">Pricing</a>
            <a href="/login" className="hover:text-black">Login</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
