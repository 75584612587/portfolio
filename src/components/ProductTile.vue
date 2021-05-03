<template>
  <div class="product-container">
    <div :key="product.name" v-for="product in this.products" class="product-tile">
      <router-link :to="{
        name: 'ProductDetails',
        params: {
          productName: product.name,
          productImage: product.image,
          freeShipping: product.freeShipping,
        }
      }">


        <div class="img-container">
          <img
            :src="product.image"
            height="auto"
            width="90%"
            class="image"
          />
        </div>
        <div class="product-name">
          {{ product.name }}
        </div>
        <div v-if="product.freeShipping" style="padding: 10px;">
          Free Shipping
        </div>
      </router-link>

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
  border-style: solid;
  border-color: rgb(196, 183, 183);
  margin: 10px;
  border-radius: 5%;
}
.product-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.product-name {
  height: 30px;
  line-height: 1.2;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
  padding: 10px;
  
}
.img-container {
  display: flex;
  justify-content: center;
  width: 100%;
}
.image {
  padding: 10px;
}
</style>
