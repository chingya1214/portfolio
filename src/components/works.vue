<script setup></script>
<template>
  <div class="content">
    <ul class="works">
      <li class="works-item">
        <a href="#">
          <div class="img"><img src="@/assets/images/bg01.png" alt="" /></div>
          <div class="works-item-content">
            <h2>星際旅行訂票平台</h2>
            <p>悠遊宇宙的夢想，從這裡開始實現</p>
            <ul class="tags">
              <li class="tags-item">網頁設計</li>
              <li class="tags-item">響應式設計</li>
              <li class="tags-item">Bootstrap</li>
            </ul>
          </div>
        </a>
      </li>
      <li class="works-item">
        <a href="#">
          <div class="img"><img src="@/assets/images/bg01.png" alt="" /></div>
          <div class="works-item-content">
            <h2>理財App</h2>
            <p>連動帳戶與行動支付，讓 AI 提供您最好的理財建議</p>
            <ul class="tags">
              <li class="tags-item">APP設計</li>
              <li class="tags-item">iOS</li>
              <li class="tags-item">React</li>
            </ul>
          </div>
        </a>
      </li>
      <li class="works-item">
        <a href="#">
          <div class="img"><img src="@/assets/images/bg01.png" alt="" /></div>
          <div class="works-item-content">
            <h2>醫美診所官網</h2>
            <p>永保青春的秘密，從粹究開始</p>
            <ul class="tags">
              <li class="tags-item">網頁設計</li>
              <li class="tags-item">響應式設計</li>
              <li class="tags-item">ＷordPress</li>
            </ul>
          </div>
        </a>
      </li>
      <li class="works-item">
        <a href="#">
          <div class="img"><img src="@/assets/images/bg01.png" alt="" /></div>
          <div class="works-item-content">
            <h2>美美美早餐店 POS 機 UI Design</h2>
            <p>訂單送單一目瞭然，自動報表分析好輕鬆</p>
            <ul class="tags">
              <li class="tags-item">UI 設計</li>
              <li class="tags-item">前端開發</li>
              <li class="tags-item">Wix</li>
            </ul>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.content {
  padding: 20px 0px;
}
.works {
  max-width: 1296px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.works-item {
  /* background: rgb(183, 105, 105); */
  width: 50%;
  padding: 0 12px;
  margin-bottom: 80px;
  .img {
    width: 100%;
    height: 400px;
    border-radius: 8px;
    overflow: hidden;
  }
  img {
    width: 100%;
    transform: scale(1, 1);
    transition: all 0.3s ease-out;
  }
  &:hover {
    img {
      transform: scale(1.1, 1.1);
    }
    .works-item-content h2 {
      color: #4077cf;
    }
  }
}
.works-item-content {
  padding: 16px;
  h2 {
    color: #3b3b3b;
    font-size: 28px;
    font-weight: 700;
    line-height: 33.6px;
    margin-bottom: 8px;
    transition: all 0.3s ease-out;
  }
  p {
    color: #919191;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    margin-bottom: 24px;
  }
}
.tags {
  color: #3b3b3b;
  display: flex;
  &-item {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    background: #f1f1f1;
    padding: 4px 12px;
    margin-right: 16px;
    border-radius: 16px;
  }
}

@media screen and (max-width: 1320px) {
}

@media screen and (max-width: 960px) {
  .works-item {
    width: 100%;
  }
}

@media screen and (max-width: 720px) {
  .works-item {
    margin-bottom: 40px;
    .img {
      height: 220px;
    }
  }
  .tags {
    &-item {
      line-height: 18px;
      font-size: 14px;
    }
  }
}
</style>
