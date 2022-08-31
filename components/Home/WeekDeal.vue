<template>
  <section class="week-deal">
    <div class="container-fluid">
      <h2>This Week Deals</h2>
      <div class="week-deal-list">
        <div v-for="n in 5" :key="`deal-${n}`" class="week-deal-box shadow">
          <img
            lazy="loading"
            src="https://img.freepik.com/free-vector/people-celebration-birthday-illustration_23-2148922213.jpg?w=740&t=st=1661183053~exp=1661183653~hmac=99b2dfb66649c8a91aad328b640cda6445fb6ef42786ad0dee01dc716dc9ed6c"
            alt
            class="img-fluid"
          />
          <div class="week-deal-box-content">
            <div class="week-deal-box-discount">50%</div>
            <h4>Birthday Decoration</h4>
            <div class="week-deal-box-tag">Lots of fun.</div>
            <nuxt-link to="/">Book Now</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style lang="scss">
.week-deal {
  &-list {
    display: flex;
    flex-flow: row wrap;
    grid-row-gap: 0.6rem;
  }
  &-box {
    position: relative;
    background-color: #fab02b;
    height: 25rem;
    padding: 2rem;
    overflow: hidden;
    width: 33.3%;
    transform: scale(0.97);
    &:nth-last-child(1) {
      width: 50%;
    }
    &:nth-last-child(2) {
      width: 50%;
    }

    img {
      position: absolute;
      top: 0;
      right: -5rem;
      z-index: 1;
      height: 100%;
      object-fit: cover;
      transition: all 0.3s ease-in-out;
    }
    &:hover {
      img {
        transform: translateX(10%);
      }
    }

    &-content {
      position: relative;
      z-index: 2;
      height: 100%;
    }

    &-discount {
      font-size: 5rem;
    }
    h4 {
      font-size: 2.4rem;
      font-weight: bold;
    }
    &-tag {
      font-size: 1.4rem;
      font-weight: medium;
      margin-top: 1rem;
      margin-bottom: 3rem;
    }
    a {
      height: 4rem;
      width: 15rem;
      border: 0.1rem solid $purple;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 3rem;
      background-color: $purple;
      color: $white;
      font-weight: bold;
    }
  }
}
</style>