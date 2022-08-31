<template>
  <main>
    <div class="container-fluid">
      <!-- Product Filters -->
      <PartProductFilter :close="filterClose" @close="onFilterClick" />

      <!-- Page Breadcrumb -->
      <PartBreadcrumb :breadcrumbs="['Home','Category']" />

      <!-- Page Sorting Filter -->
      <div class="filter-section">
        <div class="filter-section-left">
          <label @click="onFilterClick(true)">
            <i class="fa-solid fa-filter"></i>
            Filter
          </label>
          <div class="form-group">
            <select name id class="form-select">
              <option value>Default Sorting</option>
            </select>
          </div>
        </div>
        <div class="filter-section-right">showing 1 - 16 of 19 results</div>
      </div>

      <!-- Product Container -->
      <PartProductContainer>
        <PartProductCart v-for="product in products" :key="product.title" :product="product" />
      </PartProductContainer>
      <div class="pagination-section" :class="[products?.count ? '' : 'd-none']">
        <div class="pagination-section-box">1</div>
        <div class="pagination-section-box">2</div>
        <div class="pagination-section-box">
          <i class="fa-solid fa-angle-right"></i>
        </div>
      </div>

      <!-- Relatedable Products -->
      <div class="relatable-product">
        <h2>Top Rated Products</h2>
        <PartProductContainer>
          <PartProductCart v-for="product in products" :key="product.title" :product="product" />
        </PartProductContainer>
      </div>
    </div>
  </main>
</template>

<script setup>
const filterClose = ref(false);
const products = ref([]);

function onFilterClick(value) {
  filterClose.value = value;
}
// const data = await useFetch("http://3.111.70.214:1337/products");
// const products = data.data._rawValue;
onMounted(() => {
  fetch("http://3.111.70.214:1337/products")
    .then((res) => res.json())
    .then((data) => (products.value = data))
    .catch((err) => console.log(err.message));
});
</script>

<style lang="scss">
.filter-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  &-left {
    display: flex;
    align-items: center;
    grid-gap: 2rem;
    width: 40%;
    label {
      cursor: pointer;
    }
    .form-select {
      font-size: 1.6rem;
      border-color: transparent;
      width: 20rem;
    }
  }
}

.pagination-section {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 3rem;
  grid-gap: 1rem;
  &-box {
    height: 4rem;
    width: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.1rem solid $light-dark;
    border-radius: 0.4rem;
    &:nth-child(1) {
      background-color: $light-dark;
      color: $white;
    }
  }
}
.relatable-product {
  padding-top: 10rem;
  margin-top: 10rem;
  border-top: 0.2rem dashed rgba($danger, 0.4);
}
</style>