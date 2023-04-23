"<template>
    <div class="carousel-container">
        <div class="carousel-wrapper" ref="carousel">
            <div class="carousel-slide" v-for="(image, index) in images" :key="index">
                <img :src="require(`~/assets/images/${image}`)" />
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            currentIndex: 0,
            images: [
                "p1.png",
                "category1.png",
                "category2.png",
                "category3.png",
                "category4.png",
            ],
        };
    },
    mounted() {
        this.startCarousel();
    },
    methods: {
        startCarousel() {
            setInterval(() => {
                this.slideNext();
            }, 3000);
        },
        slideNext() {
            const carousel = this.$refs.carousel;
            const slideWidth = carousel.offsetWidth;
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
            carousel.style.transform = `translateX(-${slideWidth * this.currentIndex}px)`;
        },
        slidePrev() {
            const carousel = this.$refs.carousel;
            const slideWidth = carousel.offsetWidth;
            this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
            carousel.style.transform = `translateX(-${slideWidth * this.currentIndex}px)`;
        },
    },
};
</script>
  
<style scoped>
.carousel-container {
    width: 100%;
    overflow: hidden;
}

.carousel-wrapper {
    display: flex;
    transition: all 1s ease-in-out;
}

.carousel-slide {
    display: flex;
    width: calc(100% - 16px);
    margin-right: 16px;
    flex-shrink: 0;
    height: 233px;
    background: var(--white);
    border: 1px solid var(--grey-grey5);
    border-radius: 16px;
    align-items: center;
    justify-content: space-between;
}

.carousel-slide img {
    margin-inline: auto;
    max-width: 150px;
    width: 100%;
    height: auto;
    object-fit: cover;
}
</style>