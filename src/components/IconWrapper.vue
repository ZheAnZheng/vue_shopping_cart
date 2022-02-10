<template>
  <div class="icon-wrapper">
    <div
      v-for="icon in icons"
      :key="icon.id"
      :class="icon.name"
      v-html="icon.image"
    ></div>
    <div v-if='currentTheme ==="light"' v-html='moonIcon.image' @click="toggleTheme"></div>
    <div v-else v-html='sunIcon.image' @click="toggleTheme"></div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import { SEARCH_ICON, CART_ICON, MOON_ICON , SUN_ICON } from "../assets/Constants.js";
export default {
  props:{
    currentTheme:{
      type:String,
      required:true
    }
  },
  data() {
    return {
      icons: [
        {
          id: uuidv4(),
          name: "search",
          image: SEARCH_ICON,
        },
        {
          id: uuidv4(),
          name: "cart",
          image: CART_ICON,
        }
      ],
      
      moonIcon:{
          id: uuidv4(),
          name: "themeToggle_moon",
          image: MOON_ICON
          
        },
      sunIcon:{
          id: uuidv4(),
          name: "themeToggle_sun",
          image: SUN_ICON
        }
      
    };
  },

  methods:{
    toggleTheme(){
    
      this.$emit('toggleTheme')
    }
  }
};
</script>
<style lang="scss">
.icon-wrapper {
  display: flex;
  justify-content: space-evenly;
  z-index: 20;
  margin-top: -2rem;
  width: 70%;
  cursor: pointer;
  transform-origin: top;
  transform: scale(0, 1);
  transition: opacity 0.1s ease-in-out;
  opacity: 0;

  .search path,
  .cart path {
    fill: var(--primary-text-color);
  }
  .moon path {
    stroke: var(--primary-text-color);
  }
}
@media screen and (min-width: 550px) {
  .icon-wrapper {
    grid-area: icon;
    display: flex;
    justify-content: flex-end;
    column-gap: 1rem;
    margin: 0;
    width: 100%;
    opacity: 1;
    transform: unset;
  }
}
</style>
