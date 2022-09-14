<template>
  <section class="today-deal">
    <div class="container-fluid">
      <h2>Today's Best Deals</h2>
      <div class="today-deal-list">
        <carousel :items-to-show="1">
          <slide v-for="slide in 10" :key="slide">
            <div class="today-deal-list-box">
              <img lazy="loading" :src="ProductImage" alt class="img-fluid" />
              <div class="today-deal-list-box-content">
                <h4 class="today-deal-list-box-content-title">Title</h4>
                <div class="today-deal-list-box-content-price">
                  <h5><i class="fa-solid fa-indian-rupee-sign"></i> 2,500</h5>
                  <del>
                    <i class="fa-solid fa-indian-rupee-sign"></i> 3,200
                  </del>
                </div>
                <div class="today-deal-list-box-content-rating">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  (5 Reviews)
                </div>
                <div class="today-deal-list-box-content-description">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat sint ratione error sed aliquam facere ab officiis
                  sapiente saepe, laborum, possimus voluptas nemo ut
                  consectetur. Fuga quod molestiae sapiente officia?
                </div>
                <div class="today-deal-list-box-content-hurry">
                  <p>Hurry up! Sales end in:</p>
                  <div class="today-deal-list-box-content-hurry-list">
                    <div class="today-deal-list-box-content-hurry-list-box">
                      208
                    </div>
                    <div class="today-deal-list-box-content-hurry-list-box">
                      12
                    </div>
                    <div class="today-deal-list-box-content-hurry-list-box">
                      08
                    </div>
                    <div class="today-deal-list-box-content-hurry-list-box">
                      06
                    </div>
                  </div>
                  <div class="progress mt-3">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style="width: 25%"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div class="taday-deal-list-box-content-available">
                  Available: 46/81
                </div>
              </div>
            </div>
          </slide>

          <template #addons>
            <navigation />
            <!-- <pagination /> -->
          </template>
        </carousel>
      </div>
    </div>
  </section>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import ProductImage from "@/assets/images/product.jpeg";
</script>

<style lang="scss">
.today-deal {
  padding: 4rem 0rem;
  h2 {
    text-align: center;
    font-size: 3.6rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }
  &-list {
    &-box {
      padding: 2rem;
      display: grid;
      grid-template-columns: 40rem auto;
      justify-content: flex-start;
      width: 100%;
      border: 0.2rem dashed $danger;

      @media only screen and (orientation: portrait) {
        grid-template-columns: repeat(1, 1fr);
      }

      img {
        height: 40rem;
      }

      &-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: left;
        width: 100%;
        &-available {
          font-size: 1.8rem;
          font-weight: bold;
        }
        &-title {
          font-size: 2.4rem;

          @media only screen and (orientation: portrait) {
            font-size: 3.5rem;
            font-weight: bold;
          }
        }
        &-price {
          display: flex;
          align-items: center;
          grid-gap: 2rem;
          h5 {
            font-size: 3rem;
            i {
              font-size: 3rem;
            }
          }
        }
        &-rating {
          display: flex;
          align-items: center;
          grid-gap: 0.5rem;
        }

        &-hurry {
          .progress {
            width: 70%;
            border-radius: 4rem;
            height: 0.7rem;
            &-bar {
              background-color: $purple;
              border-radius: 4rem;
            }
          }
          &-list {
            display: flex;
            align-items: center;
            grid-gap: 1rem;
            &-box {
              background-color: $purple;
              padding: 1rem;
              color: $white;
              border-radius: 0.5rem;
              position: relative;
              font-weight: bold;
              &::before {
                content: ":";
                position: absolute;
                right: -1rem;
                top: 0;
                height: 100%;
                width: 1rem;
                color: $dark;
                display: flex;
                align-items: center;
                justify-content: center;
              }
              &:nth-last-child(1) {
                &::before {
                  display: none;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
