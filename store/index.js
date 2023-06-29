export const state = () => ({
  cart: [],
  user: null,
  error: null,
});

export const mutations = {
  addToCart(state, product) {
    const existingProduct = state.cart.find((p) => p.id === product.id);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      const newProduct = { ...product, quantity: 1 };
      state.cart.push(newProduct);
    }
  },
  incrementQuantity(state, { productId }) {
    const product = state.cart.find((p) => p.id === productId);
    if (product) {
      product.quantity++;
    }
  },
  decrementQuantity(state, { productId }) {
    const product = state.cart.find((p) => p.id === productId);
    if (product) {
      if (product.quantity > 1) {
        product.quantity--;
      } 
      //dont remove the product from the cart, wait for the delete button
      // else {
      //   state.cart = state.cart.filter((p) => p.id !== productId);
      // }
    }
  },
  updateCartQuantity(state, { productId, quantity }) {
    const product = state.cart.find((p) => p.id === productId);
    if (product) {
      product.quantity = quantity;
    }
  },
  removeFromCart(state, productId) {
    state.cart = state.cart.filter((product) => product.id !== productId);
  },
  setUser(state, user) {
    state.user = user;
    localStorage.setItem("user", JSON.stringify(user)); // Save user in local storage
  },
  setError(state, error) {
    state.error = error;
  },
};

export const actions = {
  async login({ commit }, credentials) {
    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const user = await response.json();
        commit("setUser", user);
        commit("setError", null);
        return true; // Indicate successful login
      } else {
        const error = await response.json();
        commit("setUser", null);
        commit("setError", error);
        return false; // Indicate failed login
      }
    } catch (error) {
      commit("setUser", null);
      commit("setError", error.message);
      return false; // Indicate failed login
    }
  },
  checkUser({ commit }) {
    const user = localStorage.getItem("user");
    if (user) {
      commit("setUser", JSON.parse(user));
    }
  },

async signupIndividual({ commit }, credentials) {
  try {
    const response = await fetch("http://localhost:8000/api/v1/individual-customers/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (response.ok) {
      console.log(response);
      const user = await response.json();
      commit("setUser", user);
      commit("setError", null);
      return true; // Indicate successful signup
    } else {
      const error = await response.json();
      commit("setUser", null);
      commit("setSignupError", error);
      return false; // Indicate failed signup
    }
  } catch (error) {
    commit("setUser", null);
    commit("setSignupError", error.message);
    return false; // Indicate failed signup
  }
},

async signupBusiness({ commit }, credentials) {
  try {
    const response = await fetch("http://localhost:8000/api/v1/business-customers/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (response.ok) {
      console.log(response);
      const user = await response.json();
      commit("setUser", user);
      commit("setError", null);
      return true; // Indicate successful signup
    } else {
      const error = await response.json();
      commit("setUser", null);
      commit("setSignupError", error);
      return false; // Indicate failed signup
    }
  } catch (error) {
    commit("setUser", null);
    commit("setSignupError", error.message);
    return false; // Indicate failed signup
  }
},

};
