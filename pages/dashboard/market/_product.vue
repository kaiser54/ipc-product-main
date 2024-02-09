<template>
  <div :class="{ 'user-details-component': mobile }" v-if="productDetails" class="goTop">
    <LoaderGeneral v-if="loading" />
    <!-- <LoaderComponent v-if="loading" /> -->
    <div class="component-header" v-if="mobile">
      <div class="component-header-main">
        <!-- back button for mobile view -->
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
        <!-- ---------------------------- -->

        <!-- header -->
        <p>Product details</p>

        <div class="component-cart">
          <nuxt-link to="/dashboard/market/cart">
            <div class="badge">
              <p>{{ TotalCart }}</p>
            </div>
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
        <!-- ----------------- -->
      </div>
    </div>

    <!-- back button -->
    <goback style="margin-bottom: 28px; margin-left: 16px" />
    <!-- ----------- -->

    <div class="product-detail-con">
      <!-- product details page for mobile view -->
      <div class="mobile-product-details" v-if="mobile">
        <!-- the moving product carousel -->
        <div
          class=""
          style="width: 100%"
          v-if="productDetails?.images && Array.isArray(productDetails.images)"
        >
          <ProductCarousel :images="productDetails?.images" />
        </div>
        <!-- ---------------------------- -->

        <div class="product-content">
          <!-- product title, brand name and like button -->

          <div class="product-details-title">
            <h3 class="h3-small-medium">{{ productDetails?.name }} {{ displayUnit }}</h3>
            <p class="product-details-brand">
              Brand: <span>{{ productDetails?.brand }}</span>
            </p>
          </div>
          <div class="product-details-price-grp">
            <h3 class="h3-bold">
              <span class="naira">₦</span>
              {{ productDetails && formatPriceWithCommas(productDetails.discountPrice) }}
            </h3>
            <tags />
          </div>
          <p class="product-details-snippet">
            {{ productDetails?.description }}
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
            <div
              class="product-img zoom-container"
              ref="zoomContainer"
              v-if="productDetails?.images && Array.isArray(productDetails.images)"
            >
              <img
                v-for="(image, index) in productDetails.images"
                :key="index"
                :src="image.url"
                alt="Product Image"
                class="zoom-image"
                ref="zoomImage"
              />
            </div>

            <!-- --------------- -->

            <!-- product thumbnail under the main product image -->
            <div class="product-thumb">
              <div
                class="thumb"
                v-for="(image, index) in fakeProduct.images"
                :key="index"
              >
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
                  {{ productDetails?.name }} {{ displayUnit }}
                </h3>
                <p class="product-details-brand">
                  Brand: <span>{{ productDetails?.brand }}</span>
                </p>
              </div>
            </div>
            <!-- ------------------------------- -->

            <p class="product-details-snippet">
              {{ productDetails.description }}
            </p>

            <div class="product-details-price-grp">
              <h3 class="h3-bold" v-if="hasSpecialPrice">
                <span class="naira"><span class="naira">₦</span></span>
                {{
                  productDetails && formatPriceWithCommas(specialPrice)
                }}
              </h3>
              <h3 class="h3-bold" v-else>
                <span class="naira"><span class="naira">₦</span></span>
                {{
                  productDetails && formatPriceWithCommas(productDetails.discountPrice)
                }}
              </h3>
              <tags :text="productDetails?.inStock" />
            </div>
            <!-- cart button -->

            <!-- add to cart button  -->

            <!-- <button class="btn primary-btn">Add to cart</button> -->

            <button
              class="btn primary-btn"
              @click="addProductToCart"
              v-if="!isInCart"
              :disabled="!productDetails.inStock"
            >
              <span v-if="!loader && productDetails.inStock" style="color: white"
                >Add to cart</span
              >
              <span v-if="!loader && !productDetails.inStock" style="color: white"
                >Out of Stock</span
              >

              <span class="loader" v-if="loader"></span>
            </button>

            <!-- -------------------------------- -->

            <div v-if="isInCart && productDetails.inStock" class="counter-btn">
              <!-- counter button -->

              <button @click="decrementQuantity" class="circle btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M3.33325 8H12.6666"
                    stroke="#0009B3"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>

              <input
                type="number"
                class="counter input"
                v-model="quantity"
                v-if="!cartLoading"
              />
              <span class="loader" v-if="cartLoading"></span>

              <button @click="increaseQuantity" class="circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M3.33325 7.99967H12.6666M7.99992 3.33301V12.6663V3.33301Z"
                    stroke="#0009B3"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
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

    <div class="bottom-nav" v-if="mobile">
      <div class="addBtn">
        <button class="btn primary-btn" @click="addProductToCart">Add to cart</button>
      </div>
      <div class="operation">
        <!-- counter button -->

        <button @click="decrementQuantity" class="circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M3.33325 8H12.6666"
              stroke="#0009B3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <!-- <input type="numberer" v-model.number="itemCount" min="1" class="counter input" /> -->
        <input
          type="number"
          class="counter input"
          v-model="quantity"
          v-if="!cartLoading"
        />
        <span class="loader" v-if="cartLoading"></span>

        <button @click="increaseQuantity" class="circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M3.33325 7.99967H12.6666M7.99992 3.33301V12.6663V3.33301Z"
              stroke="#0009B3"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>

    <div class="categories-ctn">
      <!-- <CategoryCards Header="You might also like this">
        <template v-slot:svg>
          <svg
            @click="toggleColor"
            :class="{ Red: isRed }"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.6304 21.8405L10.3843 16.3775C8.90659 14.8388 8.99964 12.3157 10.5863 10.8995C12.1604 9.49454 14.5471 9.76737 15.791 11.4945L16.0002 11.7848L16.2093 11.4945C17.4532 9.76737 19.8399 9.49454 21.414 10.8995C23.0007 12.3157 23.0938 14.8388 21.616 16.3775L16.3699 21.8405C16.1657 22.0531 15.8346 22.0531 15.6304 21.8405Z"
              :stroke="isRed ? '#FF0000' : '#565C69'"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <rect
              x="0.5"
              y="0.5"
              width="31"
              height="31"
              rx="15.5"
              :stroke="isRed ? '#FF0000' : '#565C69'"
            />
          </svg>
        </template>
      </CategoryCards> -->
      <!-- <div class="product-buttom-nav">
        <ProductDetailb />
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  name: "product",
  layout: "dashboardview",
  // Other component properties and methods
  data() {
    return {
      pageTitle: "Gosource | Market",
      mobile: false,
      productId: this.product ? this.product._id : "",
      productTitle: null,
      fakeProduct: {},
      productDetails: {},
      productImage: 0,
      currentPage: "",
      inCart: false,
      loading: true,
      isLiked: false,
      loader: false,
      cartId: "",
      quantity: 0,
      userId: localStorage.getItem("userId"),
    };
  },
  head() {
    return {
      title: this.pageTitle,
    };
  },
  computed: {
    ...mapGetters("product", ["getProductById"]),
    ...mapGetters("cart", ["TotalCart"]),
    ...mapState("cart", ["cart", "cartLoading", "totalPrice", "error"]),
    isInCart() {
      return this.cart.some((cartItem) => cartItem.product._id === this.currentPage);
    },
    displayUnit() {
      if (
        this.productDetails.unit === undefined ||
        this.productDetails.unit === "undefined"
      ) {
        return "";
      } else {
        return this.productDetails.unit;
      }
    },
    getProductQuantity() {
      if (this.isInCart) {
        const cartItem = this.cart.find((c) => c.product._id === this.currentPage);

        if (cartItem) {
          this.cartId = cartItem._id;
          this.quantity = cartItem.quantity;
          return cartItem.quantity;
        } else {
          return 0;
        }
      } else {
        return 0;
      }
    },

    product() {
      return this.getProductById(this.currentPage);
    },
    isInSaved() {},
    hasSpecialPrice() {
      // Check if the specialPrices array exists and if the user's ID matches the customer ID in the special prices array
      return (
        this.productDetails.specialPrices &&
        this.productDetails.specialPrices.some((price) => price.customerId === this.userId)
      );
    },
    specialPrice() {
      // Find the special price for the user
      const specialPrice = this.productDetails.specialPrices.find(
        (price) => price.customerId === this.userId
      );
      return specialPrice ? specialPrice.price : this.productDetails.discountPrice; // Use discountPrice as fallback
    },
  },
  watch: {
    product(newProduct) {
      this.productDetails = newProduct;
      this.loading = false;
    },
    quantity(newQuantity) {
      this.scheduleUpdate(newQuantity);
    },
  },
  async mounted() {
    this.$store.dispatch("product/fetchAllProducts");
    const pathArray = this.$route.path.split("~");
    const lastSegment = decodeURIComponent(pathArray[pathArray.length - 1]);
    this.currentPage = lastSegment;
    this.checkScreenSize();
    this.fetchCartItemsByUserID();
    window.addEventListener("resize", this.checkScreenSize);
    this.fetchProductByID(this.currentPage);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkScreenSize);
    clearInterval(this.zoomInterval);
  },

  methods: {
    ...mapActions("cart", [
      "addToCart",
      "reduceQuantity",
      "increaseItem",
      "fetchCartItemsByUserID",
    ]),
    ...mapActions("product", ["fetchProductByID"]),
    formatPriceWithCommas(number) {
      if (number === undefined) {
        return number; // or any default value or error message you prefer
      }
      // Convert the number to a string
      const numberStr = number.toString();

      // Use regular expressions to add commas
      // This regex adds commas every three digits from the end
      const formattedNumber = numberStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

      return formattedNumber;
    },
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
    addProductToCart() {
      this.loader = true;
      this.addToCart({ product: this.productDetails, quantity: this.quantity }).then(
        () => {
          this.loader = false;
        }
      );
    },
    increaseQuantity() {
      const e = {
        productId: this.cartId,
      };
      this.loader = true;
      this.increaseItem(e).then(() => {
        this.loader = false;
      });
    },
    decrementQuantity() {
      if (this.getProductQuantity > 1) {
        this.loader = true;
        this.reduceQuantity(this.cartId).then(() => {
          this.loader = false;
        });
      }
    },
    toggleLike() {
      // Method logic goes here
      this.isLiked = !this.isLiked;
      this.$store.commit("addToSaved", this.product);
    },
    scheduleUpdate() {
      // Cancel any existing scheduled update
      if (this.updateTimeout) {
        clearTimeout(this.updateTimeout);
      }
      // Schedule a new update after 1000ms (1 second)
      this.updateTimeout = setTimeout(() => {
        this.addProductToCart();
        this.updateTimeout = null;
      }, 1000);
    },
  },
};
</script>

