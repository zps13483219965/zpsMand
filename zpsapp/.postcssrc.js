/*
 * @Author: your name
 * @Date: 2021-08-26 16:33:08
 * @LastEditTime: 2021-08-27 20:50:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zps每时每刻\zpsMand\.postcssrc.js
 */
module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 8']
    },
    'postcss-pxtorem': {
      rootValue: 75,
      propList: ['*'],
      selectorBlackList: ['van-']
    }
  }
}