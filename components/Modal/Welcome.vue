<template>
    <div>

        <div class="bigscreen modal">
            <div class="desktop-modal" :class="{ 'animate': animate }">
                <div class="modal-visual">
                    <div class="modal-cancel-btn">
                        <button @click="setDismissModal()">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.333 20.6673L20.6663 11.334M11.333 11.334L20.6663 20.6673L11.333 11.334Z"
                                    stroke="#565C69" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="#BDC0CE" />
                            </svg>
                        </button>
                    </div>
                    <div class="modal-content">
                        <div id="modal-slides-ctn" class="modal-slides-ctn">
                            <div v-for="content, index in contents" :key="index" class="modal-slides">
                                <div class="modal-image">
                                    <img :src="content.image" alt="" />
                                </div>
                                <div class="modal-text">
                                    <div class="modal-title">
                                        <h3>{{ content.title }}</h3>
                                        <NewTag v-if="activeCardIndex === 4" title="COMING SOON" bgColor="#E9F7E7"
                                            textColor="#20AF0B" border="1px solid #A4DE9B" padding="4px 15px"
                                            borderRadius="15px" fonts="12px" />
                                    </div>
                                    <div class="modal-description">
                                        <p>{{ content.description }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-bottom">
                            <div class="modal-index-icon">
                                <IconModal :activeCardIndex="activeCardIndex" />
                            </div>
                            <div class="modal-button">
                                <div class="modal-bton">
                                    <DynamicButton :disabled="maxLeft" class="neutral-btn"
                                        @clickButton="move('-ve', 'modal-slides-ctn')" size="standard" type="neutral"
                                        buttonText="Previous" :showText="true" :slotNeeded="false" />
                                </div>
                                <div class="modal-btn">
                                    <DynamicButton :disabled="maxRight" class="primary-btn"
                                        @clickButton="move('+ve', 'modal-slides-ctn')" size="standard" type="primary"
                                        :buttonText="activeCardIndex === 4 ? 'Continue' : 'Next'" :showText="true" :slotNeeded="false" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="smallScreen">
            <div class="smallScreen-modal">
                <div class="mobile-modal-visual">
                    <div class="mobile-top-icon">
                        <div class="scroll-icon">
                            <svg width="37" height="5" viewBox="0 0 37 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.900391" y="0.226562" width="35.1985" height="4.55009" rx="2.27504"
                                    fill="#E8E7EB" />
                            </svg>
                        </div>
                        <div class="modal-cancel-icon">
                            <button @click="setDismissModal()">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.333 20.6673L20.6663 11.334M11.333 11.334L20.6663 20.6673L11.333 11.334Z"
                                        stroke="#565C69" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="#BDC0CE" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="mobile-modal-structure">
                    <div class="mobile-modal-content">
                        <div id="mobile-modal-slides-ctn" class="mobile-modal-slides-ctn">
                            <div v-for="content, index in contents" :key="index" class="mobile-modal-slides">
                                <div class="mobile-modal-images">
                                    <img :src="content.mobileImage" alt="">
                                </div>
                                <div class="mobile-modal-text">
                                    <div class="mobile-modal-title">
                                        <h3>{{ content.title }}</h3>
                                        <NewTag v-if="MobileActiveCardIndex === 4" title="COMING SOON" bgColor="#E9F7E7"
                                            textColor="#20AF0B" border="1px solid #A4DE9B" padding="4px 15px"
                                            borderRadius="15px" fonts="12px" />
                                    </div>
                                    <div class="mobile-modal-description">
                                        <p>{{ content.description }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mobile-modal-bottom">
                        <div class="mobile-index-icon">
                            <IconModal :activeCardIndex="MobileActiveCardIndex" />
                        </div>
                        <div class="mobile-modal-button">
                            <div class="mobile-modal-bttn">
                                <DynamicButton :disabled="maxLeft" class="neutral-btn"
                                @clickButton="move('-ve', 'mobile-modal-slides-ctn')" size="standard" type="neutral"
                                    buttonText="Previous" :showText="true" :slotNeeded="false" />
                            </div>
                            <div class="mobile-modal-btn">
                                <DynamicButton :disabled="maxRight" class="primary-btn"
                                @clickButton="move('+ve', 'mobile-modal-slides-ctn')" size="standard" type="primary"
                                :buttonText="MobileActiveCardIndex === 4 ? 'Continue' : 'Next'" :showText="true" :slotNeeded="false" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            showText: true,
            content: {},
            activeCardIndex: 0,
            showModal: false,
            activeCardIndex: 0,
            MobileActiveCardIndex: 0,
            maxLeft: true,
            maxRight: false,

            contents: [
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
        showmode() {
            this.showModal = false
            console.log('paged')
        },
        setDismissModal() {
            this.$emit("cancelModal");
            console.log("try");
        },
        nextTab() {
            this.$emit("nextTab");
        },
        getImageSource() {
            return this.isMobile ? content.mobileImage : content.image;
        },
        move(dir, id) {
            console.log(dir)
            const feedbackBoxWidth = document.getElementById(id);
            if (dir === "+ve") {
                if (id === "modal-slides-ctn") {
                    this.activeCardIndex++
                } else {
                    this.MobileActiveCardIndex++
                }
                this.maxLeft = false;
                const maxScrollLeft =
                    feedbackBoxWidth.scrollWidth - feedbackBoxWidth.clientWidth;
                feedbackBoxWidth.scrollLeft += feedbackBoxWidth.clientWidth;
                console.log(feedbackBoxWidth.scrollLeft)
                if (maxScrollLeft - feedbackBoxWidth.scrollLeft < 100) {
                    this.maxRight = true;
                    this.$emit('complete-flow')
                    // console.log('completed')
                } else {
                    this.maxRight = false;

                }
            }
            if (dir === "-ve") {
                if (id === "modal-slides-ctn") {
                    this.activeCardIndex--
                } else {
                    this.MobileActiveCardIndex--
                }
                this.maxRight = false;
                feedbackBoxWidth.scrollLeft -= feedbackBoxWidth.clientWidth;
                if (feedbackBoxWidth.scrollLeft < 100) {
                    if (id === "modal-slides-ctn") {
                        this.activeCardIndex = 0; // Reset activeCardIndex to 0 when scrolling to the beginning
                        this.maxLeft = false;
                    } else {
                        this.MobileActiveCardIndex = 0
                    }
                } else {

                    this.maxLeft = false;
                }
            }
        },
    },
    computed: {
        animate() {
            return this.activeCardIndex === this.index;
        }
    }
};
</script>
  
<style scoped>
* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}

