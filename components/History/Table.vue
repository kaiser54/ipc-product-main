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
          <td>{{ formatDate(item) || "22-12-23" }}</td>
          <td>{{ truncateId(item._id, 7) }}</td>
          <td>{{ item.products[0].quantity }}</td>
          <td>{{ getProductPrice(item.products, item) }}</td>
          <td style="text-align: -webkit-right">
            <span v-if="item.status === 'Pending'" :class="['tag', 'pending']">{{ item.status }}</span>
            <span v-else :class="['tag', 'verified']">{{ item.status }}</span>
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
    <!-- <p>No data</p> -->
  </div>
</template>
  
<script>
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
  },
  data() {
    return {
      startDate: "",
      endDate: "",
      item: {}
    };
  },
  methods: {
    toHistoryDetails(id) {
      // const baseURL = "/dashboard/track orders/";
      // const baseURL = `/dashboard/track orders/${value}`;
      // this.$router.push(baseURL + value)
      // this.$router.push(`/dashboard/track orders/${value}`)
      this.$router.push(`/dashboard/track_orders/${id}`);
      // this.$router.push({ name: 'OrderDetails', params: { orderId } });
      // console.log(window.location.origin + "/")
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

      const image = products?.map((product) => {
        console.log(product.images[0].url)
        return {
          url: product.images[0].url
        }
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
      console.log(products)
    },
    getProductPrice(products) {
      if (!products || products.length === 0) {
        return "No product";
      } else if (products.length === 1) {
        return products[0].discountPrice || products[0].totalPrice;
      } else {
        return products[0].discountPrice + products[1].discountPrice
      }
    },

  },
  created() {
    if (this.item?.products?.length > 0) {
      const firstProductCreatedAt = this.item?.products;
      console.log(firstProductCreatedAt);
    } else {
      console.log('No products in the array.');
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
  