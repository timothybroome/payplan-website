import React from 'react';

export default function Image(props: React.ImgHTMLAttributes<HTMLImageElement> & { fill?: boolean; priority?: boolean; sizes?: string }) {
  const { fill, priority, sizes, ...rest } = props;
  const style = fill ? { objectFit: 'cover' as const, width: '100%', height: '100%' } : {};
  return <img {...rest} style={{ ...style, ...((rest.style as React.CSSProperties) || {}) }} />;
}