.modal-slides-ctn {
    display: flex;
    width: 100%;
    overflow-x: hidden;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
}

.modal-slides-ctn::-webkit-scrollbar {
    width: 0 !important;
}

.modal-slides-ctn {
    overflow: -moz-scrollbars-none;
}

.modal-slides {
    scroll-snap-align: start;
    min-width: 100%;
    display: flex;
    gap: 32px;
    flex-direction: column;
    align-items: flex-end;
    max-width: 464px;
    width: 100%;
}

.smallScreen {
    display: none;
}

.bigscreen {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--modal, rgba(48, 50, 55, 0.30));
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.desktop-modal {
    display: flex;
    width: 512px;
    margin: auto;
    padding: 16px 24px 24px 24px;
    flex-direction: column;
    align-items: flex-end;
    gap: 32px;
    border-radius: 16px;
    background: #fff;
    box-shadow: rgb(13, 11, 11)0px 0px 0px rgba(0, 2, 46, 0.1), 0px 9px 19px 0px rgba(0, 2, 46, 0.1),
        0px 35px 35px 0px rgba(0, 2, 46, 0.09), 0px 78px 47px 0px rgba(0, 2, 46, 0.05),
        0px 138px 55px 0px rgba(0, 2, 46, 0.01), 0px 216px 60px 0px rgba(0, 2, 46, 0);
}



.modal-image {
    max-width: 464px;
    width: 100%;
    height: 205px;
    align-self: stretch;
}

.modal-text {
    max-width: 464px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: left;
    gap: 8px;
    align-self: stretch;
}


.modal-title {
    display: flex;
    align-items: center;
    gap: 8px;
}


.modal-title h3 {
    color: #303237;
    text-align: left;
    font-family: Switzer;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 36px;
    letter-spacing: -0.5px;
}

.modal-description {
    align-self: stretch;
    color: #565c69;
    text-align: left;
}


