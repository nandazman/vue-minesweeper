<template>
  <div class="modal" :class="{ show: gameStatus === loseStatus || gameStatus === winStatus }">
    <div class="content">
      <h2 class="message" v-if="gameStatus === loseStatus">You Lose!</h2>
      <h2 class="message" v-else>You Win!</h2>
      <div class="action">
        <p class="btn" @click="hideAllCell();startGame();">Play Again</p>
        <p class="btn" @click="stopGame();setEmptyGrid();">New Game</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters, mapActions } from 'vuex';
import { gameStatus } from '@/model/game';

@Component({
  computed: {
    ...mapGetters({
      gameStatus: 'game/getGameState'
    })
  },
  methods: {
    ...mapActions('grid', ['setEmptyGrid', 'hideAllCell']),
    ...mapActions('game', ['startGame', 'stopGame'])
  }
})
export default class Finish extends Vue {
  private loseStatus = gameStatus.LOSE;
  private winStatus = gameStatus.WIN;
}
</script>

<style scoped>
  .message {
    margin-bottom: 3rem;
    text-align: center;
  }
  .action {
    display: flex;
  }
  .btn {
    margin: 0 1rem;
  }
</style>