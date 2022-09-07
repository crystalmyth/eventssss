<template>
  <section class="review">
    <div class="container-fluid">
      <h2>Cutomers Reviews</h2>
      <div class="review-list">
        <carousel :items-to-show="1">
          <slide v-for="slide in reviews" :key="slide?.name">
            <div class="review-box">
              <div class="review-box-img">
                <img
                  lazy="loading"
                  :src="`${slide?.image.url}`"
                  alt
                  class="img-fluid"
                />
                <h4>{{ slide?.name }}</h4>
                <span>{{ slide?.location }}</span>
              </div>
              <div class="review-box-content">
                <div class="review-box-content-rating">
                  <i
                    v-for="n in 5"
                    :key="`star-${n}`"
                    class="fa-solid fa-star"
                  ></i>
                </div>
                <p>{{ slide?.content }}</p>
              </div>
            </div>
          </slide>
        </carousel>
      </div>
    </div>
  </section>
</template>

<script setup>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

import reviews from "~/assets/data/reviews";
// const reviews = await useFetch("http://3.111.70.214:1337/company-reviews").data
//   ._rawValue;
// const reviews = ref([]);
// onMounted(() => {
//   fetch("http://3.111.70.214:1337/company-reviews")
//     .then((res) => res.json())
//     .then((data) => (reviews.value = data))
//     .catch((err) => console.log(err.message));
// });
</script>

<style lang="scss">
.review {
  padding: 5rem 0rem;

  &-list {
    border: 0.1rem dashed $danger;
    padding: 2rem;
  }

  &-box {
    display: grid;
    grid-template-columns: 12rem 1fr;
    grid-gap: 2rem;
    align-items: center;
    width: 100%;
    &-img {
      img {
        height: 10rem;
        border-radius: 100%;
        width: 10rem;
        object-fit: cover;
      }
      h4 {
        font-size: 2rem;
        margin: 1rem 0rem;
      }
      span {
        font-size: 1.4rem;
      }
    }
    &-content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      text-align: left;
      i {
        color: $gold;
        margin-right: 0.5rem;
      }
      p {
        margin-top: 2rem;
      }
    }
  }
}
</style>
