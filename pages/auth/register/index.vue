<template>
  <div>
    <div class="content">
      <div class="container">
        <div class="content-box">
          <div class="text">
            <h2 class="h3-medium header-text">How would you like to join IPC?</h2>
          </div>
          <div class="content-select">
            <div
              class="list-select"
              :class="{ clicked: selectedItem === item.value }"
              v-for="(item, index) in listSelect"
              :key="index"
              @click="selectItem(item.value)"
            >
              <div class="list-select-header">
                <div class="title-flex">
                  <div class="header">
                    <h3 class="h3-medium title.text">{{ item.title }}</h3>
                  </div>
                  <div class="dynamicTag">
                    <DynamicTags
                      class="auto"
                      tagText="COMING SOON"
                      size="small"
                      type="positive"
                      v-if="index === indexOfCardWithComponent"
                    />
                  </div>
                </div>
                <label>
                  <input
                    type="radio"
                    :value="item.value"
                    v-model="selectedItem"
                    hidden
                  />
                  <svg
                    :class="{ selected: selectedItem === item.value }"
                    viewBox="0 0 25 25"
                    width="25"
                    height="25"
                  >
                    <circle cx="12" cy="12" r="11" />
                    <path
                      v-if="selectedItem === item.value"
                      d="M8.5,12l2.5,2.5L15.5,10"
                      fill="none"
                      stroke="#fff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </label>
              </div>
              <p class="snippet">{{ item.snippet }}</p>
            </div>
          </div>
          <PrimaryBtn
            :disabled="selectedItem !== 'business'"
            @click="goToRoute()"
            buttonText="Continue"
          />
          <div class="signup-link">
            <p>
              Have an existing account?<nuxt-link to="/auth/login">
                Log in</nuxt-link
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "registration layout",
  // Other component properties and methods
  data() {
    return {
      email: "",
      invalidEmail: false,
      pageTitle: "IPC | Register",
      selectedItem: "business",
      indexOfCardWithComponent: 1,
      listSelect: [
        {
          title: "As a Business",
          snippet:
            "Sign up and join IPC today as a business and enjoy great benefits.",
          value: "business",
          route: "/auth/register/sign-up/business",
        },
        {
          title: "As an Individual",
          snippet:
            "Purchase your food & kitchen items today at IPC with discounted prices.",
          value: "individual",
          route: "/auth/register/sign-up/individual",
        },
      ],
    };
  },
  head() {
    return {
      title: this.pageTitle,
    };
  },
  methods: {
    selectItem(value) {
      this.selectedItem = value;
    },
    goToRoute() {
      const selectedItem = this.listSelect.find(
        (item) => item.value === this.selectedItem
      );
      if (selectedItem && selectedItem.route) {
        this.$router.push(selectedItem.route);
      }
    },
  },
};
</script>

<style scoped>
.content-select {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
}

.content-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  gap: 32px;

  max-width: 888px;

  /* Grey/Grey6 */

  background: var(--grey-grey6);
  border-radius: 24px;
}
.text{
  /* border: 1px solid red; */
  width: 100%;
  text-align: center;
}
.header-text{
  color: var(--grey-grey-1, #303237);

/* H2/Heading 2 Small Bold */
font-family: Switzer;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: 36px; /* 150% */
letter-spacing: -1px;
}
.title-text {
  color: var(--grey-grey-1, #303237);
  /* H3/Heading 3 Medium */
  font-family: Switzer;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px; /* 150% */
  letter-spacing: -0.5px;
}
p.snippet {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: var(--grey-grey3);
}

.content-box button {
  max-width: 308px;
}

svg circle {
  stroke: var(--grey-grey4);
  stroke-width: 2px;
  fill: none;
}

/* Checked styling */
.selected circle {
  stroke: none;
  fill: var(--new-primary-p300);
}

/* .radio-svg {
  fill: var(--primary-p300);
} */
.list-select {
  cursor: default;
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 8px;

  max-width: 400px;

  /* White */

  background: #ffffff;
  /* Grey/Grey4 */

  border: 1px solid var(--grey-grey4);
  border-radius: 16px;
}

button:disabled {
  cursor: not-allowed;
}

.clicked,
.list-select:hover {
  border: 1px solid var(--new-primary-p300);
}

.list-select-header {
  display: flex;
  justify-content: space-between;
}

.signup-link p {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  /* Grey/Grey1 */

  color: var(--grey-grey1);
}

.signup-link p a {
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 150% */

  /* Primary/P300 */

  color: var(--new-primary-p300);
}
.title-flex {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.list-select-header label {
  height: fit-content !important;
  margin-bottom: 0px !important;
}
@media only screen and (max-width: 900px) and (min-width: 751px) {
  .title-flex {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0px;
  }
  .title-flex .auto {
    margin-top: 10px;
  }
}
@media (max-width: 750px) {
  .content-box {
    padding: 0;
    background-color: #ffffff;
  }

  .content-box button {
    max-width: none;
  }

  .content-select {
    flex-direction: column;
  }
  .h3-medium {
    color: var(--grey-grey-1, #303237);

    /* Body Large/Body Large Medium */
    font-family: Switzer;
    font-size: 16zpx;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
  }

  p.snippet {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: var(--grey-grey3);
  }
  .text{
  /* border: 1px solid red; */
  width: 100%;
  text-align: left;
}
.header-text{
  color: var(--grey-grey-1, #303237);

/* H2/Heading 2 Small Bold */
font-family: Switzer;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: 36px; /* 150% */
letter-spacing: -1px;
}
}

@media (max-width: 600px) {
  .title-flex {
    /* flex-direction: column; */
    align-items: flex-start;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
}

@media (max-width: 400px) {
  .list-select {
    padding: 16px;
  }
}
@media (max-width: 330px) {
  .title-flex {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0px;
  }
  .title-flex .auto {
    margin-top: 10px;
  }
}
</style>
