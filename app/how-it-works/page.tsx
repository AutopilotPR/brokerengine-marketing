'use client';

import Image from 'next/image';
import { useState } from 'react';
import {
  Menu,
  X,
  ChevronRight,
  CheckCircle2,
  Clock,
  Zap,
  Bell,
  Calendar,
  FileText,
  Target,
  Mail,
  Brain,
  Radar,
  Gauge,
  Mic2,
  ArrowRight,
  Phone,
  ChevronDown,
} from 'lucide-react';

// ── Nav ──────────────────────────────────────────────────────────────────────

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 h-[60px] flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <Image src="/icon.svg" alt="" width={32} height={32} className="rounded-lg" />
          <span className="font-bold text-[18px] text-black tracking-tight">BrokerEngine</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="/#features" className="text-sm text-gray-600 hover:text-black">Features</a>
          <a href="/how-it-works" className="text-sm font-semibold text-black">How it works</a>
          <a href="/pricing" className="text-sm text-gray-600 hover:text-black">Pricing</a>
          <a href="/login" className="text-sm text-gray-600 hover:text-black">Login</a>
          <a href="/signup" className="px-6 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-900">Request access</a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-100 px-6 py-4 space-y-3 bg-white">
          <a href="/#features" className="block text-sm text-gray-600">Features</a>
          <a href="/how-it-works" className="block text-sm font-semibold text-black">How it works</a>
          <a href="/pricing" className="block text-sm text-gray-600">Pricing</a>
          <a href="/login" className="block text-sm text-gray-600">Login</a>
          <a href="/signup" className="block px-6 py-2 bg-black text-white rounded-full text-sm font-medium text-center">Request access</a>
        </div>
      )}
    </nav>
  );
}

// ── Data ─────────────────────────────────────────────────────────────────────

const SETUP_STEPS = [
  {
    number: '01',
    time: '5 min',
    title: 'Complete your voice profile',
    desc: 'Answer 20 questions about your niche, deal size, tone, and target clients. Every email, blog post, and response the system writes will sound exactly like you.',
    you: true,
    badge: 'You do this once',
  },
  {
    number: '02',
    time: '2 min',
    title: 'Set your ICP',
    desc: 'Tell BrokerEngine who you are hunting. Industry, revenue range, geography, job title. Apollo uses this to find matching business owners every week.',
    you: true,
    badge: 'You do this once',
  },
  {
    number: '03',
    time: '1 min',
    title: 'Add your phone number',
    desc: 'This is where HOT lead alerts and meeting notifications land. Your phone number in settings. That is the whole setup.',
    you: true,
    badge: 'You do this once',
  },
  {
    number: '04',
    time: 'Automatic',
    title: 'Your CRM is ready',
    desc: 'A GoHighLevel subaccount is provisioned for you on signup. Your pipeline, contacts, and deal stages are there from day one. No integration, no setup, no extra invoice.',
    you: false,
    badge: 'We handle this',
  },
];

const WEEKLY_SCHEDULE = [
  { day: 'Every Monday', icon: <Target size={16} />, color: 'bg-blue-100 text-blue-600', title: 'Apollo scans for new sellers', desc: 'Founders and CEOs matching your ICP drop into your pipeline. Monday adds a dedicated SaaS-only pass — higher multiples, higher deal size. Deduped against existing contacts.' },
  { day: 'Every Monday', icon: <Mail size={16} />, color: 'bg-indigo-100 text-indigo-600', title: 'Referral partner outreach runs', desc: '5 river guides targeted each week — CPAs, fractional CFOs, M&A attorneys, EOS implementors. Separate track. Peer-to-peer template. You review before anything sends.' },
  { day: 'Every day', icon: <Mail size={16} />, color: 'bg-blue-100 text-blue-700', title: 'Founder outreach sequences run', desc: 'Cold emails go out via Instantly in your voice. 5-step Exit Audit cadence. You approve each draft — nothing sends without your sign-off.' },
  { day: 'Real time', icon: <Brain size={16} />, color: 'bg-purple-100 text-purple-600', title: 'Replies get classified and drafted', desc: 'Every reply labeled HOT, WARM, COLD, OOO, or Unsub. Claude drafts a reply in your voice for each. You approve in one click. HOT fires an SMS to your phone within two minutes.' },
  { day: 'Every Monday', icon: <FileText size={16} />, color: 'bg-violet-100 text-violet-600', title: 'Content drafts generated', desc: 'Blog post, LinkedIn draft, Quora answer, and FAQ — all in your voice, checked against your voice profile. You review and publish. Nothing posts without approval.' },
  { day: 'Every Monday', icon: <Radar size={16} />, color: 'bg-green-100 text-green-600', title: 'Competitors monitored', desc: 'BrokerEngine checks competitor sites and surfaces any meaningful changes in your intel feed.' },
  { day: 'Every Monday', icon: <Gauge size={16} />, color: 'bg-cyan-100 text-cyan-600', title: 'AI visibility scored', desc: 'Claude is asked your target queries. Does your name appear in the answer? Your visibility score updates and trends over time.' },
];

