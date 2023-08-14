<template>
    <div class="category-card">
        <div class="category-card-icon">
            <svg @click="toggleColor" :class="{Red : isRed}" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.6304 21.8405L10.3843 16.3775C8.90659 14.8388 8.99964 12.3157 10.5863 10.8995C12.1604 9.49454 14.5471 9.76737 15.791 11.4945L16.0002 11.7848L16.2093 11.4945C17.4532 9.76737 19.8399 9.49454 21.414 10.8995C23.0007 12.3157 23.0938 14.8388 21.616 16.3775L16.3699 21.8405C16.1657 22.0531 15.8346 22.0531 15.6304 21.8405Z" :stroke="isRed ? '#FF0000' : '#565C69'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="0.5" y="0.5" width="31" height="31" rx="15.5" :stroke="isRed? '#FF0000' : '#565C69'"/>
</svg>
        </div>
        <div class="category-card-visual">
            <div class="category-card-img">
            <img :src="image" alt="">
        </div>

        </div>
        <div class="category-card-details">
            <div class="category-card-name">
            <p class="name">{{ name }}</p>
            <p class="nickname">{{ nickname }}</p>
        </div>
        <div class="category-card-prices">
            <div class="category-card-price">
                <p>{{ price }}</p>
            </div>
            <div class="category-card-slash">
                <p class="slash-price">{{ slash }}</p>
            </div>
        </div>
        </div>
   
    </div>
</template>

<script>
    export default {
        props:{
            image:{
                type: String,
                required: true
            },
            name:{
                type: String,
                required: true
            },
            nickname:{
                type: String,
                required: true
            },
            price:{
                type: String,
                required: true
            },
           slash:{
                type: String,
                required: true
            }
        },
        data(){
            return{
                isRed: false
            }
        },
        methods:{
            toggleColor(){
                this.isRed = !this.isRed
            }
        }
    }
</script>

<style scoped>
*{
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
;
}
.category-card{
    padding: 20px;
  flex-direction: column;
   gap: 5px;
   padding: 10px;
   border-radius: 8px;
   position: relative;
   background-color: white;
   
}
    /* width: 20%; */
    /* width: calc(100vw/4 - 20px); */
    /* width: calc(25% - 20px); */
    /* border: 1px solid #ccc; */
  /* text-align: center; */
  /* display: flex;
   flex-wrap: nowrap;
   justify-content: center;
   align-items: center;  */
   /* border: 1px solid red; */
   /* margin-top: 30px; */
.nickname{
    display: none;
}
.category-card-visual{
    width: 95%;
    height: 155px;
    display: flex;
    justify-content: center;
    align-items: center;
   
}

.category-card-details{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
}
.category-card-name p{
    color: rgba(86, 92, 105, 1);
    font-size: 13px;
    line-height: 21px;
    
}
.category-card-price p{
    color: rgba(48, 50, 55, 1);
    font-size: 15px;
    font-weight: 700;
    line-height: 24px;
   
    
}
.category-card-slash p{
    color:rgba(126, 132, 148, 1) ;
    font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-align: right;
  text-decoration-line: line-through;
}
.category-card-icon{
    position: relative;
}

.category-card-icon svg{
    position: absolute;
    top: 0px;
    right: 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: 32px;
  height: 32px;
  border-radius: 100px;
 

}
.category-card-prices{
    display: flex;
    align-items: center;
    gap: 5px;
    width: 100%;
   
}
.red{
    cursor: pointer;
    stroke: red;
    fill: red;
}

@media screen and (max-width: 768px) {
.nickname{
    display: block;
}
.name{
    display: none;
}
    .category-card{
    width: 100vw;
  min-width: 150px;
  background-color: white;
  margin-right: 10px;
}
.category-card-icon svg{
    display: none;
}
.category-card-visual{
    width: 95%;
    width: 100px;
    height: 120px;
    display: flex;
    justify-content: space-between;
    position: relative;
}
}
</style>
width: 100vw;
/* max-width: 100%; */
border-radius: 8px;
display: flex;
flex-wrap: nowrap;
/* justify-content: center; */
align-items: flex-start;
/* flex-direction: column; */
border: 1px solid blue;
gap: 10px;
padding: 10px;
background-color: white;
/* overflow: scroll; */
flex: 0 0 auto; /* Allow shrinking but not growing */
/* width: calc(100vw / 4); Divide screen width by 4 for each card */
min-width: 225px; /* Set a minimum width for cards */
padding: 20px;
background-color: white;
margin-right: 10px; /* Margin between cards */