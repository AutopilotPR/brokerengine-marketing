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
  Zap,
  Brain,
  TrendingUp,
  Bell,
  Briefcase,
  ArrowRight,
  Lock,
  DollarSign,
  Users,
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

  { id: 'outreach',   emoji: '📧', label: 'Outreach',        sublabel: 'AI sequences' },
  { id: 'replies',    emoji: '🔥', label: 'Hot Replies',     sublabel: 'AI classification' },
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
    <div className="w-44 flex-shrink-0 bg-white border-r border-gray-100 flex flex-col h-full">
      <div className="px-3 py-3 flex items-center gap-2 border-b border-gray-100">
        <Image src="/icon.svg" alt="BrokerEngine" width={22} height={22} className="rounded" />
        <span className="font-bold text-xs text-black">BrokerEngine</span>
      </div>
      <nav className="flex-1 px-2 py-2 space-y-0.5 overflow-hidden">
        {navItems.map((item, i) => {
          const isActive = item.id === activeTab && i < 2;
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
        <div className="w-5 h-5 rounded-full bg-gray-800 text-white text-[8px] font-bold flex items-center justify-center flex-shrink-0">N</div>
        <span className="text-[9px] text-gray-400 truncate">nate@broker.com</span>
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
      <div className="px-4 py-3 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-black">Deal Pipeline</span>
          <span className="text-[10px] text-gray-400">4 active deals</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Lock size={10} className="text-gray-400" />
          <span className="text-[9px] text-gray-400">Secure deal room</span>
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        <table className="w-full text-[11px]">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="text-left px-4 py-2 text-gray-400 font-medium">Company</th>
              <th className="text-left px-2 py-2 text-gray-400 font-medium">Stage</th>
              <th className="text-left px-2 py-2 text-gray-400 font-medium">Revenue</th>
              <th className="text-left px-2 py-2 text-gray-400 font-medium">Multiple</th>
              <th className="text-left px-2 py-2 text-gray-400 font-medium">Buyers</th>
            </tr>
          </thead>
          <tbody>
            {deals.map((d, i) => (
              <tr key={d.name} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}>
                <td className="px-4 py-2 font-medium text-black">{d.name}</td>
                <td className="px-2 py-2">
                  <span className={`px-1.5 py-0.5 rounded-full text-[9px] font-bold ${d.status}`}>{d.stage}</span>
                </td>
                <td className="px-2 py-2 text-gray-600">{d.rev}</td>
                <td className="px-2 py-2 text-gray-600">{d.multiple}</td>
                <td className="px-2 py-2 text-gray-500">{d.buyer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="border-t border-gray-100 px-4 py-2 bg-gray-50 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
        <span className="text-[10px] text-gray-500">AI operator active · CIM for Meridian HVAC drafted and ready for review</span>
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
      <div className="px-4 py-3 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-black">Active Sequences</span>
          <span className="px-1.5 py-0.5 bg-green-100 text-green-700 text-[9px] font-bold rounded-full">3 LIVE</span>
        </div>
        <span className="text-[10px] text-gray-400">AI-written in your voice · you approve before it sends</span>
      </div>
      <div className="flex-1 overflow-auto px-4 py-3 space-y-2">
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
      <div className="border-t border-gray-100 px-4 py-2 bg-gray-50">
        <span className="text-[10px] text-gray-500">Apollo prospecting included · connect your own Instantly key</span>
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
      <div className="px-4 py-3 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-black">Reply Inbox</span>
          <span className="px-1.5 py-0.5 bg-red-500 text-white text-[9px] font-bold rounded-full">2 HOT</span>
        </div>
        <span className="text-[9px] text-gray-400">AI classified · draft reply ready</span>
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
        <span className="text-[10px] text-red-600 font-medium">HOT alert: &quot;Mike Torres at Meridian HVAC replied HOT.&quot;</span>
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
      <div className="px-4 py-3 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-black">Intel Feed</span>
          <span className="text-[10px] text-gray-400">Live competitor and market signals</span>
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
      <div className="rounded-2xl border border-gray-200 shadow-2xl overflow-hidden bg-white">
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

interface Feature {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  description: string;
}

// ── Stack replacement section ──────────────────────────────────────────

function StackSection() {
  const stackItems = [
    { tool: 'Secure deal room', example: 'ShareVault, SecureDocs', price: '$160–$250/mo' },
    { tool: 'CRM / pipeline', example: 'Pipedrive, HubSpot', price: '$39–$90/mo' },
    { tool: 'Cold outreach', example: 'Instantly, Lemlist', price: '$94/mo' },
    { tool: 'Prospect database', example: 'Apollo, ZoomInfo', price: '$49–$99/mo' },
    { tool: 'E-sign / NDA', example: 'DocuSign, PandaDoc', price: '$19–$30/mo' },
    { tool: 'AI CIM writer', example: 'Deliverables.ai, ChatGPT Pro', price: '$20–$179/mo' },
  ];
  return (
    <section className="py-16 px-6 border-t border-gray-100">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-10">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Why brokers switch</p>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
            The average broker runs<br />
            <span className="text-gray-400">5–6 tools to close one deal.</span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Deal room. CRM. Outreach. Prospect database. E-sign. CIM writer. Each tool a separate login, a separate bill, a separate workflow. BrokerEngine replaces the whole stack — $200/mo, priced on the page.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-sm mb-6" id="why-brokers-switch">
          <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200 px-4 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
            <div>Tool category</div>
            <div>Typical products</div>
            <div className="text-right">Monthly cost</div>
          </div>
          {stackItems.map((item, i) => (
            <div key={item.tool} className={`grid grid-cols-3 px-4 py-3 text-sm items-center ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/40'}`}>
              <span className="font-medium text-gray-800">{item.tool}</span>
              <span className="text-gray-400 text-xs">{item.example}</span>
              <span className="text-right text-gray-600">{item.price}</span>
            </div>
          ))}
          <div className="grid grid-cols-3 px-4 py-4 text-sm items-center bg-gray-50 border-t-2 border-gray-200">
            <span className="font-bold text-black">Full stack total</span>
            <span className="text-gray-400 text-xs">Without buyer matching</span>
            <span className="text-right font-bold text-black">$481–$742/mo</span>
          </div>
        </div>
        <p className="text-center text-sm text-gray-500 mb-6">
          Rather click around yourself?{' '}
          <a href="https://app.brokerengine.ai/demo" className="font-medium text-black underline underline-offset-2 hover:text-emerald-600 transition-colors">
            Open the live demo — no signup, real data.
          </a>
        </p>
        <div className="rounded-2xl border-2 border-black bg-black text-white p-6 text-center">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">BrokerEngine</p>
          <p className="text-3xl font-bold mb-1">$200/mo</p>
          <p className="text-gray-400 text-sm">All of the above — plus AI CIM generation, buyer matching, and outreach — in one login. Apollo prospecting included.</p>
        </div>
      </div>
    </section>
  );
}

const FEATURES: Feature[] = [
  {
    icon: <Lock size={20} />, iconBg: 'bg-blue-100 text-blue-600',
    title: 'Secure Deal Room',
    description: 'Anonymized listings with staged disclosure. Buyers e-sign an NDA before seeing any seller details. Document vault with view tracking. Full audit trail. Built-in — not bolted on.',
  },

  {
    icon: <FileText size={20} />, iconBg: 'bg-purple-100 text-purple-600',
    title: 'AI CIM Generator',
    description: 'Drop in deal data and the AI operator drafts a full Confidential Information Memorandum in minutes. Structured sections, your voice, ready to share with qualified buyers.',
  },
  {
    icon: <Users size={20} />, iconBg: 'bg-amber-100 text-amber-600',
    title: 'Buyer Database + Matching',
    description: 'Add your buyer network once. When a seller reaches the right stage, the platform identifies matches and drafts a teaser for your review. You approve. It sends.',
  },
  {
    icon: <DollarSign size={20} />, iconBg: 'bg-emerald-100 text-emerald-600',
    title: 'Leads-for-Sale Referral Marketplace',
    description: 'Disqualified sellers don\'t disappear — they go to the marketplace. Refer them to other brokers under an e-signed agreement. Earn a fee on close. Nothing like this exists in Deal Studio.',
  },
  {
    icon: <Brain size={20} />, iconBg: 'bg-indigo-100 text-indigo-600',
    title: 'AI Operator',
    description: 'An AI assistant that knows your deals, your pipeline, and your sellers. Ask it anything. It drafts replies, summarizes deals, and runs your workflow — without leaving the dashboard.',
  },
  {
    icon: <Target size={20} />, iconBg: 'bg-orange-100 text-orange-600',
    title: 'Seller Prospecting',
    description: 'Apollo is included — we cover the cost. Business owners matching your ICP appear in your pipeline every week. Revenue range, industry, geography. No manual searching.',
  },
  {
    icon: <Mail size={20} />, iconBg: 'bg-rose-100 text-rose-600',
    title: 'AI Outreach Sequences',
    description: 'Bring your own Instantly key. The AI writes personalized emails in your voice. Multi-step follow-up cadences run on schedule. You review every draft before it sends.',
  },
  {
    icon: <Brain size={20} />, iconBg: 'bg-pink-100 text-pink-600',
    title: 'HOT / WARM / COLD Classification',
    description: 'Every reply is read and classified instantly. HOT replies trigger an immediate alert. Claude drafts a contextual reply in your voice for each one. Nothing moves without your sign-off.',
  },
  {
    icon: <Bell size={20} />, iconBg: 'bg-red-100 text-red-600',
    title: 'HOT Lead Alerts',
    description: 'A seller signals they want to talk. You get an immediate notification. Name, company, and reply included. HOT threshold is configurable — you set the intent floor.',
  },
  {
    icon: <Radar size={20} />, iconBg: 'bg-teal-100 text-teal-600',
    title: 'Competitor Intel Feed',
    description: 'Monitors your named competitors weekly. Flags when their positioning, pricing, or content changes. You stay one step ahead without having to look.',
  },

];

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
            <a href="/how-it-works" className="text-sm text-gray-600 hover:text-black">How it works</a>
            <a href="/pricing" className="text-sm text-gray-600 hover:text-black">Pricing</a>
            <a href="https://app.brokerengine.ai/demo" className="text-sm font-semibold text-emerald-600 hover:text-emerald-700">Live demo</a>
            <a href="/login" className="text-sm text-gray-600 hover:text-black">Login</a>
            <a href="/signup" className="px-6 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-900">Request access</a>
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-20 pb-10 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-black text-white rounded-full text-xs font-semibold">
            <Zap size={12} className="text-yellow-400" />
            Now accepting founding brokers
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-5 leading-tight">
            Draft your CIM in minutes.<br />
            <span className="text-gray-400">Run your deal room. Close more.</span>
          </h1>
          <p className="text-lg text-gray-500 mb-6 max-w-2xl mx-auto">
            BrokerEngine replaces the 5-tool stack brokers assemble themselves — deal room, CRM, CIM writer, outreach, e-sign — in one login, $200/mo, priced on the page. Apollo prospecting included.
          </p>
          <div className="flex items-center justify-center gap-6 mb-8 text-sm text-gray-500 flex-wrap">
            <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-green-500" />Secure deal room + NDA e-sign.</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-green-500" />AI CIM generator included.</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-green-500" />Apollo prospecting on day one.</span>
          </div>
          <div className="flex flex-col md:flex-row gap-3 justify-center mb-4">
            <input type="email" placeholder="Enter your email" className="flex-1 max-w-sm px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black" />
            <a href="/signup" className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-900 whitespace-nowrap inline-flex items-center justify-center gap-1">
              Apply for founding access <ArrowRight size={14} />
            </a>
            <a href="https://app.brokerengine.ai/demo" className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:border-gray-500 hover:text-black whitespace-nowrap inline-flex items-center justify-center gap-1 transition-colors">
              See the live demo →
            </a>
          </div>
          <p className="text-xs text-gray-400">Founding broker pilot — free full access, white-glove onboarding. 5 slots remaining.</p>
          <p className="text-xs text-gray-400 mt-1">No signup · read-only · real data.</p>
        </div>
      </section>

      {/* DEMO */}
      <section className="py-6 px-6">
        <div className="mx-auto max-w-[1140px] mb-3 text-center">
          <p className="text-sm text-gray-400">See every module. Hover to pause.</p>
        </div>
        <a href="https://app.brokerengine.ai/demo" className="block group">
          <ProductDemo />
          <p className="text-center text-sm text-gray-500 mt-4 group-hover:text-black transition-colors">
            This is the real app — click in and try it →
          </p>
        </a>
      </section>

      {/* STACK REPLACEMENT */}
      <StackSection />

      {/* PRODUCT TOUR */}
      <ProductTour />

      {/* FEATURES */}
      <section id="features" className="py-20 px-6 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Everything in one platform</p>
            <h2 className="text-4xl font-bold text-black mb-4">Every lever pulled. Automatically.</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              From valuing a business to closing a deal. BrokerEngine runs it all while you focus on the conversations that matter.
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

      {/* HOW IT WORKS */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">How it runs</p>
            <h2 className="text-4xl font-bold text-black mb-4">
              Set it up once.<br />
              <span className="text-gray-400">It runs every week.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { n: '01', icon: <Settings size={16} />, title: 'Complete your voice profile', desc: 'A 20-minute setup. Tell BrokerEngine your niche, deal size, and how you write. Every AI agent uses this from day one.' },
              { n: '02', icon: <Target size={16} />, title: 'Prospects appear automatically', desc: 'Apollo scans for business owners matching your ICP every week. New prospects land in your pipeline. No manual searching.' },
              { n: '03', icon: <Mail size={16} />, title: 'AI runs outreach in your voice', desc: 'Sequences go out via your Instantly account. AI writes the emails. Multi-step follow-ups run on schedule. You review what goes out.' },
              { n: '04', icon: <Brain size={16} />, title: 'HOT replies surface instantly', desc: 'Every reply classified HOT, WARM, or COLD. HOT replies trigger an immediate alert. Draft reply ready for your review.' },
              { n: '05', icon: <Lock size={16} />, title: 'Deal room handles the process', desc: 'Seller moves to NDA → data room → CIM → buyer matching, all inside BrokerEngine. Secure, staged, and tracked.' },
              { n: '06', icon: <TrendingUp size={16} />, title: 'You review. You close.', desc: 'Open your dashboard each morning. HOT leads to call. Drafts to approve. Deals to advance. That is your whole job.' },
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

      {/* MOAT */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="mx-auto max-w-4xl">
          <div className="border border-gray-200 rounded-2xl p-8 md:p-12 bg-white text-center">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Built for M&amp;A advisors</p>
            <h2 className="text-3xl font-bold text-black mb-6">
              Deal Studio handles the deal room.<br className="hidden md:block" /> BrokerEngine handles everything else too.
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto mb-8">
              An AI operator that drafts CIMs, classifies replies, and runs outreach. A referral marketplace for leads you can’t take. All in one login, $200/mo.
            </p>
            <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
              <div>
                <p className="text-3xl font-bold text-black mb-1">$200</p>
                <p className="text-xs text-gray-500">Founding broker price per month</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-black mb-1">1</p>
                <p className="text-xs text-gray-500">Platform for your entire operation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Simple pricing</p>
            <h2 className="text-4xl font-bold text-black mb-3">One HOT lead pays for the month.</h2>
            <p className="text-gray-500 max-w-lg mx-auto">Everything included. One plan. One price. Founding brokers lock this rate for life.</p>
          </div>
          <div className="max-w-lg mx-auto">
            <div className="rounded-2xl border-2 border-black bg-black text-white p-8">
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Founding broker price</div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold">$200</span>
                <span className="text-gray-400">/mo</span>
              </div>
              <p className="text-sm text-gray-400 mb-7">Locked for life for the first 5 brokers. Will rise after launch.</p>
              <a href="/signup" className="block text-center py-3 rounded-full text-sm font-bold bg-white text-black hover:bg-gray-100 transition mb-7">
                Apply for founding access
              </a>
              <ul className="space-y-3">
                {['500 prospects/mo (Apollo included)', 'Secure deal room + NDA e-sign', 'AI CIM generator', 'HOT / WARM / COLD reply classification + alerts', 'Buyer database + deal matching', 'Leads-for-sale referral marketplace', 'Competitor intel feed', 'AI operator / assistant'].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 size={13} className="mt-0.5 flex-shrink-0 text-green-400" />
                    <span className="text-gray-200">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-center text-gray-400 text-xs mt-5">No credit card required. Founding brokers get white-glove onboarding at no charge. Apollo included — we cover the cost.</p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="mx-auto max-w-2xl">
          <div className="bg-black rounded-3xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-3">Your pipeline does not run itself. Ours does.</h3>
            <p className="text-gray-400 mb-8">Complete your voice profile in 20 minutes. Your AI operator starts finding and qualifying sellers the same week. Founding brokers get white-glove onboarding at no charge.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
              <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-500 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-white/40" />
              <a href="/signup" className="px-7 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-100 whitespace-nowrap text-sm inline-flex items-center justify-center">
                Apply for founding access
              </a>
            </div>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a href="/pricing" className="text-sm text-gray-400 hover:text-white inline-flex items-center gap-1">
                See pricing <ChevronRight size={14} />
              </a>
              <span className="text-gray-600 text-sm">·</span>
              <a href="https://app.brokerengine.ai/demo" className="text-sm text-gray-400 hover:text-white inline-flex items-center gap-1">
                or explore the live demo →
              </a>
            </div>
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
            <a href="#features" className="hover:text-black">Features</a>
            <a href="/how-it-works" className="hover:text-black">How it works</a>
            <a href="/pricing" className="hover:text-black">Pricing</a>
            <a href="/login" className="hover:text-black">Login</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
