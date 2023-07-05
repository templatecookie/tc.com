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
        { name: 'description', content: 'My amazing site.' }
      ],
    }
  },

  css: [
    // SCSS file in the project
    "~/assets/scss/app.scss",
    // "aos/dist/aos.css",
  ],

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    // '@nuxtjs/sentry',
    // '@nuxtjs/apollo',
  ],

  plugins: [
    // { src: "./mixin/global.js", },
    { src: "@/plugins/aos", mode: "client" },
    { src: "./plugins/datocms.js", mode: "client" },
  ],

  //   purgeCSS: {
  //     whitelist: ["aos-init", "aos-animate", "data-aos-delay", "data-aos-duration", "fade-up", "zoom-in"],
  // },

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
  googleFonts: {
    display: 'swap',
    families: {
      Lexend: [300, 400, 500, 600, 700, 800],
      "Open+Sans": {
        wght: [100, 300, 400, 500, 600, 700, 800],
        ital: [100, 300, 400, 500,]
      },
    }
  },
})
