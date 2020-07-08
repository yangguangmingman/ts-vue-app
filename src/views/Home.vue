<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" @reset="resetLog" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "../components/HelloWorld.vue";
import * as TestApi from "../api/test";

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  resetLog(num: number): void {
    console.log("重置：" + num);
  }
  mounted(): void {
    this.testFunc();
  }
  async testFunc(): Promise<void> {
    try {
      const res = await TestApi.getGoodsCategoryList();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
}
</script>