<style scoped>
.loader {
  width: 20px;
  height: 20px;
  border: 2px solid var(--#07B463);
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
@media (max-width: 950px) {
  .user-details-component {
    height: auto;
    position: relative;
    margin-top: -100px;
  }
}
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
  /* margin: 28px 16px; */
}

@media (max-width: 750px) {
}

.mobile-product-details {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
}
.test {
  border: 1px solid red;
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
  gap: 50px;
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
  color: var(--new-primary-p300);
}

.btn:disabled {
  cursor: not-allowed;
}
.counter-btn .circle {
  background: var(--new-primary-p300);
}
.counter-btn .circle:hover {
  background: var(--new-primary-p400);
}
.counter-btn .circle:focus {
  background: var(--new-primary-p500);
}
.counter-btn .circle:active {
  background: var(--new-primary-p500);
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

.circle svg path {
  stroke: #565c69;
}
.circle svg.liked path {
  stroke: red;
}

.circle .liked {
  fill: red;
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
  max-width: 85px;
  width: 100%;
  color: var(--grey-grey1);
  outline: none;
  border: none;
  text-align: center;
  padding: 0;
}
.categories-ctn {
  margin-top: 48px;
  padding: 0px 0px;
  margin-bottom: 0px;
  width: 100%;
}
.product-buttom-nav {
  display: none;
}

.nuxt-link-active .desktop-nav {
  background: var(--supporting-green-s-300);
}

.nuxt-link-active .desktop-nav p {
  color: #fff;
}

/* .nuxt-link-active .desktop-nav svg {
  stroke: #fff;
}

.nuxt-link-active .desktop-nav .nav-content svg path {
  stroke: #fff !important;
} */

@media (min-width: 950px) {
  .goTop {
    margin: 0;
  }
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

  .categories-ctn {
    padding: 0px 0px;
    margin-bottom: 100px;
    /* border: 1px solid red; */
    width: 100%;
  }
  .webskeleton {
    display: none;
  }

  .SkeletonLoader {
    display: block;
  }
  .product-buttom-nav {
    position: fixed;
    display: block;
    bottom: 0;
    width: 100%;
  }
  .categories-ctn {
    padding: 0px 0px;
    margin-bottom: 100px;
    width: 100%;
  }
  .operation {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 30px;
    width: 45%;
    /* border: 1px solid blue; */
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

    width: 36px;
    height: 36px;

    /* Grey/Grey4 */

    border: 1px solid var(--grey-grey4);
    /* border: 1px solid red; */
    border-radius: 100px;
  }
  .addBtn {
    /* border: 1px solid red; */
    width: 50%;
  }
  .bottom-nav {
    position: fixed;
    padding: 10px 20px;
    bottom: 0;
    left: 0;
    height: 77px;
    width: 100%;
    z-index: 99;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    align-items: center;
    gap: 30px;
    /* border: 1px solid red; */
    background: #ffffff;
    box-shadow: 0px 0px 20px rgba(48, 50, 55, 0.2);
  }
  .operation {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    width: 50%;
  }
}
@media screen and (max-width: 768px) {
  .product-buttom-nav {
    position: fixed;
    display: block;
    bottom: 0;
    width: 100%;
  }
  .categories-ctn {
    padding: 0px 0px;
    margin-bottom: 100px;
    width: 100%;
  }
  .operation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    width: 30%;
    /* border: 1px solid blue; */
  }
}
@media screen and (max-width: 600px) {
  .product-buttom-nav {
    position: fixed;
    display: block;
    bottom: 0;
    width: 100%;
  }
  .categories-ctn {
    padding: 0px 0px;
    margin-bottom: 100px;
    width: 100%;
  }
  .operation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    width: 40%;
  }
}
</style>
