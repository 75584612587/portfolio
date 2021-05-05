<template>
  <div class="body">
    <div v-cloak class="content">
      <div class="main-card">
        <button @click="toggleShowMessage">
          {{ showMessage ? "hide" : "show" }} message
        </button>
        <p v-if="showMessage">{{ message }}</p>
        <p v-else>message is hidden</p>
        <ImageComponent :images="this.dogs" />
        <ImageComponent :images="this.cats" />
        <ReverseMessage />
        <router-link to="/">Go to Home</router-link>

      </div>
    </div>
  </div>
</template>

<script>
import image1 from "@/assets/images/doggo1.jpg";
import image2 from "@/assets/images/doggo2.jpg";
import image3 from "@/assets/images/doggo3.jpg";
import image4 from "@/assets/images/doggo4.jpg";
import image5 from "@/assets/images/cat1.jpg";
import image6 from "@/assets/images/cat2.jpg";

import ImageComponent from "./ImageComponent";
import ReverseMessage from "./ReverseMessage/ReverseMessage";

export default {
  name: "Home",
  components: {
    ImageComponent,
    ReverseMessage,
  },
  data: () => ({
    input: 0,
    dogs: [image1, image2, image3, image4],
    cats: [image5, image6],
    showMessage: false,
    message: "This is my message",
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
