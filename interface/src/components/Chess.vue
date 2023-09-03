<template>
  <div class="main">
    <h1>Chess Move Calculator</h1>
    <div id="board1" style="width: 400px"></div>
      <Input :fenUpdate="fenUpdate" @newInput="updateFEN"/>
      <button class="chessButton">ChessEngine</button>
  </div>
</template>

<script setup>
import ChessBoard from "chessboardjs-vue3";
import Input from "./Input.vue"
import { ref, onMounted } from 'vue'

const fenUpdate = ref("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR");
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

.chessButton {
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #7B4CCC; 
  color: #fff; 
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease; 
  &:hover {
    background-color: #6941AF; 
  }
}
</style>