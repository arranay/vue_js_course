<script>
import NavBar from "@/components/NavBar.vue";
import FlowerList from "@/components/FlowerList.vue";
import orders from "@/mock/orders.js";

export default {
  name: "FlowerOrder",
  methods: {
    orders() {
      return orders
    }
  },
  components: {FlowerList, NavBar}
}
</script>

<template>
  <div>
    <NavBar></NavBar>
    <div class="d-flex justify-content-center">
      <div class="w-75">
        <div class="d-flex my-4">
          <h2>Заказы</h2>
        </div>

        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Номер заказа</th>
              <th scope="col">Дата заказа</th>
              <th scope="col">Состояние</th>
              <th scope="col">Сумма заказа</th>
            </tr>
          </thead>
          <tbody>
          <tr v-for="order in orders()" style="cursor: pointer" @click="$router.push({ name: 'OrderDetails', params: { id: order.id } })">
            <th scope="row">{{ order.id }}</th>
            <td>{{ order.date.toLocaleDateString() }}</td>
            <td>{{ order.state }}</td>
            <td>{{ order.flowers.reduce((a, f) => a = a + f.cost, 0) }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
