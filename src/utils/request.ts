/*
 * @Title:
 * @Description: axios封装
 * @author: wangming
 * @Create on: 2020-06-24 09:54:05
 * @ModifyBrief: wangming
 * @LastEditTime: 2020-06-24 10:33:04
 */

import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from "axios";

/* baseURL 按实际项目来定义 */
const baseURL = process.env.VUE_APP_URL;

/* 创建axios实例 */
const service: AxiosInstance  = axios.create({
  baseURL,
  timeout: 15000, // 请求超时时间
});
const err = (error: any) => {
  if (error.response) {
    // 针对不同状态码做相应处理
    // const data = error.response.data
  }
  return Promise.reject(error);
};
/** 请求拦截器 */
service.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = localStorage.getItem("ACCESS_TOKEN");
  if (token) {
    config.headers["Access-Token"] = token; // 让每个请求携带自定义 token 请根据实际情况自行修改
  }
  return config;
}, err);

/**响应拦截器 */
service.interceptors.response.use((response: AxiosResponse) => {
  return response.data;
}, err);

export default service;
