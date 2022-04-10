<script setup>
import { ref } from 'vue';
const message = ref("")
const emit = defineEmits(["send"])
const send = () => {
  emit("send", message.value)
  message.value = ""
}

</script>

<template>
  <el-input v-model="message" data-test="messageText" />
  <el-button @click="send" type="primary">send</el-button>
</template>

<style>
</style>
