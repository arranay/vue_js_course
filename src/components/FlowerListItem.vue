<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: "FlowerListItem",
  props: {
    flower: {
      type: Object
    },
    showButton: {
      type: Boolean,
      default: true
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
    itemsLength() {
      return this.card.find(cardItem => cardItem.flower.id === this.flower.id)?.count || 0;
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

      <div v-if="showButton">
        <button class="btn btn-outline-success" v-if="!itemsLength()" @click="addFlowerToCard">В КОРЗИНУ</button>
        <div v-if="itemsLength()" class="d-flex align-items-center">
          <button class="btn btn-outline-success" @click="addFlowerToCard"><i class="bi bi-plus"></i></button>
          <h5 class="text-center m-2" style="width: 25px">{{ itemsLength() }}</h5>
          <button class="btn btn-outline-success" @click="removeFlowerFromCard"><i class="bi bi-dash"></i></button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
