'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { ProductTour } from './components/ProductTour';
import {
  ChevronRight,
  Menu,
  X,
  Target,
  Mail,
  MessageSquare,
  Settings,
  Radar,
  FileText,
  CheckCircle2,
  Brain,
  TrendingUp,
  Bell,
  Briefcase,
  ArrowRight,
  Lock,
  DollarSign,
  Users,
  Eye,
  Shield,
  History,
  KeyRound,
  Calculator,
} from 'lucide-react';

type TabId = 'deals' | 'outreach' | 'replies' | 'intel';

interface DemoTab {
  id: TabId;
  emoji: string;
  label: string;
  sublabel: string;
}

const DEMO_TABS: DemoTab[] = [
  { id: 'deals',      emoji: '🗂️', label: 'Deal Room',      sublabel: 'Secure pipeline' },
  { id: 'outreach',   emoji: '📧', label: 'Outreach',        sublabel: 'You approve, it sends' },
  { id: 'replies',    emoji: '🔥', label: 'Hot Replies',     sublabel: 'AI triage' },
  { id: 'intel',      emoji: '🔭', label: 'Market Intel',    sublabel: 'Competitor feed' },
];

function AppSidebar({ activeTab }: { activeTab: TabId }) {
  const navItems: { id: TabId; label: string; icon: React.ReactNode }[] = [
    { id: 'deals',      label: 'Deal Pipeline', icon: <Briefcase size={13} /> },
    { id: 'deals',      label: 'Sellers',       icon: <Target size={13} /> },
    { id: 'deals',      label: 'Buyers',        icon: <Users size={13} /> },
    { id: 'deals',      label: 'Leads for Sale',icon: <DollarSign size={13} /> },
    { id: 'outreach',   label: 'Inbox',         icon: <MessageSquare size={13} /> },
    { id: 'intel',      label: 'Intel',         icon: <Radar size={13} /> },
    { id: 'deals',      label: 'Assistant',     icon: <Brain size={13} /> },
  ];
  return (
    <div className="w-44 flex-shrink-0 bg-white border-r border-[#f2f4f7] flex flex-col h-full">
      <div className="px-3 py-3 flex items-center gap-2 border-b border-[#f2f4f7]">
        <Image src="/icon.svg" alt="BrokerEngine" width={22} height={22} className="rounded" />
        <span className="font-semibold text-xs text-[#101828]">BrokerEngine</span>
      </div>
      <nav className="flex-1 px-2 py-2 space-y-0.5 overflow-hidden">
        {navItems.map((item, i) => {
          const isActive = item.id === activeTab && i < 2;
          return (
            <div
              key={`${item.id}-${i}`}
              className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[11px] cursor-default ${
                isActive ? 'bg-[#f2f4f7] text-[#101828] font-semibold' : 'text-[#98a2b3]'
              }`}
            >
              <span className={isActive ? 'text-[#101828]' : 'text-[#d0d5dd]'}>{item.icon}</span>
              {item.label}
            </div>
          );
        })}
      </nav>
      <div className="px-3 py-2.5 border-t border-[#f2f4f7] flex items-center gap-2">
        <div className="w-5 h-5 rounded-full bg-[#101828] text-white text-[8px] font-bold flex items-center justify-center flex-shrink-0">N</div>
        <span className="text-[9px] text-[#98a2b3] truncate">nate@broker.com</span>
      </div>
    </div>
  );
}

function DealsContent() {
  const deals = [
    { name: 'Meridian HVAC', stage: 'NDA Signed', rev: '$8.2M', multiple: '4.1x', buyer: '3 matched', status: 'bg-green-100 text-green-700' },
    { name: 'Peak Roofing Co', stage: 'CIM Sent', rev: '$5.1M', multiple: '3.8x', buyer: '7 matched', status: 'bg-blue-100 text-blue-700' },
    { name: 'Cascade Plumbing', stage: 'LOI Stage', rev: '$3.8M', multiple: '3.2x', buyer: '2 matched', status: 'bg-purple-100 text-purple-700' },
    { name: 'Alpine Electric', stage: 'Outreach', rev: '$6.4M', multiple: '4.5x', buyer: '—', status: 'bg-gray-100 text-gray-500' },
  ];
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <div className="px-4 py-3 flex items-center justify-between border-b border-[#f2f4f7]">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-[#101828]">Deal Pipeline</span>
          <span className="text-[10px] text-[#98a2b3]">4 active deals</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Lock size={10} className="text-[#98a2b3]" />
          <span className="text-[9px] text-[#98a2b3]">Secure deal room</span>
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        <table className="w-full text-[11px]">
          <thead className="bg-[#f9fafb] border-b border-[#f2f4f7]">
            <tr>
              <th className="text-left px-4 py-2 text-[#98a2b3] font-medium">Company</th>
              <th className="text-left px-2 py-2 text-[#98a2b3] font-medium">Stage</th>
              <th className="text-left px-2 py-2 text-[#98a2b3] font-medium">Revenue</th>
              <th className="text-left px-2 py-2 text-[#98a2b3] font-medium">Multiple</th>
              <th className="text-left px-2 py-2 text-[#98a2b3] font-medium">Buyers</th>
            </tr>
          </thead>
          <tbody>
            {deals.map((d, i) => (
              <tr key={d.name} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f9fafb]/40'}>
                <td className="px-4 py-2 font-medium text-[#101828]">{d.name}</td>
                <td className="px-2 py-2">
                  <span className={`px-1.5 py-0.5 rounded-full text-[9px] font-bold ${d.status}`}>{d.stage}</span>
                </td>
                <td className="px-2 py-2 text-[#667085]">{d.rev}</td>
                <td className="px-2 py-2 text-[#667085]">{d.multiple}</td>
                <td className="px-2 py-2 text-[#98a2b3]">{d.buyer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="border-t border-[#f2f4f7] px-4 py-2 bg-[#f9fafb] flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
        <span className="text-[10px] text-[#667085]">AI operator active · CIM for Meridian HVAC drafted and ready for your review</span>
      </div>
    </div>
  );
}

function OutreachContent() {
  const seqs = [
    { name: 'HVAC Owner Outreach Q2', step: 3, total: 5, contacts: 42, status: 'Live', sc: 'bg-green-100 text-green-700', open: '28%', reply: '6.2%' },
    { name: 'Roofing Business Sellers', step: 1, total: 5, contacts: 18, status: 'Live', sc: 'bg-green-100 text-green-700', open: '34%', reply: '8.1%' },
    { name: 'Referral Partner — CPAs', step: 2, total: 4, contacts: 31, status: 'Live', sc: 'bg-green-100 text-green-700', open: '22%', reply: '4.3%' },
  ];
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <div className="px-4 py-3 flex items-center justify-between border-b border-[#f2f4f7]">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-[#101828]">Active Sequences</span>
          <span className="px-1.5 py-0.5 bg-green-100 text-green-700 text-[9px] font-bold rounded-full">3 LIVE</span>
        </div>
        <span className="text-[10px] text-[#98a2b3]">AI-written in your voice · you approve before it sends</span>
      </div>
      <div className="flex-1 overflow-auto px-4 py-3 space-y-2">
        {seqs.map((s) => (
          <div key={s.name} className="border border-[#e4e7ec] rounded-xl p-3 bg-white">
            <div className="flex items-start justify-between mb-2">
              <p className="text-[11px] font-semibold text-[#101828] leading-tight">{s.name}</p>
              <span className={`px-1.5 py-0.5 rounded-full text-[9px] font-bold flex-shrink-0 ml-2 ${s.sc}`}>{s.status}</span>
            </div>
            <div className="flex items-center gap-1 mb-2">
              {Array.from({ length: s.total }).map((_, i) => (
                <div key={i} className={`h-1 flex-1 rounded-full ${i < s.step ? 'bg-[#101828]' : 'bg-[#e4e7ec]'}`} />
              ))}
            </div>
            <div className="flex gap-3 text-[10px] text-[#98a2b3]">
              <span>{s.contacts} contacts</span>
              <span>{s.open} open</span>
              <span className="text-green-600 font-medium">{s.reply} reply</span>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-[#f2f4f7] px-4 py-2 bg-[#f9fafb]">
        <span className="text-[10px] text-[#667085]">Apollo prospecting included · connect your own Instantly key</span>
      </div>
    </div>
  );
}

function RepliesContent() {
  const replies = [
    { initials: 'MT', color: 'bg-red-100 text-red-700', name: 'Mike Torres', co: 'Meridian HVAC', msg: "Interested — let's get on a call this week", time: '2m', badge: 'HOT 🔥', bc: 'bg-red-500 text-white', row: 'bg-red-50/60 border-l-2 border-red-400' },
    { initials: 'SC', color: 'bg-red-100 text-red-700', name: 'Sarah Chen', co: 'Peak Roofing', msg: 'This is exactly what we needed. Call?', time: '15m', badge: 'HOT 🔥', bc: 'bg-red-500 text-white', row: 'bg-red-50/60 border-l-2 border-red-400' },
    { initials: 'JR', color: 'bg-yellow-100 text-yellow-700', name: 'James Ruiz', co: 'Alpine Electric', msg: 'Send me more info about the process', time: '1h', badge: 'WARM', bc: 'bg-yellow-100 text-yellow-700', row: 'bg-white' },
    { initials: 'TW', color: 'bg-gray-100 text-gray-500', name: 'Tom Walsh', co: 'Summit HVAC', msg: 'Not interested at this time', time: '3h', badge: 'COLD', bc: 'bg-gray-100 text-gray-400', row: 'bg-white' },
  ];
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <div className="px-4 py-3 flex items-center justify-between border-b border-[#f2f4f7]">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-[#101828]">Reply Inbox</span>
          <span className="px-1.5 py-0.5 bg-red-500 text-white text-[9px] font-bold rounded-full">2 HOT</span>
        </div>
        <span className="text-[9px] text-[#98a2b3]">AI classified · draft reply ready</span>
      </div>
      <div className="flex-1 overflow-auto divide-y divide-[#f2f4f7]">
        {replies.map((r) => (
          <div key={r.name} className={`flex items-center gap-3 px-4 py-2.5 ${r.row}`}>
            <div className={`w-7 h-7 rounded-full text-[9px] font-bold flex items-center justify-center flex-shrink-0 ${r.color}`}>{r.initials}</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="text-[11px] font-semibold text-[#101828]">{r.name}</span>
                <span className="text-[9px] text-[#98a2b3]">· {r.co}</span>
              </div>
              <p className="text-[10px] text-[#98a2b3] truncate">{r.msg}</p>
            </div>
            <div className="flex flex-col items-end gap-1 flex-shrink-0">
              <span className={`px-1.5 py-0.5 rounded-full text-[9px] font-bold ${r.bc}`}>{r.badge}</span>
              <span className="text-[9px] text-[#98a2b3]">{r.time} ago</span>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-[#f2f4f7] px-4 py-2 bg-red-50 flex items-center gap-2">
        <Bell size={11} className="text-red-500 flex-shrink-0" />
        <span className="text-[10px] text-red-600 font-medium">HOT alert in your inbox &amp; dashboard: &quot;Mike Torres at Meridian HVAC replied HOT.&quot;</span>
      </div>
    </div>
  );
}

function IntelContent() {
  const items = [
    { icon: '⚠️', type: 'Competitor', title: 'Deal Studio dropped their retainer fee this week — pricing page updated', time: '1h ago', tag: 'Pricing move', tc: 'bg-orange-100 text-orange-700' },
    { icon: '📰', type: 'Market', title: 'HVAC sector M&A activity up 23% YoY according to Axial data', time: '4h ago', tag: 'Opportunity', tc: 'bg-green-100 text-green-700' },
    { icon: '🔔', type: 'HOT Lead', title: 'Meridian HVAC replied: “Interested in discussing options” — AI classified HOT.', time: '12h ago', tag: 'HOT', tc: 'bg-green-100 text-green-700' },
    { icon: '📢', type: 'Competitor', title: 'ExitRight Advisors published: How to sell your trades business in 2025', time: 'Yesterday', tag: 'Content move', tc: 'bg-gray-100 text-gray-600' },
  ];
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <div className="px-4 py-3 flex items-center justify-between border-b border-[#f2f4f7]">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-[#101828]">Intel Feed</span>
          <span className="text-[10px] text-[#98a2b3]">Live competitor and market signals</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[9px] text-[#98a2b3]">Scanning now</span>
        </div>
      </div>
      <div className="flex-1 overflow-auto divide-y divide-[#f2f4f7]">
        {items.map((item) => (
          <div key={item.title} className="px-4 py-3 flex items-start gap-3">
            <span className="text-base flex-shrink-0 mt-0.5">{item.icon}</span>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] text-[#98a2b3] mb-0.5">{item.type}</p>
              <p className="text-[11px] text-[#101828] leading-snug">{item.title}</p>
            </div>
            <div className="flex flex-col items-end gap-1 flex-shrink-0">
              <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${item.tc}`}>{item.tag}</span>
              <span className="text-[9px] text-[#98a2b3]">{item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

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
    deals:    <DealsContent />,
    outreach: <OutreachContent />,
    replies:  <RepliesContent />,
    intel:    <IntelContent />,
  };

  return (
    <div className="w-full max-w-[1140px] mx-auto">
      <div
        className="flex items-stretch gap-1.5 justify-center mb-6 flex-wrap"
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
                  ? 'bg-[#101828] text-white border-[#101828] shadow-sm'
                  : 'bg-white text-[#667085] border-[#e4e7ec] hover:border-[#d0d5dd] hover:text-[#344054]'
              }`}
            >
              <span className="text-base leading-none mb-0.5">{tab.emoji}</span>
              <span className={`text-xs font-semibold leading-tight ${isActive ? 'text-white' : 'text-[#344054]'}`}>{tab.label}</span>
              <span className={`text-[9px] leading-tight mt-0.5 ${isActive ? 'text-[#d0d5dd]' : 'text-[#98a2b3]'}`}>{tab.sublabel}</span>
            </button>
          );
        })}
      </div>
      <div className="rounded-2xl border border-[#e4e7ec] shadow-[0_24px_60px_-20px_rgba(16,24,40,0.28)] overflow-hidden bg-white">
        <div className="bg-[#f2f4f7] px-4 py-2 flex items-center gap-3 border-b border-[#e4e7ec]">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-white border border-[#e4e7ec] rounded-md px-4 py-0.5 text-[10px] text-[#98a2b3] w-56 text-center">
              app.brokerengine.ai
            </div>
          </div>
          <div className="w-12" />
        </div>
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

// ── Reusable premium primitives ──────────────────────────────────────────────

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-semibold text-[#2563eb] uppercase tracking-[0.18em] mb-4">{children}</p>
  );
}

// ── Three operating pillars ──────────────────────────────────────────────────

const PILLARS = [
  {
    kicker: 'Originate',
    title: 'Find and warm sellers.',
    desc: 'Owners matching your mandate arrive every week. Outreach goes out in your voice — you approve every draft — and replies are triaged the moment they land.',
    points: [
      { icon: <Target size={15} />, text: 'Apollo prospecting included, matched to your ICP' },
      { icon: <Mail size={15} />, text: 'AI outreach sequences you review before they send' },
      { icon: <Bell size={15} />, text: 'HOT / WARM / COLD reply triage with instant in-app & email alerts' },
    ],
  },
  {
    kicker: 'Package',
    title: 'Turn a conversation into a deal.',
    desc: 'Move from a phone call to a shareable, professional package without leaving the workspace — valuations, a full CIM, and a controlled place to disclose it.',
    points: [
      { icon: <Calculator size={15} />, text: 'Valuation calculators for services, SaaS, ecommerce & content' },
      { icon: <FileText size={15} />, text: 'AI CIM generator — draft in minutes, edit section by section' },
      { icon: <Lock size={15} />, text: 'Secure deal room with staged disclosure' },
    ],
  },
  {
    kicker: 'Move',
    title: 'Get to a signed buyer.',
    desc: 'The right buyers surface by fit, sign an NDA in a minute, and everything they touch is logged. Leads you can’t take earn a fee instead of going cold.',
    points: [
      { icon: <Users size={15} />, text: 'Buyer database with fit-ranked matching' },
      { icon: <KeyRound size={15} />, text: 'One-click NDA e-sign that unlocks the data room' },
      { icon: <DollarSign size={15} />, text: 'Leads-for-sale referral marketplace' },
    ],
  },
];

// ── Trust / security items ───────────────────────────────────────────────────

const TRUST = [
  { icon: <KeyRound size={18} />, title: 'NDA-gated access', desc: 'Buyers e-sign a confidentiality agreement before a single seller detail is revealed.' },
  { icon: <Eye size={18} />, title: 'Staged disclosure', desc: 'Listings are anonymized by default. You decide what unlocks, and when.' },
  { icon: <FileText size={18} />, title: 'Document view tracking', desc: 'Every file opened in the data room is logged — you see who looked at what.' },
  { icon: <History size={18} />, title: 'Full audit trail', desc: 'Signatures are timestamped and stored. Nothing moves without a record.' },
  { icon: <Shield size={18} />, title: 'Buyer permissions', desc: 'Confidential documents are reached only through short-lived, signed links.' },
  { icon: <Lock size={18} />, title: 'Private one-time links', desc: 'Data-room links aren’t listed anywhere and aren’t guessable.' },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white text-[#101828]">
      {/* NAV */}
      <nav className="sticky top-0 z-50 w-full border-b border-[#e4e7ec] glass-nav">
        <div className="mx-auto max-w-7xl px-6 h-[72px] flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-[10px] brand-gradient flex items-center justify-center shadow-sm">
              <Image src="/icon.svg" alt="" width={18} height={18} className="brightness-0 invert" />
            </span>
            <span className="font-semibold text-[17px] tracking-tight">BrokerEngine</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#platform" className="text-sm text-[#475467] hover:text-[#101828] transition-colors">Platform</a>
            <a href="#security" className="text-sm text-[#475467] hover:text-[#101828] transition-colors">Security</a>
            <a href="/pricing" className="text-sm text-[#475467] hover:text-[#101828] transition-colors">Pricing</a>
            <a href="https://app.brokerengine.ai/demo" className="text-sm text-[#475467] hover:text-[#101828] transition-colors">Live demo</a>
            <a href="/login" className="text-sm text-[#475467] hover:text-[#101828] transition-colors">Login</a>
            <a href="/signup" className="px-5 py-2 brand-gradient text-white rounded-full text-sm font-medium hover:opacity-90 transition-opacity shadow-sm">Request access</a>
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-[#101828]">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#e4e7ec] bg-white px-6 py-4 flex flex-col gap-3">
            <a href="#platform" className="text-sm text-[#475467]">Platform</a>
            <a href="#security" className="text-sm text-[#475467]">Security</a>
            <a href="/pricing" className="text-sm text-[#475467]">Pricing</a>
            <a href="https://app.brokerengine.ai/demo" className="text-sm text-[#475467]">Live demo</a>
            <a href="/login" className="text-sm text-[#475467]">Login</a>
            <a href="/signup" className="px-5 py-2.5 brand-gradient text-white rounded-full text-sm font-medium text-center">Request access</a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="page-glow pt-24 pb-16 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 mb-7 px-3.5 py-1.5 bg-white border border-[#e4e7ec] rounded-full text-xs font-medium text-[#475467] shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a]" />
            Now accepting founding brokers · 5 seats
          </div>
          <h1 className="text-[42px] md:text-[62px] font-semibold tracking-[-0.03em] leading-[1.04] mb-6">
            The <span className="brand-text-gradient">operating system</span><br className="hidden sm:block" /> for boutique M&amp;A advisors.
          </h1>
          <p className="text-lg text-[#475467] mb-8 max-w-xl mx-auto leading-relaxed">
            Prospecting, CIMs, a secure deal room, buyer matching, and outreach — one calm, private workspace instead of six logins.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <a href="/signup" className="px-7 py-3.5 brand-gradient text-white rounded-full font-medium hover:opacity-90 transition-opacity shadow-sm inline-flex items-center justify-center gap-1.5">
              Apply for founding access <ArrowRight size={16} />
            </a>
            <a href="https://app.brokerengine.ai/demo" className="px-7 py-3.5 bg-white border border-[#d0d5dd] text-[#344054] rounded-full font-medium hover:border-[#98a2b3] hover:text-[#101828] transition-colors inline-flex items-center justify-center gap-1.5">
              See the live demo →
            </a>
          </div>
          <div className="flex items-center justify-center gap-x-6 gap-y-2 text-sm text-[#667085] flex-wrap">
            <span className="flex items-center gap-1.5"><CheckCircle2 size={15} className="text-[#16a34a]" />Secure NDA-gated deal room</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={15} className="text-[#16a34a]" />AI CIM generator included</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={15} className="text-[#16a34a]" />Apollo prospecting on day one</span>
          </div>
        </div>
      </section>

      {/* PRODUCT PREVIEW */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-[1140px] mb-4 text-center">
          <p className="text-sm text-[#98a2b3]">The real app — it cycles through the modules on its own. Hover to pause.</p>
        </div>
        <a href="https://app.brokerengine.ai/demo" className="block group">
          <ProductDemo />
          <p className="text-center text-sm text-[#667085] mt-6 group-hover:text-[#101828] transition-colors">
            Open the live demo — no signup, read-only, real data →
          </p>
        </a>
      </section>

      {/* BEFORE / AFTER */}
      <section className="py-20 px-6 bg-[#f9fafb] border-y border-[#e4e7ec]">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <Eyebrow>The difference</Eyebrow>
            <h2 className="text-3xl md:text-[40px] font-semibold tracking-[-0.02em] leading-tight">
              A deal shouldn’t live in six tabs.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {/* Before */}
            <div className="rounded-2xl border border-[#e4e7ec] bg-white p-7">
              <p className="text-[11px] font-semibold text-[#98a2b3] uppercase tracking-[0.16em] mb-5">Before BrokerEngine</p>
              <ul className="space-y-3.5">
                {[
                  'A CRM, a deal room, an outreach tool, a prospect database, an e-sign app, and a CIM writer — six logins, six bills.',
                  'Deals stall in your inbox because nothing tells you which reply is hot.',
                  'CIMs written by hand over a weekend.',
                  'Buyer matching lives in a spreadsheet you cross-reference by memory.',
                  'Disqualified sellers go cold and earn nothing.',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-[#667085] leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#d0d5dd] flex-shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            {/* After */}
            <div className="rounded-2xl border border-[#101828] bg-[#101828] text-white p-7 shadow-[0_24px_60px_-24px_rgba(16,24,40,0.5)]">
              <p className="text-[11px] font-semibold text-white/50 uppercase tracking-[0.16em] mb-5">On BrokerEngine</p>
              <ul className="space-y-3.5">
                {[
                  'One workspace. One login. One $200/mo bill, priced on the page.',
                  'Every reply triaged HOT / WARM / COLD, with the hot ones surfaced instantly.',
                  'A full CIM drafted in minutes, then edited in your voice.',
                  'Buyers ranked by fit and sent an NDA in one click.',
                  'Leads you can’t take listed to other brokers for a fee on close.',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-white/80 leading-relaxed">
                    <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-[#4ade80]" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM / PILLARS */}
      <section id="platform" className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <Eyebrow>The platform</Eyebrow>
            <h2 className="text-3xl md:text-[40px] font-semibold tracking-[-0.02em] leading-tight mb-4">
              Three motions. One system.
            </h2>
            <p className="text-[#667085] text-lg leading-relaxed">
              Originate, package, and move a deal — end to end, without exporting a thing.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {PILLARS.map((p) => (
              <div key={p.kicker} className="card-premium rounded-2xl p-7 flex flex-col">
                <p className="text-[11px] font-semibold text-[#2563eb] uppercase tracking-[0.16em] mb-3">{p.kicker}</p>
                <h3 className="text-xl font-semibold tracking-[-0.01em] mb-3 leading-snug">{p.title}</h3>
                <p className="text-sm text-[#667085] leading-relaxed mb-6">{p.desc}</p>
                <ul className="space-y-3 mt-auto">
                  {p.points.map((pt) => (
                    <li key={pt.text} className="flex items-start gap-3">
                      <span className="mt-0.5 w-7 h-7 rounded-lg bg-[#f2f4f7] text-[#344054] flex items-center justify-center flex-shrink-0">{pt.icon}</span>
                      <span className="text-[13px] text-[#475467] leading-relaxed pt-1">{pt.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT TOUR (dark accent band — the one place we go dark) */}
      <ProductTour />

      {/* SECURITY / TRUST */}
      <section id="security" className="py-24 px-6 bg-[#f9fafb] border-y border-[#e4e7ec]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <Eyebrow>Security &amp; trust</Eyebrow>
            <h2 className="text-3xl md:text-[40px] font-semibold tracking-[-0.02em] leading-tight mb-4">
              Built like the deal depends on it.
            </h2>
            <p className="text-[#667085] text-lg leading-relaxed">
              Confidentiality isn’t a feature bolted on the side. It’s how the deal room works by default.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {TRUST.map((t) => (
              <div key={t.title} className="card-premium rounded-2xl p-6">
                <div className="w-11 h-11 rounded-xl bg-white border border-[#e4e7ec] text-[#2563eb] flex items-center justify-center mb-4 shadow-sm">{t.icon}</div>
                <h3 className="font-semibold mb-1.5">{t.title}</h3>
                <p className="text-sm text-[#667085] leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT RUNS — operating timeline */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <Eyebrow>How it runs</Eyebrow>
            <h2 className="text-3xl md:text-[40px] font-semibold tracking-[-0.02em] leading-tight">
              Set it up once. It runs every week.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { n: '01', icon: <Settings size={16} />, title: 'Complete your voice profile', desc: 'A 20-minute setup. Your niche, deal size, and how you write. Every AI step uses it from day one.' },
              { n: '02', icon: <Target size={16} />, title: 'Prospects appear automatically', desc: 'Apollo surfaces business owners matching your ICP each week, straight into your pipeline. No manual searching.' },
              { n: '03', icon: <Mail size={16} />, title: 'AI runs outreach in your voice', desc: 'Multi-step sequences go out through your Instantly account. You review every draft before it sends.' },
              { n: '04', icon: <Brain size={16} />, title: 'HOT replies surface instantly', desc: 'Every reply classified HOT, WARM, or COLD. Hot ones alert you in-app and by email, with a draft reply ready.' },
              { n: '05', icon: <Lock size={16} />, title: 'The deal room handles the process', desc: 'NDA → data room → CIM → buyer matching, all inside BrokerEngine. Secure, staged, and tracked.' },
              { n: '06', icon: <TrendingUp size={16} />, title: 'You review. You close.', desc: 'Open your dashboard each morning: hot leads to call, drafts to approve, deals to advance. That’s the job.' },
            ].map((item) => (
              <div key={item.n} className="flex gap-4 p-6 card-premium rounded-2xl">
                <div className="w-10 h-10 rounded-full bg-[#101828] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  {item.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-[#d0d5dd]">{item.n}</span>
                    <h3 className="font-semibold text-[15px]">{item.title}</h3>
                  </div>
                  <p className="text-sm text-[#667085] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 px-6 bg-[#f9fafb] border-y border-[#e4e7ec]">
        <div className="mx-auto max-w-lg">
          <div className="text-center mb-10">
            <Eyebrow>Pricing</Eyebrow>
            <h2 className="text-3xl md:text-[40px] font-semibold tracking-[-0.02em] leading-tight mb-3">
              One qualified conversation covers the year.
            </h2>
            <p className="text-[#667085] leading-relaxed">Everything included. One plan. Founding brokers lock this rate for life.</p>
          </div>
          <div className="rounded-3xl border border-[#101828] bg-[#101828] text-white p-8 shadow-[0_30px_70px_-30px_rgba(16,24,40,0.6)]">
            <div className="text-[10px] font-semibold text-white/50 uppercase tracking-[0.16em] mb-4">Founding broker price</div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-5xl font-semibold tracking-tight">$200</span>
              <span className="text-white/50">/mo · 5 seats</span>
            </div>
            <p className="text-sm text-white/50 mb-7">Locked for life for the first 5 brokers. Rises after launch.</p>
            <a href="/signup" className="block text-center py-3.5 rounded-full text-sm font-semibold bg-white text-[#101828] hover:bg-[#f2f4f7] transition-colors mb-7">
              Apply for founding access
            </a>
            <ul className="space-y-3">
              {[
                'Apollo prospecting included — we cover the cost',
                'Secure deal room + NDA e-sign',
                'AI CIM generator + valuation calculators',
                'HOT / WARM / COLD reply triage + alerts',
                'Buyer database + fit-ranked matching',
                'Leads-for-sale referral marketplace',
                'Competitor intel feed',
                'AI operator that knows your pipeline',
              ].map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm">
                  <CheckCircle2 size={15} className="mt-0.5 flex-shrink-0 text-[#4ade80]" />
                  <span className="text-white/80">{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-center text-[#98a2b3] text-xs mt-6">No credit card required. Founding brokers get white-glove onboarding at no charge.</p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-6 band-dark">
        <div className="mx-auto max-w-2xl text-center text-white">
          <h3 className="text-3xl md:text-[38px] font-semibold tracking-[-0.02em] leading-tight mb-4">Your pipeline doesn’t run itself.<br className="hidden sm:block" /> Ours does.</h3>
          <p className="text-white/60 mb-9 max-w-lg mx-auto leading-relaxed">
            Complete your voice profile in 20 minutes. Your workspace starts finding and qualifying sellers the same week. Founding brokers get white-glove onboarding at no charge.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <a href="/signup" className="px-7 py-3.5 bg-white text-[#101828] rounded-full font-semibold hover:bg-[#f2f4f7] transition-colors inline-flex items-center justify-center gap-1.5">
              Apply for founding access <ArrowRight size={16} />
            </a>
            <a href="https://app.brokerengine.ai/demo" className="px-7 py-3.5 border border-white/25 text-white rounded-full font-medium hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-1.5">
              Explore the live demo →
            </a>
          </div>
          <a href="/pricing" className="text-sm text-white/50 hover:text-white inline-flex items-center gap-1 transition-colors">
            See full pricing <ChevronRight size={14} />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#e4e7ec] py-10 px-6 bg-white">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2.5">
            <span className="w-7 h-7 rounded-lg brand-gradient flex items-center justify-center">
              <Image src="/icon.svg" alt="" width={15} height={15} className="brightness-0 invert" />
            </span>
            <p className="font-semibold">BrokerEngine</p>
          </div>
          <div className="flex gap-8 text-sm text-[#667085]">
            <a href="#platform" className="hover:text-[#101828] transition-colors">Platform</a>
            <a href="#security" className="hover:text-[#101828] transition-colors">Security</a>
            <a href="/pricing" className="hover:text-[#101828] transition-colors">Pricing</a>
            <a href="https://app.brokerengine.ai/demo" className="hover:text-[#101828] transition-colors">Live demo</a>
            <a href="/login" className="hover:text-[#101828] transition-colors">Login</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
