<template>
    <div class="product-card">
        <img :src="product.image" alt="Product Image" />
        <h3>{{ product.title }}</h3>
        <button @click="addToCart" v-if="!isInCart">Add to Cart</button>
        <div v-else>
            <button @click="decrementQuantity">-</button>
            <span>{{ getProductQuantity }}</span>
            <button @click="incrementQuantity">+</button>
        </div>
        <button @click="removeFromCart(product.id)">Delete</button>
    </div>
</template>
  
<script>
import { mapState, mapMutations } from 'vuex';
export default {
    props: {
        product: {
            type: Object,
            required: true,
        },
        inCart: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        ...mapState(['cart']),
        isInCart() {
            const productInCart = this.$store.state.cart.find(
                (p) => p.id === this.product.id
            );
            return productInCart !== undefined;
        },
        getProductQuantity() {
            const productInCart = this.$store.state.cart.find(
                (p) => p.id === this.product.id
            );
            return productInCart ? productInCart.quantity : 0;
        },
    },
    methods: {
        ...mapMutations(['removeFromCart']),
        addToCart() {
            this.$store.commit('addToCart', this.product);
        },
        incrementQuantity() {
            this.$store.commit('incrementQuantity', { productId: this.product.id });
        },
        decrementQuantity() {
            this.$store.commit('decrementQuantity', { productId: this.product.id });
        },
    },
};
</script>
  
<style scoped>
.product-card {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
}

.product-card img {
    width: 100px;
    height: 100px;
    object-fit: contain;
}
</style>
  