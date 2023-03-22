import axios from "axios";
import { message } from 'ant-design-vue'
const instance = axios.create({
  baseURL: 'http://10.11.72.58:3000/',
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' },
});

instance.interceptors.request.use(function(config) {
  config.headers.setAuthorization(localStorage.getItem('token'))
  return config
})

instance.interceptors.response.use(function ({data}) {
  
  
  if (data.code != 200) {
    message.error(data.msg)
    return Promise.reject()
  } else {
    return data.data
  }
})
export interface LoginInfo {
  username: string;
  password: string;
}


function loginReq<R = any>(data: LoginInfo): Promise<R> {
  return instance.post('/user/login', data)
}

function registerReq<R = any>(data: LoginInfo): Promise<R> {
  return instance.post('/user/register', data)
}


export {
  loginReq,
  registerReq
}

