<template>
    <div class="operate-cart">
        <div class="cart-operatn">
             <div class="removeCart">
                <svg @click="decrementQuantity" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 24H31" stroke="#BDC0CE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="#BDC0CE" />
                </svg>
            </div>
            <!-- @click="decreaseCart" -->
            <div class="cart-number">
                <p>{{ getProductQuantity }}</p>
            </div>
            <!-- cart -->
            <div class="addToCart">
                <svg @click="incrementQuantity" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 24H31M24 17V31V17Z" stroke="#303237" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="#BDC0CE" />
                </svg>

            </div>
            <!-- @click="increaseCart"  -->
        </div>
        <div class="Add-cart">
            <DynamicButton @click="addToCart" class="auto" buttonText="Add To Cart" size="standard"
                type="primary" />
        </div>
    </div>
</template>
   
<script>
import { mapState, mapMutations } from "vuex";
export default {
    
    data(){
        return{
            product: {},
            productId: null,
            productTitle: null,
            
        }
    },
    computed:{
        ...mapState(["cart"]),
        getProductQuantity() {
      const productInCart = this.$store.state.cart.find((p) => p.id === this.product.id);
      return productInCart ? productInCart.quantity : 0;
    },
    async mounted(){
        try {
      this.loading = true;
      // const response = await this.$axios.$get(`https://fakestoreapi.com/products/${this.productId}`);
      const response = await this.$axios.$get(
        `https://fakestoreapi.com/products/${this.currentPage}`
      );
      this.product = response;
    } catch (error) {
      console.error("Error fetching products:", error);
    }
    }
    },
    methods:{
        increaseCart(){
            this.cart++
            this.$store.commit("incrementCartCount");
        },
        decreaseCart(){
            if(this.cart > 0){
                this.cart--
                this.$store.commit("decrementCartCount");
            }
        },
    //     addToCart() {
    //   this.$store.commit("addToCart", this.product);
    //   this.$store.commit("incrementCartCount");

    // },
    addToCart() {
      this.$store.commit("addToCart", this.product);
    },
    incrementQuantity() {
        console.log('working')
      this.$store.commit("incrementQuantity", { productId: this.product.id });
    },
    decrementQuantity() {
        
      this.$store.commit("decrementQuantity", { productId: this.product.id });
        
    },
    }
}

</script>
   
<style scoped>
@media screen and (max-width:768px) {
    
.operate-cart {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    background-color:white ;
    box-shadow: 0px 0px 20px rgba(48, 50, 55, 0.2);
    height:70px;
    padding: 10px 20px;
}

.cart-operatn {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
  
}

.removeCart svg,
.addToCart svg {
    width: 40px;
    height: 40px;
}
.auto{
    width: 155px;
}
.cart-number p{
    font-weight: 600;
    color: #303237;
    font-size: 16px;
    font-family: var(--primary-font);
}
}
@media screen and (max-width: 950px) {
    .operate-cart {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 30px;
    background-color:white ;
    box-shadow: 0px 0px 20px rgba(48, 50, 55, 0.2);
    height:70px;
    padding: 10px 20px;
    gap: 50px;
}
}
</style>