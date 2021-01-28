export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '6012db50acbae719ab9f0553',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-page-studio-xmj77un7',
                  apiId: 'e95b9eb1-9396-4bf5-8b62-c738db2ed1b6'
                },
                {
                  buildHookId: '6012db511768fe117d59282c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-page-web-73knnv3k',
                  apiId: '7e7b6e65-8cfe-470c-b58e-6596d89b2737'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dylan-authentic/sanity-nextjs-landing-page',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-page-web-73knnv3k.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
