export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e78a75008cbd00d3c8118a4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-kwrpa4h7',
                  apiId: '906c5f85-2d5f-46fb-83b3-202728a7b566'
                },
                {
                  buildHookId: '5e78a750d59d67b3538d47ce',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-mx26jhy7',
                  apiId: 'c33a40b5-6592-4685-908d-3e4023df812c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rijo-george/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-mx26jhy7.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
