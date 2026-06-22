import type { Meta, StoryObj } from '@storybook/react';
import { HeroHome } from '@/components/hero/HeroHome';
import { HeroSolution } from '@/components/hero/HeroSolution';
import { HeroPermission } from '@/components/hero/HeroPermission';

const meta: Meta = {
  title: 'Heroes',
};
export default meta;

export const Homepage: StoryObj = {
  render: () => <HeroHome />,
};

export const SolutionPage: StoryObj = {
  render: () => (
    <HeroSolution
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Debt solutions', href: '/debt-solutions' },
      ]}
      title="Debt Management Plan"
      description="One affordable monthly payment, distributed to your creditors. No fees, no interest, no judgement."
    />
  ),
};

export const WhereDoIStart: StoryObj = {
  render: () => <HeroPermission />,
};
