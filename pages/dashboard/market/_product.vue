<template>
  <div :class="{ 'user-details-component': mobile }">
    <div class="webskeleton" v-if="loading" style="margin: 20px">
      <!-- css skeleton loading state on the website for desktop view -->
      <webskeleton style="overflow: hidden; height: 100vh" />
    </div>
    <div v-if="loading" class="SkeletonLoader">
      <!-- css skeleton loading state on the website for mobile view -->
      <SkeletonLoader style="overflow: hidden; height: 100vh" />
    </div>
    <div class="component-header" v-if="mobile">
      <div class="component-header-main">

        <!-- back button for mobile view -->
        <svg @click="$router.go(-1)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
          fill="none">
          <path d="M3 12L10 19M21 12H3H21ZM3 12L10 5L3 12Z" stroke="#565C69" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
        <!-- ---------------------------- -->

        <!-- header -->
        <p>Product details</p>

        <div class="component-cart">
          <nuxt-link to="/dashboard/market/cart">
            <div class="badge" v-if="cart.length > 0">
              <p>{{ cart.length }}</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 9C3 7.89543 3.89543 7 5 7H19C20.1046 7 21 7.89543 21 9V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V9Z"
                stroke="#565C69" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8 10V6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6V9.6888" stroke="#565C69"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </nuxt-link>
        </div>
        <!-- ----------------- -->

      </div>
    </div>

    <!-- back button -->
    <goback style="margin-top: 28px; margin-left: 16px" />
    <!-- ----------- -->

    <div class="product-detail-con">

      <!-- product details page for mobile view -->
      <div class="mobile-product-details" v-if="mobile">

        <!-- the moving product carousel -->
        <productCarousel :images="product.image"/>
        <!-- ---------------------------- -->

        <div class="product-content">

          <!-- product title, brand name and like button -->

          <div class="product-details-title">
            <h3 class="h3-small-medium">
              {{ product.title }}
            </h3>
            <p class="product-details-brand">
              Brand: <span>Mama’s Choice</span>
            </p>
          </div>
          <div class="product-details-price-grp">
            <h3 class="h3-bold">₦ {{ product.price }}</h3>
            <tags />
          </div>
          <p class="product-details-snippet">
            {{ product.description }}
          </p>

          <!-- ------------------------------- -->
        </div>
      </div>
      <!-- -------------------------------------- -->

      <!-- product details page for desktop view -->
      <div class="product-details-wrapper" v-else>
        <div class="product-details-main">
          <div class="product-img-thumb">

            <!-- image container -->
            <div class="product-img zoom-container" ref="zoomContainer">
              <!-- <img :src="require(`~/assets/images/${product.images[productImage]}`)
                " class="zoom-image" ref="zoomImage" /> -->
              <img :src="product.image" alt="Product Image" class="zoom-image" ref="zoomImage" />
              <!-- <img src="~/assets/images/p1.png" alt="" /> -->
            </div>
            <!-- --------------- -->

            <!-- product thumbnail under the main product image -->
            <div class="product-thumb">
              <div class="thumb" v-for="(image, index) in product.images" :key="index">
                <!-- <img :src="require(`~/assets/images/${image}`)" alt="" @click="changeImage(index)" /> -->
              </div>
              <!-- -------------------------------------------- -->
            </div>
          </div>
          <div class="product-details-content">
            <div class="product-details-title-like">

              <!-- product title, brand name and like button -->
              <div class="product-details-title">
                <h3 class="h3-small-medium">
                  {{ product.title }}
                </h3>
                <p class="product-details-brand">
                  Brand: <span>Mama’s Choice</span>
                </p>
              </div>
              <div class="circle">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M7.63018 13.8405L2.38403 8.37754C0.906344 6.8388 0.999397 4.31573 2.58606 2.89953C4.16015 1.49454 6.54688 1.76737 7.79078 3.49447L7.99992 3.78483L8.20905 3.49447C9.45298 1.76737 11.8397 1.49454 13.4138 2.89953C15.0004 4.31573 15.0935 6.8388 13.6158 8.37754L8.36965 13.8405C8.16545 14.0531 7.83438 14.0531 7.63018 13.8405Z"
                    stroke="#565C69" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>
            <!-- ------------------------------- -->

            <p class="product-details-snippet">
              {{ product.description }}
            </p>
            <div class="product-details-price-grp">
              <h3 class="h3-bold">₦ {{ product.price }}</h3>
              <tags />
            </div>
            <!-- cart button -->

            <!-- add to cart button  -->

            <!-- <button class="btn primary-btn">Add to cart</button> -->

            <button class="btn primary-btn" @click="addToCart" v-if="!isInCart">
              Add to cart
            </button>

            <!-- -------------------------------- -->

            <div v-else class="counter-btn">

              <!-- counter button -->

              <button @click="decrementQuantity" class="circle btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3.33325 8H12.6666" stroke="#0009B3" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </button>

              <!-- <input type="number" v-model.number="itemCount" min="1" class="counter input" /> -->
              <div class="counter">{{ getProductQuantity }}</div>

              <button @click="incrementQuantity" class="circle">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3.33325 7.99967H12.6666M7.99992 3.33301V12.6663V3.33301Z" stroke="#0009B3" stroke-width="1.5"
                    stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>

              <!-- -------------------------------- -->
            </div>
            <!-- --------- -->
            <guarantee />
          </div>
        </div>
        <relatedProduuct />
      </div>
      <!-- ---------------------------------- -->
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  name: 'product',
  layout: "dashboardview",
  // Other component properties and methods
  data() {
    return {
      pageTitle: "IPC | Market",
      mobile: false,
      productId: null,
      productTitle: null,
      product: {},
      productImage: 0,
      currentPage: "",
      inCart: false,
      loading: false,
    };
  },
  head() {
    return {
      title: this.pageTitle,
    };
  },
  computed: {
    ...mapState(['cart']),
    isInCart() {
      const productInCart = this.$store.state.cart.find(
        (p) => p.id === this.product.id
      );
      return productInCart !== undefined;
    },
    getProductQuantity() {
      const productInCart = this.$store.state.cart.find(
        (p) => p.id === this.product.id
      );
      return productInCart ? productInCart.quantity : 0;
    },
  },
  async mounted() {
    const pathArray = this.$route.path.split('~');
    const lastSegment = decodeURIComponent(pathArray[pathArray.length - 1]);
    this.currentPage = lastSegment;
    console.log(this.currentPage);
    // this.productId = this.$route.params.id;
    // this.productTitle = this.$route.params.title;
    // console.log(this.productId);

    try {
      this.loading = true;
      // const response = await this.$axios.$get(`https://fakestoreapi.com/products/${this.productId}`);
      const response = await this.$axios.$get(`https://fakestoreapi.com/products/${this.currentPage}`);
      this.product = response;
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      this.loading = false;
    };
    this.checkScreenSize();
    window.addEventListener("resize", this.checkScreenSize);

    const zoomLevel = 2; // Change this value to adjust the zoom level

    const addZoomListeners = () => {
      const zoomImage = this.$refs.zoomImage;
      const zoomContainer = this.$refs.zoomContainer;

      if (!zoomImage) {
        return;
      }

      zoomImage.addEventListener("mousemove", (e) => {
        const mouseX = e.offsetX / zoomContainer.offsetWidth;
        const mouseY = e.offsetY / zoomContainer.offsetHeight;

        zoomImage.style.transformOrigin = `${mouseX * 100}% ${mouseY * 100}%`;
        zoomImage.style.transform = `scale(${zoomLevel})`;
      });

      zoomImage.addEventListener("mouseleave", () => {
        zoomImage.style.transform = "scale(1)";
      });
    };

    addZoomListeners();

    this.zoomInterval = setInterval(() => {
      addZoomListeners();
    }, 1000 * 60); // Check every minute
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkScreenSize);
    clearInterval(this.zoomInterval);
  },

  methods: {
    checkScreenSize() {
      if (window.innerWidth <= 951) {
        this.mobile = true;
      } else {
        this.mobile = false;
      }
    },
    changeImage(index) {
      this.productImage = index;
    },
    addToCart() {
      this.$store.commit('addToCart', this.product);
    },
    incrementQuantity() {
      this.$store.commit('incrementQuantity', { productId: this.product.id });
    },
    decrementQuantity() {
      this.$store.commit('decrementQuantity', { productId: this.product.id });
    },
  },
};
</script>

