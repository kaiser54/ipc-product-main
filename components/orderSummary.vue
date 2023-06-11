<template>
    <div>
        <div class="individual-form">
            <h3 class="h3-medium header-text">Order summary</h3>
            <div class="myAuth-group">
                <div class="myAuth">
                    <div class="form-group">
                        <div class="submit-reset">
                            <PrimaryBtn buttonText="Continue to pay" @click="submitForm" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    methods: {
        submitForm() {
            this.$emit('customEvent');
        },
    },
};
</script>

  
<style scoped>
p {
    text-align: center;
}
</style>
  
<style scoped>
.individual-form {
    display: flex;
    flex-direction: column;
    padding: 0px;
    gap: 24px;
    margin-bottom: 60px;
}

.thirdAuth {
    display: flex;
    flex-direction: column;
    padding: 0px;
    gap: 24px;
}

.auth-btn-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px px;
    gap: 16px;
}

.myAuth-group {
    display: flex;
    flex-direction: column;
    padding: 0px;
    gap: 24px;
}

.form-group {
    gap: 24px;
}

.personal {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 16px;
    width: 100%;
}

.password {
    position: relative;
}

.password span svg {
    position: absolute;
    right: 16px;
    top: 14px;
    fill: var(--grey-grey3);
}

.submit-reset {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 24px;
}

/* For webkit-based browsers */
input.no-arrow::-webkit-outer-spin-button,
input.no-arrow::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* For Firefox */
input.no-arrow::-moz-number-spin-box {
    -moz-appearance: none;
    margin: 0;
}
</style>