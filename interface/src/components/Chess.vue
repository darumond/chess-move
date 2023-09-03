<template>
  <div class="main">
    <h1 class="title">Chess Move Calculator</h1>
    <div id="board1" style="width: 400px"></div>
      <span class="fenTitle">FEN</span>
      <Input :fenUpdate="fenUpdate" @newInput="updateFEN"/>
      <ChessEngineButton :fenUpdate="fenUpdate"/>
  </div>
</template>

<script setup>
import ChessBoard from "chessboardjs-vue3";
import Input from "./Input.vue"
import ChessEngineButton from './ChessEngineButton.vue'
import { ref, onMounted } from 'vue'

const fenUpdate = ref("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1 1");
const config = {
  position: fenUpdate.value,
  draggable: true,
  onChange: (oldPos, newPos) => {
    const parse = parseFen();
    fenUpdate.value = Chessboard.objToFen(newPos);
    fenUpdate.value += ' ' + parse;
  }
}
let chessboard;
onMounted(() => {
  chessboard = ChessBoard('#board1', config);
});

const updateFEN = (fen) => {
  fenUpdate.value = fen;
  chessboard.position(fen)
}

const parseFen = () => {
  const fenParts = fenUpdate.value.split(' ');
  if (fenParts.length > 1) {
    return fenParts.slice(1).join(' ');
  }
  return '';
}
</script>

<style>
.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title {
  color: white;
  font-weight: bolder;
  font-size: 44px;
}

.fenTitle{
  color: white;
  margin-top: 20px;
  font-weight: 800;
}

</style>