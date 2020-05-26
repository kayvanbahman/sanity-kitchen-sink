export default {
  widgets: [
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
                  buildHookId: '5ecd69fda9751a76a7bdcb99',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-xv3zfsrp',
                  apiId: '4649628b-974c-4027-9858-4825f9a9783e'
                },
                {
                  buildHookId: '5ecd69fea9751a7727bdcbef',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-p1k7feye',
                  apiId: '27f4a9ce-d821-4eb3-8cf4-e0d55a93d2dd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kayvanbahman/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-p1k7feye.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
