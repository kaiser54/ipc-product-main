<template>
    <div class="loading">
        <span class="loaderr"></span>
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
    width: 80%;  
    /* background: #0000005d; */
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid red; */
}
.loaderr {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  border: 10px solid;
  box-sizing: border-box;
  animation: animloader 1s linear infinite alternate;
}
@media screen and (max-width:950px) {
    .loading {
    width: 100%;
}
  }
@keyframes animloader {
  0% {
    border-color: grey rgba(255, 255, 255, 0) rgba(255, 255, 255, 0) rgba(255, 255, 255, 0);
  }
  33% {
    border-color: grey rgba(255, 255, 255, 0) rgba(255, 255, 255, 0);
  }
  66% {
    border-color: grey rgba(255, 255, 255, 0);
  }
  100% {
    border-color: grey;
  }

} 
</style>