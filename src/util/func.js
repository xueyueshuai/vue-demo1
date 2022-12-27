// import {Notification} from 'element-ui'
// import copyToClipboard from "copy-to-clipboard";
import router from '../router'

export const showErrorMsg = (title, msg) => {
  window.alert('err:' + title + ',' + msg)
  // Notification({
  //   title,
  //   message: msg,
  //   type: 'error'
  // })
}
export const showSuccessMsg = (title, msg, options = {}) => {
  window.alert('success:' + title + ',' + msg)
  // Notification({
  //   title,
  //   message: msg,
  //   type: 'success',
  //   ...options
  // })
}

export const getToken = () => {
  return localStorage.getItem('xzd-token')
}
export const setToken = (token) => {
  localStorage.setItem('xzd-token', token)
}

export const loginSuccess = (token) => {
  setTimeout(() => {
    setToken(token)
    router.push('/')
    showSuccessMsg('提示', '登录成功')
  }, 500)
}
export const logoutSuccess = () => {
  setToken('')
  // store.dispatch('user/logout')
  router.push('/login')
  // resetRouter()
  showSuccessMsg('提示', '退出登录成功')
}


export const rand = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
