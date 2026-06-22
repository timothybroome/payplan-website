'use client';

import { useState } from 'react';
import { openIntercomChat } from '@components/integrations/Intercom';
import { pushDataLayerEvent } from '@components/integrations/DataLayerEvents';

const DEBT_RANGES = [
  { label: 'Under £5,000', value: 'under-5k' },
  { label: '£5,000 – £15,000', value: '5k-15k' },
  { label: '£15,000 – £30,000', value: '15k-30k' },
  { label: '£30,000 – £50,000', value: '30k-50k' },
  { label: 'Over £50,000', value: 'over-50k' },
  { label: "I'm not sure", value: 'unsure' },
];

const CONTACT_OPTIONS = [
  { label: 'Chat online now', value: 'chat', description: 'Start a live conversation' },
  { label: 'Call me back', value: 'callback', description: "We'll ring you at a time that suits" },
  { label: 'I’ll call you', value: 'call', description: '0800 316 1833 — free to call' },
];

export function PartnerForm({ partnerSlug }: { partnerSlug: string }) {
  const [debtRange, setDebtRange] = useState('');
  const [contactMethod, setContactMethod] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    pushDataLayerEvent('partner_form_submitted', {
      partner: partnerSlug,
      debt_range: debtRange,
      contact_method: contactMethod,
    });

    if (contactMethod === 'chat') {
      openIntercomChat(partnerSlug);
    } else if (contactMethod === 'call') {
      window.location.href = 'tel:08003161833';
    } else {
      openIntercomChat(partnerSlug);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <fieldset>
        <legend className="block text-sm font-medium text-pp-ink mb-3">
          Roughly how much do you owe?
        </legend>
        <div className="grid grid-cols-2 gap-2">
          {DEBT_RANGES.map((range) => (
            <label
              key={range.value}
              className={`flex items-center justify-center rounded-pp border p-3 cursor-pointer text-sm transition-colors ${
                debtRange === range.value
                  ? 'border-pp-accent bg-pp-accent/5 text-pp-deep font-medium'
                  : 'border-pp-line hover:border-pp-accent text-pp-ink/70'
              }`}
            >
              <input
                type="radio"
                name="debtRange"
                value={range.value}
                checked={debtRange === range.value}
                onChange={(e) => setDebtRange(e.target.value)}
                className="sr-only"
              />
              {range.label}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="block text-sm font-medium text-pp-ink mb-3">
          How would you like to get help?
        </legend>
        <div className="space-y-2">
          {CONTACT_OPTIONS.map((option) => (
            <label
              key={option.value}
              className={`flex items-start gap-3 rounded-pp border p-4 cursor-pointer transition-colors ${
                contactMethod === option.value
                  ? 'border-pp-accent bg-pp-accent/5'
                  : 'border-pp-line hover:border-pp-accent'
              }`}
            >
              <input
                type="radio"
                name="contact"
                value={option.value}
                checked={contactMethod === option.value}
                onChange={(e) => setContactMethod(e.target.value)}
                className="mt-0.5 accent-pp-accent"
              />
              <div>
                <span className="text-sm font-medium text-pp-ink">{option.label}</span>
                <span className="block text-xs text-pp-ink/50 mt-0.5">{option.description}</span>
              </div>
            </label>
          ))}
        </div>
      </fieldset>

      <button
        type="submit"
        disabled={!debtRange || !contactMethod}
        className="w-full rounded-pp bg-pp-accent px-8 py-4 font-medium text-pp-cream hover:bg-[#007ab8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Get free advice
      </button>

      <p className="text-xs text-pp-ink/40 text-center">
        Free, confidential, no obligation. Takes about 2 minutes.
      </p>
    </form>
  );
}
