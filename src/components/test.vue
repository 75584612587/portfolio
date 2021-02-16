<template>
  <div class="body">
    <div v-cloak class="content">
      <div class="main-card">


        <div>
          <div class="title transition">
           
  
            <vue-typer v-if="getTyped" class="typer" :text="titles"></vue-typer>
          </div>
          <table class="auto-style13" style="width: 100%; font-size: 12pt; font-family: 微軟正黑體;">
          <tbody>
          <tr style="height: 48.0625px;">
          <td class="auto-style12" style="border: 2px #000000 solid; text-align: center; width: 474px;"><span style="font-weight: bold;">課程主題</span></td>
          <td class="auto-style14" style="text-align: center; border: 2px #000000 solid;"><strong>課程內容</strong></td>
          </tr>
          <tr class="auto-style5">
          <td class="auto-style15" style="text-align: center; height: 9px; border: 2px #000000 solid; width: 474px;">&lt;基礎語法篇&gt; 基本元素</td>
          <td class="auto-style15" style="height: 9px; border: 2px #000000 solid;">
          <p style="padding-left: 30px;">。Python簡介 <br> 。程式編輯器Spyder<br> 。變數命名<br> 。資料型別 <br> 。運算子 <br> 。資料儲存器</p>
          </td>
          </tr>
          <tr class="auto-style5">
          <td class="auto-style15" style="text-align: center; height: 8px; border: 2px #000000 solid; width: 474px;">&lt;基礎語法篇&gt; 選擇結構&nbsp;&nbsp;&nbsp;</td>
          <td class="auto-style15" style="height: 8px; border: 2px #000000 solid;">
          <p style="padding-left: 30px;">。單向選擇結構 <br> &nbsp; –if 條件判斷 <br> 。雙向選擇結構 <br> &nbsp;– if ... else 條件判斷<br> 。多向選擇結構 <br> &nbsp;– if ... elif ... else 條件判斷 <br> 。條件判斷 <br> &nbsp;–條件判斷與in資料容器</p>
          </td>
          </tr>
          <tr class="auto-style5">
          <td class="auto-style15" style="text-align: center; border: 2px #000000 solid; height: 105px; width: 474px;">&lt;基礎語法篇&gt; 迴圏&nbsp;&nbsp;&nbsp;</td>
          <td class="auto-style15" style="border: 2px #000000 solid; height: 105px;">
          <p class="auto-style7" style="padding-left: 30px;">。迴圏結構 <br> &nbsp; – for 迴圏 <br> &nbsp; – while 迴圏 <br> 。巢狀迴圏 <br> &nbsp; –&nbsp;條件判斷 <br> 。生成式 <br> &nbsp; – 串列生成式 <br> &nbsp; –&nbsp; 字典生成式 <br> &nbsp; –&nbsp; 集合生成式 <br> &nbsp; –&nbsp;產生器</p>
          </td>
          </tr>
          <tr class="auto-style5">
          <td class="auto-style15" style="text-align: center; border: 2px #000000 solid; width: 474px;">&lt;基礎語法篇&gt;函式</td>
          <td class="auto-style15" style="border: 2px #000000 solid;">
          <p style="padding-left: 30px;">。函式輸入與輸出 <br> &nbsp; – 無輸入值 <br> &nbsp; –單一輸入值 <br> &nbsp; –多項輸入值 <br> 。函式回傳值 <br> &nbsp; –&nbsp;單一回傳值 <br> &nbsp; –多項回傳值 <br> 。函式呼叫 <br> &nbsp; –主程式呼叫 <br> &nbsp; – 副程式呼叫 <br> 。產生器 遞迴</p>
          </td>
          </tr>
          <tr class="auto-style5">
          <td class="auto-style15" style="text-align: center; border: 2px #000000 solid; width: 474px;">&lt;外掛篇&gt; 圖形介面</td>
          <td class="auto-style15" style="border: 2px #000000 solid;">
          <p style="padding-left: 30px;">。圖形介面 <br> 。 tkinter模組 <br> &nbsp; – 主視窗 <br> &nbsp; –按鈕 <br> &nbsp; – 文字輸入框 <br> &nbsp; – 標籤 <br> 。回應訊息 <br> 。產生執行檔exe</p>
          </td>
          </tr>
          <tr class="auto-style5">
          <td class="auto-style15" style="text-align: center; border: 2px #000000 solid; width: 474px;">&lt;外掛篇&gt;模組、套件、獨立程式</td>
          <td class="auto-style15" style="border: 2px #000000 solid;">
          <p style="padding-left: 30px;">。numpy <br> 。Scikit-learn<br> 。Scipy <br> 。Pillow <br> 。PyQt <br> 。Pyglet</p>
          </td>
          </tr>
          <tr class="auto-style5">
          <td class="auto-style15" style="text-align: center; border: 2px #000000 solid; width: 474px;">&lt;進階語法篇&gt;類別與例外</td>
          <td class="auto-style15" style="border: 2px #000000 solid;">
          <p style="padding-left: 30px;">。類別<br> 。例外</p>
          </td>
          </tr>
          <tr class="auto-style5">
          <td class="auto-style15" style="text-align: center; border: 2px #000000 solid; width: 474px;">&lt;進階語法篇&gt;字串處理&nbsp;&nbsp;</td>
          <td class="auto-style15" style="border: 2px #000000 solid;">
          <p style="padding-left: 30px;">。ASCII編碼 <br> 。Unicode編碼 <br> 。正規表達式</p>
          </td>
          </tr>
          <tr class="auto-style5">
          <td class="auto-style15" style="text-align: center; border: 2px #000000 solid; width: 474px;">&lt;外掛篇&gt; 資料檔案存取</td>
          <td class="auto-style15" style="border: 2px #000000 solid;">
          <p style="padding-left: 30px;">。資料檔案處理 <br> &nbsp; –找磁碟路徑下的檔案 <br> &nbsp; –串列生成式找路徑下的檔案<br> 。存取文字檔 <br> &nbsp; –for迴圏讀取文字檔 <br> &nbsp; – 以文字寫入檔案 <br> &nbsp; – 拷貝檔案 <br> 。存取csv檔案 <br> &nbsp; –&nbsp;讀取與寫入csv檔案</p>
          </td>
          </tr>
          <tr class="auto-style5">
          <td class="auto-style15" style="text-align: center; border: 2px #000000 solid; width: 474px;">&lt;外掛篇&gt; 標準函式庫&nbsp;&nbsp;</td>
          <td class="auto-style15" style="border: 2px #000000 solid;">
          <p style="padding-left: 30px;">。時間函式庫 <br> 。疊代函式庫<br> 。作業系統模組</p>
          </td>
          </tr>
          <tr class="auto-style5">
          <td class="auto-style15" style="text-align: center; border: 2px #000000 solid; width: 474px;">&lt;應用篇&gt; 網頁爬蟲&nbsp;</td>
          <td class="auto-style15" style="border: 2px #000000 solid;">
          <p style="padding-left: 30px;">。HTML語法 <br> 。Requests套件 <br> 。BeautifulSoup套件 <br> 。網頁資料下載</p>
          </td>
          </tr>
          <tr class="auto-style5">
          <td class="auto-style15" style="text-align: center; border: 2px #000000 solid; width: 474px;">&lt;應用篇&gt; 商務數據分析</td>
          <td class="auto-style15" style="border: 2px #000000 solid;">
          <p style="padding-left: 30px;">。Pandas套件 <br> 。資料分析<br> 。Matplotlib套件 <br> 。視覺化圖表</p>
          </td>
          </tr>
          <tr class="auto-style5">
          <td class="auto-style15" style="text-align: center; border: 2px #000000 solid; width: 474px;">&lt;應用篇&gt; 金融科技</td>
          <td class="auto-style15" style="border: 2px #000000 solid;">
          <p style="padding-left: 30px;">。資產收益率和風險 <br> 。投資組合<br> 。配對交易 <br> 。K線圖 <br> 。動量交易<br> 。均線系統 <br> 。隨機指標交易 <br> 。量價關係</p>
          </td>
          </tr>
          <tr class="auto-style5">
          <td class="auto-style15" style="text-align: center; border: 2px #000000 solid; width: 474px;">&lt;應用篇&gt; 自然語言處理</td>
          <td class="auto-style15" style="border: 2px #000000 solid;">
          <p style="padding-left: 30px;">。文字向量表示法 <br> 。自然語言文句處理 <br> 。情感分析</p>
          </td>
          </tr>
          <tr class="auto-style5">
          <td style="text-align: center; border: 2px #000000 solid;" colspan="2">&lt;應用篇&gt;專題製作 <br> 職場講座<br> &nbsp;模擬面試<br> &lt;應用篇&gt;成果發表會</td>
          </tr>
          </tbody>
          </table>
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
import anime from "animejs";
import { VueTyper } from "vue-typer";
import { mapGetters, mapActions } from "vuex";
import $ from "jquery";

export default {
  name: "Test",
  components: {
    VueTyper,
  },
  mounted() {
    this.init();
  },
  data: () => ({
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
}
</style>
