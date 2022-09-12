<template>
  <main id="checkout">
    <div class="container-fluid">
      <PartBreadcrumb :breadcrumbs="['Home', 'Wishlist']" />

      <div class="table-container">
        <table class="table">
          <tbody>
            <tr v-for="n in 8" :key="`product-box-${n}`" class="product-box">
              <td>
                <img
                  src="http://demo2.themelexus.com/ziggy/wp-content/uploads/2022/05/product-14-1-350x350.jpg"
                  alt=""
                />
              </td>
              <td>
                <h4 class="product-box-title">Intelligent Wooden Shirt</h4>
                <p class="product-box-price">$426.03</p>
                <span class="product-box-date">August 4, 2022</span>
              </td>
              <td>
                <span>Available</span>
                <button class="btn btn-primary">
                  <i class="fa-solid fa-bag-shopping"></i>
                  Add To Cart
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss">
.table {
  &-container {
    margin-top: 4rem;
  }
  .product-box {
    border: 0.2rem dashed rgba($color: $secondary, $alpha: 0.5);
    border-bottom: 0px solid transparent;
    &:nth-last-child(1) {
      border-bottom: 0.2rem dashed rgba($color: $secondary, $alpha: 0.5);
    }
    td {
      padding: 2rem;
    }
    img {
      height: 10rem;
      object-fit: cover;
    }
    span {
      display: block;
    }
    .btn {
      background-color: $orange;
      border-color: $orange;
      font-size: 1.8rem;
      padding: 0.5rem 1rem;
    }
    &-title {
      font-weight: bold;
      font-size: 2rem;
    }
    &-price {
      font-size: 1.8rem;
    }
    &-date {
      color: $secondary;
      font-size: 1.4rem;
    }
  }
}
</style>
