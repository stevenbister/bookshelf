import { ThListIcon } from '@sanity/icons';

export default {
  name: 'series',
  title: 'Series',
  type: 'document',
  icon: ThListIcon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
  ],
  preview: {
    select: { title: 'name' },
  },
};
