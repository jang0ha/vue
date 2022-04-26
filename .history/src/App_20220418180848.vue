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
import HeaderCss-css from"./assets/css/header.css";
export default {
    name:"App",
    components:{
        Header,
        HeaderCss,
    }
}
</script>