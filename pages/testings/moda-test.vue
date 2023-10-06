<template>
  <div>
    <button class="button" @click="showModalFunc">Show Modal</button>
    <!-- <NewModall @closeModal="closeModal" :showModal="showModal"/> -->
    <CartNew @closeCart="closeModal" :showModal="showModal"/>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      isModalVisible: false,
      showModal: true
    };
  },
  methods: {
    showModalFunc() {
      this.isModalVisible = true;
      this.showModal = true;
    },
    closeModal() {
      this.isModalVisible = false;
      this.showModal = false;
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "montserrat", sans-serif;
}

#app {
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
}

.button {
  appearance: none;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;

  display: inline-block;
  padding: 15px 25px;
  background-image: linear-gradient(to right, #cc2e5d, #ff5858);
  border-radius: 8px;

  color: #fff;
  font-size: 18px;
  font-weight: 700;

  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
  transition: 0.4s ease-out;
}

.button:hover {
  box-shadow: 6px 6px rgba(0, 0, 0, 0.6);
}

</style>
  