<template>
  <div class="subscribe">
    <div class="container-fluid">
      <form action class="form">
        <h2>
          Subscribe & Get
          <span>10%</span> Discont
        </h2>
        <p>
          Get E-mail updates about our latest shop and
          <nuxt-link to="/">special offers.</nuxt-link>
        </p>
        <div class="form-group">
          <i class="fa-solid fa-envelope"></i>
          <input type="email" placeholder="Enter Your Email..." class="form-control" />
          <button class="btn btn-primary">Subscribe</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.subscribe {
  padding: 5rem 0rem;
  background-color: $cream;
  margin-bottom: 5rem;
  background-image: url("https://img.freepik.com/free-photo/pink-balloons-with-blurry-circle_23-2148992996.jpg?w=900&t=st=1661202644~exp=1661203244~hmac=49bc4e6cc131655eebd7ec05fa4ec57e15a345f5d41e9c1c430a2a4beea2f7f0");
  background-size: cover;
  position: relative;
  background-attachment: fixed;

  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgba($color: $cream, $alpha: 0.6);
    top: 0;
    left: 0;
    z-index: 2;
  }
  .container-fluid {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    z-index: 2;
  }
  .form {
    width: 70%;
    h2 {
      font-size: 4rem;
      span {
        font-size: 4rem;
        color: $orange;
      }
    }
    p {
      text-align: center;
      span {
        color: $orange;
      }
      a {
        color: $orange;
      }
    }
    &-control {
      height: 4rem;
      font-size: 1.6rem;
      padding-left: 4rem;
      border-radius: 4rem;
      border-color: $purple;
    }
    &-group {
      position: relative;
      .fa-envelope {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 1rem;
      }
      .btn {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        width: 15rem;
        height: 4rem;
        font-size: 1.6rem;
        border-radius: 4rem;
        background-color: $purple;
        border-color: $purple;
      }
    }
  }
}
</style>