<style scoped>
.zoom-container {
  position: relative;
  overflow: hidden;
}

.zoom-image {
  transition: transform 0.2s ease-in-out;
}

.product-detail-con {
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 28px 16px;
}

.mobile-product-details {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
}

.product-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
}

.product-details-wrapper {
  display: flex;
  /* display: none !important; */
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 124px;
}

.product-details-main {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 0px;
  gap: 51px;
}

.product-img-thumb {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;

  width: 100%;
  max-width: 272px;
}

.product-img {
  width: 266.67px;
  height: 300px;

  /* Grey/Grey6 */

  background: #f4f5f8;
  border-radius: 8px;
}

.product-img img {
  object-fit: contain;
  height: inherit;
  margin-inline: auto;
}

.product-thumb {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  width: 272px;
  height: 48px;
}

.thumb {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  width: 48px;
  height: 48px;

  /* Grey/Grey5 */

  border: 1px solid var(--grey-grey5);
  border-radius: 8px;
}

.thumb img {
  height: 90%;
}

.product-details-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  max-width: 466.55px;
}

.product-details-title-like {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  justify-content: space-between;
  gap: 16px;

  width: 100%;
  /* max-width: 359.55px; */

  position: relative;
}

.product-details-title {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;

  width: 100%;
  /* max-width: 255.55px; */
}

