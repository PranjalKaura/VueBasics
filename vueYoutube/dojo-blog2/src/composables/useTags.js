import { ref } from "vue"

const useTags = (posts) => {
    const tags = ref([]);
    const tagSet = new Set();
    posts.forEach(element => {
        element.tags.forEach(tag => {
            tagSet.add(tag);
        })
    });
    tags.value = [...tagSet]; //spread syntax
    return {tags}
}
export default useTags