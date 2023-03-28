<template>
  <div>
    <div class="product-card">
      <div class="product-img-grp">
        <div class="circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M7.63018 13.8405L2.38403 8.37754C0.906344 6.8388 0.999397 4.31573 2.58606 2.89953C4.16015 1.49454 6.54688 1.76737 7.79078 3.49447L7.99992 3.78483L8.20905 3.49447C9.45298 1.76737 11.8397 1.49454 13.4138 2.89953C15.0004 4.31573 15.0935 6.8388 13.6158 8.37754L8.36965 13.8405C8.16545 14.0531 7.83438 14.0531 7.63018 13.8405Z"
              stroke="#565C69"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <img src="../assets/images/p1.png" alt="" />
      </div>
      <div class="productcard-details">
        <div class="productcard-name">
          <p>Mama'S Choice Nigerian Parboiled Rice 25kg</p>
        </div>
        <div class="productcard-price">
          <p>₦ 75,000</p>
        </div>
      </div>
      <button class="btn secondary-btn-small">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
        >
          <path
            d="M3.83325 7.99992H13.1666M8.49992 3.33325V12.6666V3.33325Z"
            stroke="#0009B3"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p>Add to cart</p>
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  gap: 8px;

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
  align-items: center;
  justify-content: center;

  max-width: 206px;
  width: 100%;
  height: 161px;
  position: relative;

  /* White */

  background: var(--white);
  border-radius: 8px;
}
.circle {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px;
  gap: 10px;

  width: 32px;
  height: 32px;

  /* Grey/Grey4 */

  border: 1px solid var(--grey-grey4);
  border-radius: 100px;
}
.productcard-details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;

  width: 206px;
  height: 76px;
}
.productcard-name p {
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* or 150% */

  /* Grey/Grey2 */

  color: var(--grey-grey2);
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
button p {
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height, or 150% */

  /* Primary/P300 */

  color: var(--primary-p300);
}
</style>
