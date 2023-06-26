<template>
  <div>
    <section class="py-12 lg:pb-12 bg-no-repeat bg-center bg-cover" style="background-image: url('https://www.datocms-assets.com/73511/1653474086-hero_bg.png')">
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <div class="text-left">
          <h1 class="text-4xl md:text-heading-40 textdark mb-6 mx-auto font-semibold" v-if="product?.title">
            {{ product?.title }} - Documentation
          </h1>
          <p class="text-lg md:text-lg textdark mb-8 font-light" v-if="product?.description">
            {{ product?.description }}
          </p>
        </div>
      </div>
    </section>
    <section>
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <div class="flex py-8 items-start">
          <div class="w-3/12 h-full border-r-[1px] border-gray-100 ">
            <ul class="mb-6" v-for="(items, index) in categories" :key="index">
              <li class="uppercase text-xs text-gray-500 mb-2"> {{ index }} </li>
              <li v-for="(item, index) in items" :key="index">
                <nuxt-link :to="item._path" class="px-4 py-2 inline-block w-full text-gray-700 font-light text-sm"> {{
                  item.title }} </nuxt-link>
              </li>
            </ul>
            <ul>
              <li>
                <nuxt-link :to="`/docs/${$route.params.slug}/hosting`"
                  class="px-4 py-2 inline-block w-full text-gray-700 font-light text-sm">
                  Hosting
                </nuxt-link>
              </li>
              <li>
                <nuxt-link :to="`/docs/${$route.params.slug}/faq`"
                  class="px-4 py-2 inline-block w-full text-gray-700 font-light text-sm">
                  FAQ
                </nuxt-link>
              </li>
            </ul>
          </div>
          <div class="flex flex-wrap gap-4 ml-4 w-full">
            <DocCategoryCardItem :categories="categories" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import DocCategoryCardItem from '../../../components/Docs/DocCategoryCardItem.vue';

  export default {
    components: {
      DocCategoryCardItem
    },
    head() {
      const title = this.product.title + ' Documentation';
      const description = this.product.description;
      return {
        title: title,
        meta: [{
          hid: 'description',
          name: 'description',
          content: description
        },
        // Open Graph
        {
          hid: 'og:title',
          property: 'og:title',
          content: title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: description
        }
        ]
      }
    },
    data() {
      return {
        bannerImg: "/images/img-five.png",
      };
    },
    // async asyncData ({ $content, params }) {
    //   console.log(params)
    //   try {
    //     const pages = await $content(`docs/${ params.slug }`, { deep: true })
    //     .where({slug: {$ne: "index"}})
    //     .sortBy('position', 'asc')
    //     .only(['title', 'path', 'description', 'category',])
    //     .fetch()

    //     const categories = groupBy(pages, 'category')

    //     let productData = await $content(`docs/${ params.slug }`, { deep: true })
    //       .where({slug: {$eq: 'index'}})
    //       .only(['title', 'path', 'description'])
    //       .fetch()
    //     const product = productData[0]

    //     return {
    //       pages,
    //       product,
    //       categories,
    //     }
    //   } catch (error) {
    //     $sentry.captureException(error)
    //   }
    // },
    methods: {
      redirectToDocs() {
        const keys = Object.keys(this.categories);
        const url = this.categories[keys[0]][0].path;

        this.$router.push(url)
      },
    },
  }
</script>
<script setup>
  import groupBy from 'lodash.groupby';
  const { path } = useRoute()
  console.log(path)
  const { data } = await useAsyncData('home', () => queryContent(`${path}`).sort({position:'asc'}).find())
  const pages = data._rawValue
  console.log(pages)
  const categories = groupBy(pages, 'category')
  const pdata = await useAsyncData('home2', () => queryContent(`${path}`).where({ 'status': { $contains: 'true' } }).where({ 'category': { $contains: 'Getting Started' } }).only(['title', 'path', 'description']).find())
  const [product] = pdata.data._rawValue
</script>

<style scoped>
  .nuxt-link-exact-active {
    background-color: rgb(239, 246, 255);
  }
</style>