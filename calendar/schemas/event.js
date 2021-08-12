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
      of: [{type: 'reference', to: {type: 'eventCategory'}}],
    },
    {
      name: 'organiser',
      title: 'Organiser',
      type: 'reference',
      to: {type: 'organiser'},
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
