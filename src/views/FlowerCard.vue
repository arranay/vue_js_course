<script>
import FlowerList from "@/components/FlowerList.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "FlowerCard",
  components: { NavBar, FlowerList }
}
</script>

<template>
  <div>
    <NavBar></NavBar>
    <div class="d-flex justify-content-center mx-2" >
      <div>
        <div class="d-flex justify-content-between my-4">
          <h2>Корзина</h2>
        </div>
        <FlowerList></FlowerList>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