const YOUR_JOB = [
  { task: 'Review HOT leads and call them', freq: 'As they come in', icon: <Bell size={15} /> },
  { task: 'Approve or edit outreach drafts before they send', freq: 'Weekly', icon: <Mail size={15} /> },
  { task: 'Review content drafts and publish them', freq: 'Weekly', icon: <FileText size={15} /> },
  { task: 'Book meetings and take calls', freq: 'As scheduled', icon: <Calendar size={15} /> },
  { task: 'Close deals', freq: 'Always', icon: <CheckCircle2 size={15} /> },
];

const SMS_MOMENTS = [
  {
    icon: '🔥',
    label: 'HOT reply',
    from: 'BrokerEngine',
    message: 'Mike Torres at Meridian HVAC replied: "Interested, let\'s get on a call this week." Log in to reply now.',
    time: '2 min ago',
    color: 'border-red-200 bg-red-50',
    badge: 'bg-red-500 text-white',
    badgeText: 'HOT LEAD',
  },
  {
    icon: '📅',
    label: 'New meeting booked',
    from: 'BrokerEngine',
    message: 'Sarah Chen at Peak Roofing booked a call for Friday at 2pm. Revenue: $5.1M. Deal context in your dashboard.',
    time: '12 min ago',
    color: 'border-blue-200 bg-blue-50',
    badge: 'bg-blue-500 text-white',
    badgeText: 'MEETING',
  },
  {
    icon: '🎯',
    label: 'Weekly prospect digest',
    from: 'BrokerEngine',
    message: '14 new sellers added to your pipeline this week. 2 are ICP matches above 85 score. Check your dashboard.',
    time: 'Monday 8am',
    color: 'border-violet-200 bg-violet-50',
    badge: 'bg-violet-500 text-white',
    badgeText: 'WEEKLY',
  },
];

const TOOLS_RUNNING = [
  { name: 'Apollo', role: 'Finds business owners matching your ICP every week', dot: 'bg-orange-400' },
  { name: 'Instantly', role: 'Delivers cold email sequences in your name', dot: 'bg-blue-400' },
  { name: 'GoHighLevel', role: 'Your built-in CRM, pipeline, and contact records', dot: 'bg-green-400' },
  { name: 'Twilio', role: 'Fires SMS alerts to your phone on HOT replies and new meetings', dot: 'bg-red-400' },
  { name: 'Beehiiv', role: 'Publishes your newsletter when you approve it', dot: 'bg-yellow-400' },
  { name: 'Resend', role: 'Handles transactional emails like buyer teasers', dot: 'bg-violet-400' },
  { name: 'Claude (Anthropic)', role: 'Writes everything in your voice, classifies replies, scores visibility', dot: 'bg-gray-400' },
];

