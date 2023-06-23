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
                                </svg></button> <!----></div> <a href="/installation-plans"
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
                </div> <!---->
            </div>
        </header>
        <slot />
        <footer aria-labelledby="footer-heading" class="bg-gray-900 mt-20">
            <h2 id="footer-heading" class="sr-only">Footer</h2>
            <div class="mx-auto pt-12 px-4 sm:px-6 sm:pt-16 lg:max-w-7xl lg:px-8 lg:pt-24">
                <div class="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div class="space-y-8 xl:col-span-1"><img
                            src="https://www.datocms-assets.com/73511/1653473092-templatecookie_441aa70281.png"
                            alt="Templatecookie Footer Logo" class="h-10">
                        <p class="text-base text-gray-400">
                            We build readymade websites, mobile applications, and elaborate online business services.
                        </p>
                        <div class="flex space-x-6"><a href="https://www.pinterest.com/templatecookie/"
                                class="text-gray-400 hover:text-gray-300 h-10 w-10 flex justify-center items-center"><span
                                    class="sr-only">Facebook</span> <img
                                    src="https://www.datocms-assets.com/73511/1671774335-pinterest.svg"
                                    alt="Pinterest"></a><a href="https://dribbble.com/templatecookie/"
                                class="text-gray-400 hover:text-gray-300 h-10 w-10 flex justify-center items-center"><span
                                    class="sr-only">Facebook</span> <img
                                    src="https://www.datocms-assets.com/73511/1671774355-dribbble.svg" alt="Dribbble"></a><a
                                href="https://github.com/templatecookie"
                                class="text-gray-400 hover:text-gray-300 h-10 w-10 flex justify-center items-center"><span
                                    class="sr-only">Facebook</span> <img
                                    src="https://www.datocms-assets.com/73511/1671772053-github.svg" alt="Github"></a><a
                                href="https://www.facebook.com/templatecookie/"
                                class="text-gray-400 hover:text-gray-300 h-10 w-10 flex justify-center items-center"><span
                                    class="sr-only">Facebook</span> <img
                                    src="https://www.datocms-assets.com/73511/1671772069-facebook.svg" alt="Facebook"></a>
                        </div>
                    </div>
                    <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div>
                            <h3 class="text-base font-medium text-gray-200">Our Products</h3>
                            <ul role="list" class="mt-4 space-y-4">
                                <li><a href="/demo/jobpilot-job-portal-script-php-laravel"
                                        class="text-base text-gray-400 hover:text-gray-300">Jobpilot - Job Portal Laravel
                                        Script</a></li>
                                <li><a href="/demo/adlisting-classified-ads-script"
                                        class="text-base text-gray-400 hover:text-gray-300">Adlisting - Classified Ads PHP
                                        Script</a></li>
                                <li><a href="/demo/schooling-school-management-system-script"
                                        class="text-base text-gray-400 hover:text-gray-300">Schooling - The Ultimate PHP
                                        Script for Efficient School Management</a></li>
                            </ul>
                        </div>
                        <div class="flex justify-between flex-wrap md:flex-nowrap">
                            <div>
                                <h3 class="text-base font-medium text-gray-200">Company</h3>
                                <ul role="list" class="mt-4 space-y-4">
                                    <li><a href="/hire-us" class="text-base text-gray-400 hover:text-gray-300">Hire Us</a>
                                    </li>
                                    <li><a href="/installation-plans"
                                            class="text-base text-gray-400 hover:text-gray-300">Installation Plans</a></li>
                                    <li><a href="/get-support" class="text-base text-gray-400 hover:text-gray-300">Get
                                            Support</a></li>
                                    <li><a href="/docs"
                                            class="text-base text-gray-400 hover:text-gray-300">Documentation</a></li>
                                    <li><a href="https://1.envato.market/EaNJ2X" target="_blank"
                                            class="text-base text-gray-400 hover:text-gray-300">Codecanyon Profile</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 class="text-base font-medium text-gray-200">Others</h3>
                                <ul role="list" class="mt-4 space-y-4">
                                    <li><a href="/blog" class="text-base text-gray-400 hover:text-gray-300">Read Our
                                            Blog</a></li>
                                    <li><a href="/privacy-policy"
                                            class="text-base text-gray-400 hover:text-gray-300">Privacy Policy</a></li>
                                    <li><a href="/refund-policy" class="text-base text-gray-400 hover:text-gray-300">Refund
                                            Policy</a></li>
                                    <li><a href="/terms" class="text-base text-gray-400 hover:text-gray-300">Terms &amp;
                                            Condition</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-12 border-t border-gray-700 py-6 md:flex md:items-center md:justify-between">
                    <div class="md:order-2"><img src="../images/payment-gateway.svg"
                            alt="Templatecookie Payment Gateway Images" class="h-[37px] w-[390px]"></div>
                    <p class="mt-8 text-sm text-gray-400 md:order-3 md:mt-0">
                        © 2023 All Rights Reserved -
                        Templatecookie
                    </p>
                </div>
            </div>
        </footer>
        <!-- <site-footer :data="global?.footer[0]" :social="global?.socialMedias" /> -->
    </div>
</template>

<script setup>
import SiteFooter from '~/components/SiteFooter.vue';
import Global from '../graphql/global';

const global = ref({})
const { data } = useGraphqlQuery({ query: Global })
global.value = data._rawValue;

// console.log(data._rawValue.global);

</script>