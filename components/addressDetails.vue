<template>
    <div class="addressDetails">
        <div class="addressDetails-head">
            <h3 class="h3-medium">Address details</h3>
            <button class="btn neutral-btn-small">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                    <path d="M2 14.75H14" stroke="#303237" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path
                        d="M2.99992 9.74885L9.66659 3.08218C10.2189 2.5299 11.1143 2.5299 11.6666 3.08218C12.2189 3.63447 12.2189 4.5299 11.6666 5.08218L4.99992 11.7489L2.33325 12.4155L2.99992 9.74885Z"
                        stroke="#303237" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p>Edit</p>
            </button>
        </div>
        <userAddress />
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.addressDetails {
    display: flex;
    flex-direction: column;
    padding: 0px;
    gap: 32px;
    width: 100%;
}

.addressDetails-head {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    gap: 32px;
}
h3.h3-medium {
    color: var(--grey-grey1);
}
button.btn.neutral-btn-small {
    width: auto;
}
</style>