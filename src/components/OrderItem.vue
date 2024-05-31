<script>
export default {
  name: "OrderItem",
  props: {
    title: {
      type: String
    },
    value: {
      type: String
    }
  }
}
</script>

<template>
  <div class="d-flex justify-content-between">
    <p class="fw-bold">{{ title }}</p>
    <p>{{ value }}</p>
  </div>
</template>
