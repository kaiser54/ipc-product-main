<template>
  <div class="product__list flex">
    <div class="image">
      <img :src="product.image" :alt="product.title" />
    </div>
    <div class="product__info flex">
      <div class="product__group flex child__1" :class="className__1">
        <div class="product__name">
          {{ product.title }}
        </div>
        <div class="product__order__id" v-if="showID">Order Id: 1234567</div>
        <div class="flex flex__center" style="gap: 16px">
          <div class="product__delete__btn" v-if="deleteBtn">
            <DynamicButton
              @clickButton="removeFromCart(product.id)"
              class="auto"
              buttonText=""
              size="small"
              type="neutral"
              icon="icon-left"
              :disabled="false"
              :showText="false"
            >
              <template v-slot:svg>
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
              </template>
            </DynamicButton>
          </div>
          <DynamicTags
            :tagText="tagText"
            :size="size"
            :type="type"
            :v-if="showTag"
          />
        </div>
      </div>
      <div class="product__group flex child__2" :class="className__2">
        <div class="product__price">₦ {{ product.price }}</div>
        <div class="product__qty" v-if="showQty">
          Qty: {{ getProductQuantity }}
        </div>
        <div class="product__counter flex" v-if="ShowCounter">
          <DynamicButton
            @clickButton="decrementQuantity"
            class="auto"
            buttonText=""
            size="small"
            type="neutral"
            icon="icon-left"
            :disabled="false"
            :showText="false"
          >
            <template v-slot:svg>
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
            </template>
          </DynamicButton>
          <div class="counter">{{ getProductQuantity }}</div>
          <DynamicButton
            @clickButton="incrementQuantity"
            class="auto"
            buttonText=""
            size="small"
            type="neutral"
            icon="icon-left"
            :disabled="false"
            :showText="false"
          >
            <template v-slot:svg>
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
            </template>
          </DynamicButton>
        </div>
        <DynamicButton
          v-if="showBtn"
          @clickButton="addToCart(product)"
          size="small"
          type="primary"
          buttonText="Buy now"
          class="auto"
        />
      </div>
    </div>
    <div class="svg" v-if="showSvg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="33"
        viewBox="0 0 32 33"
        fill="none"
      >
        <path
          d="M13.334 11.168L18.6673 16.5013L13.334 21.8346"
          stroke="#565C69"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
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
    showID: {
      type: Boolean,
      default: false,
    },
    deleteBtn: {
      type: Boolean,
      default: false,
    },
    showTag: {
      type: Boolean,
      default: false,
    },
    showQty: {
      type: Boolean,
      default: false,
    },
    ShowCounter: {
      type: Boolean,
      default: false,
    },
    showBtn: {
      type: Boolean,
      default: false,
    },
    showSvg: {
      type: Boolean,
      default: false,
    },
    tagText: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    showTag: {
      type: Boolean,
      default: false,
    },
    className__1: {
      type: String,
      default: "",
    },
    className__2: {
      type: String,
      default: "",
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
    addToCart() {
      // this.$store.commit("addToCart", this.product);
      this.$emit("addToCartEvent", this.product);
    },
    removeFromCart() {
      // this.$store.commit("addToCart", this.product);
      this.$emit("removeFromCartEvent", this.product.id);
    },
    incrementQuantity() {
      // this.$store.commit("incrementQuantity", { productId: this.product.id });
      this.$emit("incrementQuantityEvent", this.product.id);
    },
    decrementQuantity() {
      // this.$store.commit("decrementQuantity", { productId: this.product.id });
      this.$emit("decrementQuantityEvent", this.product.id);
    },
  },
};
</script>
  
  <style scoped>
.product__list {
  align-items: flex-start;
  gap: 16px;
}
.product__group {
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
}
.child__2 {
  align-items: flex-end;
  justify-content: space-between;
}
.product__name {
  color: var(--grey-grey1, #303237);

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px; /* 150% */

  max-width: 500px;
}
.product__price {
  color: var(--grey-grey1, #303237);
  text-align: right;

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
}
.product__order__id {
  color: var(--grey-grey2, #565c69);

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px; /* 150% */
}
.product__info {
  width: 100%;
  justify-content: space-between;
}
.product__counter {
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 120px;
}
.counter {
  width: 30px;
  text-align: center;

  color: var(--grey-grey1, #303237);

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
}
.svg {
  width: 33px;
  align-self: center;
}
.product__qty {
  color: var(--grey-grey1, #303237);

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px; /* 150% */
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
  height: 100%;
}

.image img {
  width: auto;
  height: 100%;
  object-fit: contain;
  object-position: center;
  margin-inline: auto;
}
.flex__gap {
  gap: 32px;
}
</style>
  