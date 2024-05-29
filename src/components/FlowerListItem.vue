<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: "FlowerListItem",
  props: {
    flower: {
      type: Object
    }
  },
  computed: {
    ...mapState(['card'])
  },
  methods: {
    ...mapActions(['addToCard', 'removeFromCard']),
    addFlowerToCard() {
      this.addToCard(this.flower)
    },
    removeFlowerFromCard() {
      this.removeFromCard(this.flower.id)
    },
    itemsLenght() {
      return this.card.filter(cardItem => cardItem.id === this.flower.id).length;
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
      <button class="btn btn-outline-success" v-if="!itemsLenght()" @click="addFlowerToCard">В КОРЗИНУ</button>
      <div v-if="itemsLenght()" class="d-flex align-items-center">
        <button class="btn btn-outline-success" @click="addFlowerToCard"><i class="bi bi-plus"></i></button>
        <h5 class="text-center m-2" style="width: 25px">{{ itemsLenght() }}</h5>
        <button class="btn btn-outline-success" @click="removeFlowerFromCard"><i class="bi bi-dash"></i></button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
