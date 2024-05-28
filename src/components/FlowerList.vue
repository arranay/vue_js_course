<script>
import FlowerListItem from './FlowerListItem.vue';
export default {
  data() {
    return {
      items: [
        {
          name: "Букет ромашек",
          cost: 1200,
          img: "https://premium-flowers.ru/upload/iblock/4e7/romashki_krupnye.jpg"
        },
        {
          name: "Букет кустовых роз",
          cost: 1300,
          img: "https://static.insales-cdn.com/images/products/1/343/590758231/2022-09-07-19-10-34-294_1000.jpg"
        },
        {
          name: "Букет пионов",
          cost: 1500,
          img: "https://shop-cdn1-2.vigbo.tech/shops/29666/products/19255075/images/2-0282150e92dc7d5c0d9715d9093a062c.jpeg"
        }
      ]
    }
  },
  components: {
    FlowerListItem
  }
}
</script>

<template>
  <div>
    <div class="row row-cols-auto">
      <div class="col" v-for="(item, index) in items" :key="index">
        <FlowerListItem
            :name="item.name"
            :cost="item.cost"
            :img="item.img"></FlowerListItem>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
