<template>
  <div>
    <h2 class="you">{{message}}</h2>
    <Bpp/>
  </div>
</template>
<script>
import Bpp from './Bpp.vue'
  export default{
    name:'App',
    data(){
      return {
        message:"要多与与不同职业，不同层次的人交流"
      }
    },
    components:{
      Bpp
    }
  }
</script>
<style scoped>
  .you{
    color: brown;
  }
</style>