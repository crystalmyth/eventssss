<template>
  <div class="breadcrumb">
    <span v-for="breadcrumb in breadcrumbs" :key="breadcrumb">{{ breadcrumb }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  breadcrumbs: {
    type: Array,
    required: true,
  },
});

const breadcrumbs = props.breadcrumbs;
</script>

<style lang="scss">
.breadcrumb {
  display: flex;
  align-items: center;
  span {
    display: inline-block;
    padding: 0.5rem 1rem;
    position: relative;
    color: $dark;
    &:nth-last-child(1) {
      color: $light-dark;
    }

    &::before {
      content: ">";
      position: absolute;
      top: 50%;
      right: -0.5rem;
      transform: translateY(-50%);
    }
  }
  span:nth-last-child(1) {
    &::before {
      display: none;
    }
  }
}
</style>