import type { Meta, StoryObj } from '@storybook/react';
import { ThreeStepProcess } from '@/components/content/ThreeStepProcess';
import { TestimonialBlock } from '@/components/content/TestimonialBlock';
import { SegmentationGrid } from '@/components/content/SegmentationGrid';
import { SolutionGrid } from '@/components/content/SolutionGrid';
import { AtAGlance } from '@/components/content/AtAGlance';
import { EligibilityCheck } from '@/components/content/EligibilityCheck';
import { ComparisonTable } from '@/components/content/ComparisonTable';
import { FaqAccordion } from '@/components/content/FaqAccordion';
import {
  testimonials,
  solutions,
  dmpAtAGlance,
  dmpEligibility,
  comparisonSolutions,
  faqItems,
} from './fixtures/data';

const meta: Meta = {
  title: 'Content Sections',
};
export default meta;

export const ThreeStep: StoryObj = {
  render: () => <ThreeStepProcess />,
};

export const Testimonials: StoryObj = {
  render: () => <TestimonialBlock testimonials={testimonials} />,
};

export const Segmentation: StoryObj = {
  render: () => <SegmentationGrid />,
};

export const Solutions: StoryObj = {
  render: () => <SolutionGrid solutions={solutions} />,
};

export const AtAGlanceSection: StoryObj = {
  name: 'At a Glance',
  render: () => <AtAGlance title="Debt Management Plan" items={dmpAtAGlance} />,
};

export const Eligibility: StoryObj = {
  render: () => (
    <EligibilityCheck
      solutionName="DMP"
      maySuit={dmpEligibility.maySuit}
      worthKnowing={dmpEligibility.worthKnowing}
    />
  ),
};

export const Comparison: StoryObj = {
  render: () => (
    <ComparisonTable solutions={comparisonSolutions} currentSolution="DMP" />
  ),
};

export const FAQs: StoryObj = {
  render: () => <FaqAccordion items={faqItems} />,
};
