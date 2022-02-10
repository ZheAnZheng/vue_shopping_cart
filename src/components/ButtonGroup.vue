<template>
<div>
  <div class="button-wrapper-mobile" v-if='mode==="mobile"'>
    <button class="pre-button "  :class='{disable : currentStep===0}' @click="handlePrevStep">
      <span v-html="leftArrowIcon"> </span>
      上一步
    </button>
    <button class="next-button" @click='handleNextStep'>
      下一步
      <span v-html="rightArrowIcon"> </span>
    </button>
  </div>

  <div class="button-wrapper-computer" v-else>
    <button class="pre-button " :class='{disable : currentStep===0}' @click="handlePrevStep">
      <span v-html="leftArrowIcon" > </span>
      上一步
    </button>
    <button class="next-button" @click='handleNextStep'>
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
    currentStep:{
      type:Number,
      required:true
    }
  },
  data() {
    return {
      rightArrowIcon: RIGHT_ARROW,
      leftArrowIcon: LEFT_ARROW,
    }
  },
  methods:{
    handleNextStep(){
      this.$emit('clickNextStep')
      
    },
    handlePrevStep(){
      this.$emit('clickPrevStep')
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
