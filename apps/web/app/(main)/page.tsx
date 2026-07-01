export const revalidate = 60;

import { HeroHome } from '@components/hero/HeroHome';
import { TrustBar } from '@components/layout/TrustBar';
import { SegmentationGrid } from '@components/content/SegmentationGrid';
import { ThreeStepProcess } from '@components/content/ThreeStepProcess';
import { SolutionGrid } from '@components/content/SolutionGrid';
import { TestimonialBlock } from '@components/content/TestimonialBlock';
import { TrustpilotWidget } from '@components/integrations';
import { getSiteSettings, getSolutions, getTestimonials } from '@/sanity/queries';

export default async function HomePage() {
  const [settings, solutions, testimonials] = await Promise.all([
    getSiteSettings(),
    getSolutions(),
    getTestimonials(),
  ]);

  return (
    <>
      <HeroHome />
      <TrustBar settings={settings} />
      <SegmentationGrid />
      <ThreeStepProcess />
      <TestimonialBlock testimonials={testimonials} />
      <section className="bg-pp-cream-warm py-16">
        <div className="mx-auto max-w-[var(--container-readable)] px-6">
          <TrustpilotWidget theme="light" />
        </div>
      </section>
      <SolutionGrid solutions={solutions} />
    </>
  );
}
