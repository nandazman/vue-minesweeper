<template>
  <div class="grid">
    <div class="row" v-for="(rows, rowIndex) in grids" :key="rowIndex">
      <div class="col" :class="{ reveal: col.reveal }" v-for="(col, colIndex) in rows" :key="colIndex" @click="initRevealGrid(colIndex, rowIndex); checkWin()">
        <span v-if="col.reveal && col.value" :class="{ bomb: col.value === 'X' }">{{col.value === 'X' ? '' : col.value}}</span>
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
      grids: 'grid/getGrids',
      gameRunning: 'game/getGameState'
    })
  },
  methods: {
    ...mapActions('grid', ['setEmptyGrid', 'revealGrid', 'checkWin']),
    ...mapActions('game', ['startGame'])
  }
})
export default class Grid extends Vue {
  setEmptyGrid!: () => void;
  startGame!: () => void;
  revealGrid!: ({ col, row}: { col: number; row: number}) => void;
  gameRunning!: boolean;

  initRevealGrid(col: number, row: number): void {
    this.revealGrid({col, row});
    if (!this.gameRunning) {
      this.startGame();
    }
  }

  created() {
    this.setEmptyGrid();
  }

}
</script>

<style scoped>
  .grid {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .row {
    display: flex;
  }
  .col {
    width: 32px;
    height: 32px;
    background: #1b1b1b;
    border: 1px solid hsla(0,0%,100%,.12);
    box-shadow: 0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)!important;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background 250ms;
  }
  .col:hover {
    cursor: pointer;
    background: #3e3e3e78;
  }
  .reveal {
    border: none;
    background: #2b2b2b;
    color: #fff;
  }
  .bomb {
    background: url('../assets/bomb.svg');
    height: 25px;
    width: 25px;
    background-repeat: no-repeat;
    background-position: center;
  }
</style>