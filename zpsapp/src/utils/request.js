/*
 * @Author: your name
 * @Date: 2021-08-26 11:43:15
 * @LastEditTime: 2021-09-01 15:46:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \每时每刻\app\src\utils\request.js
 */
import axios from 'axios'
import store from '@/store'
import { Toast } from 'vant'
// 根据环境不同引入不同的api地址
import { baseApi } from '@/config'
const service = axios.create({
    baseURL: baseApi,
    // withCredentials: true,
    timeout: 30000
})
// request请求拦截器
service.interceptors.request.use(
    config => {
        console.log(config);
        // 不传递默认开启loading
        if (!config.hideloading) {
            // loading
            Toast.loading({
                forbidClick: true
            })
        }
        if (store.state.token) {
            config.headers['Authorization'] = "Bearer " + store.state.token
        }
        return config
    },
    error => {
        console.log(error)
        return Promise.reject(error)
        // err === 'canceled' || Message.error(err.errmsg)
        // return    //弹出错误提示信息，这里直接return掉
    }
)
// 响应respose拦截器
service.interceptors.response.use(
    response => {
        Toast.clear() //响应到数据以后 ，清除loading效果
        const res = response.data //打印的数据
        // console.log(res);
        // return Promise.resolve(res)
        if (res.code && res.code !== 200) {
            // 登录超时,重新登录
            if (res.status === 401) {
                store.dispatch('FedLogOut').then(() => {
                    location.reload()
                })
            }
            return Promise.reject(res || 'error')
        } else {
            return Promise.resolve(res)
        }

    },
    error => {
        Toast.clear()
        console.log('err' + error)
        return Promise.reject(error)
    }
)

// 抛出
export default service