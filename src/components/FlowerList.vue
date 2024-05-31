<script>
import FlowerListItem from './FlowerListItem.vue';


export default {
  props: {
    flowers: {
      type: Object
    },
    isOrder: {
      type: Boolean,
      default: false
    }
  },
  components: {
    FlowerListItem
  }
}
</script>

<template>
  <div class="row row-cols-auto">
    <div class="col-auto mb-4" v-for="(item, index) in flowers" :key="index">
      <FlowerListItem
          :flower="item"
          :name="item.name"
          :cost="item.cost"
          :img="item.img"
          :showButton="!isOrder"
      ></FlowerListItem>
    </div>
  </div>
</template>

<style scoped>

</style>
