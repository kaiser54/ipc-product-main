// store/auth.js
import { fetchData } from "@/plugins/api";

export default {
  state: () => ({
    token: process.client ? localStorage.getItem("token") || "" : "",
    user: process.client
      ? JSON.parse(localStorage.getItem("user")) || null
      : null,
    error: null,
    error_msg: null,
    loading: false,
  }),

  mutations: {
    SET_TOKEN_AND_USER(state, { token, user }) {
      state.token = token;
      state.user = user;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
    SET_ERROR_MSG(state, value) {
      state.error_msg = value;
    },
    SET_LOADING(state, loading) {
      state.loading = loading;
    },
    LOGOUT(state) {
      state.token = "";
      state.user = null;
      localStorage.removeItem("token");
    },
  },

  actions: {
    async login({ commit }, data) {
      try {
        commit("SET_LOADING", true);
        const response = await fetchData("/business-customers/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (response.status === "success") {
          const { token, customer } = response;
          commit("SET_TOKEN_AND_USER", { token, user: customer });
          commit("SET_ERROR", false);
        } else {
          commit("SET_ERROR", true);
          commit("SET_ERROR_MSG", response.message);
          commit("LOGOUT");
        }
      } catch (error) {
        console.error("Login error:", error);
        commit("SET_ERROR", "Login error");
      } finally {
        commit("SET_LOADING", false);
      }
    },

    async register({ commit }, data) {
      try {
        commit("SET_LOADING", true);

        const response = await fetchData("/business-customers/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        console.log(response);
        if (response.status === "success") {
          const { token, data } = response;
          commit("SET_TOKEN_AND_USER", { token, user: data?.customer });
          commit("SET_ERROR", false);
        } else {
          commit("SET_ERROR", true);
          commit("SET_ERROR_MSG", response.message);
          commit("LOGOUT");
        }
      } catch (error) {
        console.error("sign up error:", error);
        commit("SET_ERROR", "sign up error");
      } finally {
        commit("SET_LOADING", false);
      }
    },

    async logout({ commit }) {
      commit("LOGOUT");
    },
  },

  getters: {
    isLoggedIn: (state) => !!state.token,
    hasError: (state) => state.error !== null,
    isLoading: (state) => state.loading,
  },
};
