<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-link to="/databinding">Data Binindg</router-link>
    <router-link to="/product">Product</router-link>
  </nav> -->

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="#">
        <router-link to="/">
            <img src="../../assets/images/logo.svg" alt="">
        </router-link>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/">
            Home
          </router-link>
        </li>
        <li class="nav-item">
        <router-link to="/about">About</router-link>
        </li>
        <li class="nav-item dropdown">
           <router-link to="/databinding">Data Binindg</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/product">Product</router-link>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="textValue">
        <button class="btn btn-outline-success" type="submit" v-bind:disabled="textValue==''">Search</button>
      </form>
    </div>
  </div>
</nav>
   
  <router-view/>


</template>


<style>
@import "../../assets/css/header.css";
/* .nav-item a{padding: 0 20px; text-decoration: none; color:#787878; font-weight:bold;}
.nav-item a:hover{color:#111;}
.router-link-active{ color:#111!important;}
.navbar-brand{
    width:150px;
    height:46px;
} */
</style>

<script>

export default {
    name : 'header-nav',//컴포넌트 이름 
    components: {}, //다른 컴포넌트 사용 시 컴포넌트를 import하고, 배열로 저장
    data(){ //html과 자바스크립트 코드에서 사용할 데이터 변수 선언
        return {
            textValue: '',
        };
    },
    setup(){}, // 컴포지션Api
    created(){}, //컴포넌트가 생성되면 실행
    mounted() {}, //templete에 정의된 html 코드가 랜더링 된 후 실행 
    unmounted() {}, //unmount가 완료 된 후 실행
    methods: {}, //컴포넌트 내에서 사용할 메소드 정의
}
</script>