//顯示處理過的價錢
export const priceFilter = {
  filters: {
    priceDisplay(val) {
      if (val < 1) {
        return "免費";
      } else {
        return `$${val}`;
      }
    },
  },
};

//將modal顯示金錢相關的做處理
export const modalFilter = {
  filters: {
    textFilter(val) {
      if (typeof val === "number") {
        return `${val}元`;
      } else {
        return val;
      }
    },
  },
};
//處理表單正確性的mixins
export const formValidChecker = {
  computed: {
    isChecked() {
      return this.$store.getters["checkout/isChecked"];
    },
  },
};
