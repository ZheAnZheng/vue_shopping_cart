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