<template>
    <div class="mobile-nav-bar">
      <nuxt-link to="/dashboard/market">
        <div class="mobile-nav">
          <div class="mobile-nav-content">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 10.2501V20.0001C3 20.5524 3.44771 21.0001 4 21.0001H8.42857C8.98086 21.0001 9.42857 20.5524 9.42857 20.0001V13.2858H14.5714V20.0001C14.5714 20.5524 15.0191 21.0001 15.5714 21.0001H20C20.5523 21.0001 21 20.5524 21 20.0001V10.2501C21 9.93536 20.8518 9.63897 20.6 9.45012L12 3.00012L3.4 9.45012C3.14819 9.63897 3 9.93536 3 10.2501Z"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Market</p>
          </div>
        </div>
      </nuxt-link>
      <nuxt-link to="/dashboard/categories">
        <div class="mobile-nav">
          <div class="mobile-nav-content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5 7.00012H19"
                stroke="#565C69"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5 12.0001H19"
                stroke="#565C69"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5 17.0001H19"
                stroke="#565C69"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Categories</p>
          </div>
        </div>
      </nuxt-link>
      <nuxt-link to="/dashboard/track orders">
        <div class="mobile-nav">
          <div class="mobile-nav-content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3 7.00012H21V19.0001C21 20.1047 20.1046 21.0001 19 21.0001H5C3.89543 21.0001 3 20.1047 3 19.0001V7.00012Z"
                stroke="#565C69"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3 7.00012L4.96327 3.50986C5.14039 3.19498 5.47357 3.00012 5.83485 3.00012H18.1652C18.5264 3.00012 18.8596 3.19498 19.0367 3.50986L21 7.00012"
                stroke="#565C69"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15 11.0001C15 12.657 13.6569 14.0001 12 14.0001C10.3431 14.0001 9 12.657 9 11.0001"
                stroke="#565C69"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Orders</p>
          </div>
        </div>
      </nuxt-link>
      <nuxt-link to="/dashboard/history">
        <div class="mobile-nav">
          <div class="mobile-nav-content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M8 6.00012H16H8ZM8 10.0001H16H8ZM8 14.0001H11H8ZM6 22.0001H18C19.1046 22.0001 20 21.1047 20 20.0001V4.00012C20 2.89555 19.1046 2.00012 18 2.00012H6C4.89543 2.00012 4 2.89555 4 4.00012V20.0001C4 21.1047 4.89543 22.0001 6 22.0001Z"
                stroke="#565C69"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>History</p>
          </div>
        </div>
      </nuxt-link>
      <!-- <nuxt-link :to="{ name: 'profile' }"> -->
      <nuxt-link to="/dashboard/profile">
        <div class="mobile-nav">
          <div class="mobile-nav-content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                stroke="#565C69"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4 21V17C4 15.8954 4.89543 15 6 15H18C19.1046 15 20 15.8954 20 17V21"
                stroke="#565C69"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Profile</p>
          </div>
        </div>
      </nuxt-link>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

.mobile-nav-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 4px 5.5px;
  gap: 16px;

  position: fixed;
  width: 100%;
  height: 76px;
  left: 0px;
  bottom: 0px;
  z-index: 1;

  /* White */

  background: #ffffff;
  /* Grey/Grey5 */

  border-top: 1px solid var(--grey-grey5);
  /* Nav bar */

  box-shadow: 0px 0px 20px rgba(48, 50, 55, 0.2);
}
.mobile-nav-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 6px;

  width: 60px;
  height: 68px;
}
.mobile-nav-content svg {
  stroke: var(--grey-grey2);
}

.mobile-nav-content p {
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height, or 150% */

  text-align: center;

  /* Primary/P300 */

  color: var(--grey-grey3);
}





.nuxt-link-exact-active .mobile-nav p {
  color: var(--primary-p300);
}
.nuxt-link-exact-active .mobile-nav svg {
  stroke: var(--primary-p300);
}
.nuxt-link-exact-active .mobile-nav .mobile-nav-content svg path {
  stroke: var(--primary-p300) !important;
}
</style>