<template>
  <main class="product-page">
    <PartDatePicker :show="bookShow" />
    <div class="container-fluid">
      <PartBreadcrumb :breadcrumbs="['Home', 'Category', 'Product']" />
      <div class="product-page-body" v-if="selectedProduct">
        <div class="product-page-image">
          <img :src="`${selectedProduct[0].image.url}`" alt class="img-fluid" />
        </div>
        <div class="product-page-content">
          <label for>25%</label>
          <h2 class="product-page-content-title">
            {{ selectedProduct[0].title }}
          </h2>
          <h4 class="product-page-content-price">
            <i class="fa-solid fa-indian-rupee-sign"></i> 2,500
            <del>
              <i class="fa-solid fa-indian-rupee-sign"></i>
              {{ selectedProduct[0].price }}
            </del>
          </h4>
          <PartProductCardRating :stars="5" :rating="2" />
          <p>{{ selectedProduct[0].content }}</p>

          <div class="product-page-content-buttons">
            <button class="btn btn-book" @click="bookNow">
              <i class="fa-solid fa-cart-shopping"></i> Book Now
            </button>
            <button class="btn btn-heart">
              <i class="fa-solid fa-heart"></i>
            </button>
          </div>
          <div class="product-page-content-icons">
            Share :
            <nuxt-link to="/">
              <i class="fa-brands fa-facebook"></i>
            </nuxt-link>
            <nuxt-link to="/">
              <i class="fa-brands fa-linkedin"></i>
            </nuxt-link>
            <nuxt-link to="/">
              <i class="fa-brands fa-twitter"></i>
            </nuxt-link>
            <nuxt-link to="/">
              <i class="fa-brands fa-instagram"></i>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="product-page-description" v-if="selectedProduct">
      <div class="container-fluid">
        <div class="product-page-description-tabs">
          <div
            class="product-page-description-tabs-btn"
            :class="[selectedTab == 'description' ? 'active' : '']"
            @click="onTabClicked('description')"
          >
            Descirption
          </div>
          <div
            class="product-page-description-tabs-btn"
            :class="[selectedTab == 'information' ? 'active' : '']"
            @click="onTabClicked('information')"
          >
            Additional Information
          </div>
          <div
            class="product-page-description-tabs-btn"
            :class="[selectedTab == 'review' ? 'active' : '']"
            @click="onTabClicked('review')"
          >
            Reviews(5)
          </div>
        </div>
        <div
          class="product-page-description-content"
          :class="[selectedTab == 'description' ? 'active' : '']"
          v-html="selectedProduct[0].Description"
        ></div>
        <div
          class="product-page-description-content"
          :class="[selectedTab == 'information' ? 'active' : '']"
          v-html="selectedProduct[0].information"
        ></div>
        <div
          class="product-page-description-content"
          :class="[selectedTab == 'review' ? 'active' : '']"
        >
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
            necessitatibus soluta tempora eum delectus at incidunt odit maxime,
            explicabo ad eligendi fugiat asperiores quia adipisci architecto
            nisi, eveniet repellat temporibus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Veritatis, minima deleniti. Sed ad
            quam, voluptates, temporibus quas dolores, quod accusamus mollitia
            ea itaque iure? Sint at quae excepturi cumque reprehenderit!
          </p>
        </div>
      </div>
    </div>
    <div class="product-page-related-products">
      <div class="container-fluid">
        <h2>Related Products</h2>

        <PartProductContainer>
          <PartProductCart
            v-for="product in products"
            :key="`product-${product?.id}`"
            :product="product"
          />
        </PartProductContainer>
      </div>
    </div>
  </main>
</template>

<script setup>
import products from "~/assets/data/products";
import $ from "jquery";

const selectedTab = ref("description");
// const products = ref([]);
const route = useRoute();
const selectedProduct = products.filter(function (product) {
  return product.slug === route.params.id;
});

const bookShow = ref(false);

function bookNow() {
  bookShow.value = !bookShow.value;
}

function onTabClicked(index) {
  selectedTab.value = index;
}

onMounted(() => {
  // fetch("http://3.111.70.214:1337/products")
  //   .then((res) => res.json())
  //   .then((data) => (products.value = data))
  //   .catch((err) => console.log(err.message));

  // fetch(`http://3.111.70.214:1337/products?slug=${route.params.id}`)
  //   .then((res) => res.json())
  //   .then((data) => (selectedProduct.value = data))
  //   .catch((err) => console.log(err.message));

  $(".product-page-image").mouseenter(function () {
    $(".product-page-image .img-fluid").css({ transform: "scale(1.3)" });
  });
  $(".product-page-image").mouseleave(function () {
    $(".product-page-image .img-fluid").css({
      transform: "scale(1)",
      left: "0px",
      top: "0px",
    });
  });
  $(".product-page-image").mousemove(function (e) {
    let valueX = (e.pageX * -1) / 8;
    let valueY = (e.pageY * -1) / 8;
    $(".product-page-image .img-fluid").css({
      left: valueX + "px",
      top: valueY + "px",
    });
  });
});
</script>

<style lang="scss">
.product-page {
  padding: 2rem 0rem;
  &-body {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }
  &-image {
    border: 0.1rem dashed rgba($light-dark, 0.6);
    border-radius: 0.4rem;
    overflow: hidden;
    img {
      position: relative;
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
  &-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    label {
      background-color: $danger;
      color: $white;
      font-weight: bold;
      padding: 0.5rem 1rem;
      border-radius: 0.4rem;
      width: 5rem;
    }
    &-title {
      display: flex;
      align-items: center;
      justify-content: left;
      padding: 2rem 0rem;
    }
    &-price {
      font-size: 3rem;
      font-weight: bold;
      i {
        font-size: 2.5rem;
      }
      del {
        display: inline-block;
        margin-left: 0.5rem;
        font-size: 2rem;
        font-weight: normal;
        i {
          font-size: 1.6rem;
        }
      }
    }
    p {
      font-size: 1.8rem;
      padding: 2rem 0rem;
      color: $light-dark;
    }
    &-buttons {
      display: flex;
      align-items: center;
      grid-gap: 2rem;
      .btn {
        font-size: 2rem;
        &-book {
          background-color: $purple;
          color: $white;
          font-weight: bold;
          padding: 1rem 3rem;
          border-radius: 3rem;
          margin-right: 3rem;
        }
        &-heart {
          i {
            font-size: 3rem;
            color: $light-dark;
          }
        }
      }
    }
    &-icons {
      display: flex;
      justify-content: flex-end;
      grid-gap: 1rem;
      i {
        font-size: 2rem;
        color: $purple;
      }
    }
  }

  &-description {
    background-color: $brown-cream;
    padding: 5rem 0rem;
    margin-top: 4rem;
    overflow: hidden;
    &-tabs {
      display: flex;
      align-items: center;
      grid-gap: 1rem;
      justify-content: center;
      &-btn {
        padding: 1rem 2rem;
        border-radius: 3rem;
        cursor: pointer;
        font-weight: bold;
        &:hover {
          background-color: $orange;
          color: $white;
        }
      }
      &-btn.active {
        background-color: $orange;
        color: $white;
      }
    }
    &-content {
      background-color: $white;
      margin-top: 3rem;
      padding: 2rem;
      position: relative;
      display: none;
      transform: translateY(100%);
    }
    &-content.active {
      display: block;
      transition: all 0.5s linear;
      transform: translateY(0%);
    }
  }

  &-related-products {
    padding-top: 5rem;
  }
}
</style>
