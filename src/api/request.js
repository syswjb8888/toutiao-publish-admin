/**
 *  基于 axios 封装的请求模块
 */
import axios from "axios"
// 创建axios实例，就是复制一个axios
// 我们通过这个实例去发请求，把需要的配置配置到这个实例中来
const request = axios.create({
  baseURL: "http://ttapo.research.itcast.cn" // 请求的基础路径
});
export default request
