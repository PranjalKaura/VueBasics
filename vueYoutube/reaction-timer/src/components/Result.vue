<template>
    <p>Reaction Time : {{ reactionTime }} ms</p>
    <p class="rank"> {{rank}} </p>
  </template>
  
  <script>
  export default {
      props: ['reactionTime'],
      data() {
        return {
          rank: null
        }
      },
      mounted() {
        if(this.reactionTime < 250) {
          this.rank = "Ninja Fingers";
        }
        else if(this.reactionTime < 400) {
          this.rank = "Rapid Reflex";
        }
        else {
          this.rank = "Too slow My G...."
        }
      }
  }
  </script>
  
  <style>
  .rank {
    font-size: 1.4em;
    color: purple;
    font-weight: bold;
  }
  </style>