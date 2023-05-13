<template>
  <div class="breadcrumbs">
    <span class="breadcrumb" v-for="(crumb, index) in breadcrumbs" :key="index">
      <nuxt-link :to="crumb.route">{{ crumb.name }}</nuxt-link>
      <span v-if="index !== breadcrumbs.length - 1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M5.33398 2.66797L10.6673 8.0013L5.33398 13.3346"
            stroke="#7E8494"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
    </span>
  </div>
</template>

<script>
export default {
  name: "Breadcrumbs",
  props: {
    route: {
      type: Object,
      required: true,
    },
  },
  computed: {
    breadcrumbs() {
      const paths = this.route.path.split("/").slice(1);
      return paths
        .map((path, index) => ({
          name: decodeURI(path),
          route: "/" + paths.slice(0, index + 1).join("/"),
        }))
        .filter((crumb, index, crumbs) => {
          // Remove "Home" and "Dashboard" from the breadcrumbs
          if (crumbs.length > 2 && index === 0) {
            return false; // remove "Home"
          } else if (crumbs.length > 3 && index === 1) {
            return false; // remove "Dashboard"
          }
          return true;
        });
    },
  },
};
</script>

<style scoped>
a {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  /* Grey/Grey2 */

  color: var(--grey-grey2);
}
.breadcrumbs,
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 4px;
}
a:last-child {
    /* Primary/P300 */

color: var(--primary-p300);
}

.active {
  color: #555;
  cursor: default;
}
</style>
