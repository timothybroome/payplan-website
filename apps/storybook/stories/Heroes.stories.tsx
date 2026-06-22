import type { Meta, StoryObj } from '@storybook/react';
import { HeroHome } from '@/components/hero/HeroHome';
import { HeroSolution } from '@/components/hero/HeroSolution';
import { HeroPermission } from '@/components/hero/HeroPermission';

export const Homepage: StoryObj = {
  render: () => <HeroHome />,
  parameters: {
    docs: {
      description: { story: 'The main homepage hero with gradient background, headline, two CTAs, and phone number. Content is hardcoded — changes require a code update.' },
    },
  },
};

export const SolutionPage: StoryObj<typeof HeroSolution> = {
  render: (args) => <HeroSolution {...args} />,
  args: {
    title: 'Debt Management Plan',
    description: 'One affordable monthly payment, distributed to your creditors. No fees, no interest, no judgement.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Debt solutions', href: '/debt-solutions' },
    ],
  },
  argTypes: {
    title: { control: 'text', description: 'The solution name displayed as H1' },
    description: { control: 'text', description: 'Summary paragraph below the title' },
  },
  parameters: {
    docs: {
      description: { story: 'Used on every debt solution page. Title and description come from Sanity. Breadcrumbs are generated from the URL path.' },
    },
  },
};

export const WhereDoIStart: StoryObj = {
  render: () => <HeroPermission />,
  parameters: {
    docs: {
      description: { story: 'Permission-based hero for the "Where Do I Start" page. Three CTAs: self-assessment, phone, and live chat (Intercom).' },
    },
  },
};

const meta: Meta = {
  title: 'Heroes',
  parameters: {
    docs: {
      description: { component: 'Hero sections appear at the top of every page. They set the tone and provide the primary calls to action.' },
    },
  },
};
export default meta;
