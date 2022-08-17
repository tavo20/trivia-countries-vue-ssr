<script setup>
import { defineProps } from 'vue';
import { store } from '../store/store.js';


const props = defineProps(['image', 'questionOne', 'questionTwo', 'final']);

console.log('questionOne, questionOne', props.questionOne);
console.log('questionTwo, questionTwo', props.questionTwo);



const handleOption = (option, question) => {
    question.done = true;
    console.log('handleOption', option, question);
    if(option === question.response) {
        store.correct++;
        question.isCorrect = true;
        console.log('correct');
    } else {
        store.mistakes++;
        question.isCorrect = false;
        console.log('incorrect');
    }

    if(props.final && props.questionOne.done && props.questionTwo.done) {
        store.isFinished = true;
    }

    console.log('res', store)
}

</script>


<template>


    <div class="parallax" :style="{ backgroundImage: `url(${props.image})`}">
        <div class="question one">
            <h1 class="title">{{ questionOne.question }}</h1>
            <div class="container-btns" v-if="!questionOne.done">
                <button v-for="option in  questionOne.options"  @click="() => handleOption(option, questionOne)">{{ option }}</button>
            </div>

            <div  v-if="questionOne.done">

                <div v-if=" questionOne.isCorrect" class="correct">Correct answer</div>
                <div v-else class="in-correct">Incorrect answer</div>

            </div>
        </div>

        <div class="question two">
            <h1 class="title">{{ questionTwo.question }}</h1>
            <div class="container-btns" v-if="!questionTwo.done">
                <button v-for="option in  questionTwo.options"  @click="() => handleOption(option, questionTwo)">{{ option }}</button>
            </div>

            <div  v-if="questionTwo.done">

                <div v-if=" questionTwo.isCorrect" class="correct">Correct answer</div>
                <div v-else class="in-correct">Incorrect answer</div>

            </div>
        </div>

        <div class="next-questions down" v-if="questionOne.done && questionTwo.done ">
            Scroll down
        </div>
        <div class="next-questions up" v-if="questionOne.done && questionTwo.done">
            Scroll down
        </div>

    </div>
</template>


<style scoped>
.parallax {
    /* background-image: url("../assets/gaming/press.jpg"); */
    min-height: 100vh;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
}

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

}

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

.one {
    top: 10%;
    left: 23%;
}

.two {
    top: 40%;
    right: 15%;
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
}
.up {
    top: 0;
}

.down {
    bottom: 0;
}

@media (max-width: 490px) {
    .one {
        top: 3%;
        left: 23%;
    }
    .two {
        top: 54%;
        right: 15%;
    }
}
@media (max-width: 769px) {
    .one {
        top: 3%;
        left: 10%;
    }
    .two {
        top: 52%;
        right: 9%;
    }
}

</style>