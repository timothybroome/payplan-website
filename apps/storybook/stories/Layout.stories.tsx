import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { TrustBar } from '@/components/layout/TrustBar';

const meta: Meta = {
  title: 'Layout',
};
export default meta;

export const SiteHeader: StoryObj = {
  render: () => <Header />,
};

export const SiteFooter: StoryObj = {
  render: () => <Footer />,
};

export const TrustBarDefault: StoryObj = {
  name: 'Trust Bar',
  render: () => <TrustBar />,
};

export const TrustBarCustom: StoryObj = {
  name: 'Trust Bar (custom values)',
  render: () => (
    <TrustBar
      settings={{
        trustpilotRating: '4.7/5',
        peopleHelped: '3.2m+',
        yearsOperating: '31',
      }}
    />
  ),
};
