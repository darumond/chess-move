<template>
    <div class="input-container">
        <input type="text" class="custom-input" v-model="fen" @input="sendInput" />
    </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
    fenUpdate: {
        type: String,
        required: true,
    }
})

const emit = defineEmits(['newInput'])

const fen = computed({
    get: () => props.fenUpdate,
    set: (val) => {
        emit('newInput',val)
    }
});

</script>

<style>
.input-container {
    display: flex;
    align-items: center;
    margin-top: 10px;
}

.custom-input {
    padding: 10px;
    border: 2px solid #29586f;
    border-radius: 5px;
    font-size: 16px;
    width: 700px;
    background-color: #ccc;

}
.custom-input:focus {
    outline: none;
}
</style>