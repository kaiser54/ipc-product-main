<template>
  <div class="order-wrapper">
    <div class="order-product">
      <div class="image">
        <img :src="items?.product?.images[0]?.url" :alt="items?.product?.name" />
      </div>
      <div class="order-product-details">
        <div class="order-content">
          <div class="title" :class="{ truncate: checkout }">
            {{ items?.product?.name }}
          </div>
          <div class="order-id-price">
            <div class="order-id" v-if="!checkout">Order Id: {{ data._id }}</div>
            <div class="order-qty">Qty: {{ data.quantity }}</div>
          </div>
          <DynamicTags :tagText="tagText" :size="size" :type="type" />
        </div>

        <div class="price-qty">
        
          <div  class="order-price" :class="{ pricing: checkout }" v-if="hasSpecialPrice">
         
              <span class="naira">₦</span>
              {{ items && formatPriceWithCommas(specialPrice) }}
          
          </div>
          <div v-else class="order-price" :class="{ pricing: checkout }">
            <span class="naira">₦</span>
            {{ formatPriceWithCommas(items?.product?.discountPrice) }}
          </div>
          <div class="order-qty">Qty: {{ data.quantity }}</div>
        </div>
      </div>
      <svg
        v-if="showSvg"
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
import { formatPriceWithCommas } from "~/static/formatPrice";
export default {
  data(){
    return{
      userId: localStorage.getItem("userId"),
    }
  },
  props: {
    showSvg: {
      type: Boolean,
      default: true,
    },
    tagText: {
      type: String,
    },
    size: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    checkout: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
  items() {
    return this.data;
  },
  hasSpecialPrice() {
    // Check if the specialPrices array exists and if the user's ID matches the customer ID in the special prices array
    return (
      this.items.product.specialPrices &&
      this.items.product.specialPrices.some((price) => price.customerId === this.userId)
    );
  },
  specialPrice() {
    const specialPrice = this.items.product.specialPrices.find(
      (price) => price.customerId === this.userId
    );
    const priceValue = specialPrice ? parseFloat(specialPrice.price) : parseFloat(this.items.product.discountPrice);
    return isNaN(priceValue) ? 0 : priceValue;
  }
},

  mounted() {
  console.log(this.data);
  console.log(this. hasSpecialPrice, this.specialPrice)
},
  methods: {
    formatPriceWithCommas,
  },

};
</script>

<style scoped>
a {
  width: 100%;
  color: inherit;
}

.order-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  /* max-width: 784px; */
  width: 100%;
}

.order-product {
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: space-between; */
  padding: 16px;
  gap: 16px;

  width: 100%;

  /* Grey/Grey5 */

  border: 1px solid var(--grey-grey5);
  border-radius: 16px;
}

.image {
  width: 64px;
  height: 72px;

  /* Grey/Grey6 */

  background: var(--grey-grey6);
  border-radius: 1.70667px;
}

.order-product-details {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
  /* max-width: 579px; */
  width: 100%;
}

.order-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
}

.order-content .title {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  /* Grey/Grey1 */

  color: var(--grey-grey1);
}

.order-content .order-id-price .order-qty {
  display: none;
}

/* .order-content .order-id {
    display: none;
  } */
.order-content .order-price {
  display: none;
}

.price-qty {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
  width: auto;
}

.price-qty .order-price {
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  text-align: right;

  /* Grey/Grey1 */

  color: var(--grey-grey1);
}

.price-qty .order-qty {
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 150% */

  /* Grey/Grey1 */

  color: var(--grey-grey1);
}

@media (max-width: 950px) {
  .order-content {
    width: 100%;
  }

  .order-product-details {
    justify-content: flex-start;
    width: auto;
    max-width: fit-content;
  }

  .order-product {
    gap: 8px;
    align-items: flex-start;
  }

  .price-qty {
    display: none;
  }

  .order-content .title {
    white-space: nowrap;
    overflow: hidden;
    /* Hides overflowing text */
    text-overflow: ellipsis;
    /* Adds ellipsis (...) when text overflows */
    max-width: 300px;
    width: 100%;
    /* Adjust the width as needed */
  }

  .order-content .order-id-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .order-content .order-id {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height, or 150% */

    /* Grey/Grey2 */

    color: var(--grey-grey2);
  }

  .order-content .order-id-price .order-qty,
  .order-content .order-price {
    display: flex;
  }

  @media (max-width: 451px) {
    .order-content .title {
      max-width: 150px;
    }
    .order-product-details {
      width: 100%;
      max-width: 200px;
    }
  }

  @media (max-width: 450px) {
    .order-content {
      max-width: 190px;
    }

    .order-content .title {
      max-width: 150px;
    }
  }
}
.truncate {
  white-space: nowrap; /* Prevent text from wrapping to the next line */
  overflow: hidden; /* Hide the overflowed text */
  text-overflow: ellipsis; /* Show an ellipsis (...) when text overflows */
  max-width: 100px; /* Optionally, set a maximum width for the container */
}
.price-qty .pricing {
  /* Body Small/Body Small Medium */
  font-size: 14px !important;
  font-style: normal !important;
  font-weight: 500 !important;
  line-height: 21px !important; /* 150% */
}
</style>
