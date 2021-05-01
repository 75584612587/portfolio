<template>
  <div class="image-container">
    <img
      :key="image"
      v-for="image in this.images"
      :src="image"
      height="auto"
      width="50%"
    />
  </div>
</template>

<script>
export default {
  name: "ImageComponent",
  props: {
    images: Array,
  },
  mounted() {
    console.log(this)
  }
};
</script>

<style scoped>
.image-container {
  display: flex;
  flex-wrap: wrap;
}
</style>
