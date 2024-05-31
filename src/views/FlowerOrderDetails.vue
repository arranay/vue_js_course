<script>
import NavBar from "@/components/NavBar.vue";
import orders from "@/mock/orders.js";
import FlowerList from "@/components/FlowerList.vue";
import OrderItem from "@/components/OrderItem.vue";

export default {
  name: "FlowerOrderDetails",
  components: {FlowerList, NavBar, OrderItem},
  data() {
    return {
      id: ''
    }
  },
  mounted() {
    this.id = this.$route.params.id;
  },
  methods: {
    order() {
      return orders.find(order => order.id === this.id);
    },
    orderFlowers() {
      const order = this.order();
      if (!order) return [];

      return order.flowers;
    },
    getCost() {
      const cost = this.order().flowers.reduce((a, f) => a = a + f.cost, 0);
      return `${cost} ₽`
    }
  }
}
</script>

<template>
  <div>
    <NavBar></NavBar>

    <div class="d-flex justify-content-center">
      <div class="w-75">
        <div class="d-flex my-4">
          <h2>Детали заказа</h2>
        </div>

        <div v-if="order()" class="d-flex flex-column">
          <OrderItem title="Номер заказа" :value="order().id"></OrderItem>
          <OrderItem title="Дата заказа" :value="order().date.toLocaleDateString()"></OrderItem>
          <OrderItem title="Состояние" :value="order().state"></OrderItem>
          <OrderItem title="Сумма заказа" :value="getCost()"></OrderItem>
        </div>

        <hr>

        <FlowerList :flowers="orderFlowers()" :isOrder="true"></FlowerList>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
