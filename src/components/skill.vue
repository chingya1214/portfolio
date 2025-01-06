<script setup></script>
<template>
  <div class="content">
    <div id="skill" class="skill">
      <div class="skill-item">
        <h3 class="skill-subtitle">Document Processing</h3>
        <ul class="skill-list">
          <li class="skill-list-item">Notion / JIRA</li>
          <li class="skill-list-item">Figma / Zeplin</li>
          <li class="skill-list-item"></li>
          <li class="skill-list-item">Confluence</li>
          <li class="skill-list-item">Slack</li>
          <li class="skill-list-item">PowerPoint / Word</li>
        </ul>
      </div>
      <div class="skill-item">
        <h3 class="skill-subtitle">Web Development</h3>
        <ul class="skill-list">
          <li class="skill-list-item">HTML5</li>
          <li class="skill-list-item">CSS3 &amp; SCSS</li>
          <li class="skill-list-item">JavaScript</li>
          <li class="skill-list-item">TypeScript</li>
          <li class="skill-list-item">Webpack</li>
          <li class="skill-list-item">Npm &amp; Yarn</li>
          <li class="skill-list-item">Ruby on Rails</li>
          <li class="skill-list-item">Antd &amp; Bootstrap</li>
          <li class="skill-list-item">Eslint</li>
          <li class="skill-list-item">React &amp; hooks</li>
          <li class="skill-list-item">React Native</li>
          <li class="skill-list-item">Redux</li>
          <li class="skill-list-item">MobX / MST</li>
          <li class="skill-list-item">Styled-components</li>
          <li class="skill-list-item">Tailwind CSS</li>
          <li class="skill-list-item">Emotion</li>
          <li class="skill-list-item">Webview</li>
          <li class="skill-list-item">GraphQL</li>
          <li class="skill-list-item">Jest</li>
          <li class="skill-list-item">Git Flow</li>
        </ul>
      </div>
      <div class="skill-item">
        <h3 class="skill-subtitle">Language</h3>
        <ul class="skill-list">
          <li class="skill-list-item">Chinese</li>
          <li class="skill-list-item">Taiwanese</li>
          <li class="skill-list-item">English</li>
          <li class="skill-list-item">Korean</li>
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
  &-item {
    width: 32%;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    h3 {
      margin-bottom: 20px;
      font-size: 28px;
      text-align: center;
      color: rgb(22, 66, 97);
      font-weight: 700;
    }
    ul {
      list-style-type: none;
      li {
        margin-bottom: 5px;
        text-align: center;
      }
    }
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
