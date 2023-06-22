<!-- <script setup>
import ProductCard from "~/components/ProductCard.vue";
import rawData from "~/graphql/homepage";
import { ref } from "vue"

const latestProducts = ref([])


const { data, error } = await useGraphqlQuery({ query: rawData });
latestProducts.value = data._rawValue.allProducts;
console.log(data);
console.log(data);
</script> -->
<script>
  export default {
    data() {
      return {
        page: null
      };
    },
    methods: {
      async fetchData() {
        this.path = this.$route.path;
        const [result] = await queryContent('docs/jobpilot/installation').find();
        this.page = result;
      }
    },
    mounted() {
      this.path = this.$route.path;
      this.fetchData();
      console.log(this.page.body);
    },
  }
</script>
<template>
  {{this.page}}
  <p v-if="error">Something bad happened!</p>
  <p v-else>Data: <code>{{ latestProducts }}</code></p>
  <div v-for="(item, index) in latestProducts" :key="index" class="flex items-stretch" data-aos="fade-up"
    :data-aos-delay="index * 100">
    <ProductCard :product="item" />
  </div>
</template>

<!-- <template>
<h1>hello world</h1>
</template> -->



<!-- <script>

// export default {
//   mounted(){
//     console.log('hello world');
//   }
// }
// const query = gql`
// query {
//   homepage {
//     seoData {
//       title
//       description
//       ogImage {
//         url
//       }
//     }
//     heroSection {
//       title
//       subtitle
//       description
//       cssClass
//       banner {
//         url
//       }
//       actions {
//         cssClass
//         link {
//           label
//           href
//           target
//         }
//       }
//     }
//     featuredSection {
//       title
//       description
//       cssClass
//       products {
//         name
//         slug
//         description
//         banner {
//           url
//         }
//         category {
//           name
//           slug
//         }
//       }
//     }
//     latestProduct {
//       title
//       description
//       bgClass
//       background {
//         url
//       }
//     }
//     topFeatures {
//       cssClass
//       info {
//         title
//         description
//         bgClass
//         background {
//           url
//         }
//       }
//       features {
//         title
//         description
//         cssClass
//         image {
//           url
//         }
//       }
//     }
//     whyUsSection {
//       info {
//         title
//         description
//         bgClass
//         background {
//           url
//         }
//       }
//       feature {
//         title
//         description
//         cssClass
//         image {
//           url
//         }
//       }
//       counters {
//         title
//         description
//         cssClass
//         counter
//         icon {
//           url
//         }
//       }
//     }
//   }
//   allProducts(first: 6, orderBy: id_DESC, filter: {homepage: {eq: "true"}}) {
//     id
//     name
//     description
//     slug
//     banner {
//       url
//     }
//     category {
//       name
//       slug
//     }
//   }
// }
// `

// console.log('query is ok, calling the api');
// const { data } = await useAsyncQuery(query)

// console.log(data);

</script> -->