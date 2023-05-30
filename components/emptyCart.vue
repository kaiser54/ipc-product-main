<template>
    <div class="nocart">
        <svg xmlns="http://www.w3.org/2000/svg" width="357" height="178" viewBox="0 0 357 178" fill="none">
            <rect x="28" y="1.40625" width="301" height="175.188" rx="15.5" fill="white" />
            <rect x="43.5" y="16.9062" width="44.4375" height="32.0625" rx="6.19761" fill="#E5E7EF" />
            <rect x="94.6875" y="16.9062" width="79.875" height="8" rx="4" fill="#E5E7EF" />
            <rect x="94.6875" y="31.0938" width="46.1052" height="8" rx="4" fill="#E5E7EF" />
            <rect x="244.312" y="16.9062" width="69.1875" height="8" rx="4" fill="#E5E7EF" />
            <rect x="43.5" y="72.9688" width="44.4375" height="32.0625" rx="6.19761" fill="#E5E7EF" />
            <rect x="94.6875" y="72.9688" width="79.875" height="8" rx="4" fill="#E5E7EF" />
            <rect x="94.6875" y="87.1562" width="46.1052" height="8" rx="4" fill="#E5E7EF" />
            <rect x="244.312" y="72.9688" width="69.1875" height="8" rx="4" fill="#E5E7EF" />
            <rect x="43.5" y="129.031" width="44.4375" height="32.0625" rx="6.19761" fill="#F4F5F8" />
            <rect x="94.6875" y="129.031" width="79.875" height="8" rx="4" fill="#F4F5F8" />
            <rect x="94.6875" y="143.219" width="46.1052" height="8" rx="4" fill="#F4F5F8" />
            <rect x="244.312" y="129.031" width="69.1875" height="8" rx="4" fill="#F4F5F8" />
            <rect x="28" y="1.40625" width="301" height="175.188" rx="15.5" stroke="#F4F5F8" />
        </svg>
        <div class="message">
            <h2 class="">Your cart is empty</h2>
            <div class="snippet">Visit the market to purchase your food items, kitchen utensils, and other necessary
                products.</div>
        </div>
        <PrimaryBtn :buttonText="buttonText" @click="emitFunc" class="button" />
    </div>
</template>

<script>
export default {
    props: {
        buttonText: {
            type: String,
            default: "Go to market"
        }
    },
    methods: {
        emitFunc() {
            this.$emit('leaveCart');
        }
    }
}
</script>

<style scoped>
.nocart {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
    gap: 32px;
    margin-inline: auto;

    max-width: 404px;
    /* Empty states bg */

    background: linear-gradient(180deg, #E6E6F7 -36.88%, #FFFFFF 56.41%);
    /* Grey/Grey5 */

    border: 1px solid var(--grey-grey5);
    border-radius: 16px;
}

.message {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 8px;
}

h2 {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    /* identical to box height, or 150% */

    text-align: center;
    letter-spacing: -1px;

    /* Grey/Grey1 */

    color: var(--grey-grey1);
}

.snippet {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* or 150% */

    text-align: center;

    /* Grey/Grey3 */

    color: var(--grey-grey3);
}

button {
    width: auto;
}

@media (max-width: 950px) {
    h2 {
        font-size: 20px;
        line-height: 30px;
        /* identical to box height, or 150% */
        letter-spacing: -0.5px;
    }
}
</style>