<template>
  <div class="image-container">
    <input v-model="state.input" />
    <div>message {{ state.input }}</div>
    <div>reversed message {{ reverseMessage() }}</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Observer } from "mobx-vue";
import { ReverseMessageState } from "./viewState";

@Observer
@Component
class App extends Vue {
  state = new ReverseMessageState();
  reverseMessage = () => {
    return this.state.input.split('').reverse().join('')
  }
}
export default App;
</script>

<style scoped>
</style>
