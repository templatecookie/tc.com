
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      datoCmsToken: `ce32bbd78955d348af32c5f3fb0417`,
    }
  },
  app: {
    head: {
      title: 'Templatecookie.com',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'My amazing site.' }
      ],
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    // '@nuxtjs/sentry',
    // '@nuxtjs/apollo',
  ],
  // apollo: {
  //   clients: {
  //     default: './graphql/config/config.js'
  //   }
  // }
  // sentry: {
  //   dsn: 'https://72cc635251b84e40964ee9111b009c8e@o1134535.ingest.sentry.io/6438928',
  //   // publishRelease: true,
  //   // sourceMapStyle: 'hidden-source-map',
  // }
})