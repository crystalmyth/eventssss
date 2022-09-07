<template>
  <div class="product-card shadow">
    <div class="product-card-discount">25%</div>
    <div class="product-card-img">
      <div class="product-card-overlay">
        <div class="product-card-overlay-buttons">
          <i class="fa-solid fa-magnifying-glass-plus"></i>
          <i class="fa-solid fa-heart"></i>
        </div>
        <div class="product-card-overlay-book">
          <nuxt-link :to="`/product/${product?.slug}`" class="btn btn-primary">
            <i class="fa-solid fa-bag-shopping"></i> Book Now
          </nuxt-link>
        </div>
      </div>
      <img
        lazy="loading"
        :src="`${product?.image.url}`"
        alt
        class="img-fluid"
      />
    </div>
    <div class="product-card-content">
      <h4>
        4,500
        <i class="fa-solid fa-indian-rupee-sign"></i>
        <del>
          {{ product?.price }}
          <i class="fa-solid fa-indian-rupee-sign"></i>
        </del>
      </h4>
      <p class="product-card-content-title">{{ product?.title }}</p>
      <div class="product-card-content-rating">
        <i
          v-for="n in product?.rating"
          :key="`star-${n}`"
          class="fa-solid fa-star"
        ></i>
        (5 Reviews)
      </div>
    </div>
  </div>
</template>

<script setup>
const data = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
const product = data.product;
</script>

<style lang="scss">
.product-card {
  position: relative;
  overflow: hidden;
  &-discount {
    position: absolute;
    top: 1rem;
    left: 1rem;
    background-color: $danger;
    z-index: 2;
    color: $white;
    font-weight: bold;
    padding: 0rem 1rem;
    border-radius: 0.5rem;
  }
  &-img {
    position: relative;
    img {
      width: 100%;
      object-fit: cover;
    }
  }

  &-overlay {
    transition: all 0.3s ease-in-out;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    //   background-color: rgba($color: $dark, $alpha: 0.6);
    color: $white;
    transform: translateX(100%);

    &-buttons {
      position: inherit;
      display: flex;
      flex-direction: column;
      right: 0;
      top: 0;
      width: 5rem;
      i {
        height: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        color: rgba($color: $white, $alpha: 0.8);
      }
    }

    &-book {
      position: inherit;
      bottom: 1rem;
      left: 50%;
      transform: translateX(-50%);
      width: 80%;
      .btn {
        width: 100%;
        height: 4rem;
        font-size: 1.6rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        background-color: $purple;
        border-color: $purple;
        border-radius: 4rem;
        i {
          margin-right: 1rem;
        }

        &:hover {
          background-color: $orange;
          border-color: $orange;
        }
      }
    }
  }
  &-content {
    padding: 2rem;
    padding-top: 1.5rem;
    h4 {
      font-size: 2.4rem;
      font-weight: bold;
      color: $purple;
      i {
        font-size: 1.6rem;
      }
      del {
        display: inline-block;
        margin-left: 1.2rem;
        font-size: 1.4rem;
        color: $secondary;
        font-weight: normal;
        i {
          font-size: 1.4rem;
        }
      }
    }
    &-title {
      font-weight: bold;
      font-size: 1.8rem;
    }
    &-rating {
      display: flex;
      grid-gap: 0.7rem;
      align-items: center;
      font-size: 1rem;
      i {
        font-size: 1rem;
        color: $gold;
      }
    }
  }

  &:hover {
    cursor: pointer;
    .product-card-overlay {
      transform: translateX(0%);
    }
  }
}
</style>
