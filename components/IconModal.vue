<template>
    <div class="icon-container">
        <div v-for="(icon, index) in 5" :key="index" class="icon" :class="[index === activeCardIndex ? 'active' : '']" />
    </div>
</template>

<script>
    export default {
        props:['activeCardIndex'],
        computed:{
            icons(){
                return Array.from({length:5},(_, index) =>({
                    index, 
                    active: index === this.activeCardIndex
                }) )
              
            }
        }
    }
</script>

<style  scoped>
.icon-container{
 display: flex;
 justify-content: center;
align-items: flex-start;
gap: 4px;
}

.icon {
    width: 8px;
    height: 8px;
  border-radius: 50%;
  background-color: #E5E7EF;
  transition: background-color 0.3s ease;
  
}

.active {
  background-color: #0009B3;
}
</style>