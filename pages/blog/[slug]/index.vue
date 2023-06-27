<template>
  <div class="bg-gray-100">
    <div class="bg-blue-600">
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <div class="py-12">
          <h1 class="!text-white text-2xl lg:text-5xl mb-2">Blog Details</h1>
          <div class="text-gray-200 font-light">
            <nuxt-link to="/blog" class="!text-gray-200 hover:text-gray-600">Home</nuxt-link> <nuxt-link
              class="!text-gray-200 hover:text-gray-600" to="/blog">Blog</nuxt-link> / <a href="javascript:void(0)"
              class="!text-gray-300"> {{ post.title }} </a>
          </div>
        </div>
      </div>
    </div>
    <div class="mx-auto max-w-7xl px-4 sm:px-6 bg-white">
      <div class="py-24">
        <div class="w-full md:w-8/12 p-4 mx-auto">
          <div class="mb-6">
            <h2 class="text-5xl mb-4 text-gray-900"> {{ post.title }} </h2>
            <div class="text-sm text-gray-600">
              Updated at <span class="mr-2 pr-3 border-r border-gray-400">{{ (post.updatedAt) }}</span>
              Category:
              <a href="#" v-for="(tag, index) in post.tags" :key="index"> {{ tag.name }}, </a>
            </div>
          </div>
          <img class="w-full h-auto object-cover" v-if="post.image && post.image.url" :src="post.image.url"
            :alt="post.title">
          <div class="content py-4 markdown-body">
            <structured-text :data="post.description" :renderInlineRecord="renderInlineRecord"
              renderLinkToRecord="renderLinkToRecord" />
          </div>
        </div>
        <section class="text-gray-600 body-font overflow-hidden pt-14 lg:pt-20">
          <div class="w-full md:w-8/12 px-5 mx-auto">
            <h4 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              Read More
            </h4>
            <hr class="my-6">
            <div class="-my-8 divide-y-2 divide-gray-100">
              <div class="py-8 flex flex-wrap md:flex-nowrap group" v-for="(item, i) in relatedPosts" :key="i">
                <div class="md:w-52 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span class="font-semibold title-font text-gray-700" v-for="(tag, index) in item.tags" :key="index">{{
                    tag.name }}</span>
                  <span class="mt-1 text-gray-500 text-sm">{{ (item.updatedAt) }}</span>
                </div>
                <div class="md:flex-grow">
                  <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                    <nuxt-link :to="{ name: 'blog-slug', params: { slug: item?.slug } }"
                      class="text-gray-900 group-hover:text-blue-500 inline-flex items-center md:mb-2 lg:mb-0">
                      {{ item.title }}
                    </nuxt-link>
                  </h2>
                  <p class="leading-relaxed">
                    {{ item.shortDescription }}
                  </p>
                  <nuxt-link to="/" class="text-blue-500 inline-flex items-center mt-4">
                    Read More
                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"
                      stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import BLOG_DETAILS from '~/graphql/blog/postDetails'
import { ref } from 'vue'
export default {
  head() {
    const postDetails = this.post
    const seoTitle = `${postDetails.title} | Templatecookie.com`;
    const seoDesc = postDetails.shortDescription;
    return {
      title: seoTitle,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: seoDesc },
        { hid: 'og:title', property: 'og:title', name: 'og:title', content: seoTitle },
        { hid: 'og:description', name: 'og:description', name: 'og:description', content: seoDesc },
        { hid: 'og:type', property: 'og:type', name: 'og:type', content: "article" },
        { hid: 'og:image', property: 'og:image', name: 'og:image', content: postDetails.image.url },
      ],
    }
  },

  async setup() {
    const { data } = await useGraphqlQuery({ query: BLOG_DETAILS });
    const post = ref([])
    // posts.value = data._rawValue.allPosts;
    console.log(data._rawValue);
    return {
      post
    }
  },
}
</script>