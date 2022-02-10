<template>
    <header>
      <div class="container" >
        <input id="hambuger" class="hambuger-toggle" type="checkbox" />
        <label for="hambuger" class="hambuger-box">
          <span class="hambuger"></span>
        </label>
        <!-- logo -->
        <div class="header-title">
          <div class="logo" >
            <svg
              width="136"
              height="24"
              viewBox="0 0 136 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              v-html="logoImg"
            ></svg>
            
          </div>
        </div>
         <!-- navbar -->
        <Navbar/>
        <!-- icon -->
        <IconWrapper />
      </div>
    </header>
</template>

<script>
import Navbar from './Navbar.vue'
import IconWrapper from './IconWrapper.vue'
import { ALPHA_LOGO } from '../assets/Constants.js'
export default {
  components:{
    Navbar,
    IconWrapper,
  },
  data(){
    return {
      logoImg:ALPHA_LOGO
      
    }
  }
}
</script>

<style lang="scss" >

@import '../assets/scss/mixins.scss';



header {
  position: fixed;
  z-index: 9999;
  width: 100%;
  height: 64px;
  background: var(--primary-bg-color);
  .container {
    position: relative;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .header-title {
    width: 100%;
    height: 56px;
    background-color: var(--primary-bg-color);
    .logo svg {
      width: 50%;
      height: 56px;
      path{
        @include setLogoColor();
      }
    }
  }
}

.hambuger-toggle {
  display: none;
}

.hambuger-box {
  position: absolute;
  width: 40px;
  height: 40px;
  bottom: 0;
  top: 7px;
  left: 4%;
  cursor: pointer;
  .hambuger,
  .hambuger::after,
  .hambuger::before {
    position: absolute;
    display: block;
    width: 60%;
    height: 4px;
    top: 50%;
    transform: translateY(-50%);
    background-color: var(--primary-text-color);
  }
  .hambuger::after,
  .hambuger::before {
    content: "";
  }
  .hambuger::after {
    width: 70%;
    transform: translateY(6px);
  }
  .hambuger::before {
    width: 120%;
    transform: translateY(-10px);
  }
}
.hambuger-toggle:checked ~ nav {
  transform: scale(1, 1);
}
.hambuger-toggle:checked ~ nav .nav-bar {
  opacity: 1;
  transition: opacity 0.1s ease-in-out 0.3s;
}
.hambuger-toggle:checked ~ .icon-wrapper {
  opacity: 1;
  transform: scale(1,1);
  transition: opacity 0.1s ease-in-out 0.3s;
}

@media screen and (min-width: 550px) {
  header {
    height: 64px;
    
    .container {
      display: grid;
      width: 80%;
      height: 100%;
      grid-template-rows: 60px;
      grid-template-columns: 1fr auto 1fr;
      grid-template-areas: "nav title icon";
      background-color: var(--primary-bg-color);
      .header-title {
        grid-area: title;
      }
      
    }
  }

  .hambuger-box {
    display: none;
  }
}

@media (min-width: 1112px) {
  header {
    .container {
      nav {
        overflow-x: unset;

        .nav-bar {
          column-gap: 2rem;
          li {
            font-size: 1rem;
          }
        }
      }
    }
  }
}
</style>