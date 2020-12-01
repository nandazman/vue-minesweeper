<template>
  <div id="app">
    <main>
      <Title/>
      <Setting/>
      <Grid/>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Grid from './components/Grid.vue';
import Title from './components/Title.vue';
import Setting from './components/Setting.vue';

@Component({
  components: {
    Grid,
    Title,
    Setting
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
</style>
