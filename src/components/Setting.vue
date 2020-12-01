<template>
  <div class="setting-container">
    <div class="difficulty">
      <p>Difficulty</p>
    </div>
    <div class="game-status-container">
      <div class="game-status">
        <div class="header">Dimension</div>
        <div class="value">4 X 4</div>
      </div>
      <div class="game-status">
        <div class="header">Bombs</div>
        <div class="value">5</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class Setting extends Vue {
}
</script>

<style scoped>
  .setting-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
  }
  .difficulty {
    width: 125px;
    background: #161616;
    color: #e7e7e7;
    border: 2px solid #282828;
    padding: .25rem 2rem;
    text-align: center;
    border-radius: 20px;
    margin: auto;
    transition: all 250ms;
    margin-bottom: 1rem;
  }
  .difficulty:hover {
    cursor: pointer;
    background: #232323;
  }
  .game-status-container {
    display: flex;
  }
  .game-status {
    background: #161616;
    color: #e7e7e7;
    border: 2px solid #282828;
    text-align: center;
    padding: 0.5rem;
    margin: 0 0.25rem;
    width: 100px;
  }
</style>