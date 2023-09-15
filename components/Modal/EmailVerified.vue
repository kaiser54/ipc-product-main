<template>
    <div class="bigscreen">
        <div class="desktop-modal">
            <p>Your Email has been verified</p>
        </div>
    </div>
</template>

<script>
    export default {
    //     computed: {
    //     showModal() {
    //         return localStorage.getItem('verified') === 'true';
    //     }
    // }
}
</script>

<style scoped>
    
.bigscreen {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: var(--modal, rgba(48, 50, 55, 0.30));
    justify-content: center;
    align-items: center;
    z-index: 9999;
}
.desktop-modal {
    display: flex;
    max-width: 432px;
    width: 100%;
    height: 220px;
    margin: auto;
    padding: 24px;
    justify-content: center;
    align-items: center;
    /* flex-direction: column;
    align-items: flex-end;
    gap: 32px; */
    border-radius: 16px;
    background: #fff;
    box-shadow: rgb(13, 11, 11)0px 0px 0px rgba(0, 2, 46, 0.1), 0px 9px 19px 0px rgba(0, 2, 46, 0.1),
        0px 35px 35px 0px rgba(0, 2, 46, 0.09), 0px 78px 47px 0px rgba(0, 2, 46, 0.05),
        0px 138px 55px 0px rgba(0, 2, 46, 0.01), 0px 216px 60px 0px rgba(0, 2, 46, 0);
}
.desktop-modal p{
    text-align: center;
    font-size: 22px;
    color: black;
}
</style>