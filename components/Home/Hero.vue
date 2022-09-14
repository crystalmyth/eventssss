<template>
  <section class="hero-section">
    <div class="container-fluid">
      <carousel :items-to-show="1">
        <slide v-for="slide in carousels" :key="slide.Title">
          <img
            v-if="show"
            lazy="loading"
            :src="`${slide.Banner.url}`"
            alt
            class="img-fluid"
          />
          <img v-if="!show" :src="Banner" alt="" />
        </slide>

        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </div>
  </section>
</template>

<script setup>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import carousels from "~/assets/data/carousels";
import Banner from "@/assets/images/mob-banner.jpg";
// const data = await useFetch("http://3.111.70.214:1337/carousels");
// const carousels = data.data._rawValue;

// const carousels = ref([]);
const show = ref(true);
onMounted(() => {
  // fetch("http://3.111.70.214:1337/carousels")
  //   .then((res) => res.json())
  //   .then((data) => (carousels.value = data))
  //   .catch((err) => console.log(err.message));
  if (window.innerHeight > window.innerWidth) {
    show.value = false;
  }
});
</script>

<style lang="scss">
.hero-section {
  padding-top: 1rem;
  .container-fluid {
    img {
      width: 100%;
      // height: 50rem;
      object-position: center;
      object-fit: cover;

      @media only screen and (orientation: portrait) {
        height: 50rem;
      }
    }
  }
}
</style>
