<template>
  <div class="setting-container">
    <div class="btn" @click="toggleSetting">
      <p>Difficulty</p>
    </div>
    <div class="game-status-container">
      <div class="game-status">
        <div class="header">Dimension</div>
        <div class="value">{{columns}} X {{rows}}</div>
      </div>
      <div class="game-status">
        <div class="header">Bombs</div>
        <div class="value">{{bombs}}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters, mapActions } from 'vuex';
@Component({
  computed: {
    ...mapGetters({
      columns: 'grid/getColumnLength',
      rows: 'grid/getRowLength',
      bombs: 'grid/getBombs'
    })
  },
  methods: {
    ...mapActions('setting', ['toggleSetting'])
  }
})
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