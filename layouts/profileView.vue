<template>
  <div>
    <div class="component-header">
      <ProfileUserNavHeader
        @redirectToprofilepage="$router.go(-1)"
        modalName="Profile"
      />
    </div>
    <transition name="newPage" mode="out-in">
      <nuxt />
    </transition>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  head() {
    return {
      script: [
        {
          src: "https://embed.tawk.to/653a1516f2439e1631e88e4d/1hdle4ojj",
          async: true,
          charset: "UTF-8",
          crossorigin: "anonymous",
        },
      ],
    };
  },
  async mounted() {
    await this.fetchCartItemsByUserID();
  },
  methods: {
    ...mapActions("cart", ["fetchCartItemsByUserID"]),
  },
};
</script>

<style scoped>
.component-header {
  z-index: 2;
}
.newPage-enter-active,
.newPage-leave-active {
    transition: opacity 1s;
}

.newPage-enter {
    opacity: 0;
    transform: translateX(-100%);
}

.newPage-leave-to {
    opacity: 1;
    transform: translateX(100%);
}
</style>