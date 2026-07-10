'use client';

import { useState } from 'react';
import {
  Lock, FileText, Calculator, DollarSign, Brain,
  CheckCircle2, ArrowRight, Clock, Eye, Download,
  Upload, Sparkles, RefreshCw, Tag, Loader2,
  ChevronRight, Users, BarChart3, Gauge,
} from 'lucide-react';

// ── shared mini-chrome wrapper ───────────────────────────────────────────────
function AppChrome({ children, url = 'app.brokerengine.ai' }: { children: React.ReactNode; url?: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 shadow-xl overflow-hidden bg-white">
      <div className="bg-gray-100 px-4 py-2 flex items-center gap-3 border-b border-gray-200">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-white border border-gray-200 rounded-md px-4 py-0.5 text-[10px] text-gray-400 w-64 text-center">
            {url}
          </div>
        </div>
        <div className="w-12" />
      </div>
      {children}
    </div>
  );
}

// ── mini sidebar for all app screens ────────────────────────────────────────
function MiniSidebar({ active }: { active: string }) {
  const items = [
    { label: 'Deal Pipeline', icon: '🗂️' },
    { label: 'Valuations', icon: '🧮' },
    { label: 'Sellers', icon: '🎯' },
    { label: 'Buyers', icon: '👥' },
    { label: 'Leads for Sale', icon: '💰' },
    { label: 'Inbox', icon: '📬' },
    { label: 'Intel', icon: '🔭' },
    { label: 'Assistant', icon: '🤖' },
  ];
  return (
    <div className="w-40 flex-shrink-0 bg-[#0F1318] border-r border-white/5 flex flex-col h-full">
      <div className="px-3 py-3 flex items-center gap-2 border-b border-white/5">
        <div className="w-5 h-5 bg-white rounded text-black text-[8px] font-black flex items-center justify-center">BE</div>
        <span className="font-bold text-[11px] text-white">BrokerEngine</span>
      </div>
      <nav className="flex-1 px-2 py-2 space-y-0.5">
        {items.map((item) => {
          const isActive = item.label === active;
          return (
            <div key={item.label} className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[10px] cursor-default ${isActive ? 'bg-white/10 text-white font-semibold' : 'text-white/30'}`}>
              <span className="text-xs">{item.icon}</span>
              {item.label}
            </div>
          );
        })}
      </nav>
      <div className="px-3 py-2.5 border-t border-white/5 flex items-center gap-2">
        <div className="w-5 h-5 rounded-full bg-emerald-600 text-white text-[8px] font-bold flex items-center justify-center flex-shrink-0">N</div>
        <span className="text-[9px] text-white/30 truncate">nate@broker.com</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SCREEN 1 — Deal Pipeline (Kanban)
// ─────────────────────────────────────────────────────────────────────────────
function DealPipelineScreen() {
  const stages = [
    {
      label: 'Outreach', color: '#6E727A',
      deals: [
        { name: 'Alpine Electric', rev: '$6.4M', days: 3, badge: 'Seller' },
        { name: 'Summit Landscaping', rev: '$1.9M', days: 1, badge: 'Seller' },
      ],
    },
    {
      label: 'Engaged', color: '#31B4D8',
      deals: [
        { name: 'Cascade Plumbing', rev: '$3.8M', days: 7, badge: 'Seller' },
      ],
    },
    {
      label: 'NDA Sent', color: '#F59E0B',
      deals: [
        { name: 'Peak Roofing Co', rev: '$5.1M', days: 12, badge: 'Seller' },
      ],
    },
    {
      label: 'CIM Sent', color: '#9B5CF6',
      deals: [
        { name: 'Meridian HVAC', rev: '$8.2M', days: 18, badge: 'Seller' },
      ],
    },
  ];
  return (
    <AppChrome>
      <div className="flex h-[400px] bg-[#0F1318]">
        <MiniSidebar active="Deal Pipeline" />
        <div className="flex-1 overflow-hidden flex flex-col">
          <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between">
            <div>
              <p className="text-[13px] font-semibold text-white">Deal Pipeline</p>
              <p className="text-[10px] text-white/40">Sellers · 4 active deals</p>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[10px] text-white/60">Sellers</button>
              <button className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[10px] text-white/60">Buyers</button>
              <button className="px-3 py-1.5 bg-emerald-600 rounded-lg text-[10px] text-white font-semibold">+ Add deal</button>
            </div>
          </div>
          <div className="flex-1 overflow-x-auto p-4 flex gap-3">
            {stages.map((stage) => (
              <div key={stage.label} className="w-44 flex-shrink-0">
                <div className="flex items-center gap-1.5 mb-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: stage.color }} />
                  <span className="text-[10px] font-semibold text-white/60 uppercase tracking-wide">{stage.label}</span>
                  <span className="text-[9px] text-white/30 ml-auto">{stage.deals.length}</span>
                </div>
                <div className="space-y-2">
                  {stage.deals.map((d) => (
                    <div key={d.name} className="bg-white/5 border border-white/10 rounded-xl p-3 cursor-pointer hover:bg-white/8 transition-colors">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[9px] px-1.5 py-0.5 bg-emerald-500/20 text-emerald-400 rounded font-semibold">{d.badge}</span>
                        <span className="text-[9px] text-white/30">{d.days}d</span>
                      </div>
                      <p className="text-[11px] font-semibold text-white leading-tight mb-1">{d.name}</p>
                      <p className="text-[10px] text-white/40">{d.rev} revenue</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppChrome>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SCREEN 2 — NDA e-sign (buyer-facing dark page)
// ─────────────────────────────────────────────────────────────────────────────
function NdaScreen() {
  const [signed, setSigned] = useState(false);
  return (
    <AppChrome url="app.brokerengine.ai/nda/tk_a1b2c3">
      <div className="bg-[#0F1318] flex items-center justify-center py-10 px-6 min-h-[380px]">
        <div className="w-full max-w-md">
          {/* Listing teaser */}
          <div className="mb-6 rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                <Lock size={18} className="text-emerald-400" />
              </div>
              <div>
                <p className="text-[12px] font-bold text-white mb-0.5">Confidential Listing · HVAC Services</p>
                <p className="text-[11px] text-white/50 mb-2">Revenue $6–9M · EBITDA $1.2M · Southeast US</p>
                <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-500/20 rounded-full">
                  <Lock size={9} className="text-amber-400" />
                  <span className="text-[9px] text-amber-400 font-semibold">Full details locked until NDA signed</span>
                </div>
              </div>
            </div>
          </div>

          {!signed ? (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-[13px] font-semibold text-white mb-1">Sign the NDA to unlock the data room</p>
              <p className="text-[11px] text-white/50 mb-4">You&apos;ll get access to financials, seller documents, and the full teaser immediately after signing.</p>
              <div className="mb-3">
                <label className="block text-[10px] font-medium text-white/50 mb-1">Full legal name</label>
                <div className="w-full rounded-xl border border-white/10 bg-[#171A1E] px-3 py-2 text-[12px] text-white/70">Jane Q. Buyer</div>
              </div>
              <div className="flex items-start gap-2 mb-4">
                <div className="w-4 h-4 rounded border border-emerald-500 bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 size={10} className="text-emerald-400" />
                </div>
                <span className="text-[11px] text-white/50 leading-relaxed">I have read and agree to the terms of this NDA.</span>
              </div>
              <button
                onClick={() => setSigned(true)}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-2.5 text-[12px] font-semibold text-white hover:bg-emerald-500 transition-colors"
              >
                Sign NDA &amp; enter data room <ArrowRight size={13} />
              </button>
            </div>
          ) : (
            <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-5 flex items-start gap-3">
              <CheckCircle2 size={20} className="text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-[14px] font-semibold text-white mb-1">NDA signed</p>
                <p className="text-[11px] text-white/60 mb-3">Your data room is now unlocked. Full financials and documents are available below.</p>
                <button className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-[12px] font-semibold text-white hover:bg-emerald-500 transition-colors">
                  Enter the data room <ArrowRight size={12} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </AppChrome>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SCREEN 3 — CIM Editor
// ─────────────────────────────────────────────────────────────────────────────
function CimScreen() {
  const sections = [
    { label: 'Executive Summary', done: true, preview: 'Meridian HVAC is a 22-year-old residential and commercial HVAC services firm in the Southeast generating $8.2M in annual revenue with a 14.6% EBITDA margin. The business operates on recurring maintenance contracts with 1,200+ active accounts...' },
    { label: 'Business Overview', done: true, preview: 'Founded in 2002, Meridian serves a 4-county territory with a fleet of 18 technicians...' },
    { label: 'Financial Summary', done: true, preview: 'FY2024: $8.2M revenue · $1.2M EBITDA · 94% recurring revenue base. Three-year CAGR: 11%...' },
    { label: 'Growth Opportunities', done: false, preview: '' },
    { label: 'Deal Structure', done: false, preview: '' },
  ];
  return (
    <AppChrome>
      <div className="flex h-[440px] bg-[#0F1318]">
        <MiniSidebar active="Deal Pipeline" />
        <div className="flex-1 overflow-hidden flex flex-col">
          <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText size={14} className="text-purple-400" />
              <p className="text-[13px] font-semibold text-white">CIM · Meridian HVAC</p>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 bg-purple-600/20 border border-purple-500/30 rounded-lg text-[10px] text-purple-300 flex items-center gap-1">
                <Sparkles size={10} /> Regenerate section
              </button>
              <button className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[10px] text-white/60 flex items-center gap-1">
                <Download size={10} /> Export PDF
              </button>
            </div>
          </div>
          <div className="flex-1 flex overflow-hidden">
            {/* section list */}
            <div className="w-44 border-r border-white/5 p-3 space-y-1.5 flex-shrink-0">
              <p className="text-[9px] font-bold text-white/30 uppercase tracking-widest mb-2">Sections</p>
              {sections.map((s) => (
                <div key={s.label} className={`flex items-center gap-2 px-2.5 py-2 rounded-lg cursor-pointer ${s.label === 'Executive Summary' ? 'bg-white/10' : 'hover:bg-white/5'}`}>
                  <div className={`w-3 h-3 rounded-full flex items-center justify-center flex-shrink-0 ${s.done ? 'bg-emerald-500' : 'bg-white/10 border border-white/20'}`}>
                    {s.done && <CheckCircle2 size={8} className="text-white" />}
                  </div>
                  <span className={`text-[10px] leading-tight ${s.label === 'Executive Summary' ? 'text-white font-semibold' : 'text-white/50'}`}>{s.label}</span>
                </div>
              ))}
            </div>
            {/* editor area */}
            <div className="flex-1 p-4 overflow-auto">
              <div className="flex items-center justify-between mb-3">
                <p className="text-[11px] font-bold text-white">Executive Summary</p>
                <button className="px-2 py-1 bg-emerald-600/20 border border-emerald-500/30 rounded-lg text-[9px] text-emerald-400 flex items-center gap-1">
                  <RefreshCw size={8} /> Regen
                </button>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-[11px] text-white/70 leading-relaxed min-h-[120px]">
                {sections[0].preview}
              </div>
              <div className="mt-2 flex gap-2">
                <button className="px-2.5 py-1.5 bg-emerald-600 rounded-lg text-[9px] text-white font-semibold">Save</button>
                <span className="text-[9px] text-white/30 mt-1.5">Auto-saved 2s ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppChrome>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SCREEN 4 — Valuations
// ─────────────────────────────────────────────────────────────────────────────
function ValuationsScreen() {
  return (
    <AppChrome>
      <div className="flex h-[400px] bg-[#0F1318]">
        <MiniSidebar active="Valuations" />
        <div className="flex-1 overflow-hidden flex flex-col">
          <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between">
            <div>
              <p className="text-[13px] font-semibold text-white">Valuations</p>
              <p className="text-[10px] text-white/40">SaaS · Ecommerce · Services · Content Sites</p>
            </div>
            <button className="px-3 py-1.5 bg-emerald-600 rounded-lg text-[10px] text-white font-semibold">+ New valuation</button>
          </div>
          <div className="flex-1 overflow-auto p-4 grid grid-cols-2 gap-3">
            {[
              { type: 'Services', co: 'Meridian HVAC', rev: '$8.2M', mult: '4.1x', val: '$33.6M', color: 'bg-emerald-500/20 text-emerald-400' },
              { type: 'SaaS', co: 'CloudMetrics Inc', rev: '$1.2M ARR', mult: '5.8x', val: '$6.96M', color: 'bg-blue-500/20 text-blue-400' },
              { type: 'Ecommerce', co: 'TrailGear Co', rev: '$3.4M', mult: '2.9x', val: '$9.86M', color: 'bg-purple-500/20 text-purple-400' },
              { type: 'Content', co: 'NicheSite Media', rev: '$480K', mult: '38x monthly', val: '$1.52M', color: 'bg-amber-500/20 text-amber-400' },
            ].map((v) => (
              <div key={v.co} className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <div className={`inline-flex text-[9px] font-bold px-2 py-0.5 rounded-full mb-2 ${v.color}`}>{v.type}</div>
                <p className="text-[12px] font-semibold text-white mb-1">{v.co}</p>
                <p className="text-[10px] text-white/40 mb-3">{v.rev} · {v.mult} multiple</p>
                <div className="flex items-baseline justify-between">
                  <span className="text-[18px] font-bold text-white">{v.val}</span>
                  <button className="text-[9px] text-emerald-400 hover:underline flex items-center gap-0.5">Share link <ArrowRight size={9} /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppChrome>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SCREEN 5 — Buyer Matching
// ─────────────────────────────────────────────────────────────────────────────
function BuyerMatchScreen() {
  return (
    <AppChrome>
      <div className="flex h-[420px] bg-[#0F1318]">
        <MiniSidebar active="Deal Pipeline" />
        <div className="flex-1 overflow-hidden flex flex-col">
          <div className="px-4 py-3 border-b border-white/5 flex items-center gap-2">
            <Users size={13} className="text-blue-400" />
            <p className="text-[13px] font-semibold text-white">Buyer Matching · Meridian HVAC</p>
          </div>
          <div className="flex-1 overflow-auto p-4 space-y-2">
            <p className="text-[10px] text-white/40 mb-3">7 buyers matched on HVAC · $5–12M · Southeast US</p>
            {[
              { name: 'Summit Capital Partners', mandate: 'Home services, $4–15M, Southeast', score: 96, nda: 'signed' },
              { name: 'Lakewood PE Group', mandate: 'Trades & services, $3–10M, Sunbelt', score: 91, nda: 'sent' },
              { name: 'Brightline Acquisitions', mandate: 'HVAC & plumbing, up to $20M', score: 88, nda: null },
              { name: 'Elevate Partners', mandate: 'Blue-collar services, $5–25M', score: 82, nda: null },
            ].map((b) => (
              <div key={b.name} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                  {b.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-semibold text-white">{b.name}</p>
                  <p className="text-[9px] text-white/40 truncate">{b.mandate}</p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <div className="text-right">
                    <span className="text-[14px] font-bold text-emerald-400">{b.score}</span>
                    <span className="text-[8px] text-white/30 block">match</span>
                  </div>
                  {b.nda === 'signed' ? (
                    <span className="text-[9px] px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded-full font-semibold">NDA signed</span>
                  ) : b.nda === 'sent' ? (
                    <span className="text-[9px] px-2 py-0.5 bg-amber-500/20 text-amber-400 rounded-full font-semibold">NDA sent</span>
                  ) : (
                    <button className="text-[9px] px-2 py-1 bg-blue-600 text-white rounded-lg font-semibold">Send NDA</button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppChrome>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SCREEN 6 — Leads for Sale
// ─────────────────────────────────────────────────────────────────────────────
function LeadsForSaleScreen() {
  return (
    <AppChrome>
      <div className="flex h-[400px] bg-[#0F1318]">
        <MiniSidebar active="Leads for Sale" />
        <div className="flex-1 overflow-hidden flex flex-col">
          <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between">
            <div>
              <p className="text-[13px] font-semibold text-white">Leads for Sale</p>
              <p className="text-[10px] text-white/40">Disqualified sellers → revenue on close</p>
            </div>
            <button className="px-3 py-1.5 bg-emerald-600 rounded-lg text-[10px] text-white font-semibold">+ List a lead</button>
          </div>
          <div className="flex-1 overflow-auto p-4 space-y-2">
            {[
              { co: 'Summit Landscaping', rev: '$1.9M', reason: 'Too small for our mandate', status: 'Available', buyers: 2, color: 'bg-emerald-500/20 text-emerald-400' },
              { co: 'Alpine Cleaning Services', rev: '$800K', reason: 'Outside geography', status: 'Referred', buyers: 0, color: 'bg-blue-500/20 text-blue-400', fee: '$12,000 on close' },
              { co: 'Valley Pest Control', rev: '$2.2M', reason: 'Seller not motivated enough', status: 'Available', buyers: 4, color: 'bg-emerald-500/20 text-emerald-400' },
            ].map((l) => (
              <div key={l.co} className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-[12px] font-semibold text-white">{l.co}</p>
                    <p className="text-[10px] text-white/40">{l.rev} revenue · {l.reason}</p>
                  </div>
                  <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${l.color}`}>{l.status}</span>
                </div>
                <div className="flex items-center justify-between">
                  {l.buyers > 0 ? (
                    <span className="text-[10px] text-white/50">{l.buyers} buyer{l.buyers !== 1 ? 's' : ''} matched</span>
                  ) : l.fee ? (
                    <span className="text-[10px] text-emerald-400 font-semibold">{l.fee}</span>
                  ) : <span />}
                  <button className="text-[9px] text-blue-400 hover:underline">Copy referral link</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppChrome>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SCREEN 7 — AI Assistant
// ─────────────────────────────────────────────────────────────────────────────
function AssistantScreen() {
  const messages = [
    { role: 'user', text: 'Which deals are stalling and what should I do about them?' },
    { role: 'ai', text: 'Two deals have had no stage movement in 14+ days:\n\n• **Cascade Plumbing** — last activity was the initial email. Suggest a follow-up call offer.\n• **Alpine Electric** — NDA was sent 12 days ago with no response. I can draft a short re-engagement email for your review.' },
    { role: 'user', text: 'Draft the re-engagement email for Alpine Electric.' },
    { role: 'ai', text: 'Draft ready for your review:\n\nSubject: Still open to a conversation?\n\nHi [Owner], I wanted to follow up on the NDA I sent over last week — no pressure, just making sure it didn\'t get buried. Happy to answer any questions before you sign. Takes 60 seconds.\n\n[Send / Edit / Discard]' },
  ];
  return (
    <AppChrome>
      <div className="flex h-[420px] bg-[#0F1318]">
        <MiniSidebar active="Assistant" />
        <div className="flex-1 overflow-hidden flex flex-col">
          <div className="px-4 py-3 border-b border-white/5 flex items-center gap-2">
            <Brain size={14} className="text-indigo-400" />
            <p className="text-[13px] font-semibold text-white">AI Operator</p>
            <span className="text-[9px] px-2 py-0.5 bg-indigo-500/20 text-indigo-300 rounded-full">Knows your deals</span>
          </div>
          <div className="flex-1 overflow-auto p-4 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {m.role === 'ai' && (
                  <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0 mr-2 mt-0.5">
                    <Brain size={10} className="text-white" />
                  </div>
                )}
                <div className={`max-w-[80%] px-3 py-2 rounded-2xl text-[11px] leading-relaxed whitespace-pre-line ${m.role === 'user' ? 'bg-indigo-600 text-white ml-2' : 'bg-white/5 border border-white/10 text-white/80'}`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>
          <div className="px-4 py-3 border-t border-white/5">
            <div className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-3 py-2">
              <input className="flex-1 bg-transparent text-[11px] text-white/60 placeholder-white/30 outline-none" placeholder="Ask about deals, drafts, pipeline..." readOnly />
              <button className="w-6 h-6 rounded-lg bg-indigo-600 flex items-center justify-center flex-shrink-0">
                <ArrowRight size={11} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </AppChrome>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SCREEN 8 — AI Visibility Score
// ─────────────────────────────────────────────────────────────────────────────
function ScoreScreen() {
  const weeks = [42, 47, 45, 51, 58, 63, 61, 68];
  const max = 100;
  return (
    <AppChrome>
      <div className="flex h-[380px] bg-[#0F1318]">
        <MiniSidebar active="Intel" />
        <div className="flex-1 overflow-hidden flex flex-col">
          <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BarChart3 size={13} className="text-cyan-400" />
              <p className="text-[13px] font-semibold text-white">AI Visibility Score</p>
            </div>
            <span className="text-[9px] px-2 py-0.5 bg-cyan-500/20 text-cyan-300 rounded-full">Updated weekly</span>
          </div>
          <div className="flex-1 p-4">
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                <p className="text-[36px] font-bold text-cyan-400">68</p>
                <p className="text-[10px] text-white/40">This week</p>
                <p className="text-[9px] text-emerald-400 mt-1">↑ +7 from last week</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <p className="text-[10px] font-semibold text-white/60 mb-2">AI engines monitoring</p>
                {['ChatGPT', 'Claude', 'Perplexity', 'Gemini'].map((e) => (
                  <div key={e} className="flex items-center justify-between mb-1">
                    <span className="text-[10px] text-white/50">{e}</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-3">
              <p className="text-[9px] font-semibold text-white/40 uppercase tracking-widest mb-2">8-week trend</p>
              <div className="flex items-end gap-1.5 h-12">
                {weeks.map((v, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                    <div
                      className="w-full rounded-sm"
                      style={{ height: `${(v / max) * 48}px`, background: i === weeks.length - 1 ? '#22D3EE' : '#22D3EE40' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppChrome>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN EXPORT — Product Tour section
// ─────────────────────────────────────────────────────────────────────────────

const TOURS = [
  {
    id: 'pipeline',
    emoji: '🗂️',
    label: 'Deal Pipeline',
    headline: 'Kanban deal room. Every seller, every stage.',
    description: 'Drag deals from Outreach → Engaged → NDA → CIM → Offer. Every stage change is timestamped with a full audit trail, so the pipeline reflects reality without manual status updates.',
    screen: <DealPipelineScreen />,
  },
  {
    id: 'nda',
    emoji: '✍️',
    label: 'NDA e-sign',
    headline: 'Send an NDA. Buyer signs in 60 seconds.',
    description: 'One click sends a branded NDA link. Buyer signs with their name, no account required. The moment they sign, the data room unlocks automatically. Every signature timestamped and stored.',
    screen: <NdaScreen />,
  },
  {
    id: 'cim',
    emoji: '📄',
    label: 'CIM Generator',
    headline: 'AI drafts the full CIM. You edit and ship.',
    description: 'Feed in deal data. The AI writes a complete Confidential Information Memorandum — executive summary, business overview, financials, growth opportunities, deal structure. Each section regeneratable independently. Export to PDF.',
    screen: <CimScreen />,
  },
  {
    id: 'valuations',
    emoji: '🧮',
    label: 'Valuations',
    headline: 'Valuation calculators for every deal type.',
    description: 'SaaS, ecommerce, services, and content site calculators built in. Run a live valuation, share the link with the seller before they\'ve signed anything. Convert more inbound conversations into engaged sellers.',
    screen: <ValuationsScreen />,
  },
  {
    id: 'buyers',
    emoji: '👥',
    label: 'Buyer Matching',
    headline: 'The right buyers surface automatically.',
    description: 'Add your buyer mandates once. When a deal reaches the right stage, the platform ranks buyers by fit score and lets you send an NDA with one click. No spreadsheet. No manual cross-referencing.',
    screen: <BuyerMatchScreen />,
  },
  {
    id: 'leads',
    emoji: '💰',
    label: 'Leads for Sale',
    headline: 'Turn dead-end leads into closing fees.',
    description: 'List a disqualified seller in the referral marketplace. Other brokers find them, e-sign a referral agreement, and work the deal. You get a fee on close. Unique to BrokerEngine — nothing like it in Deal Studio.',
    screen: <LeadsForSaleScreen />,
  },
  {
    id: 'assistant',
    emoji: '🤖',
    label: 'AI Operator',
    headline: 'Your AI operator knows every deal.',
    description: 'Ask it which deals are stalling. Ask it to draft a re-engagement email. Ask it to summarize a deal for a buyer intro call. It knows your pipeline, your sellers, your voice. Answers in seconds.',
    screen: <AssistantScreen />,
  },
  {
    id: 'score',
    emoji: '📊',
    label: 'AI Visibility',
    headline: 'Are AI engines recommending you?',
    description: 'BrokerEngine checks ChatGPT, Claude, Perplexity, and Gemini weekly and scores how often your name appears for your niche. Tracks trend over 12 weeks. Tells you if your content is working.',
    screen: <ScoreScreen />,
  },
];

export function ProductTour() {
  const [active, setActive] = useState(0);
  const tour = TOURS[active];

  return (
    <section className="py-20 px-6 bg-[#0A0D11]">
      <div className="mx-auto max-w-7xl">
        {/* header */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold text-white/30 uppercase tracking-widest mb-3">Product tour</p>
          <h2 className="text-4xl font-bold text-white mb-4">See the real app.</h2>
          <p className="text-white/50 max-w-lg mx-auto">Every screen below is the actual BrokerEngine UI. Pick a feature to explore it.</p>
        </div>

        {/* tab bar */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {TOURS.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              className={`px-4 py-2 rounded-xl text-[12px] font-semibold transition-all border ${
                i === active
                  ? 'bg-white text-black border-white'
                  : 'bg-white/5 text-white/50 border-white/10 hover:bg-white/10 hover:text-white/70'
              }`}
            >
              {t.emoji} {t.label}
            </button>
          ))}
        </div>

        {/* content */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* annotation */}
          <div className="lg:col-span-2">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
              <span className="text-lg">{tour.emoji}</span>
              <span className="text-[11px] font-semibold text-white/60 uppercase tracking-wide">{tour.label}</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{tour.headline}</h3>
            <p className="text-white/50 leading-relaxed text-sm mb-6">{tour.description}</p>
            <a
              href="/signup"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-full text-sm font-bold hover:bg-gray-100 transition-colors"
            >
              Try it free <ArrowRight size={14} />
            </a>
          </div>

          {/* screen */}
          <div className="lg:col-span-3">
            {tour.screen}
          </div>
        </div>

        {/* prev/next */}
        <div className="flex justify-center gap-3 mt-10">
          <button
            onClick={() => setActive((active - 1 + TOURS.length) % TOURS.length)}
            className="px-4 py-2 rounded-full border border-white/10 text-white/50 text-sm hover:text-white hover:border-white/30 transition-colors"
          >
            ← Previous
          </button>
          <span className="px-4 py-2 text-white/30 text-sm">{active + 1} / {TOURS.length}</span>
          <button
            onClick={() => setActive((active + 1) % TOURS.length)}
            className="px-4 py-2 rounded-full border border-white/10 text-white/50 text-sm hover:text-white hover:border-white/30 transition-colors"
          >
            Next →
          </button>
        </div>
      </div>
    </section>
  );
}
