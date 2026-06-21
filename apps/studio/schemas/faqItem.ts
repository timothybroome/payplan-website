import { defineType, defineField } from 'sanity';

export const faqItem = defineType({
  name: 'faqItem',
  title: 'FAQ Item',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'solutions',
      title: 'Related Solutions',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'solution' }] }],
      description: 'Which solution pages should show this FAQ',
    }),
  ],
  preview: {
    select: { title: 'question' },
  },
});
