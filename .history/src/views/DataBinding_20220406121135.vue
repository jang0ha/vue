<template>
    <h1>hello, {{title}}</h1>

    <div>
        <div>{{htmlString}}</div>
        <div v-html="htmlString"></div>
    </div>
</template>
<script>
export default {
    data(){ //html과 자바스크립트 코드에서 사용할 데이터 변수 선언
        return {
            title : "World 구먼구먼 ㅎㅎㅎ",
            htmlString:'<p style="color: red;">나는 문어~ </p>'
        };
    },
   
}
</script>