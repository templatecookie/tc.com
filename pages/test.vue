<script setup>
import ProductCard from "~/components/ProductCard.vue";
// import rawData from "~/graphql/homepage";
import rawData from "~/graphql/global";
// import rawData from "~/graphql/homepage";
import { ref } from "vue"

const latestProducts = ref([])


const { data, error } = await useGraphqlQuery({ query: rawData });
latestProducts.value = data._rawValue;

// console.error(error);
// console.log(data);
// console.log(error);
</script>
<template>
  <p v-if="error">Something bad happened!</p>
  <p v-else>Data: <code>{{ latestProducts }}</code></p>
  <div></div>
</template>