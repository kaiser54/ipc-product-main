<template>
    <div class="cart">
        <h2>Cart</h2>
        <div v-if="cartItems.length === 0">
            <p>No items in the cart.</p>
        </div>
        <div v-else>
            <div v-for="item in cartItems" :key="item.id" class="cart-item">
                <div>
                    <span>{{ item.name }}</span>
                    <span>Price: ${{ item.price }}</span>
                    <div class="counter">
                        <button @click="decrement(item)">-</button>
                        <span>{{ item.itemCount }}</span>
                        <button @click="increment(item)">+</button>
                    </div>
                </div>
                <button @click="removeFromCart(item)">Delete</button>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    computed: {
        cartItems() {
            return this.$store.state.cart;
        },
    },
    methods: {
        removeFromCart(item) {
            this.$store.commit('removeFromCart', item);
        },
        increment(item) {
            this.$store.commit('incrementItemCount', item);
        },
        decrement(item) {
            this.$store.commit('decrementItemCount', item);
        },
    },
};
</script>
  
<style scoped>
.cart {
    margin-top: 20px;
}

.cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}

.cart-item button {
    background-color: #eee;
    border: none;
    outline: none;
    cursor: pointer;
}
</style>
  