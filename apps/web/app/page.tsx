import { HeroHome } from '@components/hero/HeroHome';
import { TrustBar } from '@components/layout/TrustBar';
import { SegmentationGrid } from '@components/content/SegmentationGrid';
import { ThreeStepProcess } from '@components/content/ThreeStepProcess';
import { SolutionGrid } from '@components/content/SolutionGrid';
import { TestimonialBlock } from '@components/content/TestimonialBlock';

export default function HomePage() {
  return (
    <>
      <HeroHome />
      <TrustBar />
      <SegmentationGrid />
      <ThreeStepProcess />
      <TestimonialBlock />
      <SolutionGrid />
    </>
  );
}
