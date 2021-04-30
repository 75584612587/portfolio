<template>
  <div class="body">
    <div v-cloak class="content">
      <div class="main-card">
        <vue-typer
          v-if="!getTyped"
          class="typer"
          :text="typed"
          :repeat="0"
          @completed="doneTyping"
        ></vue-typer>

        <div v-show="getTyped">
          <div class="title transition">
            <div align="center">
            <iframe
              align="center"
              src="//widget.calendarlabs.com/v1/quot.php?cid=101&ver=1.2&uid=6374069494&c=random&l=en&cbg=000000&cb=2&cbc=FFFFFF&cf=calibri&cfg=FFFFFF&qfs=bi&qta=right&tfg=FFFFFF&tfs=bi&afc=FFFFFF&afs=i"
              width="188"
              height="210"
              marginwidth="0"
              marginheight="0"
              frameborder="0"
              scrolling="no"
              allowtransparency="true"
              >Loading...</iframe
            >

          </div>
            <div>
              <img class="profile" src="" />
            </div>
            <vue-typer v-if="getTyped" class="typer" :text="titles"></vue-typer>
          </div>
          <router-link to="/test">Test Page
          </router-link>
        
          <p class="transition">
            text2
            <a href="text2" class="bold" target="_blank">asdf</a>. text3
            <span class="bold">text</span> text
            <span
              v-for="(technology, index) in technologies"
              :key="technology"
              class="bold"
            >
              {{ technology
              }}<template v-if="index < technologies.length - 1">,</template
              ><template v-else>.</template>
            </span>
          </p>

          <button @click="toggleShowMessage">{{showMessage?"hide":"show"}} message</button>
          <p v-if="showMessage"> {{ message }} </p>
          <p v-else>message is hidden</p>

          <div class="image-container">
            <img :key="dog" v-for="dog in dogs" :src="dog" height="400" width="50%"/>
          </div>
          <div>enter a number to multiple by 2</div>
          <input v-model="input">
          {{ input * 2}}
          <div class="flex-center social">
            <a href="text" target="_blank"
              ><i class="fa fa-github fa-3x hover" aria-hidden="true"
            /></a>
            <a href="text" target="_blank"
              ><i class="fa fa-linkedin-square fa-3x hover" aria-hidden="true"
            /></a>
          </div>
          <div>
            <div class="small">
              text
              <a @click.stop.prevent="init(true)" href="">click here </a>text
            </div>
          </div>
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
import image1 from "../../static/images/doggo1.jpg";
import image2 from "../../static/images/doggo2.jpg";
import image3 from "../../static/images/doggo3.jpg";
import image4 from "../../static/images/doggo4.jpg";

export default {
  name: "Home",
  components: {
    VueTyper,
  },
  mounted() {
    this.init();
  },
  data: () => ({
    input: 0,
    dogs: [image1, image2, image3, image4],
    showMessage: false,
    message: 'This is my message',
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
      this.showMessage = !this.showMessage
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
  width: 1000px;
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

.content {
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

.image-container {
  display:flex;
  flex-wrap: wrap;
}
</style>
