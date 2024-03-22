<template>
  <h1>Ninja Reaction Timer</h1>
  <button @click="start" :disabled="isplaying">PLAY</button>
  <Block v-if="isplaying" :delay="delay" @end="endGame"/>
  <!-- <p v-if="showResults">Reaction Time : {{ reactionTime }} ms</p> -->
  <Results v-if="showResults" :reactionTime="reactionTime"></Results>
</template>

<script>

import Block from './components/Block.vue'
import Results from './components/Result.vue'

export default {
  name: 'App',
  components: { Block, Results },
    data() {
      return {
        isplaying: false,
        delay: null,
        reactionTime: null,
        showResults: false
      }
    },
    methods: {
    start() {
      this.delay = 2000 + Math.random()*5000; //millisec
      this.isplaying = true;
      this.showResults = false;
    },
    endGame(reactionTime) {
      this.reactionTime = reactionTime;
      this.isplaying = false;
      this.showResults = true;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
</style>
