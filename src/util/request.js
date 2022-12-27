import axios from 'axios'
import {getToken, logoutSuccess, showErrorMsg as noti} from '../util/func'
import config from '../config'
// import i18n from "@/components/lang";

// ------- start -------------
let getBaseUrl = () => {
  return config.apiHost
}

let showErrorMsg = (data) => {
  noti(data.message, data.description)
}
// ------- end -------------

const myAxiosInstance = axios.create({
  // timeout: 6000,
})

myAxiosInstance.interceptors.request.use(
  requestConfig => {
    requestConfig.baseURL = getBaseUrl()

    let token = getToken()
    if (token) {
      requestConfig.headers['Xzd-Token'] = token;
    }

    //数据导出
    if (requestConfig.data && requestConfig.data.exportExcel == true) {
      requestConfig.responseType = 'blob'
    }

    // return requestConfig; 或 return Promise.resolve(requestConfig);
    return Promise.resolve(requestConfig);
  },
  err => {
    showErrorMsg({
      message: '提示',
      description: 'requestError'
    })
    return Promise.reject(err);
  }
)

myAxiosInstance.interceptors.response.use(
  response => {

    if (response.status < 500) {
      let res = response.data;

      let code = response.headers['xzd-code'] * 1
      let msg = decodeURIComponent(response.headers['xzd-msg'] || '')
      let fileName = response.headers['xzd-file-name'] || ''

      switch (code) {
        case 200:
          if (response.config.data && fileName && response.config.data.includes('"exportExcel":true')) {
            return response
          } else {
            return response.data
          }
          break;

        case 201:
          showErrorMsg({
            message: '提示',
            description: msg || 'systemError',
            style: {
              whiteSpace: "pre-wrap"
            }
          })
          return Promise.reject(res)
          break;

        case 202:
          showErrorMsg({
            message: '提示',
            description: 'invalidToken'
          })
          logoutSuccess()
          return Promise.reject(res)
          break;

        default:
          showErrorMsg({
            message: '提示',
            description: 'codeNotExists'
          })
          return 'serverError'
          break;
      }

    } else {
      showErrorMsg({
        message: '提示',
        description: 'serverResponseError'
      })
    }
  },
  error => {
    showErrorMsg({
      message: '提示',
      description: 'serverResponseError'
    })
    return Promise.reject(error)
  }
)

export default myAxiosInstance