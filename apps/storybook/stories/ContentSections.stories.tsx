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
  parameters: {
    docs: {
      description: { component: 'Reusable content blocks that make up the body of each page. Most pull their data from Sanity CMS — the controls below show what each prop does.' },
    },
  },
};
export default meta;

export const ThreeStep: StoryObj = {
  render: () => <ThreeStepProcess />,
  parameters: {
    docs: {
      description: { story: 'Three-step "how it works" section. Steps are hardcoded — used on the homepage and partner landing pages.' },
    },
  },
};

export const Testimonials: StoryObj<typeof TestimonialBlock> = {
  render: (args) => <TestimonialBlock {...args} />,
  args: {
    testimonials,
  },
  argTypes: {
    testimonials: {
      description: 'Array of customer testimonials from Sanity. Each has a quote, name, solution type, and star rating.',
    },
  },
  parameters: {
    docs: {
      description: { story: 'Customer testimonial cards. Content comes from the "Testimonials" section in Sanity Studio. Displays as a 3-column grid on desktop.' },
    },
  },
};

export const Segmentation: StoryObj = {
  render: () => <SegmentationGrid />,
  parameters: {
    docs: {
      description: { story: '"Where are you right now?" audience cards on the homepage. Each links to a different part of the site based on the visitor\'s situation.' },
    },
  },
};

export const Solutions: StoryObj<typeof SolutionGrid> = {
  render: (args) => <SolutionGrid {...args} />,
  args: {
    solutions,
  },
  argTypes: {
    solutions: {
      description: 'Array of debt solutions from Sanity. Automatically grouped into England/Wales and Scotland sections.',
    },
  },
  parameters: {
    docs: {
      description: { story: 'Grid of solution cards linking to individual solution pages. Solutions are managed in Sanity under "Debt Solutions".' },
    },
  },
};

export const AtAGlanceSection: StoryObj<typeof AtAGlance> = {
  name: 'At a Glance',
  render: (args) => <AtAGlance {...args} />,
  args: {
    title: 'Debt Management Plan',
    items: dmpAtAGlance,
  },
  argTypes: {
    title: { control: 'text', description: 'The solution name — appears as "[title] at a glance"' },
    items: { description: 'Key facts as label/value pairs. Managed in Sanity under each solution\'s "At a Glance" field.' },
  },
  parameters: {
    docs: {
      description: { story: 'Quick-reference table showing key facts about a solution. Appears near the top of each solution page.' },
    },
  },
};

export const Eligibility: StoryObj<typeof EligibilityCheck> = {
  render: (args) => <EligibilityCheck {...args} />,
  args: {
    solutionName: 'DMP',
    maySuit: dmpEligibility.maySuit,
    worthKnowing: dmpEligibility.worthKnowing,
  },
  argTypes: {
    solutionName: { control: 'text', description: 'Short name of the solution' },
    maySuit: { description: 'List of situations where this solution is a good fit' },
    worthKnowing: { description: 'Important considerations and trade-offs' },
  },
  parameters: {
    docs: {
      description: { story: 'Two-panel eligibility section: "May suit you if…" (green checks) and "Things worth knowing" (neutral dashes). Content from Sanity.' },
    },
  },
};

export const Comparison: StoryObj<typeof ComparisonTable> = {
  render: (args) => <ComparisonTable {...args} />,
  args: {
    solutions: comparisonSolutions,
    currentSolution: 'DMP',
  },
  argTypes: {
    currentSolution: {
      control: 'select',
      options: ['DMP', 'IVA', 'DRO'],
      description: 'Which solution column to highlight',
    },
  },
  parameters: {
    docs: {
      description: { story: 'Side-by-side comparison of debt solutions. The current page\'s solution is highlighted. Try switching the "currentSolution" control.' },
    },
  },
};

export const FAQs: StoryObj<typeof FaqAccordion> = {
  render: (args) => <FaqAccordion {...args} />,
  args: {
    items: faqItems,
    title: 'Common questions',
  },
  argTypes: {
    title: { control: 'text', description: 'Section heading above the accordion' },
    items: { description: 'FAQ items from Sanity. Each solution page has its own set.' },
  },
  parameters: {
    docs: {
      description: { story: 'Expandable FAQ accordion. Questions come from the "FAQs" section in Sanity Studio and are linked to specific solutions.' },
    },
  },
};
