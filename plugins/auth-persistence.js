// plugins/auth-persistence.js
export default ({ store }) => {
    if (process.client) { // Check if running in the client/browser environment
      const token = localStorage.getItem("token");
      const user = JSON.parse(localStorage.getItem("user"));
  
      if (token && user) {
        store.commit("auth/SET_TOKEN_AND_USER", { token, user });
      }
    }
  };
  