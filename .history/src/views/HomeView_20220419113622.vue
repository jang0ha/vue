<template>
    <div id="content" class="content">
        <div class="container">
            <div class="home">
                <img alt="Vue logo" src="../assets/images/logo.png">
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data() {
      return {
          title:"영하네 뷰",
          subtitle:"과연 뷰는 쉽게 될것인가."
      }
  },
}
</script>
