import axios from 'axios'

const request = axios.create({ // 创建axios实例
  baseURL: 'http://ttapi.research.itcast.cn/' // 基础路径
})

export default request
