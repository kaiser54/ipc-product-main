// store/product.js
import { fetchData } from "@/plugins/api";

export default {
  state: () => ({
    products: [],
    error: null,
    loading: true,
    searchQuery: "",
  }),

  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
    SET_LOADING(state, loading) {
      state.loading = loading;
    },
    SET_QUERY(state, searchQuery) {
      state.searchQuery = searchQuery;
    },
  },

  actions: {
    async fetchAllProducts({ commit }) {
      try {
        commit("SET_LOADING", true);

        const requestOptions = {
          method: "GET",
          redirect: "follow",
        };

        const data = await fetchData("/products/", requestOptions);

        commit("SET_PRODUCTS", data.data.products);
        commit("SET_LOADING", false);
        commit("SET_ERROR", null);
      } catch (error) {
        commit("SET_ERROR", error.message);
        commit("SET_LOADING", false);
      }
    },
    async fetchProductByID({ commit }, id) {
      try {
        commit("SET_LOADING", true);

        const requestOptions = {
          method: "GET",
          redirect: "follow",
        };

        const data = await fetchData("/products/" + id, requestOptions);
        console.log(data)

        // commit("SET_PRODUCTS", data.data.products);
        commit("SET_LOADING", false);
        commit("SET_ERROR", null);
      } catch (error) {
        commit("SET_ERROR", error.message);
        commit("SET_LOADING", false);
      }
    },
    updateQuery({ commit }, value) {
      commit("SET_QUERY", value);
    },
  },

  getters: {
    getProductById: (state) => (productId) => {
      return state.products.find((product) => product._id === productId);
    },
    getProductsBySearch: (state) => {
      return state.searchQuery.trim() === ""
        ? state.products
        : state.products.filter(
            (product) =>
              product.name
                .toLowerCase()
                .includes(state.searchQuery.toLowerCase()) ||
              product.brand
                .toLowerCase()
                .includes(state.searchQuery.toLowerCase()) ||
              product.description
                .toLowerCase()
                .includes(state.searchQuery.toLowerCase()) ||
              product.category
                .toLowerCase()
                .includes(state.searchQuery.toLowerCase())
          );
    },
  },
};