.product-details-title h3 {
  color: var(--grey-grey1);
}

.product-details-brand {
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 150% */

  /* Grey/Grey1 */

  color: var(--grey-grey1);
}

.product-details-brand span {
  color: var(--primary-p300);
}

.counter-btn .circle {
  background: var(--primary-p300);
}

.counter-btn .circle svg path {
  stroke: var(--white) !important;
}

.circle {
  /* position: absolute; */
  top: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px;
  gap: 10px;

  width: 32px;
  height: 32px;

  /* Grey/Grey4 */

  border: 1px solid var(--grey-grey4);
  border-radius: 100px;
}

p.product-details-snippet {
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* or 150% */

  /* Grey/Grey3 */

  color: var(--grey-grey3);
}

.product-details-price-grp {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
}

.counter-btn {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 16px;
  max-width: 300px;
  width: 100%;
}

.counter-btn .circle {
  position: relative;
  /* Primary/P75 */

  border: 1px solid var(--primary-p75);
  width: 40px;
  height: 40px;
}

.counter {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  /* Grey/Grey1 */

  color: var(--grey-grey1);
}

@media (min-width: 950px) {
  .webskeleton {
    display: block;
  }

  .SkeletonLoader {
    display: none;
  }
}

@media (max-width: 950px) {
  .product-top-wrap {
    padding: 0;
    gap: 8px;
  }

  .webskeleton {
    display: none;
  }

  .SkeletonLoader {
    display: block;
  }
}
</style>

<style>
.nuxt-link-active .desktop-nav {
  background: var(--primary-p300);
}

.nuxt-link-active .desktop-nav p {
  color: #fff;
}

.nuxt-link-active .desktop-nav svg {
  stroke: #fff;
}

.nuxt-link-active .desktop-nav .nav-content svg path {
  stroke: #fff !important;
}
</style>
