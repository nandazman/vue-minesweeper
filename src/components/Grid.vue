<template>
  <div class="grid">
    <div class="row" v-for="(rows, rowIndex) in grids" :key="rowIndex">
      <div class="col" v-for="(value, colIndex) in rows" :key="colIndex">
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
      grids: 'grid/getGrids'
    })
  },
  methods: {
    ...mapActions('grid', ['setGrid'])
  }
})
export default class Grid extends Vue {
  setGrid!: () => void;

  created() {
    this.setGrid();
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
    background: #7b7b7b;
    border: 1px solid hsla(0,0%,100%,.12);
    box-shadow: 0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)!important;
    border-radius: 4px;
  }
  .col:hover {
    cursor: pointer;
    background: #808080a6;
  }
</style>