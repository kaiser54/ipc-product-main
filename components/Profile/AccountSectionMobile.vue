<template>
  <div class="user__details__head__group">
    <div class="user__details__head__address udhs" @click="$emit('openAddress')">
      <div class="udh__svg__group">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M6.03239 15.2873L12 22L17.9676 15.2873C22.5446 10.1388 18.8893 2 12 2C5.11068 2 1.45538 10.1388 6.03239 15.2873Z"
            stroke="#565C69"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
            stroke="#565C69"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p>Address details</p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M6.66675 3.33203L13.3334 9.9987L6.66675 16.6654"
          stroke="#BDC0CE"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div class="user__details__head__address udhs" @click="$emit('openMail')">
      <div class="udh__svg__group">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44772 20.5523 5 20 5Z"
            stroke="#565C69"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20 5.5L12 13L4 5.5"
            stroke="#565C69"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p>Verify email address</p>
      </div>
      <div class="verified__svg">
        <div class="logic__tag">
          <div class="pending tag" v-if="!isVerified">Pending</div>
          <div class="verified tag" v-else>Verified</div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M6.66675 3.33203L13.3334 9.9987L6.66675 16.6654"
            stroke="#BDC0CE"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
    <div
      class="user__details__head__address udhs"
      @click="$emit('changePassword')"
    >
      <div class="udh__svg__group">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z"
            stroke="#565C69"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7 11V7C7 4.23857 9.23858 2 12 2C14.7614 2 17 4.23857 17 7V11"
            stroke="#565C69"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p>Change password</p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M6.66675 3.33203L13.3334 9.9987L6.66675 16.6654"
          stroke="#BDC0CE"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <!-- <nuxt-link
      to="/dashboard/saved-items"
      class="user__details__head__address udhs"
      @click="$emit('changePassword')"
    >
      <div class="udh__svg__group">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M11.4454 20.7608L3.57617 12.5663C1.35964 10.2582 1.49922 6.4736 3.87922 4.34929C6.24035 2.24181 9.82044 2.65105 11.6863 5.24171L12 5.67724L12.3137 5.24171C14.1796 2.65105 17.7596 2.24181 20.1208 4.34929C22.5008 6.4736 22.6404 10.2582 20.4238 12.5663L12.5546 20.7608C12.2483 21.0797 11.7517 21.0797 11.4454 20.7608Z"
            stroke="#565C69"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p>Saved items</p>
      </div>
      <div class="verified__svg">
        <div class="badge">
          <p>9</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M6.66675 3.33203L13.3334 9.9987L6.66675 16.6654"
            stroke="#BDC0CE"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </nuxt-link> -->
  </div>
</template>
  
  <script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      isVerified: false,
    };
  },
  computed: {
  },
  mounted(){
    const userData = localStorage.getItem("user");
    if (userData) {
      this.user = JSON.parse(userData);
      console.log("User data in localStorage:", JSON.parse(userData));
      localStorage.setItem("userVerified", this.user.verified);
    } else {
      console.log("User data not found in localStorage.");
    }
    this.isVerified = localStorage.getItem("userVerified");
  }
};
</script>
  
  <style scoped>
.user__details__head__group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  width: 100%;

  /* Grey/Grey6 */

  border: 1px solid #f4f5f8;
  border-radius: 16px;
}

.udhs {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 12px;
  gap: 6px;

  width: 100%;
  position: relative;
}

/* .user__details__head__address {
  } */

.udh__svg__group {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;
}

.udh__svg__group p {
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 150% */

  /* Grey/Grey1 */

  color: #303237;
}
.verified__svg {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
}
.badge {
  position: inherit;
  margin-left: auto;
}
</style>
  