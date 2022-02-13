<template>
  <section class="shopping-basket">
    <h2 class="basket-title">購物籃</h2>
    <div class="productsCart">
      <div v-for="product in products" :key="product.id" class="basket-product">
        <img class="basket-product-img" :src="product.image" />
        <div class="product-content">
          <h3>{{ product.name }}</h3>
          <div class="product-setting">
            <span
              class="count-btn removeBtn"
              @click="removeCountButton(product)"
            ></span>
            <span class="product-count">{{ product.count }}</span>
            <span
              class="count-btn addBtn"
              @click="addCountButton(product)"
            ></span>
          </div>
          <span class="product-price">${{ calcTotal(product) }}</span>
        </div>
      </div>
    </div>
    <div class="freight">
      <span>運費</span>
      <span>{{ freight | priceDisplay }}</span>
    </div>
    <div class="product-total">
      <span>小計</span>
      <span class="total">${{ allProductsTotal }}</span>
    </div>

    <ButtonGroup :mode="'mobile'" />
  </section>
</template>

<script>
import ButtonGroup from "./ButtonGroup.vue";
import { priceFilter } from "../utils/mixins.js";
export default {
  components: {
    ButtonGroup,
  },
  mixins: [priceFilter],
  created() {
    this.loadProducts();
  },
  computed: {
    products() {
      return this.$store.getters["basket/products"];
    },
    allProductsTotal() {
      const total = this.products.reduce(
        (total, product) => (total += this.calcTotal(product)),
        this.freight
      );
      this.$store.dispatch("checkout/setFormData", { total: total });
      return total;
    },
    freight() {
      return this.$store.getters["checkout/formData"].freight;
    },
  },
  watch: {
    products: {
      deep: true,
      handler: function () {
        this.saveProudct();
      },
    },
  },
  methods: {
    calcTotal(product) {
      return product.count * product.price;
    },

    addCountButton(product) {
      product.count++;
      this.$store.dispatch("basket/changeProduct", product);
    },
    removeCountButton(product) {
      if (product.count > 1) {
        product.count--;
        this.$store.dispatch("basket/changeProduct", product);
        this.saveProudct();
      }
    },
    saveProudct() {
      this.$store.dispatch("basket/saveProduct");
    },
    loadProducts() {
      const localStorageBasketData = JSON.parse(
        localStorage.getItem("basket_item")
      );
      if (localStorageBasketData) {
        this.$store.dispatch("basket/changeProduct", localStorageBasketData);
      }
    },
  },
};
</script>
<style lang="scss">
@import "../assets/scss/extend.scss";
.shopping-basket {
  margin-top: 1.5rem;
  padding: 1rem;
  height: 359px;
  border: 1px solid var(--basket-border-color);
  border-radius: 7px;
  background: var(--basket-bg-color);
  color: var(--primary-text-color);
  .basket-title {
    display: none;
  }
  .basket-product {
    display: flex;
    justify-content: space-between;
    padding-bottom: 1rem;
    &:nth-last-child(3) {
      border-bottom: 1px solid var(--line-color);
    }
  }

  .basket-product-img {
    @extend %product-img-style;
  }
  .product-content {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;

    .product-setting {
      display: flex;
      justify-content: flex-end;

      .count-btn {
        position: relative;
        display: inline-block;
        width: 27px;
        height: 27px;
        border-radius: 50%;
        background: var(--line-color);
        cursor: pointer;
        &:nth-of-type(1) {
          margin-right: 1rem;

          &::after {
            position: absolute;
            content: "-";
            font-size: 1.5rem;
            left: 50%;
            top: 50%;
            transform: translate(-45%, -60%);
          }
        }
        &:nth-of-type(3) {
          margin-left: 1rem;

          &::after {
            position: absolute;
            content: "+";
            font-size: 1.5rem;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -55%);
          }
        }
      }
    }
  }

  .freight {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--line-color);
  }
  .product-total {
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
  }
}
@media (min-width: 1000px) {
  .shopping-basket {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 3.3rem;
    height: 510px;
    flex: 0 0 40%;
    width: 100%;
    color: var(--primary-text-color);
    .basket-title {
      display: block;
      margin-bottom: 16px;
    }
  }
}
</style>
