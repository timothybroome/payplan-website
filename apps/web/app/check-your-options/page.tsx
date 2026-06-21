'use client';

import type { Metadata } from 'next';
import { useState } from 'react';
import Link from 'next/link';

const steps = [
  {
    question: 'Roughly how much do you owe in total?',
    options: ['Less than £5,000', '£5,000 – £20,000', '£20,000 – £50,000', 'More than £50,000'],
  },
  {
    question: 'Are you a homeowner?',
    options: ['Yes, I own my home', 'No, I rent or live with someone'],
  },
  {
    question: 'Are you employed?',
    options: ['Employed full-time', 'Employed part-time', 'Self-employed', 'Not currently working'],
  },
  {
    question: 'How are you managing your monthly payments?',
    options: [
      "I'm keeping up but it's a struggle",
      "I've missed some payments",
      "I've stopped paying altogether",
      "I'm only paying the minimums",
    ],
  },
];

export default function CheckYourOptionsPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [complete, setComplete] = useState(false);

  function selectAnswer(answer: string) {
    const updated = [...answers, answer];
    setAnswers(updated);
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setComplete(true);
    }
  }

  if (complete) {
    return (
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[var(--container-readable)] px-6 text-center">
          <p className="pp-h-tag text-pp-accent">Your options</p>
          <h1 className="pp-h-section mt-4 text-pp-deep max-w-2xl mx-auto">
            Thanks for taking this step
          </h1>
          <p className="pp-lede mt-6 text-pp-ink/70 max-w-xl mx-auto">
            From what you&apos;ve told us, a Debt Management Plan could be a
            good fit. It lets you make one affordable monthly payment and
            we deal with your creditors.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/where-do-i-start"
              className="rounded-pp bg-pp-accent px-8 py-4 font-medium text-pp-cream hover:opacity-90 transition-opacity"
            >
              Set this up online
            </Link>
            <a
              href="tel:08003161833"
              className="rounded-pp border border-pp-deep px-8 py-4 font-medium text-pp-deep hover:bg-pp-cream-warm transition-colors"
            >
              Talk it through first
            </a>
          </div>
        </div>
      </section>
    );
  }

  const step = steps[currentStep];

  return (
    <>
      <section className="bg-pp-deep text-pp-cream py-12">
        <div className="mx-auto max-w-[var(--container-readable)] px-6">
          <div className="flex items-center gap-4 text-sm text-pp-cream/60">
            <span>No account needed</span>
            <span>·</span>
            <span>Private and confidential</span>
            <span>·</span>
            <span>Takes 2 minutes</span>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-2xl px-6">
          <p className="pp-h-tag text-pp-accent">
            Step {currentStep + 1} of {steps.length}
          </p>
          <h1 className="pp-h-section mt-4 text-pp-deep">{step.question}</h1>
          <div className="mt-10 space-y-3">
            {step.options.map((option) => (
              <button
                key={option}
                onClick={() => selectAnswer(option)}
                className="w-full rounded-pp border border-pp-line p-5 text-left text-pp-ink hover:border-pp-accent hover:bg-pp-cream-warm transition-colors"
              >
                {option}
              </button>
            ))}
          </div>
          {currentStep > 0 && (
            <button
              onClick={() => {
                setCurrentStep(currentStep - 1);
                setAnswers(answers.slice(0, -1));
              }}
              className="mt-6 text-sm text-pp-deep hover:underline"
            >
              ← Back
            </button>
          )}
        </div>
      </section>
    </>
  );
}
