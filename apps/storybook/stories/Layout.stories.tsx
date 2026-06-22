import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { TrustBar } from '@/components/layout/TrustBar';

const meta: Meta = {
  title: 'Layout',
  parameters: {
    docs: {
      description: { component: 'Structural components that appear on every page — header, footer, and trust indicators.' },
    },
  },
};
export default meta;

export const SiteHeader: StoryObj = {
  render: () => <Header />,
  parameters: {
    docs: {
      description: { story: 'Main site header with navigation links and "Get help now" CTA. Sticky on scroll. Includes mobile hamburger menu. Navigation items are hardcoded.' },
    },
  },
};

export const SiteFooter: StoryObj = {
  render: () => <Footer />,
  parameters: {
    docs: {
      description: { story: 'Site footer with link columns, phone number, FCA registration details, and MoneyHelper partnership badge.' },
    },
  },
};

export const TrustBarDefault: StoryObj<typeof TrustBar> = {
  name: 'Trust Bar',
  render: (args) => <TrustBar {...args} />,
  args: {
    settings: {
      trustpilotRating: '4.5/5',
      peopleHelped: '3m+',
      yearsOperating: '30+',
    },
  },
  argTypes: {
    settings: {
      description: 'Values come from "Site Settings" in Sanity Studio. Update them there to change what appears across the whole site.',
    },
  },
  parameters: {
    docs: {
      description: { story: 'Trust indicators bar showing FCA regulation, free service, people helped, Trustpilot rating, and years operating. Values are editable in Sanity under Site Settings.' },
    },
  },
};
