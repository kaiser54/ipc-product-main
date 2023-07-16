<template>
  <div class="post">
    <p>{{ postContent }}</p>
    <button @click="toggleLike" :class="{ liked: liked }">Like</button>
    <div v-if="liked" class="heart-container">
      <div class="heart"></div>
    </div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      liked: false,
      postContent: "This is a post",
    };
  },
  methods: {
    toggleLike() {
      this.liked = !this.liked;
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

.heart-container {
  position: relative;
  display: inline-block;
  overflow: hidden;
  width: 300px;
  height: 300px;
  vertical-align: middle;
  margin-left: 10px;
}

.heart {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("/heart.png"); /* Replace with your heart icon */
  background-size: contain;
  background-repeat: no-repeat;
  animation: heart-anim 1s;
  /* transform: translateY(-50%); */
  opacity: 0;
}

@keyframes heart-anim {
  0% {
    transform: scale(1);
    opacity: 0;
  }
  20% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(0.8);
    opacity: 1;
  }
}
</style>
  