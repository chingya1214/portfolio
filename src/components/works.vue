<script>
import { ref } from "vue";
export default {
  setup() {
    const works = ref([
      {
        title: "NCCUXDISA新移民網路市集",
        link: "https://nccuiixdisa.netlify.app/",
        img: "/images/works_nccuiixdisa.png",
        intr: "使用 HTML、CSS、Bootstrap 進行切版，實作響應式網站設計(RWD)",
        tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      },
      {
        title: "憂遇 When We Meet",
        link: "https://whenwemeet2022.netlify.app/",
        img: "/images/works_whenwemeet.png",
        intr: "透過動態圖像連結情緒，傳遞憂鬱與生活的距離。根據測驗結果了解憂鬱相關傾向程度，提供初步治療方向。",
        tags: ["Vue.js", "HTML", "SCSS", "JavaScript"],
      },
      {
        title: "保誠人壽保誠創新智造所",
        link: "https://chingya1214.github.io/pcalife/",
        img: "/images/works_pcalife.png",
        intr: "頁面切版包含提案說明、填寫資料、投票等功能，並使用 axios 進行 API 串接。",
        tags: ["Vue.js", "HTML", "CSS", "Bootstrap", "JavaScript", "Axios"],
      },
      {
        title: "東美銘牌工藝社",
        link: "https://tonmei.tw/index.html",
        img: "/images/works_tonmei.png",
        intr: "網站視覺版面設計，以php 建立後台及資料庫串接",
        tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
      },
      {
        title: "SOUL耳機 台灣官網",
        link: "https://www.i2tec.com/soul/soul/",
        img: "/images/works_soul.png",
        intr: "協助 SOUL 耳機台灣官網進行改版，重新製作網站頁面",
        tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "JSON"],
      },
    ]);
    const isShow = ref(false);
    const Open = () => (isShow.value = true);
    const Close = () => (isShow.value = false);
    return { isShow, Open, works, Close };
  },
};
</script>

<template>
  <div class="content">
    <!-- <ul class="filter-button">
      <li @click="Open">專案</li>
      <li @click="Change">切版</li>
    </ul> -->
    <ul class="works">
      <li class="works-item" v-for="item in works" :key="item.id">
        <a :href="item.link">
          <div class="img"><img :src="item.img" alt="" /></div>
          <div class="works-item-content">
            <h2>{{ item.title }}</h2>
            <p>{{ item.intr }}</p>
            <ul class="tags">
              <li class="tags-item" v-for="tag in item.tags" :key="tag.id">{{ tag }}</li>
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
    height: 300px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
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

.filter-button {
  list-style: none;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  gap: 20px;
  li {
    border: 3px solid #bacae3;
    background: #bacae3;
    border-radius: 18px;
    padding: 10px 20px;
    font-size: 18px;
    font-weight: 500;
    color: #ffffff;
    transition: all 0.3s ease-out;
    &:hover {
      background: #bacae3;
      color: #fcfcfc;
      cursor: pointer;
      transition: all 0.3s ease-out;
    }
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
