export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'GeauxWeisbeck4/sanity-angular-tailwindcss-website'
      }
    },
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
                  buildHookId: '624ff060431f254aab43d9f4',
                  title: 'Sanity Studio',
                  name: 'sanity-angular-tailwindcss-website-studio-gqm8j64e',
                  apiId: 'ed209517-0e23-481d-9e8f-acf0a8ea8ef8'
                },
                {
                  buildHookId: '624ff060c3dccd4b3b596681',
                  title: 'Website',
                  name: 'sanity-angular-tailwindcss-website-web-61kzpfg9',
                  apiId: '8e984273-841a-4712-9e08-365b66036e8e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/GeauxWeisbeck4/sanity-angular-tailwindcss-website',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-angular-tailwindcss-website-web-61kzpfg9.netlify.app', category: 'apps'}
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
