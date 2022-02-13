<template>
  <div class="step-process">
    <h2>結帳</h2>
    <div class="step-wrapper">
      <div
        class="step-item"
        :class="{ active: currentStep === 0, done: currentStep > 0 }"
      >
        <span class="step-circle"></span>
        <span class="step-text">{{ STEP_ONE }}</span>
      </div>
      <div
        class="step-item"
        :class="{ active: currentStep === 1, done: currentStep > 1 }"
      >
        <span class="step-circle"></span>
        <span class="step-text">{{ STEP_TWO }}</span>
        <span class="connect-line"></span>
      </div>
      <div class="step-item" :class="{ active: currentStep === 2 }">
        <span class="step-circle"></span>
        <span class="step-text">{{ STEP_THREE }}</span>
        <span class="connect-line"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      STEP_ONE: "寄送地址",
      STEP_TWO: "運送方式",
      STEP_THREE: "付款資訊",
    };
  },
  methods: {
    getCurrentStep() {
      return this.$store.getters["checkout/currentStep"];
    },
  },
  computed: {
    currentStep() {
      return this.getCurrentStep();
    },
  },
};
</script>
<style lang="scss">
@import "../assets/scss/mixins.scss";
@import "../assets/scss/extend.scss";

.step-wrapper {
  display: flex;
  margin-top: 24px;
  margin-bottom: 24px;
  justify-content: space-between;

  .step-text {
    display: none;
    color: var(--step-mute-color);
  }
  .step-circle {
    position: relative;
    display: block;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid var(--step-mute-color);
    background-color: var(--step-mute-bg);
    color: var(--step-mute-color);
    &::after {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .step-item {
    @include getStep(3);
    flex: 1;
    position: relative;
    &.active {
      .step-circle {
        color: var(--step-active-color);
        background: var(--step-active-bg);
        border-color: var(--primary-text-color);
      }
      .step-text {
        color: var(--primary-text-color);
      }
      .connect-line {
        background: var(--primary-text-color);
      }
    }
    &.done {
      .step-text {
        color: var(--primary-text-color);
      }
      .step-circle {
        color: var(--step-active-color);
        background: var(--step-active-bg);
        border-color: var(--step-mute-bg);
        &::after {
          content: "\2713";
        }
      }
      .connect-line {
        background: var(--primary-text-color);
      }
    }
    &:nth-of-type(1) {
      @extend %flex-align-center;
    }
    &:nth-of-type(2) {
      @extend %flex-align-center;
      justify-content: center;
      .connect-line {
        left: calc(-80% + 30px);
        right: calc(50% + 30px);
      }
    }
    &:nth-of-type(3) {
      @extend %flex-align-center;
      justify-content: flex-end;
      .connect-line {
        left: calc(-50% + 30px);
        right: calc(15% + 30px);
      }
    }
  }
  .connect-line {
    position: absolute;
    height: 2px;
    top: 16px;
    background-color: var(--step-mute-color);
  }
}
@media (min-width: 1000px) {
  .step-text {
    display: block;
  }
  @include showStepText(3);
  .step-wrapper {
    .step-item:nth-child(2) .connect-line {
      left: calc(-45% + 30px);
      right: calc(80% + 30px);
    }
    .step-item:nth-child(3) .connect-line {
      left: calc(-30% + 30px);
      right: calc(60% + 30px);
    }
  }
}
</style>
