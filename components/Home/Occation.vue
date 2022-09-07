<template>
  <section class="occation-section">
    <div class="container-fluid">
      <h2>Find By Occation</h2>
      <div class="occation-section-list">
        <carousel :items-to-show="4">
          <slide v-for="slide in occasions" :key="slide.Title">
            <div class="occation-section-list-box shadow">
              <img
                lazy="loading"
                :src="`http://3.111.70.214:1337${slide.icon.url}`"
                alt
                class="img-fluid"
              />
              <div class="occation-section-list-box-content">
                <h4>{{ slide.Title }}</h4>
                <span>Products(4)</span>
              </div>
              <i class="fa-solid fa-angle-right"></i>
            </div>
          </slide>

          <template #addons>
            <!-- <navigation /> -->
            <pagination />
          </template>
        </carousel>
      </div>
    </div>
  </section>
</template>

<script setup>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import data from "~/assets/data/occasions";
// const data = await useFetch("http://3.111.70.214:1337/occasions?featured=true");
// const occasions = data.data._rawValue;

const occasions = data.filter(function (o) {
  return o.featured === true;
});
// onMounted(() => {
//   fetch("http://3.111.70.214:1337/occasions?featured=true")
//     .then((res) => res.json())
//     .then((data) => (occasions.value = data))
//     .catch((err) => console.log(err.message));
// });
</script>

<style lang="scss">
.occation-section {
  h2 {
    text-align: center;
    font-size: 3.6rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }
  &-list {
    &-box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      grid-gap: 1rem;
      width: 100%;
      padding: 1.5rem;
      transform: scale(0.95);
      transform-origin: center;
      margin: 2rem 0rem;
      h4 {
        font-size: 2rem;
        font-weight: bold;
      }
      span {
        font-size: 1.4rem;
      }
      i {
        font-size: 1.6rem;
        height: 2.4rem;
        width: 2.4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba($color: $orange, $alpha: 0.6);
        color: $white;
        border-radius: 100%;
      }
      img {
        height: 10rem;
        width: 10rem;
        border-radius: 100%;
        border: 0.1rem dashed $danger;
      }
    }
  }
}
</style>
