<template>
  <section id="date-picker" :class="[showValue.value ? '' : 'd-none']">
    <div class="container" :class="[ slide == 'date' ? '' : 'd-none']">
      <h2>SELECT EVENT DATE & TIME</h2>
      <v-date-picker :min-date="new Date()" color="orange" mode="date" v-model="date" />
      <div class="buttons-date">
        <button class="btn btn-outline-danger" @click="changeSlide('time')">
          <i class="fa-solid fa-clock"></i> Select Time
        </button>
      </div>
    </div>

    <div class="container" :class="[ slide == 'time' ? '' : 'd-none']">
      <h2>SELECT EVENT DATE & TIME</h2>
      <h4 id="date-picker-title">READY TIME?</h4>
      <p>TAP BELOW TO SELECT TIME</p>
      <v-date-picker mode="time" v-model="date" color="orange" :timezone="timezone" />
      <p>FOR SAME DAY BOOKING, KINDLY WHATSAPP US OR CALL</p>
      <div class="buttons-icon">
        <div class="buttons-icon-whatsapp">
          <i class="fa-brands fa-whatsapp"></i> Whatsapp
        </div>
        <div class="buttons-icon-call">
          <i class="fa-solid fa-phone"></i> (+91) 8619325471
        </div>
      </div>
      <div class="buttons-time">
        <button class="btn btn-outline-danger" @click="changeSlide('date')">
          <i class="fa-solid fa-clock"></i> Change Date
        </button>
        <button class="btn btn-outline-danger">
          <i class="fa-solid fa-plus"></i> Book Now
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import "v-calendar/dist/style.css";

const date = ref(new Date());
const timezone = ref("");
const slide = ref("date");

const props = defineProps({
  show: Boolean,
});

const showValue = computed(() => ref(props.show));

onMounted(() => {
  date.value = new Date();
  slide.value = "date";
});

function changeSlide(index) {
  slide.value = index;
}
</script>


<style lang="scss">
#date-picker {
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100%;
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
    -45deg,
    rgba($purple, 0.9),
    rgba($dark, 0.7)
  );
  z-index: 5;

  &-title {
    font-size: 4rem;
    font-weight: bold;
  }
  p {
    font-size: 1.4rem;
    padding: 1rem 0rem;
  }
  .container {
    padding: 4rem;
    border-radius: 0.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;
    margin: 0 auto;
    background-color: $white;

    .buttons {
      &-icon {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
        padding: 2rem;
        color: $white;

        &-whatsapp {
          background-color: #39d366;
          padding: 1rem 1.5rem;
          border-radius: 0.4rem;
        }
        &-call {
          background-color: $orange;
          padding: 1rem 1.5rem;
          border-radius: 0.4rem;
        }
      }
      &-date {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }

      &-time {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }

    .btn-outline-danger {
      border-color: $purple;
      font-size: 1.8rem;
      color: $purple;
      margin-top: 2rem;
      &:hover {
        background-color: $purple;
        color: $white;
      }
    }

    h2 {
      padding-bottom: 2rem;
    }

    .vc-header {
      padding-bottom: 2rem;
    }
    .vc-container {
      width: 90%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
    }
    [class*="vc-time-"] {
      font-size: 3rem;
      padding-bottom: 2rem;
    }
    .vc-time-picker,
    .vc-time-content {
      padding-bottom: 0rem;
    }
    .vc-time-select {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .vc-select,
    [class*="vc-am"] {
      font-size: 1.7rem;
      height: 7rem;
      width: 7rem;
      button {
        height: 100%;
      }
      select {
        height: 7rem;
        width: 7rem;
        font-size: 2.4rem;
      }
    }
  }
}
</style>