<template>
  <div class="body">
    <div v-cloak class="content">
      <div class="main-card">


        <div>
          <div class="title transition">
           
  
            <vue-typer v-if="getTyped" class="typer" :text="titles"></vue-typer>
          </div>
          <iframe src="https://trinket.io/embed/python/778047b5f8" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
          <router-link to="/">Home page
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
          <p>text</p>
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
export default {
  name: "Test",
  data: () => ({
    typed: [`text1`, `text2`],
    titles: ["Python basic course", "Table of contents"],
  }),
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
}
</style>
