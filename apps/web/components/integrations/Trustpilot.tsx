'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

const TRUSTPILOT_BUSINESS_UNIT_ID = process.env.NEXT_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID;

declare global {
  interface Window {
    Trustpilot?: {
      loadFromElement: (element: HTMLElement, flag?: boolean) => void;
    };
  }
}

interface TrustpilotWidgetProps {
  templateId?: string;
  height?: string;
  theme?: 'light' | 'dark';
  locale?: string;
}

export function TrustpilotWidget({
  templateId = '53aa8807dec7e10d38f59f32',
  height = '140px',
  theme = 'light',
  locale = 'en-GB',
}: TrustpilotWidgetProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current && window.Trustpilot) {
      window.Trustpilot.loadFromElement(ref.current, true);
    }
  }, []);

  if (!TRUSTPILOT_BUSINESS_UNIT_ID) return null;

  return (
    <div
      ref={ref}
      className="trustpilot-widget"
      data-locale={locale}
      data-template-id={templateId}
      data-businessunit-id={TRUSTPILOT_BUSINESS_UNIT_ID}
      data-style-height={height}
      data-style-width="100%"
      data-theme={theme}
      data-stars="4,5"
      data-review-languages="en"
    >
      <a
        href={`https://uk.trustpilot.com/review/payplan.com`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-pp-accent hover:underline"
      >
        See our reviews on Trustpilot
      </a>
    </div>
  );
}

export function TrustpilotScript() {
  if (!TRUSTPILOT_BUSINESS_UNIT_ID) return null;

  return (
    <Script
      id="trustpilot-script"
      strategy="lazyOnload"
      src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
    />
  );
}
