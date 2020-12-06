<template>
  <div id="app">
    <main>
      <Title/>
      <Setting/>
      <Grid/>
    </main>
    <Difficulty/>
    <Finish/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Grid from './components/Grid.vue';
import Title from './components/Title.vue';
import Setting from './components/Setting.vue';
import Difficulty from './components/Difficulty.vue';
import Timer from './components/Timer.vue';
import Finish from './components/Finish.vue';

@Component({
  components: {
    Grid,
    Title,
    Setting,
    Difficulty,
    Timer,
    Finish
  },
})
export default class App extends Vue {}
</script>

<style>
  * {
    margin: 0;
    box-sizing: border-box;
  }
  main {
    min-height: 100vh;
    overflow: auto;
  }
  #app {
    background: #161616;
  }
  .btn {
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
  .btn:hover {
    cursor: pointer;
    background: #232323;
  }
  .modal {
    display: none;
    position: absolute; 
    top: 0;
    height: 100vh;
    color: #fff;
    width: 100%;
    background-color:#000000a6;
    justify-content: center;
    align-items: center;
  }
  .show {
    display: flex;
  }
</style>
