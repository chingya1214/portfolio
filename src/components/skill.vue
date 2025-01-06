<script setup></script>
<template>
  <div class="content">
    <div class="skill">
      <div class="skill-item">
        <h3 class="skill-subtitle">網站切版 Web / Layout</h3>
        <p>能依照設計師的設計稿切出版型，並進行響應式（RWD）網頁設計。</p>
        <ul class="skill-list">
          <li class="skill-list-item">熟悉 HTML5 / CSS3 網站設計</li>
          <li class="skill-list-item">手刻 RWD 響應式網站</li>
          <li class="skill-list-item">具 Bootstrap 使用經驗</li>
          <li class="skill-list-item">使用 SCSS 管理屬性</li>
        </ul>
      </div>
      <div class="skill-item">
        <h3 class="skill-subtitle">網頁開發 Vue / JavaScript</h3>
        <p>了解 JavaScript 基本語法與 ES6 常見特性，能使用 Vue.js 進行網頁開發，能進行 API 串接資料。</p>
        <ul class="skill-list">
          <li class="skill-list-item">使用 components 元件切版</li>
          <li class="skill-list-item">使用 Vue-router 路由配置</li>
          <li class="skill-list-item">了解 JavaScript 基本語與 ES6 語言特性</li>
          <li class="skill-list-item">熟悉 Axios / JSON 串接第三方 API</li>
          <li class="skill-list-item">具使用 Vite 進行 Vue 專案開發經驗</li>
        </ul>
      </div>
      <div class="skill-item">
        <h3 class="skill-subtitle">美編排版及美術設計</h3>
        <p>擅長美編排版，能設計具美感的視覺作品；擅長使用電腦繪圖軟體進行設計，具有修圖、合成等能力及經驗。</p>
        <ul class="skill-list">
          <li class="skill-list-item">Figma</li>
          <li class="skill-list-item">Adobe Photoshop</li>
          <li class="skill-list-item">Adobe Illustrator</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.content {
  padding: 20px 0px 70px 0px;
}

.skill {
  display: flex;
  flex-wrap: nowrap;
  gap: 30px;
  justify-content: space-between;
  padding: 0 10px;
  line-height: 1.5;
  &-item {
    width: 32%;
    padding: 20px 30px;
    background-color: #f5f5f5;
    border-radius: 10px;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
    transition: all 0.3s;
    h3 {
      margin-bottom: 20px;
      font-size: 28px;
      text-align: center;
      color: rgb(22, 66, 97);
      font-weight: 700;
    }
    p {
      margin-bottom: 20px;
    }
    ul {
      list-style-type: disc;
      li {
        margin-left: 25px;
        margin-bottom: 5px;
        // text-align: center;
      }
    }
  }
  &-item:hover {
    box-shadow: 1px 3px 24px rgba(0, 0, 0, 0.7);
    transition: all 0.3s;
  }
}

@media screen and (max-width: 1320px) {
  .skill {
    flex-wrap: wrap;
    &-item {
      width: 50%;
      margin: 0 auto;
    }
  }
}

@media screen and (max-width: 960px) {
  .skill {
    flex-wrap: wrap;
    &-item {
      width: 100%;
    }
  }
}

@media screen and (max-width: 720px) {
}
</style>
