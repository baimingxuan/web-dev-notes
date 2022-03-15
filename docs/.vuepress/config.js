module.exports = {
  title: '前端开发笔记',
  description: '前端开发经验总结及记录',
  base: '/web-dev-notes/',
  locales: {
      '/': {
          lang: 'zh-CN'
      }
  },
  themeConfig: {
      nav: [
          {
              text: 'GitHub',
              link: 'https://github.com/baimingxuan/web-dev-notes'
          }
      ],
      sidebar: [
          {
              title: '性能优化',
              path: '/performance/introduction',
              collapsable: false,
              children: [
                  {
                      title: '简介',
                      path: '/performance/introduction'
                  }
              ]
          }
      ],
      lastUpdated: '上次更新时间',
      docsRepo: 'baimingxuan/web-dev-notes',
      docsDir: 'docs',
      docsBranch: 'main',
      editLinks: true,
      editLinkText: '在 GitHub 上编辑此页'
  }
}
