<script>
export default {
  name: "FlowerListItem",
  props: {
    name: {
      type: String,
      require: true
    },
    cost: {
      type: Number,
      require: true
    },
    img: {
      type: String,
      require: true
    }
  }
}
</script>

<template>
  <div class="card" style="width: 18rem; cursor: pointer" @click="() => {}">
    <img :src="img" class="card-img-top" height="250px" style="object-fit: cover" alt="Изображение">
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
      <p class="card-text">{{ cost }} ₽</p>
      <button class="btn btn-outline-success">В КОРЗИНУ</button>
    </div>
  </div>
</template>

<style scoped>

</style>
