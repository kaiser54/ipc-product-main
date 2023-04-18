<template>
    <div class="verifyMail">
        <div class="verifyMail-bg"></div>
        <div class="verifyMail-pop animate__animated animate__slideInUp">
            <div class="handler-content">
                <div class="handler">
                    <div class="rectangle"></div>
                </div>
                <div class="verifyMail-content">
                    <div class="title-close">
                        <h3 class="h3-small-medium">Verify email address</h3>
                        <svg @click="$emit('close')" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M11.3333 20.6654L20.6666 11.332M11.3333 11.332L20.6666 20.6654L11.3333 11.332Z"
                                stroke="#565C69" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="#BDC0CE" />
                        </svg>
                    </div>
                    <p>We have sent a secured reset link to your email. Click on the link to verify your email.</p>
                </div>
            </div>
            <div class="btn-group">
                <button @click="$emit('close')" class="btn neutral-btn">Cancel</button>
                <nuxt-link :to="{ name: 'index' }"><button class="btn negative-btn">Log Out</button></nuxt-link>  
            </div>
        </div>
    </div>
</template>

<script>
import "animate.css";
export default {

}
</script>

<style scoped>
.animate__animated.animate__slideInUp {
  --animate-duration: .5s;
}
.verifyMail {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0;
    z-index: 1;
}

.verifyMail-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0;
    z-index: 1;
    background: rgba(48, 50, 55, 0.3);
}

.verifyMail-pop {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px 16px 24px;
    gap: 32px;

    position: absolute;
    width: 100%;
    height: 233px;
    left: 0px;
    bottom: 0px;
    z-index: 1;
    overflow-y: scroll;

    /* White */

    background: #FFFFFF;
    border-radius: 24px 24px 0px 0px;
}

.handler-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;
}

.handler {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8px;
    width: 100%;
}

.rectangle {
    width: 60px;
    height: 4.55px;

    /* Grey/Grey_5 */

    background: var(--grey-grey5);
    border-radius: 100px;
}

.verifyMail-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 8px;
}

.verifyMail-content p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* or 150% */


    /* Grey/Grey2 */

    color: var(--grey-grey2);
}

.title-close {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0px;
    width: 100%;
}

.btn-group {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px;
    gap: 16px;
    width: 100%;
}
.btn-group a {
    width: 100%;
}
</style>