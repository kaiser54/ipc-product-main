import Vue from 'vue';

Vue.mixin({
  methods: {
    async fetchProducts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        this.$store.commit('setProducts', products);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
