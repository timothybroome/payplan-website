import { defineType, defineField } from 'sanity';

export const solution = defineType({
  name: 'solution',
  title: 'Debt Solution',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'shortName',
      title: 'Short Name',
      type: 'string',
      description: 'Abbreviation used in navigation and comparison tables (e.g. DMP, IVA)',
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 3,
      description: 'One-paragraph description for solution grid cards',
    }),
    defineField({
      name: 'region',
      title: 'Region',
      type: 'string',
      options: {
        list: [
          { title: 'England & Wales', value: 'england-wales' },
          { title: 'Scotland', value: 'scotland' },
          { title: 'Both', value: 'both' },
        ],
      },
      initialValue: 'england-wales',
    }),
    defineField({
      name: 'atAGlance',
      title: 'At a Glance',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', type: 'string', title: 'Label' }),
            defineField({ name: 'value', type: 'string', title: 'Value' }),
          ],
        },
      ],
      description: 'Key facts table shown at top of solution page',
    }),
    defineField({
      name: 'eligibility',
      title: 'Eligibility',
      type: 'object',
      fields: [
        defineField({
          name: 'maySuit',
          title: 'May suit you if',
          type: 'array',
          of: [{ type: 'string' }],
        }),
        defineField({
          name: 'worthKnowing',
          title: 'Things worth knowing',
          type: 'array',
          of: [{ type: 'string' }],
        }),
      ],
    }),
    defineField({
      name: 'body',
      title: 'Body Content',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'faqItem' }] }],
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'shortName' },
  },
});
