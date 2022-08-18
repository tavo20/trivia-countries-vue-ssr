<script setup>
import { store, reset } from '../store/store';

let percentage = 0;
if(store.correct >= 8) {
    percentage = 85
} else if(store.correct >= 7) {
    percentage = 78
} else if(store.correct >= 6) {
    percentage = 70
} else if(store.correct >= 5) {
    percentage = 67
} else if(store.correct >= 4) {
    percentage = 54
} else if(store.correct >= 2) {
    percentage = 30
} else {
    percentage = 6
}



</script>

<template>
    <main class="container">
        <div class="container-answers">
            <div class="correct">
                Correctas: {{ store.correct }}
            </div> 

            <div class="in">
                Incorrectas: {{ store.mistakes }}
            </div>
        </div>

        <div class="message">
            You were better than {{percentage}}% of all players
        </div>

    </main>
</template>

<style scoped>

.container {
    background: black;
    height: 400px;
    width: 100%;
}

.container-answers {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    font-size: 20px;
}
.correct {
    color: #00ff6b;
    letter-spacing: 3px;
}

.in {
    color: tomato;
    letter-spacing: 3px;
}

.message {
    color: white;
    font-size: 2rem;
    text-align: center;
    padding-top: 100px;
}

.container-again {
    display: flex;
    justify-content: center;
    margin: 20px 0;
}

button {
    background: rgb(19 203 58 / 70%);
    color: white;
    outline: none;
    border: none;
    width: 200px;
    height: 50px;
    font-size: 18px;
    letter-spacing: 4px;
    cursor: pointer;
}
button:hover {
    background: rgb(19 203 58 / 90%);
    letter-spacing: 6px;
}


/* #header {
  color: black;
  .navigation {
    font-size: 12px;
  }
  
  .logo {
    width: 300px;
  }
} */


</style>