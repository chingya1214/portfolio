<script setup>
import "bootstrap/dist/js/bootstrap.js";
</script>

<template>
  <div class="header">
    <nav class="navbar fixed-top navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">杜靜雅 ‧ 作品集</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/">首頁</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">簡介</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#skill">技能</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#works">作品集</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="banner"></div>
  </div>

  <div class="main">
    <!-- 渲染 route 的位置 -->
    <router-view></router-view>
  </div>

  <div class="footer">Designed by Chingya-Tu</div>
</template>

<style lang="scss" scoped>
.header {
  max-width: 100%;
  .nav-item {
    border-bottom: 3px solid transparent;
    transition: all 0.3s;
  }
  .nav-item:hover {
    color: #2e406f;
    border-bottom: 3px solid #2e406f;
    transition: all 0.3s;
  }
}

.navbar {
  padding: 20px 90px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.main {
  max-width: 100%;
}

.footer {
  width: 100%;
  padding: 10px;
  color: #dfdfdf;
  background-color: #2e406f;
  text-align: center;
  line-height: 2;
}

// @media screen and (max-width: 1320px) {
// }

// @media screen and (max-width: 960px) {
// }

// @media screen and (max-width: 720px) {
// }
</style>
