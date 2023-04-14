<template>
  <div>
    <header>
      <div class="skeleton-loader__header"></div>
      <section>
      <div class="product-loader">
        <div class="products">
          <div class="product-skeleton">
            <div class="skeleton-loader__image"></div>
            <div class="skeleton-loader__title"></div>
            <div class="skeleton-loader__price"></div>
            <div class="skeleton-loader__button"></div>
          </div>
        </div>
        <div class="products">
          <div class="product-skeleton">
            <div class="skeleton-loader__image"></div>
            <div class="skeleton-loader__title"></div>
            <div class="skeleton-loader__price"></div>
            <div class="skeleton-loader__button"></div>
          </div>
        </div>
        <div class="products">
          <div class="product-skeleton">
            <div class="skeleton-loader__image"></div>
            <div class="skeleton-loader__title"></div>
            <div class="skeleton-loader__price"></div>
            <div class="skeleton-loader__button"></div>
          </div>
        </div>
        <div class="products">
          <div class="product-skeleton">
            <div class="skeleton-loader__image"></div>
            <div class="skeleton-loader__title"></div>
            <div class="skeleton-loader__price"></div>
            <div class="skeleton-loader__button"></div>
          </div>
        </div>
        <div class="products">
          <div class="product-skeleton">
            <div class="skeleton-loader__image"></div>
            <div class="skeleton-loader__title"></div>
            <div class="skeleton-loader__price"></div>
            <div class="skeleton-loader__button"></div>
          </div>
        </div>
        <div class="products">
          <div class="product-skeleton">
            <div class="skeleton-loader__image"></div>
            <div class="skeleton-loader__title"></div>
            <div class="skeleton-loader__price"></div>
            <div class="skeleton-loader__button"></div>
          </div>
        </div>
        <div class="products">
          <div class="product-skeleton">
            <div class="skeleton-loader__image"></div>
            <div class="skeleton-loader__title"></div>
            <div class="skeleton-loader__price"></div>
            <div class="skeleton-loader__button"></div>
          </div>
        </div>
        <div class="products">
          <div class="product-skeleton">
            <div class="skeleton-loader__image"></div>
            <div class="skeleton-loader__title"></div>
            <div class="skeleton-loader__price"></div>
            <div class="skeleton-loader__button"></div>
          </div>
        </div>
        <div class="products">
          <div class="product-skeleton">
            <div class="skeleton-loader__image"></div>
            <div class="skeleton-loader__title"></div>
            <div class="skeleton-loader__price"></div>
            <div class="skeleton-loader__button"></div>
          </div>
        </div>
        <div class="products">
          <div class="product-skeleton">
            <div class="skeleton-loader__image"></div>
            <div class="skeleton-loader__title"></div>
            <div class="skeleton-loader__price"></div>
            <div class="skeleton-loader__button"></div>
          </div>
        </div>
        <div class="products">
          <div class="product-skeleton">
            <div class="skeleton-loader__image"></div>
            <div class="skeleton-loader__title"></div>
            <div class="skeleton-loader__price"></div>
            <div class="skeleton-loader__button"></div>
          </div>
        </div>
        <div class="products">
          <div class="product-skeleton">
            <div class="skeleton-loader__image"></div>
            <div class="skeleton-loader__title"></div>
            <div class="skeleton-loader__price"></div>
            <div class="skeleton-loader__button"></div>
          </div>
        </div>
        <div class="products">
          <div class="product-skeleton">
            <div class="skeleton-loader__image"></div>
            <div class="skeleton-loader__title"></div>
            <div class="skeleton-loader__price"></div>
            <div class="skeleton-loader__button"></div>
          </div>
        </div>
        <div class="products">
          <div class="product-skeleton">
            <div class="skeleton-loader__image"></div>
            <div class="skeleton-loader__title"></div>
            <div class="skeleton-loader__price"></div>
            <div class="skeleton-loader__button"></div>
          </div>
        </div>
      </div>
    </section>
    </header>
  </div>
</template>

<style scoped>
header {
    display: flex;
flex-direction: column;
align-items: flex-start;
padding: 16px 0px;
gap: 32px;
}
.skeleton-loader__header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5.51px;

  max-width: 207.96px;
  width: 100%;
  height: 44.07px;

  /* Grey/Grey6 */

  background: var(--grey-grey6);
  border-radius: 11.018px;

  animation: skeleton-loader__image 1s ease-in-out infinite;
}
.product-loader  {
    justify-content: space-between;
}
.products {
    display: flex;
flex-direction: column;
align-items: flex-start;
padding: 11.018px;
gap: 11.02px;

width: 230px;
height: 318.33px;
}
.product-skeleton {
    width: auto;
    height: auto;
}
.skeleton-loader__image {
    width: 207.96px;
height: 173.53px;

}
.skeleton-loader__title {
    width: 201.58px;
height: 22.82px;
}
.skeleton-loader__price {
    width: 100.68px;
height: 22.82px;
}
.skeleton-loader__button {
    width: 207.96px;
height: 44.07px;
}
</style>
