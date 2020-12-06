<template>
  <div class="container">
    <p class="title">Time</p>
    <p class="timer"></p>
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
    margin-bottom: 2rem;
  }
  .title {
    margin: 0;
    line-height: 40px;
    font-size: 1.5rem;
    color: white;
  }
</style>