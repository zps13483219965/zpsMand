/*
 * @Author: your name
 * @Date: 2021-08-26 11:37:04
 * @LastEditTime: 2021-08-26 11:41:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \每时每刻\app\src\config\index.js
 */
// 根据环境引入不同配置 process.env.VUE_APP_ENV
const environment = process.env.VUE_APP_ENV || "production"
const config = require('./env.' + environment)
module.exports = config