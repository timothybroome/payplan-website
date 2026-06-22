'use client';

import { useEffect } from 'react';
import { pushDataLayerEvent } from './DataLayerEvents';

const REFERRAL_COOKIE = 'pp_referral_id';

function getCookie(name: string): string | undefined {
  if (typeof document === 'undefined') return undefined;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : undefined;
}

export function ReferralTracker() {
  useEffect(() => {
    const referralId = getCookie(REFERRAL_COOKIE);
    if (referralId) {
      pushDataLayerEvent('referral_identified', {
        referral_id: referralId,
      });
    }
  }, []);

  return null;
}

export function getReferralId(): string | undefined {
  return getCookie(REFERRAL_COOKIE);
}
