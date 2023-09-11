// store/cart.js

import { DEV_URL } from "@/plugins/api";
import axios from "axios";

export default {
  state: () => ({
    cart: [],
    favorites: [],
    totalPrice: [],
    error: null,
    error_msg: null,
    cartLoading: false,
  }),

  mutations: {
    ADD_TO_CART(state, cartItem) {
      state.cart.push(...cartItem);
    },
    ADD_TO_FAV(state, data) {
      state.favorites.push(...data);
    },
    SET_TOTAL_PRICE(state, totalPrice) {
      state.totalPrice = totalPrice;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
    SET_ERROR_MSG(state, value) {
      state.error_msg = value;
    },
    SET_LOADING(state, cartLoading) {
      state.cartLoading = cartLoading;
    },
    REMOVE_FROM_CART(state, productId) {
      state.cart = state.cart.filter((item) => item._id !== productId);
    },
    REMOVE_FROM_FAV(state, productId) {
      state.favourites = state.favourites.filter(
        (item) => item._id !== productId
      );
    },
    CLEAR_CART(state) {
      state.cart = [];
    },
    CLEAR_FAV(state) {
      state.favorites = []; // Clear the favorites array
    },
  },

  actions: {
    async fetchCartItemsByUserID({ commit }) {
      try {
        commit("SET_LOADING", true);

        const user = process.client
          ? JSON.parse(localStorage.getItem("user")) || null
          : null;

        const customerId = user?._id;

        const headers = {
          "Content-Type": "application/json",
        };

        const response = await axios.get(`${DEV_URL}/cart/${customerId}`);

        console.log(response);
        if (response.status !== 200) {
          throw new Error("Failed to add the product to the cart.");
        }

        const cart = response?.data?.data?.cartItems;

        console.log("cart :", cart);

        // Handle the response data as needed
        commit("ADD_TO_CART", cart);
        commit("SET_LOADING", false);
        commit("SET_ERROR", null);
      } catch (error) {
        commit("SET_ERROR", error.message);
        commit("SET_LOADING", false);
      }
    },

    async fetchFavouriteByUserID({ commit }) {
      try {
        commit("SET_LOADING", true);

        const user = process.client
          ? JSON.parse(localStorage.getItem("user")) || null
          : null;

        const customerId = user?._id;

        const headers = {
          "Content-Type": "application/json",
        };

        // Include the customerId in the query parameters, not in headers
        const params = { customerId };

        const response = await axios.get(`${DEV_URL}/favourites/`, {
          headers,
          params,
        });

        console.log(response);

        // Check for a successful response (status 200)
        if (response.status === 200) {
          const fav = response?.data?.data?.favourites;
          console.log("fav:", fav);

          // Commit an action to clear the favorites in your Vuex store
          commit("CLEAR_FAV");

          // Commit the fav data to your Vuex store
          commit("ADD_TO_FAV", fav);
          commit("SET_ERROR", null);
        } else {
          // Handle non-200 status codes as an error
          throw new Error("Failed to fetch favorites.");
        }

        // Set loading to false regardless of success or failure
        commit("SET_LOADING", false);
      } catch (error) {
        // Handle errors and set loading to false
        commit("SET_ERROR", error.message);
        commit("SET_LOADING", false);
      }
    },

    async addToCart({ commit }, product) {
      try {
        commit("SET_LOADING", true);

        const user = process.client
          ? JSON.parse(localStorage.getItem("user")) || null
          : null;

        const customerId = user?._id;

        const data = {
          product: product,
          customerId: customerId,
        };

        console.log(data);

        const headers = {
          "Content-Type": "application/json",
        };

        const response = await axios.post(`${DEV_URL}/cart`, data, {
          headers: headers,
        });
        console.log(response);
        if (response.status !== 200) {
          throw new Error("Failed to add the product to the cart.");
        }

        // commit("ADD_TO_CART", response.data.data.cartItem);
        // commit("SET_TOTAL_PRICE", response.data.data.totalPrice);
        commit("SET_LOADING", false);
        commit("SET_ERROR", null);
      } catch (error) {
        commit("SET_ERROR", error.message);
        commit("SET_LOADING", false);
      }
    },

    async reduceQuantity({ commit }, product) {
      try {
        commit("SET_LOADING", true);

        const headers = {
          "Content-Type": "application/json",
        };

        const response = await axios.delete(
          `${DEV_URL}/cart/${product._id}`,
          data,
          {
            headers: headers,
          }
        );
        console.log(response);

        if (response.status !== 200) {
          throw new Error("Failed to add the product to the cart.");
        }

        commit("SET_LOADING", false);
        commit("SET_ERROR", null);
      } catch (error) {
        commit("SET_ERROR", error.message);
        commit("SET_LOADING", false);
      }
    },

    async removeFromCart({ commit }, productId) {
      try {
        commit("SET_LOADING", true);

        const data = {
          productId: productId,
        };

        const headers = {
          "Content-Type": "application/json",
        };

        // Send a DELETE request to remove the product from the cart on the server
        const response = await axios.delete(`${DEV_URL}/cart/${productId}`, {
          headers: headers,
          data: data,
        });

        if (response.status !== 204) {
          throw new Error("Failed to remove the product from the cart.");
        }

        // Handle the successful removal by updating the Vuex store
        commit("REMOVE_FROM_CART", productId);
        commit("SET_LOADING", false);
        commit("SET_ERROR", null);
      } catch (error) {
        commit("SET_ERROR", error.message);
        commit("SET_LOADING", false);
      }
    },
  },

  getters: {
    cartItems: (state) => state.cart,
    cartTotalQuantity: (state) =>
      state.cart.reduce((total, item) => total + item.quantity, 0),
    cartTotalPrice: (state) =>
      state.cart.reduce((total, item) => total + item.price * item.quantity, 0),
  },
};
