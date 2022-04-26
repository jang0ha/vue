<template>
   <div id="app">
       <Header />
       <div id="content" class="content">
           <router-view></router-view>
       </div>
   </div>
</template>

<script>
import Header from"./components/layout/Header.vue";
import Header-css from"./components/layout/Header.vue";
export default {
    name:"App",
    components:{
        Header,
        HeaderCss,
    }
}
</script>