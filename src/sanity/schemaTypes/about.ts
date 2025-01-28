export default {
  name: 'about',
  title: 'About Me Section',
  type: 'document',
  fields: [
    {
      name: 'title_en',
      title: 'Title (English)',
      type: 'string',
      validation: (Rule: { required: () => any; }) => Rule.required()
    },
    {
      name: 'description_en',
      title: 'Description (English)',
      type: 'text',
      validation: (Rule: { required: () => any; }) => Rule.required()
    },
    {
      name: 'downloadResume_en',
      title: 'Download Resume Button (English)',
      type: 'string',
      validation: (Rule: { required: () => any; }) => Rule.required()
    },
    {
      name: 'skills_title_en',
      title: 'Skills Title (English)',
      type: 'string',
      validation: (Rule: { required: () => any; }) => Rule.required()
    },
    {
      name: 'skills_description_en',
      title: 'Skills Description (English)',
      type: 'text',
      validation: (Rule: { required: () => any; }) => Rule.required()
    },
    {
      name: 'skills_list',
      title: 'Skills List',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule: { required: () => any; }) => Rule.required()
    },
    {
      name: 'journey_title_en',
      title: 'Journey Title (English)',
      type: 'string',
      validation: (Rule: { required: () => any; }) => Rule.required()
    },
    {
      name: 'journey_description_en',
      title: 'Journey Description (English)',
      type: 'text',
      validation: (Rule: { required: () => any; }) => Rule.required()
    },
    {
      name: 'experiences',
      title: 'Professional Experiences',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'role_en',
            title: 'Role (English)',
            type: 'string',
            validation: (Rule: { required: () => any; }) => Rule.required()
          },
          {
            name: 'role_fr',
            title: 'Role (French)',
            type: 'string',
            validation: (Rule: { required: () => any; }) => Rule.required()
          },
          {
            name: 'company',
            title: 'Company',
            type: 'string',
            validation: (Rule: { required: () => any; }) => Rule.required()
          },
          {
            name: 'period',
            title: 'Period',
            type: 'string',
            validation: (Rule: { required: () => any; }) => Rule.required()
          },
          {
            name: 'description_en',
            title: 'Description (English)',
            type: 'text',
            validation: (Rule: { required: () => any; }) => Rule.required()
          },
          {
            name: 'description_fr',
            title: 'Description (French)',
            type: 'text',
            validation: (Rule: { required: () => any; }) => Rule.required()
          }
        ]
      }],
      validation: (Rule: { required: () => any; }) => Rule.required()
    },
    {
      name: 'social_title_en',
      title: 'Social Title (English)',
      type: 'string',
      validation: (Rule: { required: () => any; }) => Rule.required()
    },
    {
      name: 'social_description_en',
      title: 'Social Description (English)',
      type: 'text',
      validation: (Rule: { required: () => any; }) => Rule.required()
    },
    {
      name: 'social_connect_en',
      title: 'Social Connect Button (English)',
      type: 'string',
      validation: (Rule: { required: () => any; }) => Rule.required()
    },
    // French translations
    {
      name: 'title_fr',
      title: 'Title (French)',
      type: 'string',
      validation: (Rule: { required: () => any; }) => Rule.required()
    },
    {
      name: 'description_fr',
      title: 'Description (French)',
      type: 'text',
      validation: (Rule: { required: () => any; }) => Rule.required()
    },
    {
      name: 'downloadResume_fr',
      title: 'Download Resume Button (French)',
      type: 'string',
      validation: (Rule: { required: () => any; }) => Rule.required()
    },
    {
      name: 'skills_title_fr',
      title: 'Skills Title (French)',
      type: 'string',
      validation: (Rule: { required: () => any; }) => Rule.required()
    },
    {
      name: 'skills_description_fr',
      title: 'Skills Description (French)',
      type: 'text',
      validation: (Rule: { required: () => any; }) => Rule.required()
    },
    {
      name: 'journey_title_fr',
      title: 'Journey Title (French)',
      type: 'string',
      validation: (Rule: { required: () => any; }) => Rule.required()
    },
    {
      name: 'journey_description_fr',
      title: 'Journey Description (French)',
      type: 'text',
      validation: (Rule: { required: () => any; }) => Rule.required()
    },
    {
      name: 'social_title_fr',
      title: 'Social Title (French)',
      type: 'string',
      validation: (Rule: { required: () => any; }) => Rule.required()
    },
    {
      name: 'social_description_fr',
      title: 'Social Description (French)',
      type: 'text',
      validation: (Rule: { required: () => any; }) => Rule.required()
    },
    {
      name: 'social_connect_fr',
      title: 'Social Connect Button (French)',
      type: 'string',
      validation: (Rule: { required: () => any; }) => Rule.required()
    }
  ]
}