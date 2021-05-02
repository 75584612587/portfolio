<template>
  <div class="product-container">
    <div :key="product" v-for="product in this.products" class="product-tile">
      <img
        :src="product.image"
        height="auto"
        width="100%"
      />
      <div class="product-name">
        {{ product.name }}
      </div>
      <div :v-if="product.freeShipping">
        Free Shipping
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductTile",
  props: {
    images: Array,
    // array of objects
    products: Array,
  },
  mounted() {
    console.log(this)
  }
};
</script>

<style scoped>
.product-tile {
  display: flex;
  flex-direction:column;
  width: 300px;
}
.product-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.product-name {
  height: 40px;
  line-height: 1.2;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}
</style>
