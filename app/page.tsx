'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import {
  ChevronRight,
  Menu,
  X,
  Target,
  Mail,
  MessageSquare,
  BarChart2,
  Settings,
  Radar,
  Mic2,
  FileText,
  Newspaper,
  Gauge,
  CheckCircle2,
  Zap,
  Brain,
  TrendingUp,
  Bell,
  Globe,
  Calendar,
  Briefcase,
  ArrowRight,
} from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
// DEMO — 6 tabs showing the FULL MACHINE, not just a CRM
// ─────────────────────────────────────────────────────────────────────────────

type TabId = 'find' | 'outreach' | 'replies' | 'content' | 'intel' | 'brand';

interface DemoTab {
  id: TabId;
  emoji: string;
  label: string;
  sublabel: string;
}

const DEMO_TABS: DemoTab[] = [
  { id: 'find',     emoji: '🎯', label: 'Find Sellers',    sublabel: 'Apollo AI prospecting' },
  { id: 'outreach', emoji: '📧', label: 'Run Outreach',    sublabel: 'Instantly sequences' },
  { id: 'replies',  emoji: '🔥', label: 'Hot Replies',     sublabel: 'AI classification + SMS' },
  { id: 'content',  emoji: '✍️', label: 'Publish Content', sublabel: 'Blog · LinkedIn · Quora' },
  { id: 'intel',    emoji: '🔭', label: 'Watch Market',    sublabel: 'Competitor intel feed' },
  { id: 'brand',    emoji: '🎙', label: 'Build Brand',     sublabel: 'Podcasts · Media · AI score' },
];

// ── Sidebar ────────────────────────────────────────────────────────────────

