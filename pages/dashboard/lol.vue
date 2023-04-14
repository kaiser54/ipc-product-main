<template>
  <div class="product-detail">
    <img
      :src="require(`~/assets/images/category${product.images[productImage]}`)"
    />
    <div class="thumbnail-container">
      <img
        v-for="(image, index) in product.images"
        :key="index"
        :src="require(`~/assets/images/category${image}`)" alt=""
        @click="changeImage(index)"
      />
    </div>
    <div class="product-details">
      <h2>{{ product.name }}</h2>
      <p>{{ product.description }}</p>
      <div class="price">{{ product.price }}</div>
      <button class="add-to-cart" @click="addToCart">Add to Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        id: 1,
        name: "Product Name",
        description: "Product Description",
        price: "$100",
        images: ["1.png", "2.png", "3.png", "4.png"],
        // other product data
      },
      productImage: 0,
    };
  },
  methods: {
    changeImage(index) {
      this.productImage = index;
    },
    addToCart() {
      // Add product to cart
    },
  },
};
</script>

<style>
.product-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.thumbnail-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  max-width: 100%;
  overflow-x: auto;
  margin-top: 10px;
}
.thumbnail-container img {
  width: 60px;
  height: 60px;
  object-fit: contain;
  cursor: pointer;
  margin-right: 10px;
}
.product-details {
  max-width: 800px;
  margin-top: 20px;
  text-align: center;
}
.product-details h2 {
  font-size: 24px;
  margin-bottom: 10px;
}
.product-details p {
  font-size: 16px;
  margin-bottom: 20px;
}
.product-details .price {
  font-size: 24px;
  margin-bottom: 20px;
}
.add-to-cart {
  background-color: #f7c600;
  color: #333;
  font-size: 18px;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}
</style>
