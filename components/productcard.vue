<template>
  <!-- product card container starts here -->

  <div class="product-card" :class="{ isDisable: !product.inStock }">
    <nuxt-link :to="`/dashboard/market/${product.name}~${product._id}`" class="card_wrap">
      <div class="product-img-grp">
        <!-- product image -->
        <div class="image-container">
          <img
            v-if="product.images && product.images.length > 0"
            :src="product.images[0].url"
            :alt="product.name"
          />
        </div>
        <!-- -------------------------------- -->
      </div>

      <!-- product details here -->

      <div class="productcard-details">
        <div class="productcard-name text-container">
          <p>{{ product.name }} {{ displayUnit }}</p>
        </div>
        <div class="productcard-price" v-if="hasSpecialPrice">
          <p>
            <span class="naira">₦</span>
            {{
                  product && formatPriceWithCommas(specialPrice)
                }}
          </p>
        </div>
        <div class="productcard-price" v-else>
          <p>
            <span class="naira">₦</span>
            {{ formatPriceWithCommas(product.discountPrice) }}
          </p>

          <p class="slashprice">
            <span class="naira">₦</span>
            {{ formatPriceWithCommas(product.actualPrice) }}
          </p>
        </div>
      </div>

      <!-- ------------------------- -->
    </nuxt-link>

    <!-- add to cart button  -->

    <button
      class="btn addtocart-btn-small"
      :disabled="!product.inStock"
      @click="addProductToCart(getProductQuantity + 1)"
      v-if="!isInCart"
    >
      <svg
        v-if="!loader && product.inStock"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="add-plus">
          <path
            id="Vector"
            d="M3.33398 7.99967H12.6673M8.00065 3.33301V12.6663V3.33301Z"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </svg>

      <p v-if="!loader && product.inStock">Add to cart</p>
      <p v-if="!loader && !product.inStock">Out of Stock</p>
      <span class="loader" v-if="loader"></span>
    </button>

    <!-- -------------------------------- -->
    <Counter
      :loader="loader"
      :counterValue="getProductQuantity"
      @postQuantity="addProductToCart"
      v-if="isInCart && product.inStock"
    />
    <!-- -------------------------------- -->
  </div>
</template>