function AppSidebar({ activeTab }: { activeTab: TabId }) {
  const navItems: { id: TabId; label: string; icon: React.ReactNode }[] = [
    { id: 'find',     label: 'Sellers',   icon: <Target size={13} /> },
    { id: 'outreach', label: 'Outreach',  icon: <Mail size={13} /> },
    { id: 'replies',  label: 'Replies',   icon: <MessageSquare size={13} /> },
    { id: 'content',  label: 'Content',   icon: <FileText size={13} /> },
    { id: 'intel',    label: 'Intel',     icon: <Radar size={13} /> },
    { id: 'brand',    label: 'Brand',     icon: <TrendingUp size={13} /> },
    { id: 'brand',    label: 'Buyers',    icon: <Briefcase size={13} /> },
    { id: 'brand',    label: 'Settings',  icon: <Settings size={13} /> },
  ];

  return (
    <div className="w-44 flex-shrink-0 bg-white border-r border-gray-100 flex flex-col h-full">
      <div className="px-3 py-3 flex items-center gap-2 border-b border-gray-100">
        <Image src="/icon.svg" alt="BrokerEngine" width={22} height={22} className="rounded" />
        <span className="font-bold text-xs text-black">BrokerEngine</span>
      </div>
      <nav className="flex-1 px-2 py-2 space-y-0.5 overflow-hidden">
        {navItems.map((item, i) => {
          const isActive = item.id === activeTab && item.label !== 'Settings' && item.label !== 'Buyers';
          return (
            <div
              key={`${item.id}-${i}`}
              className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[11px] cursor-default ${
                isActive ? 'bg-gray-100 text-black font-semibold' : 'text-gray-400'
              }`}
            >
              <span className={isActive ? 'text-black' : 'text-gray-300'}>{item.icon}</span>
              {item.label}
            </div>
          );
        })}
      </nav>
      <div className="px-3 py-2.5 border-t border-gray-100 flex items-center gap-2">
        <div className="w-5 h-5 rounded-full bg-gray-800 text-white text-[8px] font-bold flex items-center justify-center flex-shrink-0">B</div>
        <span className="text-[9px] text-gray-400 truncate">nate@advisors.com</span>
      </div>
    </div>
  );
}

// ── Tab 1: Find Sellers ────────────────────────────────────────────────────

function FindContent() {
  const rows = [
    { name: 'Meridian HVAC', ind: 'HVAC Services', rev: '$8.2M', emp: '45', score: 94, status: 'HOT', sc: 'bg-green-100 text-green-700' },
    { name: 'Peak Roofing Co', ind: 'Roofing', rev: '$5.1M', emp: '28', score: 87, sc: 'bg-green-100 text-green-700', status: 'HOT' },
    { name: 'Cascade Plumbing', ind: 'Plumbing', rev: '$3.8M', emp: '19', score: 72, sc: 'bg-yellow-100 text-yellow-700', status: 'WARM' },
    { name: 'Alpine Electric', ind: 'Electrical', rev: '$6.4M', emp: '31', score: 68, sc: 'bg-yellow-100 text-yellow-700', status: 'WARM' },
    { name: 'Summit Landscaping', ind: 'Landscaping', rev: '$1.9M', emp: '11', score: 41, sc: 'bg-gray-100 text-gray-500', status: 'COLD' },
  ];
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <div className="px-4 py-3 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-black">Seller Prospects</span>
          <span className="text-[10px] text-gray-400">247 found · updated 4h ago</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] px-2 py-1 bg-blue-50 text-blue-600 rounded-full font-medium">Apollo AI</span>
          <button className="text-[10px] px-2.5 py-1 bg-black text-white rounded-lg font-medium">Scan now</button>
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        <table className="w-full text-[11px]">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="text-left px-4 py-2 text-gray-400 font-medium">Company</th>
              <th className="text-left px-2 py-2 text-gray-400 font-medium">Industry</th>
              <th className="text-left px-2 py-2 text-gray-400 font-medium">Revenue</th>
              <th className="text-left px-2 py-2 text-gray-400 font-medium">Score</th>
              <th className="text-left px-2 py-2 text-gray-400 font-medium">ICP Match</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.name} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}>
                <td className="px-4 py-2 font-medium text-black">{r.name}</td>
                <td className="px-2 py-2 text-gray-500">{r.ind}</td>
                <td className="px-2 py-2 text-gray-600">{r.rev}</td>
                <td className="px-2 py-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-12 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-black rounded-full" style={{ width: `${r.score}%` }} />
                    </div>
                    <span className="text-gray-600 font-medium">{r.score}</span>
                  </div>
                </td>
                <td className="px-2 py-2">
                  <span className={`px-1.5 py-0.5 rounded-full text-[9px] font-bold ${r.sc}`}>{r.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="border-t border-gray-100 px-4 py-2 bg-gray-50 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
        <span className="text-[10px] text-gray-500">Apollo scan running weekly · Next run in 3 days</span>
      </div>
    </div>
  );
}

// ── Tab 2: Outreach ────────────────────────────────────────────────────────

function OutreachContent() {
  const seqs = [
    { name: 'HVAC Owner Outreach Q2', step: 3, total: 5, contacts: 42, status: 'Live', sc: 'bg-green-100 text-green-700', open: '28%', reply: '6.2%' },
    { name: 'Roofing Business Sellers', step: 1, total: 5, contacts: 18, status: 'Live', sc: 'bg-green-100 text-green-700', open: '34%', reply: '8.1%' },
    { name: 'Plumbing Owner Sequence', step: 2, total: 5, contacts: 31, status: 'Paused', sc: 'bg-yellow-100 text-yellow-700', open: '22%', reply: '4.3%' },
  ];
  const timeline = [
    { time: '9:00 AM', event: 'Day 1 email sent to 42 contacts', done: true },
    { time: '9:03 AM', event: '18 emails delivered, 2 bounced', done: true },
    { time: '1:12 PM', event: 'First open: Meridian HVAC', done: true },
    { time: 'Day 3', event: 'Follow-up email queued for non-openers', done: false },
    { time: 'Day 7', event: 'Final touch — LinkedIn connect', done: false },
  ];
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <div className="px-4 py-3 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-black">Active Sequences</span>
          <span className="px-1.5 py-0.5 bg-green-100 text-green-700 text-[9px] font-bold rounded-full">3 LIVE</span>
        </div>
        <span className="text-[10px] px-2 py-1 bg-blue-50 text-blue-600 rounded-full font-medium">Powered by Instantly</span>
      </div>
      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 overflow-auto px-4 py-3 space-y-2 border-r border-gray-100">
          {seqs.map((s) => (
            <div key={s.name} className="border border-gray-200 rounded-xl p-3 bg-white">
              <div className="flex items-start justify-between mb-2">
                <p className="text-[11px] font-semibold text-black leading-tight">{s.name}</p>
                <span className={`px-1.5 py-0.5 rounded-full text-[9px] font-bold flex-shrink-0 ml-2 ${s.sc}`}>{s.status}</span>
              </div>
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: s.total }).map((_, i) => (
                  <div key={i} className={`h-1 flex-1 rounded-full ${i < s.step ? 'bg-black' : 'bg-gray-200'}`} />
                ))}
              </div>
              <div className="flex gap-3 text-[10px] text-gray-500">
                <span>{s.contacts} contacts</span>
                <span>{s.open} open</span>
                <span className="text-green-600 font-medium">{s.reply} reply</span>
              </div>
            </div>
          ))}
        </div>
        <div className="w-40 px-3 py-3 overflow-auto">
          <p className="text-[9px] font-semibold text-gray-400 uppercase tracking-wide mb-2">Activity</p>
          <div className="space-y-2">
            {timeline.map((t) => (
              <div key={t.time} className="flex gap-1.5">
                <div className={`w-1.5 h-1.5 rounded-full mt-1 flex-shrink-0 ${t.done ? 'bg-green-500' : 'bg-gray-200'}`} />
                <div>
                  <p className="text-[9px] text-gray-400">{t.time}</p>
                  <p className={`text-[10px] leading-tight ${t.done ? 'text-gray-700' : 'text-gray-400'}`}>{t.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Tab 3: Hot Replies ─────────────────────────────────────────────────────

function RepliesContent() {
  const replies = [
    { initials: 'MT', color: 'bg-red-100 text-red-700', name: 'Mike Torres', co: 'Meridian HVAC', msg: "Interested — let's get on a call this week", time: '2m', badge: 'HOT 🔥', bc: 'bg-red-500 text-white', row: 'bg-red-50/60 border-l-2 border-red-400' },
    { initials: 'SC', color: 'bg-red-100 text-red-700', name: 'Sarah Chen', co: 'Peak Roofing', msg: 'This is exactly what we needed. Call?', time: '15m', badge: 'HOT 🔥', bc: 'bg-red-500 text-white', row: 'bg-red-50/60 border-l-2 border-red-400' },
    { initials: 'JR', color: 'bg-yellow-100 text-yellow-700', name: 'James Ruiz', co: 'Alpine Electric', msg: 'Send me more info about the process', time: '1h', badge: 'WARM', bc: 'bg-yellow-100 text-yellow-700', row: 'bg-white' },
    { initials: 'TW', color: 'bg-gray-100 text-gray-500', name: 'Tom Walsh', co: 'Summit HVAC', msg: 'Not interested at this time', time: '3h', badge: 'COLD', bc: 'bg-gray-100 text-gray-400', row: 'bg-white' },
  ];
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <div className="px-4 py-3 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-black">Reply Inbox</span>
          <span className="px-1.5 py-0.5 bg-red-500 text-white text-[9px] font-bold rounded-full">2 HOT</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[9px] text-gray-400">SMS sent to your phone</span>
        </div>
      </div>
      <div className="flex-1 overflow-auto divide-y divide-gray-100">
        {replies.map((r) => (
          <div key={r.name} className={`flex items-center gap-3 px-4 py-2.5 ${r.row}`}>
            <div className={`w-7 h-7 rounded-full text-[9px] font-bold flex items-center justify-center flex-shrink-0 ${r.color}`}>{r.initials}</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="text-[11px] font-semibold text-black">{r.name}</span>
                <span className="text-[9px] text-gray-400">· {r.co}</span>
              </div>
              <p className="text-[10px] text-gray-500 truncate">{r.msg}</p>
            </div>
            <div className="flex flex-col items-end gap-1 flex-shrink-0">
              <span className={`px-1.5 py-0.5 rounded-full text-[9px] font-bold ${r.bc}`}>{r.badge}</span>
              <span className="text-[9px] text-gray-400">{r.time} ago</span>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-100 px-4 py-2 bg-red-50 flex items-center gap-2">
        <Bell size={11} className="text-red-500 flex-shrink-0" />
        <span className="text-[10px] text-red-600 font-medium">📱 SMS sent: &quot;Mike Torres at Meridian HVAC replied HOT — call now&quot;</span>
      </div>
    </div>
  );
}

// ── Tab 4: Content Engine ──────────────────────────────────────────────────

function ContentContent() {
  const items = [
    { type: 'LinkedIn', title: 'Why business owners in HVAC are selling now (and what it means for buyers)', status: 'Published', sc: 'bg-blue-100 text-blue-700', when: '2h ago' },
    { type: 'Blog Post', title: '5 red flags that tell you a seller is serious about exiting this year', status: 'Draft', sc: 'bg-gray-100 text-gray-600', when: 'Today' },
    { type: 'Quora', title: 'What is the typical multiple for an HVAC business doing $5M revenue?', status: 'Published', sc: 'bg-blue-100 text-blue-700', when: 'Yesterday' },
    { type: 'FAQ', title: 'How long does the M&A process take for a $3-10M business?', status: 'Approved', sc: 'bg-green-100 text-green-700', when: 'Mon' },
  ];
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <div className="px-4 py-3 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-black">Content Engine</span>
          <span className="text-[10px] text-gray-400">4 pieces/week · in your voice</span>
        </div>
        <span className="text-[10px] px-2 py-1 bg-purple-50 text-purple-600 rounded-full font-medium">AI-generated</span>
      </div>
      <div className="flex-1 overflow-auto divide-y divide-gray-100">
        {items.map((item) => (
          <div key={item.title} className="px-4 py-3 flex items-start gap-3">
            <div className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-gray-100 text-gray-500 flex-shrink-0 mt-0.5 w-14 text-center">{item.type}</div>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] text-black leading-snug">{item.title}</p>
            </div>
            <div className="flex flex-col items-end gap-1 flex-shrink-0">
              <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${item.sc}`}>{item.status}</span>
              <span className="text-[9px] text-gray-400">{item.when}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-100 px-4 py-2 bg-gray-50 flex items-center justify-between">
        <span className="text-[10px] text-gray-500">Next batch generates Sunday at 6AM</span>
        <span className="text-[10px] text-purple-600 font-medium">Tone: Consultative ✓</span>
      </div>
    </div>
  );
}

// ── Tab 5: Intel Feed ──────────────────────────────────────────────────────

function IntelContent() {
  const items = [
    { icon: '⚠️', type: 'Competitor', title: 'Deal Capital dropped their retainer fee — now $2,500 down from $4,000', time: '1h ago', tag: 'Pricing move', tc: 'bg-orange-100 text-orange-700' },
    { icon: '📰', type: 'Market', title: 'HVAC sector M&A activity up 23% YoY according to Axial data', time: '4h ago', tag: 'Opportunity', tc: 'bg-green-100 text-green-700' },
    { icon: '🤖', type: 'AI Citation', title: 'ChatGPT cited "Midwest M&A Advisors" when asked about HVAC exits — not you', time: '12h ago', tag: 'AI Visibility', tc: 'bg-blue-100 text-blue-700' },
    { icon: '📢', type: 'Competitor', title: 'ExitRight Advisors published new blog: "How to sell your trades business in 2025"', time: 'Yesterday', tag: 'Content move', tc: 'bg-gray-100 text-gray-600' },
  ];
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <div className="px-4 py-3 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-black">Intel Feed</span>
          <span className="text-[10px] text-gray-400">Live competitor + market signals</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[9px] text-gray-400">Scanning now</span>
        </div>
      </div>
      <div className="flex-1 overflow-auto divide-y divide-gray-100">
        {items.map((item) => (
          <div key={item.title} className="px-4 py-3 flex items-start gap-3">
            <span className="text-base flex-shrink-0 mt-0.5">{item.icon}</span>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] text-gray-400 mb-0.5">{item.type}</p>
              <p className="text-[11px] text-black leading-snug">{item.title}</p>
            </div>
            <div className="flex flex-col items-end gap-1 flex-shrink-0">
              <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${item.tc}`}>{item.tag}</span>
              <span className="text-[9px] text-gray-400">{item.time}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-100 px-4 py-2 bg-gray-50">
        <span className="text-[10px] text-gray-500">2 competitors monitored · AI visibility checked weekly</span>
      </div>
    </div>
  );
}

// ── Tab 6: Brand Building ──────────────────────────────────────────────────

function BrandContent() {
  const podcasts = [
    { name: 'The Exit Strategy Podcast', listeners: '42K', status: 'Pitch sent', sc: 'bg-yellow-100 text-yellow-700' },
    { name: 'M&A Science', listeners: '89K', status: 'Booked ✓', sc: 'bg-green-100 text-green-700' },
    { name: 'Business Buying Strategies', listeners: '31K', status: 'Pending', sc: 'bg-gray-100 text-gray-500' },
  ];
  const score = { current: 72, prev: 58, engines: ['ChatGPT', 'Claude', 'Perplexity', 'Gemini'] };
  const media = [
    { outlet: 'Inc.com', query: 'Expert comment: M&A trends in trades businesses 2025', deadline: '2 days' },
    { outlet: 'Forbes', query: 'What should small business owners know before selling?', deadline: '5 days' },
  ];
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-100">
        <span className="text-xs font-semibold text-black">Brand & Authority</span>
      </div>
      <div className="flex-1 overflow-auto px-4 py-3 space-y-4">
        {/* AI Score */}
        <div className="border border-gray-200 rounded-xl p-3 bg-white">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[10px] font-semibold text-gray-700">AI Visibility Score</p>
            <div className="flex items-center gap-1">
              <span className="text-[9px] text-green-600 font-bold">↑ +14 pts</span>
              <span className="text-[9px] text-gray-400">this month</span>
            </div>
          </div>
          <div className="flex items-end gap-3">
            <span className="text-3xl font-bold text-black">{score.current}</span>
            <div className="flex-1 pb-1">
              <div className="flex gap-1 mb-1.5">
                {score.engines.map((e) => (
                  <span key={e} className="text-[8px] px-1 py-0.5 bg-gray-100 text-gray-500 rounded">{e}</span>
                ))}
              </div>
              <div className="w-full h-1.5 bg-gray-100 rounded-full">
                <div className="h-full bg-black rounded-full transition-all" style={{ width: `${score.current}%` }} />
              </div>
            </div>
          </div>
        </div>
        {/* Podcasts */}
        <div>
          <p className="text-[9px] font-semibold text-gray-400 uppercase tracking-wide mb-1.5">Podcast Outreach</p>
          <div className="space-y-1.5">
            {podcasts.map((p) => (
              <div key={p.name} className="flex items-center justify-between border border-gray-100 rounded-lg px-3 py-1.5 bg-white">
                <div>
                  <p className="text-[10px] font-medium text-black">{p.name}</p>
                  <p className="text-[9px] text-gray-400">{p.listeners} listeners</p>
                </div>
                <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${p.sc}`}>{p.status}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Earned Media */}
        <div>
          <p className="text-[9px] font-semibold text-gray-400 uppercase tracking-wide mb-1.5">Earned Media</p>
          <div className="space-y-1.5">
            {media.map((m) => (
              <div key={m.outlet} className="flex items-center justify-between border border-gray-100 rounded-lg px-3 py-1.5 bg-white">
                <div className="flex-1 min-w-0 mr-2">
                  <span className="text-[9px] font-bold text-orange-600 mr-1.5">{m.outlet}</span>
                  <span className="text-[9px] text-gray-600">{m.query}</span>
                </div>
                <span className="text-[9px] text-red-500 font-medium flex-shrink-0">{m.deadline}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Product Demo Component ─────────────────────────────────────────────────

function ProductDemo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [hovering, setHovering] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const switchToTab = (index: number) => {
    setVisible(false);
    setTimeout(() => { setActiveIndex(index); setVisible(true); }, 180);
  };

  useEffect(() => {
    if (hovering) { if (timerRef.current) clearInterval(timerRef.current); return; }
    timerRef.current = setInterval(() => { switchToTab((activeIndex + 1) % DEMO_TABS.length); }, 3500);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [activeIndex, hovering]);

  const activeTab = DEMO_TABS[activeIndex];

  const contentMap: Record<TabId, React.ReactNode> = {
    find:     <FindContent />,
    outreach: <OutreachContent />,
    replies:  <RepliesContent />,
    content:  <ContentContent />,
    intel:    <IntelContent />,
    brand:    <BrandContent />,
  };

  return (
    <div className="w-full max-w-[1140px] mx-auto">
      {/* Tab strip */}
      <div
        className="flex items-stretch gap-1 justify-center mb-5 flex-wrap"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {DEMO_TABS.map((tab, i) => {
          const isActive = i === activeIndex;
          return (
            <button
              key={tab.id}
              onClick={() => switchToTab(i)}
              className={`flex flex-col items-center px-4 py-2 rounded-xl text-center transition-all focus:outline-none border ${
                isActive
                  ? 'bg-black text-white border-black shadow-sm'
                  : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300 hover:text-gray-700'
              }`}
            >
              <span className="text-base leading-none mb-0.5">{tab.emoji}</span>
              <span className={`text-xs font-semibold leading-tight ${isActive ? 'text-white' : 'text-gray-700'}`}>{tab.label}</span>
              <span className={`text-[9px] leading-tight mt-0.5 ${isActive ? 'text-gray-300' : 'text-gray-400'}`}>{tab.sublabel}</span>
            </button>
          );
        })}
      </div>

      {/* Browser frame */}
      <div className="rounded-2xl border border-gray-200 shadow-2xl overflow-hidden bg-white">
        {/* Chrome bar */}
        <div className="bg-gray-100 px-4 py-2 flex items-center gap-3 border-b border-gray-200">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-white border border-gray-200 rounded-md px-4 py-0.5 text-[10px] text-gray-400 w-56 text-center">
              app.brokerengine.ai
            </div>
          </div>
          <div className="w-12" />
        </div>
        {/* App */}
        <div className="flex h-[440px]">
          <AppSidebar activeTab={activeTab.id} />
          <div
            className="flex-1 overflow-hidden"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(5px)',
              transition: 'opacity 0.18s ease, transform 0.18s ease',
            }}
          >
            {contentMap[activeTab.id]}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FEATURE GRID
// ─────────────────────────────────────────────────────────────────────────────

interface Feature {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  description: string;
}

const FEATURES: Feature[] = [
  { icon: <Target size={20} />, iconBg: 'bg-blue-100 text-blue-600', title: 'Seller Prospecting', description: 'Apollo-powered AI finds business owners matching your ICP every week — revenue, industry, geography — loaded straight into your pipeline.' },
  { icon: <Mail size={20} />, iconBg: 'bg-indigo-100 text-indigo-600', title: 'Cold Email Sequences', description: 'Multi-step outreach via Instantly launches automatically for every new prospect. AI writes the emails in your voice. You never touch it.' },
  { icon: <Brain size={20} />, iconBg: 'bg-purple-100 text-purple-600', title: 'AI Reply Classification', description: 'Every reply is read and scored HOT / WARM / COLD the instant it lands. No inbox management. No missing the one who\'s ready to sell.' },
  { icon: <Bell size={20} />, iconBg: 'bg-red-100 text-red-600', title: 'Instant SMS on HOT Leads', description: 'A seller says they\'re interested — your phone buzzes within 2 minutes. Be first to respond. Close more deals.' },
  { icon: <FileText size={20} />, iconBg: 'bg-violet-100 text-violet-600', title: 'AI Content Engine', description: 'Blog posts, LinkedIn updates, Quora answers, FAQs — generated weekly in your exact voice. Positions you as the go-to M&A advisor in your niche.' },
  { icon: <Gauge size={20} />, iconBg: 'bg-cyan-100 text-cyan-600', title: 'AI Visibility Score', description: 'Tracks how often you appear in ChatGPT, Claude, Perplexity, and Gemini when buyers search for M&A advisors. The metric no one else measures.' },
  { icon: <Radar size={20} />, iconBg: 'bg-green-100 text-green-600', title: 'Competitor Intel Feed', description: 'Monitor every competitor content move, pricing change, and market signal automatically. Know what the competition is doing before your clients do.' },
  { icon: <Mic2 size={20} />, iconBg: 'bg-pink-100 text-pink-600', title: 'Podcast Booking', description: 'Identifies podcasts your sellers and buyers listen to. AI writes a personalized pitch. You get booked. Your credibility compounds.' },
  { icon: <Newspaper size={20} />, iconBg: 'bg-orange-100 text-orange-600', title: 'Earned Media', description: 'Surfaces journalist queries matching your expertise. Draft a response with one click. Get quoted in Inc, Forbes, and outlets your prospects read.' },
  { icon: <Globe size={20} />, iconBg: 'bg-slate-100 text-slate-600', title: 'CRM Integration', description: 'Native two-way sync with GoHighLevel and HubSpot. Every prospect status, reply, and deal stage flows into your CRM automatically.' },
  { icon: <Calendar size={20} />, iconBg: 'bg-teal-100 text-teal-600', title: 'Pre-Meeting Briefs', description: 'Connect Calendly and get a full AI brief before every call — deal context, recent activity, talking points. Walk in prepared every time.' },
  { icon: <Briefcase size={20} />, iconBg: 'bg-amber-100 text-amber-600', title: 'Buyer Database', description: 'Build your buyer list once. The matching agent cross-references every new seller prospect against your buyers and flags overlaps automatically.' },
];

const REPLACED_TOOLS = [
  { name: 'Apollo', what: 'Prospecting' },
  { name: 'Instantly', what: 'Cold email' },
  { name: 'GoHighLevel', what: 'CRM & SMS' },
  { name: 'Beehiiv', what: 'Newsletters' },
  { name: 'PodMatch', what: 'Podcast booking' },
  { name: 'HARO', what: 'Earned media' },
  { name: 'Virtual assistant', what: 'Manual tasks' },
];

// ─────────────────────────────────────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────────────────────────────────────

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white">
      {/* Nav */}
      <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 h-[60px] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/icon.svg" alt="" width={32} height={32} className="rounded-lg" />
            <span className="font-bold text-[18px] text-black tracking-tight">BrokerEngine</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-gray-600 hover:text-black">Features</a>
            <a href="/pricing" className="text-sm text-gray-600 hover:text-black">Pricing</a>
            <a href="/login" className="text-sm text-gray-600 hover:text-black">Login</a>
            <button className="px-6 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-900">Request access</button>
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="pt-20 pb-10 px-6">
        <div className="mx-auto max-w-4xl text-center">
          {/* Pill */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-black text-white rounded-full text-xs font-semibold">
            <Zap size={12} className="text-yellow-400" />
            The complete operating system for M&amp;A advisors
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-5 leading-tight">
            Find sellers. Close pipeline.<br />
            <span className="text-gray-400">Build your brand.</span><br />
            All on autopilot.
          </h1>

          {/* Sub */}
          <p className="text-lg text-gray-500 mb-6 max-w-2xl mx-auto">
            BrokerEngine replaces every tool in your stack — Apollo, Instantly, GoHighLevel, Beehiiv, PodMatch, and your VA — with one AI platform that runs your entire business.
          </p>

          {/* Social proof strip */}
          <div className="flex items-center justify-center gap-6 mb-8 text-sm text-gray-500">
            <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-green-500" />Not just a CRM</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-green-500" />Not just an email tool</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-green-500" />The whole machine</span>
          </div>

          {/* CTA */}
          <div className="flex flex-col md:flex-row gap-3 justify-center mb-4">
            <input type="email" placeholder="Enter your email" className="flex-1 max-w-sm px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black" />
            <button className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-900 whitespace-nowrap">
              Request access <ArrowRight className="inline ml-1" size={14} />
            </button>
          </div>
          <p className="text-xs text-gray-400">14-day trial · No credit card needed · Cancel anytime</p>
        </div>
      </section>

      {/* ── DEMO ── */}
      <section className="py-6 px-6">
        <div className="mx-auto max-w-[1140px] mb-3 text-center">
          <p className="text-sm text-gray-400">See every module — hover to pause</p>
        </div>
        <ProductDemo />
      </section>

      {/* ── REPLACE YOUR STACK ── */}
      <section className="py-16 px-6 border-t border-gray-100 mt-4">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Cancel everything else</p>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
            7 monthly subscriptions. One platform.
          </h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            The average M&A advisor spends $3,000+/mo on tools that don&apos;t talk to each other. BrokerEngine replaces them all — and makes them actually work together.
          </p>
          <div className="flex flex-wrap justify-center gap-2.5 mb-8">
            {REPLACED_TOOLS.map((t) => (
              <div key={t.name} className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full bg-white">
                <span className="w-3.5 h-3.5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <X size={8} className="text-red-500" />
                </span>
                <span className="text-sm font-semibold text-gray-700">{t.name}</span>
                <span className="text-xs text-gray-400">{t.what}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px flex-1 bg-gray-100 max-w-[100px]" />
            <div className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full">
              <Zap size={13} className="text-yellow-400" />
              <span className="text-sm font-bold">BrokerEngine replaces all of them</span>
            </div>
            <div className="h-px flex-1 bg-gray-100 max-w-[100px]" />
          </div>
        </div>
      </section>

      {/* ── FULL FEATURE GRID ── */}
      <section id="features" className="py-20 px-6 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Everything in one platform</p>
            <h2 className="text-4xl font-bold text-black mb-4">One platform. Every lever pulled.</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              From finding your first seller prospect to getting quoted in Forbes — BrokerEngine runs the whole machine on autopilot.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${f.iconBg}`}>{f.icon}</div>
                <h3 className="font-semibold text-black mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">The full revenue loop</p>
            <h2 className="text-4xl font-bold text-black mb-4">
              Set it up once.<br />
              <span className="text-gray-400">It runs forever.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { n: '01', icon: <Settings size={16} />, title: 'You set your ICP once', desc: 'Tell BrokerEngine who you\'re hunting — industry, revenue range, geography. Takes 5 minutes.' },
              { n: '02', icon: <Target size={16} />, title: 'Apollo scans weekly', desc: '500–2,000 scored business owners pulled and ranked against your ICP. Loaded into your pipeline automatically.' },
              { n: '03', icon: <Mail size={16} />, title: 'Sequences run on autopilot', desc: 'AI-written emails go out in your voice. Multi-step follow-ups. Every prospect touched without you lifting a finger.' },
              { n: '04', icon: <Brain size={16} />, title: 'Replies get sorted instantly', desc: 'Every reply classified HOT, WARM, or COLD. You only see what matters. HOT gets a text to your phone in minutes.' },
              { n: '05', icon: <FileText size={16} />, title: 'Your brand builds in parallel', desc: 'Content, podcasts, media hits, AI citations — all running 24/7 while the outreach machine works.' },
              { n: '06', icon: <TrendingUp size={16} />, title: 'You review. You close.', desc: 'Every morning you open BrokerEngine and find: HOT leads to call, content to approve, deals to move forward.' },
            ].map((item) => (
              <div key={item.n} className="flex gap-4 p-5 border border-gray-200 rounded-2xl bg-white">
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  {item.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-gray-300">{item.n}</span>
                    <h3 className="font-semibold text-black text-sm">{item.title}</h3>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="mx-auto max-w-5xl">
          <div className="border border-gray-200 rounded-2xl p-8 bg-white">
            <div className="grid md:grid-cols-4 gap-8 divide-x divide-gray-100">
              <div><p className="text-4xl font-bold text-black mb-1">384M</p><p className="text-sm text-gray-500">API calls / week</p></div>
              <div className="pl-8"><p className="text-4xl font-bold text-black mb-1">2.4M</p><p className="text-sm text-gray-500">Sequences / month</p></div>
              <div className="pl-8"><p className="text-4xl font-bold text-black mb-1">69K+</p><p className="text-sm text-gray-500">Active pipelines</p></div>
              <div className="pl-8"><p className="text-4xl font-bold text-black mb-1">85.2%</p><p className="text-sm text-gray-500">Deal close rate</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-3xl font-bold text-black mb-6 leading-snug">
            &quot;I used to spend 3 hours a day on outreach and CRM updates. Now BrokerEngine handles all of it. I just review and close.&quot;
          </p>
          <p className="text-gray-500">Marcus Reid, Managing Partner · Meridian Advisors</p>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Simple pricing</p>
            <h2 className="text-4xl font-bold text-black mb-3">One HOT lead pays for the year.</h2>
            <p className="text-gray-500 max-w-lg mx-auto">All plans include every feature. Choose by volume.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { name: 'Starter', price: '$499', period: '/mo', highlight: false, features: ['500 prospects/month', 'Cold email sequences', 'HOT/WARM/COLD classification', 'SMS alerts on HOT leads', 'AI content (4 pieces/week)', 'Live prospect dashboard'], cta: 'Start closing deals' },
              { name: 'Pro', price: '$1,299', period: '/mo', highlight: true, features: ['2,000 prospects/month', 'Everything in Starter', 'Multi-sequence campaigns', 'AI visibility scoring', 'Competitor intel feed', 'Podcast booking', 'Pre-meeting briefs'], cta: 'Scale your pipeline' },
              { name: 'Enterprise', price: '$2,499', period: '/mo', highlight: false, features: ['Unlimited prospects', 'Everything in Pro', 'Multi-advisor seats', 'White-label reporting', 'Dedicated CSM', 'Custom integrations'], cta: 'Contact us' },
            ].map((plan) => (
              <div key={plan.name} className={`rounded-2xl border p-7 flex flex-col ${plan.highlight ? 'border-black bg-black text-white' : 'border-gray-200 bg-white'}`}>
                {plan.highlight && <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Most popular</div>}
                <div className="mb-5">
                  <p className={`text-base font-semibold mb-1 ${plan.highlight ? 'text-white' : 'text-black'}`}>{plan.name}</p>
                  <div className="flex items-baseline gap-1">
                    <span className={`text-4xl font-bold ${plan.highlight ? 'text-white' : 'text-black'}`}>{plan.price}</span>
                    <span className="text-gray-400 text-sm">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-2 flex-1 mb-7">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={13} className={`mt-0.5 flex-shrink-0 ${plan.highlight ? 'text-green-400' : 'text-green-500'}`} />
                      <span className={plan.highlight ? 'text-gray-300' : 'text-gray-600'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href="/pricing" className={`block text-center py-3 rounded-full text-sm font-bold transition-colors ${plan.highlight ? 'bg-white text-black hover:bg-gray-100' : 'bg-black text-white hover:bg-gray-900'}`}>
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-xs mt-5">Billed monthly · Cancel anytime · 14-day trial included</p>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-2xl">
          <div className="bg-black rounded-3xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-3">Ready to run the whole machine?</h3>
            <p className="text-gray-400 mb-8">Sign up in 2 minutes. Your agents start working on day one.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
              <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-500 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-white/40" />
              <button className="px-7 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-100 whitespace-nowrap text-sm">
                Request access
              </button>
            </div>
            <a href="/pricing" className="text-sm text-gray-400 hover:text-white">
              See pricing <ChevronRight className="inline" size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 px-6">
        <div className="mx-auto max-w-7xl flex justify-between items-center">
          <p className="font-bold text-black">BrokerEngine</p>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#features" className="hover:text-black">Features</a>
            <a href="/pricing" className="hover:text-black">Pricing</a>
            <a href="/login" className="hover:text-black">Login</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
