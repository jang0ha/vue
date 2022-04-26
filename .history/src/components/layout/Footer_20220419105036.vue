<template>
    <div id="footer-block">
        <footer>
            <div class="bg-dark text-white">
                <div class="container p-5">
                    <div class="row row-0">
                        <div class="col-3">
                                <router-link to="/">
                                    <img src="../../assets/images/logo.svg" alt="로고이미지" class="logo">
                                </router-link>
                        </div>
                        <div class="col-9">
                            <ul class="d-flex">
                                <li><a href="">개인정보 처리방침</a></li>
                                <li class="ml-3"><a href="">이용약관</a></li>
                            </ul>
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
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<style>
footer .logo{width:150px;}
ul li{list-style: none;}


/* ------------------------------------------------------------ */
.nav-item a{padding: 0 20px; text-decoration: none; color:#787878; font-weight:bold;}
.nav-item a:hover{color:#fff;}
.router-link-active{ color:#fff!important;}
.navbar-brand{
    width:150px;
    height:46px;
}
</style>

<script>
export default {
    name : 'footer-nav',//컴포넌트 이름 
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