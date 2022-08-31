<template>
  <NuxtLayout>
    <transition duration="550">
      <NuxtPage />
    </transition>
  </NuxtLayout>
</template>


<script setup>
useHead({
  script: [
    {
      src: "https://kit.fontawesome.com/bd1e2f92cb.js",
    },
  ],
});
</script>

<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition: all 1s ease-in-out;
}
/* delay leave of parent element */
.page-leave-active {
  transition-delay: 0.25s;
}

.page-enter-from,
.page-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

/* we can also transition page elements using page selectors */
.page-enter-active main,
.page-leave-active main {
  transition: all 0.3s ease-in-out;
}
/* delay enter of page element */
.page-enter-active main {
  transition-delay: 0.25s;
}

.page-enter-from main,
.page-leave-to main {
  transform: translateX(30px);
  /*
  	Hack around a Chrome 96 bug in handling page opacity transitions.
    This is not needed in other browsers or Chrome 99+ where the bug
    has been fixed.
  */
  opacity: 0.001;
}
</style>