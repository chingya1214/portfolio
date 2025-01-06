<script setup></script>
<template>
  <div class="section">
    <h1>404</h1>
    <p>
      您要訪問的頁面不存在，由此
      <router-link to="/">返回首頁</router-link>
    </p>
  </div>
</template>
<style lang="scss" scoped>
.section {
  overflow: hidden;
  padding: 96px 0 24px 0; //top 72px is navbar
  margin: 0 auto;
  min-height: calc(100vh - 52px);
  width: 1296px;
  h1 {
    font-size: 160px;
    text-align: center;
    margin: 30px auto;
  }
  p {
    text-align: center;
    margin: 30px auto;
  }
}

@media screen and (max-width: 1320px) {
  .section {
    width: 950px;
  }
}
@media screen and (max-width: 960px) {
  .section {
    width: 700px;
  }
}

@media screen and (max-width: 720px) {
  .section {
    width: 375px;
  }
}
</style>
