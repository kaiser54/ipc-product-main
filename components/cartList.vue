<template>
  <div class="div">
    <!-- <div v-for="(product, index) in products" :key="index" class="cart-list-con"> -->
    <div class="cart-wrap">
      <div class="cart-product">
        <div class="image">
          <!-- <img :src="product.image" alt="" /> -->
          <!-- <img :src="require(`~/assets/images/${product.image}`)" /> -->
          <img :src="product.image" :alt="product.title" />
        </div>
      </div>
      <div class="cart-product-details">
        <!-- product title and price -->
        <div class="name-price">
          <div class="text-container">
            <p class="name">{{ product.title }}</p>
          </div>
          <p class="price"><span class="naira">₦</span> {{ product.price }}</p>
        </div>
        <!-- -------------- -->

        <div class="button-group">
          <div class="delete-tag">
            <!-- delete button here -->
            <div class="circle" @click="removeFromCart(product.id)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.33333 3.99967V2.66634C5.33333 1.92996 5.93029 1.33301 6.66667 1.33301H9.33333C10.0697 1.33301 10.6667 1.92996 10.6667 2.66634V3.99967M2 3.99967H14H2ZM3.33333 3.99967V13.333C3.33333 14.0694 3.93029 14.6663 4.66667 14.6663H11.3333C12.0697 14.6663 12.6667 14.0694 12.6667 13.333V3.99967H3.33333Z"
                  stroke="#565C69"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <!-- -------------- -->

            <!-- <div class="stock-tag" :class="{ 'in-stock': product.inStock }">
                {{ product.inStock ? "In stock" : "Out of stock" }}
              </div> -->

            <!-- counter button -->
          </div>
          <div class="quantity">
            <button class="circle" @click="decrementQuantity" :disabled="getProductQuantity < 2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M3.33325 8H12.6666"
                  stroke="#303237"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <div class="counter">{{ getProductQuantity }}</div>
            <button class="circle" @click="incrementQuantity">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M3.33325 7.99967H12.6666M7.99992 3.33301V12.6663V3.33301Z"
                  stroke="#303237"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="divider-"></div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
    inCart: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapState(["cart"]),
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
  methods: {
    ...mapMutations(["removeFromCart"]),
    addToCart() {
      this.$store.commit("addToCart", this.product);
    },
    incrementQuantity() {
      this.$store.commit("incrementQuantity", { productId: this.product.id });
    },
    decrementQuantity() {
      this.$store.commit("decrementQuantity", { productId: this.product.id });
    },
  },
};
</script>

<style scoped>
.div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;

  width: 100%;
}

.cart-product {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;

  max-width: 399px;
  /* width: 100%; */
  /* height: 90px; */
}

.cart-wrap {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  width: 100%;
}

.image {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 56px;
  height: 63px;

  /* Grey/Grey6 */

  background: #f4f5f8;
  border-radius: 1.49333px;
}

.image img {
  width: auto;
  height: 100%;
  object-fit: contain;
  object-position: center;
  margin-inline: auto;
}

.cart-product-details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  width: 100%;
  /* width: 327px;
height: 90px; */
}

.name-price {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0px;
  /* gap: 16px; */
  gap: 33px;

  /* width: 327px; */
  width: 100%;
  height: 42px;
}

p.name {
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* or 150% */

  /* Grey/Grey1 */

  color: var(--grey-grey1);
}

p.price {
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.5px;
  /* identical to box height, or 150% */

  white-space: nowrap;

  /* Grey/Grey1 */

  color: var(--grey-grey1);
}

.button-group {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;

  width: 100%;
}

.delete-tag {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;
}

.circle {
  width: 32px;
  height: 32px;
  padding: 0;
}

.quantity {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;
}

@media (max-width: 950px) {
  p.price {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
}

/* .divider- {
  width: 100%;
  max-width: 441px;
  height: 0px;



  border-bottom: 1px solid var(--grey-grey5);
} */
</style>
