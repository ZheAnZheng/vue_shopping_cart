<template>
  <div id="app">
    <Modal />
    <Header />
    <Checkout />
    <Footer />
  </div>
</template>
<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Modal from "./components/Modal.vue";
import Checkout from "./views/Checkout.vue";
export default {
  name: "app",
  components: {
    Header,
    Footer,
    Modal,
    Checkout,
  },
  created() {
    this.loadTheme();
  },
  computed: {
    currentTheme() {
      return this.$store.getters["currentTheme"];
    },
  },
  methods: {
    setThemeColor(color) {
      document.documentElement.setAttribute("data-theme", color);
    },
    loadTheme() {
      const localStorageThemeData = localStorage.getItem("theme");
      if (localStorageThemeData) {
        this.$store.dispatch("setTheme", localStorageThemeData);
      }
    },
  },
  watch: {
    currentTheme(val) {
      this.setThemeColor(val);
    },
  },
};
</script>
<style lang="scss">
@import "assets/scss/color.scss";
@import "assets/scss/reset.scss";
html {
  font-family: "Noto Sans TC", sans-serif;
  font-size: 16px;
  height: 100%;
}

body {
  background: var(--primary-bg-color);
  height: 100%;
  &::-webkit-scrollbar {
    width: 0;
  }
}
#app {
  position: relative;
  height: 100%;
}
</style>
