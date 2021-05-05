<template>
  <div class="body">
    <div v-cloak class="content">
      <div class="main-card">
        <div class="card-left">
          <div class="multi-images">
            <div :key="index" v-for="(image, index) in state.multiImages">
              <img :src="image" width="100%" height="100%" />
            </div>
          </div>
          <img
            :src="productDetails.productImage"
            class="product-image"
            width="82%"
            height="auto"
          />
        </div>
        <div class="card-right">
          <div>
            {{ productDetails.productName }}
          </div>
          <div class="price">
            {{ state.quantities[state.picked].value * state.selectedQuantity }}
          </div>
          <div class="quantity-size">
            <div :key="quantity.size" v-for="(quantity, index) in state.quantities">
              <input type="radio" id="one" :value="index" v-model="state.picked" />
              <label for="one"> {{ quantity.size }} </label>
            </div>
          </div>
          <div class="add-cart">
            <select v-model="state.selectedQuantity">
              <option
                :key="option"
                v-for="option in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
                :value="option"
              >
                {{ option }}
              </option>
            </select>
            <button class="add-cart-button">add to cart</button>
          </div>
          <router-link to="/">Go to Home</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import ViewState from "./viewState";
import { Observer } from "mobx-vue";

@Observer
@Component
export default class App extends Vue {
  state = new ViewState();

  productDetails = (this.$route as any).params;
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans");
@media screen and (min-height: 550px) {
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
@media screen and (max-width: 768px) {
  .typer {
    font-size: 16px !important;
  }
  p {
    font-size: 13px !important;
  }
  .title {
    font-size: 18px !important;
  }
  .small {
    font-size: 10px !important;
  }
}
body {
  position: relative;
  height: 100vh;
}
.bold {
  font-weight: bold;
}
.hover:hover {
  cursor: pointer;
  opacity: 0.5;
}
.small {
  font-size: 12px;
}
.social .fa {
  margin: 10px;
  color: black;
}
.flex-center {
  align-items: center;
  display: flex;
  justify-content: center;
}
.column {
  flex-direction: column;
}
[v-cloak] {
  display: none;
}
.title .profile {
  width: 150px;
  border-radius: 50%;
  margin: 10px;
}
.title {
  text-align: center;
  font-size: 30px;
  font-weight: bold;
}
.autoHeight {
  transition-timing-function: ease-out;
  max-height: 50000px !important;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.typer {
  height: 34px;
  font-size: 25px;
  font-weight: bold;
}
html,
body {
  font-family: "Open Sans", sans-serif;
  margin: 0;
  padding: 0;
}
.el-card {
  position: relative;
  opacity: 0.8;
}
.el-card img {
  width: 100%;
}

.main-card {
  border-radius: 4px;
  border: 1px solid #e6ebf5;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  color: #2d2f33;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  max-width: 100%;
  width: 1700px;
  flex-direction: column;
  opacity: 0.8;
  box-sizing: border-box;
  height: 100%;
  display: flex;
  flex-direction: row;
}

@media screen and (max-width: 768px) {
  .main-card {
    width: 100%;
    min-height: 100%;
  }
}

.body {
  background-color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  box-sizing: border-box;
  min-height: 100vh;
}
.card-left {
  width: 50%;
  display: flex;
}
.card-right {
  width: 50%;
  display: flex;
  flex-direction: column;
}
.multi-images {
  display: flex;
  width: "18%";
  flex-direction: column;
}
.quantity-value {
  display: flex;
}

.quantity-size {
  display: flex;
}
.add-cart {
  display: flex;
}
</style>
