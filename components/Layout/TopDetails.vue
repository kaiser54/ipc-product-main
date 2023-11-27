<template>
  <section class="top-details">
    <div class="username-welcome">
      <div class="welcome">
        <p>Hello,</p>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="21"
          viewBox="0 0 20 21" fill="none">
          <rect y="0.5" width="20" height="20" fill="url(#pattern0)" />
          <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlink:href="#image0_1757_8288" transform="scale(0.0138889)" />
            </pattern>
            <image id="image0_1757_8288" width="72" height="72"
              xlink:href="data:image/png;base64,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" />
          </defs>
        </svg>
      </div>
      <p class="username">{{ truncateId(user.businessName, 20) }}</p>
    </div>
    <div class="search-input">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <g clip-path="url(#clip0_2006_2516)">
          <path
            d="M14.1667 14.1666L18.3334 18.3333L14.1667 14.1666ZM16.2501 8.95829C16.2501 12.9854 12.9855 16.25 8.95842 16.25C4.93134 16.25 1.66675 12.9854 1.66675 8.95829C1.66675 4.93122 4.93134 1.66663 8.95842 1.66663C12.9855 1.66663 16.2501 4.93122 16.2501 8.95829Z"
            stroke="#7E8494" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_2006_2516">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <input class="input-search" ref="search" type="search" name="search" id="search" placeholder="Search for products"
        v-model="searchQuery" />
    </div>
    <div class="notify-cart">
      <div class="notification" @click="triggerNotification">
        <div class="circle notify">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19.3399 14.49L18.3399 12.83C18.1299 12.46 17.9399 11.76 17.9399 11.35V8.82C17.9399 6.47 16.5599 4.44 14.5699 3.49C14.0499 2.57 13.0899 2 11.9899 2C10.8999 2 9.91994 2.59 9.39994 3.52C7.44994 4.49 6.09994 6.5 6.09994 8.82V11.35C6.09994 11.76 5.90994 12.46 5.69994 12.82L4.68994 14.49C4.28994 15.16 4.19994 15.9 4.44994 16.58C4.68994 17.25 5.25994 17.77 5.99994 18.02C7.93994 18.68 9.97994 19 12.0199 19C14.0599 19 16.0999 18.68 18.0399 18.03C18.7399 17.8 19.2799 17.27 19.5399 16.58C19.7999 15.89 19.7299 15.13 19.3399 14.49Z"
              fill="#344054" />
            <path
              d="M14.8297 20.01C14.4097 21.17 13.2997 22 11.9997 22C11.2097 22 10.4297 21.68 9.87969 21.11C9.55969 20.81 9.31969 20.41 9.17969 20C9.30969 20.02 9.43969 20.03 9.57969 20.05C9.80969 20.08 10.0497 20.11 10.2897 20.13C10.8597 20.18 11.4397 20.21 12.0197 20.21C12.5897 20.21 13.1597 20.18 13.7197 20.13C13.9297 20.11 14.1397 20.1 14.3397 20.07C14.4997 20.05 14.6597 20.03 14.8297 20.01Z"
              fill="#344054" />
          </svg>
        </div>
        <!-- <div class="badge">
        <p>10</p>
      </div> -->
      </div>

      <div class="cart" @click="triggerCart">
        <div class="circle carty">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="48" height="48" rx="24" fill="#19B820" />
            <path
              d="M15.5957 14C15.0434 14 14.5957 14.4477 14.5957 15C14.5957 15.5523 15.0434 16 15.5957 16C16.3241 16 16.9605 16.5293 17.0915 17.274L17.7775 21.1733C17.7834 21.2069 17.791 21.2399 17.8 21.2721L18.0025 22.4035C18.5681 25.5646 18.8509 27.1451 19.829 28.2301C20.1919 28.6327 20.6176 28.9784 21.0907 29.2549C22.3656 30 24.0286 30 27.3545 30H27.7604C29.2631 30 30.0144 30 30.6328 29.7364C31.1356 29.522 31.5727 29.1864 31.9021 28.7619C32.3071 28.2398 32.4756 27.5336 32.8126 26.1212C33.3215 23.9881 33.576 22.9215 33.2797 22.0874C33.0406 21.4142 32.5677 20.8412 31.9411 20.4655C31.1647 20 30.0299 20 27.7604 20H19.6018L19.0613 16.9275C18.7646 15.2414 17.31 14 15.5957 14Z"
              fill="white" />
            <path
              d="M22.4058 32.75C22.4058 33.4404 21.8461 34 21.1558 34C20.4654 34 19.9058 33.4404 19.9058 32.75C19.9058 32.0596 20.4654 31.5 21.1558 31.5C21.8461 31.5 22.4058 32.0596 22.4058 32.75Z"
              fill="white" />
            <path
              d="M30.1558 34C30.8461 34 31.4058 33.4404 31.4058 32.75C31.4058 32.0596 30.8461 31.5 30.1558 31.5C29.4654 31.5 28.9058 32.0596 28.9058 32.75C28.9058 33.4404 29.4654 34 30.1558 34Z"
              fill="white" />
          </svg>

        </div>
        <div class="badge">
          <p>{{ TotalCart }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { EventBus } from "@/utils/event-bus"
import { mapActions, mapGetters } from "vuex";
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      searchQuery: "",
      cart: null,
    };
  },
  mounted() {
    EventBus.$on('clearInput', () => {
      this.searchQuery = ""
    })
  },
  computed: {
    ...mapGetters("cart", ["TotalCart"]),
  },
  methods: {
    ...mapActions("product", ["updateQuery"]),
    triggerCart() {
      this.$emit("openCart");
    },
    triggerNotification() {
      this.$emit("openNotification");
    },
    truncateId(id, maxLength) {
      if (!id) {
        return ''; // Return an empty string if id is undefined or null
      }

      if (id.length > maxLength) {
        return id.substring(0, maxLength) + '...';
      }

      return id;
    },
  },
  watch: {
    searchQuery(newSearchQuery) {
      this.updateQuery(newSearchQuery); // Dispatch the action with the updated query
    },
  },
};
</script>

<style scoped>
.top-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: calc(100vw - 278px - 83px);
  width: 100%;
  gap: 16px;
}

.username-welcome {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
  margin-left: 20px;
  max-width: 198px;
}

.username-welcome .welcome {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
}

.username-welcome .welcome p {
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  /* identical to box height, or 131% */

  /* Grey/Grey2 */

  color: var(--grey-grey2);
}

.username-welcome .username {
  font-weight: 500;
  font-size: 20px;
  line-height: 21px;
  /* identical to box height, or 105% */

  /* Grey/Grey1 */

  color: var(--grey-grey1);
  white-space: nowrap;
}

input {
  width: 100%;
}

.search-input {
  display: flex;
  position: relative;
  width: 60%;
  /* max-width: 522px; */
}

.search-input svg {
  top: 14px;
  left: 16px;
  position: absolute;
}

.input-search {
  width: 100%;
  padding-left: 52px;
  /* max-width: 522px; */
  max-width: 100%;
  border-radius: 100px;
}

.notify-cart {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
}

.notification,
.cart {
  position: relative;
}

.circle {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* padding: 12px; */
  gap: 10px;
/* 
  width: 48px;
  height: 48px; */

  border: 1px solid var(--grey-grey4);
  border-radius: 100px;
  transition: all 0.2s ease-in;
  box-shadow: 0px 1px 2px 0px rgba(47, 43, 67, 0.10);


}
.notify{
  width: 48px;
  height: 48px;
}
.carty svg{
  width: 48px;
  height: 48px;
}
.circle:hover {
  background: var(--grey-grey6);
}</style>
