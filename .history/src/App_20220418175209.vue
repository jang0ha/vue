<template>
   <div id="app">
       <Header />
       <div id="content" class="content">
           <router-view></router-view>
       </div>
   </div>
</template>

<script>
import H eader from"./components/layout/Header.vue";
export default {
    name:"App",
    components:{
        Header,
    }
}
</script>