<template>
  <div class="checkout">
    <h2>寄送地址</h2>
    <form class="checkout-info">
      <div class="form-group" :class="{ formCheck: isChecked }">
        <label for="title">稱謂</label>
        <div class="select-wrapper">
          <select
            name="title"
            id="title"
            v-model="addressFormData.title"
            required
          >
            <option value="" disabled>請選擇稱謂</option>
            <option
              v-for="title in titles"
              :key="title.id"
              :value="title.value"
            >
              {{ title.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="form-group" :class="{ formCheck: isChecked }">
        <label for="name">姓名</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="請輸入姓名"
          v-model="addressFormData.name"
          required
        />
      </div>
      <div class="form-group" :class="{ formCheck: isChecked }">
        <label name="phone" for="phone">電話</label>
        <input
          type="tel"
          placeholder="請輸入行動電話"
          id="phone"
          v-model="addressFormData.phone"
          required
        />
      </div>
      <div class="form-group" :class="{ formCheck: isChecked }">
        <label for="email">Email</label>
        <input
          name="email"
          type="email"
          id="email"
          placeholder="請輸入電子郵件"
          v-model="addressFormData.email"
          required
        />
      </div>
      <div class="form-group" :class="{ formCheck: isChecked }">
        <label name="state" for="state">縣市</label>
        <div class="select-wrapper">
          <select id="state" v-model="addressFormData.state" required>
            <option value="" disabled>請選擇地點</option>
            <option
              v-for="state in states"
              :key="state.id"
              :value="state.value"
            >
              {{ state.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="form-group" :class="{ formCheck: isChecked }">
        <label name="address" for="address">地址</label>
        <input
          type="text"
          id="address"
          placeholder="請輸入地址"
          v-model="addressFormData.address"
          required
        />
      </div>
    </form>
  </div>
</template>
<script>
import { v4 as uuidv4 } from "uuid";
import { formValidChecker } from "../utils/mixins.js";
export default {
  created() {
    this.loadAddressData();
  },
  mixins: [formValidChecker],
  data() {
    return {
      titles: [
        {
          id: uuidv4(),
          name: "先生",
          value: "sir",
        },
        {
          id: uuidv4(),
          name: "女士",
          value: "miss",
        },
      ],
      states: [
        {
          id: uuidv4(),
          name: "新北",
          value: "New_Taipei",
        },
        {
          id: uuidv4(),
          name: "台北",
          value: "Taipei",
        },
        {
          id: uuidv4(),
          name: "高雄",
          value: "Kaoushuong",
        },
      ],
      addressFormData: {
        title: "",
        name: "",
        phone: "",
        email: "",
        state: "",
        address: "",
      },
    };
  },
  methods: {
    loadAddressData() {
      const FormData = this.$store.getters["checkout/formData"];
      for (let i in this.addressFormData) {
        this.addressFormData[i] = FormData[i];
      }
    },
  },
  watch: {
    //當資料有任何變動都會儲存起來
    addressFormData: {
      deep: true,
      handler: function (val) {
        this.$store.dispatch("checkout/setFormData", val);
        this.$store.dispatch("checkout/saveFormData");
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/mixins.scss";
@import "../assets/scss/extend.scss";
@import "../assets/scss/formCheck.scss";
.checkout-info {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(5, 64px);
  column-gap: 1rem;
  row-gap: 20px;

  h2,
  input {
    color: var(--primary-text-color);
  }
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
