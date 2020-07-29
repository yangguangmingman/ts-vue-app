<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ count }}</h1>
    <button @click="AddClick">点击</button>
    <button @click="resetClick">重置</button>
    <h1>{{ combine }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch, Emit } from "vue-property-decorator";

@Component({
  name: "HelloWorld"
})
export default class extends Vue {
  @Prop()
  private msg!: string;

  private count = 1;

  get combine() {
    return this.msg + this.count;
  }

  @Watch("count")
  LogCount(num: number) {
    console.log("count", num);
  }

  @Emit("reset")
  resetClick() {
    this.count = 0;
    return this.count;
  }

  AddClick() {
    this.count += 1;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
</style>
