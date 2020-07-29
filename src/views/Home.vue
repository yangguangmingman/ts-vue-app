<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" @reset="resetLog" />
    <button @click="addData">新增</button>
    <button @click="delData">删除</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "../components/HelloWorld.vue";
import * as TestApi from "../api/test";

interface LocalData {
  key: number;
  value: string;
}

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  data: LocalData[] = [];
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
  addPrimary(conStr: string): void {
    const obj: LocalData = {
      key: this.data.length + 1,
      value: conStr
    };
    this.data.push(obj);
    console.log(this.data);
  }
  deletePrimary(key: number): void {
    const index = this.data.findIndex((el: LocalData) => el.key === key);
    if (index !== -1) {
      this.data.splice(index, 1);
    }
    console.log(this.data);
  }
  addData(): void {
    this.addPrimary("234");
  }
  delData(): void {
    this.deletePrimary(1);
  }
}
</script>
