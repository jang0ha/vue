<template>
   <div id="app">
       <Header />
       <div id="content" class="content">
           <router-view></router-view>
       </div>
       <Footer />
   </div>
</template>

<style>
 #app{
    display: flex;
    flex-flow: column wrap;
 }
 #app > * {
     flex:1;
 }
</style>

<script>
import Header from"./components/layout/Header.vue";
import Footer from"./components/layout/Footer.vue";

export default {
    name:"App",
    components:{
        Header,
        Footer,
    }
}
</script>