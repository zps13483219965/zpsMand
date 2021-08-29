/*
 * @Author: your name
 * @Date: 2021-08-27 16:09:35
 * @LastEditTime: 2021-08-28 15:13:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zps每时每刻\zpsMand\zpsapp\src\utils\api.js
 */

import service from './request'
//  定义请求方法 ,然后导出
// 获取验证码 (封装版)
export function smsCode(arg) {
    return service({
        url: '/smsCode',
        data: arg,
        method: 'post'
    })
}
// 登录
export function login(arg) {
    return service({
        url: '/login',
        data: arg,
        method: 'post',
    })
}
// Tabbar

export function tarBar(arg) {
    return service({
        url: '/nav/bottom',
        data: arg,
        method: 'get',
    })
}
// 轮播图(空数据)

export function banNer(arg) {
    return service({
        url: '/banner',
        data: arg,
        method: 'get',
    })
}
// 九宫格（空数据）
export function Gird(arg) {
    return service({
        url: '/nav',
        data: arg,
        method: 'get',
    })
}
// 首页数据

export function appIndex(arg) {
    return service({
        url: '/recommend/appIndex',
        data: arg,
        method: 'get',
    })
}