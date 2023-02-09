module.exports = {
  plugins: {
    'postcss-pxtorem': {
      // 如果是vant的样式，就按照37.5来转换
      // 如果是我们自己的样式，就按照75来转换
      // rootValue支持两种类型:
      // 数字：固定的数值
      // 函数: 可以动态处理返回
      rootValue ({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },
      // rootValue: 37.5,
      propList: ['*']
    }
  }
}
