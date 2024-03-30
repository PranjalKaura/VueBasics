<template>
  <div class="post-list"></div>
  <div v-for="post in posts" :key="post.id">
  <SinglePost :post = "post"/>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue'
import SinglePost from './SinglePost.vue'
export default {
    props: ["posts"],
    components: {SinglePost},
    setup(props) {
        onMounted(() => {
        })
        onUnmounted(() => {
        })
        onUpdated(() => {
        })
    }
}
</script>

<style>

</style>