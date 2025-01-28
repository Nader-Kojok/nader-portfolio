import { Rule } from '@sanity/types'

const heroSchema = {
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    {
      name: 'title_en',
      title: 'Title (English)',
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
      name: 'viewWork_en',
      title: 'View Work Button (English)',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'getInTouch_en',
      title: 'Get in Touch Button (English)',
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
      name: 'description_fr',
      title: 'Description (French)',
      type: 'text',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'viewWork_fr',
      title: 'View Work Button (French)',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'getInTouch_fr',
      title: 'Get in Touch Button (French)',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    }
  ]
}

export default heroSchema