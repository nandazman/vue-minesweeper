<template>
  <div class="container">
    <p class="title">Minesweeper!</p>
    <div class="logo"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Title extends Vue {
}
</script>

<style scoped>
  .container {
    display: flex; 
    justify-content: center;
    margin: 2rem 0 1rem;
  }
  .title {
    margin: 0;
    line-height: 40px;
    font-size: 2rem;
    color: white;
  }

  .logo {
    background: url('../assets/bomb.svg');
    height: 40px;
    width: 40px;
    background-repeat: no-repeat;
    background-position: center;
  }
</style>