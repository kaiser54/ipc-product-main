<template>
    
    <div class="counter-btn" v-if="isInCart">
        <button @click="decrementQuantity" class="circle btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M3.33325 8H12.6666"
              stroke="#0009B3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
  
        <div class="counter" v-if="!loader">{{ getProductQuantity }}</div>
        <span class="loader" v-if="loader"></span>
  
        <button @click="increaseQuantity" class="circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M3.33325 7.99967H12.6666M7.99992 3.33301V12.6663V3.33301Z"
              stroke="#0009B3"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.counter-btn {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    gap: 16px;
    width: 100%;
  }
  
  .counter-btn .circle {
    position: relative;
    /* Primary/P75 */
  
    border: none;
    background: var(--grey-grey6);
    width: 40px;
    height: 40px;
    top: 0;
    left: 0;
  }
  .counter-btn:hover .circle:hover{
    background: var(--grey-grey6);
  }
  .counter-btn:focus .circle:focus{
    background: var(--grey-grey5);
  }
  .counter-btn:active .circle:active{
    background: var(--grey-grey5);
  }


.circle {
    position: absolute;
    top: 12px;
    right: 12px;
  
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 6px;
    gap: 10px;
  
    width: 32px;
    height: 32px;
  
    /* Grey/Grey4 */
  
    border: 1px solid var(--new-primary-p300);
    border-radius: 100px;
    z-index: 1;
  }
  .counter {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */
  
    /* Grey/Grey1 */
  
    color: var(--grey-grey1);
  }

  .loader {
    width: 20px;
    height: 20px;
    border: 2px solid var(--grey-grey1);
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }
  
  .circle svg path {
    stroke: #565c69;
  }
  .circle svg.liked path {
    stroke: red;
  }
  
  .circle .liked {
    fill: red;
  }
  
  

@media (max-width: 950px) {
    .counter-btn svg {
      display: block;
    }
  }
  @media (max-width: 339px) {
    .counter-btn .circle {
      height: 32px;
      width: 32px;
    }
}
</style>