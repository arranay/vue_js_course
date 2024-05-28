<script>
import NavBar from "@/components/NavBar.vue";
import FlowerList from "@/components/FlowerList.vue";

export default {
  name: "FlowerHome",
  components: {
    NavBar,
    FlowerList
  }
}
</script>

<template>
  <div>
    <NavBar></NavBar>
    <div class="d-flex justify-content-center mx-2" >
      <div>
        <div class="d-flex justify-content-between my-4">
          <h2>Все букеты</h2>
          <input class="form-control w-25" placeholder="Поиск...">
        </div>
        <FlowerList></FlowerList>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
