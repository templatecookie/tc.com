<template>
  <div>
    <div class="pt-28 lg:pt-40 bg-dark" :class="section.cssClass">
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <div class="text-center mb-40">
          <h2 class="text-white text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 tracking-01">
            {{ section.title }}
          </h2>
          <p class="text-white text-base sm:text-lg mb-6 lg:mb-12 font-light">
            {{ section.description }}
          </p>
          <a href="#pricing"
            class="inline-block bg-primary rounded-[7px] m-2 py-4 px-9 text-lg text-white duration-300 hover:bg-black">
            Buy Now
            <img class="inline-block ml-2" src="/icons/arrow-right.svg" alt="Templatecookie Arrow Right Icon" />
          </a>
          <nuxt-link to="/hire-us"
            class="inline-block rounded-[7px] py-4 m-2 px-9 text-lg text-white duration-300 bg-secondary hover:bg-black">
            Request Customization
          </nuxt-link>
        </div>
      </div>
      <div>
        <swiper class="swiper" :modules="modules" :slides-per-view="sfig.slidesPerView" :space-between="sfig.spaceBetween"
          :speed="sfig.speed" :loop="true" :autoplay="sfig.autoplay" :free-mode="true" :breakpoints="sfig.breakpoints">
          <swiper-slide class="slider-full" v-for="(item, index) in section.screenshots" :key="index">
            <img class="w-full h-60 object-cover border border-white p-3 pb-0 border-b-0" :src="item.url"
              :alt="product.name" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import 'swiper/css/free-mode';
import { FreeMode, Autoplay } from 'swiper/modules'
export default {
  props: ['section', 'product'],
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [FreeMode, Autoplay],
      sfig: {
        slidesPerView: 1,
        spaceBetween: 24,
        autoplay: {
          delay: 1,
          disableOnInteraction: false
        },
        speed: 10000,
        breakpoints: {
          1199: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 2,
          },
          320: {
            slidesPerView: 1,
          },
        },
      },
    }
  }
}
</script>

<style></style>
