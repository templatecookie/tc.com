<template>
  <div>
    <site-header />
    <NuxtPage />
    <site-footer />
  </div>
</template>


<script>
import HOMEPAGE_QUERY from '~/graphql/homepage'

export default {
  async asyncData({ app }) {
    const client = app.apolloProvider.defaultClient;


  //   const { data } = await client.query({
  //     query: HOMEPAGE_QUERY,
  //   })

  //   const homepage = data.homepage;
  //   const latestProducts = data.allProducts;

  //   return { homepage, latestProducts }
  },
};
</script>


