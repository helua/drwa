export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    {
      name: 'eventStart',
      title: 'Event starts at',
      type: 'datetime',
    },
    {
      name: 'eventEnd',
      title: 'Event ends at',
      type: 'datetime',
    },
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
        maxLength: 96,
      },
    },
    {
      name: 'registration',
      title: 'Registration',
      type: 'string',
    },
    {
      name: 'articleTitle',
      title: 'Article title',
      type: 'string',
    },
    {
      name: 'articleSlug',
      title: 'Article slug',
      type: 'slug',
      options: {
        source: 'articleTitle',
        maxLength: 96,
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'articleTitle2',
      title: 'Article title 2',
      type: 'string',
    },
    {
      name: 'articleSlug2',
      title: 'Article slug 2',
      type: 'slug',
      options: {
        source: 'articleTitle2',
        maxLength: 96,
      },
    },
    {
      name: 'body2',
      title: 'Body2',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
