<script setup>
import { defineProps, toRefs } from 'vue';
import { store } from '../store/store.js';
import arrowDown from '../static/arrowD.png';

const props = defineProps(['image', 'questionOne', 'questionTwo', 'final', 'page']);

let questionOne$ = toRefs(props.questionOne);
let questionTwo$ = toRefs(props.questionTwo);

const handleOption = (option, question) => {

    question.done.value = true;

    if(props.final && questionOne$.done.value && questionTwo$.done.value) {
        store.isFinished = true;
    }

    if(option === question.response.value) {
        store.correct++;
        question.isCorrect.value = true;
        return
    } 
    store.mistakes++;
    question.isCorrect = false;
}
</script>


<template>
    <div class="parallax" :style="{ backgroundImage: `url(${image})`}">
        <div class="question one">
            <h1 class="title">{{ questionOne$.question.value }}</h1>
            <div class="container-btns" v-if="!questionOne$.done.value">
                <button v-for="option in questionOne$.options.value" :key="questionOne$.id.value"  @click="() => handleOption(option, questionOne$)">{{ option }}</button>
            </div>

            <div  v-if="questionOne$.done.value">
                <div v-if=" questionOne$.isCorrect.value" class="correct">Correct answer</div>
                <div v-else class="in-correct">Incorrect answer</div>

            </div>
        </div>
        
        <div class="question two">
            <h1 class="title">{{ questionTwo$.question.value }}</h1>
            <div class="container-btns" v-if="!questionTwo$.done.value">
                <button v-for="option in  questionTwo$.options.value"  @click="() => handleOption(option, questionTwo$)">{{ option }}</button>
            </div>

            <div  v-if="questionTwo$.done.value">
                <div v-if=" questionTwo$.isCorrect.value" class="correct">Correct answer</div>
                <div v-else class="in-correct">Incorrect answer</div>
            </div>
        </div>


        <div class="next-questions down" v-if="questionOne$.done.value && questionTwo$.done.value ">
           <img :src="arrowDown" alt=""> Scroll down  <img :src="arrowDown" alt="">
        </div>
        <div class="next-questions up" v-if="questionOne$.done.value && questionTwo$.done.value">
        <img :src="arrowDown" alt="">   Scroll down <img :src="arrowDown" alt="">
        </div>
    </div>
</template>


<style scoped lang="less">
.parallax {
    /* background-image: url("../assets/gaming/press.jpg"); */
    min-height: 100vh;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    .question {
    position: absolute;
    width: auto;
    /* background: rgb(255 255 255 / 20%); */
    z-index: 3;

    height: auto;
    max-width: 250px;
    border-radius: 4px;
    padding: 10px;
    border: 1px solid #f72053;
    background: rgb(255 0 0 / 20%);

    .correct {
        color: green;
        font-size: 17px;
        text-align: center;
        font-weight: bold;
    }
    .in-correct {
        color: tomato;
        font-size: 17px;
        text-align: center;
        font-weight: bold;
        }


    .title {
        font-size: 15px;
        color: #dacfd1;
        font-weight: bold;
            margin: 20px 10px;
    }

    .container-btns {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .container-btns button {
        height: 40px;
        border: none;
        background: no-repeat;
        border: 1px solid #9454e2;
        /* color: #9454e2; */
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
        background: rgb(148 84 226 / 20%);
            color: white;
    }

    button:hover {
        background: #9454e2;
        color: #fff;
    }
    }


.one {
    top: 10%;
    left: 23%;
}

.two {
    top: 40%;
    right: 15%;
}

    .next-questions {
        position: absolute;
        left: 0;
        right: 0;
        text-align: center;
        font-size: 20px;
        color: #9454e2;
        font-weight: bold;
        cursor: pointer;
        background: rgb(148 84 226 / 30%);
        img {
            width: 20px;
        }
    }
    .up {
        top: 0;
    }

    .down {
        bottom: 0;
    }
}


@media (max-width: 490px) {
    .one {
        top: 3% !important;
        left: 23% !important;
    }
    .two {
        top: 54% !important;;
        right: 15% !important;;
    }
}
@media (max-width: 769px) {
    .one {
        top: 3% !important;;
        left: 10% !important;;
    }
    .two {
        top: 52% !important;;
        right: 9% !important;;
    }
}

</style>