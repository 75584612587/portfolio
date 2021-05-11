<template>
  <div class="body">
    <div v-cloak class="content">
      <Body>
        <CardContainer>
          <CardLeft>
            {{ this.cartState }}
          </CardLeft>
          <CardRight>
  
          </CardRight>
          <router-link :to="{name: 'ProductDetails'}">Go to description</router-link>

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

import { CartState } from "@/globalState/cartState";

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

@Observer
@Component({
  components: {
    CardContainer,
    CardLeft,
    CardRight,

  },
})
export default class ProductDetails extends Vue {
  cartState = CartState.get();
  mounted() {
      console.log(this.cartState)
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
