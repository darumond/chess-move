<template>
  <div id="board1" style="width: 400px"></div>
</template>

<script>
import ChessBoard from "chessboardjs-vue3";
const ruyLopez = 'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R'
const config = {
  position: 'start',
  draggable: true,
}
export default {
  mounted() {
    ChessBoard('board1', config);
  }

}
</script>