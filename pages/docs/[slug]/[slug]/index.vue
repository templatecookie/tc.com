<template>
    <div>
        <section class="py-12 lg:pb-12 bg-no-repeat bg-center bg-cover" :style="{ backgroundImage: `url(${bannerImg})` }">
            <div class="mx-auto max-w-7xl px-4 sm:px-6">
                <div class="text-left">
                    <h1 class="text-4xl md:text-heading-40 textdark mb-6 mx-auto font-semibold" v-if="product">
                        {{ product.title }} - Documentation
                    </h1>
                    <p class="text-lg md:text-lg textdark mb-8 font-light" v-if="product">
                        {{ product.description }}
                    </p>
                </div>
            </div>
        </section>
        <section>
            <div class="mx-auto max-w-7xl px-4 sm:px-6">
                <div class="flex py-8 items-start">
                    <div class="w-3/12 h-full border-r-[1px] border-gray-100 ">
                        <pre>{{categories}}</pre>
                        <ul class="mb-6" v-for="(items, index) in categories" :key="index">
                            <li class="uppercase text-xs text-gray-500 mb-2"> {{ index }} </li>
                            <li v-for="(item, index) in items" :key="index">
                                <nuxt-link :to="item.path"
                                    class="px-4 py-2 inline-block w-full text-gray-700 font-light text-sm"> {{ item.title }}
                                </nuxt-link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <nuxt-link :to="`/docs/${$route.params.slug}/hosting`"
                                    class="px-4 py-2 inline-block w-full text-gray-700 font-light text-sm">
                                    Hosting
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link :to="`/docs/${$route.params.slug}/faq`"
                                    class="px-4 py-2 inline-block w-full text-gray-700 font-light text-sm">
                                    FAQ
                                </nuxt-link>
                            </li>
                        </ul>
                    </div>
                    <NuxtChild :productName="product?.title + ' Documentation'" :categories="categories" />
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import dayjs from 'dayjs'
    import DocCategoryCardItem from '../../../../components/Docs/DocCategoryCardItem.vue';
    export default {
        props: ['productName', 'categories'],
        components: {DocCategoryCardItem},
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
            async fetchData() {
                this.path = this.$route.path;
                const [result] = await queryContent(this.path).find();
                this.page = result;
            }
        },
        mounted() {
            this.path = this.$route.path;
            this.fetchData();
            console.log(this.page.body);
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