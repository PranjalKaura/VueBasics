<template>
  <div class="home"> 
    <h1>HomeView</h1>
    <div v-if="error"> {{  error  }}</div>
    
    <div v-if="posts.length">
      <PostList :posts="posts" v-if = "showPosts"/>
    </div>
    <div v-else>Loading....</div>
    <button @click="showPosts = !showPosts">Toggle Posts</button>
    <button @click="posts.pop()">Delete a post</button>
  </div>
</template>

<script>

import PostList from "../components/PostList.vue"
import getPosts from '../composables/getPosts'

export default {
  name: 'Home',
  components: {PostList},
  setup() {
    const {posts, error, showPosts, load} = getPosts();
    load();
    return {posts, error, showPosts}
  }
}
</script>
