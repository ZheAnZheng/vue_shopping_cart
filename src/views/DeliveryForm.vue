<template>
  <div class="checkout">
    <h2>運送方式</h2>
    <form class="checkout-deliver">
      <div
        v-for="delivery in deliverWays"
        :key="delivery.id"
        class="form-group"
      >
        <input
          name="deliver"
          type="radio"
          :id="delivery.formId"
          :checked="delivery.price>0"
          :value="delivery.price"
          v-model="currentPlan"
        />
        <label :for="delivery.formId">
          <div class="checout_radio-text">
            <p>{{ delivery.name }}</p>
            <p>{{ delivery.price | priceDisplay }}</p>
          </div>
          <p>{{ delivery.description }}</p>
        </label>
      </div>
    </form>
  </div>
</template>
<script>
import { v4 as uuidv4 } from "uuid";
import { priceFilter } from '../utils/mixins.js'
export default {
  mixins:[priceFilter],
  created(){
    this.loadPlan()
  },
  data() {
    return {
      deliverWays: [
        {
          id: uuidv4(),
          formId: "standard",
          name: "標準運送",
          price: 500,
          description: "約3~7個工作天",
          default: true,
        },
        {
          id: uuidv4(),
          formId: "DHL",
          name: "DHL貨運",
          price: 0,
          description: "48小時內送達",
        },
      ],
      currentPlan:500
    };
  },
  methods:{
    changePlan(plan){
      this.$store.dispatch('checkout/setFormData',{freight:plan})
    },
    savePlan(){
      this.$store.dispatch('checkout/saveFormData')
    },
    loadPlan(){
      const formData=this.$store.getters['checkout/formData'];
      this.currentPlan=formData.freight
    }
  },
  watch:{
    currentPlan(val){
      this.changePlan(val)
      this.savePlan()
    }
  },
  
};
</script>
<style lang="scss" scoped>
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
    border-bottom: 1px solid var(--line-color);
  }
  .checkout-deliver {
    label {
      width: 90%;
    }
  }
}
</style>
