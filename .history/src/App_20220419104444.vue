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
       min-height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
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