<script setup>
import { defineProps } from 'vue'

const props = defineProps({

    showResult: Boolean,
    totalQuestions: Number,
    correctAnswers: Number,
    wrongAnswers: Number


})
</script>
<template>
    <div v-show="showResult" class="result-container">
        <h2>Quiz Results</h2>

        <p>Total Questions:

            <span>{{ props.totalQuestions }}</span>
        </p>
        <p>Correct Questions:
            <span>
                {{ props.correctAnswers }}</span>
        </p>
        <p>Wrong Answers:
            <span>{{ props.totalQuestions - props.correctAnswers }}</span>
        </p>
    </div>
</template>