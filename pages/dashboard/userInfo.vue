<template>
    <div>
        <UserInfo
            v-if="orderDetails"
          :data="orderDetails"
          style="max-width: 387px; width: 100%; margin-left: 20px"
            />
    </div>
</template>

<script>
    export default {
        data(){
            return{
                orderDetails: null
            }
        },
        methods:{
            
    async getOrders() {
      this.orderId = this.$route.params.trackOrder
    try {
      const response = await this.$axios.$get(`/orders/${this.orderId}`);
      ("orderDetails:",response.data.order)
      this.orderDetails = response?.data?.order;
      this.loading = false;
    } catch (error) {
      console.error('Error fetching order details:', error);
    }
  },

        },
        created() {
    this.orderId = this.$route.params.trackOrder
    this.getOrders()
  },
    }
</script>

<style scoped>

</style>