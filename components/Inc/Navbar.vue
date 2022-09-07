<template>
  <div>
    <IncUprNavbar />
    <nav class="navbar">
      <div class="container-fluid">
        <!-- Navbar Logo -->
        <div class="navbar-logo">
          <img lazy="loading" :src="Logo" alt class="img-fluid" />
        </div>
        <!-- Navbar Menu -->
        <div class="navbar-menu">
          <div
            v-for="(link, index) in menu"
            :key="`link-${index}`"
            class="navbar-menu-box"
          >
            <nuxt-link :to="link.link">{{ link.name }}</nuxt-link>
          </div>
        </div>
        <!-- Navbar Search -->
        <div class="navbar-search">
          <input type="text" placeholder="Search..." class="form-control" />
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <!-- Navbar Buttons -->
        <div class="navbar-buttons">
          <div class="navbar-buttons-box">
            <i class="fa-solid fa-user"></i>
          </div>
          <div class="navbar-buttons-box">
            <i class="fa-solid fa-heart"></i>
          </div>
          <div class="navbar-buttons-box">
            <i class="fa-solid fa-cart-shopping"></i>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import data from "~/assets/data/web-profile";
import $ from "jquery";

// const data = await useFetch("http://3.111.70.214:1337/web-profile");
// const profile = data.data._rawValue;
const profile = data;
const Logo = `http://3.111.70.214:1337${profile.Logo.url}`;

const menu = [
  { name: "Home", link: "/" },
  { name: "Category", link: "/category" },
  { name: "About", link: "/about" },
  { name: "Contact Us", link: "/contact" },
];

onMounted(() => {
  $(document).ready(() => {
    window.onscroll = function (event) {
      var scroll = window.pageYOffset;
      if (scroll > 100) {
        $(".navbar").css({
          position: "fixed",
          width: "100%",
          top: "0",
          left: "0",
          "z-index": 5,
        });
      } else {
        $(".navbar").css({
          position: "relative",
          width: "100%",
          top: "0",
          left: "0",
        });
      }
    };
  });
});
</script>
