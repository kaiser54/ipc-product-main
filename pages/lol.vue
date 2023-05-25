<template>
  <div class="phone-form">
    <div class="phone-number" v-for="(number, index) in phoneNumbers" :key="index">
      <input type="tel" :value="number" @input="updatePhoneNumber(index, $event.target.value)" readonly />
      <button class="remove-number" @click="removePhoneNumber(index)">
        Remove
      </button>
    </div>
    <button class="add-number" @click="addPhoneNumber">Add Number</button>
    <div class="new-phone-number" v-if="showNewPhoneNumber">
      <input type="tel" v-model="newPhoneNumber" />
      <button class="save-number" @click="savePhoneNumber">Save</button>
    </div>

    <div>
      <label for="states">Select State</label>
      <select id="states" v-model="selectedState" @change="updateLgas" :disabled="selectedState">
        <option disabled value="">Please select a state</option>
        <option v-for="(state, stateName) in states" :key="stateName" :value="state">
          {{ stateName }}
        </option>
      </select>

      <label for="lgas">Select LGA</label>
      <select id="lgas" v-model="selectedLga" :disabled="!selectedState || selectedLga">
        <option disabled value="">Please select a state first</option>
        <option v-for="lga in selectedState" :key="lga" :value="lga">
          {{ lga }}
        </option>
      </select>
    </div>

    <div>
      <DatePicker v-model="selectedDate" />
    </div>

    <div class="input-container">
      <input class="input" type="date" />
    </div>

    <div class="calendar">
      <div class="header">
        <button @click="previousMonth">Previous</button>
        <h2>{{ currentMonth }}</h2>
        <button @click="nextMonth">Next</button>
      </div>
      <div class="days">
        <button v-for="day in daysInMonth" :key="day" @click="selectDate(day)">
          {{ day }}
        </button>
      </div>
    </div>











    <VerticalProgressBar :steps="steps" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      phoneNumbers: ["+1 123-456-7890", "+44 1234 567890", "0800 123 4567"], // array of phone numbers fetched from the API
      newPhoneNumber: "", // phone number entered in the new phone number field
      showNewPhoneNumber: false, // whether to show the new phone number field
      states: {},
      lgas: [], // add empty lgas array here
      selectedState: null,
      selectedLga: null,
      selectedDate: null,
      currentDate: new Date(),


      steps: [
        { value: true }, // Step 1
        { value: true }, // Step 2
        { value: true }, // Step 3
        { value: true }, // Step 4
        { value: false } // Step 5
      ],
    };
  },
  computed: {
    currentMonth() {
      return this.currentDate.toLocaleString("default", { month: "long", year: "numeric" });
    },
    daysInMonth() {
      const year = this.currentDate.getFullYear();
      const month = this.currentDate.getMonth();
      const days = new Date(year, month + 1, 0).getDate();
      return Array.from({ length: days }, (_, index) => index + 1);
    },
  },
  mounted() {
    fetch("/Statelist.json")
      .then((response) => response.json())
      .then((data) => (this.states = data))
      .catch((error) => console.error(error));
  },
  methods: {
    updatePhoneNumber(index, value) {
      this.phoneNumbers[index] = value;
    },
    removePhoneNumber(index) {
      this.phoneNumbers.splice(index, 1);
    },
    addPhoneNumber() {
      this.showNewPhoneNumber = true;
    },
    savePhoneNumber() {
      this.phoneNumbers.push(this.newPhoneNumber);
      this.newPhoneNumber = "";
      this.showNewPhoneNumber = false;
    },
    updateLgas() {
      if (this.selectedState) {
        this.lgas = this.states[this.selectedState];
      } else {
        this.lgas = [];
      }
      this.selectedLga = null; // reset selected LGA
    },
    previousMonth() {
      this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 1);
    },
    nextMonth() {
      this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1);
    },
    selectDate(day) {
      console.log("Selected date:", day);
    },
  },
};
</script>

<style>
.phone-form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.phone-number {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.phone-number input {
  margin-right: 1rem;
}

.add-number {
  margin-top: 1rem;
}

.new-phone-number {
  margin-top: 1rem;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
}

.new-phone-number input {
  margin-right: 1rem;
}

.new-phone-number.show {
  max-height: 100px;
  opacity: 1;
}

.new-phone-number.hide {
  max-height: 0;
  opacity: 0;
}

.input-container {
  position: relative;
  width: 152px;
}

.input-container input[type="date"] {
  padding-right: 25px;
  border-radius: 100px;
}

.input-container svg {
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
}
</style>
