export const state = () => ({
  cart: [],
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
};
