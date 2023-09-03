<template>
  <div>
    <RouterLink to="/"></RouterLink>
    <RouterView />
  </div>
</template>

<script>
import axios from 'axios'
const data = {
  command: "ls"
}
axios.post('http://localhost:8000/chessengine', data).then((res) => console.log(res.data))
</script>

<style>
</style>
