<template>
  <div class="mobileHistory-container" v-if="tableData">
    <div
      class="mobileHistory"
      v-for="(item, index) in tableData"
      :key="index"
      @click="toHistoryDetails(item?._id)"
    >
      <div class="img-name-order">
        <div class="img-wrap">
          <div
            class="img"
            v-for="(image, index) in getProductImages(item?.products)"
            :key="index"
          >
            <!-- {{ image.url }} -->
            <img :src="image.url" alt="product Image" />
          </div>
        </div>
        <div class="name-order">
          <div class="name">{{ getProductNames(item?.products) }}</div>
          <div class="order">Order id: {{ truncateId(item?._id, 7) }}</div>
        </div>
      </div>
      <div class="price"><span class="naira">₦</span> {{ formatPriceWithCommas(calculateTotalOrderPrice(item?.products)) }}</div>
    </div>
  </div>
</template>
  
  <script>
  import { formatPriceWithCommas } from "~/static/formatPrice";
export default {
  props: {
    tableData: {
      type: Array,
      Required: true,
    },
  },
  data() {
    return {
      tableHeaders: [
        "Product’s name",
        "Date",
        "Order ID",
        "Quantity",
        "Price",
        "Status",
      ],
      tableDatas: [],
    };
  },
  methods: {
    formatPriceWithCommas,
    toHistoryDetails(id) {
      // const baseURL = "/dashboard/track orders/";
      // const baseURL = `/dashboard/track orders/${value}`;
      // this.$router.push(baseURL + value)
      // this.$router.push(`/dashboard/track orders/${value}`)
      this.$router.push(`/dashboard/track_orders/${id}`);
    
    },

    truncateId(id, maxLength) {
      if (!id) {
        return ""; // Return an empty string if id is undefined or null
      }

      if (id.length > maxLength) {
        return id.substring(0, maxLength) + "...";
      }

      return id;
    },
    getProductImages(products) {
      // Use the `map` function to create a new array
      const images = products.slice(0, 1).map((product, index) => {
        // Access the `images` property of each product (assuming it's an array)
        const productImages =
          product.images || (product.product && product.product.images);

        // Log the chosen products
        if (index < 3) {
        
        }

        // Check if `productImages` is an array and not empty
        if (Array.isArray(productImages) && productImages.length > 0) {
          return productImages[0]; // Return the first image URL
        }

        // Check if `product.product.images` is an array and not empty
        if (
          Array.isArray(product.product?.images) &&
          product.product.images.length > 0
        ) {
          return product.product.images[0]; // Return the first image URL from `product.product`
        }

        // If no valid image URL is found, you can return a default image URL or handle it as needed.
        // For now, let's assume a default URL.
        return "default-image-url.jpg";
      });

    

      return images;
    },

    getProductNames(products) {
      if (products.length === 0) {
        return "No products";
      } else if (products.length === 1) {
        return products[0]?.name || products[0]?.product.name || "No name";
      } else {
        const truncatedNames =
          products
            .map(
              (product) => product?.name || product?.product.name || "No name"
            )
            .join(", ")
            .substring(0, 5) + "... and " + products.length + " more"; // Adjust the character limit as needed
        return truncatedNames;
      }
    },
    calculateTotalOrderPrice(products) {
      if (Array.isArray(products) && products.length > 0) {
        // Sum the total prices of all products in the order
        return products.reduce((totalPrice, product) => {
          if (product && typeof product.totalPrice === "number") {
            return totalPrice + product.totalPrice;
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
.mobileHistory-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
}

.mobileHistory {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
}

.img-name-order {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 5px;
}

.img {
  width: 32px;
  height: 36px;
}

.img img {
  height: auto;
  width: 100%;
  object-fit: contain;
}

.name-order {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
}

.name {
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 150% */

  /* Grey/Grey1 */

  color: var(--grey-grey1);
}

.order {
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height, or 150% */

  /* Grey/Grey3 */

  color: var(--grey-grey3);
}

.price {
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 150% */

  /* Grey/Grey1 */

  color: var(--grey-grey1);
}
</style>