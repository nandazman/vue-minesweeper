<template>
  <div class="modal" :class="{ show }">
    <div class="content">
      <h2 class="title">Difficulty</h2>
      <div class="options">
        <p class="btn difficulty" 
        v-for="(difficultyType, index) in difficulties" :key="index" 
        v-bind:class="{ active: difficulty === difficultyType }" @click="updateDifficulty(difficultyType)">
          {{difficultyType}}
        </p>
      </div>
      <div class="form">
        <div class="form-group">
          <label for="columns">Columns</label>
          <input type="text" class="form-control" id="columns" placeholder="columns" v-model="columns" :disabled="difficulty !== 'custom'"  autocomplete="off">
        </div>
        <div class="form-group">
          <label for="rows">Rows</label>
          <input type="text" class="form-control" id="rows" placeholder="rows" v-model="rows" :disabled="difficulty !== 'custom'"  autocomplete="off">
        </div>
        <div class="form-group">
          <label for="bombs">Bombs</label>
          <input type="text" class="form-control" id="bombs" placeholder="bombs" v-model="bombs" :disabled="difficulty !== 'custom'"  autocomplete="off">
        </div>
      </div>
      <div class="actions">
        <p class="btn" @click="toggleSetting">
          Cancel
        </p>
        <p class="btn" @click="initSetDifficulty">
          Start
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {  mapActions, mapGetters } from 'vuex';
import { Gameplay, Difficultes, difficulty } from '@/model/grid';

@Component({
  computed: {
    ...mapGetters({
      show: 'setting/getDisplayStatus'
    })
  },
  methods: {
    ...mapActions('grid', ['setDifficulty']),
    ...mapActions('setting', ['toggleSetting']),
    ...mapActions('game', ['stopGame'])
  }
})
export default class Difficulty extends Vue {
  private difficulties = ['easy', 'medium', 'hard', 'custom'];
  private rows = this.$store.state.grid.rows;
  private columns = this.$store.state.grid.columns;
  private bombs = this.$store.state.grid.bombs;
  private difficulty = this.$store.state.grid.difficulty;
  
  setDifficulty!: (data: { difficultyType: Difficultes; updatedGameplay?: Gameplay}) => void;
  toggleSetting!: () => void;
  stopGame!: () => void;

  initSetDifficulty() {
    let updatedGameplay: Gameplay | undefined;
    const difficultyType = this.difficulty;

    if (difficultyType === 'custom') {
      updatedGameplay = {
        columns: this.columns,
        rows: this.rows,
        bombs: this.bombs
      }
    }
    
    this.setDifficulty({difficultyType, updatedGameplay});
    this.updateSettingFromStore();
    this.toggleSetting();
    this.stopGame();
  }

  updateSettingFromStore() {
    this.rows = this.$store.state.grid.rows;
    this.columns = this.$store.state.grid.columns;
    this.bombs = this.$store.state.grid.bombs;
  }

  updateDifficulty(difficultyType: Difficultes) {
    this.difficulty = difficultyType;
    if (difficultyType !== 'custom') {
      this.rows = difficulty[difficultyType].rows;
      this.columns = difficulty[difficultyType].columns;
      this.bombs = difficulty[difficultyType].bombs;
    }
  }
}
</script>

<style scoped>
  .content {
    width: 400px;
    height: 400px;
    background: #161616;
    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19);
    padding: 1rem;
    border-radius: 5px;

  }
  .title {
    text-align: center;
    font-weight: normal;
    margin-bottom: 1rem;
  }
  .options {
    display: flex;
    flex-wrap: wrap;
  }
  .difficulty {
    text-transform: capitalize;
  }
  .active {
    background: #232323;
  }

  .form {
    padding: 1rem;
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .form-group {
    display: flex;
    line-height: 1.5;
    margin: .55rem;
  }

  label {
    width: 100px;
    padding: .375rem .75rem;
  }

  .form-control {
    width: 70px;
    padding: .375rem .75rem;
    font-size: 1rem;
    color: #fff;
    background-color:  #232323;
    background-clip: padding-box;
    border: 1px solid #282828;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }

  .form-control:focus {
    border-color: #282828;
    outline: 0;
    box-shadow: 0 0 0 0.2rem #232323;
  }

  .form-control:disabled {
    color: #495057;
  }

  .actions {
    display: flex;
  }
</style>