import { v4 as uuidv4 } from "uuid";
export default {
  namespaced: true,
  state() {
    return {
      products: [
        {
          id: uuidv4(),
          name: "破壞補丁修身牛仔褲",
          image: require("@/assets/broken_jean@2x.png"),
          price: 3999,
          count: 1,
        },
        {
          id: uuidv4(),
          name: "刷色直筒牛仔褲",
          image: require("@/assets/classic_jean@2x.png"),
          price: 1299,
          count: 1,
        },
      ],
    };
  },
  getters: {
    products(state) {
      return state.products;
    },
  },
  mutations: {
    setProduct(state, payload) {
      const id = payload.id;
      state.products = state.products.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: product.count++,
          };
        }else {
          return product;
        }
      });
    },
  },
  actions: {
    changeProduct(context, payload) {
      context.commit("setProduct", payload);
    },
  },
};
