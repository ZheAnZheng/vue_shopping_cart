<template>
<div class="checkout">
            <h2>運送方式</h2>
            <form class="checkout-deliver">
              <div class="form-group">
                <input name="deliver" type="radio" id="standard" />
                <label for="standard">
                  <div class="checout_radio-text">
                    <p>標準運送</p>
                    <p>免費</p>
                  </div>
                  <p>約3~7個工作天</p>
                </label>
              </div>
              <div class="form-group">
                <input name="deliver" type="radio" id="dhl" />
                <label for="dhl">
                  <div class="checout_radio-text">
                    <p>DHL貨運</p>
                    <p>$500</p>
                  </div>
                  <p>48小時內送達</p>
                </label>
              </div>
            </form>
          </div>
</template>

<style lang='scss' scoped>
.checkout-deliver {
  .form-group {
    display: flex;
    margin-bottom: 24px;
    width: 100%;
    border: 1px solid var(--input-border-mute);
    border-radius: 7px;
    align-items: center;
    &:hover {
      border: 1px solid var(--input-border-color);
    }
  }
  label {
    width: 80%;
    padding: 0.7rem;

    .checout_radio-text {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }

  [type="radio"] {
    display: inline-block;
    margin: 1rem;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    border: 1px solid var(--radio-border-color);
    background: var(--radio-bg-color);
    -webkit-appearance: none;

    &:checked {
      background: #fff;
      box-shadow: inset 0 0 0 5px var(--radio-color);
    }
  }
}
@media (min-width: 1000px) {
    .checkout {
    height: 336px;
    // border-bottom: 1px solid var(--line-color);
  }
    .checkout-deliver {
    label {
      width: 90%;
    }
  }
}
</style>