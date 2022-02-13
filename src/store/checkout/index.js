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
        total:0
      },
      isChecked:false
    };
  },
  getters: {
    currentStep(state) {
      return state.currentStep;
    },
    nextForm(state) {
      if (state.currentStep < 2) {
        return state.steps[state.currentStep + 1];
      } else {
        return "payment";
      }
    },
    prevForm(state) {
      if (state.currentStep > 1) {
        return state.steps[state.currentStep - 1];
      } else {
        return "address";
      }
    },
    currentForm(state) {
      return state.steps[state.currentStep];
    },
    formData(state) {
      return state.formData;
    },
    isChecked(state){
      return state.isChecked;
    }
  },
  mutations: {
    setCurrentStep(state, payload) {
      state.currentStep = payload;
    },
    setFormData(state, payload) {
      state.formData = {
        ...state.formData,
        ...payload,
      };
    },
    saveFormData(state) {
      const data = JSON.stringify(state.formData);
      localStorage.setItem("formData", data);
    },
    setChecked(state,payload){
      state.isChecked=payload
    }
  },
  actions: {
    controllStep(context, payload) {
      let step = context.getters.currentStep;
      if (payload === "next" && step < 2) {
        step++;
      } else if (payload === "prev" && step > 0) {
        step--;
      }
      context.commit("setCurrentStep", step);
    },
    setFormData(context, payload) {
      context.commit("setFormData", payload);
    },
    setCurrentStep(context, payload) {
      context.commit("setCurrentStep", payload);
    },
    saveFormData(context) {
      
      context.commit("saveFormData");
    },
    setChecked(context,payload){
      context.commit("setChecked",payload);
    }
  },
};
