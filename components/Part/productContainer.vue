<template>
  <div class="product-content">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.product-content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  margin-top: 3rem;
}
</style>