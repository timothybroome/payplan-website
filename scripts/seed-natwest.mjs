import { createClient } from '@sanity/client';
import { readFileSync } from 'fs';

const env = readFileSync('.env', 'utf8');
const token = env.match(/SANITY_API_TOKEN=(.*)/)?.[1]?.trim();
if (!token) {
  console.error('Missing SANITY_API_TOKEN in .env');
  process.exit(1);
}

const sanity = createClient({
  projectId: '0w7asqgt',
  dataset: 'production',
  token,
  apiVersion: '2024-01-01',
  useCdn: false,
});

const natwest = {
  _id: 'partner-natwest',
  _type: 'partnerPage',
  partnerName: 'NatWest',
  slug: { _type: 'slug', current: 'natwest' },
  logoUrl: 'natwest.svg',
  brandColour: '#42145F',
  headline: 'Free, confidential debt help',
  intro: "Your adviser at NatWest mentioned you'd be getting in touch. We're glad you did. PayPlan offers free, expert debt advice — no fees, no judgement, completely confidential.",
  faqs: [
    {
      _key: 'faq1',
      question: 'Will NatWest see what I tell you?',
      answer: 'No. Everything you share with us is completely confidential. We only contact your creditors once you have a plan in place, and only to arrange reduced payments.',
    },
    {
      _key: 'faq2',
      question: 'Do I have to stop using my NatWest account?',
      answer: "Not necessarily. It depends on the solution you choose. We'll explain exactly what's involved before you commit to anything.",
    },
    {
      _key: 'faq3',
      question: 'Is this really free?',
      answer: 'Yes. PayPlan is funded by creditors, not customers. You will never pay a fee for our advice or for setting up a debt plan.',
    },
    {
      _key: 'faq4',
      question: "What if a plan isn't right for me?",
      answer: "That's fine. We'll still give you advice on other options available to you. There's no obligation to take up any solution.",
    },
    {
      _key: 'faq5',
      question: 'How long does the process take?',
      answer: "The initial conversation takes about 20 minutes. If you decide to go ahead with a plan, we can usually have everything set up within a few days.",
    },
  ],
  seoTitle: 'Free Debt Advice — NatWest & PayPlan',
  seoDescription: 'Referred by NatWest? Get free, confidential debt advice from PayPlan. No fees, no judgement. We help you find the right solution.',
};

async function main() {
  console.log('Seeding NatWest partner page...');
  await sanity.createOrReplace(natwest);
  console.log('Done — NatWest partner page created in Sanity');
}

main().catch((err) => {
  console.error('Failed:', err.message);
  process.exit(1);
});
