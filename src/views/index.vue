<script setup>
import About from "../components/about.vue";
import Skills from "../components/skill.vue";
import Works from "../components/works.vue";
</script>

<template>
  <div id="about" class="section">
    <h1>簡介</h1>
    <About />
  </div>

  <div id="skill" class="section section-full">
    <h1>技能</h1>
    <Skills class="section-full-item" />
  </div>

  <div id="works" class="section">
    <h1>作品集</h1>
    <Works />
  </div>
</template>

<style lang="scss" scoped>
h1 {
  text-align: center;
  margin: 15px auto;
}
/* h1::after {
  content: " ";
  width: 100px;
  height: 2px;
  border-bottom: 1px solid #000;
} */

.section {
  overflow: hidden;
  padding: 96px 0 24px 0; //top 72px is navbar
  margin: 0 auto;
  min-height: calc(100vh - 52px);
  width: 1296px;
  // background-color: rgb(102, 75, 75);
  &-full {
    width: 100%;
    background-attachment: fixed;
    background-image: url("@/assets/images/bg01.png");
    h1 {
      color: #fff;
    }
    &-item {
      width: 1296px;
      margin: 0 auto;
    }
  }
}

@media screen and (max-width: 1320px) {
  .section {
    width: 950px;
    &-full {
      width: 100%;
      &-item {
        width: 1100px;
      }
    }
  }
}

@media screen and (max-width: 960px) {
  .section {
    width: 700px;
    &-full {
      width: 100%;
      &-item {
        width: 700px;
      }
    }
  }
}

@media screen and (max-width: 720px) {
  .section {
    width: 375px;
    &-full {
      width: 100%;
      &-item {
        width: 375px;
      }
    }
  }
}
</style>
