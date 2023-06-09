// middleware/auth.js

export default function ({ store, redirect, route }) {
  // Check if the user is logged in
  if (!store.state.user && !isAllowedPublicRoute(route)) {
    redirect('/login'); // Redirect to the login page if not logged in
  }
}

function isAllowedPublicRoute(route) {
  const allowedPublicRoutes = ['/', '/register', '/business', '/individual'];
  return allowedPublicRoutes.includes(route.path);
}
// middleware/auth.js

export default function ({ store, redirect }) {
  // Check if the user is logged in
  if (!store.state.user) {
    redirect('/'); // Redirect to the login page if not logged in
  }
}

export default function ({ store, route, redirect }) {
  const layout = route.layout || '';
  //checks if the use is not logged in or signed in
  if (!store.state.user && layout !== 'registration layout' && layout !== 'registerAcc' ) {
    return redirect('/')
  }
}

export default function ({store, route, redirect}) {
    if (!store.state.user && route.meta.requiresAuth) {
      redirect('/login'); // Redirect to the login page if not logged in
    }
  }

  


  // middleware/auth.js

export default function ({ store, redirect }) {
  // Check if the user is logged in
  if (!store.state.user) {
    redirect('/'); // Redirect to the login page if not logged in
  }
}














"export const state = () => ({
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
      } else {
        state.cart = state.cart.filter((p) => p.id !== productId);
      }
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
};
// " update this storejs by creating a register auth with the fakestore API used in the login auth














// store/index.js

export const state = () => ({
  user: null,
  error: null,
});

export const mutations = {
  setUser(state, user) {
    state.user = user;
  },
  setError(state, error) {
    state.error = error;
  },
};

export const actions = {
  async register({ commit }, userData) {
    try {
      const response = await fetch(
        "https://ipc-estore-backend.herokuapp.com/api/v1/individual-customers/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );
      if (response.ok) {
        const user = await response.json();
        commit("setUser", user);
      } else {
        const error = await response.json();
        commit("setError", error);
      }
    } catch (error) {
      commit("setError", error.message);
    }
  },
};

export const getters = {
  getUser: (state) => state.user,
  getError: (state) => state.error,
};





{
  "email": "agboolatemitope070@gmail.com",
  "firstName": "Agboola",
  "lastName": "Temitope",
  "password": "aaaa",
  "cofirmPassword": "aaaa",
  "phoneNumbers": "1234589"
}














async register({ commit }, userData) {
    try {
      console.log(userData)
      const response = await fetch(
        "https://ipc-estore-backend.herokuapp.com/api/v1/individual-customers/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );
      if (response.ok) {
        const user = await response.json();
        commit("setUser", user);
      } else {
        const error = await response.json();
        commit("setError", error);
      }
    } catch (error) {
      commit("setError", error.message);
    }
  },



  export const getters = {
  getUser: (state) => state.user,
  getError: (state) => state.error,
};














//current store

export const state = () => ({
  cart: [],
  user: null,
  error: null,
  accountType: "",
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
  setAccountType(state, type) {
    state.accountType = type;
  },
  
};

export const actions = {
  async login({ commit }, credentials) {
    try {
      // Check if the user is already logged in
      const user = localStorage.getItem("user");
      if (user) {
        commit("setUser", JSON.parse(user));
        commit("setError", null);
        return true; // Indicate successful login
      } else {
        

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
        localStorage.setItem("user", JSON.stringify(user)); // Save user in local storage
        commit("setError", null);
        return true; // Indicate successful login
      } else {
        const error = await response.json();
        commit("setUser", null);
        commit("setError", error);
        return false; // Indicate failed login
      }
    }
    } catch (error) {
      commit("setUser", null);
      commit("setError", error.message);
      return false; // Indicate failed login
    
    
  }
  },

  async register({ commit }, userData) {
    try {
      console.log(userData)
      const response = await fetch(
        "https://ipc-estore-backend.herokuapp.com/api/v1/individual-customers/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );
      if (response.ok) {
        const user = await response.json();
        commit("setUser", user);
      } else {
        const error = await response.json();
        commit("setError", error);
      }
    } catch (error) {
      commit("setError", error.message);
    }
  },
};


export const getters = {
  getUser: (state) => state.user,
  getError: (state) => state.error,
};

