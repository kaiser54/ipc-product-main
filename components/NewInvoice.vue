<template>
  <div>
    <table>
      <tr>
        <td class="logo" colspan="2">
          <!-- <img src="~/static/Gosourcelogo.png" alt="" /> -->
          <div
            style="
              display: flex;
              align-items: center;
              justify-content: space-between;
              width: 100%;
              font-family: 'system-ui', -apple-system, 'Segoe UI', Roboto, Helvetica,
                Arial, sans-serif;
              font-size: 34px;
              font-weight: 700;
              letter-spacing: -1px;
            "
          >
            <img src="~/static/Gosourcelogo.png" alt="" />
            <span>Invoice #000{{ data.orderCount }}</span>
          </div>
        </td>
      </tr>
    </table>
    <!-- user data -->
    <table style="margin-top: 40px" class="user-details">
      <thead>
        <td class="table-head">Order Date</td>
        <td class="table-head">Business name</td>
        <td class="table-head">Full name</td>
        <td class="table-head">No. of Orders</td>
      </thead>
      <tr>
        <td>{{ formatDates(data.order.createdAt) }}</td>
        <td>{{ data.order.businessName }}</td>
        <td>{{ data.order.firstName }} {{ data.order.lastName }}</td>
        <td>4</td>
      </tr>
    </table>
    <!-- user address -->
    <table style="margin-top: 24px" class="user-details">
      <thead>
        <td class="table-head">Order Time</td>
        <td class="table-head">Payment Method</td>
        <td class="table-head">Order Id</td>
        <td class="table-head">Delivery Address</td>
      </thead>
      <tr>
        <td>{{ formatDates(data.order.createdAt) }}</td>
        <td>{{ data.order.paymentMethod }}</td>
        <td>{{ data.order._id }}</td>
        <td>
          <span style="max-width: 176px">
            {{ data.order.streetAddress || data.order.address.streetAddress }}, <br>
            {{ data.order.lga || data.order.address.lga }}, <br>
            {{ data.order.state || data.order.address.state }}.
          </span>
        </td>
      </tr>
    </table>
    <!-- order table -->
    <table style="margin-top: 48px" class="orders">
      <thead>
        <td style="padding: 10px; background-color: #f7f9fc" class="table-head">No.</td>
        <td style="padding: 10px; background-color: #f7f9fc" class="table-head">Item</td>
        <td style="padding: 10px; background-color: #f7f9fc" class="table-head">Qty</td>
        <td style="padding: 10px; background-color: #f7f9fc" class="table-head">Rate</td>
        <td style="padding: 10px; background-color: #f7f9fc" class="table-head">Price</td>
      </thead>
      <tr v-for="(data, index) in data.order.products" :key="data._id">
        <td class="orders-data">{{ index + 1 }}</td>
        <td class="orders-data">{{ data.productName || data.product.name }}</td>
        <td class="orders-data">{{ data.quantity }}</td>
        <td class="orders-data">
          # {{ data.product.discountPrice || data.product.discountPrice }}
        </td>
        <td class="orders-data"># {{ data.totalPrice }}</td>
      </tr>
    </table>
    <!-- invoice pricing -->
    <table style="max-width: 90%; width: 100%; margin-top: 16px">
      <tr>
        <td class="receipt-wrap">
          <table class="receipt" style="background: none">
            <tr>
              <td
                style="
                  height: 32px;
                  padding-bottom: 8px;
                  border-bottom: 1px solid #e4e7ec;
                "
              >
                Subtotal
              </td>
              <td
                style="
                  height: 32px;
                  padding-bottom: 8px;
                  border-bottom: 1px solid #e4e7ec;
                "
                class="right"
              >
                <b># {{ data.subtotal || data.order.subtotal }}</b>
              </td>
            </tr>
            <tr>
              <td
                style="
                  height: 32px;
                  padding-top: 8px;
                  padding-bottom: 8px;
                  border-bottom: 1px solid #e4e7ec;
                "
              >
                Delivery fee
                <span v-if="data.coupon || data.order.coupon">(coupon was used)</span>
              </td>
              <td
                style="
                  height: 32px;
                  padding-top: 8px;
                  padding-bottom: 8px;
                  border-bottom: 1px solid #e4e7ec;
                "
                class="right"
              >
                <template v-if="data.coupon || data.order.coupon">
                  <b>#0</b>
                </template>
                <template v-else>
                  <b># {{ data.deliveryFee || data.order.deliveryFee }}</b>
                </template>
              </td>
            </tr>
            <tr>
              <td
                style="
                  height: 32px;
                  padding-top: 8px;
                  padding-bottom: 8px;
                  border-bottom: 1px solid #e4e7ec;
                "
              >
                Service charge
              </td>
              <td
                style="
                  height: 32px;
                  padding-top: 8px;
                  padding-bottom: 8px;
                  border-bottom: 1px solid #e4e7ec;
                "
                class="right"
              >
                <b
                  >#
                  {{
                    roundToTwoDecimalPlaces(data.serviceCharge) ||
                    roundToTwoDecimalPlaces(data.order.serviceCharge)
                  }}</b
                >
              </td>
            </tr>
            <tr>
              <td style="height: 32px; padding-top: 8px">Total</td>
              <td style="height: 32px; padding-top: 8px" class="right">
                <template v-if="data.coupon || data.order.coupon">
                  <b
                    >#
                    {{
                      data.totalPrice - data.deliveryFee ||
                      data.order.totalPrice - data.order.deliveryFee
                    }}</b
                  >
                </template>
                <template v-else>
                  <b># {{ data.totalPrice || data.order.totalPrice }}</b>
                </template>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
    <!-- footer -->
    <table
      style="
        margin-top: 40px;
        padding-top: 32px;
        padding-right: 24px;
        padding-left: 24px;
        padding-bottom: 32px;
        background-color: #f9fafb;
      "
      class="footer"
    >
      <tr>
        <td colspan="2" class="content" style="color: #667185">Terms & Conditions</td>
      </tr>
      <tr>
        <td colspan="2" class="content" style="margin-top: 4px; padding-bottom: 20px">
          Please note that all goods received in good conditions are not eligible for
          return. All defected goods should not be tampered with as we would withdraw them
          for replacement.
        </td>
      </tr>
      <tr>
        <td colspan="2" class="content" style="padding-bottom: 20px">
          Facing any problems? send a mail to
          <a class="a2" href="mailto:admin@ipc-africa.com">admin@ipc-africa.com</a> or
          call 0906 182 7124
        </td>
      </tr>
      <tr>
        <td colspan="2" class="content" style="padding-bottom: 20px">
          3D Dr. Adewale Oshin Street, Off Chief Collins Uchidiuno St, Lekki Phase 1
          105102, Lekki, Lagos
        </td>
      </tr>
      <tr>
        <td colspan="2" class="content" style="padding-bottom: 20px">
          Copyright©2023 Independent purchasing company | All rights reserved.
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import {
  formatDate,
  formatTimeWithAMPM,
  formatDates,
  formatTimme,
  formatNumberWithLeadingZeros,
  calculateDeliveryDate,
} from "~/utils/dateUtils"; // Adjust the import path as needed
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  mounted() {
  },
  methods: {
    formatDates,
    formatTimeWithAMPM,
    formatNumberWithLeadingZeros,
    calculateDeliveryDate,
    roundToTwoDecimalPlaces(num) {
      if (!num || num == undefined) {
        return false;
      } else return parseFloat(num.toFixed(2));
    },
    formatPriceWithCommas(price) {
      // Use the toLocaleString method with appropriate options to add commas
      return price.toLocaleString(undefined, { maximumFractionDigits: 2 });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.cdnfonts.com/css/graphik-trial");
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");

*,
** {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "system-ui", -apple-system, "Segoe UI", Roboto, Helvetica, Arial,
    sans-serif;
  background-color: #ffffff;
  color: #101928;
}

.table-head {
  color: #667185;
  padding-bottom: 4px;
}

.table-data {
  color: #101928;
}

table {
  font-family: "system-ui", -apple-system, "Segoe UI", Roboto, Helvetica, Arial,
    sans-serif;
  width: 100%;
  margin: 0 auto;
}

td,
th {
  font-family: "system-ui", -apple-system, "Segoe UI", Roboto, Helvetica, Arial,
    sans-serif;
  /* padding: 20px; */
  text-align: left;
  font-weight: 400;
  line-height: 21px;
  /* 150% */
  letter-spacing: -0.2px;
  color: #101928;
  font-size: 12px;
}

.logo {
  background-color: #09420c;
  color: #fff;
  padding: 24px;
  font-size: 20px;
  font-weight: bold;
  margin-left: 0;
  font-family: "system-ui", -apple-system, "Segoe UI", Roboto, Helvetica, Arial,
    sans-serif;
}

a {
  font-family: "system-ui", -apple-system, "Segoe UI", Roboto, Helvetica, Arial,
    sans-serif;
  color: #19b820;
}

.cta {
  margin: 24px 0;
  font-family: "system-ui", -apple-system, "Segoe UI", Roboto, Helvetica, Arial,
    sans-serif;
  font-weight: 600;
  display: inline-block;
  padding: 14.5px 20px;
  white-space: nowrap;
  color: white;
  text-decoration: none;

  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
  border-radius: 100px;
  background-color: #19b820;
}

.cta img {
  margin-left: 8px;
  display: inline;
  vertical-align: middle;

  font-weight: 600;
  line-height: 16px;
  /* 100% */
  letter-spacing: -0.2px;
}

.footer td {
  font-family: "system-ui", -apple-system, "Segoe UI", Roboto, Helvetica, Arial,
    sans-serif;
  font-size: 0.8em;
}

.a1 {
  font-family: "system-ui", -apple-system, "Segoe UI", Roboto, Helvetica, Arial,
    sans-serif;
  color: #19b820;
}

.a1 {
  font-family: "system-ui", -apple-system, "Segoe UI", Roboto, Helvetica, Arial,
    sans-serif;
  color: #19b820;
}

.content a {
  font-family: "system-ui", -apple-system, "Segoe UI", Roboto, Helvetica, Arial,
    sans-serif;
  color: #09420c;
}

.user-details th,
.user-details td {
  width: 25%;
}

.user-details {
  max-width: 90%;
  width: 100%;
  margin: 0 auto;
}

.user-details td {
  word-wrap: break-word;
  max-width: 0;
}

.orders {
  max-width: 90%;
  width: 100%;
  border-collapse: collapse;
}

.orders-data {
  padding: 10px;
  border-bottom: 1px solid #f0f2f5;
}

.receipt {
  border-collapse: collapse;
}

.receipt td {
  margin: 0;
  padding: 0;
  width: 100%;
}

.receipt td b {
  text-overflow: ellipsis;
  font-weight: 500;
}

.receipt-wrap {
  max-width: 90%;
  width: 100%;
  border-radius: 12px;
  border: 1px solid #e4e7ec;
  background: #f7f9fc;
  padding: 8px 12px;
}

.right {
  text-align: right;
  white-space: nowrap;
}

.orders tr:last-child td {
  border-bottom: none;
}
</style>
