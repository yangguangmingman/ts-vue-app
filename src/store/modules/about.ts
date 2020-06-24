/*
 * @Title:
 * @Description: about状态管理
 * @author: wangming
 * @Create on: 2020-06-23 09:40:34
 * @ModifyBrief: wangming
 * @LastEditTime: 2020-06-23 15:36:49
 */

import store from "@/store/store";
import {
  VuexModule,
  Module,
  Mutation,
  Action,
  getModule,
} from "vuex-module-decorators";
import * as types from "@/store/mutation-types";

interface AboutI {
  num: number;
}

@Module({
  dynamic: true,
  namespaced: true,
  name: "about",
  store,
})
class About extends VuexModule implements AboutI {
  // state 演示
  public num = 0;

  // getters演示
  public get numMultiplyBy2(): number {
    return this.num * 2;
  }

  // mutation演示
  @Mutation
  public [types.SET_NUM](num: number) {
    this.num = num;
  }

  // action演示
  @Action({ commit: types.SET_NUM, rawError: true })
  public anyncFunc() {
    return 10;
  }
}

export const AboutModule = getModule(About);
