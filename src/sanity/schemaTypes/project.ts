export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'fullDescription',
      title: 'Full Description',
      type: 'text',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'tools',
      title: 'Tools Used',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'challenge',
      title: 'Challenge',
      type: 'text',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'solution',
      title: 'Solution',
      type: 'text',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'results',
      title: 'Key Results',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'testimonial',
      title: 'Testimonial',
      type: 'object',
      fields: [
        {
          name: 'quote',
          title: 'Quote',
          type: 'text'
        },
        {
          name: 'author',
          title: 'Author',
          type: 'string'
        },
        {
          name: 'role',
          title: 'Role',
          type: 'string'
        }
      ]
    },
    {
      name: 'gallery',
      title: 'Project Gallery',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }]
    }
  ]
}