<template>
    <h1>hello, {{title}}</h1>

    <div>
        <div>{{htmlString}}</div>
        <div v-html="htmlString"></div>

        <br><br><br><br>

        <label for=""><input type="checkbox" name="" id="" v-model="checked" value="서울">서울</label>
        <label for=""><input type="checkbox" name="" id="" v-model="checked" value="부산">부산</label>
        <label for=""><input type="checkbox" name="" id="" v-model="checked" value="제주">제주</label>
        <br>
        <span>체크한 지역 {{checked}}</span>
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