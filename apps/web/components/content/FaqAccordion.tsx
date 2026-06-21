'use client';

import { useState } from 'react';
import { PortableText, type PortableTextBlock } from '@portabletext/react';

interface FaqItem {
  question: string;
  answer: string | PortableTextBlock[];
}

export function FaqAccordion({ items, title = 'Common questions' }: { items: FaqItem[]; title?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!items?.length) return null;

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[var(--container-readable)] px-6">
        <h2 className="pp-h-section text-pp-deep">{title}</h2>
        <dl className="mt-12 divide-y divide-pp-line rounded-pp border border-pp-line overflow-hidden shadow-sm">
          {items.map((item, i) => (
            <div key={i} className={openIndex === i ? 'bg-pp-cream-warm' : 'bg-pp-cream'}>
              <dt>
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-7 py-5 text-left transition-colors hover:bg-pp-cream-warm"
                  aria-expanded={openIndex === i}
                >
                  <span className="pp-h-sub text-pp-deep">{item.question}</span>
                  <span className={`shrink-0 text-pp-accent transition-transform duration-200 ${openIndex === i ? 'rotate-45' : ''}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>
              </dt>
              {openIndex === i && (
                <dd className="px-7 pb-6 text-sm text-pp-ink/60 leading-relaxed max-w-3xl">
                  {typeof item.answer === 'string' ? (
                    item.answer
                  ) : (
                    <PortableText value={item.answer} />
                  )}
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
