<template>
    <div class="categories">
        <div class="recommend">
           <div class="recommended-text">
            <h3>
                {{Header}}
            </h3>
           </div>
           <div class="recommended-svg">
            <svg @click="nextPage" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.666 13.3359L23.3327 20.0026L16.666 26.6693" stroke="#303237" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#969AE0"/>
</svg>
           </div>
            
        </div>
        <div class="Category-page">
        <CategoryCard v-for="(card, index) in Cards" :key="index"
            :nickname="card.nickname"
            :name = "card.name"
            :price = "card.price"
            :slash = "card.slash"
            :image= "card.image"
            @click="navigateToProductPage(card)"
        >
       
        </CategoryCard>
    </div>
    </div>
</template>

<script>
    export default {
        props:{
            Header:{
                type: String,
                required: true
            }
        },
        methods:{
            nextPage(){
                this.$router.push('/dashboard/market')
            },
            navigateToProductPage(card) {
            const randomProductId = this.generateRandomId(); // Call the function to generate a random ID
            // Navigate to the product page with the random ID
            this.$router.push(`/product/${randomProductId}`);
            },
            generateRandomId() {
            // Generate a random ID within a specific range (adjust the range as needed)
            return Math.floor(Math.random() * (20 - 1 + 1)) + 1;
            }
          
        },
        data(){
            
            return{
                
                Cards:[
                    {
                        price: '₦75,000',
                        slash: '₦80,000',
                        name: "Mama's Choice Nigerian Perboiled Rice 25kg",
                        nickname:"Mama's choice Nig...",
                        image: require('~/assets/images/image(1a).png')
                    },
                    {
                        price: '₦75,000',
                        slash: '₦80,000',
                        name: "Devon King's Pure Vegetable Oil  - 5 Litres",
                        nickname:"Devon King's Pure Veg...",
                        image: require('~/assets/images/image(1).png')
                    },
                    {
                        price: '₦75,000',
                        slash: '₦80,000',
                        name: "Portable 32 Pieces Egg Create",
                        nickname:"Portable 32 Pieces...",
                        image: require('~/assets/images/image(2b).png')
                    },
                    {
                        price: '₦75,000',
                        slash: '₦80,000',
                        name: "Binatone 1.5L Multipurpose Blender with Grinder - BLG 452",
                        nickname:"Binatone 1.5L Multipurpose...",
                        image: require('~/assets/images/image(3).png')
                    },
                    {
                        price: '₦1,600',
                        slash: '₦2,000',
                        name: "Chat Foods Spice Dried Red Pepper 250G Jar (Chat Foods)",
                        nickname:"Chat Foods Spice Dried ...",
                        image: require('~/assets/images/image(7).png')
                    },
                
                ]
            }
        }
    }
</script>

<style scoped>
.categories{
    width: 97%;
    background-color: #F4F5F8;
    padding: 16px;
    border-radius: 8px;
}
.Category-page{
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
    max-width: 1200px;
}
/* Other Styling for Category-page */
    /* display: flex;
    flex-wrap: wrap;
     justify-content:space-between;
    gap: 15px; */
    /*width: 100%; */
.recommended-text h3{
    font-size: 20px;
    line-height: 36px;
    font-family: var(--primary-font);
    margin: 0px;
}
.recommend{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.recommended-svg svg{
    cursor: pointer;
    width: 35px;
    height: 35px;
}
@media screen and (max-width: 1300px) {
    .Category-page{
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    max-width: 1200px;
}
}
@media screen and (max-width: 1130px) {
    .Category-page{
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    max-width: 1200px;
}
}
@media screen and (max-width: 950px) {
    .Category-page{
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    max-width: 1200px;
}
}
@media screen and (max-width: 850px) {
    .Category-page{
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    max-width: 1200px;
}
}
@media screen and (max-width: 768px) {
    .categories{
        width: 100%;
    }
    .Category-page{
        display: flex;
        gap: 5px;
        flex-wrap: nowrap;
        overflow-x: scroll; 
    }
    /* Test Styling for Category-page */
    /* display: flex;
        flex-direction: row;
        align-items: flex-start;
        border: 1px solid red; */
        /* display: flex; */
        /* flex-wrap: nowrap; */
        /* overflow-x: scroll; Enable horizontal scrolling */
        /* width: 100vw; Full width of the screen */
  }
</style>