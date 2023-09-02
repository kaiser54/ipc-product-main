// store/modules/cart.js
import { fetchData } from "@/plugins/api";

export default {
  state: () => ({
    cart: [],
    totalPrice: [], 
    error: null,
    loading: false, 
  }),

  mutations: {
    SET_CART(state, cart) {
      state.cart = cart;
    },
    SET_TOTAL_PRICE(state, totalPrice) {
      state.totalPrice = totalPrice;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
    SET_LOADING(state, loading) {
      state.loading = loading;
    },
  },

  actions: {
    async fetchCartItemsByUserID({ commit }) {
      try {
        commit("SET_LOADING", true);

        // Retrieve the user ID from local storage
        const user = process.client ? JSON.parse(localStorage.getItem("user")) : null;
        const customerId = user ? user._id : null;
        console.log(customerId);

        if (!customerId) {
          throw new Error("User ID not found in local storage.");
        }

        const requestOptions = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow",
        };

        const response = await fetchData(`/cart/${customerId}`, requestOptions); // Adjusted the URL

        if (response.status !== 200) {
          throw new Error("Failed to fetch cart items.");
        }

        const data = await response.json();

        // Handle the response data as needed
        commit("SET_CART", data.cartItems);
        commit("SET_TOTAL_PRICE", data.totalPrice);
        commit("SET_LOADING", false);
        commit("SET_ERROR", null);
      } catch (error) {
        commit("SET_ERROR", error.message);
        commit("SET_LOADING", false);
      }
    },
  },

  getters: {},
};
