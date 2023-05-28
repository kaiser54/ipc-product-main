<template>
    <div>
        <goback />
        <h1>Cart</h1>
        <div v-if="cart.length === 0">
            <p>Your cart is empty.</p>
        </div>
        <productTest
        v-for="product in cart"
        :key="product.id"
        :product="product"
        :inCart="true"
      />
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
    computed: {
        ...mapState(['cart']),
    },
    methods: {
        ...mapMutations(['removeFromCart']),
    },
};
</script>
  