<template>
  <div class="email-pass">
    <div class="email-desktop">
      <p>Email address</p>
      <div class="email-address-detail" @click="$emit('openMail')" v-if="verifiedEmail">
        <div class="emailaddress" >
          <div class="icon-circle">
            <div class="badge"><p>!</p></div>
            <div class="circle">
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
            </div>
          </div>
          <div class="email-verification">
            <p class="email">{{userEmail}}</p>
            <p class="verification">Pending verification</p>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M6.66663 3.33203L13.3333 9.9987L6.66663 16.6654"
            stroke="#565C69"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div class="verified-Email" v-else>
        <div class="emailaddress" >
          <div class="icon-circle">
            <img src="~/assets/images/verified-email.png" alt="verified-email">
          </div>
          <div class="email-verification">
            <p class="email">{{userEmail}}</p>
            <p class="verification">Email Verified</p>
          </div>
        </div>
    </div>
      </div>
    <div class="email-desktop">
      <div class="email-address-detail" @click="$emit('openPassword')">
        <div class="emailaddress">
          <div class="icon-circle">
            <div class="circle">
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
            </div>
          </div>
          <div class="email-verification">
            <p class="email password">Password</p>
            <p class="verification update">Update your existing password</p>
          </div>
        </div>
        <button class="chng-pass">Change password</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      verifiedEmail : true,
      userEmail:null

    }
  },
  created(){
    this.userEmail = localStorage.getItem('userEmail')
    console.log(this.userEmail)
  },
  async mounted() {
    if(localStorage.getItem('verified')){
      this.verifiedEmail = false
    }else{
      this.verifiedEmail = true
    }
  },
};
</script>

<style scoped>
.email-pass {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;
  width: 100%;
}
.email-desktop {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 100%;
}
.email-address-detail, .verified-Email {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  gap: 16px;

  width: 100%;
  /* height: 80px; */

  /* Grey/Grey5 */

  border: 1px solid var(--grey-grey5);
  border-radius: 16px;
}
.emailaddress {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;
}
.icon-circle {
  position: relative;
}
.email-verification {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;
}
p.email {
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 150% */

  /* Grey/Grey1 */

  color: var(--grey-grey1);
}
.badge {
  top: -6px;
  left: 11px;
}
p.verification {
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  /* identical to box height, or 200% */

  /* Grey/Grey2 */

  color: var(--grey-grey2);
}
.chng-pass {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  gap: 8px;

  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 150% */

  /* Primary/P300 */

  color: var(--primary-p300);
}
</style>
{{ verifiedEmail ? 'Email Verified' : 'Pending verification' }}