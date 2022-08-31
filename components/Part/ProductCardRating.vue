<template>
  <div class="product-card-rating">
    <i v-for="n in stars" :key="`star-${n}`" class="fa-solid fa-star"></i>
    ({{rating}} Reviews)
  </div>
</template>

<script setup>
const props = defineProps({
  stars: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});
</script>

<style lang="scss">
.product-card-rating {
  display: flex;
  grid-gap: 0.7rem;
  align-items: center;
  font-size: 1rem;
  i {
    font-size: 1rem;
    color: $gold;
  }
}
</style>