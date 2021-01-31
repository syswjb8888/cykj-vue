import request from '@/utils/request'

// 查询企业商户报件信息列表
export function listEnterprise(query) {
  return request({
    url: '/merchant/enterprise/list',
    method: 'get',
    params: query
  })
}

// 查询企业商户报件信息详细
export function getEnterprise(entId) {
  return request({
    url: '/merchant/enterprise/' + entId,
    method: 'get'
  })
}

// 新增企业商户报件信息
export function addEnterprise(data) {
  return request({
    url: '/merchant/enterprise',
    method: 'post',
    data: data
  })
}

// 修改企业商户报件信息
export function updateEnterprise(data) {
  return request({
    url: '/merchant/enterprise',
    method: 'put',
    data: data
  })
}

// 删除企业商户报件信息
export function delEnterprise(entId) {
  return request({
    url: '/merchant/enterprise/' + entId,
    method: 'delete'
  })
}

// 导出企业商户报件信息
export function exportEnterprise(query) {
  return request({
    url: '/merchant/enterprise/export',
    method: 'get',
    params: query
  })
}