import React, { useState } from 'react';

interface ProfessionalContactFormProps {
  dark?: boolean;
}

export const ProfessionalContactForm: React.FC<ProfessionalContactFormProps> = ({ dark = false }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    setStatus('idle');
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="rounded-3xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 shadow-xl p-8 sm:p-12 transition-all backdrop-blur-md">
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800/60">
            Send a Message
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-white mt-3">
            How can we help your team?
          </h2>
          <p className="text-sm text-stone-500 dark:text-zinc-400 mt-1.5">
            Fill out the form below and we will get back to you within 24 business hours.
          </p>
        </div>

        {status === 'success' ? (
          <div className="p-8 text-center rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 animate-fade-in">
            <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg shadow-emerald-500/30">
              ✓
            </div>
            <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-2">
              Message Received!
            </h3>
            <p className="text-sm text-stone-600 dark:text-zinc-300 max-w-md mx-auto mb-6">
              Thank you{formData.firstName ? `, ${formData.firstName}` : ''}. We have received your message and will review it promptly.
            </p>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-xl bg-stone-900 dark:bg-white text-white dark:text-stone-900 text-xs font-bold hover:opacity-90 transition-opacity"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-stone-700 dark:text-zinc-300 mb-1.5">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Jane"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full text-sm px-4 py-3 rounded-xl border border-stone-200 dark:border-zinc-750 bg-stone-50/50 dark:bg-zinc-950 text-stone-900 dark:text-white placeholder-stone-400 dark:placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 dark:text-zinc-300 mb-1.5">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full text-sm px-4 py-3 rounded-xl border border-stone-200 dark:border-zinc-750 bg-stone-50/50 dark:bg-zinc-950 text-stone-900 dark:text-white placeholder-stone-400 dark:placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-stone-700 dark:text-zinc-300 mb-1.5">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="jane@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full text-sm px-4 py-3 rounded-xl border border-stone-200 dark:border-zinc-750 bg-stone-50/50 dark:bg-zinc-950 text-stone-900 dark:text-white placeholder-stone-400 dark:placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 dark:text-zinc-300 mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full text-sm px-4 py-3 rounded-xl border border-stone-200 dark:border-zinc-750 bg-stone-50/50 dark:bg-zinc-950 text-stone-900 dark:text-white placeholder-stone-400 dark:placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 dark:text-zinc-300 mb-1.5">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="How can we help you?"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full text-sm px-4 py-3 rounded-xl border border-stone-200 dark:border-zinc-750 bg-stone-50/50 dark:bg-zinc-950 text-stone-900 dark:text-white placeholder-stone-400 dark:placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 dark:text-zinc-300 mb-1.5">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={5}
                placeholder="Tell us a little bit about your project or inquiry..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full text-sm px-4 py-3 rounded-xl border border-stone-200 dark:border-zinc-750 bg-stone-50/50 dark:bg-zinc-950 text-stone-900 dark:text-white placeholder-stone-400 dark:placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 transition-all resize-y"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-4 px-6 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm tracking-wider uppercase shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-0.5 active:scale-98 transition-all flex items-center justify-center gap-2"
              >
                {status === 'submitting' ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    <span>Sending message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </div>

            <p className="text-center text-[11px] text-stone-400 dark:text-zinc-500">
              🔒 We respect your privacy. Your information is never shared.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