.modal-description p {
    font-family: Switzer;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
}


.modal-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    align-self: stretch;
}

.modal-button {
    display: flex;
    align-items: center;
    gap: 16px;
  
}
.modal-btn{
    /* max-width: 150px; */
    width:115px;
    /* border: 1px solid red; */
}

template svg {
    width: 20px;
    height: 20px;
}

.modal-cancel-btn {
    display: flex;
    width: 32px;
    justify-content: center;
    align-items: flex-end;
    gap: 10px;
}

.pop-icon {
    display: flex;
    width: 343px;
    height: 25px;
    padding: 8px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.modal-visual {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 16px;
    align-self: stretch;
}


.modal-bottom {
    max-width: 464px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

@media screen and (max-width:600px) {

    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    .mobile-modal-slides-ctn {
        display: flex;
        width: 100%;
        overflow: -moz-scrollbars-none;
        overflow-x: hidden;
        margin: 0px;
        padding: 0px;
        scroll-behavior: smooth;
        scroll-snap-type: x mandatory;
    }

    .mobile-modal-slides-ctn::-webkit-scrollbar {
        width: 0 !important;
    }


    .mobile-modal-slides {
        scroll-snap-align: start;
        min-width: 100%;
        display: flex;
        gap: 32px;
        flex-direction: column;
        margin: 0px;
    }
    .bigscreen {
        display: none;
    }

    .smallScreen {
        display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--modal, rgba(48, 50, 55, 0.30));
    ;
    justify-content: center;
    align-items: center;
    z-index: 9999;

    }

    .mobile-modal-structure {
        width: 100%;
        display: flex;
        gap: 18px;
        flex-direction: column;

    }

    .smallScreen-modal {
        width: 100%;
        display: flex;
        padding: 0px 16px 24px 16px;
        border-radius: 24px 24px 0px 0px;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        background: var(--white, #fff);
        gap: 16px;
        box-shadow: 0px 216px 60px 0px rgba(0, 2, 46, 0), 0px 9px 19px 0px rgba(0, 2, 46, 0.1),
            0px 35px 35px 0px rgba(0, 2, 46, 0.09), 0px 78px 47px 0px hsla(237, 100%, 9%, 0.05),
            0px 138px 55px 0px rgba(0, 2, 46, 0.01), 0px 216px 60px 0px rgba(0, 2, 46, 0);
          position: fixed;
    bottom: 0;
    left: 0;
    }

    .mobile-top-icon {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 8px;
        margin-top: 25px;
    }

    .mobile-modal-text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
        align-self: stretch;
    }

    .scroll-icon {
        display:none;
        width: 100%;
        height: 25px;
        padding: 8px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

    .modal-cancel-icon button {
        display: flex;
        width: 34px;
        height: 34px;
        padding: 6px;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

    .mobile-modal-visual {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 16px;
    }

    .mobile-modal-images {
        display: flex;
        width: 100%;
        /* height: 212px; */
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    .mobile-modal-images img {
        display: block;
        width: 100%;
        justify-content: center;
        align-items: center;
        height: auto;
        object-fit: contain;
    }



    .mobile-modal-title {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        height: 30px;
        
    }

    .mobile-modal-title h3 {
        color: var(--grey-grey-1, #303237);
        font-family: Switzer;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 30px;
        letter-spacing: -0.5px;
        white-space: nowrap;
    }

    .mobile-modal-description {
        width: 92%;
    }

    .mobile-modal-description p {
        color: var(--grey-grey-3, #7E8494);
        align-self: stretch;
        font-family: Switzer;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        text-align: left;
    }

    .mobile-modal-bottom {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 32px;
        align-self: stretch;
    }
    .mobile-modal-button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16px;
        align-self: stretch;
    }

    .mobile-modal-bttn,
    .mobile-modal-btn {
        width: 100%;
    }

    @media screen and (max-width : 300px ) {
        .mobile-modal-title {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        gap: 8px;
        height: 30px;
        margin-bottom: 10px;
        
    }

    .mobile-modal-title h3 {
        color: var(--grey-grey-1, #303237);
        font-family: Switzer;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 30px;
        letter-spacing: -0.5px;
        white-space: nowrap;
    }
    }
}
</style>
  