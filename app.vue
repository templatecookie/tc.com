<template>
  <div>
    <!-- <site-header /> -->
    <NuxtPage />
    <site-footer />
  </div>
</template>

<script setup>
  import SiteFooter from '~/components/SiteFooter.vue'
  // import SiteHeader from '~/components/SiteHeader.vue'

  const nuxtApp = useNuxtApp()

  nuxtApp.hook("page:finish", () => {
     window.scrollTo(0, 0)
  })
</script>
<style>

</style>
