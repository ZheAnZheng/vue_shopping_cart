<template>
  <div class="modalBack" v-show="isModalOpen">
    <div class="modal">
      <div class="container">
        <div class="content" v-for="item in formData" :key="item.name">
          <div class="content_title">{{ item.name }}:</div>
          <div class="content_value">{{ item.value | textFilter }}</div>
        </div>
        <button class="modalBtn" @click="closeModal">確認</button>
      </div>
    </div>
  </div>
</template>

<script>
import { modalFilter } from "../utils/mixins.js";
export default {
  mixins: [modalFilter],
  data() {
    return {
      formData: {
        title: {
          name: "稱謂",
          value: "1",
        },
        name: {
          name: "名稱",
          value: "1",
        },
        phone: {
          name: "電話",
          value: "1",
        },
        email: {
          name: "信箱",
          value: "1",
        },
        state: {
          name: "城市",
          value: "1",
        },
        address: {
          name: "地址",
          value: "",
        },
        freight: {
          name: "運費",
          value: 500,
        },
        owner: {
          name: "持有人",
          value: "",
        },
        cardNumber: {
          name: "卡號",
          value: "",
        },
        expire: {
          name: "效期",
          value: "",
        },
        CCV: {
          name: "CCV",
          value: "",
        },
        total: {
          name: "總金額",
          value: "",
        },
      },
    };
  },
  methods: {
    closeModal() {
      this.$store.dispatch("toggleModal");
    },
    //將Modal所需資料載入formData
    loadModalState() {
      const Data = this.$store.getters["checkout/formData"];
      for (let name in this.formData) {
        this.formData[name].value = Data[name];
      }
    },
  },
  computed: {
    isModalOpen() {
      return this.$store.getters["modalSwitch"];
    },
  },
  watch: {
    //每一次Modal打開時都重新載入資料，確保資料一致
    isModalOpen() {
      this.loadModalState();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/extend.scss";
.modalBack {
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999999;
  height: 100%;
  width: 100%;

  .modal {
    background: var(--primary-bg-color);
    width: 70%;
    max-width: 500px;
    height: 50%;
    border-radius: 7px;
  }
  .container {
    display: flex;
    padding: 0 20px;

    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    height: 100%;
  }
  .content {
    display: flex;
    width: 100%;
    color: var(--primary-text-color);
    &:last-of-type {
      margin-bottom: 35px;
    }
  }
  .content_title {
    flex: 0 0 30%;
  }
  .content_value {
    flex: 0 0 50%;
  }
  .modalBtn {
    @extend %flex-align-center;
    justify-content: center;
    height: 46px;
    width: 100%;
    background: var(--button-next-color);
    border-radius: 10px;
    color: #ffffff;
  }
}
</style>
