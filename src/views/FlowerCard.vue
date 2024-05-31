<script>
import FlowerList from "@/components/FlowerList.vue";
import NavBar from "@/components/NavBar.vue";
import {mapActions, mapState} from "vuex";

export default {
  name: "FlowerCard",
  components: { NavBar, FlowerList },
  computed: {
    ...mapState(['card'])
  },
  methods: {
    ...mapActions(['clearCard']),
    getTotalCost() {
      return this.card.reduce((accumulator, value) => accumulator + value.count * value.flower.cost, 0);
    },
    getFlowers() {
      return this.card.map(c => c.flower);
    },
    confirmOrder() {
      window.alert('Спасибо за ваш заказ!');
      this.clearCard()
    }
  }
}
</script>

<template>
  <div>
    <NavBar></NavBar>
    <div class="d-flex justify-content-center mx-2" >
      <div class="w-75">
        <div class="d-flex justify-content-between my-4">
          <h2>Корзина</h2>
        </div>

        <p v-if="!getFlowers().length">В корзине ещё нет товаров. Добавьте товар.</p>

        <FlowerList :flowers="getFlowers()"></FlowerList>

        <hr>

        <div class="d-flex justify-content-between">
          <h3>Итого {{ getTotalCost() }} ₽</h3>
          <button class="btn btn-outline-success mb-4" @click="confirmOrder" :disabled="getTotalCost() === 0">Оформить заказ</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
