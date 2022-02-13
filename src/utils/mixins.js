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


export const modalFilter={
  filters:{
    textFilter(val){
      if(val===''){
        return '未填寫'
      }else{
        return val
      }
    }
  }
}
export const formValidChecker={
  computed:{
    isChecked(){
      return this.$store.getters['checkout/isChecked']
    }
  }
 
}