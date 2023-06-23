<!-- v-if="global && global.footer" -->
<template>
    <div>
        <header>
            <div class="relative bg-white">
                <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 md:justify-start lg:space-x-10">
                    <div class="flex justify-start lg:w-0 lg:flex-1"><a href="/" aria-current="page"
                            class="nuxt-link-exact-active nuxt-link-active"><span class="sr-only">Templatecookie</span> <img
                                src="https://www.datocms-assets.com/73511/1653457172-templatecookie.svg"
                                alt="Templatecookie.com Premium Quality Scripts &amp; HTML Templates"
                                class="h-8 w-auto sm:h-10"></a></div>
                    <div class="lg:hidden ml-auto">
                        <div class="toggle flex flex-col gap-1"><span class="w-5 h-0.5 bg-gray-700 inline-flex"></span>
                            <span class="w-5 h-0.5 bg-gray-700 inline-flex"></span> <span
                                class="w-5 h-0.5 bg-gray-700 inline-flex"></span>
                        </div>
                    </div>
                    <nav class="hidden space-x-6 lg:flex items-center">
                        <div class="relative"><button type="button" aria-expanded="false"
                                class="group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-gray-500"><span
                                    class="font-lexend">Products</span> <svg xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                                    class="ml-2 h-5 w-5 group-hover:text-gray-500 text-gray-400">
                                    <path fill-rule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                        clip-rule="evenodd"></path>
                                </svg></button> </div> <a href="/installation-plans"
                            class="text-base font-medium text-gray-500 hover:text-gray-900">Installation Plans</a><a
                            href="/get-support" class="text-base font-medium text-gray-500 hover:text-gray-900">Get
                            Support</a><a href="/docs/"
                            class="text-base font-medium text-gray-500 hover:text-gray-900">Documentation</a>
                    </nav>
                    <div class="hidden items-center justify-end lg:flex md:flex-1 lg:w-0"><a href="/hire-us"
                            class="whitespace-nowrap lg:hidden xl:block block text-base font-medium text-gray-500 hover:text-gray-900">
                            Hire Us
                        </a> <a href="/elite-support"
                            class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-primary px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-secondary">
                            Elite Support
                        </a></div>
                </div>
            </div>
        </header>
        <slot />
        <!-- <site-footer :data="global?.footer[0]" :social="global?.socialMedias" /> -->
    </div>
</template>

<!-- <script setup>
import SiteFooter from '~/components/SiteFooter.vue';
import Global from '../graphql/global';

const global = ref({})
const { data } = useGraphqlQuery({ query: Global })
global.value = data._rawValue.global;

</script> -->