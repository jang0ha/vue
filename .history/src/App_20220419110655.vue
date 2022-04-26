<template>
    <div id="app">
        <Header />
        <Content />
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
#content{
    flex-grow: 1;
    min-height:calc(100vh - 62px);
}

</style>

<script>
import Header from"./components/layout/Header.vue";
import Content from"./components/layout/Content.vue";
import Footer from"./components/layout/Footer.vue";

export default {
    name:"App",
    components:{
        Header,
        Footer,
    }
}
</script>