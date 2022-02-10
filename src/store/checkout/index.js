export default {
  namespaced: true,
  state() {
    return {
      currentStep: 0,
      steps: ["address", "delivery", "payment"],
    };
  },
  getters: {
    currentStep(state) {
      return state.currentStep;
    },
    currentForm(state) {
      return state.steps[state.currentStep];
    },
  },
  mutations: {
    setCurrentStep(state, payload) {
      if (payload === "next") {
        state.currentStep++;
      } else {
        state.currentStep--;
      }
    },
  },
  actions: {
    controllStep(context, payload) {
      context.commit("setCurrentStep", payload);
    },
  },
};
