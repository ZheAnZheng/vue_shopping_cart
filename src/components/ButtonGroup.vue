<template>
<div>
  <div class="button-wrapper-mobile" v-if='mode==="mobile"'>
    <button class="pre-button " :class='{disable : currentStep <1}' @click="handleStep('prev')">
      <span v-html="leftArrowIcon" > </span>
      上一步
    </button>
    <button v-if="isFinalStep" class="next-button" @click="openModal"> 
        確認下單
    </button>
    
    <button v-else class="next-button" @click="handleStep('next')" > 
        下一步
        <span v-html="rightArrowIcon"> </span>
    </button>
  </div>

  <div class="button-wrapper-computer" v-else>
    <button class="pre-button " :class='{disable : currentStep <1}' @click="handleStep('prev')">
      <span v-html="leftArrowIcon" > </span>
      上一步
    </button>
    <button v-if="isFinalStep" class="next-button" @click="openModal"> 
        確認下單
    </button>
    
    <button v-else class="next-button" @click="handleStep('next')" > 
        下一步
        <span v-html="rightArrowIcon"> </span>
    </button>
   
  </div>
  </div>
</template>
<script>
import { LEFT_ARROW, RIGHT_ARROW } from "../assets/Constants.js";
export default {
  props:{
    mode:{
      type:String,
      required:true
    },
  },
  created(){
    this.loadStep()
  },
  data() {
    return {
      rightArrowIcon: RIGHT_ARROW,
      leftArrowIcon: LEFT_ARROW,
    }
  },
  computed:{
    currentStep(){
      return this.$store.getters['checkout/currentStep'];
    },
    nextStep(){
      return this.$store.getters['checkout/nextForm'];
    },
    prevStep(){
      return this.$store.getters['checkout/prevForm']
    },
    isFinalStep(){
      return this.currentStep===2
    }
  },
  watch:{
    currentStep(val){
      this.saveStep(val)
    }
  },
  methods:{
    handleStep(action){
      if(action==='next'){
        this.$router.push({name:this.nextStep})
      }else{
        this.$router.push({name:this.prevStep})
      }
      this.$store.dispatch('checkout/controllStep',action) 
    },
    openModal(){
      this.$store.dispatch('toggleModal')
    },
    saveStep(step){
      localStorage.setItem('currentStep',step)
    },
    loadStep(){
      const localStorageStepData=localStorage.getItem('currentStep');
      if(localStorageStepData){
        this.$store.dispatch('checkout/setCurrentStep',parseInt(localStorageStepData))
      }
    }

  }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/extend.scss";

.button-wrapper-computer {
  @extend %button-style;
  display: none;
  margin: 1.4rem 0 0 0;
  padding: unset;
  .pre-button {
    &.disable {
      visibility: hidden;
    }
  }
  
}

//mobile
.button-wrapper-mobile {
  @extend %button-style;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .pre-button {
    flex: 3 0 72px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    &.disable {
      display: none;
    }
  }
  .next-button {
    flex: 1 0 30%;
  }
}
@media (min-width: 1000px) {
  .button-wrapper-computer {
    display: flex;
    justify-content:space-between;
    align-items: center;
    border: none;

    .pre-button {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex: 0 0 90px;
    }
    .next-button {
      flex: 0 0 30%;
    }
  }
  .button-wrapper-mobile {
    display: none;
  }
}
</style>
