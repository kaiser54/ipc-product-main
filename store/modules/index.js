// export const state = () => ({
//   cart: [],
//   savedItem: [],
//   user: null,
//   error: null,
//   products: [],
// });

// export const getters = () => ({
//   products: (state) => state.products,
// });

// export const mutations = {
//   SET_CUSTOMER: (state, customer) => (state.customer = customer),
//   ADD_PRODUCTS: (state, products) => (state.products = products),
//   addToCart(state, product) {
//     const existingProduct = state.cart.find((p) => p.id === product.id);
//     if (existingProduct) {
//       existingProduct.quantity++;
//     } else {
//       const newProduct = { ...product, quantity: 1 };
//       state.cart.push(newProduct);
//     }
//   },
//   buyProduct(state, product) {
//     const savedProductIndex = state.savedItem.findIndex(
//       (p) => p.id === product.id
//     );

//     if (savedProductIndex !== -1) {
//       const savedProduct = state.savedItem[savedProductIndex];
//       const existingProduct = state.cart.find((p) => p.id === savedProduct.id);

//       if (existingProduct) {
//         // If the product is already in cart, increase the quantity by the number of clicks
//         // existingProduct.quantity += savedProduct.clicks;
//         existingProduct.quantity++;
//       } else {
//         // If the product is not in cart, add it with a quantity of 1
//         state.cart.push({ ...savedProduct, quantity: 1 });
//       }
//     }
//   },
//   addToSaved(state, product) {
//     const existingProduct = state.savedItem.find((p) => p.id === product.id);
//     if (existingProduct) {
//       existingProduct.quantity++;
//     } else {
//       const newProduct = { ...product, quantity: 1 };
//       state.savedItem.push(newProduct);
//     }
//   },
//   removeFromSaved(state, productId) {
//     state.savedItem = state.savedItem.filter(
//       (product) => product.id !== productId
//     );
//   },
//   incrementQuantity(state, { productId }) {
//     const product = state.cart.find((p) => p.id === productId);
//     if (product) {
//       product.quantity++;
//     }
//   },
//   decrementQuantity(state, { productId }) {
//     const product = state.cart.find((p) => p.id === productId);
//     if (product) {
//       if (product.quantity > 1) {
//         product.quantity--;
//       }
//       //dont remove the product from the cart, wait for the delete button
//       else {
//         state.cart = state.cart.filter((p) => p.id !== productId);
//       }
//     }
//   },
//   updateCartQuantity(state, { productId, quantity }) {
//     const product = state.cart.find((p) => p.id === productId);
//     if (product) {
//       product.quantity = quantity;
//     }
//   },
//   removeFromCart(state, productId) {
//     state.cart = state.cart.filter((product) => product.id !== productId);
//   },
//   setUser(state, user) {
//     state.user = user;
//     localStorage.setItem("user", JSON.stringify(user)); // Save user in local storage
//   },
//   setError(state, error) {
//     state.error = error;
//   },
// };

// export const actions = {
//   async login(context, payload) {
//     try {
//       // const res = this.$axios.post("/business-customers/login", payload);
//       if (res) {
//         context.commit("SET_CUSTOMER", res?.data?.data?.customer);
//       }
//     } catch (err) {
//       (err);
//     }
//   },

//   async signup(context, payload) {
//     try {
//       // const res = this.$axios.post("/business-customers/signup", payload);
//       if (res) {
//         this.dispatch(login, {
//           email: payload.email,
//           password: payload.password,
//         });
//       }
//     } catch (err) {
//       (err);
//     }
//   },

//   checkUser({ commit }) {
//     const customer = localStorage.getItem("customer");
//     if (customer) {
//       commit("setUser", JSON.parse(customer));
//     }
//   },

//   async signupIndividual({ commit }, credentials) {
//     try {
//       const response = await fetch(
//         "http://localhost:8000/api/v1/individual-customers/signup",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(credentials),
//         }
//       );

//       if (response.ok) {
//         (response);
//         const user = await response.json();
//         commit("setUser", user);
//         commit("setError", null);
//         return true; // Indicate successful signup
//       } else {
//         const error = await response.json();
//         commit("setUser", null);
//         commit("setSignupError", error);
//         return false; // Indicate failed signup
//       }
//     } catch (error) {
//       commit("setUser", null);
//       commit("setSignupError", error.message);
//       return false; // Indicate failed signup
//     }
//   },

//   async signupBusiness({ commit }, credentials) {
//     try {
//       const response = await fetch(
//         "http://localhost:8000/api/v1/business-customers/signup",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(credentials),
//         }
//       );

//       if (response.ok) {
//         (response);
//         const user = await response.json();
//         commit("setUser", user);
//         commit("setError", null);
//         return true; // Indicate successful signup
//       } else {
//         const error = await response.json();
//         commit("setUser", null);
//         commit("setSignupError", error);
//         return false; // Indicate failed signup
//       }
//     } catch (error) {
//       commit("setUser", null);
//       commit("setSignupError", error.message);
//       return false; // Indicate failed signup
//     }
//   },
//   async fetchProducts(context, payload) {
//     let res = null;
//     try {
//       if (payload) {
//         res = await fetch(
//           "http://localhost:8000/api/v1/products?" +
//             new URLSearchParams({
//               name: payload,
//             })
//         );
//       } else {
//         res = await fetch("http://localhost:8000/api/v1/products?");
//       }

//       const resp = await res.json();

//       context.commit("ADD_PRODUCTS", resp?.data?.products);
//     } catch (err) {
//       (err);
//     }
//   },
// };

// // export const getters = {
// //   isProductInSavedItems: (state) => (product) => {
// //     return state.savedItem.some((item) => item.id === product.id);
// //   },
// // };
