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
        <br>
        <span>체크한 지역 {{picked}}</span>
        <br><br><br><br><br><br>
        <input type="text" name="" id="" v-model="textValue">
        <button type="button" style="" v-bind:disabled="textValue==''">저장</button>


        <div class="container" v-bind:class="{'active' : isActive, 'fail': hasError}">
            클래스 바인딩!!
        </div>
    </div>
</template>
<script>
export default {
    data(){ //html과 자바스크립트 코드에서 사용할 데이터 변수 선언
        return {
            title : "데이터 바인딩~!@!@!@!@!@!@ ",
            htmlString:'<p style="color: red;">나는 문어~ </p>',
            checked: [],
            picked:[],
            textValue :"",
            isActive:"true",
            hasError:"false"
        };
    },
   
}
</script>

<style>
    button{background:#111; color:#fff; outline:0;}
    button:disabled{background:#ededed;}
    .active{
        background:#ededed; color:blue; font-size:30px; font-weight: bold;
    }
    .fail { 
        background:red; color:white; font-size:30px;font-weight: bold;
    }
</style>