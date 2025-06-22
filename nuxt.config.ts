export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap'
  ],
  css: [
    '~/assets/css/main.css'
  ],
  sitemap: {
    sitemapName: 'sitemap.xml',
    siteUrl: 'https://spconflix.com',
  } as any,
})
