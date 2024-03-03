console.log("myApp started");

const app = Vue.createApp({
    data() {
        return {
            url: "https://youtube.com"
        }
    },
    methods: {
        
    }
})

app.mount('#myApp');