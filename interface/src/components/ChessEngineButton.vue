<template>
    <button @click="handleChessEngine" class="chessButton">ChessEngine</button>
    <div class="bigRectangle">
        <div v-if="loading" class="loading-animation"></div>
        <div v-else>{{ result }}</div>
    </div>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'
const props = defineProps({
    fenUpdate: {
        type: String,
        required: true,
    }
})

const loading = ref(false);

const result = ref(0);

const handleChessEngine = () => {
    loading.value = true;
    const data = {
        command: `echo ${props.fenUpdate} > fen.perft && ./chessengine --perft fen.perft && rm fen.perft`
    }
    axios.post('/chessengine', data).then((res) => {
        updateResult(res.data.output)
        console.log("test")
    }).finally(() => {
        loading.value = false;
    });
}

const updateResult = (output) => {
    const resultAsInt = parseInt(output, 10);

    if (!isNaN(resultAsInt)) {
        for (let i = 0; i < resultAsInt + 1; i++) {
            result.value = i
        }
    } else {
        console.log("Conversion failed. The input is not a valid integer.");
    }
}
</script>

<style>
.chessButton {
    margin-top: 20px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #29586f;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #204557;
    }
}

.bigRectangle {
    border-radius: 5px;
    width: 30%;
    height: 150px;
    background-color: #ccc;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
}
.loading-animation {
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top: 4px solid #29586f;
    width: 30px;
    height: 30px;
    animation: spin 2s linear infinite;
    margin: 0 auto;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
</style>
