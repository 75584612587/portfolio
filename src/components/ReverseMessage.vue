<template>
  <div class="image-container">
    <input v-model="input">
    <div>message {{ input }}</div>
    <div>reversed message {{ reverseMessage }}</div>
  </div>
</template>

<script>
export default {
  name: "ReverseMessage",
  data () {
    return {
      input: "",
    }
  },
  computed: {
    reverseMessage: function() {
      return this.input.split('').reverse().join('')
    }
  },
};
</script>

<style scoped>

</style>
