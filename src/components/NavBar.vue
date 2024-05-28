<script>
import FlowerCard from "@/views/FlowerCard.vue";

export default {
  name: "NavBar",
  computed: {
    FlowerCard() {
      return FlowerCard
    }
  },
  methods: {
  }
}
</script>

<template>
  <div class="d-flex justify-content-between">
    <a class="btn btn-lg btn-link link-success link-underline link-underline-opacity-0" @click="this.$router.push({ name: 'Home'})">
      <img src="../assets/logo.png" alt="Bootstrap" width="50" height="44">
      <em class="m-lg-3">Магазин цветов</em>
    </a>

    <div>
      <a class="btn btn-lg btn-link link-secondary link-underline link-underline-opacity-0" @click="this.$router.push({ name: 'Cart' })"><i class="bi bi-cart"></i> Корзина</a>
      <a class="btn btn-lg btn-link link-secondary link-underline link-underline-opacity-0" @click="this.$router.push({ name: 'Login' })"><i class="bi bi-box-arrow-in-right"></i> Войти</a>
    </div>
  </div>
</template>

<style scoped>

</style>
