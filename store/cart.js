// store/cart.js

import { DEV_URL } from "@/plugins/api";
import axios from "axios";
import product from "./product";

export default {
  state: () => ({
    cart: [],
    cartAlert: "",
    totalPrice: [],
    // checkoutData: [],
    checkoutResponse: [],
    distance: 0,
    deliveryFee: 0,
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

    ADD_TO_CART_ALERT(state, arg) {
      state.cartAlert = arg;
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
    SET_DISTANCE(state, distance) {
      state.distance = distance;
    },
    SET_DELIVERY_FEE(state, deliveryFee) {
      state.deliveryFee = deliveryFee;
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
      state.cart = state.cart.filter((item) => item.product._id !== productId);
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
        commit("ADD_TO_CART_ALERT", null);

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

        if (response.status === 200) {
          commit("ADD_TO_CART_ALERT", true);
        } else {
          commit("ADD_TO_CART_ALERT", false);
        }

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
        } else {
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

    async increaseItem({ commit, state }, e) {
      try {
        commit("SET_LOADING", true);
        commit("ADD_TO_CART_ALERT", null);
        const user = process.client
          ? JSON.parse(localStorage.getItem("user")) || null
          : null;

        const customerId = user?._id;

        const { productId } = e;

        console.log("Data sending to backend", productId);
        const headers = {
          "Content-Type": "application/json",
        };

        // Send a PATCH request to the endpoint using axios.patch
        const response = await axios.patch(
          `${DEV_URL}/cart/increase-item/${productId}`,
          {
            customerId,
          },
          {
            headers,
          }
        );
        console.log(response);

        const { update } = response.data.data;
        const cartItem = update;

        if (response.status === 200) {
          commit("ADD_TO_CART_ALERT", true);
        } else {
          commit("ADD_TO_CART_ALERT", false);
        }

        const { cart } = state;

        const indexOfCartItem = cart.findIndex(
          (c) => c.productId === cartItem.productId
        );

        console.log("Response indexOfCartItem: ", indexOfCartItem);

        if (indexOfCartItem !== -1) {
          commit("UPDATE_CARTITEM_QUANTITY", {
            index: indexOfCartItem,
            quantity: cartItem.quantity,
            totalPrice: cartItem.totalPrice,
          });
        } else {
          const newCart = [...state.cart, cartItem];
          commit("ADD_TO_CART", newCart);
        }

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

    async reduceQuantity({ commit, state }, product) {
      try {
        commit("SET_LOADING", true);
        commit("ADD_TO_CART_ALERT", null);

        const headers = {
          "Content-Type": "application/json",
        };

        // Send a DELETE request to your server to reduce the quantity
        const response = await axios.delete(
          `${DEV_URL}/cart/${product._id}`,
          {
            headers: headers,
          }
        );

        console.log("response", response)

        if (response.status === 204) {
          const indexOfCartItem = state.cart.findIndex(
            (c) => c.productId === product._id
          );

          commit("ADD_TO_CART_ALERT", "removed");

          if (indexOfCartItem !== -1) {
            // Update the quantity and totalPrice of the cart item
            const newQuantity = state.cart[indexOfCartItem].quantity - 1;
            const newTotalPrice =
              state.cart[indexOfCartItem].totalPrice -
              state.cart[indexOfCartItem].product.discountPrice;

            commit("UPDATE_CARTITEM_QUANTITY", {
              index: indexOfCartItem,
              quantity: newQuantity,
              totalPrice: newTotalPrice,
            });
          } else {
            // Handle the case where the cart item was not found
            commit("SET_LOADING", false);
            commit("SET_ERROR", null);
          }

          commit("SET_LOADING", false);
          commit("SET_ERROR", null);
        }
      } catch (error) {
        commit("SET_ERROR", error.message);
        commit("SET_LOADING", false);
      }
    },
    async chechout({ commit }, product) {
      try {
        commit("SET_LOADING", true);

        const user = process.client
          ? JSON.parse(localStorage.getItem("user")) || null
          : null;

        const headers = {
          "Content-Type": "application/json",
        };

        const response = await axios.post(`${DEV_URL}/orders/`, {
          headers: headers,
          body: state.checkout,
        });

        console.log(state.checkout);
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
        commit("ADD_TO_CART_ALERT", null);
        console.log("Data sending to backend", productId);

        const headers = {
          "Content-Type": "application/json",
        };

        // Send a DELETE request to remove the product from the cart on the server
        const response = await axios.delete(
          `${DEV_URL}/cart/delete-item/${productId}`, // Use productId as :id parameter in the URL
          {
            headers: headers,
          }
        );

        if (response.status === 204) {
          commit("ADD_TO_CART_ALERT", "deleted");
        } else {
          commit("ADD_TO_CART_ALERT", false);
        }

        console.log("Response status:", response.status);

        if (response.status !== 204) {
          console.error(
            "Failed to remove the product from the cart:",
            response.data
          );
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
    getDistanceFromLatLonInKm({ commit }, { latitude2, longitude2, units }) {
      let latitude1 = 6.5376382;
      let longitude1 = 3.3651075;
      let p = 0.017453292519943295; // This is Math.PI / 180
      let c = Math.cos;
      let a =
        0.5 -
        c((latitude2 - latitude1) * p) / 2 +
        (c(latitude1 * p) *
          c(latitude2 * p) *
          (1 - c((longitude2 - longitude1) * p))) /
          2;
      let R = 6371; // Earth's radius in km
      let dist = 2 * R * Math.asin(Math.sqrt(a));
      commit("SET_DISTANCE", dist);
    },

    getDeliveryFee({ commit }, { distance, value }) {
      const baseFare = 1500;
      const baseDistance = 5;
      const baseValue = 50000;
      const pricePerKm = 200;
      let totalCharge = 0;

      if (distance > baseDistance && value > baseValue) {
        let extraValueCharge = 0.01 * value;
        let extraDistance = distance - baseDistance;
        let extraDistanceCharge = extraDistance * pricePerKm;
        totalCharge = extraValueCharge + extraDistanceCharge + baseFare;
      } else if (value > baseValue) {
        totalCharge = 0.01 * value + baseFare;
      } else if (distance > baseDistance) {
        let extraDistance = distance - baseDistance;
        totalCharge = extraDistance * pricePerKm + baseFare;
      } else {
        totalCharge = baseFare;
      }
      commit("SET_DELIVERY_FEE", totalCharge);
    },
  },

  getters: {
    cartItems: (state) => state.cart,
    TotalCart: (state) => state.cart.length,
    cartTotalQuantity: (state) =>
      state.cart.reduce((total, item) => total + item.quantity, 0),
    cartTotalPrice: (state) =>
      state.cart.reduce((acc, item) => acc + item.totalPrice, 0),
    cartFullPrice: (state) => {
      // Calculate the total price of items in the cart
      const totalPrice = state.cart.reduce(
        (acc, item) => acc + item.totalPrice,
        0
      );

      // Add the delivery fee to the total price
      const totalWithDeliveryFee = totalPrice + state.deliveryFee;

      return totalWithDeliveryFee;
    },
  },
};