<script>
import { formatPriceWithCommas } from "~/static/formatPrice";
import { DEV_URL } from "@/plugins/api";
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      loader: false,
      productId: this.product ? this.product._id : "",
      // productId: this.product && this.product._id ? this.product._id : "",
      favoriteId: null,
      liked: this.isLiked ? this.isLiked : null,
      cartId: "",
      userId: localStorage.getItem("userId"),
    };
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
    inCart: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapState("cart", ["favorites", "cartLoading", "cart"]),
    displayUnit() {
      if (this.product.unit === undefined || this.product.unit === "undefined") {
        return "";
      } else {
        return this.product.unit;
      }
    },

    // productLink() {
    //   if (this.product.inStock) {
    //     return `/dashboard/market/${this.product.name}~${this.product._id}`;
    //   } else {
    //     return '';
    //   }
    // },

    isLiked: {
      get() {
        const productIdToCheck = this.productId;
        return this.favorites.some((favorite) => {
          const favoriteProductId = favorite.productId;
          // ("Favorite Product ID:", favoriteProductId);
          // ("Target Product ID:", productIdToCheck);
          this.favoriteId = favoriteProductId ? favoriteProductId : null;
          return favoriteProductId === productIdToCheck;
        });
      },
      set(newValue) {
        // You can set the computed value here, but this is optional
        this.liked = newValue;
      },
    },
    isInCart() {
      return this.cart.some((c) => c.product._id === this.product._id);
    },
    getProductQuantity() {
      if (this.isInCart) {
        const cartItem = this.cart.find((c) => c.productId === this.product._id);

        if (cartItem) {
          this.cartId = cartItem._id;
          return cartItem.quantity;
        } else {
          return 0;
        }
      } else {
        return 0;
      }
    },
    hasSpecialPrice() {
      // Check if the specialPrices array exists and if the user's ID matches the customer ID in the special prices array
      return (
        this.product.specialPrices &&
        this.product.specialPrices.some((price) => price.customerId === this.userId)
      );
    },
    specialPrice() {
  const specialPrice = this.product.specialPrices.find(
    (price) => price.customerId === this.userId
  );
  const priceValue = specialPrice ? parseFloat(specialPrice.price) : parseFloat(this.product.discountPrice);
  return isNaN(priceValue) ? 0 : priceValue;
}

  },
  methods: {
    formatPriceWithCommas,
    ...mapActions("cart", ["addToCart", "increaseItem", "reduceQuantity"]),
    addProductToCart(quantity) {
      this.loader = true;
      // if (quantity < 1 || typeof(quantity) !== Number || !quantity) {
      //   quantity = 1
      // }

      // Call addToCart with the product and quantity
      this.addToCart({ product: this.product, quantity })
        .then(() => {
          // This block will be executed when the addToCart Promise resolves
          this.loader = false;
        })
        .catch((error) => {
          // Handle errors if the addToCart Promise rejects
          console.error("Error adding product to cart:", error);
          this.loader = false;
        });
    },
    toggleLike() {},
    async toggleFav() {
      if (process.client) {
        const userData = JSON.parse(localStorage.getItem("user"));
        const customerId = userData._id;

        try {
          const isCurrentlyLiked = this.isLiked;

          // Define the URL for the favorites endpoint
          const favoritesUrl = `${DEV_URL}/favourites`;

          // Define the payload with product and customer information
          const payload = {
            product: this.product,
            customerId,
          };

          if (isCurrentlyLiked) {
            // If the product is already liked, send a DELETE request to remove it from favorites
            const res = await fetch(favoritesUrl + "/" + this.favoriteId, {
              method: "DELETE",
              redirect: "follow",
            });

            // (this.favoriteId);
            // (JSON.stringify(payload));

            if (res.ok) {
              // ("Product removed from favorites successfully.");
              // Remove the favorite ID from your component's data
              this.favoriteId = null;
            } else {
              console.error("Failed to remove product from favorites.");
            }
          } else {
            // If the product is not liked, send a POST request to add it to favorites
            const res = await fetch(favoritesUrl, {
              method: "POST",
              body: JSON.stringify(payload),
              headers: { "Content-Type": "application/json" },
            });

            // (this.favoriteId);
            // (JSON.stringify(payload));

            if (res.ok) {
              const responseData = await res.json();
              // ("Product added to favorites successfully.");
              // ("Product added to favorites .", responseData);
              this.liked = true;
              // Store the favorite ID in your component's data
              this.favoriteId = responseData.favoriteId;
            } else {
              console.error("Failed to add product to favorites.");
            }
          }
        } catch (error) {
          // Handle network or other errors that might occur during the fetch.
          console.error("An error occurred:", error);
        }
      }
    },
  },
};
</script>

<style scoped>
a {
  width: 100%;
}
.card_wrap {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  gap: 8px;
}
.product-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  gap: 8px;
  width: 100%;
  max-width: 230px;
  height: 309px;

  /* White */

  background: var(--white);
  border-radius: 8px;
  transition: all 0.2s ease-in;
}

.product-card:hover {
  /* Product card hover */

  box-shadow: 0px 0px 20px rgba(48, 50, 55, 0.2);
}

.product-img-grp {
  display: flex;
  /* align-items: center; */
  justify-content: center;

  max-width: 206px;
  width: 100%;
  height: 100%;
  /* max-height: 161px; */
  position: relative;

  /* White */

  background: var(--white);
  border-radius: 8px;
}

