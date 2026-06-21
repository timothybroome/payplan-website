import { defineType, defineField } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'description',
      title: 'Default Meta Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
      initialValue: '0800 316 1833',
    }),
    defineField({
      name: 'trustpilotRating',
      title: 'Trustpilot Rating',
      type: 'string',
      initialValue: '4.5/5',
    }),
    defineField({
      name: 'peopleHelped',
      title: 'People Helped',
      type: 'string',
      initialValue: '3m+',
    }),
    defineField({
      name: 'yearsOperating',
      title: 'Years Operating',
      type: 'string',
      initialValue: '30+',
    }),
    defineField({
      name: 'footerLegalText',
      title: 'Footer Legal Text',
      type: 'text',
      rows: 4,
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Site Settings' }),
  },
});
