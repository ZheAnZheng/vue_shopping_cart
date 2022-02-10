export default {
  namespaced: true,
  state() {
    return {
      currentStep: 0,
      steps: ["address", "delivery", "payment"],
      formData: {
        title: "",
        name: "",
        phone: "",
        email: "",
        state: "",
        address: "",
        freight: 500,
        owner: "",
        cardNumber: "",
        expire: "",
        CCV: "",
      },
    };
  },
  getters: {
    currentStep(state) {
      return state.currentStep;
    },
    currentForm(state) {
      return state.steps[state.currentStep];
    },
    formData(state){
      return state.formData;
    }
  },
  mutations: {
    setCurrentStep(state, payload) {
      if (payload === "next" && state.currentStep<2) {
        state.currentStep++;
      } else if(payload=== 'prev' && state.currentStep>0){
        state.currentStep--;
      }
    },
    setFormData(state,payload){
      
      state.formData={
        ...state.formData,
        ...payload
      }
    }
  },
  actions: {
    controllStep(context, payload) {
      context.commit("setCurrentStep", payload);
    },
    setFormData(context, payload){
      console.log(payload)
      context.commit("setFormData",payload);
    }
  },
};
