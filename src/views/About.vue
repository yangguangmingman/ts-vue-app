<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{ getNum }}</h1>
    <h1>{{ getNum2 }}</h1>
    <button @click="AddClick">点击</button>
    <button @click="resetClick">重置</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Route } from "vue-router";
import { AboutModule } from "@/store/index";

@Component
export default class About extends Vue {
  // 参数类型的定义，使用Route，
  // next是函数，所以可以直接使用Function对象,
  // 或者是next: () => void
  beforeRouteEnter(to: Route, from: Route, next: Function) {
    console.log("前往" + to.path + "页面");
    next();
  }
  get getNum() {
    return AboutModule.num;
  }
  get getNum2() {
    return AboutModule.numMultiplyBy2;
  }
  AddClick() {
    const num = this.getNum + 1;
    AboutModule.SET_NUM(num);
  }
  resetClick() {
    AboutModule.anyncFunc();
  }
  mounted() {
    enum young {
      boy = 1,
      girl
    }
    console.log(young);
  }
}
</script>
