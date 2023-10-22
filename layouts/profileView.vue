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