<template>
  <div>
    <button @click="showPage = !showPage">Show Page</button>
    <transition name="slide-up" class="slide-up">
      <div
        v-if="showPage"
        ref="page"
        class="page"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
      >
        <div class="skeleton-loader">
          <header>
            <div class="skeleton-loader__welcome"></div>
            <div class="skeleton-loader__search"></div>
          </header>
          <section>
            <div class="product-loader">
              <div class="products">
                <div class="product-skeleton">
                  <div class="skeleton-loader__image"></div>
                  <div class="skeleton-loader__title"></div>
                  <div class="skeleton-loader__price"></div>
                  <div class="skeleton-loader__button"></div>
                </div>
              </div>
              <div class="products">
                <div class="product-skeleton">
                  <div class="skeleton-loader__image"></div>
                  <div class="skeleton-loader__title"></div>
                  <div class="skeleton-loader__price"></div>
                  <div class="skeleton-loader__button"></div>
                </div>
              </div>
              <div class="products">
                <div class="product-skeleton">
                  <div class="skeleton-loader__image"></div>
                  <div class="skeleton-loader__title"></div>
                  <div class="skeleton-loader__price"></div>
                  <div class="skeleton-loader__button"></div>
                </div>
              </div>
              <div class="products">
                <div class="product-skeleton">
                  <div class="skeleton-loader__image"></div>
                  <div class="skeleton-loader__title"></div>
                  <div class="skeleton-loader__price"></div>
                  <div class="skeleton-loader__button"></div>
                </div>
              </div>
              <div class="products">
                <div class="product-skeleton">
                  <div class="skeleton-loader__image"></div>
                  <div class="skeleton-loader__title"></div>
                  <div class="skeleton-loader__price"></div>
                  <div class="skeleton-loader__button"></div>
                </div>
              </div>
              <div class="products">
                <div class="product-skeleton">
                  <div class="skeleton-loader__image"></div>
                  <div class="skeleton-loader__title"></div>
                  <div class="skeleton-loader__price"></div>
                  <div class="skeleton-loader__button"></div>
                </div>
              </div>
              <div class="products">
                <div class="product-skeleton">
                  <div class="skeleton-loader__image"></div>
                  <div class="skeleton-loader__title"></div>
                  <div class="skeleton-loader__price"></div>
                  <div class="skeleton-loader__button"></div>
                </div>
              </div>
              <div class="products">
                <div class="product-skeleton">
                  <div class="skeleton-loader__image"></div>
                  <div class="skeleton-loader__title"></div>
                  <div class="skeleton-loader__price"></div>
                  <div class="skeleton-loader__button"></div>
                </div>
              </div>
              <div class="products">
                <div class="product-skeleton">
                  <div class="skeleton-loader__image"></div>
                  <div class="skeleton-loader__title"></div>
                  <div class="skeleton-loader__price"></div>
                  <div class="skeleton-loader__button"></div>
                </div>
              </div>
              <div class="products">
                <div class="product-skeleton">
                  <div class="skeleton-loader__image"></div>
                  <div class="skeleton-loader__title"></div>
                  <div class="skeleton-loader__price"></div>
                  <div class="skeleton-loader__button"></div>
                </div>
              </div>
              <div class="products">
                <div class="product-skeleton">
                  <div class="skeleton-loader__image"></div>
                  <div class="skeleton-loader__title"></div>
                  <div class="skeleton-loader__price"></div>
                  <div class="skeleton-loader__button"></div>
                </div>
              </div>
              <div class="products">
                <div class="product-skeleton">
                  <div class="skeleton-loader__image"></div>
                  <div class="skeleton-loader__title"></div>
                  <div class="skeleton-loader__price"></div>
                  <div class="skeleton-loader__button"></div>
                </div>
              </div>
              <div class="products">
                <div class="product-skeleton">
                  <div class="skeleton-loader__image"></div>
                  <div class="skeleton-loader__title"></div>
                  <div class="skeleton-loader__price"></div>
                  <div class="skeleton-loader__button"></div>
                </div>
              </div>
              <div class="products">
                <div class="product-skeleton">
                  <div class="skeleton-loader__image"></div>
                  <div class="skeleton-loader__title"></div>
                  <div class="skeleton-loader__price"></div>
                  <div class="skeleton-loader__button"></div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPage: false,
      startY: null,
      currentY: null,
      initialHeight: null,
      minHeight: null,
      maxHeight: null,
    };
  },
  mounted() {
    this.minHeight = window.innerHeight * 0.1; // Set the minimum height to 10% of the window height
    this.maxHeight = window.innerHeight * 0.9; // Set the maximum height to 90% of the window height
  },
  methods: {
    handleTouchStart(event) {
      this.startY = event.touches[0].clientY;
      this.initialHeight = this.$refs.page.offsetHeight;
    },
    handleTouchMove(event) {
    event.preventDefault();

      this.currentY = event.touches[0].clientY;
      const diffY = this.currentY - this.startY;
      if (diffY > 0) { // Check if swipe is downwards
        let newHeight = this.initialHeight - diffY;
        newHeight = Math.min(Math.max(newHeight, this.minHeight), this.maxHeight); // Clamp the new height between min and max height
        this.$refs.page.style.height = `${newHeight}px`;
      }
    },
    handleTouchEnd() {
      if (this.initialHeight - this.$refs.page.offsetHeight > window.innerHeight * 0.4) {
        this.showPage = false;
      } else {
        this.$refs.page.style.height = `${this.initialHeight}px`;
      }
    },
  },
};
</script>

