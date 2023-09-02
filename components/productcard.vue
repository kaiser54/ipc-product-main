<template>
  <!-- product card container starts here -->

  <div class="product-card">
    <!-- like button -->

    <div class="circle">
      <svg
        class="liked"
        @click="toggleLike"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M7.63018 13.8405L2.38403 8.37754C0.906344 6.8388 0.999397 4.31573 2.58606 2.89953C4.16015 1.49454 6.54688 1.76737 7.79078 3.49447L7.99992 3.78483L8.20905 3.49447C9.45298 1.76737 11.8397 1.49454 13.4138 2.89953C15.0004 4.31573 15.0935 6.8388 13.6158 8.37754L8.36965 13.8405C8.16545 14.0531 7.83438 14.0531 7.63018 13.8405Z"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>

    <!-- -------------------------------- -->

    <nuxt-link
      :to="`/dashboard/market/${product.name}~${product._id}`"
      class="card_wrap"
    >
      <div class="product-img-grp">
        <!-- product image -->
        <div class="image-container">
          <img v-if="product.images && product.images.length > 0" :src="product.images[0].url" :alt="product.name" />
        </div>
        <!-- -------------------------------- -->
      </div>

      <!-- product details here -->

      <div class="productcard-details">
        <div class="productcard-name text-container">
          <p>{{ product.name }}</p>
        </div>
        <div class="productcard-price">
          <p><span class="naira">₦</span> {{ product.discountPrice }}</p>
          <p class="slashprice">
            <span class="naira">₦</span> {{ product.actualPrice }}
          </p>
        </div>
      </div>

      <!-- ------------------------- -->
    </nuxt-link>

    <!-- add to cart button  -->

    <button class="btn secondary-btn-small" @click="addToCart" v-if="!inCart">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="16"
        viewBox="0 0 17 16"
        fill="none"
      >
        <path
          d="M3.83325 7.99992H13.1666M8.49992 3.33325V12.6666V3.33325Z"
          stroke="#0009B3"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <p>Add to cart</p>
    </button>

    <!-- -------------------------------- -->

    <div v-else class="counter-btn">
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

      <!-- <input type="number" v-model.number="itemCount" min="1" class="counter input" /> -->
      <div class="counter">{{ getProductQuantity }}</div>

      <button @click="incrementQuantity" class="circle">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLiked: false,
    };
  },
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
    getProductQuantity() {},
  },
  methods: {
    addToCart() {},
    incrementQuantity() {},
    decrementQuantity() {},
    toggleLike() {},
  },
};
</script>
<style scoped>
a {
  width: 100%;
}
.card_wrap {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  gap: 8px;
}
.product-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  gap: 8px;
  width: 100%;
  max-width: 230px;
  height: 309px;

  /* White */

  background: var(--white);
  border-radius: 8px;
  transition: all 0.2s ease-in;
}

.product-card:hover {
  /* Product card hover */

  box-shadow: 0px 0px 20px rgba(48, 50, 55, 0.2);
}

.product-img-grp {
  display: flex;
  /* align-items: center; */
  justify-content: center;

  max-width: 206px;
  width: 100%;
  height: 100%;
  /* max-height: 161px; */
  position: relative;

  /* White */

  background: var(--white);
  border-radius: 8px;
}

.circle {
  position: absolute;
  top: 12px;
  right: 12px;

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
  z-index: 1;
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

.image-container {
  max-width: 139px;
  width: 100%;
  /* Set the desired width */
  height: 149px;
  /* Set the desired height */
  overflow: hidden;
  /* Hide any overflowing content */
  position: relative;
  /* Establish a positioning context for the child image */
}

.image-container img {
  width: 100%;
  /* Make the image fill the container */
  height: 100%;
  /* Maintain the image's aspect ratio */
  object-fit: contain;
  /* Clip the image to fit within the container */
  margin-inline: auto;
}

.productcard-details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0px;
  gap: 4px;

  width: 100%;
  /* max-width: 206px; */
  /* height: 76px; */
}

.productcard-name p {
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* or 150% */

  /* Grey/Grey2 */

  color: var(--grey-grey2);
}

.productcard-price {
  display: flex;
  align-items: center;
  gap: 8px;
}

.productcard-price p {
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  text-align: right;

  /* Grey/Grey1 */
  color: var(--grey-grey1);
}

.productcard-price .slashprice {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */

  text-align: right;
  text-decoration-line: line-through;

  /* Grey/Grey3 */

  color: var(--grey-grey3);
}

button p {
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height, or 150% */

  /* Primary/P300 */

  color: var(--primary-p300);
}

.counter-btn {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 16px;
  width: 100%;
}

.counter-btn .circle {
  position: relative;
  /* Primary/P75 */

  border: 1px solid var(--primary-p75);
  width: 40px;
  height: 40px;
  top: 0;
  left: 0;
}

.counter {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  /* Grey/Grey1 */

  color: var(--grey-grey1);
}

@media (max-width: 950px) {
  .image-container {
    height: 118px;
  }
  .product-card {
    width: 167px;
    /* height: 287px; */
    justify-content: space-between;
  }

  .product-img-grp img {
    max-width: 100px;
    width: 100%;
  }

  .productcard-details {
    max-width: 141px;
    width: 100%;
  }

  .productcard-name p {
    /* white-space: nowrap; */
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 140px;
  }

  button svg {
    display: none;
  }

  .counter-btn svg {
    display: block;
  }
}

@media (max-width: 374px) {
  .product-card {
    max-width: 150px;
    width: 100%;
  }

  .productcard-name p {
    width: 100px;
  }
  .productcard-price {
    gap: 0;
    flex-direction: column;
  }
}

@media (max-width: 339px) {
  .product-card {
    max-width: 120px;
    width: 100%;
  }

  .productcard-name p {
    width: 100px;
  }
  .product-card {
    height: auto;
  }
}
</style>
