<template>
    <div class="userAddress">
        <div class="addressInput">
            <div class="" v-for="(field, index) in userName" :key="index">
                <label :for=field.label class="label">{{ field.label }}</label>
                <input class="value input" :name=field.label type="text" v-model="field.value" style="margin-top: 0;" disabled>
            </div>
            <div class="change-btn">
                <button class="btn neutral-btn">Cancel</button>
                <button class="btn primary-btn">Save changes</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userName: [
                {
                    label: "Street address",
                    value: "3A, Oba Akintunde Street, Lekki phase 1",
                },
                {
                    label: "State",
                    value: "Lagos",
                },
                {
                    label: "LGA (Local Govt. Area)",
                    value: "Eti Osa",
                },
            ],
        };
    },
};
</script>

<style scoped>
.userAddress {
    display: flex;
    flex-direction: column;
    padding: 0px;
    gap: 32px;
}

.addressInput {
    display: flex;
    flex-direction: column;
    padding: 0px;
    gap: 16px;
}
.change-btn {
    display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 16px;
margin-left: auto;

/* max-width: 273px; */
/* width: 100%; */
}
button {
    width: auto;
}
</style>