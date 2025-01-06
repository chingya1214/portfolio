<script setup></script>
<template>
  <div class="content">
    <div class="about row align-items-center">
      <div class="col-12 col-md-4"><img src="@/assets/images/about_img.png" alt="" /></div>
      <div class="col-12 col-md-8">
        <p class="about-mark">Nice to Meet You</p>
        <p>我是 杜靜雅 Ching-Ya, Tu</p>
        <p>
          對於學習新技術和解決問題有極大的熱忱，遇到問題時會思考不同的解法。<br />
          具有獨立開發之經驗，亦善於跨領域人才的溝通合作，擅長在團隊中有效溝通。
        </p>
        <p>
          注重排版的細節與美感，也喜愛運用程式呈現出排版的樣貌，<br />
          而將設計排版與科技結合的前端工程師，實現美觀、耐用又有趣的網頁，會是我持續邁進的目標。
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.about {
  padding: 40px 20px 40px 20px;
  img {
    border-radius: 50%;
    padding: 20px;
  }
  p {
    line-height: 1.5;
    font-weight: bold;
    margin-bottom: 1.2rem;
    padding: 0 40px;
  }
  .about-mark {
    font-size: 1.8rem;
    color: rgb(125, 168, 194);
    font-weight: bold;
    margin-top: 0.8rem;
    margin-bottom: 0.8rem;
  }
}

@media screen and (max-width: 720px) {
  .about {
    img {
      border-radius: 50%;
      padding: 20px;
    }
    p {
      padding: 0;
    }
    .about-mark {
      margin-top: 0.8rem;
    }
  }
}
</style>
