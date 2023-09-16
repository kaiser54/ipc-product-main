<template>
    <div class="loading">
        <div class="loading">
            <span></span>
        </div>
        <div class="loading-text">
            <p>{{ message }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Loading',
        props:{
            message:{
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped>
.loading {
    top: 0;
    left: 0;
    z-index: 100;
    height: 100vh;
    width: 100vw;  
    background: #0000005d;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
}
@keyframes spin {
    to {
        transform: rotateZ(360deg)
    }
}
.loading  span {
    display: block;
    width: 60px;
    height: 60px;
    margin: 0 auto;
    border: 3px solid transparent;
    border-top-color: #fff;
    border-bottom-color: #fff;
    border-radius: 50%;
    animation: spin ease 1000ms infinite;
}
.loading-text p{
    color: #fff;
    font-size: 25px;
}
</style>