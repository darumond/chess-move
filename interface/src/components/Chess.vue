<template>
<div class="main">
    <h1>Chess Move Calculator</h1>
    <div id="board1" style="width: 400px"></div>
    <input
      @input=chessboard.position(fenUpdate);
      type="text"
      v-model="fenUpdate"
    />
  </div>
</template>

<script setup>
import ChessBoard from "chessboardjs-vue3";
import { ref, onMounted } from 'vue'

const fenUpdate = ref("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR");
const config = {
  position: fenUpdate.value,
  draggable: true,
  onChange: (oldPos, newPos) => {
    fenUpdate.value = Chessboard.objToFen(newPos);
  }
}
let chessboard;
onMounted(() => {
  chessboard = ChessBoard('#board1', config);
});

</script>

<style>
.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>