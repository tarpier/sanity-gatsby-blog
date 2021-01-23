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
                  buildHookId: '600c05dd5e57f16e705b2f8e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-3j5e59cv',
                  apiId: '75ca0a1d-e6ed-4830-a615-40595f6a4257'
                },
                {
                  buildHookId: '600c05dd1f0dc745059aa41f',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-1fhbt2b8',
                  apiId: '50d6aeb7-0213-4377-8d07-a43ced7f4f15'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tarpier/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-1fhbt2b8.netlify.app', category: 'apps' }
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
