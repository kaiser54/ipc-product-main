<template>
  <div :class="{'user-details-component': mobile}">
    <div class="component-header" v-if="mobile">
      <div class="component-header-main">
        <svg
        @click="$router.go(-1)"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M3 12L10 19M21 12H3H21ZM3 12L10 5L3 12Z"
            stroke="#565C69"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p>Product details</p>
        <div class="component-cart">
          <div class="badge">
            <p>9</p>
          </div>
          <nuxt-link to="/dashboard/market/cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3 9C3 7.89543 3.89543 7 5 7H19C20.1046 7 21 7.89543 21 9V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V9Z"
                stroke="#565C69"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 10V6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6V9.6888"
                stroke="#565C69"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="product-detail-con">
      <div class="mobile-product-details" v-if="mobile">
        <productCarousel />
        <div class="product-content">
          <div class="product-details-title">
            <h3 class="h3-small-medium">
              Mama'S Choice Nigerian Parboiled Rice 25kg
            </h3>
            <p class="product-details-brand">
              Brand: <span>Mama’s Choice</span>
            </p>
          </div>
          <div class="product-details-price-grp">
            <h3 class="h3-bold">₦ 75,000</h3>
            <tags />
          </div>
          <p class="product-details-snippet">
            Mama's Pride Rice is not only delicious, but also incredibly simple
            to prepare. This brand of high-quality rice boasts both indigenous
            and international flavors.
          </p>
        </div>
      </div>

      <div class="product-details-wrapper" v-else>
        <div class="product-details-main">
          <div class="product-img-thumb">
            <div class="product-img zoom-container" ref="zoomContainer">
              <img
                :src="
                  require(`~/assets/images/${product.images[productImage]}`)
                "
                class="zoom-image" ref="zoomImage"
              />
              <!-- <img src="~/assets/images/p1.png" alt="" /> -->
            </div>
            <div class="product-thumb">
              <div
                class="thumb"
                v-for="(image, index) in product.images"
                :key="index"
              >
                <img
                  :src="require(`~/assets/images/${image}`)"
                  alt=""
                  @click="changeImage(index)"
                />
              </div>
            </div>
          </div>
          <div class="product-details-content">
            <div class="product-details-title-like">
              <div class="product-details-title">
                <h3 class="h3-small-medium">
                  Mama'S Choice Nigerian Parboiled Rice 25kg
                </h3>
                <p class="product-details-brand">
                  Brand: <span>Mama’s Choice</span>
                </p>
              </div>
              <div class="circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M7.63018 13.8405L2.38403 8.37754C0.906344 6.8388 0.999397 4.31573 2.58606 2.89953C4.16015 1.49454 6.54688 1.76737 7.79078 3.49447L7.99992 3.78483L8.20905 3.49447C9.45298 1.76737 11.8397 1.49454 13.4138 2.89953C15.0004 4.31573 15.0935 6.8388 13.6158 8.37754L8.36965 13.8405C8.16545 14.0531 7.83438 14.0531 7.63018 13.8405Z"
                    stroke="#565C69"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <p class="product-details-snippet">
              Mama's Pride Rice tastes so good and it is very easy to cook. This
              indigenous international quality rice brands cooks
            </p>
            <div class="product-details-price-grp">
              <h3 class="h3-bold">₦ 75,000</h3>
              <tags />
            </div>
            <button class="btn primary-btn">Add to cart</button>
            <guarantee />
          </div>
        </div>
        <relatedProduuct />
      </div>
    </div>
  </div>
</template>

<script>
import guarantee from "~/components/guarantee.vue";
import RelatedProduuct from "~/components/relatedProduuct.vue";
export default {
  components: { guarantee, RelatedProduuct },
  layout: "dashboardview",
  // Other component properties and methods
  data() {
    return {
      pageTitle: "IPC | Market",
      mobile: false,
      product: {
        id: 1,
        name: "Product Name",
        description: "Product Description",
        price: "$100",
        images: [
          "p1.png",
          "category1.png",
          "category2.png",
          "category3.png",
          "category4.png",
        ],
        // other product data
      },
      productImage: 0,
    };
  },
  head() {
    return {
      title: this.pageTitle,
    };
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener("resize", this.checkScreenSize);


    const zoomImage = this.$refs.zoomImage;
    const zoomContainer = this.$refs.zoomContainer;
    const zoomLevel = 2; // Change this value to adjust the zoom level
    
    zoomImage.addEventListener('mousemove', e => {
      const mouseX = e.offsetX / zoomContainer.offsetWidth;
      const mouseY = e.offsetY / zoomContainer.offsetHeight;
  
      zoomImage.style.transformOrigin = `${mouseX * 100}% ${mouseY * 100}%`;
      zoomImage.style.transform = `scale(${zoomLevel})`;
    });

    zoomImage.addEventListener('mouseleave', () => {
      zoomImage.style.transform = 'scale(1)';
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkScreenSize);
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
      // Add product to cart
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
  transition: transform .2s ease-in-out;
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
  max-width: 359.55px;
}

.product-details-title-like {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 64px;

  width: 100%;
  max-width: 359.55px;

  position: relative;
}

.product-details-title {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;

  width: 100%;
  max-width: 255.55px;
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
