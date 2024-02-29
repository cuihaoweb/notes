import { defineConfig } from 'vitepress';
import ElementPlus from 'unplugin-element-plus/vite'

const isProd = process.env.NODE_ENV === 'production';

export default (data) => {
  const config = defineConfig({
    vite: {
      ssr: {
        noExternal: [/^element-plus/],
      },
      plugins: [
        ElementPlus()
      ]
    },

    // 文件相关
    srcDir: "./src",
    assetsDir: './assets',
    outDir: './docs',
    base: '/notes',

    sitemap: {
      hostname: 'https://notes.chdl.fun',
    },

    // 页面布局相关
    lastUpdated: true,
    title: 'ch-notes',
    head: [
      [
        'link', {
          rel: 'icon',
          type: "image/svg+xml",
          href: '/notes/logo.png'
        }
      ]
    ],
    themeConfig: {
      logo: isProd ? '/notes/logo.png' : '/notes/logo.png',
      search: {
        provider: 'local'
      },
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Examples', link: '/markdown-examples' }
      ],
      // sidebar: [
      //   // {
      //   //   text: 'Examples',
      //   //   items: [
      //   //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //   //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   //   ]
      //   // }
      // ],
      socialLinks: [
        { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
      ]
    }
  });
  return config;
};
