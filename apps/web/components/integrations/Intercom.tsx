'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { pushDataLayerEvent } from './DataLayerEvents';

const INTERCOM_APP_ID = process.env.NEXT_PUBLIC_INTERCOM_APP_ID;

declare global {
  interface Window {
    Intercom: (...args: unknown[]) => void;
    intercomSettings: Record<string, unknown>;
  }
}

export function Intercom() {
  if (!INTERCOM_APP_ID) return null;

  return (
    <Script
      id="intercom-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.intercomSettings = {
            api_base: "https://api-iam.intercom.io",
            app_id: "${INTERCOM_APP_ID}",
          };
          (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/${INTERCOM_APP_ID}';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
        `,
      }}
    />
  );
}

export function openIntercomChat(referralId?: string) {
  if (typeof window !== 'undefined' && window.Intercom) {
    const metadata: Record<string, unknown> = {};
    if (referralId) {
      metadata.referral_id = referralId;
    }
    window.Intercom('showNewMessage');
    pushDataLayerEvent('intercom_chat_opened', metadata);
  }
}
