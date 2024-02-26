import { defineConfig } from 'vitepress';
import { fileURLToPath, URL } from 'node:url'


export default (data) => {
  const config = defineConfig({
    vite: {
      resolve: {
        // alias: [
        //   {
        //     find: /^.*\/VPSidebar\.vue$/,
        //     replacement: fileURLToPath(new URL('./theme/modules/SideBar.vue', import.meta.url))
        //   }
        // ]
      }
    },
    // 文件相关
    srcDir: "./src",
    assetsDir: './assets',
    outDir: './dist',

    // 页面布局相关
    lastUpdated: true,
    title: 'ch-notes',
    head: [
      [
        'link', {
          rel: 'icon',
          type: "image/svg+xml",
          href: '/logo.png'
        }
      ]
    ],
    themeConfig: {
      logo: '/logo.png',
      search: {
        provider: 'local'
      },
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Examples', link: '/markdown-examples' }
      ],
      sidebar: [
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        }
      ],
      socialLinks: [
        { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
      ]
    }
  });
  return config;
};
