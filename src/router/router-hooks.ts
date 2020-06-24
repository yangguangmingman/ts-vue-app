/*
 * @Title: 
 * @Description: 路由钩子
 * @author: wangming
 * @Create on: 2020-06-22 17:38:35
 * @ModifyBrief: wangming
 * @LastEditTime: 2020-06-23 09:32:07
 */ 
import Component from "vue-class-component";
// or
// import { Component } from 'vue-property-decorator';

Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate'
]);

