<template>
  <div>
    <demo-header
      :product="product"
      v-if="product"
    />
    <product-hero
      :product="product"
      v-if="product"
    />
    <why-choose-our-product
      :product="product"
      v-if="product?.contents"
    />
    <div
      v-for="(section, index) in product?.contents"
      :key="index"
    >
      <div v-if="section.__typename == 'ExclusivefeatureRecord'">
        <exclusive-feature :data="section" />
      </div>
      <div v-if="section.__typename == 'FeaturescreenshotRecord'">
        <product-screenshots :data="section" />
      </div>
      <div v-if="section.__typename == 'TopfeatureRecord'">
        <ProductTopFeatures :data="section" />
      </div>
      <div v-if="section.__typename == 'ProductctaRecord'">
        <call-to-action
          :section="section"
          :product="product"
        />
      </div>
      <div v-if="section.__typename == 'PriceplanRecord'">
        <PricingSection
          :plans="section.plans"
          :id="section.sectionId ? section.sectionId : section.id"
          :info="section.info[0]"
          :extra-offer="product.extraOffer"
          :request-customization="offerRequestCustomization"
        />
      </div>
      <div v-if="section.__typename == 'TestimonialSectionRecord'">
        <testimonial-section :data="section" />
      </div>
      <div v-if="section.__typename == 'TechnologySectionRecord'">
        <technology-section
          :data="section"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PRODUCT_DEMO from "~/graphql/productDemo";
import GLOBAL_QUERY from "~/graphql/global";
import ProductTopFeatures from "~/components/Demo/ProductTopFeatures.vue";
import ProductFeatureScreenshots from "../../components/Demo/ProductFeatureScreenshots.vue";
import ProductScreenshots from "../../components/Demo/ProductScreenshots.vue";
import ProductHero from "../../components/Demo/ProductHero.vue";
import CallToAction from "../../components/Demo/CallToAction.vue";
import ExclusiveFeature from "../../components/Demo/ExclusiveFeature.vue";
import GroupFeatureSection from "../../components/Demo/GroupFeatureSection.vue";
import DemoHeader from "../../components/DemoHeader.vue";
import PricingSection from "~/components/PricingSection.vue";
import TestimonialSection from "../../components/Demo/TestimonialSection.vue";
import TechnologySection from "../../components/Demo/TechnologySection.vue";
import WhyChooseOurProduct from "../../components/Demo/WhyChooseOurProduct.vue";

definePageMeta({
  layout: "empty",
});
export default {
  name: "ProductDemo",
  async setup() {
    head({
      title: `${product.name}`,
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: product.description,
        },
        {
          hid: "og:title",
          property: "og:title",
          name: "og:title",
          content: product.name,
        },
        {
          hid: "og:description",
          name: "og:description",
          name: "og:description",
          content: product.description,
        },
        {
          hid: "og:type",
          property: "og:type",
          name: "og:type",
          content: "product",
        },
        {
          hid: "og:image",
          property: "og:image",
          name: "og:image",
          content: product.demoBanner
            ? product.demoBanner.url
            : product.banner.url,
        },
      ],
    });
    const product = ref(null);
    const route = useRoute();
    const { slug } = route?.params;
    const { data } = await useGraphqlQuery({
      query: PRODUCT_DEMO,
      variables: { slug },
    });
    product.value = data?._rawValue?.product;
    if (product?.value) {
      // console.log(data);
    }
    return {
      product,
    };
  },

  components: {
    ProductTopFeatures,
    ProductFeatureScreenshots,
    ProductScreenshots,
    ProductHero,
    CallToAction,
    PricingSection,
    ExclusiveFeature,
    GroupFeatureSection,
    DemoHeader,
    TestimonialSection,
    TechnologySection,
    WhyChooseOurProduct,
  },
};
</script>

<style lang="scss" scoped>
// animation
.slider-full {
  animation: scroll 26s linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(calc(-250px * 7));
  }
}

// swiper single silder
.single-slider {
  .swiper-button-prev,
  .swiper-button-next {
    top: calc(50% - 15px);
    transform: translateY(-50%);
  }

  .swiper-button-prev:after,
  .swiper-button-next:after {
    content: none;
  }
}

.tab-content-wrap {
  &.active {
    background-color: #0b63e5;

    h3,
    p {
      color: white;
    }
  }
}
</style>
