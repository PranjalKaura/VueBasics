console.log("hello, vue");

const app = Vue.createApp({
    // data, functions, events
    //template: '<h2> I am the template</h2>'
    data() {
        return {
            showBooks: true,
            books: [
                {title: 'The name of the wind', author: 'Rupert Singh', img: 'assets/pic1.png', isFav: true},
                {title: 'the Name of the sea', author: 'Garry Sharma', img: 'assets/pic2.png', isFav: false},
                {title: 'the Name of the mountain', author: 'Harry Das', img: 'assets/pic3.png', isFav: true},
            ],
            age: 43,
            x: 0,
            y: 0,
            url: "https://www.youtube.com"
        }
    }, 
    methods: {
        changeTitle(title) {
            console.log("I was clicked");
            this.title = title;
        },

        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        }, 

        handleEvent(eventObj, data) {
            console.log("Mouse Over event");
            console.log(eventObj, eventObj.type);
            if(data) {
                console.log(data);
            }
        }, 
        handleMouseMove(eventObj) {
            this.x = eventObj.offsetX;
            this.y = eventObj.offsetY;
        },
        handleLIClick(book) {
            book.isFav = !book.isFav;
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav);
        }
    }
});

app.mount('#app');