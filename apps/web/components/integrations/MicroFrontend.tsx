'use client';

import { useEffect, useRef, useState } from 'react';

interface MicroFrontendProps {
  name: string;
  remoteUrl?: string;
  fallback?: React.ReactNode;
}

export function MicroFrontend({ name, remoteUrl, fallback }: MicroFrontendProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!remoteUrl || !containerRef.current) {
      return;
    }

    const script = document.createElement('script');
    script.src = remoteUrl;
    script.async = true;
    script.onload = () => setLoaded(true);
    script.onerror = () => setError(true);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [remoteUrl]);

  if (!remoteUrl || error) {
    return <>{fallback}</>;
  }

  return (
    <div ref={containerRef} data-mfe={name}>
      {!loaded && (
        <div className="flex items-center justify-center py-20">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-pp-accent border-t-transparent" />
        </div>
      )}
    </div>
  );
}
