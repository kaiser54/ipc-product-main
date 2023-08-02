export const state = () => ({
  cart: [],
  customer: {},
  error: null,
  products: [],
});

export const getters = () => ({
  products: (state) => state.products,
});

export const mutations = {
  SET_CUSTOMER: (state, customer) => (state.customer = customer),
  ADD_PRODUCTS: (state, products) => (state.products = products),
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
  async login(context, payload) {
    try {
      // const res = this.$axios.post("/business-customers/login", payload);
      if (res) {
        context.commit("SET_CUSTOMER", res?.data?.data?.customer);
      }
    } catch (err) {
      console.log(err);
    }
  },

  async signup(context, payload) {
    try {
      // const res = this.$axios.post("/business-customers/signup", payload);
      if (res) {
        this.dispatch(login, {
          email: payload.email,
          password: payload.password,
        });
      }
    } catch (err) {
      console.log(err);
    }
  },

  checkUser({ commit }) {
    const customer = localStorage.getItem("customer");
    if (customer) {
      commit("setUser", JSON.parse(customer));
    }
  },

  async fetchProducts(context, payload) {
    let res = null;
    try {
      if (payload) {
        res = await fetch(
          "http://localhost:8000/api/v1/products?" +
            new URLSearchParams({
              name: payload,
            })
        );
      } else {
        res = await fetch("http://localhost:8000/api/v1/products?");
      }

      const resp = await res.json();

      context.commit("ADD_PRODUCTS", resp?.data?.products);
    } catch (err) {
      console.log(err);
    }
  },
};
