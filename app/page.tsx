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
  Phone,
  TrendingDown,
  Activity,
} from 'lucide-react';

type TabId = 'find' | 'outreach' | 'replies' | 'content' | 'intel' | 'brand';

interface DemoTab {
  id: TabId;
  emoji: string;
  label: string;
  sublabel: string;
}

const DEMO_TABS: DemoTab[] = [
  { id: 'find',     emoji: '🎯', label: 'Find Sellers',   sublabel: 'Apollo prospecting' },
  { id: 'outreach', emoji: '📧', label: 'Run Outreach',   sublabel: 'Instantly sequences' },
  { id: 'replies',  emoji: '🔥', label: 'Hot Replies',    sublabel: 'AI classification + SMS' },
  { id: 'content',  emoji: '✍️', label: 'Draft Content',  sublabel: 'Blog · LinkedIn · Quora' },
  { id: 'intel',    emoji: '🔭', label: 'Watch Market',   sublabel: 'Competitor intel feed' },
  { id: 'brand',    emoji: '🎙', label: 'Build Brand',    sublabel: 'Podcasts · Media · AI score' },
];

function AppSidebar({ activeTab }: { activeTab: TabId }) {
  const navItems: { id: TabId; label: string; icon: React.ReactNode }[] = [
    { id: 'find',     label: 'Sellers',  icon: <Target size={13} /> },
    { id: 'outreach', label: 'Outreach', icon: <Mail size={13} /> },
    { id: 'replies',  label: 'Replies',  icon: <MessageSquare size={13} /> },
    { id: 'content',  label: 'Content',  icon: <FileText size={13} /> },
    { id: 'intel',    label: 'Intel',    icon: <Radar size={13} /> },
    { id: 'brand',    label: 'Brand',    icon: <TrendingUp size={13} /> },
    { id: 'brand',    label: 'Buyers',   icon: <Briefcase size={13} /> },
    { id: 'brand',    label: 'Settings', icon: <Settings size={13} /> },
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

function FindContent() {
  const rows = [
    { name: 'Meridian HVAC', ind: 'HVAC Services', rev: '$8.2M', score: 94, status: 'HOT', sc: 'bg-green-100 text-green-700' },
    { name: 'Peak Roofing Co', ind: 'Roofing', rev: '$5.1M', score: 87, sc: 'bg-green-100 text-green-700', status: 'HOT' },
    { name: 'Cascade Plumbing', ind: 'Plumbing', rev: '$3.8M', score: 72, sc: 'bg-yellow-100 text-yellow-700', status: 'WARM' },
    { name: 'Alpine Electric', ind: 'Electrical', rev: '$6.4M', score: 68, sc: 'bg-yellow-100 text-yellow-700', status: 'WARM' },
    { name: 'Summit Landscaping', ind: 'Landscaping', rev: '$1.9M', score: 41, sc: 'bg-gray-100 text-gray-500', status: 'COLD' },
  ];
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <div className="px-4 py-3 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-black">Seller Prospects</span>
          <span className="text-[10px] text-gray-400">247 found · updated 4h ago</span>
        </div>
        <span className="text-[10px] px-2 py-1 bg-blue-50 text-blue-600 rounded-full font-medium">Apollo</span>
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
    { time: 'Day 3', event: 'Follow-up queued for non-openers', done: false },
    { time: 'Day 7', event: 'Final touch scheduled', done: false },
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
        <span className="text-[10px] text-red-600 font-medium">SMS sent: &quot;Mike Torres at Meridian HVAC replied HOT. Call now.&quot;</span>
      </div>
    </div>
  );
}

function ContentContent() {
  const items = [
    { type: 'Reddit', title: 'What multiple should I expect for an HVAC business doing $5M revenue?', status: 'Ready to post', sc: 'bg-purple-100 text-purple-700', when: '2h ago', link: true },
    { type: 'Blog', title: '5 signs a seller is serious about exiting this year', status: 'Draft', sc: 'bg-gray-100 text-gray-600', when: 'Today', link: false },
    { type: 'Quora', title: 'How long does the M&A process take for a $3M to $10M business?', status: 'Ready to post', sc: 'bg-purple-100 text-purple-700', when: 'Yesterday', link: true },
    { type: 'LinkedIn', title: 'Why HVAC business owners are selling now and what it means for buyers', status: 'Draft', sc: 'bg-gray-100 text-gray-600', when: 'Mon', link: false },
  ];
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <div className="px-4 py-3 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-black">Content Drafts</span>
          <span className="text-[10px] text-gray-400">In your voice · ready to review</span>
        </div>
        <span className="text-[10px] px-2 py-1 bg-purple-50 text-purple-600 rounded-full font-medium">AI generated</span>
      </div>
      <div className="flex-1 overflow-auto divide-y divide-gray-100">
        {items.map((item) => (
          <div key={item.title} className="px-4 py-3 flex items-start gap-3">
            <div className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-gray-100 text-gray-500 flex-shrink-0 mt-0.5 w-14 text-center">{item.type}</div>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] text-black leading-snug">{item.title}</p>
              {item.link && <p className="text-[9px] text-purple-500 mt-0.5">View source post →</p>}
            </div>
            <div className="flex flex-col items-end gap-1 flex-shrink-0">
              <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${item.sc}`}>{item.status}</span>
              <span className="text-[9px] text-gray-400">{item.when}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-100 px-4 py-2 bg-gray-50 flex items-center justify-between">
        <span className="text-[10px] text-gray-500">You review and publish. Nothing goes out automatically.</span>
        <span className="text-[10px] text-purple-600 font-medium">Tone: Consultative</span>
      </div>
    </div>
  );
}

function IntelContent() {
  const items = [
    { icon: '⚠️', type: 'Competitor', title: 'Deal Capital dropped their retainer to $2,500 down from $4,000', time: '1h ago', tag: 'Pricing move', tc: 'bg-orange-100 text-orange-700' },
    { icon: '📰', type: 'Market', title: 'HVAC sector M&A activity up 23% YoY according to Axial data', time: '4h ago', tag: 'Opportunity', tc: 'bg-green-100 text-green-700' },
    { icon: '🤖', type: 'AI Citation', title: 'Claude cited Midwest M&A Advisors for HVAC exits. Not you. Your score: 42.', time: '12h ago', tag: 'AI Visibility', tc: 'bg-blue-100 text-blue-700' },
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

function BrandContent() {
  const podcasts = [
    { name: 'The Exit Strategy Podcast', listeners: '42K', status: 'Pitch sent', sc: 'bg-yellow-100 text-yellow-700' },
    { name: 'M&A Science', listeners: '89K', status: 'Booked', sc: 'bg-green-100 text-green-700' },
    { name: 'Business Buying Strategies', listeners: '31K', status: 'Pending', sc: 'bg-gray-100 text-gray-500' },
  ];
  const score = { current: 72 };
  const media = [
    { outlet: 'Inc.com', query: 'Expert comment: M&A trends in trades businesses 2025', deadline: '2 days' },
    { outlet: 'Forbes', query: 'What should small business owners know before selling?', deadline: '5 days' },
  ];
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-100">
        <span className="text-xs font-semibold text-black">Brand and Authority</span>
      </div>
      <div className="flex-1 overflow-auto px-4 py-3 space-y-4">
        <div className="border border-gray-200 rounded-xl p-3 bg-white">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[10px] font-semibold text-gray-700">AI Visibility Score</p>
            <span className="text-[9px] text-green-600 font-bold">+14 pts this month</span>
          </div>
          <div className="flex items-end gap-3">
            <span className="text-3xl font-bold text-black">{score.current}</span>
            <div className="flex-1 pb-1">
              <p className="text-[9px] text-gray-400 mb-1.5">Checked weekly in Claude. ChatGPT, Perplexity, and Google AI Overview coming.</p>
              <div className="w-full h-1.5 bg-gray-100 rounded-full">
                <div className="h-full bg-black rounded-full" style={{ width: `${score.current}%` }} />
              </div>
            </div>
          </div>
        </div>
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

// ── Live Machine Section ─────────────────────────────────────────────────

function LiveMachineSection() {
  const weekLabels = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8'];
  const scoreData  = [18, 24, 22, 31, 38, 44, 52, 71];
  const maxScore   = 80;

  const prospects = [
    { initials: 'MH', color: 'bg-violet-500', name: 'Mike Hartley', company: 'Hartley HVAC', rev: '$6.2M', badge: 'HOT', badgeColor: 'bg-red-500 text-white', sms: '2m ago' },
    { initials: 'SC', color: 'bg-blue-500',   name: 'Sarah Chen',   company: 'Peak Roofing',  rev: '$5.1M', badge: 'HOT', badgeColor: 'bg-red-500 text-white', sms: '15m ago' },
    { initials: 'JR', color: 'bg-emerald-500',name: 'James Ruiz',   company: 'Alpine Elec',   rev: '$3.8M', badge: 'WARM', badgeColor: 'bg-yellow-400 text-black', sms: null },
    { initials: 'TW', color: 'bg-slate-400',  name: 'Tom Walsh',    company: 'Summit HVAC',   rev: '$1.9M', badge: 'COLD', badgeColor: 'bg-gray-200 text-gray-500', sms: null },
  ];

  const activities = [
    { dot: 'bg-red-500',    text: 'Mike Hartley replied HOT',          sub: 'SMS fired to your phone',        time: '2m' },
    { dot: 'bg-violet-500', text: '12 new prospects added',             sub: 'Apollo scan complete',            time: '1h' },
    { dot: 'bg-blue-500',   text: 'Sequence step 3 sent to 38 contacts',sub: 'Powered by Instantly',           time: '9h' },
    { dot: 'bg-emerald-500',text: 'Blog draft ready for review',        sub: 'AI content engine',               time: '1d' },
    { dot: 'bg-yellow-400', text: 'Competitor update detected',         sub: 'Deal Capital changed pricing',    time: '2d' },
  ];

  return (
    <section className="relative py-24 px-6 bg-[#0D1117] overflow-hidden">
      {/* subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="relative mx-auto max-w-7xl">
        {/* heading */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold text-violet-400 uppercase tracking-widest mb-3">The pipeline. Running now.</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Every lever pulled.<br />
            <span className="text-[#6E727A]">While you focus on closing.</span>
          </h2>
          <p className="text-[#6E727A] max-w-xl mx-auto">
            Prospects found. Outreach sent. Replies classified. Brand built. All running in parallel, automatically, in the background.
          </p>
        </div>

        {/* three-column grid */}
        <div className="grid lg:grid-cols-3 gap-5">

          {/* COL 1: Prospect pipeline */}
          <div className="rounded-2xl border border-[#2A2E35] bg-[#141820] overflow-hidden flex flex-col">
            <div className="px-5 py-4 border-b border-[#2A2E35] flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-white">Seller pipeline</p>
                <p className="text-xs text-[#6E727A] mt-0.5">Updated 4 hours ago</p>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] text-[#6E727A]">Apollo live</span>
              </div>
            </div>
            <div className="flex-1 divide-y divide-[#1E2229]">
              {prospects.map((p) => (
                <div key={p.name} className="flex items-center gap-3 px-5 py-3">
                  <div className={`w-8 h-8 rounded-full ${p.color} flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0`}>
                    {p.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] text-white font-medium truncate">{p.name}</p>
                    <p className="text-[11px] text-[#6E727A] truncate">{p.company} · {p.rev}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${p.badgeColor}`}>{p.badge}</span>
                    {p.sms && (
                      <span className="text-[10px] text-violet-400 flex items-center gap-0.5">
                        <Bell size={9} />SMS {p.sms}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="px-5 py-3 border-t border-[#2A2E35] bg-[#0D1117]">
              <p className="text-[11px] text-[#6E727A]">247 total prospects · <span className="text-violet-400">2 HOT this week</span></p>
            </div>
          </div>

          {/* COL 2: Activity feed */}
          <div className="rounded-2xl border border-[#2A2E35] bg-[#141820] overflow-hidden flex flex-col">
            <div className="px-5 py-4 border-b border-[#2A2E35]">
              <p className="text-sm font-semibold text-white">Live activity</p>
              <p className="text-xs text-[#6E727A] mt-0.5">Everything your agents did</p>
            </div>
            <div className="flex-1 divide-y divide-[#1E2229]">
              {activities.map((a, i) => (
                <div key={i} className="flex items-start gap-3 px-5 py-3.5">
                  <div className="flex flex-col items-center gap-1 pt-1 flex-shrink-0">
                    <div className={`w-2 h-2 rounded-full ${a.dot} flex-shrink-0`} />
                    {i < activities.length - 1 && <div className="w-px flex-1 min-h-4 bg-[#2A2E35]" />}
                  </div>
                  <div className="flex-1 min-w-0 pb-0.5">
                    <p className="text-[13px] text-white font-medium leading-snug">{a.text}</p>
                    <p className="text-[11px] text-[#6E727A] mt-0.5">{a.sub}</p>
                  </div>
                  <span className="text-[11px] text-[#6E727A] flex-shrink-0 mt-0.5">{a.time}</span>
                </div>
              ))}
            </div>
            <div className="px-5 py-3 border-t border-[#2A2E35] bg-[#0D1117]">
              <p className="text-[11px] text-[#6E727A]">All actions logged. Nothing runs in the dark.</p>
            </div>
          </div>

          {/* COL 3: AI visibility score chart */}
          <div className="rounded-2xl border border-[#2A2E35] bg-[#141820] overflow-hidden flex flex-col">
            <div className="px-5 py-4 border-b border-[#2A2E35] flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-white">AI Visibility Score</p>
                <p className="text-xs text-[#6E727A] mt-0.5">How often AI cites you</p>
              </div>
              <div className="flex items-center gap-1 text-emerald-400 text-xs font-bold">
                <TrendingUp size={13} />
                +53 pts
              </div>
            </div>
            {/* chart */}
            <div className="flex-1 px-5 pt-5 pb-3">
              <div className="flex items-end gap-1.5 h-32">
                {scoreData.map((val, i) => {
                  const isLast = i === scoreData.length - 1;
                  const pct = (val / maxScore) * 100;
                  return (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      {isLast && (
                        <div className="rounded-md bg-violet-500/20 border border-violet-500/40 px-1.5 py-0.5 text-[10px] font-bold text-violet-300 whitespace-nowrap mb-1">
                          {val}
                        </div>
                      )}
                      <div
                        className={`w-full rounded-t-md transition-all ${
                          isLast ? 'bg-violet-500' : 'bg-[#2A2E35]'
                        }`}
                        style={{ height: `${pct}%`, minHeight: 4 }}
                      />
                      <span className="text-[9px] text-[#6E727A]">{weekLabels[i]}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* query pills */}
            <div className="px-5 pb-4 space-y-2">
              {[
                { query: 'best M&A broker for HVAC', cited: true },
                { query: 'how to sell a trades business', cited: true },
                { query: 'M&A advisor under $10M revenue', cited: false },
              ].map((q) => (
                <div key={q.query} className="flex items-center justify-between gap-2">
                  <p className="text-[11px] text-[#6E727A] truncate">{q.query}</p>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${
                    q.cited ? 'bg-emerald-500/20 text-emerald-400' : 'bg-[#2A2E35] text-[#6E727A]'
                  }`}>
                    {q.cited ? 'Cited' : 'Not yet'}
                  </span>
                </div>
              ))}
            </div>
            <div className="px-5 py-3 border-t border-[#2A2E35] bg-[#0D1117]">
              <p className="text-[11px] text-[#6E727A]">Checked weekly · Claude today · ChatGPT coming</p>
            </div>
          </div>

        </div>

        {/* bottom stat row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
          {[
            { label: 'Prospects found this week', value: '47', sub: 'via Apollo', color: 'text-violet-400' },
            { label: 'Emails delivered', value: '312', sub: 'via Instantly', color: 'text-blue-400' },
            { label: 'HOT leads this month', value: '8', sub: 'SMS fired each time', color: 'text-red-400' },
            { label: 'AI visibility score', value: '71', sub: 'up from 18 eight weeks ago', color: 'text-emerald-400' },
          ].map((s) => (
            <div key={s.label} className="rounded-xl border border-[#2A2E35] bg-[#141820] px-5 py-4">
              <p className={`text-2xl font-bold ${s.color} mb-1`}>{s.value}</p>
              <p className="text-[12px] text-white font-medium leading-snug">{s.label}</p>
              <p className="text-[11px] text-[#6E727A] mt-0.5">{s.sub}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

const FEATURES: Feature[] = [
  {
    icon: <Target size={20} />, iconBg: 'bg-blue-100 text-blue-600',
    title: 'Seller Prospecting',
    description: 'Apollo scans for business owners matching your ICP every week. Revenue range, industry, geography. New prospects land in your pipeline automatically. No manual searching.',
  },
  {
    icon: <Mail size={20} />, iconBg: 'bg-indigo-100 text-indigo-600',
    title: 'Cold Email Sequences',
    description: 'Outreach runs in your voice via Instantly. AI writes the emails. Multi-step follow-ups run on schedule. You review what goes out. The system handles the volume.',
  },
  {
    icon: <Brain size={20} />, iconBg: 'bg-purple-100 text-purple-600',
    title: 'AI Reply Classification',
    description: 'Every reply is read and sorted: HOT, WARM, COLD, or out of office. You see the classification instantly. You decide what to say next. The AI does not reply for you.',
  },
  {
    icon: <Bell size={20} />, iconBg: 'bg-red-100 text-red-600',
    title: 'SMS on HOT Reply',
    description: 'A seller says they are interested. Your phone buzzes within two minutes. Name, company, and reply included. You call while the conversation is still warm.',
  },
  {
    icon: <Phone size={20} />, iconBg: 'bg-rose-100 text-rose-600',
    title: 'SMS on Booked Meeting',
    description: 'When a seller books via Calendly, you get a text within seconds. Meeting time, attendee name, and deal context. No logging in to check. It comes to you.',
  },
  {
    icon: <FileText size={20} />, iconBg: 'bg-violet-100 text-violet-600',
    title: 'AI Content Engine',
    description: 'Blog posts, LinkedIn drafts, Quora answers, and FAQ content generated weekly in your voice. Drafts land in your dashboard. You review and publish. Nothing goes out without your approval.',
  },
  {
    icon: <Gauge size={20} />, iconBg: 'bg-cyan-100 text-cyan-600',
    title: 'AI Visibility Score',
    description: 'Weekly check: does your name appear when someone asks an AI search engine about selling a business in your niche? Tracks your citation trend over time. Tells you if your content is working.',
  },
  {
    icon: <Radar size={20} />, iconBg: 'bg-green-100 text-green-600',
    title: 'Competitor Intel Feed',
    description: 'Monitors your named competitors weekly. Flags when their positioning or content changes. You stay one step ahead without having to look.',
  },
  {
    icon: <Mic2 size={20} />, iconBg: 'bg-pink-100 text-pink-600',
    title: 'Podcast Outreach',
    description: 'AI identifies shows where your ICP listens and drafts a personalized pitch email in your voice. You review the draft and send it yourself. Your credibility compounds.',
  },
  {
    icon: <Newspaper size={20} />, iconBg: 'bg-orange-100 text-orange-600',
    title: 'Earned Media',
    description: 'Journalist queries that fit your expertise surface in your dashboard. AI drafts your expert response in your voice. You submit it to the publication directly.',
  },
  {
    icon: <Globe size={20} />, iconBg: 'bg-slate-100 text-slate-600',
    title: 'Your CRM, Built In',
    description: 'Every broker gets a GoHighLevel subaccount provisioned on signup. Your pipeline, contacts, and deal stages live there. No integration setup. No syncing required.',
  },
  {
    icon: <Calendar size={20} />, iconBg: 'bg-teal-100 text-teal-600',
    title: 'Pre-Meeting Briefs',
    description: 'New meeting booked on Calendly? BrokerEngine generates a deal brief and sends it to your phone before the call. Walk in prepared every time.',
  },
  {
    icon: <Briefcase size={20} />, iconBg: 'bg-amber-100 text-amber-600',
    title: 'Buyer Database',
    description: 'Add your buyer network once. When a seller reaches the right stage, the system identifies matches and drafts a teaser email for your review. You approve. It sends.',
  },
];

const BUNDLED_TOOLS = [
  { name: 'Apollo', what: 'Prospecting', price: '$99' },
  { name: 'Instantly', what: 'Cold email', price: '$97' },
  { name: 'GoHighLevel', what: 'CRM and SMS', price: '$297' },
  { name: 'Beehiiv', what: 'Newsletter', price: '$39' },
  { name: 'Twilio', what: 'SMS', price: '$50' },
  { name: 'Resend', what: 'Email delivery', price: '$20' },
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
            <a href="/pricing" className="text-sm text-gray-600 hover:text-black">Pricing</a>
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
            The operating system for M&A advisors
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-5 leading-tight">
            Find sellers. Run outreach.<br />
            <span className="text-gray-400">Close pipeline.</span>
          </h1>
          <p className="text-lg text-gray-500 mb-6 max-w-2xl mx-auto">
            BrokerEngine holds every subscription you need: Apollo, Instantly, GoHighLevel, Twilio, and more. You pay one number. We automate the entire pipeline end to end.
          </p>
          <div className="flex items-center justify-center gap-6 mb-8 text-sm text-gray-500">
            <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-green-500" />One bill. No stack to manage.</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-green-500" />Agents working on day one.</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-green-500" />Less than the bundle alone.</span>
          </div>
          <div className="flex flex-col md:flex-row gap-3 justify-center mb-4">
            <input type="email" placeholder="Enter your email" className="flex-1 max-w-sm px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black" />
            <a href="/signup" className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-900 whitespace-nowrap inline-flex items-center justify-center gap-1">
              Request access <ArrowRight size={14} />
            </a>
          </div>
          <p className="text-xs text-gray-400">14-day trial. No credit card needed. Cancel anytime.</p>
        </div>
      </section>

      {/* DEMO */}
      <section className="py-6 px-6">
        <div className="mx-auto max-w-[1140px] mb-3 text-center">
          <p className="text-sm text-gray-400">See every module. Hover to pause.</p>
        </div>
        <ProductDemo />
      </section>

      {/* LIVE MACHINE SECTION */}
      <LiveMachineSection />

      {/* ONE BILL */}
      <section className="py-16 px-6 border-t border-gray-100 mt-4">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">One bill. Every tool included.</p>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            We hold the subscriptions.<br />You pay one number.
          </h2>
          <p className="text-gray-500 mb-10 max-w-2xl mx-auto">
            Most brokers are paying $600 or more per month across Apollo, Instantly, GoHighLevel, Beehiiv, and Twilio. Then spending 10 hours a week making those tools talk to each other. BrokerEngine holds the master accounts on your behalf. You get provisioned a subaccount on every platform. You never see an Apollo invoice or an Instantly invoice. You see one line item from us. We charge less than the bundle costs at retail.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-xl mx-auto mb-8">
            {BUNDLED_TOOLS.map((t) => (
              <div key={t.name} className="flex items-center justify-between px-4 py-3 border border-gray-200 rounded-xl bg-white">
                <div className="text-left">
                  <p className="text-sm font-semibold text-black">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.what}</p>
                </div>
                <span className="text-xs text-gray-400 line-through">{t.price}</span>
              </div>
            ))}
          </div>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full">
            <Zap size={13} className="text-yellow-400" />
            <span className="text-sm font-bold">All of it. One bill. Less than retail.</span>
          </div>
          <p className="text-xs text-gray-400 mt-4">This is the same model that built GoHighLevel into a $500M agency business. We applied it to M&A.</p>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-20 px-6 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Everything in one platform</p>
            <h2 className="text-4xl font-bold text-black mb-4">Every lever pulled. Automatically.</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              From finding your first seller prospect to getting quoted in Forbes. BrokerEngine runs it all while you focus on closing.
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
              { n: '01', icon: <Settings size={16} />, title: 'You complete your voice profile', desc: 'A 20-minute setup. Tell BrokerEngine your niche, deal size, and how you write. Every agent uses this from day one.' },
              { n: '02', icon: <Target size={16} />, title: 'Apollo scans weekly', desc: 'Business owners matching your ICP appear in your pipeline automatically. You never search for leads manually.' },
              { n: '03', icon: <Mail size={16} />, title: 'Sequences run in your voice', desc: 'AI writes personalized emails via Instantly. Multi-step follow-ups run on schedule. You review what goes out.' },
              { n: '04', icon: <Brain size={16} />, title: 'Replies get sorted instantly', desc: 'Every reply classified HOT, WARM, or COLD. HOT gets a text to your phone within minutes.' },
              { n: '05', icon: <FileText size={16} />, title: 'Content builds your brand in parallel', desc: 'Blog posts, LinkedIn drafts, and community post opportunities generated weekly. You approve before anything publishes.' },
              { n: '06', icon: <TrendingUp size={16} />, title: 'You review. You close.', desc: 'Open your dashboard each morning. HOT leads to call. Drafts to approve. Deals to move forward. That is your whole job.' },
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
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Built on real deals. Not demos.</p>
            <h2 className="text-3xl font-bold text-black mb-6">
              75+ closed M&A transactions inform every decision the system makes.
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto mb-6">
              The outreach sequences, qualifying patterns, and content formats in BrokerEngine come from real closed deals. Every broker who joins adds to that foundation. Their anonymized signal flows back into the collective model. You start on day one with the accumulated wisdom of everyone who came before you.
            </p>
            <p className="text-gray-500 max-w-2xl mx-auto mb-8">
              Per-broker AI cost: $40 to $80 per month. That is why we can charge less than the tool bundle and still run profitably.
            </p>
            <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
              <div>
                <p className="text-3xl font-bold text-black mb-1">75+</p>
                <p className="text-xs text-gray-500">Closed M&A deals in the training data</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-black mb-1">$40</p>
                <p className="text-xs text-gray-500">Per broker AI cost per month</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-black mb-1">1</p>
                <p className="text-xs text-gray-500">Invoice. Every tool included.</p>
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
            <h2 className="text-4xl font-bold text-black mb-3">One HOT lead pays for the year.</h2>
            <p className="text-gray-500 max-w-lg mx-auto">All plans include every tool subscription. No Apollo bill. No Instantly bill. No GoHighLevel bill. Choose by volume.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                name: 'Starter', price: '$499', highlight: false,
                features: ['500 prospects per month', 'Cold email sequences', 'HOT / WARM / COLD classification', 'SMS alerts on HOT replies', 'AI content drafts (4 per week)', 'Live prospect dashboard'],
                cta: 'Start closing deals',
              },
              {
                name: 'Pro', price: '$1,299', highlight: true,
                features: ['2,000 prospects per month', 'Everything in Starter', 'Multi-sequence campaigns', 'AI visibility scoring', 'Competitor intel feed', 'Podcast outreach drafts', 'Pre-meeting briefs'],
                cta: 'Scale your pipeline',
              },
              {
                name: 'Partner', price: '$2,499', highlight: false,
                features: ['Unlimited prospects', 'Everything in Pro', 'Multi-advisor seats', 'White-label reporting', 'Dedicated CSM', 'Custom onboarding'],
                cta: 'Contact us',
              },
            ].map((plan) => (
              <div key={plan.name} className={`rounded-2xl border p-7 flex flex-col ${plan.highlight ? 'border-black bg-black text-white' : 'border-gray-200 bg-white'}`}>
                {plan.highlight && <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Most popular</div>}
                <div className="mb-5">
                  <p className={`text-base font-semibold mb-1 ${plan.highlight ? 'text-white' : 'text-black'}`}>{plan.name}</p>
                  <div className="flex items-baseline gap-1">
                    <span className={`text-4xl font-bold ${plan.highlight ? 'text-white' : 'text-black'}`}>{plan.price}</span>
                    <span className="text-gray-400 text-sm">/mo</span>
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
                <a href="/signup" className={`block text-center py-3 rounded-full text-sm font-bold transition-colors ${plan.highlight ? 'bg-white text-black hover:bg-gray-100' : 'bg-black text-white hover:bg-gray-900'}`}>
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-xs mt-5">Billed monthly. Cancel anytime. 14-day trial included.</p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="mx-auto max-w-2xl">
          <div className="bg-black rounded-3xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-3">Your pipeline does not run itself. Ours does.</h3>
            <p className="text-gray-400 mb-8">Sign up in two minutes. Complete your voice profile. Your agents start finding sellers the same week.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
              <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-500 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-white/40" />
              <a href="/signup" className="px-7 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-100 whitespace-nowrap text-sm inline-flex items-center justify-center">
                Request access
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
            <a href="#features" className="hover:text-black">Features</a>
            <a href="/pricing" className="hover:text-black">Pricing</a>
            <a href="/login" className="hover:text-black">Login</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
