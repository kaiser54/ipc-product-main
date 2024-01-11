// dateUtils.js
export function formatDate(inputDate) {
  const date = new Date(inputDate);
  const options = { year: "numeric", month: "short", day: "2-digit" };
  return date.toLocaleDateString("en-US", options);
}

// dateUtils.js
// dateUtils.js
export function formatTimeWithAMPM(inputDate) {
  const date = new Date(inputDate);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds();
  const ampm = (hours + 12) >= 12 ? "PM" : "AM";

  // Convert hours to 12-hour format
  const formattedHours = hours % 12 || 12;

  return `${formattedHours}:${minutes}:${seconds} ${ampm}`;
}

// numberUtils.js
export function formatNumberWithLeadingZeros(inputNumber) {
  if (inputNumber >= 0 && inputNumber < 1000000) {
    const formattedNumber = inputNumber.toString().padStart(6, "0");
    return `IPC-${formattedNumber}`;
  } else {
    return "Invalid input";
  }
}

// Define a utility function to add business days and account for weekends
export function calculateDeliveryDate(orderDate) {
  // Ensure orderDate is a valid date
  if (!(orderDate instanceof Date && !isNaN(orderDate))) {
    return "Invalid order date";
  }

  // Initialize a new Date object for calculation
  const deliveryDate = new Date(orderDate);

  // Function to check if a date is a weekend (Saturday or Sunday)
  function isWeekend(date) {
    return date.getDay() === 0 || date.getDay() === 6;
  }

  // Calculate the delivery date
  for (let i = 0; i < 2; i++) {
    deliveryDate.setDate(deliveryDate.getDate() + 1); // Add one day
    // Check if the current date is a weekend
    if (isWeekend(deliveryDate)) {
      // If it's a Saturday, add 2 days; if it's a Sunday, add 1 day
      deliveryDate.setDate(
        deliveryDate.getDate() + (deliveryDate.getDay() === 0 ? 1 : 2)
      );
    }
  }

  // If the final delivery date is a weekend, shift it to the following Monday
  if (isWeekend(deliveryDate)) {
    deliveryDate.setDate(deliveryDate.getDate() + (8 - deliveryDate.getDay()));
  }

  return deliveryDate;
}

export function getCurrentTimeAMPM() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert hours to 12-hour format
  const formattedHours = hours % 12 || 12;

  // Ensure minutes are displayed with leading zeros if needed
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${formattedHours}:${formattedMinutes} ${ampm}`;
}


import moment from 'moment';

export function formatDate(dateTimeString) {
  // return moment(dateTimeString).format('YYYY-MM-DD HH:mm:ss');
  return moment(dateTimeString).format('MMMM Do YYYY');
}
export function formatTime(dateTimeString) {
  // return moment(dateTimeString).format('YYYY-MM-DD HH:mm:ss');
  return moment(dateTimeString).format(' h:mm a');
}