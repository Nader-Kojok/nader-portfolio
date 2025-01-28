import { Rule } from '@sanity/types'

const aboutSchema = {
  name: 'about',
  title: 'About Me Section',
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
      name: 'downloadResume_en',
      title: 'Download Resume Button (English)',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'skills_title_en',
      title: 'Skills Title (English)',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'skills_description_en',
      title: 'Skills Description (English)',
      type: 'text',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'skills_list',
      title: 'Skills List',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'skill',
          fields: [
            {
              name: 'skillName',
              type: 'string',
              title: 'Skill',
              validation: (Rule: Rule) => Rule.required()
            }
          ],
          preview: {
            select: {
              title: 'skillName'
            }
          }
        }
      ],
      validation: (Rule: Rule) => Rule.required().min(1)
    },
    {
      name: 'journey_title_en',
      title: 'Journey Title (English)',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'journey_description_en',
      title: 'Journey Description (English)',
      type: 'text',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'experiences',
      title: 'Professional Experiences',
      type: 'array',
      of: [{
        type: 'object',
        name: 'experience',
        fields: [
          {
            name: 'role_en',
            title: 'Role (English)',
            type: 'string',
            validation: (Rule: Rule) => Rule.required()
          },
          {
            name: 'role_fr',
            title: 'Role (French)',
            type: 'string',
            validation: (Rule: Rule) => Rule.required()
          },
          {
            name: 'company',
            title: 'Company',
            type: 'string',
            validation: (Rule: Rule) => Rule.required()
          },
          {
            name: 'period',
            title: 'Period',
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
          }
        ]
      }],
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'social_title_en',
      title: 'Social Title (English)',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'social_description_en',
      title: 'Social Description (English)',
      type: 'text',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'social_connect_en',
      title: 'Social Connect Button (English)',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    // French translations
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
      name: 'downloadResume_fr',
      title: 'Download Resume Button (French)',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'skills_title_fr',
      title: 'Skills Title (French)',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'skills_description_fr',
      title: 'Skills Description (French)',
      type: 'text',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'journey_title_fr',
      title: 'Journey Title (French)',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'journey_description_fr',
      title: 'Journey Description (French)',
      type: 'text',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'social_title_fr',
      title: 'Social Title (French)',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'social_description_fr',
      title: 'Social Description (French)',
      type: 'text',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'social_connect_fr',
      title: 'Social Connect Button (French)',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    }
  ]
}

export default aboutSchema