import React, { useState } from 'react';
import { MotionSpotlightCard } from './MotionSpotlightCard';

const SERVICES = [
  '⚡ SaaS Edge Architecture',
  '🎨 Brand & Design System',
  '🛒 Luxury eCommerce',
  '🏥 Healthcare & Telemetry',
  '✦ Custom Astro Theme',
];

const BUDGETS = ['< $15k', '$15k – $30k', '$30k – $60k', '$60k+'];
const TIMELINES = ['Immediate (< 2 wks)', '1 – 2 Months', 'Flexible'];

export const ModernContactEngine: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>(['⚡ SaaS Edge Architecture']);
  const [selectedBudget, setSelectedBudget] = useState('$30k – $60k');
  const [selectedTimeline, setSelectedTimeline] = useState('1 – 2 Months');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== service));
      }
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const copyEmail = () => {
    navigator.clipboard?.writeText('hello@nexus.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const copyPhone = () => {
    navigator.clipboard?.writeText('+15550123');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 6000);
    }, 1200);
  };

  return (
    <div className="w-full">
      {/* ── 3 MODERN SPOTLIGHT CHANNELS (Replaces boring plain boxes) ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {/* Channel 1: Email */}
        <MotionSpotlightCard
          spotlightColor="rgba(99, 102, 241, 0.25)"
          className="p-6 rounded-3xl bg-zinc-900/60 dark:bg-zinc-900/80 border-zinc-800 text-left relative overflow-hidden backdrop-blur-xl group hover:border-indigo-500/50 transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 text-xl group-hover:scale-110 transition-transform">
              ✉️
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              &lt; 2h Reply
            </span>
          </div>

          <h3 className="text-lg font-bold text-white mb-1">Direct Engineering Email</h3>
          <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
            For architectural RFPs, project scopes, and security questionnaires.
          </p>

          <div className="flex items-center justify-between pt-3 border-t border-zinc-800/80">
            <span className="font-mono text-sm text-indigo-300 font-semibold">
              hello@nexus.com
            </span>
            <button
              onClick={copyEmail}
              className="text-xs px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-indigo-600 text-zinc-300 hover:text-white font-medium transition-all"
            >
              {copiedEmail ? '✓ Copied' : 'Copy'}
            </button>
          </div>
        </MotionSpotlightCard>

        {/* Channel 2: Phone */}
        <MotionSpotlightCard
          spotlightColor="rgba(16, 185, 129, 0.25)"
          className="p-6 rounded-3xl bg-zinc-900/60 dark:bg-zinc-900/80 border-zinc-800 text-left relative overflow-hidden backdrop-blur-xl group hover:border-emerald-500/50 transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-xl group-hover:scale-110 transition-transform">
              📞
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              Direct Line
            </span>
          </div>

          <h3 className="text-lg font-bold text-white mb-1">Priority Support Line</h3>
          <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
            Direct access Mon–Fri, 9:00 AM – 6:00 PM Pacific Standard Time.
          </p>

          <div className="flex items-center justify-between pt-3 border-t border-zinc-800/80">
            <a href="tel:+15550123" className="font-mono text-sm text-emerald-400 font-semibold hover:underline">
              +1 555 0123
            </a>
            <button
              onClick={copyPhone}
              className="text-xs px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-emerald-600 text-zinc-300 hover:text-white font-medium transition-all"
            >
              {copiedPhone ? '✓ Copied' : 'Copy'}
            </button>
          </div>
        </MotionSpotlightCard>

        {/* Channel 3: Headquarters */}
        <MotionSpotlightCard
          spotlightColor="rgba(249, 115, 22, 0.25)"
          className="p-6 rounded-3xl bg-zinc-900/60 dark:bg-zinc-900/80 border-zinc-800 text-left relative overflow-hidden backdrop-blur-xl group hover:border-orange-500/50 transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 text-xl group-hover:scale-110 transition-transform">
              📍
            </div>
            <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-wider">
              SF 05:25 PST
            </span>
          </div>

          <h3 className="text-lg font-bold text-white mb-1">San Francisco Atelier</h3>
          <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
            123 Innovation Drive, Ste 400<br />San Francisco, CA 94102
          </p>

          <div className="flex items-center justify-between pt-3 border-t border-zinc-800/80">
            <span className="text-xs text-zinc-500">In-Person By Appt</span>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="text-xs px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-orange-600 text-zinc-300 hover:text-white font-medium transition-all flex items-center gap-1"
            >
              <span>Map</span>
              <span>↗</span>
            </a>
          </div>
        </MotionSpotlightCard>
      </div>

      {/* ── HIGH-CONVERTING INTERACTIVE BRIEF & FORM ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Form: Interactive Project Inquiry */}
        <div className="lg:col-span-8 rounded-3xl border border-zinc-800 bg-zinc-900/70 backdrop-blur-2xl p-6 sm:p-10 shadow-2xl">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-3 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <span>Step 01 // Define Scope</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Start a Commission or Inquiry
            </h2>
            <p className="text-sm text-zinc-400 mt-1">
              Select your required capabilities and project parameters. We will review and provide an architectural roadmap.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* 1. Service Tags Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                1. Required Capabilities (Select all that apply)
              </label>
              <div className="flex flex-wrap gap-2">
                {SERVICES.map((srv) => {
                  const isSelected = selectedServices.includes(srv);
                  return (
                    <button
                      type="button"
                      key={srv}
                      onClick={() => toggleService(srv)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all border ${
                        isSelected
                          ? 'border-indigo-500 bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                          : 'border-zinc-800 bg-zinc-950/50 text-zinc-400 hover:border-zinc-700 hover:text-white'
                      }`}
                    >
                      {srv}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Budget and Timeline Selectors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                  2. Approximate Investment
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {BUDGETS.map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setSelectedBudget(b)}
                      className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border ${
                        selectedBudget === b
                          ? 'border-emerald-500 bg-emerald-500/15 text-emerald-400'
                          : 'border-zinc-800 bg-zinc-950/40 text-zinc-400 hover:border-zinc-700 hover:text-white'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                  3. Target Timeline
                </label>
                <div className="grid grid-cols-1 gap-2">
                  <select
                    value={selectedTimeline}
                    onChange={(e) => setSelectedTimeline(e.target.value)}
                    className="w-full text-xs font-bold p-2.5 rounded-xl border border-zinc-800 bg-zinc-950 text-zinc-200 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  >
                    {TIMELINES.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* 3. Text inputs with Modern Floating Aesthetics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2 border-t border-zinc-800/80">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5">First Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Jane"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full text-sm px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950/60 text-white placeholder-zinc-600 focus:border-indigo-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5">Last Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full text-sm px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950/60 text-white placeholder-zinc-600 focus:border-indigo-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5">Work Email *</label>
                <input
                  type="email"
                  required
                  placeholder="jane@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full text-sm px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950/60 text-white placeholder-zinc-600 focus:border-indigo-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5">Company / Organization</label>
                <input
                  type="text"
                  placeholder="Acme Corp"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full text-sm px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950/60 text-white placeholder-zinc-600 focus:border-indigo-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1.5">Project Overview / Goals *</label>
              <textarea
                required
                rows={4}
                placeholder="Describe what you are building, key technical requirements, or existing bottlenecks..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full text-sm px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950/60 text-white placeholder-zinc-600 focus:border-indigo-500 focus:outline-none transition-colors resize-none"
              />
            </div>

            {/* Submit Action */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full sm:w-auto px-9 py-4 font-bold rounded-2xl text-xs uppercase tracking-wider text-white transition-all shadow-xl shadow-indigo-600/30 hover:-translate-y-0.5 hover:shadow-indigo-600/50 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 active:scale-95 flex items-center justify-center gap-2"
              >
                {status === 'sending' ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    <span>Encrypting & Dispatching...</span>
                  </>
                ) : status === 'success' ? (
                  <>
                    <span>✓ Inquiry Received! Reply sent within 2h</span>
                  </>
                ) : (
                  <>
                    <span>Submit Project Inquiry</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Right Column: Direct Calendar & Trust Guarantees */}
        <div className="lg:col-span-4 space-y-6">
          {/* Direct Discovery Meeting Card */}
          <div className="p-6 rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-indigo-950/40 via-zinc-900/60 to-purple-950/30 backdrop-blur-xl">
            <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-300 mb-4">
              📅
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Book a 20-Min Call</h3>
            <p className="text-xs text-zinc-400 leading-relaxed mb-6">
              Prefer an immediate technical consultation? Schedule directly with our Principal Solutions Architect.
            </p>
            <a
              href="https://cal.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/20 transition-all"
            >
              <span>Open Calendar Scheduler</span>
              <span>↗</span>
            </a>
          </div>

          {/* SLA & Security Guarantees */}
          <div className="p-6 rounded-3xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold mb-4">
              Engagement Guarantees
            </h4>
            <div className="space-y-3.5 text-xs">
              <div className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold">✓</span>
                <div>
                  <span className="font-bold text-white">Full IP Transfer:</span>
                  <p className="text-zinc-400 text-[11px] mt-0.5">100% intellectual property ownership assigned upon milestone delivery.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold">✓</span>
                <div>
                  <span className="font-bold text-white">SOC 2 Type II Audited:</span>
                  <p className="text-zinc-400 text-[11px] mt-0.5">Encrypted communications, private git worktrees, strict NDA adherence.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold">✓</span>
                <div>
                  <span className="font-bold text-white">Production Warranty:</span>
                  <p className="text-zinc-400 text-[11px] mt-0.5">90-day post-launch support and performance guarantee included.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