.circle {
  position: absolute;
  top: 12px;
  right: 12px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px;
  gap: 10px;

  width: 32px;
  height: 32px;

  /* Grey/Grey4 */

  border: 1px solid var(--new-primary-p300);
  border-radius: 100px;
  z-index: 1;
}

.circle svg path {
  stroke: #565c69;
}
.circle svg.liked path {
  stroke: red;
}

.circle .liked {
  fill: red;
}

.image-container {
  max-width: 139px;
  width: 100%;
  /* Set the desired width */
  height: 149px;
  /* Set the desired height */
  overflow: hidden;
  /* Hide any overflowing content */
  position: relative;
  /* Establish a positioning context for the child image */
}
.addtocart-btn-small:hover {
  color: white;
}
.image-container img {
  width: 100%;
  /* Make the image fill the container */
  height: 100%;
  /* Maintain the image's aspect ratio */
  object-fit: contain;
  /* Clip the image to fit within the container */
  margin-inline: auto;
}

.productcard-details {
  min-height: 76px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
  /* justify-content: space-between; */
  width: 100%;
  /* max-width: 206px; */
  /* height: 76px; */
}

.productcard-name p {
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* or 150% */

  /* Grey/Grey2 */

  color: var(--grey-grey2);
}

.productcard-price {
  display: flex;
  align-items: center;
  gap: 8px;
}

.productcard-price p {
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  text-align: right;

  /* Grey/Grey1 */
  color: var(--grey-grey1);
}

.productcard-price .slashprice {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */

  text-align: right;
  text-decoration-line: line-through;

  /* Grey/Grey3 */

  color: var(--grey-grey3);
}

button p {
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 14px; /* 100% */
  /* identical to box height, or 150% */

  /* Primary/P300 */

  color: var(--grey-grey1);
}
button:hover p {
  color: var(--grey-grey1);
}
button svg {
  stroke: var(--grey-grey1);
}
button:hover svg {
  stroke: var(--grey-grey1);
}
button:disabled svg {
  stroke: var(--grey-grey1);
}
button:disabled p {
  color: var(--grey-grey1);
}
button:disabled {
  cursor: not-allowed;
}
.isDisable {
  opacity: 0.6;
}
.loader {
  width: 20px;
  height: 20px;
  border: 2px solid var(--grey-grey1);
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.counter-btn {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 16px;
  width: 100%;
}

.counter-btn .circle {
  position: relative;
  /* Primary/P75 */

  border: none;
  background: var(--grey-grey6);
  width: 40px;
  height: 40px;
  top: 0;
  left: 0;
}
.counter-btn:hover .circle:hover {
  background: var(--grey-grey6);
}
.counter-btn:focus .circle:focus {
  background: var(--grey-grey5);
}
.counter-btn:active .circle:active {
  background: var(--grey-grey5);
}
.counter {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  /* Grey/Grey1 */

  color: var(--grey-grey1);
}

@media (max-width: 950px) {
  .image-container {
    height: 118px;
  }
  .product-card {
    width: 167px;
    /* height: 287px; */
    justify-content: space-between;
  }

  .product-img-grp img {
    max-width: 100px;
    width: 100%;
  }

  .productcard-details {
    max-width: 141px;
    width: 100%;
  }

  .productcard-name p {
    /* white-space: nowrap; */
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 140px;
  }

  button svg {
    display: none;
  }

  .counter-btn svg {
    display: block;
  }
}

@media (max-width: 374px) {
  .product-card {
    max-width: 150px;
    width: 100%;
  }

  .productcard-name p {
    width: 100px;
  }
  .productcard-price {
    gap: 0;
    flex-direction: column;
  }
}

@media (max-width: 339px) {
  .counter-btn .circle {
    height: 32px;
    width: 32px;
  }
  .product-card {
    max-width: 146px;
    width: 100%;
  }

  .productcard-name p {
    width: 100px;
  }
  /* .product-card {
    height: auto;
  } */
}
</style>
