import request from '@/utils/request'

// 查询短信验证码列表
export function listVerifycode(query) {
  return request({
    url: '/verifycode/verifycode/list',
    method: 'get',
    params: query
  })
}

// 查询短信验证码详细
export function getVerifycode(verId) {
  return request({
    url: '/verifycode/verifycode/' + verId,
    method: 'get'
  })
}

// 新增短信验证码
export function addVerifycode(data) {
  return request({
    url: '/verifycode/verifycode',
    method: 'post',
    data: data
  })
}

// 修改短信验证码
export function updateVerifycode(data) {
  return request({
    url: '/verifycode/verifycode',
    method: 'put',
    data: data
  })
}

// 删除短信验证码
export function delVerifycode(verId) {
  return request({
    url: '/verifycode/verifycode/' + verId,
    method: 'delete'
  })
}

// 导出短信验证码
export function exportVerifycode(query) {
  return request({
    url: '/verifycode/verifycode/export',
    method: 'get',
    params: query
  })
}