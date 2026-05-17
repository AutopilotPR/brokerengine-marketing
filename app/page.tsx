'use client';

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
} from 'lucide-react';

// ── Product Demo Types ─────────────────────────────────────────────────────

type TabId = 'prospect' | 'outreach' | 'replies' | 'dashboard';

interface DemoTab {
  id: TabId;
  label: string;
}

const DEMO_TABS: DemoTab[] = [
  { id: 'prospect', label: 'Prospect' },
  { id: 'outreach', label: 'Outreach' },
  { id: 'replies', label: 'Replies' },
  { id: 'dashboard', label: 'Dashboard' },
];

// ── Sidebar ────────────────────────────────────────────────────────────────

function AppSidebar({ activeTab }: { activeTab: TabId }) {
  const navItems: { id: TabId; label: string; icon: React.ReactNode }[] = [
    { id: 'prospect', label: 'Prospects', icon: <Target size={14} /> },
    { id: 'outreach', label: 'Outreach', icon: <Mail size={14} /> },
    { id: 'replies', label: 'Replies', icon: <MessageSquare size={14} /> },
    { id: 'dashboard', label: 'Dashboard', icon: <BarChart2 size={14} /> },
    { id: 'dashboard', label: 'Settings', icon: <Settings size={14} /> },
  ];

  return (
    <div className="w-48 flex-shrink-0 bg-white border-r border-gray-100 flex flex-col h-full">
      {/* Logo */}
      <div className="px-4 py-4 flex items-center gap-2 border-b border-gray-100">
        <span className="font-bold text-sm text-black">BrokerEngine</span>
        <span className="text-[10px] font-semibold bg-black text-white rounded px-1 py-0.5">AI</span>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-2 py-3 space-y-0.5">
        {navItems.map((item, i) => {
          const isActive = item.id === activeTab && item.label !== 'Settings';
          return (
            <div
              key={`${item.id}-${i}`}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs cursor-default transition-colors ${
                isActive
                  ? 'bg-gray-100 text-black font-medium'
                  : 'text-gray-500 hover:bg-gray-50'
              }`}
            >
              <span className={isActive ? 'text-black' : 'text-gray-400'}>
                {item.icon}
              </span>
              {item.label}
            </div>
          );
        })}
      </nav>

      {/* User */}
      <div className="px-3 py-3 border-t border-gray-100 flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-gray-800 text-white text-[9px] font-bold flex items-center justify-center flex-shrink-0">
          B
        </div>
        <span className="text-[10px] text-gray-400 truncate">broker@firm.com</span>
      </div>
    </div>
  );
}

// ── Tab Content: Prospect ──────────────────────────────────────────────────

function ProspectContent() {
  const rows = [
    { name: 'Meridian HVAC', industry: 'HVAC Services', revenue: '$8.2M', emp: '45', score: '94/100', status: 'HOT', statusColor: 'bg-green-100 text-green-700' },
    { name: 'Peak Roofing Co', industry: 'Roofing', revenue: '$5.1M', emp: '28', score: '87/100', status: 'HOT', statusColor: 'bg-green-100 text-green-700' },
    { name: 'Cascade Plumbing', industry: 'Plumbing', revenue: '$3.8M', emp: '19', score: '72/100', status: 'WARM', statusColor: 'bg-yellow-100 text-yellow-700' },
    { name: 'Alpine Electric', industry: 'Electrical', revenue: '$6.4M', emp: '31', score: '68/100', status: 'WARM', statusColor: 'bg-yellow-100 text-yellow-700' },
    { name: 'Summit HVAC', industry: 'HVAC Services', revenue: '$2.1M', emp: '12', score: '45/100', status: 'COLD', statusColor: 'bg-gray-100 text-gray-500' },
  ];

  return (
    <div className="flex-1 overflow-hidden flex flex-col">
      <div className="px-5 py-4 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center gap-3">
          <h2 className="text-sm font-semibold text-black">Prospects</h2>
          <span className="text-xs text-gray-400">247 companies identified</span>
        </div>
        <button className="px-3 py-1.5 bg-blue-600 text-white text-xs font-medium rounded-lg hover:bg-blue-700 transition-colors">
          Run Apollo Scan
        </button>
      </div>
      <div className="flex-1 overflow-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50">
              <th className="text-left px-5 py-2.5 text-gray-400 font-medium">Company</th>
              <th className="text-left px-3 py-2.5 text-gray-400 font-medium">Industry</th>
              <th className="text-left px-3 py-2.5 text-gray-400 font-medium">Revenue</th>
              <th className="text-left px-3 py-2.5 text-gray-400 font-medium">Employees</th>
              <th className="text-left px-3 py-2.5 text-gray-400 font-medium">Score</th>
              <th className="text-left px-3 py-2.5 text-gray-400 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.name} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                <td className="px-5 py-2.5 font-medium text-black">{row.name}</td>
                <td className="px-3 py-2.5 text-gray-500">{row.industry}</td>
                <td className="px-3 py-2.5 text-gray-600">{row.revenue}</td>
                <td className="px-3 py-2.5 text-gray-500">{row.emp}</td>
                <td className="px-3 py-2.5 text-gray-600 font-medium">{row.score}</td>
                <td className="px-3 py-2.5">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${row.statusColor}`}>
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ── Tab Content: Outreach ──────────────────────────────────────────────────

function OutreachContent() {
  const sequences = [
    { name: 'HVAC Owner Outreach Q2', step: 'Step 3 of 5', contacts: 42, status: 'Live', statusColor: 'bg-green-100 text-green-700', openRate: '28% open rate' },
    { name: 'Roofing Business Sellers', step: 'Step 1 of 5', contacts: 18, status: 'Live', statusColor: 'bg-green-100 text-green-700', openRate: '34% open rate' },
    { name: 'Plumbing Owner Sequence', step: 'Step 2 of 5', contacts: 31, status: 'Paused', statusColor: 'bg-yellow-100 text-yellow-700', openRate: '22% open rate' },
  ];

  return (
    <div className="flex-1 overflow-hidden flex flex-col">
      <div className="px-5 py-4 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center gap-3">
          <h2 className="text-sm font-semibold text-black">Active Sequences</h2>
          <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-[10px] font-semibold rounded-full">3 running</span>
        </div>
        <button className="px-3 py-1.5 bg-blue-600 text-white text-xs font-medium rounded-lg hover:bg-blue-700 transition-colors">
          New Sequence
        </button>
      </div>
      <div className="flex-1 overflow-auto px-5 py-3 space-y-3">
        {sequences.map((seq) => (
          <div key={seq.name} className="bg-white border border-gray-200 rounded-xl px-4 py-3 flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-black truncate">{seq.name}</p>
              <p className="text-[11px] text-gray-400 mt-0.5">{seq.step} · {seq.contacts} contacts</p>
            </div>
            <div className="flex items-center gap-3 ml-4 flex-shrink-0">
              <span className="text-[10px] text-gray-400">{seq.openRate}</span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${seq.statusColor}`}>
                {seq.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Tab Content: Replies ───────────────────────────────────────────────────

function RepliesContent() {
  const replies = [
    { initials: 'MT', name: 'Mike Torres', company: 'Meridian HVAC', message: 'Interested — let\'s get on a call this week', time: '2m ago', badge: 'HOT', badgeColor: 'bg-red-100 text-red-700', rowBg: 'bg-red-50/40' },
    { initials: 'SC', name: 'Sarah Chen', company: 'Peak Roofing', message: 'This is exactly what we needed. Call?', time: '15m ago', badge: 'HOT', badgeColor: 'bg-red-100 text-red-700', rowBg: 'bg-red-50/40' },
    { initials: 'JR', name: 'James Ruiz', company: 'Alpine Electric', message: 'Send me more info about the process', time: '1h ago', badge: 'WARM', badgeColor: 'bg-yellow-100 text-yellow-700', rowBg: 'bg-white' },
    { initials: 'TW', name: 'Tom Walsh', company: 'Summit HVAC', message: 'Not interested at this time', time: '3h ago', badge: 'COLD', badgeColor: 'bg-gray-100 text-gray-500', rowBg: 'bg-white' },
  ];

  return (
    <div className="flex-1 overflow-hidden flex flex-col">
      <div className="px-5 py-4 flex items-center gap-3 border-b border-gray-100">
        <h2 className="text-sm font-semibold text-black">Reply Inbox</h2>
        <span className="px-2 py-0.5 bg-red-100 text-red-700 text-[10px] font-semibold rounded-full">12 new replies</span>
      </div>
      <div className="flex-1 overflow-auto divide-y divide-gray-100">
        {replies.map((r) => (
          <div key={r.name} className={`flex items-center gap-3 px-5 py-3 ${r.rowBg}`}>
            <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-700 text-[10px] font-bold flex items-center justify-center flex-shrink-0">
              {r.initials}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-black">{r.name}</span>
                <span className="text-[10px] text-gray-400">{r.company}</span>
              </div>
              <p className="text-[11px] text-gray-500 truncate mt-0.5">{r.message}</p>
            </div>
            <div className="flex items-center gap-2 ml-2 flex-shrink-0">
              <span className="text-[10px] text-gray-400">{r.time}</span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${r.badgeColor}`}>
                {r.badge}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Tab Content: Dashboard ─────────────────────────────────────────────────

function DashboardContent() {
  const stats = [
    { label: 'Active Prospects', value: '247', sub: '+18 this week', subColor: 'text-green-600' },
    { label: 'Emails Sent', value: '1,842', sub: '42 today', subColor: 'text-gray-400' },
    { label: 'HOT Replies', value: '12', sub: '3 new', subColor: 'text-red-500' },
    { label: 'Pipeline Value', value: '$2.4M', sub: 'Est. value', subColor: 'text-gray-400' },
  ];

  const bars = [
    { label: 'W1', height: 40 },
    { label: 'W2', height: 55 },
    { label: 'W3', height: 45 },
    { label: 'W4', height: 70 },
    { label: 'W5', height: 65 },
    { label: 'W6', height: 82 },
  ];

  return (
    <div className="flex-1 overflow-hidden flex flex-col">
      <div className="px-5 py-4 border-b border-gray-100">
        <h2 className="text-sm font-semibold text-black">Dashboard</h2>
      </div>
      <div className="flex-1 overflow-auto px-5 py-4 space-y-4">
        {/* Stat Cards */}
        <div className="grid grid-cols-2 gap-3">
          {stats.map((s) => (
            <div key={s.label} className="bg-white border border-gray-200 rounded-xl px-4 py-3">
              <p className="text-[10px] text-gray-400 mb-1">{s.label}</p>
              <p className="text-lg font-bold text-black">{s.value}</p>
              <p className={`text-[10px] mt-0.5 font-medium ${s.subColor}`}>{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Bar Chart */}
        <div className="bg-white border border-gray-200 rounded-xl px-4 py-3">
          <p className="text-[10px] font-medium text-gray-500 mb-3">Reply Rate by Week</p>
          <div className="flex items-end gap-2 h-20">
            {bars.map((b) => (
              <div key={b.label} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-full bg-gray-900 rounded-t"
                  style={{ height: `${b.height}%` }}
                />
                <span className="text-[9px] text-gray-400">{b.label}</span>
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
    setTimeout(() => {
      setActiveIndex(index);
      setVisible(true);
    }, 200);
  };

  useEffect(() => {
    if (hovering) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      const next = (activeIndex + 1) % DEMO_TABS.length;
      switchToTab(next);
    }, 3000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeIndex, hovering]);

  const activeTab = DEMO_TABS[activeIndex];

  const contentMap: Record<TabId, React.ReactNode> = {
    prospect: <ProspectContent />,
    outreach: <OutreachContent />,
    replies: <RepliesContent />,
    dashboard: <DashboardContent />,
  };

  return (
    <div className="w-full max-w-[1100px] mx-auto">
      {/* Tab Row */}
      <div
        className="flex items-center gap-8 justify-center mb-6"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {DEMO_TABS.map((tab, i) => {
          const isActive = i === activeIndex;
          return (
            <button
              key={tab.id}
              onClick={() => switchToTab(i)}
              className="relative pb-2 text-sm font-medium transition-colors focus:outline-none"
              style={{ color: isActive ? '#000' : '#9ca3af' }}
            >
              {tab.label}
              <span
                className="absolute bottom-0 left-0 h-0.5 bg-black rounded-full transition-all duration-300"
                style={{ width: isActive ? '100%' : '0%' }}
              />
            </button>
          );
        })}
      </div>

      {/* Browser Frame */}
      <div className="rounded-2xl border border-gray-200 shadow-2xl overflow-hidden bg-white">
        {/* Browser Chrome Bar */}
        <div className="bg-gray-100 px-4 py-2.5 flex items-center gap-3 border-b border-gray-200">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-white border border-gray-200 rounded-md px-4 py-1 text-[11px] text-gray-400 w-64 text-center">
              app.brokerengine.ai
            </div>
          </div>
          <div className="w-16" />
        </div>

        {/* App Frame */}
        <div className="flex h-[480px]">
          <AppSidebar activeTab={activeTab.id} />
          <div
            className="flex-1 overflow-hidden transition-all duration-200"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(6px)',
            }}
          >
            {contentMap[activeTab.id]}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────

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

      {/* ── Product Demo (Attio-style) ── */}
      <section className="py-8 px-6">
        <ProductDemo />
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
