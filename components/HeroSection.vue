<template>
  <!-- Banner  -->
  <section
    class="overflow-hidden bg-no-repeat bg-center bg-cover"
    :style="{ backgroundImage: `url(${hero.banner.url})` }"
  >
    <div class="mx-auto max-w-7xl py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <!-- banner content  -->
      <div class="text-center">
        <h5
          class="font-light text-lg mb-2"
          data-aos="flip-up"
          data-aos-delay="200"
        >
          {{ hero.subtitle }}
        </h5>
        <h1
          class="text-3xl md:text-5xl text-dark mb-8 max-w-[680px] mx-auto font-semibold"
          data-aos="fade-up"
        >
          {{ hero.title }}
        </h1>
        <p
          class="text-lg md:text-xl text-dark mb-8 max-w-[680px] mx-auto aos"
          data-aos="fade-up"
        >
          {{ hero.description }}
        </p>

        <div class="flex justify-center w-full flex-wrap gap-6">
          <nuxt-link
            :to="item.href"
            v-for="(item, index) in hero.buttons"
            :key="index"
            :class="item.cssClass ? item.cssClass : 'bg-primary hover:bg-dark'"
            class="py-4 px-10 flex items-center transition-all justify-center text-sm-17 text-white rounded-lg overflow-hidden max-w-max"
            data-aos="flip-up"
            :data-aos-delay="100 * index"
          >
            {{ item.label }}
            <span class="inline-block ml-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.75 12H20.25"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.5 5.25L20.25 12L13.5 18.75"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["data"],
  methods: {},
  computed: {
    hero() {
      return this.data[0];
    },
  },
};
</script>

<style></style>
