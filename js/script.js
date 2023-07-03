Vue.createApp({
    data() {
        return {
            currentSlideIndex: 0,
            slides: [
                {
                    image: 'img/01.webp',
                    title: 'Spiderman',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },
                {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },
                {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },
                {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },
                {
                    image: 'img/05.webp',
                    title: 'Avengers',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },
            ],
        };
    },
    created() {
        setInterval(this.nextSlide, 3000); // Cambia slide ogni 3 secondi
    },
    methods: {
        nextSlide() {
            this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
        },
        changeSlide(index) {
            this.currentSlideIndex = index;
        },
    },
}).mount('#app');