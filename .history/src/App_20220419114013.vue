<template>
    <div id="app">
        <Header />
        <!-- <Content /> -->
        <Footer />
    </div>
</template>

<style>
@import "./assets/css/layout.css";
</style>

<script>
import Header from"./components/layout/Header.vue";
// import Content from"./components/layout/Content.vue";
import Footer from"./components/layout/Footer.vue";

export default {
    name:"app",
    components:{
        Header,
        // Content,
        Footer,
    }
}
</script>