<template>
    <div class="bigscreen" >
        <div class="desktop-modal">
          <div class="desktop-modal-top">
            <div class="modal-cancel-btn">
                <p>Password has been Changed!</p>
                        <button @click="setDismissModal()">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.333 20.6673L20.6663 11.334M11.333 11.334L20.6663 20.6673L11.333 11.334Z"
                                    stroke="#565C69" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="#BDC0CE" />
                            </svg>
                        </button>
                    </div>
            <div class="desktop-modal-text">
            <p>Hello, your password has been changed,
                 Continue shopping on IPC with ease ✨</p>
            </div>
          </div>
          <div class="desktop-modal-bottom">
            <DynamicButton class="neutral-btn" 
            size="standard" 
            type="neutral" 
            buttonText="Go to Market" 
            :showText="true" 
            :slotNeeded="false"
            @clickButton="routeToMarket()"
            />

          </div>
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
    methods:{
        setDismissModal() {
            this.$emit("cancelModal");
            console.log("try");
        },
        routeToMarket(){
            this.$emit("routeToMarket")
            console.log('pushed')
        }
    }
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
     flex-direction: column;
    gap: 32px; 
    border-radius: 16px;
    background: #fff;
    box-shadow: rgb(13, 11, 11)0px 0px 0px rgba(0, 2, 46, 0.1), 0px 9px 19px 0px rgba(0, 2, 46, 0.1),
        0px 35px 35px 0px rgba(0, 2, 46, 0.09), 0px 78px 47px 0px rgba(0, 2, 46, 0.05),
        0px 138px 55px 0px rgba(0, 2, 46, 0.01), 0px 216px 60px 0px rgba(0, 2, 46, 0);
}
.desktop-modal-top{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 8px;
}
.modal-cancel-btn{
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.modal-cancel-btn button{
    display: flex;
width: 36px;
height: 36px;
padding: 6px;
justify-content: center;
align-items: center;
gap: 10px;
flex-shrink: 0;
}
.modal-cancel-btn p{
color: var(--grey-grey-1, #303237);
font-family: Switzer;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: 36px; /* 150% */
letter-spacing: -0.5px;
}
.desktop-modal-text{
    /* border:1px solid blue; */
    width: 100%;
}
.desktop-modal-text p{
 color: var(--grey-grey-2, #565C69);
font-family: Switzer;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 150% */
}
.desktop-modal-bottom{
    width: 100%;
}
@media screen and (max-width:600px) {
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }
    .bigscreen {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: var(--modal, rgba(48, 50, 55, 0.30));
    z-index: 9999;
}
.desktop-modal-text p{
    text-align: left;
    font-size: 18px;
    color: black;
}
.desktop-modal {
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    width: 100%;
    /* height: 40%; */
    margin: auto;
    padding: 24px 16px;
    border-radius: 24px 24px 0px 0px;
    background: #fff;
    box-shadow: rgb(13, 11, 11)0px 0px 0px rgba(0, 2, 46, 0.1), 0px 9px 19px 0px rgba(0, 2, 46, 0.1),
        0px 35px 35px 0px rgba(0, 2, 46, 0.09), 0px 78px 47px 0px rgba(0, 2, 46, 0.05),
        0px 138px 55px 0px rgba(0, 2, 46, 0.01), 0px 216px 60px 0px rgba(0, 2, 46, 0);
}
.modal-cancel-btn p{
    color: var(--grey-grey-1, #303237);

/* H3/Heading 3 Small Medium */
font-family: Switzer;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 30px; /* 150% */
letter-spacing: -0.5px;
}
.desktop-modal-text P{
    color: var(--grey-grey-2, #565C69);

/* Body Large/Body Large Regular */
font-family: Switzer;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 150% */
}
}
</style>