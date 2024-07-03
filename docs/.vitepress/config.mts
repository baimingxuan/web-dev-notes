import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Web开发笔记',
  description: '笔记包含css、js、ts、vue、react、node、http、os、webpack等',
  base: '/web-dev-notes/',
  srcDir: '../src',
  outDir: '../dist',
  cleanUrls: true,

  head: [
    [
      'script',
      { id: 'register-sw' },
      `;(() => {
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.register('/sw.js')
        }
      })()`
    ]
  ],

  themeConfig: {

    nav: [
      { text: '首页', link: '/' },
      { text: '笔记', link: '/js/event-loop' }
    ],

    sidebar: [
      {
        text: 'JavaScript',
        collapsed: false,
        items: [
          {
            text: 'JS事件循环',
            link: '/js/event-loop'
          },
          {
            text: 'SSO单点登录',
            link: '/js/sso'
          }
        ]
      },
      {
        text: 'NodeJS',
        collapsed: false,
        items: [
          {
            text: 'Buffer',
            link: '/node/buffer'
          },
          {
            text: 'Node事件循环',
            link: '/node/event-loop'
          },
          {
            text: 'Fs',
            link: '/node/fs'
          },
          {
            text: 'JWT',
            link: '/node/jwt'
          },
          {
            text: '中间件',
            link: '/node/middleware'
          },
          {
            text: 'Process',
            link: '/node/process'
          },
          {
            text: 'Stream',
            link: '/node/stream'
          }
        ]
      },
      {
        text: 'OS',
        collapsed: false,
        items: [
          {
            text: '进程和线程',
            link: '/os/process-thread'
          }
        ]
      },
      {
        text: 'HTTP',
        collapsed: false,
        items: [
          {
            text: '地址栏输入URL',
            link: '/http/enter-url'
          },
          {
            text: 'TCP三次握手',
            link: '/http/handshakes-waves'
          }
        ]
      },
      {
        text: 'Vue2',
        collapsed: false,
        items: [
          {
            text: 'KeepAlive',
            link: '/vue2/keep-alive'
          },
          {
            text: 'key的原理',
            link: '/vue2/key'
          },
          {
            text: 'NextTick',
            link: '/vue2/next-tick'
          },
          {
            text: 'Observable',
            link: '/vue2/observable'
          },
          {
            text: '虚拟DOM',
            link: '/vue2/vnode'
          }
        ]
      },
      {
        text: 'Vue2源码',
        collapsed: false,
        items: [
          {
            text: '监听数组',
            link: '/vue2-code/array'
          },
          {
            text: '监听对象',
            link: '/vue2-code/object'
          }
        ]
      },
      {
        text: 'CSS',
        collapsed: false,
        items: [
          {
            text: 'BFC',
            link: '/css/bfc'
          },
          {
            text: '盒子模型',
            link: '/css/box'
          },
          {
            text: '支持小于12px的文字',
            link: '/css/css-12px'
          },
          {
            text: '水平垂直居中',
            link: '/css/layout-center'
          },
          {
            text: '回流和重绘',
            link: '/css/layout-painting'
          }
        ]
      },
      {
        text: 'Webpack',
        collapsed: false,
        items: [
          {
            text: '构建流程',
            link: '/webpack/build-process'
          },
          {
            text: '热更新',
            link: '/webpack/hmr'
          },
          {
            text: '提高构建速度',
            link: '/webpack/improve-build'
          },
          {
            text: 'Loader',
            link: '/webpack/loader'
          },
          {
            text: 'Plugin',
            link: '/webpack/plugin'
          },
          {
            text: 'Loader和Plugin的区别',
            link: '/webpack/loader-plugin'
          },
          {
            text: 'Proxy',
            link: '/webpack/proxy'
          },
          {
            text: '优化性能',
            link: '/webpack/performance'
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/baimingxuan/web-dev-notes' }
    ],

    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },

    editLink: {
      pattern: 'https://github.com/baimingxuan/web-dev-notes/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    lastUpdated: {
      text: '上次更新时间',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  }
})
