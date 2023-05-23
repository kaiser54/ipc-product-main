<template>
  <div class="accountDetails">
    <h3 class="h3-medium">Account details</h3>
    <div class="avatar">
      <img src="../assets/images/avatar1.png" alt="" />
    </div>
    <div class="userName">
      <div class="nameInput">
        <label for="BusinessName" class="label">Business name</label>
        <input
          class="value input"
          name="BusinessName"
          type="text"
          :value="BusinessName"
          style="margin-top: 0px; color: black"
          readonly
        />
      </div>
    </div>
    <div class="userName">
      <div class="nameInput" v-for="(field, index) in userName" :key="index">
        <label :for="field.label" class="label">{{ field.label }}</label>
        <input
          class="value input"
          :name="field.label"
          type="text"
          :value="field.value"
          style="margin-top: 0px; color: black"
          readonly
        />
      </div>
    </div>
    <div class="num-btn">
      <div class="phone-number">
        <div
          class="phone-num"
          v-for="(number, index) in phoneNumbers"
          :key="index"
        >
          <label :for="'phone-number-' + (index + 1)"
            >Phone number {{ index + 1 }}</label
          >
          <input
            class="input"
            :id="'phone-number-' + (index + 1)"
            type="tel"
            :value="number"
            readonly
          />
        </div>
      </div>
      <div
        class="new-phone-number animate__animated animate__slideInDown"
        v-if="localShowNewPhoneNumber"
      >
        <InputField
          class="inputed"
          id="number"
          v-model="newPhoneNumber"
          :value="numberValue"
          type="tel"
          placeholder="Add new number"
          :required="false"
          :invalid="invalidNumber"
          errorMessage="Enter a valid phone number"
        />
        <!-- <input
          class="inputed"
          type="tel"
          v-model="newPhoneNumber"
          placeholder="Add new number"
        /> -->
        <!-- <button class="btn primary-btn" @click="addNumBtn">Add</button> -->
        <PrimaryBtn @click="addNumBtn" buttonText="Add" />
        <!-- second button -->
        <svg
          @click="closeNumber"
          style="margin-top: 22px"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M4.16602 15.8307L15.8327 4.16406M4.16602 4.16406L15.8327 15.8307L4.16602 4.16406Z"
            stroke="#565C69"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <!-- third button -->
      </div>
      <add-num-btn @click="openAddNumber" />
      <!-- first button -->
    </div>
  </div>
</template>

<script>
import "animate.css";
export default {
  props: {
    userName: {
      type: Array,
      required: true,
    },
    phoneNumbers: {
      type: Array,
      required: true,
    },
    invalidNumber: {
      type: Boolean,
      required: true,
    },
    showNewPhoneNumber: {
      type: Boolean,
      required: true,
    },
    BusinessName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      localShowNewPhoneNumber: this.showNewPhoneNumber,
      newPhoneNumber: "",
      localInvalidNumber: this.invalidNumber,
    };
  },
  computed: {
    numberValue: {
      get() {
        return this.newPhoneNumber;
      },
      set(newValue) {
        this.newPhoneNumber = newValue;
      },
    },
  },
  methods: {
    openAddNumber() {
      this.localShowNewPhoneNumber = true; // Update the local data property
    },
    closeNumber() {
      this.localShowNewPhoneNumber = false;
      this.localInvalidNumber = false
    },
    addNumBtn() {
      this.$emit("add-number", this.newPhoneNumber);
    },
  },
};
</script>

<style scoped>
.accountDetails {
  display: flex;
  flex-direction: column;
  padding: 0px;
  gap: 32px;
}
.accountDetails h3 {
  color: var(--grey-grey1);
}
.avatar {
  width: 104px;
  height: 104px;

  background: var(--white);
  border-radius: 50%;
  overflow: hidden;
}
.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.userName {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;

  /* max-width: 575px; */
  width: 100%;
}

.nameInput {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 100%;
}
.num-btn {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
}
.phone-number {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
}
.phone-num {
  width: 100%;
  display: flex;
  gap: 8px;
  flex-direction: column;
}
.new-phone-number {
  max-width: 429px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
}
.new-phone-number .inputed {
  max-width: 277px;
  width: 100%;
}
.new-phone-number button {
  max-width: 80px;
  margin-top: 8px;
}

@media (max-width: 950px) {
  .userName,
  .flex {
    width: auto;
  }

  input.input {
    cursor: not-allowed !important;
  }
  .accountDetails h3 {
    display: none;
  }
  .avatar {
    display: none;
  }
}
</style>
