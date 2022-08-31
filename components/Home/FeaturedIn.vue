<template>
  <div class="featured-in">
    <div class="container-fluid">
      <div class="featured-in-list">
        <label for>Featured In</label>
        <carousel :items-to-show="6">
          <slide v-for="slide in 10" :key="slide">
            <img
              lazy="loading"
              src="http://demo2.themelexus.com/ziggy/wp-content/uploads/2022/06/brand-3.svg"
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