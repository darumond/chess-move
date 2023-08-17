<template>
    <div id="chessboard"></div>
  </template>
  
  <script>
  import ChessBoard from "chessboardjs-vue";
  
  export default {
    name: "Chessboard",
    mounted() {
      new ChessBoard("#chessboard");
    }
  };
  </script>