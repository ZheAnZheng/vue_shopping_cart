<template>
  <div class="checkout">
    <h2>付款資訊</h2>
    <form class="checkout-card">
      <div class="form-group">
        <label name="owner" id="owner">持卡人姓名</label>
        <input type="text" for="owner" placeholder="John Doe" />
      </div>
      <div class="form-group">
        <label name="card-number" id="cardNumber">卡號</label>
        <input type="text" for="cardNumber" placeholder="1111 2222 3333 4444" />
      </div>
      <div class="form-group">
        <label name="expire-number" id="expire">有效期限</label>
        <input type="text" for="expire" placeholder="MM/YY" />
      </div>
      <div class="form-group">
        <label name="CCV" id="CCV">CVC/CCV</label>
        <input type="text" for="CCV" placeholder="123" />
      </div>
    </form>
  </div>
</template>
<style lang="scss" scoped>
@import "../assets/scss/mixins.scss";
@import "../assets/scss/extend.scss";
.checkout-card {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(3, 64px);
  row-gap: 20px;
  .form-group {
    input {
      @extend %input-style;
    }
    label {
      @extend %input-label-style;
    }

    &:nth-of-type(1) {
      @include setGrid(1, 13, 1, 2);
    }
    &:nth-of-type(2) {
      @include setGrid(1, 13, 2, 3);
    }
    &:nth-of-type(3) {
      @include setGrid(1, 6, 3, 4);
    }
    &:nth-of-type(4) {
      @include setGrid(7, 13, 3, 4);
    }
  }
}
@media (min-width: 1000px) {
  .checkout {
    height: 336px;
    // border-bottom: 1px solid var(--line-color);
  }
  .checkout-card {
    column-gap: 1rem;
    .form-group {
      &:nth-of-type(1) {
        @include setGrid(1, 9, 1, 2);
      }
      &:nth-of-type(2) {
        @include setGrid(1, 9, 2, 3);
      }
      &:nth-of-type(3) {
        @include setGrid(1, 6, 3, 4);
      }
      &:nth-of-type(4) {
        @include setGrid(7, 13, 3, 4);
      }
    }
  }
}
</style>
