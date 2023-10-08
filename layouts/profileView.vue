<template>
  <div>
    <div class="component-header">
      <ProfileUserNavHeader
        @redirectToprofilepage="$router.go(-1)"
        modalName="Profile"
      />
    </div>
    <transition name="newPage">
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
</style>