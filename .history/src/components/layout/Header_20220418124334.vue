<template>
    <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">NavBar</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-item href="#">Link</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>

            <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
                <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    </div>
</template>
<script>
export default {
    name : '',//컴포넌트 이름 
    components: {}, //다른 컴포넌트 사용 시 컴포넌트를 import하고, 배열로 저장
    data(){ //html과 자바스크립트 코드에서 사용할 데이터 변수 선언
        return {
            sampleData: ''
        };
    },
    setup(){}, // 컴포지션Api
    created(){}, //컴포넌트가 생성되면 실행
    mounted() {}, //templete에 정의된 html 코드가 랜더링 된 후 실행 
    unmounted() {}, //unmount가 완료 된 후 실행
    methods: {}, //컴포넌트 내에서 사용할 메소드 정의
}
</script>