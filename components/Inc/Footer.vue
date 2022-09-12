<template>
  <footer class="footer">
    <div class="container-fluid">
      <div class="footer-left">
        <h4>STAY UP TO DATE ON OUR LATEST TIPS</h4>
        <p>
          Subscrible & get
          <span>10%</span> discount. Get E-mail updates about our latest shop
          and
          <nuxt-link to="/">special offers.</nuxt-link>
        </p>
        <form action="#" class="form">
          <div class="form-group">
            <input
              type="email"
              placeholder="Enter your email..."
              class="form-control"
            />
            <i class="fa-solid fa-envelope-circle-check"></i>
          </div>
        </form>
      </div>
      <div class="footer-right">
        <div class="footer-useful">
          <h5>USEFUL LINKS</h5>
          <div class="footer-uselful-links">
            <nuxt-link to="/">New Products</nuxt-link>
            <nuxt-link to="/">Best Sellers</nuxt-link>
            <nuxt-link to="/">Bundle & Save</nuxt-link>
            <nuxt-link to="/">Online Gift Card</nuxt-link>
            <nuxt-link to="/">Discount</nuxt-link>
            <nuxt-link to="/">Pet Store Locator</nuxt-link>
          </div>
        </div>
        <div class="footer-account">
          <h5>MY ACCOUNT</h5>
          <div class="footer-account-links">
            <nuxt-link to="/">My Profile</nuxt-link>
            <nuxt-link to="/">My Order History</nuxt-link>
            <nuxt-link to="/">My Wish List</nuxt-link>
            <nuxt-link to="/">Order Tracking</nuxt-link>
            <nuxt-link to="/">Shipping Info</nuxt-link>
            <nuxt-link to="/">Shopping Cart</nuxt-link>
          </div>
        </div>
        <div class="footer-company">
          <h5>Company</h5>
          <div class="footer-company-links">
            <nuxt-link to="/">About Us</nuxt-link>
            <nuxt-link to="/">Careers</nuxt-link>
            <nuxt-link to="/">Blog</nuxt-link>
            <nuxt-link to="/">Affiliate</nuxt-link>
            <nuxt-link to="/">Contact Us</nuxt-link>
            <nuxt-link to="/">Gift Cards</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer {
  background-color: $dark;
  color: $white;
  padding: 5rem 0rem;
  margin-top: 4rem;
  p {
    margin: 0;
    color: $secondary;
    span {
      color: $orange;
    }
    a {
      color: $orange;
    }
  }
  .container-fluid {
    display: grid;
    grid-template-columns: 40% 1fr;
    grid-gap: 4rem;

    @media only screen and (orientation: portrait) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  &-left {
    .form {
      margin-top: 3rem;
      &-control {
        height: 4rem;
        border-radius: 4rem;
        font-size: 1.4rem;
        padding-left: 2rem;
        border-color: $purple;
      }
      &-group {
        position: relative;
        i {
          height: 4rem;
          width: 4rem;
          background-color: $purple;
          color: $white;
          position: absolute;
          top: 50%;
          right: 0rem;
          transform: translateY(-50%);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 100%;
        }
      }
    }
  }

  &-right {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media only screen and (orientation: portrait) {
      grid-template-columns: repeat(2, 1fr);
    }
    h5 {
      padding-bottom: 2rem;
      font-size: 1.6rem;
    }
    a {
      display: block;
      color: $secondary;
      padding: 1rem 0rem;
      &:hover {
        color: $orange;
      }
    }
  }
}
</style>
