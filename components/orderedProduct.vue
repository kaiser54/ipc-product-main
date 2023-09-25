<template>
  <div class="order-wrapper">
    <Nuxt-link :to="`/dashboard/track_orders/${item._id}`" class="order-product" v-for="item in order" :key="item._id">
      <div class="image" v-for="image in getProductImages(item.products)" :key="image.id">
        <!-- {{ image.url }} -->
        <img :src="image.url" alt="product Image" />
      </div>
      <div class="order-product-details">
        <div class="order-content">
          <!-- <div class="title">{{ item.name }}</div> -->
          <span class="product-name">
            {{ getProductNames(item.products) }}
          </span>
          <div class="order-id-price">
            <div class="order-id">Order Id: {{ truncateId(item._id, 7) }}</div>
            <div class="order-qty">Qty: {{ item.products[0].quantity }}</div>
          </div>
          <div class="order-price">
            <span class="naira">₦</span> {{ getProductPrice(item.products, item) }}
          </div>
          <DynamicTags :tagText="tagText" :size="size" :type="type" />
        </div>

        <div class="price-qty">
          <div class="order-price">
            <span class="naira">₦</span>{{ getProductPrice(item.products, item) }}
          </div>
          <div class="order-qty">Qty: {{ item.products[0].quantity }}</div>
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
      order: null,
      orderId: "",
      products: [],
    };
  },
  async created() {
    const userId = localStorage.getItem('userId')
    try {
      const response = await this.$axios.get(
        `/orders/customer/${userId}`
      );
      this.order = response?.data?.data?.orders;
      console.log(this.order);
      // this.products = response?.data?.data?.orders?.products
      // console.log(this.products)
      this.loading = false;
    } catch (error) {
      console.error("Error fetching order details:", error);
    }
  },
  methods: {
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

    getProductImages(products) {
      const image = products?.map((product) => {
        console.log(product.images[0].url);
        return {
          url: product.images[0].url,
        };
      });
      return image;
    },
    getProductNames(products) {
      if (!products || products.length === 0) {
        return "No products";
      } else if (products.length === 1) {
        return products[0].name;
      } else {
        const truncatedNames =
          products
            .map((product) => product.name)
            .join(", ")
            .substring(0, 5) + "..."; // Adjust the character limit as needed
        return truncatedNames;
      }
      console.log(products);
    },
    getProductPrice(products) {
      if (!products || products.length === 0) {
        return "No product";
      } else if (products.length === 1) {
        return products[0].discountPrice || products[0].totalPrice;
      } else {
        return products[0].discountPrice + products[1].discountPrice;
      }
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
</style>
