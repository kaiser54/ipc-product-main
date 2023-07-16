<template>
  <div class="post">
    <p>{{ postContent }}</p>
    <button @click="toggleLike" :class="{ liked: liked, animated: animate }">
      Like
    </button>
    <div v-if="liked" class="heart"></div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      liked: false,
      animate: false,
      postContent: "This is a post",
    };
  },
  methods: {
    toggleLike() {
      this.liked = !this.liked;
      this.animate = true;
      setTimeout(() => {
        this.animate = false;
      }, 1000);
    },
  },
};
</script>
  
  <style scoped>
.post {
  width: 100%;
  height: 100vh;
  position: absolute;
  transform: translate(50%, 50%);
}

.liked {
  color: red;
}

.animated {
  position: relative;
  animation: fade-in 1s;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.heart {
  position: absolute;
  top: -10px;
  left: 20px;
  width: 20px;
  height: 20px;
  background-image: url("/heart.png");
  background-size: contain;
  background-repeat: no-repeat;
  animation: pulse 1s;
  z-index: 999;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
  