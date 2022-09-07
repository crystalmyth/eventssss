<template>
  <div class="featured-in">
    <div class="container-fluid">
      <div class="featured-in-list">
        <label for>Featured In</label>
        <carousel :items-to-show="6">
          <slide v-for="slide in companies" :key="slide?.title">
            <img
              lazy="loading"
              :src="`http://3.111.70.214:1337${slide?.logo.url}`"
              alt
              class="img-fluid"
            />
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script setup>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

import companies from "~/assets/data/companies";
// const companies = await useFetch("http://3.111.70.214:1337/companies").data
//   ._rawValue;
// const companies = ref([]);

// onMounted(() => {
//   fetch("http://3.111.70.214:1337/companies")
//     .then((res) => res.json())
//     .then((data) => (companies.value = data))
//     .catch((err) => console.log(err.message));
// });
</script>

<style lang="scss">
.featured-in {
  &-list {
    border: 0.1rem dashed $danger;
    position: relative;
    padding: 3rem 1rem;

    label {
      position: absolute;
      height: 3rem;
      top: -1.5rem;
      left: 1rem;
      display: flex;
      align-items: center;
      background-color: $white;
      display: inline-block;
      padding: 0rem 1rem;
    }
  }
}
</style>
