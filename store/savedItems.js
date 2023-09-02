// store/savedItems.js

export const state = () => ({
  favorites: [],
});

export const mutations = {
  ADD_FAVORITE(state, product) {
    state.favorites.push(product);
  },
  REMOVE_FAVORITE(state, productId) {
    state.favorites = state.favorites.filter(product => product.id !== productId);
  },
};

export const actions = {
  addFavorite({ commit }, product) {
    commit("ADD_FAVORITE", product);
  },
  removeFavorite({ commit }, productId) {
    commit("REMOVE_FAVORITE", productId);
  },
};

export const getters = {
  isProductInFavorites: state => productId => {
    return state.favorites.some(product => product.id === productId);
  },
  getFavorites: state => {
    return state.favorites;
  },
};
