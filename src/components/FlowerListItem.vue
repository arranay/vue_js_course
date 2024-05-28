<script>
import { mapActions } from 'vuex';

export default {
  name: "FlowerListItem",
  props: {
    flower: {
      type: Object
    }
  },
  methods: {
    ...mapActions(['addToCard']),
    addFlowerToCard() {
      this.addToCard(this.flower)
    }
  }
}
</script>

<template>
  <div class="card" style="width: 18rem; cursor: pointer" @click="() => {}">
    <img :src="flower.img" class="card-img-top" height="250px" style="object-fit: cover" alt="Изображение">
    <div class="card-body">
      <h5 class="card-title">{{ flower.name }}</h5>
      <p class="card-text">{{ flower.cost }} ₽</p>
      <button class="btn btn-outline-success" @click="addFlowerToCard">В КОРЗИНУ</button>
    </div>
  </div>
</template>

<style scoped>

</style>
