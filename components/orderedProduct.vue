<template>
  <div class="order-wrapper">
    <Nuxt-link
      :to="`/dashboard/track_orders/${item._id}`"
      class="order-product"
      v-for="item in order"
      :key="item._id"
    >
      <div class="image_wrap">
        <div
          class="image"
          v-for="(image, index) in getProductImages(item.products)"
          :key="index"
        >
          <!-- {{ image.url }} -->
          <img :src="image?.url" alt="product Image" />
        </div>
      </div>
      <div class="order-product-details">
        <div class="order-content">
          <!-- <div class="title">{{ item.name }}</div> -->
          <span class="product-name">
            {{ getProductNames(item.products) }}
          </span>
          <div class="order-id-price">
            <div class="order-id">Order Id: {{ truncateId(item._id, 10) }}</div>
            <!-- <div class="order-qty">Qty: {{ item?.products?.length }}</div> -->
            <div class="order-qty">Qty: {{ calculateTotalProductQuantity(item.products) }}</div>
          </div>
          <div class="order-price">
            <span class="naira">₦</span
            >{{ formatPriceWithCommas(calculateTotalOrderPrice(item?.products)) }}
          </div>
          <DynamicTags
            :tagText="item.status"
            :size="size"
            :type="getTagType(item.status)"
          />
        </div>

        <div class="price-qty">
          <div class="order-price">
            <span class="naira">₦</span
            >{{ formatPriceWithCommas(calculateTotalOrderPrice(item.products)) }}
          </div>
          <div class="order-qty">
            Qty: {{ calculateTotalProductQuantity(item.products) }}
          </div>
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
    </Nuxt-link>
  </div>
</template>
  
<script>
import { formatPriceWithCommas } from "~/static/formatPrice";
export default {
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
    order:{
      type: Array,
      required: true
    }
  },

  data() {
    return {
      orderId: "",
      products: [],
      listSelect: [
        {
          title: "Order procesing",
          type: "warning",
          size: "small",
        },
        {
          title: "Shipped",
          type: "info",
          size: "small",
        },
        {
          title: "Delivered",
          type: "positive",
          size: "small",
        },
      ],
    };
  },

  methods: {
    formatPriceWithCommas,
    truncateId(id, maxLength) {
      if (!id) {
        return ""; // Return an empty string if id is undefined or null
      }

      if (id.length > maxLength) {
        return id.substring(0, maxLength) + "...";
      }

      return id;
    },
    formatDate(item) {
      if (
        !item ||
        !item?.products ||
        item?.products?.length === 0 ||
        !item?.products[0]?.createdAt
      ) {
        return ""; // Return an empty string if any of the required data is undefined
      }
      const date = new Date(item?.products[0]?.createdAt);
      if (!date || isNaN(date.getTime())) {
        return ""; // Return an empty string if date is invalid
      }
      const year = date.getFullYear().toString().slice(-2); // Last two digits of the year
      const month = String(date.getMonth() + 1).padStart(2, "0"); // Month, zero-padded
      const day = String(date.getDate()).padStart(2, "0"); // Day, zero-padded
      return `${day}-${month}-${year}`;
    },
    calculateTotalOrderPrice(products) {
      if (Array.isArray(products) && products.length > 0) {
        // Sum the total prices of all products in the order
        return products.reduce((totalPrice, product) => {
          if (product && typeof product.totalPrice === 'number') {
            return totalPrice + product.totalPrice;
          }
          return totalPrice;
        }, 0);
      }
      return 0; // Return 0 if products is not defined or empty
    },
    getTagType(status) {
      if (status === "PROCESSING") {
        return "warning";
      } else if (status === "SHIPPED") {
        return "info";
      } else if (status === "DELIVERED") {
        return "positive";
      } else {
        return ""; // Handle any other cases if needed
      }
    },
    calculateTotalProductQuantity(products) {
      if (Array.isArray(products) && products.length > 0) {
        // Sum the quantities of all products in the order
        return products.reduce((totalQuantity, product) => {
          if (product && typeof product.quantity === "number") {
            return totalQuantity + product.quantity;
          }
          return totalQuantity;
        }, 0);
      }
      return 0; // Return 0 if products is not defined or empty
    },

    getProductNames(products) {
      const number = products.length;
      if (number === 0) {
        return "No products";
      } else if (number === 1) {
        return products[0]?.product?.name;
      } else {
        const firstProductName =
          products[0].product.name.length > 16
            ? products[0].product.name.substring(0, 16) + "..."
            : products[0].product.name;
        const additionalProductCount = number - 1;
        return `${firstProductName} and ${additionalProductCount} more`;
      }
    },

    getProductImages(products) {
      // Use the `map` function to create a new array
      const images = products.slice(0, 3).map((product, index) => {
        // Access the `images` property of each product (assuming it's an array)
        const productImages = product.images;

        // Log the chosen products
        if (index < 3) {
          // (`Chosen Product ${index + 1}:`, product);
        }

        // Return the first image URL
        return productImages ? productImages[0] : product.product.images[0];
      });


      return images;
    },

    getProductPrice(products) {
      if (Array.isArray(products) && products.length > 0) {
        // Sum the prices of all products in the order
        return products.reduce((totalPrice, product) => {
          if (product && product.product) {
            // Use product.product to access the nested product object
            const { discountPrice, totalPrice: productTotalPrice } =
              product.product;
            return totalPrice + (discountPrice || productTotalPrice || 0);
          }
          return totalPrice;
        }, 0);
      }
      return 0; // Return 0 if products is not defined or empty
    },
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

.image_wrap {
  display: flex;
}

.image {
  width: 64px;
  height: fit-content;

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
    justify-content: space-between;
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
}

@media (max-width: 451px) {
  .image_wrap {
    display: flex;
    gap: 8px;
    flex-direction: column;
    max-height: 144px;
    height: 100%;
  }

  .image {
    width: 43px;
  }
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
</style>
  