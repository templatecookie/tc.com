<script setup>
// import rawData from "~/graphql/blog/allBlogPosts";
// import rawData from "~/graphql/homepage";
import rawData from "~/graphql/global";

const { data, error } = await useGraphqlQuery({ query: rawData });

// console.log(data);
console.error(error);
console.log(data);
// console.log(error);
</script>
<template>
  <p v-if="error">Something bad happened!</p>
  <p v-else>Data: <code>{{ data }}</code></p>
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