import Vue from 'vue';
import VueRouter, { Route } from 'vue-router';

declare module "*.vue" {
  export default Vue;
}
// 增加的扩展
// 增强扩展vue的类型
declare module 'vue/types/vue' {
  interface Vue {
    $router: VueRouter
    $route: Route
  }
}