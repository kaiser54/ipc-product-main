<template>
  <div class="user__details__head__group">
    <div class="user__details__head__address udhs" @click="$router.push('/dashboard/profile/profile-settings/address')">
      <div class="udh__svg__group">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M11.9999 13.43C13.723 13.43 15.1199 12.0331 15.1199 10.31C15.1199 8.58687 13.723 7.19 11.9999 7.19C10.2768 7.19 8.87988 8.58687 8.87988 10.31C8.87988 12.0331 10.2768 13.43 11.9999 13.43Z"
            stroke="#344054" stroke-width="1.5" />
          <path
            d="M3.61995 8.49C5.58995 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.38995 20.54C5.62995 17.88 2.46995 13.57 3.61995 8.49Z"
            stroke="#344054" stroke-width="1.5" />
        </svg>
        <p>Address details</p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M6.66675 3.33203L13.3334 9.9987L6.66675 16.6654" stroke="#BDC0CE" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round" />
      </svg>
    </div>
    <div class="user__details__head__address udhs" @click="$emit('openMail')">
      <div class="udh__svg__group">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z"
            stroke="#344054" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M7 8H17" stroke="#344054" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M7 13H13" stroke="#344054" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <p>Verify email address</p>
      </div>
      <div class="verified__svg">
        <div class="logic__tag">
          <div class="pending tag-micro" v-if="!isVerified">Pending</div>
          <div class="verified tag-micro" v-else-if="isVerified">Verified</div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M6.66675 3.33203L13.3334 9.9987L6.66675 16.6654" stroke="#BDC0CE" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </div>
    <div class="user__details__head__address udhs" @click="$emit('changePassword')">
      <div class="udh__svg__group">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M6 10V8C6 4.69 7 2 12 2C17 2 18 4.69 18 8V10" stroke="#344054" stroke-width="1.5"
            stroke-linecap="round" stroke-linejoin="round" />
          <path
            d="M12 18.5C13.3807 18.5 14.5 17.3807 14.5 16C14.5 14.6193 13.3807 13.5 12 13.5C10.6193 13.5 9.5 14.6193 9.5 16C9.5 17.3807 10.6193 18.5 12 18.5Z"
            stroke="#344054" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M17 22H7C3 22 2 21 2 17V15C2 11 3 10 7 10H17C21 10 22 11 22 15V17C22 21 21 22 17 22Z" stroke="#344054"
            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <p>Change password</p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M6.66675 3.33203L13.3334 9.9987L6.66675 16.6654" stroke="#BDC0CE" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round" />
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
  mounted() {
    const userData = localStorage.getItem("user");
    if (userData) {
      this.user = JSON.parse(userData);
      localStorage.setItem("userId", this.user._id);
      localStorage.setItem("userEmail", this.user.email);

    } else {
    }
    this.getUserDetails()
  },
  methods: {
    async getUserDetails() {
      try {
        const response = await this.$axios.get(`/business-customers/${this.user._id}`)
        this.userProfile = response.data.data.customer
        this.userProfileStatus = response.data.data.customer.verified
        this.isVerified = this.userProfileStatus
      } catch (error) {
        console.error("Error fetching data", error);
        return { responseData: null };
      }
    },
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
}</style>
  