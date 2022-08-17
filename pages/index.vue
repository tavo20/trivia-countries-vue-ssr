<script setup>
import PressImage from '../static/press.jpg';
 
import { store } from '../store/store.js';


</script>



<template>

<div>
  <Tutorial/>
  <SectionParallax id="scroll-here" :image="PressImage" :questionOne="store.questions[0]" :questionTwo="store.questions[1]"  />
  




</div>

</template>



<style >
body {
  background: #fafafa;
}
</style>
