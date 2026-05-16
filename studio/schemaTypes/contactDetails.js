export default {
  name: 'contactDetails',
  title: 'Contact Details',
  type: 'document',
  fields: [
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Physical Address',
      type: 'text',
    },
    {
      name: 'officeHours',
      title: 'Office Hours',
      type: 'string',
    },
    {
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'platform', type: 'string', title: 'Platform'},
            {name: 'url', type: 'url', title: 'URL'}
          ]
        }
      ]
    }
  ],
}
