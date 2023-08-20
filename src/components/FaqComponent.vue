<script setup>

import { ref } from "vue";
import { faqsData } from "../data/faq.js"
const isOpenId = ref(null);


const toggleQuestion = (id) => {
  isOpenId.value = isOpenId.value === id ? null : id
}
</script>

<template>
  <div class="wrapper">
    <div v-for="({ id, question, answer }) in faqsData" class="question-box" :key="id">
      <div class="question-title" @click="toggleQuestion(id)">
        {{ question }} <button>
          {{ isOpenId === id ? '-' : "+" }}

        </button>
      </div>
      <span class="answer" v-show="isOpenId === id">{{ answer }}</span>
    </div>
  </div>
</template>

<style scoped>
.question-box {
  background: #efefef;
  padding: 10px 20px;
  margin-bottom: 15px;
}

.answer {
  text-align: left;
  color: blue;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
}

button {
  cursor: pointer;
}

.question-title {
  display: flex;
  justify-content: space-between;
}


.wrapper {
  max-width: 500px;
  margin: auto;
}
</style>
