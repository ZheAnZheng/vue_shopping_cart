<template>
  <div>
    <div class="button-wrapper-mobile" v-if="mode === 'mobile'">
      <button
        class="pre-button"
        :class="{ disable: currentStep < 1 }"
        @click="handleStep('prev')"
      >
        <span v-html="leftArrowIcon"> </span>
        上一步
      </button>
      <button
        v-if="isFinalStep"
        class="next-button"
        @click="checkValidAndOpenModal"
      >
        確認下單
      </button>

      <button v-else class="next-button" @click="handleStep('next')">
        下一步
        <span v-html="rightArrowIcon"> </span>
      </button>
    </div>

    <div class="button-wrapper-computer" v-else>
      <button
        class="pre-button"
        :class="{ disable: currentStep < 1 }"
        @click="handleStep('prev')"
      >
        <span v-html="leftArrowIcon"> </span>
        上一步
      </button>
      <button
        v-if="isFinalStep"
        class="next-button"
        @click="checkValidAndOpenModal"
      >
        確認下單
      </button>

      <button v-else class="next-button" @click="handleStep('next')">
        下一步
        <span v-html="rightArrowIcon"> </span>
      </button>
    </div>
  </div>
</template>
<script>
import { LEFT_ARROW, RIGHT_ARROW } from "../assets/Constants.js";
//根據目前表單給出需要檢查之項目
const checkItemManager = {
  addressItems: ["title", "name", "phone", "email", "state", "address"],
  deliveryItems: ["freight"],
  paymentItems: ["owner", "cardNumber", "expire", "CCV"],
  getNeedCheckItem: function (currentForm) {
    if (currentForm === "address") {
      return this.addressItems;
    } else if (currentForm === "delivery") {
      return this.deliveryItems;
    } else {
      return this.paymentItems;
    }
  },
};
export default {
  props: {
    mode: {
      type: String,
      required: true,
    },
  },
  created() {
    this.loadStep();
  },
  data() {
    return {
      rightArrowIcon: RIGHT_ARROW,
      leftArrowIcon: LEFT_ARROW,
    };
  },
  computed: {
    currentStep() {
      return this.$store.getters["checkout/currentStep"];
    },
    nextStep() {
      return this.$store.getters["checkout/nextForm"];
    },
    prevStep() {
      return this.$store.getters["checkout/prevForm"];
    },
    isFinalStep() {
      return this.currentStep === 2;
    },
    isFormValid() {
      return this.checkCurrentFormVailid();
    },
  },
  watch: {
    currentStep(val) {
      this.saveStep(val);
    },
  },
  methods: {
    //檢查Form填寫正確才能進到下一個表單，有誤則顯示錯誤input
    handleStep(action) {
      if (this.isFormValid) {
        this.hideInputHint();
        this.moveToFormPage(action);
        this.$store.dispatch("checkout/controllStep", action);
      } else {
        this.showInputHint();
        alert("form is inValid,please compelete form and try a again!");
      }
    },
    moveToFormPage(action) {
      if (action === "next") {
        this.$router.push({ name: this.nextStep });
      } else {
        this.$router.push({ name: this.prevStep });
      }
    },
    //顯示錯誤input提示
    showInputHint() {
      this.$store.dispatch("checkout/setChecked", true);
    },
    hideInputHint() {
      this.$store.dispatch("checkout/setChecked", false);
    },
    //檢查表單是否正確，正確開啟Modal顯示總覽，錯誤則顯示錯誤欄位
    checkValidAndOpenModal() {
      if (this.isFormValid) {
        this.hideInputHint();
        this.$store.dispatch("toggleModal");
      } else {
        this.showInputHint();
        alert("form is inValid,please compelete form and try a again!");
      }
    },
    saveStep(step) {
      localStorage.setItem("currentStep", step);
    },
    loadStep() {
      const localStorageStepData = localStorage.getItem("currentStep");
      if (localStorageStepData) {
        this.$store.dispatch(
          "checkout/setCurrentStep",
          parseInt(localStorageStepData)
        );
      }
    },
    //檢查表單是否正確
    checkCurrentFormVailid() {
      const formData = this.$store.getters["checkout/formData"];
      const currentForm = this.$store.getters["checkout/currentForm"];
      const needCheckItems = checkItemManager.getNeedCheckItem(currentForm);
      let isValid = true;
      needCheckItems.forEach((itemName) => {
        if (formData[`${itemName}`] === "") {
          isValid = false;
        }
      });
      return isValid;
    },
  },
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
    justify-content: space-between;
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
