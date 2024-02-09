<template>
  <div class="view-page goTop">
    <div class="title-header">
      <h2 class="h2-medium header-text">Categories</h2>
    </div>
    <!-- <LoaderGeneral v-if="loading" /> -->
    <LoaderComponent v-if="loading" />
    <div class="page-content">
      <div class="categories-content">
        <div style="width: 100%; max-width: 387px;" v-for="(category, index) in categories" :key="index">
          <nuxt-link class="category" :to="`/dashboard/categories/${category.name}`">
            <img :src="`/category${index + 1}.png`" alt="" />
            <!-- <img :src="`/${category.image}`" alt="" /> -->
            <!-- use this method if your pulling the images from the static folder -->
            <!-- <img :src="require(`~/assets/images/${category.image}`)" alt="" /> -->
            <!-- use this method if your pulling the images from the /assets/images or any folder thats not the static folder -->
            <div class="category-header">

              <p class="title">{{ category.name }}</p>
              <p class="snippet truncate">{{ category.desc }}</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M13.3333 10.666L18.6667 15.9993L13.3333 21.3327" stroke="#565C69" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchData } from "@/plugins/api";

export default {
  layout: "dashboardview",
  data() {
    return {
      pageTitle: "Gosource | Categories",
      categories: [],
      loading: true,
    };
  },
  head() {
    return {
      title: this.pageTitle,
    };
  },
  async mounted() {
    try {
      this.loading = true;
      const response = await fetchData("/categories/");
      this.categories = response.data.categories;
      (response)
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style scoped>
a {
  width: 100% !important;
}

.page-content {
  width: 100%;
}

.categories-content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  padding: 0px;
  gap: 24px;

  max-width: 798px;
  margin-inline: auto;
  margin-bottom: 100px;
}

.category {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  gap: 16px;

  width: 100%;
  height: 128px;

  /* White */

  background: var(--white);
  /* Grey/Grey5 */

  border: 1px solid var(--grey-grey5);
  /* List */

  box-shadow: 0px 1px 8px rgba(0, 6, 125, 0.1);
  border-radius: 16px;
  transition: all 0.2s ease-in-out;
}

.category:hover,
.category:focus {
  border: 1px solid var(--new-primary-p300);
}

.category img {
  max-width: 68px;
  width: 100%;
}

.category-header {
  max-width: 223px;
}

.category-header .title {
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height, or 150% */

  letter-spacing: -0.5px;

  /* Grey/Grey1 */

  color: var(--grey-grey1);
}

.category-header .snippet {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  /* Grey/Grey3 */

  color: var(--grey-grey3);
}

.snippet.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 198px;
}

@media (min-width: 950px) {
  .webskeleton {
    display: block;
  }

  .SkeletonLoader {
    display: none;
  }
}

@media (max-width: 950px) {
  .webskeleton {
    display: none;
  }

  .SkeletonLoader {
    display: block;
  }
}

@media (max-width: 950px) {
  .categories-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;

    max-width: 341px;
    /* height: 816px; */
  }

  .category {
    max-width: 341px;
    height: 88px;
  }

  .category img {
    max-width: 48px;
    width: 100%;
  }

  .category-header {
    max-width: 197px;
  }

  .category-header .title {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  .category-header .p {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
  }

  .snippet.truncate {
    max-width: 197px;
  }
}
</style>
