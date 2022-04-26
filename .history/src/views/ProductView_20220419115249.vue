<template>
    <div id="content" class="content">
        <div class="container">
            <h1>{{ title}}</h1>
            <h4>{{subtitle}}</h4>

            <input type="text" v-model="input1" name="" id="">
        </div>
    </div>
</template>
<script>
export default {
    data() { //html과 자바스크립트 코드에서 사용할 데이터 변수 선언
        return {
            title: "영하네 상품",
            subtitle: "서브 타이틀이에요",
            input1:"",
        };
    },
}
</script>

<style>
</style>