<template>
  <main>
    <section class="checkout-wrapper">
        <Stepper/>
        <AddressForm v-if='currentForm==="address"'/>
        <DeliveryForm v-else-if='currentForm==="delivery"'/>
        <PaymentForm v-else/>
        <ButtonGroup />
    </section>
    <Basket/>
  </main>
</template>

<script>
import Stepper from '../components/Stepper.vue';
import AddressForm from '../components/AddressForm.vue';
import DeliveryForm from '../components/DeliveryForm.vue';
import PaymentForm from '../components/PaymentForm.vue';
import Basket from '../components/Basket.vue';
import ButtonGroup from '../components/ButtonGroup.vue'
export default {
  components:{
      Stepper,
      AddressForm,
      DeliveryForm,
      PaymentForm,
      Basket,
      ButtonGroup
  },
  data(){
      return {
          currentForm:'address'
      }
  },
  computed:{
      
  }
};
</script>

<style lang="scss" scoped>

@mixin setGrid($col_1, $col_2, $row_1, $row_2) {
  grid-column: #{$col_1} / #{$col_2};
  grid-row: #{$row_1} / #{$row_2};
}
@mixin showStepText($num) {
  .step-item {
    @for $i from 1 through $num {
      &:nth-child(#{$i}) .step-text {
        display: block;
      }
    }
  }
}

$mobile-width: 92%;
$website-width: 80%;

main {
  display: flex;
  flex-direction: column;
  width: $mobile-width;
  margin: 0 auto;
  padding-top: 60px;
}
.checkout-wrapper {
  color: var(--primary-text-color);
}
@media (min-width: 450px) {
  main {
    width: $website-width;
  }
}
@media (min-width: 1000px) {
  main {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    padding-top: 10%;
    .checout-wrapper {
      flex: 0 0 60%;

      width: 100%;
    }
    
  }
 
  .checkout-wrapper {
    flex: 0 0 50%;
    width: 100%;
  }
    
}

</style>
