import request from '@/utils/request'

// 查询报件小微商户信息列表
export function listMicro(query) {
  return request({
    url: '/merchant/micro/list',
    method: 'get',
    params: query
  })
}

// 查询报件小微商户信息详细
export function getMicro(microId) {
  return request({
    url: '/merchant/micro/' + microId,
    method: 'get'
  })
}

// 新增报件小微商户信息
export function addMicro(data) {
  return request({
    url: '/merchant/micro',
    method: 'post',
    data: data
  })
}

// 修改报件小微商户信息
export function updateMicro(data) {
  return request({
    url: '/merchant/micro',
    method: 'put',
    data: data
  })
}

// 删除报件小微商户信息
export function delMicro(microId) {
  return request({
    url: '/merchant/micro/' + microId,
    method: 'delete'
  })
}

// 导出报件小微商户信息
export function exportMicro(query) {
  return request({
    url: '/merchant/micro/export',
    method: 'get',
    params: query
  })
}