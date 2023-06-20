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
    // '@nuxtjs/apollo',
  ],
  // apollo: {
  //   clients: {
  //     default: './graphql/config/config.js'
  //   }
  // }
})
