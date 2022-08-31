<template>
  <div>
    <div class="product-filter" :class="[close ? 'display' :'']">
      <div class="container-fluid">
        <h2 class="sticky-top">
          Product Categories
          <div class="product-filter-close" @click="$emit('close', !close)">
            <i class="fa-solid fa-xmark"></i>
          </div>
        </h2>
        <div class="product-filter-categories">
          <nuxt-link v-for="category in categories" :key="category.Title" to="/">
            {{ category.Title }}
            <span>(5)</span>
          </nuxt-link>
        </div>
        <h2>Filter By Price</h2>
        <div class="product-filter-price">
          <input type="range" class="form-range" id="customRange1" />
          <div class="product-filter-price-show">
            <span>
              Price:
              <i class="fa-solid fa-indian-rupee-sign"></i>100 -
              <i class="fa-solid fa-indian-rupee-sign"></i> 1000
            </span>
            <button class="btn btn-primary">
              Filter
              <i class="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>
        <h2>Filter By Ocassions</h2>
        <div class="product-filter-categories">
          <nuxt-link v-for="occasion in occasions" :key="occasion.Title" to="/">{{occasion.Title}}</nuxt-link>
        </div>
        <h2>Filter By Relations</h2>
        <div class="product-filter-tags">
          <nuxt-link v-for="relation in relations" :key="relation.Title" to="/">{{relation.Title}}</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// const categories = await useFetch("http://3.111.70.214:1337/categories").data
//   ._rawValue;
// const occasions = await useFetch("http://3.111.70.214:1337/occasions").data
//   ._rawValue;
// const relations = await useFetch("http://3.111.70.214:1337/relations").data
//   ._rawValue;
const categories = ref([]);
const occasions = ref([]);
const relations = ref([]);

onMounted(() => {
  fetch("http://3.111.70.214:1337/categories")
    .then((res) => res.json())
    .then((data) => (categories.value = data))
    .catch((err) => console.log(err.message));

  fetch("http://3.111.70.214:1337/occasions")
    .then((res) => res.json())
    .then((data) => (occasions.value = data))
    .catch((err) => console.log(err.message));

  fetch("http://3.111.70.214:1337/relations")
    .then((res) => res.json())
    .then((data) => (relations.value = data))
    .catch((err) => console.log(err.message));
});

const props = defineProps({
  close: Boolean,
});

computed(() => {
  var close = ref(props.close);
});
</script>

<style lang="scss">
@import "~/assets/scss/filter-product.scss";
</style>