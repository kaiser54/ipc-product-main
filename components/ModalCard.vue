<template>
    <div class="modal-container" v-if="showModal">

        <div class="modals-page">
            <!-- <transition-group  name="slide-fade" tag="div"> -->
                <DynamicModal v-if="activeCardIndex === 0" @cancelModal="offModal" :key="0"
                    @nextTab="nextModal()" :content="cards[0]" @dismissModal="removeModal()">
                    <template v-slot:icon>
                        <icon :activeCardIndex="0" />
                    </template>
                    <template v-slot:neutral>
                        <DynamicButton class="neutral-btn" @clickButton="prevTab()" size="standard" type="neutral"
                            buttonText="Previous" :showText="true" :disabled="true">
                        </DynamicButton>
                    </template>
                </DynamicModal>

                <DynamicModal v-if="activeCardIndex === 1"  :key="1" @nextTab="nextModal()"
                    @cancelModal="offModal" :content="cards[1]" @dismissModal="removeModal()">
                    <template v-slot:icon>
                        <icon :activeCardIndex="1" />
                    </template>
                    <template v-slot:neutral>
                        <DynamicButton class="neutral-btn" v-if="activeCardIndex > 0" @clickButton="prevTab()"
                            size="standard" type="neutral" buttonText="Previous" :showText="true">
                        </DynamicButton>
                    </template>
                </DynamicModal>


                <DynamicModal v-if="activeCardIndex === 2"  :key="2" @nextTab="nextModal()"
                    @cancelModal="offModal" :content="cards[2]" @dismissModal="removeModal()">
                    <template v-slot:icon>
                        <icon :activeCardIndex="2" />
                    </template>
                    <template v-slot:neutral>
                        <DynamicButton class="neutral-btn" v-if="activeCardIndex > 0" @clickButton="prevTab()"
                            size="standard" type="neutral" buttonText="Previous" :showText="true">
                        </DynamicButton>
                    </template>
                </DynamicModal>


                <DynamicModal v-if="activeCardIndex === 3"  :key="3" @nextTab="nextModal()"
                    @cancelModal="offModal" :content="cards[3]" @dismissModal="removeModal()">
                    <template v-slot:icon>
                        <icon :activeCardIndex="3" />
                    </template>
                    <template v-slot:neutral>
                        <DynamicButton class="neutral-btn" v-if="activeCardIndex > 0" @clickButton="prevTab()"
                            size="standard" type="neutral" buttonText="Previous" :showText="true">
                        </DynamicButton>
                    </template>
                </DynamicModal>


                <DynamicModal v-if="activeCardIndex === 4" :key="4" @nextTab="nextModal()"
                    @cancelModal="offModal" :content="cards[4]" @dismissModal="removeModal()">
                    <template v-slot:tag>
                        <NewTag 
                  title="COMING SOON" bgColor="#E9F7E7" textColor="#20AF0B"
                  border="1px solid #A4DE9B"
                  padding="4px 15px"
                  borderRadius="15px"
                  fonts="12px"
                 
               />
                    </template>
                    <template v-slot:icon>
                        <icon :activeCardIndex="4" />
                    </template>
                    <template v-slot:neutral>
                        <DynamicButton class="neutral-btn" v-if="activeCardIndex > 0" @clickButton="prevTab()"
                            size="standard" type="neutral" buttonText="Previous" :showText="true">
                        </DynamicButton>
                    </template>
                </DynamicModal>
            <!-- </transition-group> -->
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showModal: true,
            // showModal2:false,

            activeCardIndex: 0,
            cards: [
                
{
    title: "Hello, welcome to IPC",
    image: require('~/assets/images/cutting-edge.png'),
    mobileImage: require('~/assets/images/mobilecutting-edge.png'),
    description: "Welcome to our cutting-edge e-commerce platform, where efficient procurement becomes a breeze."
},
{
    title: "Get instant invoice ",
    image: require('~/assets/images/detailed-invoice.png'),
    mobileImage: require('~/assets/images/mobiledetailed-invoice.png'),
    description: "Get the detailed invoice of everything about your order in your email and in PDF immediately after checking out."
},
{
    title: "Track your orders",
    image: require('~/assets/images/single-bulk-order.png'),
    mobileImage: require('~/assets/images/mobilesingle-bulk-order.png'),
    description: "When you buy on IPC, either single or bulk orders, you get to track your order from processing to delivery."
},
{
    title: "Seamless payment options",
    image: require('~/assets/images/seamless-payment.png'),
    mobileImage: require('~/assets/images/mobileseamless-payment.png'),
    description: "Different seamless payment options for you on IPC to make your checkout experience a smooth one."
},
{
    title: "Refer and earn cash",
    image: require('~/assets/images/refer-friend.png'),
    mobileImage: require('~/assets/images/mobilerefer-friend.png'),
    description: "Get up to ₦1,000 by referring your friends and family to buy and procure food and other items on IPC."
},
            ]

        }
    },
    methods: {
        show() {
            this.showModal = true;
            // if (this.isMobile) {
            //     setTimeout(() => {
            //         this.$refs.modal.classList.add('slide-up')
            //     }, 10)
            // }
        },
        hide() {
            this.showModal = false;
            // if (this.isMobile) {
            //     setTimeout(() => {
            //         this.$refs.modal.classList.remove('slide-up')
            //     }, 10)
            // }
        },
        //     setShowModal(){
        //     this.showModal = true
        // },
        offModal() {
            this.$emit('removeModal')
        },

        nextModal() {
            if (this.activeCardIndex <= this.cards.length) {
                this.activeCardIndex++
                if (this.activeCardIndex === 5) {
                this.$emit('unmountModal')
                this.showModal = false
                this.$store.dispatch('setModalVisible', false);

                }
            }
        },
        prevTab() {
            if (this.activeCardIndex > 0) {
                this.activeCardIndex--
            }
        }
    }
}
</script>

<style  scoped>
.modal-container{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--modal, rgba(48, 50, 55, 0.30));;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}
.modal-page{
    background: white;
}
.modal-card {
    border: 1px solid red;
    width: 100%;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.7s ease-in-out;
}

.slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(-100%);
    opacity: 0
}

@media screen and (max-width:768px) {
    .slide-fade-enter, .slide-fade-leave-to {
    transform: translateY(-100%);
    opacity: 0
}
}
</style>