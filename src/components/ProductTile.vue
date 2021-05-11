<template>
  <ProductContainer>
    <Tile :key="product.name" v-for="product in this.products">
      <div
        @click="viewProductDetails(product)"
      >
        <ImageContainer>
          <StyledImage :src="product.image" height="auto" width="90%" />
        </ImageContainer>
        <ProductName>
          {{ product.name }}
        </ProductName>
        <FreeShipping v-if="product.freeShipping">Free Shipping</FreeShipping>
      </div>
    </Tile>
  </ProductContainer>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import styled from "vue-styled-components";

import { Observer } from "mobx-vue";
import { CurrentProductState } from "../globalState/currentProductState"
import { ICartItem } from "@/globalState/cartState";
const Tile = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  border-style: solid;
  border-color: rgb(196, 183, 183);
  margin: 10px;
  border-radius: 5%;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ProductName = styled.div`
  height: 30px;
  line-height: 1.2;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  padding: 10px;
`;

// const StyledProductName = styled(ProductName)`
//   padding: 15px;
// `;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StyledImage = styled.img`
  padding: 10px;
`;

const FreeShipping = styled.div`
  padding: 10px;
`;

const Props = Vue.extend({
  props: {
    products: Array,
  },
  components: {
    Tile,
    ProductContainer,
    ProductName,
    ImageContainer,
    StyledImage,
    FreeShipping,
  },
});

@Observer
@Component
export default class ProductTile extends Props {
  currentProductState = CurrentProductState.get()
  viewProductDetails(product:ICartItem) {
    this.currentProductState.setCurrentProduct(product);
    this.$router.push({name:'ProductDetails'})
  }
}
</script>