'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export function DataLayerEvents() {
  const pathname = usePathname();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
  }, []);

  useEffect(() => {
    if (pathname !== prevPathname.current) {
      window.dataLayer?.push({
        event: 'virtual_page_view',
        page_path: pathname,
      });
      prevPathname.current = pathname;
    }
  }, [pathname]);

  return null;
}

export function pushDataLayerEvent(event: string, data?: Record<string, unknown>) {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...data });
  }
}
