<template>
    <div id="content" class="content">
        <div class="container">
            <h1>{{ title}}</h1>
            <h4>{{subtitle}}</h4>

            <div class="row">
                <div class="col">
                    <input type="text" v-model="productSearch" name="" id="" class="form-control">
                </div>
                <div class="col-auto">
                    <button type="button" class="btn btn-dark" placeholder="상품명을 입력하세요" v-bind:disabled="productSearch ==''" @click="getData">겟 데이타검색</button>
                        <button type="button" class="btn btn-dark" placeholder="상품명을 입력하세요" v-bind:disabled="productSearch ==''" @click="setData">셋 데이타 검색</button>
                </div>
            </div>

            <h5 class="mt-3">'{{productSearch}}' 결과 입니다.</h5>
        </div>
    </div>
</template>
<script>
export default {
    data() { //html과 자바스크립트 코드에서 사용할 데이터 변수 선언
        return {
            title: "영하네 상품",
            subtitle: "서브 타이틀이에요",
            productSearch:"",
            productSearchView:""
        };
    },

    methods: {
      getData(){
          alert(this.productSearch)
      },
      setData(){
          this.productSearch = "";
      }
    },
}
</script>

<style>
</style>