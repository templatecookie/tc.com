<template>
    <div>
        <!-- <h2>header</h2> -->
        <site-header :data="global" v-if="global?.logo" />
        <slot />
        <site-footer :data="global?.footer[0]" :social="global?.socialMedias" v-if="global && global?.footer" />
        <!-- <h2>footer</h2> -->
    </div>
</template>

<script setup>
import SiteFooter from '../components/SiteFooter.vue';
import SiteHeader from '../components/SiteHeader.vue';
import Global from '../graphql/global';

const global = ref({})
const { data } = await useGraphqlQuery({ query: Global })
global.value = data?._rawValue?.global;
// console.log(global);
</script>