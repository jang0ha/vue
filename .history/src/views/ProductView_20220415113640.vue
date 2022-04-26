<template>
    <div>

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