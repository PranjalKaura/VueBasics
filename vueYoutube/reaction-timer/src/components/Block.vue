<template>
  <div class="block" v-if="showBlock" @click="stopTimer">
  click me</div>
</template>

<script>
export default {
    props: ['delay'],
    mounted() {
        console.log("Component mounted. Starting timer!");
        setTimeout(() => {
            this.showBlock = true;
        }, this.delay);
    },
    data() {
        return  {
            showBlock: false,
            timer: null,
            reactionTime: 0
        }
    },
    updated() {
        this.startTimer()
    },
    unmounted() {
        console.log("Component unmounted!");
    },
    methods: {
        startTimer() {
            this.timer = setInterval(() => {
                this.reactionTime += 10;
            }, 10)
        },
        stopTimer() {
            clearInterval(this.timer);
            console.log(this.reactionTime);
            // console.log(new Date().toLocaleTimeString());
            this.$emit('end', this.reactionTime);
        }
    }
}
</script>

<style>
.block {
    width: 400px;
    border-radius: 20px;
    background: darkgreen;
    color: white;
    text-align: center;
    padding: 100px 0;
    margin: 40px auto;
}
</style>