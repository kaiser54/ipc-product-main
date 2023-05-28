<template>
    <div>
        <h1>Product Page</h1>
        <nuxt-link to="/dashboard/market/productCart"><h2>carrtt</h2></nuxt-link>
        <!-- <productTest :product="product"/> -->
        <productTest v-for="product in product"
        :key="product.id" :product="product" :inCart="inCart" />
    </div>
</template>
  
<script>

export default {
    data() {
        return {
            product: {},
            inCart: false,
        };
    },
    async mounted() {
        // Fetch product details from the FakeStoreAPI
        const productId = 1; // Replace with the desired product ID
        const response = await this.$axios.$get(
            `https://fakestoreapi.com/products`
        );
        this.product = response;
        this.inCart = this.$store.state.cart.some((p) => p.id === productId);
    },
};
</script>
  