<style>
.slide-up-enter-active {
  animation: slide-up-in 0.5s ease-out;
}

.slide-up-leave-active {
  animation: slide-up-out 0.5s ease-out;
}

@keyframes slide-up-in {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-up-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
}

.page {
  background-color: white;
  width: 100%;
  height: 80vh;
  position: fixed;
  bottom: 0;
  left: 0;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.page-content {
  height: 90vh; /* Set the height of the page content to 90vh */
  overflow-y: auto; /* Add this line to enable scrolling inside the page content */
}

.skeleton-loader {
  display: flex;
  flex-direction: column;
  gap: 23px;
}
header {
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 16px 16px;
  gap: 16px;

  width: 100%;
  height: 130px;

  /* White */

  background: #ffffff;
  /* Grey/Grey5 */

  border-bottom: 1px solid var(--grey-grey5);
}

.skeleton-loader__welcome {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0px;
  gap: 104px;

  width: 70%;
  height: 26px;

  /* Grey/Grey6 */

  background: var(--grey-grey6);
  border-radius: 8px;
  animation: skeleton-loader__image 1s ease-in-out infinite;
}
.skeleton-loader__search {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 8px;

  width: 100%;
  height: 48px;

  /* Grey/Grey6 */

  background: var(--grey-grey6);
  border-radius: 8px;
  animation: skeleton-loader__image 1s ease-in-out infinite;
}

section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  gap: 16px;

  width: 100%;

  /* White */

  background: #ffffff;
}
.product-loader {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  padding: 0px;
  gap: 8px;
}
.products {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  width: 167px;
  height: 231.14px;

  /* White */

  background: #ffffff;
  border-radius: 8px;
}
.product-skeleton {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px;
  gap: 8px;

  width: 167px;
  height: 231.14px;

  /* White */

  background: #ffffff;
  border-radius: 8px;
}
.skeleton-loader__image {
  width: 151px;
  height: 126px;

  /* Grey/Grey6 */

  background: var(--grey-grey6);
  border-radius: 8px;
  margin-bottom: 10px;
  animation: skeleton-loader__image 1s ease-in-out infinite;
}

.skeleton-loader__title {
  width: 146.37px;
  height: 16.57px;

  /* Grey/Grey6 */

  background: var(--grey-grey6);
  border-radius: 8px;

  animation: skeleton-loader__title 1s ease-in-out infinite;
}
.skeleton-loader__price {
  width: 73.1px;
  height: 16.57px;

  /* Grey/Grey6 */

  background: var(--grey-grey6);
  border-radius: 8px;

  animation: skeleton-loader__title 1s ease-in-out infinite;
}
.skeleton-loader__button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  gap: 4px;

  width: 151px;
  height: 32px;

  /* Grey/Grey6 */

  background: var(--grey-grey6);
  border-radius: 8px;
  animation: skeleton-loader__title 1s ease-in-out infinite;
}

@keyframes skeleton-loader__image {
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
}

@keyframes skeleton-loader__title {
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
}

@keyframes skeleton-loader__description {
  0% {
    opacity: 0.2;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.4;
  }
}
</style>
