<template>
  <button @click="handleClick" class="btn primary-btn">
    {{ buttonText }}
    <div class="lds-ellipsis" v-if="buttonTextLoader">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </button>
</template>
  
<script>
export default {
  props: {
    buttonText: {
      type: String,
      required: true
    },
    buttonTextLoader: {
      type: Boolean,
      default: false
    },
  },
  methods: {
    handleClick() {
      this.$emit('click');
    }
  }
};
</script>

<style scoped>
.lds-ellipsis {
  display: inline-block;
  position: relative;
  /* width: 80px; */
  height: 48px;
}
.lds-ellipsis div {
  position: absolute;
  top: 19px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgb(235, 237, 255);
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
</style>
  