<template>
    <div>
        <section class="py-12 lg:pb-12 bg-no-repeat bg-center bg-cover"
            style="background-image: url('https://www.datocms-assets.com/73511/1653474086-hero_bg.png')">
            <div class="mx-auto max-w-7xl px-4 sm:px-6">
                <div class="text-left">
                    <h1 class="text-4xl md:text-heading-40 text-dark mb-6 mx-auto font-semibold">
                        {{ product?.title }} - Documentation
                    </h1>
                    <p class="text-lg md:text-lg text-dark mb-8 font-light">
                        {{ product?.description }}
                    </p>
                </div>
            </div>
        </section>
        <section>
            <div class="mx-auto max-w-7xl px-4 sm:px-6">
                <div class="flex py-8 items-start">
                    <div class="w-3/12 h-full border-r-[1px] border-gray-100 ">
                        <ul class="mb-6" v-for="(items, index) in categories" :key="index">
                            <li class="uppercase text-xs text-gray-500 mb-2"> {{ index }} </li>
                            <li v-for="(item, index) in items" :key="index">
                                <a :href="item._path"
                                    class="px-4 py-2 inline-block w-full text-gray-700 font-light text-sm">
                                    {{ item.title }}
                                </a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a :href="`/docs/${$route.params.slug}/hosting`"
                                    class="px-4 py-2 inline-block w-full text-gray-700 font-light text-sm">
                                    Hosting
                                </a>
                            </li>
                            <li>
                                <a :href="`/docs/${$route.params.slug}/faq`"
                                    class="px-4 py-2 inline-block w-full text-gray-700 font-light text-sm">
                                    FAQ
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="px-4 w-9/12 flex flex-wrap h-auto border-l border-gray-100">
                        <ContentDoc class="px-6 pb-0 w-8/12 h-full markdown-body docs-details" />
                        <aside class="px-4 w-4/12 h-auto border-l border-gray-100">
                            <div class="sticky top-16">
                                <h2 class="uppercase text-black font-h2 text-lg tracking-wider">
                                    Table of contents
                                </h2>
                                <nav class="mt-4">
                                    <ul class="mb-6" v-for="(items, index) in categories" :key="index">
                                        <!-- <pre>{{items}}</pre> -->
                                        <li class="uppercase text-xs text-gray-500 mb-2"> {{ index }} </li>
                                        <li v-for="(item, index) in items?.body?.toc" :key="index">
                                            <a :href="item?.link"
                                                class="px-4 py-2 inline-block w-full text-gray-700 font-light text-sm">
                                                <pre>{{ item }}</pre>
                                            </a>
                                        </li>
                                    </ul>
                                    <!-- <ul class="mb-2">
                                        <li @click="tableOfContentsHeadingClick(link)" class="toc-list" :class="{ 'pl-4': link.depth === 3}" v-for="link of categories.toc" :key="link.id">
                                            <a role="button" class="transition-colors duration-75 mb-2 block text-gray-700 font-light text-sm" :class="{ 'text-blue-500 hover:text-blue-600': link.id === currentlyActiveToc, 'text-black hover:gray-900': link.id !== currentlyActiveToc }" :href="`#${link.id}`">{{ link.text }}</a>
                                        </li>
                                    </ul> -->
                                    <div class="bg-blue-200 px-3 py-5 rounded-md mt-4">
                                        <h3 class="text-xl mb-2"> Buy our products from Envato Market </h3>
                                        <a href="https://go.templatecookie.com/codecanyon" target="_blank"
                                            class="outline-btn">
                                            Buy our products
                                            <svg xmlns="http://www.w3.org/2000/svg" class="ml-1" width="20" height="20"
                                                fill="currentColor" viewBox="0 0 256 256">
                                                <rect width="256" height="256" fill="none"></rect>
                                                <path
                                                    d="M122.3,71.4l19.8-19.8a44.1,44.1,0,0,1,62.3,62.3l-28.3,28.2a43.9,43.9,0,0,1-62.2,0"
                                                    fill="none" stroke="currentColor" stroke-linecap="round"
                                                    stroke-linejoin="round" stroke-width="16"></path>
                                                <path
                                                    d="M133.7,184.6l-19.8,19.8a44.1,44.1,0,0,1-62.3-62.3l28.3-28.2a43.9,43.9,0,0,1,62.2,0"
                                                    fill="none" stroke="currentColor" stroke-linecap="round"
                                                    stroke-linejoin="round" stroke-width="16"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </nav>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </section>
        <pre>
            {{ data }}
        </pre>
    </div>
</template>

<script>
    import dayjs from 'dayjs'
    import DocCategoryCardItem from '../../../../components/Docs/CategoryCardItem.vue';
    import HighlightBlock from "../../../../components/global/HightlightBlock.vue"
    export default {
        props: ['product', 'categories'],
        components: {
            DocCategoryCardItem,
            HighlightBlock
        },
        scrollToTop: true,
        head() {
            const title = this.page.title + ` - ${this.productName}`;
            const description = this.page.description;
            return {
                title: title,
                meta: [{
                    hid: 'description',
                    name: 'description',
                    content: description
                },
                // Open Graph
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: title
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: description
                },
                // Twitter Card
                {
                    hid: 'twitter:title',
                    name: 'twitter:title',
                    content: title
                },
                {
                    hid: 'twitter:description',
                    name: 'twitter:description',
                    content: description
                }
                ]
            }
        },
        computed: {
            formatDate() {
                console.log(this.page)
                return this.page ? dayjs(this.page.updatedAt).format('dddd, MMMM DD YYYY') : '';
            }
        },
        data() {
            return {
                currentlyActiveToc: "",
                observer: null,
                observerOptions: {
                    root: this.$refs.nuxtContent,
                    threshold: 0,
                    page: this.page
                },
                page: null
            };
        },
        methods: {
            tableOfContentsHeadingClick(link) {
                this.currentlyActiveToc = link.id;
            },
        },
        mounted() {
            this.path = this.$route.path;
            this.fetchData();
            console.log(this.page);
            this.observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    const id = entry.target.getAttribute("id");
                    if (entry.isIntersecting) {
                        this.currentlyActiveToc = id;
                    }
                });
            }, this.observerOptions);

            // Track all sections that have an `id` applied
            document
                .querySelectorAll(".nuxt-content h2[id], .nuxt-content h3[id]")
                .forEach(section => {
                    this.observer.observe(section);
                });
        },
        beforeDestroy() {
            this.observer.disconnect();
        }
    }
</script>

<script setup>
    import groupBy from 'lodash.groupby';
    const { path } = useRoute()

    const { data } = await useAsyncData('home', () => queryContent(`${path}`).sort({
        position: 'asc'
    }).findOne())


    const pages = data._rawValue
    const dir = pages._dir
    const categories2 = groupBy(pages, 'category')

    const newData = await useAsyncData('home', () => queryContent(`/docs/${dir}`).sort({
        position: 'asc'
    }).find())

    const pages2 = newData.data._rawValue
    const categories = groupBy(pages2, 'category')

    //For Product Title and Description
    const pdata = await useAsyncData('home2', () => queryContent(`/docs/${dir}`).only(['title', 'description']).where({
        'status': {
            $contains: 'true'
        }
    }).find())

    const [product] = pdata.data._rawValue
    const ptitle = product.title
    const pdescription = product.description
</script>