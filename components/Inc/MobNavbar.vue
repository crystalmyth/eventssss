<template>
  <div v-if="show" id="mob-navbar" class="mob-navbar">
    <div class="container-fluid">
      <div class="mob-navbar-logo">
        <img :src="Logo" alt="" class="img-fluid" />
      </div>
      <div class="mob-navbar-menu" @click="TriggerMobNav">
        <i class="fa-solid fa-bars" v-if="!display"></i>
        <i class="fa-solid fa-close" v-if="display"></i>
      </div>
    </div>

    <IncMobSidebar :display="display" @display="TriggerMobNav" />
  </div>
</template>

<script setup>
import Logo from "@/assets/images/logo.svg";
const display = ref(false);
const show = ref(false);

function TriggerMobNav() {
  display.value = !display.value;
}

onMounted(() => {
  if (window.innerHeight > window.innerWidth) {
    show.value = true;
  }
});
</script>

<style lang="scss">
.mob-navbar {
  padding: 1rem 0rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background-color: $white;
  .container-fluid {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &-menu {
    width: 3rem;
    display: flex;
    align-items: center;
  }
}
</style>
