export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap'
  ],
  css: [
    '~/assets/css/main.css',
    'swiper/css',
    'swiper/css/navigation',
    'swiper/css/pagination'
  ],
  sitemap: {
    sitemapName: 'sitemap.xml',
    siteUrl: 'https://spconflix.com',
  } as any,
})
