<script>
import {mapActions, mapState} from 'vuex';

export default {
  name: "NavBar",
  computed: {
    ...mapState(['card', 'user'])
  },
  methods: {
    ...mapActions(['deleteUser']),
    getCount() {
      return this.card.reduce((a, c) => a = a + c.count, 0);
    }
  }
}
</script>

<template>
  <div class="d-flex justify-content-end">
    <div>
      <a class="btn btn-lg btn-link link-secondary link-underline link-underline-opacity-0" @click="this.$router.push({ name: 'Home' })">
        <i class="bi bi-flower1"></i> Букеты
      </a>
      <a class="btn btn-lg btn-link link-secondary link-underline link-underline-opacity-0" @click="this.$router.push({ name: 'Cart' })">
        <i class="bi bi-cart"></i> Корзина <span class="badge bg-secondary" style="width: 40px">{{getCount()}}</span>
      </a>
      <a class="btn btn-lg btn-link link-secondary link-underline link-underline-opacity-0" @click="this.$router.push({ name: 'Order' })">
        <i class="bi bi-bag-heart"></i> Заказы
      </a>

      <a class="btn btn-lg btn-link link-secondary link-underline link-underline-opacity-0" v-if="!user" @click="this.$router.push({ name: 'Login' })">
        <i class="bi bi-box-arrow-in-right"></i> Войти
      </a>
      <a class="btn btn-lg btn-link link-secondary link-underline link-underline-opacity-0" v-if="user" @click="deleteUser">
        <i class="bi bi-box-arrow-left"></i> Выйти
      </a>
    </div>
  </div>
</template>

<style scoped>

</style>