const FAQS = [
  {
    q: 'Does the AI reply to emails for me?',
    a: 'No. The AI classifies every reply as HOT, WARM, COLD, OOO, or Unsubscribe and drafts a suggested reply in your voice. You review the draft and click approve. Nothing sends without your sign-off. The AI writes it. You decide.',
  },
  {
    q: 'Can I customize what the outreach emails say?',
    a: 'Yes. You complete a voice profile during onboarding and every email is written in your tone and style. You can also review and edit any draft before it sends.',
  },
  {
    q: 'What if I already have Apollo or Instantly?',
    a: 'You can cancel those subscriptions. We hold the master accounts and provision you a subaccount. You get the same tools at a lower total cost with the automation layer on top.',
  },
  {
    q: 'How long until I see my first HOT lead?',
    a: 'Most brokers see their first replies within two to three weeks, depending on niche and deal size. The prospecting and outreach run immediately after onboarding.',
  },
  {
    q: 'Do I need to connect my existing CRM?',
    a: 'No. Your CRM is a GoHighLevel subaccount we provision for you on signup. It is ready on day one with no setup. If you want to sync with HubSpot or Salesforce, that is on the roadmap but not available today.',
  },
  {
    q: 'What happens if I cancel?',
    a: 'You can cancel anytime. Your data exports as a CSV. The subaccounts on Apollo, Instantly, and GHL close when your subscription ends.',
  },
];

