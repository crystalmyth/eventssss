<template>
  <main id="mob-sidebar" class="mob-sidebar" :class="[display ? 'active' : '']">
    <div class="container-fluid">
      <div class="mob-sidebar-links">
        <nuxt-link @click="$emit('display', !display)" to="/">Home</nuxt-link>
        <nuxt-link @click="$emit('display', !display)" to="/category"
          >Categories</nuxt-link
        >
        <nuxt-link @click="$emit('display', !display)" to="/about"
          >About Us</nuxt-link
        >
        <nuxt-link @click="$emit('display', !display)" to="/contact"
          >Contact Us</nuxt-link
        >
      </div>
      <div class="mob-sidebar-buttons shadow-lg">
        <div class="mob-sidebar-buttons-box">
          <i class="fa-solid fa-user"></i>
        </div>
        <nuxt-link
          @click="$emit('display', !display)"
          to="/wishlist"
          class="mob-sidebar-buttons-box"
        >
          <i class="fa-solid fa-heart"></i>
          <span class="mob-sidebar-badge wishlist"> 2 </span>
        </nuxt-link>
        <nuxt-link
          @click="$emit('display', !display)"
          class="mob-sidebar-buttons-box"
        >
          <i class="fa-solid fa-cart-shopping"></i>
          <span class="mob-sidebar-badge pro-cart">
            <i class="fa-solid fa-indian-rupee-sign"></i>
            1,324
          </span>
        </nuxt-link>
      </div>
    </div>
  </main>
</template>

<script setup>
const props = defineProps({
  display: Boolean,
});
</script>

<style lang="scss">
.mob-sidebar {
  position: fixed;
  z-index: -1;
  bottom: 0rem;
  left: 0;
  overflow-x: hidden;
  overflow-y: auto;
  background: rgba($white, 0.65);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba($white, 0.18);
  width: 100%;
  min-height: 50%;
  transform: translateY(100%);
  .container-fluid {
    display: flex;
    flex-direction: column;
  }
  &-links {
    a {
      display: block;
      font-size: 2rem;
      padding: 0.5rem 0rem;
      color: $purple;
      font-weight: bold;
      letter-spacing: 0.1rem;
    }
  }

  &-buttons {
    position: fixed;
    z-index: inherit;
    bottom: 0rem;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 1rem;
    &-box {
      position: relative;
    }
  }

  &-badge {
    position: absolute;
    top: -2rem;
    right: -5rem;
    display: flex;
    align-items: center;
    grid-gap: 1rem;

    .fa-solid {
      font-size: 1.2rem !important;
      margin-right: -0.5rem;
    }

    &:nth-last-child(1) {
      top: -3.5rem;
    }
  }
  .wishlist {
    left: 100%;
    transform: translateX(-40%) scale(0.8);
    background-color: $orange;
    color: $white;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
  }

  .pro-cart {
    background-color: $orange;
    color: $white;
    padding: 0.5rem 1rem;
    border-radius: 3rem;
  }
}

.mob-sidebar.active {
  transform: translateY(0%);
}
</style>
