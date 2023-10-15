<template>
  <div v-if="tableData.length" class="table-container" style="width: 100%">
    <table style="width: 100%">
      <thead>
        <tr>
          <th v-for="header in tableHeaders" :key="header">
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in tableData" :key="item.id" @click="toHistoryDetails(item._id)">
          <td style="display: flex; align-items: center; gap: 5px">
            <div class="img" v-for="image in getProductImages(item.products)" :key="image.id">
              <!-- {{ image.url }} -->
              <img :src="image.url" alt="product Image" />
            </div>
            <span class="product-name">{{
              getProductNames(item.products)
            }}</span>
          </td>
          <td>{{ convertDateFormat(item.createdAt) || "22-12-23" }}</td>
          <td>{{ truncateId(item._id, 7) }}</td>
          <td>{{ calculateTotalProductQuantity(item.products) }}</td>
          <td><span class="naira">₦</span> {{ formatPriceWithCommas(calculateTotalOrderPrice(item.products)) }}</td>
          <td style="text-align: -webkit-right">
            <DynamicTags
                :tagText="item.status"
                size="small"
                :type="getTagType(item.status)"
              />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else class="table-container" style="width: 100%">
    <table style="width: 100%">
      <thead>
        <tr>
          <th v-for="header in tableHeaders" :key="header">
            {{ header }}
          </th>
        </tr>
      </thead>
    </table>
    <TableLoader v-if="loading"/>
  </div>
</template>
  
<script>
import { formatPriceWithCommas } from "~/static/formatPrice";
export default {
  props: {
    activeTabs: {
      type: Array,
      required: true,
    },
    tableHeaders: {
      type: Array,
      required: true,
    },
    tableData: {
      type: Array,
      required: true,
    },
    loading: {
      type: Boolean,
    },
  },
  data() {
    return {
      startDate: "",
      endDate: "",
      item: {},
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
    toHistoryDetails(id) {
      this.$router.push(`/dashboard/track_orders/${id}`);
    },
    truncateId(id, maxLength) {
      if (!id) {
        return ''; // Return an empty string if id is undefined or null
      }

      if (id.length > maxLength) {
        return id.substring(0, maxLength) + '...';
      }

      return id;
    },
     convertDateFormat(inputDate) {
      if (inputDate) {
        const date = new Date(inputDate);
        const year = date.getFullYear().toString().substr(-2); // Extract the last 2 digits of the year
        const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
        const day = date.getDate().toString().padStart(2, "0");

        return `${year}-${month}-${day}`;
      }
    },
    formatDate(item) {
      if (!item || !item?.products || item?.products?.length === 0 || !item?.products[0]?.createdAt) {
        return ''; // Return an empty string if any of the required data is undefined
      }
      const date = new Date(item?.products[0]?.createdAt);
      if (!date || isNaN(date.getTime())) {
        return ''; // Return an empty string if date is invalid
      }
      const year = date.getFullYear().toString().slice(-2); // Last two digits of the year
      const month = String(date.getMonth() + 1).padStart(2, "0"); // Month, zero-padded
      const day = String(date.getDate()).padStart(2, "0"); // Day, zero-padded
      return `${day}-${month}-${year}`;
    },

    getProductImages(products) {
      // Use the `map` function to create a new array
      const images = products.slice(0, 3).map((product, index) => {
        // Access the `images` property of each product (assuming it's an array)
        const productImages = product.images;

        // Log the chosen products
        if (index < 3) {
         
        }

        // Return the first image URL
        return productImages ? productImages[0] : product.product.images[0];
      });

    

      return images;
    },
    calculateTotalProductQuantity(products) {
      if (Array.isArray(products) && products.length > 0) {
        // Sum the quantities of all products in the order
        return products.reduce((totalQuantity, product) => {
          if (product && typeof product.quantity === 'number') {
            return totalQuantity + product.quantity;
          }
          return totalQuantity;
        }, 0);
      }
      return 0; // Return 0 if products is not defined or empty
    },
    getProductNames(products) {
  if (products.length === 0) {
    return "No products";
  } else if (products.length === 1) {
    return products[0]?.name || products[0]?.product.name || "No name";
  } else {
    const truncatedNames =
      products
        .map((product) => product?.name || product?.product.name || "No name")
        .join(", ")
        .substring(0, 5) + "..."; // Adjust the character limit as needed
    return truncatedNames;
  }
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
  },
  created() {
    if (this.item?.products?.length > 0) {
      const firstProductCreatedAt = this.item?.products;
      
    } else {
    
    }
  }
}
</script>
  
<style scoped>
table,
th,
td {
  border: none;
  border-collapse: collapse;
}

th,
td {
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 30px;
  /* padding-right: 40px; */
  text-align: left;
}

th,
td {
  border-bottom: 1px solid var(--grey-grey5);
}

tr {
  transition: all 0.1s ease-in-out;
  cursor: pointer;
}

tr:hover {
  background-color: #efefef;
}

thead tr:hover {
  background-color: none !important;
}

th:last-child {
  text-align: center;
}

span.tag {
  width: 105px;
}

.img {
  width: 32px;
  height: auto;
}

/* 
  .sticky-header {
    position: sticky;
    top: 134px;
    background: var(--white);
    z-index: 2;
  } */

@media (max-width: 1300px) {
  .sticky-header {
    top: 192px;
  }
}

@media (max-width: 1040px) {
  .sticky-header {
    top: 213px;
  }
}
</style>
  