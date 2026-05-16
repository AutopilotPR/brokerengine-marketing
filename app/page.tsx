'use client';

import { useState } from 'react';
import { ChevronRight, Menu, X } from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 h-[60px] flex items-center justify-between">
          <div className="font-bold text-xl text-black">BrokerEngine</div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm text-gray-600 hover:text-black">
              Pricing
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-black">
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

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-block mb-8 px-4 py-2 bg-gray-100 rounded-full">
            <p className="text-sm text-gray-600 flex items-center gap-2">
              Now with AI agents <ChevronRight size={16} />
            </p>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
            The AI operating system for M&A advisors.
          </h1>
          <p className="text-lg text-gray-500 mb-10">
            Replace Apollo, Instantly, GHL, Beehiiv, PodMatch, and your VA with one platform that finds sellers, closes pipeline, and builds your brand — all on autopilot.
          </p>

          {/* CTA Form */}
          <div className="flex flex-col md:flex-row gap-3 justify-center mb-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-900 whitespace-nowrap">
              Request access
            </button>
          </div>
          <a href="#" className="text-sm text-gray-600 hover:text-black">
            Talk to sales <ChevronRight className="inline" size={16} />
          </a>
        </div>
      </section>

      {/* Logo Strip */}
      <section className="py-12 px-6 border-t border-b border-gray-100">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm text-gray-400 mb-8 text-center">
            Built on 75+ closed M&A transactions. Every broker who joins makes it smarter.
          </p>
          <div className="flex justify-center flex-wrap gap-12">
            {['Granola', 'Flow', 'Listen', 'Obvious', 'Modal', 'USV'].map((company) => (
              <p key={company} className="text-gray-400 text-sm font-medium">
                {company}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Feature 1: Ask Anything */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">
                Ask anything,{' '}
                <span className="text-gray-400">know everything.</span>
              </h2>
              <p className="text-gray-500 mb-6">
                Surface the right insight at the right moment. Every broker conversation, briefed before it starts.
              </p>
              <a
                href="#"
                className="text-black font-medium hover:underline inline-flex items-center gap-2"
              >
                Explore AI <ChevronRight size={18} />
              </a>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 dotted-grid min-h-[300px]">
              <div className="space-y-3">
                <div className="bg-white border border-gray-200 rounded-lg p-3 text-sm">
                  <p className="text-gray-600">What&apos;s the status of the Acme deal?</p>
                </div>
                <div className="bg-black text-white rounded-lg p-3 text-sm ml-auto w-3/4">
                  <p>Acme deal is in final review. Last update was 2h ago. They&apos;re waiting on your signature.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-3 text-sm">
                  <p className="text-gray-600">How many new leads came in this week?</p>
                </div>
                <div className="bg-black text-white rounded-lg p-3 text-sm ml-auto w-3/4">
                  <p>42 inbound leads. 8 are tier-1 fit. Apollo shows 3 past clients.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: Revenue Agents */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 dotted-grid min-h-[300px] order-2 md:order-1">
              <div className="space-y-4">
                <div className="border-l-4 border-black pl-4">
                  <p className="text-sm font-medium text-black">Trigger</p>
                  <p className="text-sm text-gray-500">Deal enters final review</p>
                </div>
                <div className="border-l-4 border-gray-300 pl-4">
                  <p className="text-sm font-medium text-black">Condition</p>
                  <p className="text-sm text-gray-500">Buyer hasn&apos;t signed in 48h</p>
                </div>
                <div className="border-l-4 border-gray-300 pl-4">
                  <p className="text-sm font-medium text-black">Action</p>
                  <p className="text-sm text-gray-500">Send SMS + Email reminder</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold mb-4">
                Revenue agents{' '}
                <span className="text-gray-400">at your command.</span>
              </h2>
              <p className="text-gray-500 mb-6">
                Agents work every account, capture every signal, move every deal forward.
              </p>
              <a
                href="#"
                className="text-black font-medium hover:underline inline-flex items-center gap-2"
              >
                Explore agents <ChevronRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: Stats */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Built for the <span className="text-gray-400">pace of agents.</span>
          </h2>
          <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
            BrokerEngine runs on infrastructure that keeps up with your volume. Millions of operations per day, zero latency.
          </p>

          <div className="border border-gray-200 rounded-2xl p-8">
            <div className="grid md:grid-cols-4 gap-8 divide-x divide-gray-200">
              <div>
                <p className="text-4xl font-bold text-black mb-2">384M</p>
                <p className="text-sm text-gray-500">API calls / week</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-black mb-2">2.4M</p>
                <p className="text-sm text-gray-500">Sequences / month</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-black mb-2">69K+</p>
                <p className="text-sm text-gray-500">Active pipelines</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-black mb-2">85.2%</p>
                <p className="text-sm text-gray-500">Deal close rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-3xl font-bold text-black mb-6">
            &quot;I used to spend 3 hours a day on outreach and CRM updates. Now BrokerEngine handles all of it. I just review and close.&quot;
          </p>
          <p className="text-gray-500">
            Marcus Reid, Managing Partner · Meridian Advisors
          </p>
        </div>
      </section>

      {/* Feature 4: Continuous Context */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">
                Continuous context{' '}
                <span className="text-gray-400">for everyone.</span>
              </h2>
              <p className="text-gray-500 mb-6">
                Every signal from every listing, buyer, and deal, all running on the same live picture of the market.
              </p>
              <a
                href="#"
                className="text-black font-medium hover:underline inline-flex items-center gap-2"
              >
                Explore data <ChevronRight size={18} />
              </a>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 dotted-grid min-h-[300px]">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Acme Corp (ACME)</span>
                  <span className="font-medium">$50M ARR</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tech buyer since 2022</span>
                  <span>5 deals</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full mt-4">
                  <div className="h-full w-3/4 bg-black rounded-full"></div>
                </div>
                <p className="text-gray-500 mt-4">Engagement score: 85%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 5: Reporting */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 dotted-grid min-h-[300px] order-2 md:order-1">
              <div className="space-y-3">
                <div className="h-4 bg-black rounded w-3/4"></div>
                <div className="h-2 bg-gray-200 rounded"></div>
                <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                <div className="h-32 bg-gray-100 rounded mt-4"></div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold mb-4">
                For the people{' '}
                <span className="text-gray-400">who own the number.</span>
              </h2>
              <p className="text-gray-500 mb-6">
                From the next forecast to the last close, get your deal answers in seconds.
              </p>
              <a
                href="#"
                className="text-black font-medium hover:underline inline-flex items-center gap-2"
              >
                Explore reporting <ChevronRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-page CTA Card */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-2xl">
          <div className="bg-gray-100 rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold text-black mb-6">
              One hot lead pays for 12 months of Pro.
            </h3>
            <div className="flex flex-col md:flex-row gap-3 justify-center mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-900 whitespace-nowrap">
                Request access
              </button>
            </div>
            <a href="/pricing" className="text-sm text-gray-600 hover:text-black">
              See our plans <ChevronRight className="inline" size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-4">
            The only platform that{' '}
            <span className="text-gray-400">gets smarter with every deal.</span>
          </h2>
          <p className="text-gray-500 mb-8">
            Every broker who joins adds to the collective intelligence. Playbooks, sequences, and deal patterns — refined across thousands of real M&A transactions.
          </p>
          <button className="px-8 py-3 border-2 border-black text-black rounded-full font-medium hover:bg-black hover:text-white transition">
            See how it works
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 px-6">
        <div className="mx-auto max-w-7xl flex justify-between items-center">
          <p className="font-bold text-black">BrokerEngine</p>
          <div className="flex gap-8 text-sm text-gray-600">
            <a href="#" className="hover:text-black">
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
