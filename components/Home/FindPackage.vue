<template>
  <section class="find-package shadow">
    <div class="container-fluid">
      <h4>Find Package</h4>
      <form action="#" class="form">
        <div class="form-group">
          <select name id class="form-select rounded-0 shadow">
            <optgroup label="Occasions">
              <option value>Occasion</option>
              <option
                v-for="occasion in occasions"
                :key="occasion"
                :value="occasion.Title"
              >{{ occasion.Title }}</option>
            </optgroup>
          </select>
        </div>
        <div class="form-group">
          <select name id class="form-select rounded-0 shadow">
            <optgroup label="Relations">
              <option value>Relations</option>
              <option
                v-for="relation in relations"
                :key="relation"
                :value="relation.Title"
              >{{ relation.Title }}</option>
            </optgroup>
          </select>
        </div>
        <div class="form-group">
          <button class="btn btn-danger rounded-0 shadow">Search</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
const data = await useFetch("http://3.111.70.214:1337/occasions");
const occasions = data.data._rawValue;

const data1 = await useFetch("http://3.111.70.214:1337/relations");
const relations = data1.data._rawValue;
</script>

<style lang="scss">
.find-package {
  padding: 4rem 2rem;
  position: relative;
  top: -7rem;
  z-index: 2;
  width: 80%;
  margin: auto;
  background-color: $white;

  .container-fluid {
    h4 {
      font-size: 2.4rem;
      margin-bottom: 2rem;
      font-weight: bold;
    }
    .form {
      display: grid;
      grid-gap: 1rem;
      grid-template-columns: 1fr 1fr 10rem;
      &-select {
        font-size: 1.6rem;
        height: 4rem;
      }
      .btn {
        height: 4rem;
        width: 100%;
        color: $white;
        font-size: 1.8rem;
        font-weight: bold;
      }
    }
  }
}
</style>