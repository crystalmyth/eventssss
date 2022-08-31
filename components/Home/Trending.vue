<template>
  <section class="trending">
    <div class="container-fluid">
      <h2>Trending Collections</h2>
      <div class="trending-list">
        <div class="trending-list-box active">All Items</div>
        <div class="trending-list-box">Sales</div>
        <div class="trending-list-box">Featured</div>
        <div class="trending-list-box">Best Seller</div>
      </div>
      <div class="trending-content">
        <PartProductCart
          v-for="product in products"
          :key="`product-${product?.id}`"
          :product="product"
        />
      </div>
      <div class="trending-all-shop">
        <nuxt-link to="/">
          View All Shop
          <i class="fa-solid fa-angle-right"></i>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script setup>
const products = ref([]);
onMounted(() => {
  fetch("http://3.111.70.214:1337/products")
    .then((res) => res.json())
    .then((data) => (products.value = data))
    .catch((err) => console.log(err.message));
});
</script>

<style lang="scss">
.trending {
  margin-top: 1.5rem;
  padding: 4rem 0rem;
  background-color: $sky-blue;

  //   Trending List
  &-list {
    display: flex;
    align-items: center;
    justify-content: center;
    grid-gap: 1rem;
    margin-top: 3rem;

    &-box {
      width: 10rem;
      height: 3rem;
      transition: all 0.3s linear;
      display: flex;
      align-items: center;
      justify-content: center;
      color: $dark;
      border-radius: 3rem;
      cursor: pointer;
      font-weight: bold;
      &:hover {
        background-color: $purple;
        color: $white;
      }
    }
    &-box.active {
      background-color: $purple;
      color: $white;
    }
  }

  //   Trending Content
  &-content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
    margin-top: 3rem;
  }

  //   Trending Card
  &-card {
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
          color: rgba($color: $dark, $alpha: 0.4);
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
      .trending-card-overlay {
        transform: translateX(0%);
      }
    }
  }

  &-all-shop {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 4rem;
    a {
      width: 20rem;
      background-color: $purple;
      height: 4rem;
      border-radius: 4rem;
      color: $white;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
      font-weight: bold;
      i {
        position: absolute;
        right: 0rem;
        top: 50%;
        transform: translateY(-50%) translateX(100%);
        height: 3rem;
        border-radius: 100%;
        background-color: $white;
        width: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: $purple;
        transition: all 0.3s linear;
      }
      &:hover {
        i {
          transform: translateX(-0.5rem) translateY(-50%);
        }
      }
    }
  }
}
</style>