<template>
    <h1>Filtered Posts on tag: {{ tag }}</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="filteredPosts.length">
        <PostList :posts="filteredPosts"/>
        <TagCloud :posts="posts" />
    </div>
    <div v-else>
        <Spinner/>
    </div>
</template>

<script>

import getPosts from '@/composables/getPosts';
import { computed } from 'vue';
import PostList from "../components/PostList.vue"
import TagCloud from "../components/TagCloud.vue"
import Spinner from '@/components/Spinner.vue';
import { useRoute } from 'vue-router';

export default {
    name: 'Tags',
    components: {PostList, Spinner, TagCloud},
    props: ['tag'],
    setup(props) {
        const route = useRoute();
        const {posts, error, showPosts, load} = getPosts();
        load();
        console.log("Filtered on tag:" + props.tag)
        const filteredPosts = computed(() => {
            return posts.value.filter((post) => {
                return post.tags.includes(props.tag)
            })
        })
        return {filteredPosts, posts, error}
    }
}
</script>

<style>

</style>