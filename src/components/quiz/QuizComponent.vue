<script setup>
import { ref } from "vue"
import ResultComponent from "../result/ResultComponent.vue";

import quizData from "../../data/quiz.js"
const currentQuestion = ref(0)
const countOfCorrectQuestion = ref(0);
const selectedOption = ref(null);
const selectedQuestion = ref(null);

const showResult = ref(false);


// const handleBackQuestion = () => {
//     if (currentQuestion.value === 0) {
//         return
//     } else {
//         currentQuestion.value--
//         console.log(currentQuestion)
//         selectedOption.value = selectedOptions[currentQuestion.value];
//         selectedQuestion.value = selectedQuestions[currentQuestion.value];
//     }
// }

const handleNextQuestion = () => {
    if (selectedOption.value === selectedQuestion.value.answer) {
        countOfCorrectQuestion.value++;
    }
    if (currentQuestion.value < quizData.length - 1) {


        currentQuestion.value = currentQuestion.value + 1;

    } else {
        showResult.value = true;
    }
    resetState()
}
const resetState = () => {
    selectedOption.value = null;
    selectedQuestion.value = null;

}

const handleSelectOption = (question, option) => {
    selectedOption.value = option;
    selectedQuestion.value = question
}
// const getCorrectQuestionsCount = computed(() => countOfCorrectQuestion.value);

</script>

<template>
    <div class="wrapper">
        <div v-show="!showResult" class="question-container">
            <div v-show="currentQuestion === index" v-for="(question, index) in   quizData  " :key="index" class="question">
                <div class="question-index">
                    <h4>0{{ currentQuestion + 1 }}/<sub>0{{ quizData.length }}</sub>
                    </h4>
                </div>

                <h3 class="question-title">{{ question.question }}</h3>
                <div class="question-choices">
                    <button :disabled="selectedOption"
                        :class="{ correct: option === selectedQuestion?.answer, active: selectedOption === option && option !== selectedQuestion.answer }"
                        @click="
                            handleSelectOption(question, option)" v-for="(option, index) in  question.options "
                        :key="index">{{
                            option }}</button>
                </div>
            </div>


            <button :disabled="selectedOption === null" class="question-next" @click="handleNextQuestion">
                {{ currentQuestion === quizData.length - 1 ? 'Finish' : 'Next' }}
            </button>
        </div>
        <result-component :correct-answers="countOfCorrectQuestion" :total-questions="quizData.length"
            v-show="showResult" />
    </div>
</template>

