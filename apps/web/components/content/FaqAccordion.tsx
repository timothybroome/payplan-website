'use client';

import { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

export function FaqAccordion({ items, title = 'Common questions' }: { items: FaqItem[]; title?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[var(--container-readable)] px-6">
        <h2 className="pp-h-section text-pp-deep">{title}</h2>
        <dl className="mt-10 divide-y divide-pp-line">
          {items.map((item, i) => (
            <div key={i} className="py-5">
              <dt>
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <span className="pp-h-sub text-pp-deep">{item.question}</span>
                  <span className="ml-4 shrink-0 text-pp-accent text-xl">
                    {openIndex === i ? '−' : '+'}
                  </span>
                </button>
              </dt>
              {openIndex === i && (
                <dd className="mt-3 text-sm text-pp-ink/70 leading-relaxed max-w-3xl">
                  {item.answer}
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
