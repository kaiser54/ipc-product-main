// export const state = () => ({
//   maskedEmail: "",
//   cart: [],
//   products: [
//     {
//       id: 1,
//       name: "Mama's Choice Nigerian Parboiled Rice 25kg",
//       slashPrice: 13000,
//       price: 75000,
//       image: "p1.png",
//       addedToCart: false,
//       itemCount: 1,
//     },
//     {
//       id: 2,
//       name: "Product 2",
//       slashPrice: 13000,
//       price: 2000,
//       image: "p2.png",
//       addedToCart: false,
//       itemCount: 1,
//     },
//     {
//       id: 3,
//       name: "Product 3",
//       slashPrice: 13000,
//       price: 5000,
//       image: "p3.png",
//       addedToCart: false,
//       itemCount: 1,
//     },
//     {
//       id: 4,
//       name: "Product 4",
//       slashPrice: 13000,
//       price: 5000,
//       image: "p4.png",
//       addedToCart: false,
//       itemCount: 1,
//     },
//   ],
// });

// export const mutations = {
//   setMaskedEmail(state, email) {
//     state.maskedEmail = email;
//   },
//   addToCart(state, product) {
//     const cartItem = { ...product, id: state.cart.length }; // Add a unique id
//     state.cart.push(cartItem);
//     product.addedToCart = true;
//     console.log(state.cart); // Corrected variable name
//     console.log(cartItem);
//   },
//   removeFromCart(state, product) {
//     console.log('Removing product from cart:', product);
//     const index = state.cart.findIndex((item) => item.name === product.name);
//     if (index !== -1) {
//       state.cart.splice(index, 1);
//     }
//     product.addedToCart = false;
//   },
//   incrementItemCount(state, { product, index }) {
//     if (product && state.cart.length > 0) {
//       const cartItem = state.cart.find((item) => item.name === product.name);
//       if (cartItem) {
//         cartItem.itemCount++;
//       }
//     }

//     if (index !== undefined && state.products[index]) {
//       state.products[index].itemCount++;
//     }
//   },
//   decrementItemCount(state, { product, index }) {
//     if (product && state.cart.length > 0) {
//       const cartItem = state.cart.find((item) => item.name === product.name);
//       if (cartItem) {
//         if (cartItem.itemCount > 1) {
//           cartItem.itemCount--;
//         } else {
//           // Remove the item from the cart if the count becomes zero
//           const itemIndex = state.cart.indexOf(cartItem);
//           state.cart.splice(itemIndex, 1);
//         }
//       }
//     }

//     if (index !== undefined && state.products[index]) {
//       if (state.products[index].itemCount > 1) {
//         state.products[index].itemCount--;
//       }
//     }
//   },
// };



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
