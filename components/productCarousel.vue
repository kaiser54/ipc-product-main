<template>
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
    this.slideNext();
  },
  methods: {
    slideNext() {
      const carousel = this.$refs.carousel;
      const slideWidth = carousel.offsetWidth;
      const nextIndex = (this.currentIndex + 1) % this.images.length;

      carousel.scrollTo({
        left: slideWidth * nextIndex,
        behavior: "smooth",
      });

      this.currentIndex = nextIndex;

      setTimeout(() => {
        this.slideNext();
      }, 3000);
    },
  },
};
</script>

<style scoped>
.carousel-container {
  width: 100%;
  overflow: hidden;
  touch-action: pan-y;
}

.carousel-wrapper {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: unset;
}

.carousel-slide {
  display: flex;
  width: 90%;
  flex-shrink: 0;
  height: 233px;
  background: var(--white);
  border: 1px solid var(--grey-grey5);
  border-radius: 16px;
  align-items: center;
  justify-content: space-between;
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: unset;
}

.carousel-slide img {
  margin-inline: auto;
  max-width: 150px;
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
