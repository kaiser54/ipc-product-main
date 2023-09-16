<template>
    <div style="width: 100%">
        <!-- <LoaderComponent v-if="loading" /> -->
        <Loading :message="message"  v-if="verificationLoading" />
        <ModalEmailVerified v-else-if="showModal"/>
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import Loading from '~/components/Loader/Rolling.vue';
export default {
  components: { Loading },
    layout: "dashboardview",
    head() {
        return {
            title: this.pageTitle,
        };
    },
    data() {
        return {
            pageTitle: "IPC | Market",
            checkMail: false,
            inCart: false,
            animate: null,
            verificationLoading: true,
            showModal: false,
            message: ''
        };
    },
    mounted() {
        // set welcome modal to show on condition that a user is new or not
        // this.showModal = localStorage.getItem('welcomeFlow') !== 'complete'
        // this.fetchAllProducts(); // Fetch all products when the component is mounted
        this.checkScreenSize();
        window.addEventListener("resize", this.checkScreenSize);
    },
    computed: {
        ...mapState("product", ["loading", "error"]),
        ...mapGetters("product", ["getProductsBySearch"]),
        filteredProducts() {
            return this.getProductsBySearch; // Use the searchQuery here
        },
    },
    methods: {
        ...mapActions("product", ["fetchAllProducts"]),
        checkScreenSize() {
            this.animate = window.innerWidth <= 950 ? "animate__slideInUp" : "animate__zoomIn";
        },
        async verifyEmail() {
            try {
              this.verificationLoading = true
              this.message = "Verifying Email, Please wait"
                const response = await this.$axios.post('/business-customers/verify-email', {
                    token: this.$route.params.token
                }
                )
                this.verificationLoading = false
                console.log('Token Sent', response.data)
                localStorage.setItem("verified",response.data.status ) 
                const getVerified = localStorage.getItem("verified")
                console.log(getVerified)

                // Save the status in local storage
                // localStorage.setItem("verified", response.data.status);
                // Set showModal to true to display ModalEmailVerified
                this.showModal = true;

                // After 10 seconds, hide the modal and navigate to /dashboard/Market
                setTimeout(() => {
                this.$router.push("/dashboard/Market");
                }, 3000); // 3000 milliseconds = 3 seconds
                

                // this.$router.push("/dashboard/Market");
            } catch (error) {
              this.verificationLoading = true
              this.message = "Hold on, Something went wrong"
                console.error('Wrong Token:', error)
            }
        },
        handleOpenMail() {
            this.checkMail = !this.checkMail;
            this.isVerifyMail = !this.isVerifyMail;
        },
        welcomeUser() {
            const welcome = localStorage.getItem('welcomeFlow')
            if (!welcome) {
                localStorage.setItem('welcomeFlow', 'incomplete')
            }
        },
        clear() {
            localStorage.removeItem('welcomeFlow')
        },
        removeModal() {
            this.showModal = false
            localStorage.setItem('welcomeFlow', 'complete');
        },
    },
    created() {
        console.log(this.$route.params)
        this.verifyEmail()
    },

    beforeDestroy() {
        window.removeEventListener("resize", this.checkScreenSize);
    },


};
</script>
  
  
  
<style>
.nuxt-page {
    display: flex;
    gap: 32px;
    flex-direction: column;
    width: auto;
    height: 100%;
}
</style>
  
<style scoped>
.product-top-wrap {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: flex-start;
    padding: 16px;
    gap: 16px;
    width: 100%;
    justify-content: space-between;
}

@media (min-width: 950px) {
    .webskeleton {
        display: block;
    }

    .SkeletonLoader {
        display: none;
    }
}

@media (max-width: 950px) {
    .product-top-wrap {
        padding: 0;
        gap: 8px;
    }

    .webskeleton {
        display: none;
    }

    .SkeletonLoader {
        display: block;
    }
}

@media (max-width: 950px) {
    .m-20 {
        margin: 0;
        padding: 16px;
        background: var(--grey-grey6);
    }

    .page-title {
        display: none;
    }
}
</style>
  