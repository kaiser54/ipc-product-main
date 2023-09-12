// store/cart.js

import { DEV_URL } from "@/plugins/api";
import axios from "axios";
import product from "./product";

export default {
  state: () => ({
    cart: [],
    totalPrice: [],
    error: null,
    error_msg: null,
    cartLoading: false,
  }),

  mutations: {
    ADD_TO_CART(state, cartItem) {
      state.cart.push(...cartItem);
      // state.cart.push(cartItem);
      console.log("mutant cart", state.cart);
    },
    UPDATE_CARTITEM({ cart }, { index, product }) {
      cart[index] = product;
      //replace the whole product not the quantity alone
    },
    UPDATE_CARTITEM_QUANTITY({ cart }, { index, quantity, totalPrice }) {
      cart[index].quantity = quantity;
      cart[index].totalPrice = totalPrice;
      //replace the whole product not the quantity alone
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
    CLEAR_CART(state) {
      state.cart = [];
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

        // console.log(response);
        if (response.status !== 200) {
          throw new Error("Failed to add the product to the cart.");
        }

        const cart = response?.data?.data?.cartItems;

        commit("CLEAR_CART");

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

    async addToCart({ commit, state }, product) {
      try {
        commit("SET_LOADING", true);

        const user = process.client
          ? JSON.parse(localStorage.getItem("user")) || null
          : null;

        const customerId = user?._id;

        const data = {
          product: product,
          productId: product._id,
          customerId: customerId,
        };

        console.log("data sending to backend", data);

        const headers = {
          "Content-Type": "application/json",
        };

        const response = await axios.post(`${DEV_URL}/cart`, data, {
          headers: headers,
        });

        const { cartItem } = response.data.data;

        console.log(" response data: ", response);

        console.log(" response cartItem: ", cartItem);

        const { cart } = state;

        //checking if the product exits

        // const findItem = cart.find(c=>c.productId === cartItem.productId) || {}

        // Find the index of the existing cart item if it exists.

        // const indexOfCartItem = cart.findIndex(c=>c.productId === cartItem.productId)

        const indexOfCartItem = cart.findIndex(
          (c) => c.productId === cartItem.productId
        );


        console.log(" response indexOfCartItem: ", indexOfCartItem);

        // if (Object.keys(findItem).length) {
        //   commit("UPDATE_CARTITEM_QUANTITY", {index: indexOfCartItem, quantity: cartItem.quantity})
        // }

        if (indexOfCartItem !== -1) {
          commit("UPDATE_CARTITEM_QUANTITY", {
            index: indexOfCartItem,
            quantity: cartItem.quantity,
            totalPrice: cartItem.totalPrice,
          });
        } 
        else {
          // const newCart = [...state.cart, cartItem]
          const cart = [];
          cart.push(cartItem);
          commit("ADD_TO_CART", cart);
        }

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

    async reduceQuantity({ commit, state }, product) {
      try {
        commit("SET_LOADING", true);

        const user = process.client
          ? JSON.parse(localStorage.getItem("user")) || null
          : null;

        const customerId = user?._id;

        const headers = {
          "Content-Type": "application/json",
        };

        const response = await axios.delete(
          `${DEV_URL}/cart/${product._id}`,
          {
            headers: headers,
            // params: product._id,
          }
        );

        console.log("reduce cart :", response)

        if (response.status == 204) {
          const indexOfCartItem = state.cart.findIndex(
            (c) => c.productId === product._id
          );

          console.log(" response data: ", response);
          console.log(" indexOfCartItem : ", indexOfCartItem);
          console.log(" quantity : ", state.cart[indexOfCartItem].quantity - 1);

          if (indexOfCartItem !== -1) {
            commit("UPDATE_CARTITEM_QUANTITY", {
              index: indexOfCartItem,
              quantity: state.cart[indexOfCartItem].quantity - 1,
            });
          } else {
            // commit("SET_LOADING", false);
            // commit("SET_ERROR", "product not found");
          }
        }
      } catch (error) {
        commit("SET_ERROR", error.message);
        commit("SET_LOADING", false);
      }
    },

    async SS({ commit }, product) {
      try {
        commit("SET_LOADING", true);
        console.log("hjgj");
        const headers = {
          "Content-Type": "application/json",
        };

        const response = await axios.delete(`${DEV_URL}/cart/`, data, {
          headers: headers,
          params: product._id,
        });

        console.log(product._id);
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
    TotalCart: (state) => state.cart.length,
    cartTotalQuantity: (state) =>
      state.cart.reduce((total, item) => total + item.quantity, 0),
    cartTotalPrice: (state) =>
      state.cart.reduce((acc, item) => acc + item.totalPrice, 0),
  },
};
