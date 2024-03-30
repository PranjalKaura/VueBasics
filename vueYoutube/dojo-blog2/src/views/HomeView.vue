<template>
  <div class="home"> 
    <h1>HomeView</h1>
    <div v-if="error"> {{  error  }}</div>
    
    <div v-if="posts.length">
      <PostList :posts="posts" v-if = "showPosts"/>
      <TagCloud :posts="posts"/>
    </div>
    <div v-else>
      <Spinner/>
    </div>
    <button @click="showPosts = !showPosts">Toggle Posts</button>
    <button @click="posts.pop()">Delete a post</button>
  </div>
</template>

<script>

import PostList from "../components/PostList.vue"
import getPosts from '../composables/getPosts'
import Spinner from '../components/Spinner.vue'
import TagCloud from '../components/TagCloud.vue'

export default {
  name: 'Home',
  components: {PostList, Spinner, TagCloud},
  setup() {
    const {posts, error, showPosts, load} = getPosts();
    load();
    return {posts, error, showPosts}
  }
}
</script>

<style>
  .home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
  .layout {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
  }
</style>
