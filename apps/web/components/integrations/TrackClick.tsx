'use client';

import { pushDataLayerEvent } from './DataLayerEvents';

interface TrackClickProps {
  event: string;
  data?: Record<string, unknown>;
  children: React.ReactNode;
  className?: string;
}

export function TrackClick({ event, data, children, className }: TrackClickProps) {
  return (
    <span
      className={className}
      onClick={() => pushDataLayerEvent(event, data)}
      role="presentation"
    >
      {children}
    </span>
  );
}
