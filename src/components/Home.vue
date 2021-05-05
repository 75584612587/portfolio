<template>
  <div class="body">
    <div v-cloak class="content">
      <div class="main-card">
        <div>
          <ProductTile :products="this.products" />
          <router-link to="/test">Go to animals</router-link>
          <router-link to="/ProductDetails">Go to description</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import product1 from "@/assets/images/petFood1.jpeg";
import product2 from "@/assets/images/petFood2.jpeg";
import product3 from "@/assets/images/petFood3.jpeg";
import product4 from "@/assets/images/petFood4.jpeg";
import product5 from "@/assets/images/petFood5.jpeg";
import product6 from "@/assets/images/petFood6.jpeg";
import product7 from "@/assets/images/petFood7.jpeg";
import product8 from "@/assets/images/petFood8.png";
import product9 from "@/assets/images/petFood9.png";
import product10 from "@/assets/images/petFood10.png";
import ProductTile from "./ProductTile";

export default {
  name: "Home",
  components: {
    ProductTile,
  },
  data: () => ({
    input: 0,

    products: [
      {
        image: product1,
        name: "IAMS PROACTIVE HEALTH Adult Indoor Weight Control & Hairball Control Dry Cat Food with Chicken, Turkey, and Garden Greens, 22 lb. Bag",
        price: 29.97,
        freeShipping: true,
      },
      {
        image: product2,
        name: "(24 Pack) CESAR Wet Dog Food Classic Loaf in Sauce Poultry Variety Pack, 3.5 oz. Easy Peel Trays with Real Chicken, Turkey or Duck",
        price: 19.47,
        freeShipping: true,
      },
      {
        image: product3,
        name: "PEDIGREE Complete Nutrition Adult Dry Dog Food Grilled Steak & Vegetable Flavor, 46.8 lb. Bag",
        price: 25.83,
        freeShipping: false,
      },
      {
        image: product4,
        name: "Vitakraft Menu Care Complex Vitamin Fortified Pet Rabbit Food, 4 lbs.",
        price: 5.86,
        freeShipping: true,
      },
      {
        image: product5,
        name: "(40 Pack) Friskies Gravy Wet Cat Food Variety Pack, TurChicken Extra Gravy Chunky, Meaty Bits & Shreds, 5.5 oz. Cans",
        price: 20.48,
        freeShipping: true,
      },
      {
        image: product6,
        name: "Purina Cat Chow High Protein Dry Cat Food, Complete, 20 lb. Bag",
        price: 18.78,
        freeShipping: true,
      },
      {
        image: product7,
        name: "Meow Mix Original Choice Dry Cat Food, 30 Pounds",
        price: 19.94,
        freeShipping: false,
      },
      {
        image: product8,
        name: "Purina Kit & Kaboodle Dry Cat Food, Original, 30 lb. Bag",
        price: 17.98,
        freeShipping: true,
      },
      {
        image: product9,
        name: "(6 Pack) Purina ONE Natural, High Protein Gravy Wet Dog Food Variety Pack, SmartBlend Tender Cuts in Gravy, 13 oz. Cans",
        price: 8.42,
        freeShipping: true,
      },
      {
        image: product10,
        name: "(8 Pack) Friskies Natural, Grain Free Wet Cat Food Complement, Lil' Soups With Tuna in Chicken Broth, 1.2 oz. Cups",
        price: 0.94,
        freeShipping: false
      },
    ],
  }),
  methods: {
    toggleShowMessage() {
      this.showMessage = !this.showMessage;
    },

  },
};
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
</style>
