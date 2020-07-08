/*
 * @Title: 
 * @Description: test接口统一管理
 * @author: wangming
 * @Create on: 2020-06-24 10:14:00
 * @ModifyBrief: wangming
 * @LastEditTime: 2020-06-24 10:17:23
 */ 

import request from "@/utils/request";

interface ApiI {
  getGoodsCategoryList: string
}
const api: ApiI = {
  getGoodsCategoryList: 'category/getGoodsCategoryList',
}

export const getGoodsCategoryList = () => request.get(api.getGoodsCategoryList);
