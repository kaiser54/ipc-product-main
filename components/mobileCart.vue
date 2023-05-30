<template>
    <div class="">
        <div class="order__pricing__group">
            <div class="mobile_ _orders">
                <div class="mobile-order">Orders</div>
                <div class="order-items">{{ cart.length }} items</div>
            </div>
            <div class="mobile_ _total">
                <div class="mobile-order">Subtotal</div>
                <div class="total-price">₦ {{ calculateTotalPrice().toFixed(2) }}</div>
            </div>
        </div>
        <div class="listed-cart-product">
            <cartList v-for="product in cart" :key="product.id" :product="product" :inCart="true" />
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
    // props: {
    //     cart: {
    //         type: String,
    //         required: true,
    //     }
    // },
    data() {
        return {
            totalPrice: 0,
        }
    },
    computed: {
        ...mapState(['cart']),
    },
    methods: {
        ...mapMutations(['removeFromCart']),
        calculateTotalPrice() {
            let totalPrice = 0;

            for (const product of this.cart) {
                const productInCart = this.$store.state.cart.find(p => p.id === product.id);
                const quantity = productInCart ? productInCart.quantity : 0;
                totalPrice += product.price * quantity;
            }

            return totalPrice;
        },
    },
};
</script>

<style scoped>
.order__pricing__group {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    gap: 8px;

    width: 100%;
    /* height: 88px; */

    /* Grey/Grey6 */

    background: var(--grey-grey6);

    width: 100%;
    position: fixed;
    top: 72px;
    left: 0;
    z-index: 1;
}

.mobile_ {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    width: 100%;
}

.mobile-orders {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height, or 150% */


    /* Grey/Grey2 */

    color: var(--grey-grey2);
}

.order-items {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4px 12px;
    gap: 10px;

    height: 24px;

    /* Grey/Grey5 */

    background: var(--grey-grey5);
    border-radius: 100px;
}

.total-price {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    text-align: right;

    /* Grey/Grey1 */

    color: var(--grey-grey1);
}

.listed-cart-product {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 100px;
}
</style>