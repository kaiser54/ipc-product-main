<template>
  <div class="carousel-container">
    <div
      class="carousel-wrapper"
      ref="carousel"
      v-if="Array.isArray(images)"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
    >
      <div class="carousel-slide" v-for="(image, index) in images" :key="index">
        <img :src="image.url" alt="Product Image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      required: true,
    },
  },
  data() {
    return {
      currentIndex: 0,
      isTouching: false,
    };
  },
  mounted() {
    this.startAutoScroll();
  },
  methods: {
    startAutoScroll() {
      this.autoScrollInterval = setInterval(this.slideNext, 3000);
    },
    stopAutoScroll() {
      clearInterval(this.autoScrollInterval);
    },
    slideNext() {
      if (this.isTouching) return; // Don't auto-scroll while user is swiping
      const carousel = this.$refs.carousel;
      if (!carousel) return; // check if carousel exists
      const slideWidth = carousel.offsetWidth;
      const nextIndex = (this.currentIndex + 1) % this.images.length;

      carousel.scrollTo({
        left: slideWidth * nextIndex,
        behavior: "smooth",
      });

      this.currentIndex = nextIndex;
    },
    onTouchStart() {
      this.isTouching = true;
      this.stopAutoScroll();
    },
    onTouchMove() {
      // You can add additional logic here if needed
    },
    onTouchEnd() {
      this.isTouching = false;
      this.startAutoScroll();
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

.carousel {
  display: flex;
  width: 100%;
  height: 233px;
  background: var(--white);
  border: 1px solid var(--grey-grey5);
  border-radius: 16px;
  align-items: center;
  justify-content: space-between;
}

.carousel img {
  width: auto;
  height: 85%;
  margin-inline: auto;
}
</style>
