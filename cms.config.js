// See definitions of each property in https://www.netlifycms.org/docs/configuration-options/
export default {
  load_config_file: false,
  backend: {
    name: 'git-gateway',
    branch: 'production',
  },
  site_url: process.env.BUILD_URL,
  publish_mode: 'editorial_workflow',
  media_folder: 'public/images/insights',
  public_folder: process.env.LOCAL_PATH + '/images/insights',
  logo_url: process.env.LOCAL_PATH + '/images/200701-flare-hub-logo-black.png',
  collections: [
    {
      name: 'insights',
      label: 'Insights',
      label_singular: 'Insight',
      folder: 'Content',
      extension: 'md',
      format: 'frontmatter',
      preview_path: 'insights/{{slug}}',
      slug: '{{slug}}',
      create: true,
      delete: false,
      summary: '{{title}} - Revised on {{revised}}',
      sortable_fields: ['title', 'created', 'revised'],
      view_groups: [{ label: 'User', field: 'author' }],
      fields: [
        {
          name: 'title',
          label: 'Title',
          widget: 'string',
        },
        {
          name: 'author',
          label: 'Author',
          widget: 'select',
          options: ['Daniela', 'Igor'],
        },
        {
          name: 'created',
          label: 'Created on',
          widget: 'datetime',
          format: 'LL',
          date_format: 'LL',
          time_format: false,
          picker_utc: false,
        },
        {
          name: 'revised',
          label: 'Revised on',
          widget: 'datetime',
          format: 'LL',
          date_format: 'LL',
          time_format: false,
          picker_utc: false,
        },
        {
          name: 'time',
          label: 'Reading time in minutes',
          widget: 'number',
          value_type: 'int',
        },
        {
          name: 'image',
          label: 'Featured image',
          widget: 'image',
          allow_multiple: false,
        },
        {
          name: 'imageTitle',
          label: 'Featured image caption',
          widget: 'string',
        },
        {
          name: 'excerpt',
          label: 'Excerpt',
          widget: 'text',
        },
        {
          name: 'body',
          label: 'Content',
          widget: 'markdown',
        }
      ],
    },
  ],
}
