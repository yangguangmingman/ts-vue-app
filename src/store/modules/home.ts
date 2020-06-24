/**
 * @Description: home状态管理
 * @ModifyBrief: wangming
 * @author: wangming
 * @Create on: 2020-06-23 09:40:55
 * @LastEditTime: Do not edit
 * @param {type}
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

interface HomeI {
  num: number;
}

@Module({
  dynamic: true,
  namespaced: true,
  name: "home",
  store,
})
class Home extends VuexModule implements HomeI {
  // state 演示
  public num = 0;

  // getters演示
  public get numMultiplyBy2(): number {
    return this.num * 2;
  }

  // mutation演示
  @Mutation
  private [types.SET_NUM](num: number) {
    this.num = num;
  }

  // action演示
  @Action({ commit: types.SET_NUM, rawError: true })
  public anyncFunc() {
    return 10;
  }
}

export const HomeModule = getModule(Home);
