<template>
  <div class="main">
    <h1>Chess Move Calculator</h1>
    <div id="board1" style="width: 400px"></div>
    <!-- <textarea cols="38" @change="getPosition">
{{ fenUpdate }}
</textarea> -->
<input type="text" v-model="fenUpdate" @input="getPosition"/>
    <button @click="getPosition">Get Position</button>
  </div>
</template>

<script>
import ChessBoard from "chessboardjs-vue3";
import { RouterLink } from "vue-router";
import { computed, reactive, ref, watch } from 'vue'

const fenUpdate = ref("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR");

function onChange (oldPos, newPos) {
  fenUpdate.value = Chessboard.objToFen(newPos);
}
const config = {
  position: fenUpdate.value,
  draggable: true,
  onChange: onChange,
}
let res;
let test;
export default {
  data() {
    return {
      getPosition: getPosition,
      fenUpdate: fenUpdate,
      res: res,
    };
  },
  mounted() {
    res = ChessBoard('board1', config);
  },
  
}
const getPosition = () => {
  console.log(res.fen());
  console.log(fenUpdate.value);
  res.position(fenUpdate.value);
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
</style>
