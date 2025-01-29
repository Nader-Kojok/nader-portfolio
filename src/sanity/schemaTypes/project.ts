import { Rule } from '@sanity/types'

const projectSchema = {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title_en',
      title: 'Title (English)',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'title_fr',
      title: 'Title (French)',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'description_en',
      title: 'Description (English)',
      type: 'text',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'description_fr',
      title: 'Description (French)',
      type: 'text',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'fullDescription_en',
      title: 'Full Description (English)',
      type: 'text',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'fullDescription_fr',
      title: 'Full Description (French)',
      type: 'text',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'tools',
      title: 'Tools Used',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'challenge_en',
      title: 'Challenge (English)',
      type: 'text',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'challenge_fr',
      title: 'Challenge (French)',
      type: 'text',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'solution_en',
      title: 'Solution (English)',
      type: 'text',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'solution_fr',
      title: 'Solution (French)',
      type: 'text',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'results',
      title: 'Key Results',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'text_en',
            title: 'Result (English)',
            type: 'text',
            validation: (Rule: Rule) => Rule.required()
          },
          {
            name: 'text_fr',
            title: 'Result (French)',
            type: 'text',
            validation: (Rule: Rule) => Rule.required()
          }
        ]
      }],
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'testimonial',
      title: 'Testimonial',
      type: 'object',
      fields: [
        {
          name: 'quote_en',
          title: 'Quote (English)',
          type: 'text'
        },
        {
          name: 'quote_fr',
          title: 'Quote (French)',
          type: 'text'
        },
        {
          name: 'author',
          title: 'Author',
          type: 'string'
        },
        {
          name: 'role_en',
          title: 'Role (English)',
          type: 'string'
        },
        {
          name: 'role_fr',
          title: 'Role (French)',
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

export default projectSchema