// ── FAQ Item ─────────────────────────────────────────────────────────────────

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="text-base font-semibold text-black">{q}</span>
        <ChevronDown
          size={18}
          className={`flex-shrink-0 text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <p className="pb-5 text-gray-500 leading-relaxed text-sm">{a}</p>
      )}
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function HowItWorks() {
  return (
    <div className="w-full bg-white">
      <Nav />

      {/* HERO */}
      <section className="pt-20 pb-14 px-6 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">How it works</p>
          <h1 className="text-5xl font-bold text-black mb-5 leading-tight">
            20 minutes to set up.<br />
            <span className="text-gray-400">Runs every week after that.</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto mb-8">
            Here is exactly what you do, what the system does, and what happens when it is working.
          </p>
          <a href="/signup" className="inline-flex items-center gap-2 px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-900">
            Request access <ArrowRight size={14} />
          </a>
        </div>
      </section>

      {/* SETUP */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Step 1</p>
            <h2 className="text-4xl font-bold text-black mb-3">Set it up once in 20 minutes.</h2>
            <p className="text-gray-500">After this, you do not touch the setup again.</p>
          </div>
          <div className="space-y-4">
            {SETUP_STEPS.map((s) => (
              <div key={s.number} className="flex gap-5 bg-white rounded-2xl border border-gray-200 p-6">
                <div className="flex flex-col items-center gap-2 flex-shrink-0">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${s.you ? 'bg-black text-white' : 'bg-gray-100 text-gray-500'}`}>
                    {s.number}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={10} className="text-gray-400" />
                    <span className="text-[10px] text-gray-400">{s.time}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h3 className="font-semibold text-black">{s.title}</h3>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${s.you ? 'bg-black text-white' : 'bg-gray-100 text-gray-500'}`}>
                      {s.badge}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT RUNS WEEKLY */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Step 2</p>
            <h2 className="text-4xl font-bold text-black mb-3">What runs automatically, every week.</h2>
            <p className="text-gray-500 max-w-xl mx-auto">You do not schedule any of this. It runs on its own.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {WEEKLY_SCHEDULE.map((item) => (
              <div key={item.title} className="flex gap-4 p-5 border border-gray-200 rounded-2xl bg-white">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${item.color}`}>
                  {item.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h3 className="font-semibold text-black text-sm">{item.title}</h3>
                    <span className="text-[10px] text-gray-400 font-medium">{item.day}</span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YOUR JOB vs SYSTEM */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">The division of labor</p>
            <h2 className="text-4xl font-bold text-black mb-3">What the system does vs what you do.</h2>
            <p className="text-gray-500">Your job is to review, approve, and close. Everything else is handled.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* System column */}
            <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
              <div className="px-6 py-4 bg-black text-white">
                <div className="flex items-center gap-2">
                  <Zap size={14} className="text-yellow-400" />
                  <p className="font-semibold text-sm">BrokerEngine handles this</p>
                </div>
              </div>
              <div className="divide-y divide-gray-100">
                {[
                  'Find sellers matching your ICP every week (Apollo)',
                  'Run a dedicated Monday SaaS prospect pull',
                  'Pull 5 referral partners weekly (river guide track)',
                  'Write personalized cold emails in your voice',
                  'Send and track outreach via Instantly',
                  'Read every reply: HOT, WARM, COLD, OOO, or Unsub',
                  'Draft a contextual reply in your voice for every classified reply',
                  'Fire an SMS on HOT replies (threshold you configure)',
                  'Research the company before a meeting and write a 1-page brief',
                  'Fire an SMS when a meeting is booked via Calendly',
                  'Generate blog, LinkedIn, and Quora drafts weekly',
                  'Monitor competitors for changes',
                  'Track your AI visibility score weekly',
                  'Match sellers to buyers in your database',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 px-6 py-3">
                    <CheckCircle2 size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Your job column */}
            <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                <p className="font-semibold text-sm text-black">Your job</p>
              </div>
              <div className="divide-y divide-gray-100">
                {YOUR_JOB.map((item) => (
                  <div key={item.task} className="flex items-start gap-3 px-6 py-4">
                    <div className="w-7 h-7 rounded-lg bg-black flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-black">{item.task}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{item.freq}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <p className="text-xs text-gray-500">The rest is handled. That is the point.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE MOMENTS THAT MATTER */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">What it feels like</p>
            <h2 className="text-4xl font-bold text-black mb-3">Your phone becomes your pipeline.</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              You do not log in to check on things. The system comes to you when something matters.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-5 justify-center items-stretch">
            {SMS_MOMENTS.map((sms) => (
              <div key={sms.label} className={`flex-1 rounded-2xl border p-5 ${sms.color}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Phone size={13} className="text-gray-500" />
                    <span className="text-xs text-gray-500 font-medium">{sms.from}</span>
                  </div>
                  <span className="text-xs text-gray-400">{sms.time}</span>
                </div>
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl">{sms.icon}</span>
                  <p className="text-sm text-gray-700 leading-relaxed">{sms.message}</p>
                </div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${sms.badge}`}>
                  {sms.badgeText}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS RUNNING UNDERNEATH */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Under the hood</p>
            <h2 className="text-4xl font-bold text-black mb-3">Seven tools running in the background.</h2>
            <p className="text-gray-500">You never see their invoices. They are all included in your BrokerEngine subscription.</p>
          </div>
          <div className="space-y-3">
            {TOOLS_RUNNING.map((t) => (
              <div key={t.name} className="flex items-center gap-4 px-5 py-4 bg-white rounded-xl border border-gray-200">
                <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${t.dot}`} />
                <p className="text-sm font-semibold text-black w-36 flex-shrink-0">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Common questions</p>
            <h2 className="text-4xl font-bold text-black">Honest answers.</h2>
          </div>
          <div>
            {FAQS.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="mx-auto max-w-2xl">
          <div className="bg-black rounded-3xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-3">Ready to hand off the pipeline work?</h3>
            <p className="text-gray-400 mb-8">20 minutes to set up. Running the same week. One bill for everything.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-500 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-white/40"
              />
              <a
                href="/signup"
                className="px-7 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-100 whitespace-nowrap text-sm inline-flex items-center justify-center gap-1"
              >
                Request access <ArrowRight size={13} />
              </a>
            </div>
            <a href="/pricing" className="text-sm text-gray-400 hover:text-white inline-flex items-center gap-1">
              See pricing <ChevronRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 px-6">
        <div className="mx-auto max-w-7xl flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image src="/icon.svg" alt="" width={24} height={24} className="rounded" />
            <p className="font-bold text-black">BrokerEngine</p>
          </div>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="/#features" className="hover:text-black">Features</a>
            <a href="/pricing" className="hover:text-black">Pricing</a>
            <a href="/how-it-works" className="hover:text-black">How it works</a>
            <a href="/login" className="hover:text-black">Login</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
