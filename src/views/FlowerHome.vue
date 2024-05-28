<script>
import NavBar from "@/components/NavBar.vue";
import FlowerList from "@/components/FlowerList.vue";
import allFlowers from "@/mock/flowers";

export default {
  name: "FlowerHome",
  data() {
    return {
      search: ""
    }
  },
  methods: {
    getFlowers() {
      return allFlowers.filter(flower => flower.name.toLowerCase().includes(this.search.toLowerCase()));
    }
  },
  components: {
    NavBar,
    FlowerList
  }
}
</script>

<template>
  <div>
    <NavBar></NavBar>
    <div class="d-flex justify-content-center">
      <div class="w-75">
        <div class="d-flex justify-content-between my-4">
          <h2>Все букеты</h2>
          <input class="form-control w-25" placeholder="Поиск..." v-model="search">
        </div>
        <hr>
        <FlowerList :flowers="getFlowers()"></FlowerList>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
