<template>
  <div class="body">
    <div v-cloak class="content">
      <Body>
        <CardContainer>
          <CardLeft>
            <MultiImages>
              <div :key="index" v-for="(image, index) in state.multiImages">
                <img :src="image" width="110" height="auto" />
              </div>
            </MultiImages>
            <div>
              <img
                :src="productDetails.image"
                class="product-image"
                width="100%"
                height="auto"
              />
            </div>
          </CardLeft>
          <CardRight>
            <ProductName>
              {{ productDetails.name }}
            </ProductName>
            <QuantityValue>
              {{
                state.quantities[state.picked].value * state.selectedQuantity
              }}
            </QuantityValue>
            <div>size: {{ state.quantities[state.picked].size }}</div>
            <QuantitySize>
              <QuantityContainer
                v-bind:key="quantity.size"
                v-for="(quantity, index) in state.quantities"
              >
                <input
                  class="radio"
                  type="radio"
                  id="one"
                  :value="index"
                  v-model="state.picked"
                />
                <QuantityVisible> {{ quantity.size }} </QuantityVisible>
              </QuantityContainer>
            </QuantitySize>
            <AddCart>
              <select v-model="state.selectedQuantity">
                <option
                  :key="option"
                  v-for="option in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
                  :value="option"
                >
                  {{ option }}
                </option>
              </select>
                <AddCartButton
                  class="add-cart-button"
                  @click="addItemToCart"
                >
                  Add to cart
                </AddCartButton>
              <!-- <template v-if="cartState">
                <div v-for="item in cartState.cart" :key="JSON.stringify(item)">
                  {{ JSON.stringify(item) }}
                </div>
              </template> -->
            </AddCart>
            <router-link
              :to="{
                name: 'cart',
              }"
            >
              Go to cart</router-link
            >
            <router-link
              :to="{
                name: 'home',
              }"
            >
              Go to Home</router-link
            >
          </CardRight>
        </CardContainer>
      </Body>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import styled from "vue-styled-components";

import { Observer } from "mobx-vue";
import { ProductDetailsState } from "./viewState";
import { CartState } from "@/globalState/cartState";
import { CurrentProductState } from "@/globalState/currentProductState";

const CardContainer = styled.div`
  border-radius: 4px;
  border: 1px solid #e6ebf5;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  color: #2d2f33;
  display: flex;
  justify-content: center;
  align-items: top;
  padding: 80px 20px 20px 20px;
  max-width: 100%;
  width: 1500px;
  flex-direction: column;
  opacity: 0.8;
  box-sizing: border-box;
  height: 100%;
  display: flex;
  flex-direction: row;
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
`;
const CardLeft = styled.div`
  width: 50%;
  display: flex;
`;
const CardRight = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;
const MultiImages = styled.div`
  display: flex;
  width: 22%;
  height: 100%;
  flex-direction: column;
`;
const QuantityValue = styled.div`
  font-weight: 700;
  letter-spacing: -0.02em;
  font-size: 1.5rem;
  font-family: BogleWeb, Helvetica Neue, Helvetica, Arial, sans-serif;
  padding: 40px 0 40px 0;
`;
const QuantitySize = styled.div`
  display: flex;
  height: 40px;
`;
const QuantityContainer = styled.label`
  display: flex;
  height: 100%;
  width: 100px;
  align-items: center;
  justify-content: center;
  border-style: solid;
  background-color: #ffffff;
  border-radius: 1px;
  border-width: 1px;
  font: white;
  margin-right: 6px;
`;
const QuantityVisible = styled.span`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
const AddCart = styled.div`
  display: flex;
  height: 35px;
  padding-top: 10px;
`;
const ProductName = styled.div`
  font-weight: 600;
  letter-spacing: -0.02em;
  font-size: 1.5rem;
  font-family: BogleWeb, Helvetica Neue, Helvetica, Arial, sans-serif;
`;
const AddCartButtonContainer = styled.div`
  height: 80%;
  width: auto;
  align-items: center;
  justify-content: center;
  background-color: #0071dc;
  border-radius: 100px;
`;
const AddCartButton = styled.button`
  display: flex;
  height: 100%;
  width: 125px;
  align-items: center;
  justify-content: center;
  background-color: #0071dc;
  border-radius: 100px;
  color: white;
  margin-left: 10px;
  border-style: none;
`;
@Observer
@Component({
  components: {
    CardContainer,
    CardLeft,
    CardRight,
    MultiImages,
    QuantityValue,
    QuantitySize,
    QuantityContainer,
    QuantityVisible,
    AddCart,
    ProductName,
    AddCartButton,
    AddCartButtonContainer,
  },
})
export default class ProductDetails extends Vue {
  currentProductState = CurrentProductState.get();
  productDetails = this.currentProductState.currentProduct;
  state = new ProductDetailsState();
  cartState = CartState.get();
  addItemToCart(){ 
    if (this.cartState && this.productDetails){
      this.cartState.addItemToCart({
        product_image_url: this.productDetails.product_image_url,
        name: this.productDetails.name,
        price: this.state.quantities[this.state.picked].value,
        quantity: this.state.selectedQuantity,
      })
      console.log(this.cartState)
    }
  }              
  
}

// const Props = Vue.extend({
//   props: {
//     products: Array,
//   },
//   components: {
//     Tile,
//     ProductContainer,
//     ProductName,
//     ImageContainer,
//     StyledImage,
//     FreeShipping,
//   },
// });

// @Observer
// @Component
// export default class ProductTile extends Props {
//   state = new ProductDetailsState();
//   cartState = CartState.get();

//   productDetails = (this.$route as any).params;
// }
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
.radio {
  visibility: hidden;
  width: 0px;
  height: 0px;
}
</style>
