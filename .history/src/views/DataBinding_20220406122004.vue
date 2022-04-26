<template>
    <h1>hello, {{title}}</h1>

    <div>
        <div>{{htmlString}}</div>
        <div v-html="htmlString"></div>

        <br><br><br><br>

        <label for="1"><input type="checkbox" name="" id="1" v-model="checked" value="서울">서울</label>
        <label for="2"><input type="checkbox" name="" id="2" v-model="checked" value="부산">부산</label>
        <label for="3"><input type="checkbox" name="" id="3" v-model="checked" value="제주">제주</label>
        <br>
        <span>체크한 지역 {{checked}}</span>
          <br><br><br><br>
        <label for="4"><input type="radio" name="" id="4" v-model="picked" value="서울">서울</label>
        <label for="5"><input type="radio" name="" id="5" v-model="picked" value="부산">부산</label>
        <label for="6"><input type="radio" name="" id="6" v-model="picked" value="제주">제주</label>
        <span>체크한 지역 {{picked}}</span>
    </div>
</template>
<script>
export default {
    data(){ //html과 자바스크립트 코드에서 사용할 데이터 변수 선언
        return {
            title : "World 구먼구먼 ㅎㅎㅎ",
            htmlString:'<p style="color: red;">나는 문어~ </p>',
            checked: [],
            picked:[""],
        };
    },
   
}
</script>