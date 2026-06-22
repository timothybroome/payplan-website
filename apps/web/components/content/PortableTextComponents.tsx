import Image from 'next/image';
import { urlFor } from '@/sanity/image';

function extractVideoId(url: string): { provider: 'youtube' | 'vimeo'; id: string } | null {
  const ytMatch = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  if (ytMatch) return { provider: 'youtube', id: ytMatch[1] };
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) return { provider: 'vimeo', id: vimeoMatch[1] };
  return null;
}

export const portableTextComponents = {
  types: {
    image: ({ value }: { value: { asset: { _ref: string }; alt?: string; caption?: string } }) => {
      if (!value?.asset?._ref) return null;
      const src = urlFor(value).width(1200).quality(80).auto('format').url();
      return (
        <figure className="my-8">
          <Image
            src={src}
            alt={value.alt || ''}
            width={1200}
            height={675}
            className="rounded-pp w-full h-auto"
            sizes="(max-width: 740px) 100vw, 740px"
          />
          {value.caption && (
            <figcaption className="mt-2 text-center text-sm text-pp-ink/50">{value.caption}</figcaption>
          )}
        </figure>
      );
    },
    videoEmbed: ({ value }: { value: { url: string; caption?: string } }) => {
      const video = extractVideoId(value.url);
      if (!video) return null;
      const embedUrl = video.provider === 'youtube'
        ? `https://www.youtube-nocookie.com/embed/${video.id}`
        : `https://player.vimeo.com/video/${video.id}`;
      return (
        <figure className="my-8">
          <div className="relative w-full overflow-hidden rounded-pp" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src={embedUrl}
              title={value.caption || 'Video'}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
          {value.caption && (
            <figcaption className="mt-2 text-center text-sm text-pp-ink/50">{value.caption}</figcaption>
          )}
        </figure>
      );
    },
  },
};
