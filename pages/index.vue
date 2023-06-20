<template>
  <div>
    <HeroSection :data="heroSection" />

    <!-- Latest Product -->
    <!-- <section class="latest" v-if="homepage && homepage.latestProduct" id="products">
      <div class="mx-auto max-w-7xl py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div class="mb-72 text-center">
          <h2 class="text-4xl md:text-5xl textdark font-semibold capitalize tracking-1 mb-8 ">
            {{ homepage.latestProduct[0].title }}
          </h2>
          <p class="text-lg font-light max-w-lg mx-auto text-dark" v-if="homepage.latestProduct[0].description">
            {{ homepage.latestProduct[0].description }}
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div
            v-for="(item, index) in latestProducts"
            :key="index"
            class="flex items-stretch" data-aos="fade-up" :data-aos-delay="index * 100">
            <ProductCard :product="item" :large="false" />
          </div>
        </div>
      </div>
    </section> -->

    <!-- Why Should  -->
    <!-- <TopFeaturesSection v-if="homepage && homepage.topFeatures" :data="homepage.topFeatures" />
    <WhyUs v-if="homepage && homepage.whyUsSection" :data="homepage.whyUsSection" />
    <div class="bg-primary">
      <div class="mx-auto max-w-2xl py-16 px-6 text-center sm:py-20 lg:px-8">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span class="block"> Lunch your site faster </span>
          <span class="block"> Hire us today </span>
        </h2>
        <p class="mt-4 text-lg leading-6 text-white">
          Our team composed with expert designer and developers to handle project at any size
        </p>
        <div class="flex flex-wrap gap-4 justify-center mt-4">
          <nuxt-link to="/hire-us" class="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-dark hover:text-white hover:bg-dark sm:w-auto">
            Hire Us Now
          </nuxt-link>
          <nuxt-link to="/installation-plans" class="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-dark hover:text-white hover:bg-dark sm:w-auto">
            Installation Plans
          </nuxt-link>
        </div>
      </div>
    </div>

    <blog-section :data="latestPosts" /> -->
  </div>
</template>

<script setup>
// import ProductCard from "../components/ProductCard.vue";
import HOMEPAGE_QUERY from '~/graphql/homepage'
import HeroSection from "../components/HeroSection.vue";
import useGraphqlQuery from '~/composables/useGraphqlQuery';
// import WhyUs from "../components/Home/WhyUs.vue";
// import BlogSection from "../components/Home/BlogSection.vue";
// import TopFeaturesSection from "../components/Home/TopFeaturesSection.vue";
import { ref } from 'vue'
const heroSection = ref([])
const hpdata = `
query {
  homepage {
    heroSection {
      title
      subtitle
      description
      cssClass
      banner {
        url
      }
      buttons {
        cssClass
        label
        href
        target
      }
    }
    latestProduct {
      title
      description
      bgClass
      background {
        url
      }
    }
    topFeatures {
      cssClass
      info {
        title
        description
        bgClass
        background {
          url
        }
      }
      features {
        title
        description
        cssClass
        image {
          url
        }
      }
    }
    whyUsSection {
      info {
        title
        description
        bgClass
        background {
          url
        }
      }
      feature {
        title
        description
        cssClass
        image {
          url
        }
      }
      counters {
        title
        description
        cssClass
        counter
        icon {
          url
        }
      }
    }
  }
  allProducts(first: 6, orderBy: id_DESC, filter: {homepage: {eq: "true"}}) {
    id
    name
    description
    slug
    shortName
    banner {
      url
    }
    category {
      name
      slug
    }
  }
  allPosts(first: 3, orderBy: _createdAt_DESC){
    id
    title
    slug
    updatedAt
    shortDescription
    image {
      url
    }
  }
}
`



const { data, error } = await useGraphqlQuery({ query: hpdata });

heroSection.value = data._rawValue.homepage.heroSection





console.log(data._rawValue.homepage.heroSection);
if (error) {
  console.error(error);
}

</script>
