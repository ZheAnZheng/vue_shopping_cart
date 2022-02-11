<template>
  <div class="checkout">
    <h2>付款資訊</h2>
    <form class="checkout-card">
      <div class="form-group">
        <label name="owner" id="owner">持卡人姓名</label>
        <input type="text" for="owner" placeholder="John Doe" v-model="paymentData.owner"/>
      </div>
      <div class="form-group">
        <label name="card-number" id="cardNumber">卡號</label>
        <input type="text" for="cardNumber" placeholder="1111 2222 3333 4444" v-model="paymentData.cardNumber" />
      </div>
      <div class="form-group">
        <label name="expire-number" for="expire">有效期限</label>
        <input type="text"  id="expire" placeholder="MM/YY"  v-model="paymentData.expire"/>
      </div>
      <div class="form-group">
        <label name="CCV" id="CCV">CVC/CCV</label>
        <input type="text" for="CCV" placeholder="123" v-model="paymentData.CCV"/>
      </div>
    </form>
  </div>
</template>
<script>
export default{
  created(){
    this.loadPaymentData()
  },
  data(){
    return{
      paymentData:{
        owner:'',
        cardNumber:'',
        expire:'',
        CCV:''
      }
    }
  },
  methods:{
    changePaymentData(paymentData){
      this.$store.dispatch('checkout/setFormData',paymentData)
    },
    savePaymentData(){
      this.$store.dispatch('checkout/saveFormData')
    },
    loadPaymentData(){
      const data=this.$store.getters['checkout/formData'];
      for(let i in this.paymentData){
      this.paymentData[i]=data[i]
    }
    }
  },
  watch:{
    paymentData:{
      deep:true,
      handler:function(val){
        this.changePaymentData(val)
        this.savePaymentData()
      }
    }
  }
}
</script>
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
      color:var(--primary-text-color);
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
    border-bottom: 1px solid var(--line-color);
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
