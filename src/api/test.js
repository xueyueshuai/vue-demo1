import request from "../util/request";

export  function test12(data){
  return request({
    method: "post",
    url: '/api/v1_0_0.atest/test12',
    data,
  });
}

export  function test13(data){
  return request({
    method: "post",
    url: '/api/v1_0_0.atest/test13',
    data,
  });
}

