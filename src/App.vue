<template>
  <div id="app">
    <Header @handleToggleTheme='handleToggleTheme'/>
    <router-view/>
    <Footer/>
  </div>
</template>
<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
export default {
  name:'app',
  components:{
    Header,
    Footer
  },
  data(){
    return{
      currentTheme:'light'
    }
  },
  methods:{
    handleToggleTheme(){
     
      if(this.currentTheme==='light'){
        this.currentTheme='dark'
      }else{
        this.currentTheme='light'
      }
      
      document.documentElement.setAttribute("data-theme", this.currentTheme);
     
    }
  }
}
</script>
<style lang="scss" >
@import "assets/scss/color.scss";
@import "assets/scss/reset.scss";
html{
   font-family: 'Noto Sans TC', sans-serif;
   font-size:16px;
}

body {
  background: var(--primary-bg-color);
  width: 100%;
  &::-webkit-scrollbar{
  width: 0;
  }
}

</style>