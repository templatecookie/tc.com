// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      datoCmsToken: process.env.DATO_CMS_TOKEN,
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
