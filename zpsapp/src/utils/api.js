/*
 * @Author: your name
 * @Date: 2021-08-27 16:09:35
 * @LastEditTime: 2021-09-01 20:15:23
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


// 修改密码
export function password(arg) {
    return service({
        url: '/password',
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

// 课程数据

export function showTeachers(arg) {
    return service({
        url: '/teacher/search/attrs?page=1&limit=10&',
        data: arg,
        method: 'get',
    })
}


// 积分明细

export function jf(arg) {
    return service({
        url: '/user/integral/detail?page=1&limit=10&change_type=1&',
        data: arg,
        method: 'get',
    })
}

// 日历日期

export function date(arg) {
    return service({
        url: '/user/integral/signRecord?date',
        data: arg,
        method: 'get',
    })
}
// 课程  1 详情

export function teacherDetail(arg) {
    return service({
        url: '/teacher/'+arg,
        // data: arg,
        method: 'get',
    })
}
// 主讲课程的内容
export function teacherDetailMain(arg) {
    return service({
        url: '/teacher/mainCourse',
        data: arg,
        method: 'post',
    })
}

//少年功夫 课程详情
// 主讲课程的内容
export function courseInfo(urls,arg) {
    return service({
        url: '/courseInfo/'+urls,
        data: arg,
        method: 'get',
    })
}

// 主讲课程的内容
export function courseChapter(arg) {
    return service({
        url: '/courseChapter',
        data: arg,
        method: 'post',
    })
}

// 主讲课程的内容
export function order(arg) {
    return service({
        url: '/order/shopInfo',
        data: arg,
        method: 'post',
    })
}