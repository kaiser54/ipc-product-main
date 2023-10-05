<template>
    <div class="loading">
        <span class="loaded"></span>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.loading {
    top: 0;
    left: 0;
    z-index: 100;
    height: 100%;
    width: 100%;  
    /* background: #0000005d; */
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid red; */
}
    .loaded {
  width: 32px;
  height: 32px;
  position: relative;
  border-radius: 50%;
  color: grey;
  animation: fill 1s ease-in infinite alternate;
}
.loaded::before , .loaded::after {
  content: '';
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  left: 48px;
  top: 0;
  animation: fill 0.9s ease-in infinite alternate;
}

.loaded::after {
  left: auto;
  right: 48px;
  animation-duration: 1.1s;
}
@media screen and (max-width:750px) {
    .loading {
    top: 300px;
    left: 0;
    z-index: 100;
    height: 100%;
    width: 100%;  
    /* background: #0000005d; */
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid red; */
}
  }
@keyframes fill {
 0% {  box-shadow: 0 0 0 2px inset }
 100%{ box-shadow: 0 0 0 10px inset }
}
  
</style>