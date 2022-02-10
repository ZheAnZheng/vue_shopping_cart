<template>
  <div class="checkout active">
    <h2>寄送地址</h2>
    <form class="checkout-info">
      <div class="form-group">
        <label for="title">稱謂</label>
        <div class="select-wrapper">
          <select name="title" id="title">
            <option value="sir">先生</option>
            <option value="miss">女士</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <label for="name">姓名</label>
        <input type="text" id="name" name="name" placeholder="請輸入姓名" />
      </div>
      <div class="form-group">
        <label name="phone" id="phone">電話</label>
        <input type="tel" for="phone" placeholder="請輸入行動電話" />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          name="email"
          type="email"
          id="email"
          placeholder="請輸入電子郵件"
        />
      </div>
      <div class="form-group">
        <label name="state" id="state">縣市</label>
        <div class="select-wrapper">
          <select id="state" required>
            <option value="" disabled>請選擇地點</option>
            <option value="New_Taipei">新北</option>
            <option value="Taipei">台北</option>
            <option value="Kaoushuong">高雄</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <label name="address" id="address">地址</label>
        <input type="text" for="address" placeholder="請輸入地址" />
      </div>
    </form>
  </div>
</template>


<style lang="scss" scoped>
@import '../assets/scss/mixins.scss';
@import '../assets/scss/extend.scss';
.checkout-info {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(5, 64px);
  column-gap: 1rem;
  row-gap: 20px;
  .form-group {
    //setGrid(x1,x2,y1,y2);
    &:nth-of-type(1) {
      @include setGrid(1, 5, 1, 2);
    }
    &:nth-of-type(2) {
      @include setGrid(5, 13, 1, 2);
    }
    &:nth-of-type(3) {
      @include setGrid(1, 13, 2, 3);
    }
    &:nth-of-type(4) {
      @include setGrid(1, 13, 3, 4);
    }
    &:nth-of-type(5) {
      @include setGrid(1, 13, 4, 5);
    }
    &:nth-of-type(6) {
      @include setGrid(1, 13, 5, 6);
    }
    .select-wrapper {
      position: relative;
      z-index: 0;
      background-color: transparent;
      &::after {
        position: absolute;
        z-index: -1;
        right: 10px;
        top: 45%;
        content: "";
        border-style: solid;
        border-width: 6px 5px 5px 5px;
        border-color: var(--secondary-text-color) transparent transparent
          transparent;
      }
    }

    input {
      @extend %input-style;
    }
    select {
      @extend %input-style;
      background-color: transparent;
      color: var(--primary-text-color);
      &:invalid {
        color: var(--secondary-text-color);
      }
    }
    label {
      @extend %input-label-style;
    }
  }
}
@media (min-width: 1000px) {
   .checkout {
    height: 336px;
    border-bottom: 1px solid var(--line-color);
  }
  .checkout-info {
    grid-template-rows: repeat(3, 64px);
    column-gap: 2rem;
    .form-group {
      &:nth-of-type(3) {
        @include setGrid(1, 7, 2, 3);
      }
      &:nth-of-type(4) {
        @include setGrid(7, 13, 2, 3);
      }
      &:nth-of-type(5) {
        @include setGrid(1, 5, 3, 4);
      }
      &:nth-of-type(6) {
        @include setGrid(5, 13, 3, 4);
      }
    }
  }
}
</style>
