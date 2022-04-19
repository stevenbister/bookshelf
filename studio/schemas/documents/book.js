import { BookIcon } from '@sanity/icons';

export default {
  name: 'book',
  title: 'Book',
  type: 'document',
  icon: BookIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    },
    {
      name: 'cover',
      title: 'Cover',
      type: 'cover',
    },
    {
      name: 'series',
      title: 'Series',
      type: 'reference',
      to: [{ type: 'series' }],
    },
    {
      name: 'bookNumber',
      title: 'Book number',
      type: 'number',
      hidden: ({ document }) => !document?.series, // Only show field if the series field is truthy
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
    },
    {
      name: 'readStatus',
      title: 'Status',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Not read', value: 'notRead' },
          { title: 'Reading', value: 'reading' },
          { title: 'Read', value: 'Read' },
        ],
        layout: 'grid',
      },
      validation: (Rule) => Rule.unique(),
    },
    {
      name: 'blurb',
      title: 'Blurb',
      type: 'blockContent',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'series.name',
      media: 'cover',
    },
  },
};
