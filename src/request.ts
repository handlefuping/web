import axios from "axios";
import { message } from 'ant-design-vue'
const instance = axios.create({
  baseURL: 'http://10.11.72.11:3000/',
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' },
});

instance.interceptors.request.use(function (config) {
  try {
    let loginInfo = JSON.parse(localStorage.getItem('loginInfo'))
    config.headers.setAuthorization(loginInfo.token)
  } catch (e) {
    console.log(e);
  }

  console.log(config);

  return config
})

instance.interceptors.response.use(function ({ data }) {


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
function logoutReq<R = any>(): Promise<R> {
  return instance.post('/user/logout')
}

function registerReq<R = any>(data: LoginInfo): Promise<R> {
  return instance.post('/user/register', data)
}

function userInfoReq<R = any>(id: string): Promise<R> {
  return instance.get(`/user/${id}`)
}

function uploadReq<R = any>(data: { media: Blob }): Promise<R> {
  return instance.post('/user/upload', data)
}

export {
  loginReq,
  registerReq,
  userInfoReq,
  uploadReq,
  logoutReq
}

