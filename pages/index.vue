<script >
import PressImage from '../static/press.jpg';
import OldConsoleImage from '../static/old-console.jpg';
import GamerImage from '../static/gamer.jpg';
import BlueImage from '../static/perfect-blue.jpg';

import { store, } from '../store/store.js';
import Separator from '../components/Separator.vue';
import Results from '../components/Results.vue';
import { ref } from 'vue';
import { defineComponent, useMeta } from '@nuxtjs/composition-api';
import StartPage from '../components/StartPage.vue';


export default defineComponent({
    head: {
        title: "Home game",
        htmlAttrs: {
            lang: "en"
        },
    },
    meta: [{
            hid: "Home Game countries",
            title: "Game",
            description: "About App game countries"
        }],
    setup() {
        const { title } = useMeta();
        title.value = "Game countries";
        let showQuestions = ref(false);
        const handleStartGame = () => {
            showQuestions.value = false;
            showQuestions.value = true;
            setTimeout(() => {
                const element = document.getElementById("scroll-here");
                console.log("element", element);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "center" });
                }
            }, 100);
        };
        return {
            handleStartGame,
            showQuestions,
            store,
            PressImage,
            OldConsoleImage,
            GamerImage,
            BlueImage
        };
    },
    components: { StartPage }
})
</script>


<template>
<div> 
  <StartPage @startNewGame="handleStartGame"/>
  <div v-show="showQuestions">
    <SectionParallax id="scroll-here" :image="PressImage" :questionOne="store.questions[0]" :questionTwo="store.questions[1]" page="1"  />
    <Separator/>
    <SectionParallax  :image="OldConsoleImage" :questionOne="store.questions[2]" :questionTwo="store.questions[3]"  />
    <Separator/>
    <SectionParallax  :image="BlueImage" :questionOne="store.questions[4]" :questionTwo="store.questions[5]"  />
    <Separator/>
    <SectionParallax  :image="GamerImage" :questionOne="store.questions[6]" :questionTwo="store.questions[7]" :final="true"  />
    <Results  v-if="store.isFinished"></Results>

  </div>
</div>
</template>



<style >
body {
  background: #fafafa;
}
</style>
