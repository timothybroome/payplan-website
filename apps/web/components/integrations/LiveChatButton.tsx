'use client';

import { openIntercomChat } from './Intercom';
import { getReferralId } from './ReferralTracker';

export function LiveChatButton({ className }: { className?: string }) {
  return (
    <button
      onClick={() => openIntercomChat(getReferralId())}
      className={
        className ||
        'rounded-pp border border-pp-cream/30 px-8 py-4 text-base font-medium text-pp-cream hover:bg-pp-cream/10 transition-colors'
      }
    >
      Chat with us now
    </button>
  );
}
