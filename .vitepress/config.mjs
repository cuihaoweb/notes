import { defineConfig } from 'vitepress';
// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'
// import vuetify from 'vite-plugin-vuetify';

export default (data) => {
  const config = defineConfig({
    vite: {
      ssr: {
        noExternal: [/^vuetify/, /^element-plus/],
      },
      plugins: [
        ElementPlus()
      ]
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
