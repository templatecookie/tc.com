<template>
  <div>
    <HeroSection
      :data="homepage.heroSection"
      v-if="homepage && homepage?.heroSection"
    />

    <!-- Latest Product -->
    <section
      class="latest"
      v-if="homepage && homepage?.latestProduct"
      id="products"
    >
      <div
        class="mx-auto max-w-7xl py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8"
      >
        <div class="mb-[72px] text-center">
          <h2
            class="text-4xl md:text-5xl text-dark font-semibold capitalize tracking-1 mb-8"
          >
            {{ homepage.latestProduct[0].title }}
          </h2>
          <p
            class="text-lg font-light max-w-lg mx-auto text-dark"
            v-if="homepage?.latestProduct[0].description"
          >
            {{ homepage.latestProduct[0].description }}
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div
            v-for="(item, index) in latestProducts"
            :key="index"
            class="flex items-stretch aos"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <ProductCard :product="item" :large="false" />
          </div>
        </div>
      </div>
    </section>

    <!-- Why Should  -->
    <TopFeaturesSection
      v-if="homepage && homepage.topFeatures"
      :data="homepage.topFeatures"
    />
    <WhyUs
      v-if="homepage && homepage.whyUsSection"
      :data="homepage.whyUsSection"
    />
    <div class="bg-primary">
      <div class="mx-auto max-w-2xl py-16 px-6 text-center sm:py-20 lg:px-8">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span class="block"> Lunch your site faster </span>
          <span class="block"> Hire us today </span>
        </h2>
        <p class="mt-4 text-lg leading-6 text-white">
          Our team composed with expert designer and developers to handle
          project at any size
        </p>
        <div class="flex flex-wrap gap-4 justify-center mt-4">
          <nuxt-link
            to="/hire-us"
            class="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-dark hover:text-white hover:bg-dark sm:w-auto"
          >
            Hire Us Now
          </nuxt-link>
          <nuxt-link
            to="/installation-plans"
            class="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-dark hover:text-white hover:bg-dark sm:w-auto"
          >
            Installation Plans
          </nuxt-link>
        </div>
      </div>
    </div>
    <blog-section :data="latestPosts" />
  </div>
</template>

<script setup>
import useGraphqlQuery from "~/composables/useGraphqlQuery";
import { ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import HOMEPAGE_QUERY from "../graphql/homepage";
import BlogSection from "~/components/Home/BlogSection.vue";
import HeroSection from "~/components/Home/HeroSection.vue";
import TopFeaturesSection from "~/components/Home/TopFeaturesSection.vue";
import WhyUs from "~/components/Home/WhyUs.vue";
import ProductCard from "~/components/ProductCard.vue";

const mobileMenuOpen = ref(false);
const { data, error } = await useGraphqlQuery({ query: HOMEPAGE_QUERY });
const homepage = ref({});
const latestPosts = ref([]);
const latestProducts = ref([]);
homepage.value = data._rawValue.homepage;
latestProducts.value = data._rawValue.allProducts;
latestPosts.value = data._rawValue.allPosts;
</script>
