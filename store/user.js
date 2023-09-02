// store/modules/user.js
export default {
  state: () => ({
    user: null,
    error: null,
  }),
  mutations: {
    setUser(state, user) {
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    setError(state, error) {
      state.error = error;
    },
  },
  actions: {
    // ...your login, signup, and checkUser actions
  },
};
