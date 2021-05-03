<template>
  <div class="body">
    <div v-cloak class="content">
      <div class="main-card">
        <div>
            {{ this.$route.params.productName }}
            {{ this.productDetails.productName }}
            <router-link to="/">Go to Home</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import anime from "animejs";
import { VueTyper } from "vue-typer";
import { mapGetters, mapActions } from "vuex";
import $ from "jquery";

export default {
  name: "Home",
  components: {
    VueTyper,

  },
  props: {
    product: Object,
  },
  mounted() {
    this.init();
    console.log(this.product);
    console.log(this.$route.params);
    this.productDetails = this.$route.params;
  },
  data: () => ({
    productDetails: undefined,
    input: 0,
    showMessage: false,
    typed: [`text1`, `text2`],
    titles: ["Python basic course", "Table of contents"],
    technologies: [
      "React",
      "Typescript",
      "MobX",
      "Jest",
      "Cypress",
      "styled-components (CSS-in-js)",
      "Storybook (Reusable UI components)",
    ],
  }),
  computed: {
    ...mapGetters(["getTyped"]),
  },
  methods: {
    ...mapActions(["setTyped", "clearTyped"]),
    init(reset = false) {
      if (reset === true) {
        this.clearTyped();
      }
      if (this.getTyped === false) {
        $(".main-card").css({ "max-height": "65px" });
      }
    },
    toggleShowMessage() {
      this.showMessage = !this.showMessage;
    },

    doneTyping() {
      setTimeout(() => {
        this.setTyped(true);
        $(".main-card").addClass("autoHeight");
        anime({
          targets: ".transition",
          opacity: 1,
          easing: "easeOutQuint",
          duration: 3000,
        });
      }, 1000);
      console.log("test");
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
