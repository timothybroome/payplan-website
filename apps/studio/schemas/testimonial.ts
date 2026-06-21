import { defineType, defineField } from 'sanity';

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 4,
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'name',
      title: 'Customer Name',
      type: 'string',
      description: 'First name or initials only',
    }),
    defineField({
      name: 'solution',
      title: 'Solution',
      type: 'reference',
      to: [{ type: 'solution' }],
      description: 'Which debt solution this testimonial relates to',
    }),
    defineField({
      name: 'source',
      title: 'Source',
      type: 'string',
      options: {
        list: [
          { title: 'Trustpilot', value: 'trustpilot' },
          { title: 'Google', value: 'google' },
          { title: 'Direct', value: 'direct' },
        ],
      },
    }),
    defineField({
      name: 'rating',
      title: 'Star Rating',
      type: 'number',
      validation: (r) => r.min(1).max(5),
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'quote' },
    prepare: ({ title, subtitle }) => ({
      title: title || 'Anonymous',
      subtitle: subtitle?.slice(0, 80) + '...',
    }),
  },
});
