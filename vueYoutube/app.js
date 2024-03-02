console.log("hello, vue");

const app = Vue.createApp({
    // data, functions, events
    //template: '<h2> I am the template</h2>'
    data() {
        return {
            showBooks: true,
            title: 'The final EMpire', 
            author: 'Brandon Singh', 
            age: 43
        }
    }, 
    methods: {
        changeTitle(title) {
            console.log("I was clicked");
            this.title = title;
        },

        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        }
    }
});

app.mount('#app');