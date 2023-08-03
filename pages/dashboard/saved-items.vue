<template>
  <div class="view-page">
    <div class="top-header">
      <div class="title-header">
        <goback />
        <h2 class="h2-medium header-text">Saved items</h2>
      </div>
    </div>
    <EmptyStates v-if="savedItem.length == 0" @leaveCart="leaveCart">
      <template v-slot:svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="150"
          height="140"
          viewBox="0 0 150 140"
          fill="none"
        >
          <g clip-path="url(#clip0_5951_21917)">
            <path
              d="M145.103 70.1912C145.103 83.7264 141.249 96.3618 134.579 107.069C129.085 115.883 121.682 123.392 112.945 129.009C102.02 136.039 89.0107 140.117 75.0465 140.117C74.8555 140.117 74.6646 140.117 74.4736 140.114C60.2339 140.001 47.0083 135.646 35.999 128.256C27.7945 122.748 20.8233 115.555 15.5801 107.176C8.86868 96.4462 4.99023 83.7702 4.99023 70.1912C4.99023 31.5728 36.3559 0.265625 75.0465 0.265625C113.737 0.265625 145.103 31.5728 145.103 70.1912Z"
              fill="white"
            />
            <path
              d="M112.944 95.8984V129.008C102.019 136.038 89.0098 140.116 75.0455 140.116C74.8545 140.116 74.6636 140.116 74.4727 140.113V95.8984H112.944Z"
              fill="#E5E7EF"
            />
            <path
              d="M112.944 95.9011H74.4727L90.4529 74.8828H128.927L112.944 95.9011Z"
              fill="#BDC0CE"
            />
            <path
              d="M93.0078 122.905C96.0192 113.053 93.6151 101.54 98.9429 92.3945C100.408 89.8824 102.602 87.6265 105.413 86.8767C108.863 85.9581 112.6 87.5078 115.164 89.9855C117.286 92.0383 118.748 94.6441 120.007 97.2843C121.265 99.9245 122.104 102.458 124.223 104.399C125.885 105.92 128.086 106.783 130.324 107.076C132.562 107.37 134.841 107.126 137.045 106.648"
              stroke="#E6E6F7"
              stroke-width="9"
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
            <path
              d="M74.4726 95.8984V140.113C60.2329 140 47.0073 135.645 35.998 128.255V95.8984H74.4726Z"
              fill="#BDC0CE"
            />
            <path
              d="M35.999 95.9011H74.4735L58.4902 74.8828H20.0156L35.999 95.9011Z"
              fill="#7E8494"
            />
            <path
              d="M55.9356 122.905C52.9242 113.053 55.3283 101.54 50.0005 92.3945C48.5355 89.8824 46.3412 87.6265 43.5302 86.8767C40.0806 85.9581 36.343 87.5078 33.7793 89.9855C31.6569 92.0383 30.1951 94.6441 28.9367 97.2843C27.7378 99.7995 26.8394 102.458 24.7202 104.399C23.058 105.92 20.8574 106.783 18.6192 107.076C16.381 107.37 14.1022 107.126 11.8984 106.648"
              stroke="#E6E6F7"
              stroke-width="9"
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
            <path
              d="M54.852 60.604L51.5213 61.0758L51.0486 64.4003L50.5728 61.0758L47.2422 60.604L50.5728 60.1291L51.0486 56.8047L51.5213 60.1291L54.852 60.604Z"
              fill="#FFC22E"
            />
            <path
              d="M99.9789 34.4165L96.6483 34.8883L96.1756 38.2128L95.6998 34.8883L92.3691 34.4165L95.6998 33.9416L96.1756 30.6172L96.6483 33.9416L99.9789 34.4165Z"
              fill="#FFC22E"
            />
            <path
              d="M139.327 55.7056L135.996 56.1774L135.52 59.5018L135.047 56.1774L131.717 55.7056L135.047 55.2307L135.52 51.9062L135.996 55.2307L139.327 55.7056Z"
              fill="#FFC22E"
            />
            <path
              d="M29.143 23.4759L25.8123 23.9508L25.3365 27.2753L24.8638 23.9508L21.5332 23.4759L24.8638 23.0041L25.3365 19.6797L25.8123 23.0041L29.143 23.4759Z"
              fill="#FFC22E"
            />
            <path
              d="M76.9408 52.5417L74.1705 52.9353L73.7761 55.7036L73.3816 52.9353L70.6113 52.5417L73.3816 52.148L73.7761 49.3828L74.1705 52.148L76.9408 52.5417Z"
              fill="#DCE0D7"
            />
            <path
              d="M52.5514 19.6776L49.781 20.0713L49.3866 22.8364L48.9891 20.0713L46.2188 19.6776L48.9891 19.2839L49.3866 16.5156L49.781 19.2839L52.5514 19.6776Z"
              fill="#DCE0D7"
            />
            <path
              d="M116.111 59.5026L113.34 59.8963L112.946 62.6645L112.552 59.8963L109.781 59.5026L112.552 59.1089L112.946 56.3438L113.34 59.1089L116.111 59.5026Z"
              fill="#DCE0D7"
            />
            <path
              d="M19.2455 67.5651L16.4752 67.9619L16.0808 70.7271L15.6863 67.9619L12.916 67.5651L15.6863 67.1714L16.0808 64.4062L16.4752 67.1714L19.2455 67.5651Z"
              fill="#DCE0D7"
            />
            <path
              d="M80.8053 27.2713L78.0318 27.665L77.6374 30.4302L77.243 27.665L74.4727 27.2713L77.243 26.8777L77.6374 24.1094L78.0318 26.8777L80.8053 27.2713Z"
              fill="#DCE0D7"
            />
            <path
              d="M96.1764 10.037L93.4029 10.4306L93.0085 13.1958L92.6141 10.4306L89.8438 10.037L92.6141 9.64328L93.0085 6.875L93.4029 9.64328L96.1764 10.037Z"
              fill="#DCE0D7"
            />
          </g>
          <defs>
            <clipPath id="clip0_5951_21917">
              <rect
                width="149.911"
                height="140"
                fill="white"
                transform="translate(0.0449219)"
              />
            </clipPath>
          </defs>
        </svg>
      </template>
      <template v-slot:message>
        <div class="message">
          <h2 class="">No saved items was found</h2>
          <div class="snippet">
            Visit the market to save your food items, kitchen utensils, and
            other necessary products.
          </div>
        </div>
      </template>
    </EmptyStates>
    <div class="saved__items__container" v-else>
      <ProductList
        class="product__wrap"
        v-for="product in savedItem"
        :key="product.id"
        :product="product"
        :deleteBtn="true"
        :showTag="true"
        :showBtn="true"
        tagText="In stock"
        size="small"
        type="positive"
        className__1="flex__gap"
        @addToCartEvent="addToCart"
        @removeFromCartEvent="removeFromSaved"
        @incrementQuantityEvent="incrementQuantity"
        @decrementQuantityEvent="decrementQuantity"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import ProductList from "~/components/ProductList.vue";
export default {
  layout: "dashboardview",
  components: { ProductList },
  computed: {
    ...mapState(["savedItem"]),
    isSaved() {
      const productIsSaved = this.$store.state.savedItem.find(
        (p) => p.id === this.product.id
      );
      return productIsSaved !== undefined;
    },
  },
  methods: {
    ...mapMutations(["removeFromSaved"]),
    addToCart(product) {
      this.$store.commit("buyProduct", product);
    },
    incrementQuantity() {
      this.$store.commit("incrementQuantity", { productId: this.product.id });
    },
    decrementQuantity() {
      this.$store.commit("decrementQuantity", { productId: this.product.id });
    },
    leaveCart() {
      this.$router.push("/dashboard/market");
    },
  },
};
</script>

<style scoped>
.view-page {
  gap: 32px;
}
.top-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
}

.title-header {
  gap: 16px;
}
.saved__items__container {
  display: flex;
  max-width: 681px;
  flex-direction: column;
  align-items: flex-start;
  gap: 64px;
}
.product__wrap {
  /* max-width: 681px; */
  width: 100%;
}
@media (max-width: 950px) {
  .top-header {
    display: none;
  }
  .saved__items__container {
    max-width: 100%;
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