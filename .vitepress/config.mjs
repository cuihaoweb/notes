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
      hostname: 'https://notes.chdl.fun/notes/',
    },

    // 页面布局相关
    lastUpdated: true,
    title: 'ChNotes',
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
      logo: '/notes/logo.png',
      search: {
        provider: 'local'
      }
    }
  });
  return config;
};
