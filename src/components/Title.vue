<template>
  <div class="container">
    <p class="title">Minesweeper!</p>
    <img alt="Vue logo" src="../assets/bomb.svg">
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
  img {
    height: 40px;
    width: 40px;
  }
</style>