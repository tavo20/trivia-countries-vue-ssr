<template >
  <div>
    <div id="start-again" class="main"></div>
    <button class="start-game" @click="handleClick">START GAME</button>
  </div>

</template>



<script setup>
import { ref, defineEmits } from 'vue';

const emits = defineEmits(['startNewGame']);


const handleClick = () => {
  emits('startNewGame');

}
</script>


<style scoped>
.main {
  /* The image used */
  background-image: url("../static/control.jpg");
  /* Set a specific height */
  min-height: 100vh;
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

button {
  position: absolute;
  height: 40px;
  width: 200px;
  background: rgb(223 120 98 / 51%);
  z-index: 3;
  right: 43%;
  bottom: 50%;
  outline: none;
  border: 1px solid #de7961;
  font-size: 18px;
  cursor: pointer;
  letter-spacing: 4px;
  color: #ffab9f;

  left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
}

@media (min-width: 1024px) {}
</style>
