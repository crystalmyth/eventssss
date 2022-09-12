<template>
  <main id="about-page" class="about">
    <div class="container-fluid">
      <div class="about-header">
        <div class="about-header-left">
          <label for="">NEW LOOK, NEW FOCUS.</label>
          <h2>Pet care, up close and personal.</h2>
          <p>
            But this isn’t just about our fresh new look. As you’ll see below,
            we’ve hired more qualified advisors, expanded our range, built a
            pet-first navigation, and launched new services like on-demand
            healthcare and insurance. There’s much more to come, but we hope you
            think we’re headed in the right direction.
          </p>
          <div class="about-header-buttons">
            <div class="about-header-buttons-watch">
              <i class="fa-solid fa-play"></i>
              What Our Video
            </div>
            <div class="about-header-buttons-more">
              Learn More
              <i class="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </div>
        <div class="about-header-right">
          <img
            src="http://demo2.themelexus.com/ziggy/wp-content/uploads/2022/05/rev_about1.png"
            alt=""
            class="img-fluid"
          />
        </div>
      </div>
    </div>
    <section class="here-section">
      <div class="container-fluid">
        <label for="">WE'RE HERE FOR YOU</label>
        <h2>All you need, all in one place.</h2>
        <div class="row">
          <div v-for="n in 3" :key="`here-section-box-${n}`" class="col-sm-4">
            <i class="fa-solid fa-shield"></i>
            <h4>Tailor-made insurance</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur eiusmod tempor incididunt
            </p>
          </div>
        </div>
      </div>
    </section>
    <HomeReview />
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss">
.about {
  &-header {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-top: 1rem;

    @media only screen and (orientation: portrait) {
      display: flex;
      flex-direction: column-reverse;
    }

    &-left {
      display: flex;
      flex-direction: column;
      justify-content: center;

      @media only screen and (orientation: portrait) {
        padding-top: 1rem;
      }
      label {
        color: $orange;
        font-weight: bold;
      }
      h2 {
        display: flex;
        align-items: left;
        padding: 2rem 0rem;

        @media only screen and (orientation: portrait) {
          text-align: left !important;
        }
      }
      p {
        font-size: 1.6rem;
        padding-bottom: 2rem;
      }
    }
    &-buttons {
      display: flex;
      align-items: center;
      grid-gap: 2rem;
      &-watch {
        display: flex;
        align-items: center;
        font-size: 2rem;
        grid-gap: 0.5rem;
        .fa-solid {
          font-size: 2rem;
          color: $orange;
          border: 0.2rem solid $orange;
          border-radius: 100%;
          height: 5rem;
          width: 5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }

      &-more {
        background-color: $purple;
        color: $white;
        padding: 1rem 1.5rem;
        border-radius: 2.5rem;
      }
    }
  }

  .here-section {
    background-color: #f2eaea;
    padding: 5rem 0rem;
    text-align: center;
    margin-top: 3rem;
    label {
      color: $orange;
      font-weight: bold;
      text-transform: uppercase;
    }
    h2 {
      font-size: 4rem;
      font-weight: bold;
    }
    .row {
      .col-sm-4 {
        background-color: $white;
        padding: 1rem;
        aspect-ratio: 1/1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        grid-gap: 1rem;
        transform: scale(0.95);

        .fa-solid {
          font-size: 10rem;
          transition: all 0.3s linear;
        }

        &:hover {
          .fa-solid {
            transform: scale(0.8);
          }
        }
        h4 {
          font-weight: bold;
          font-size: 2rem;
        }
        p {
          color: $secondary;
          width: 80%;
          margin-left: auto;
          margin-right: auto;
        }
      }
    }
  }
}
</style>
