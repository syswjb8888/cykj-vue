import request from '@/utils/request'

// 查询划拔回调记录列表
export function listRecords(query) {
  return request({
    url: '/operation/records/list',
    method: 'get',
    params: query
  })
}

// 查询划拔回调记录详细
export function getRecords(operId) {
  return request({
    url: '/operation/records/' + operId,
    method: 'get'
  })
}

// 新增划拔回调记录
export function addRecords(data) {
  return request({
    url: '/operation/records',
    method: 'post',
    data: data
  })
}

// 修改划拔回调记录
export function updateRecords(data) {
  return request({
    url: '/operation/records',
    method: 'put',
    data: data
  })
}

// 删除划拔回调记录
export function delRecords(operId) {
  return request({
    url: '/operation/records/' + operId,
    method: 'delete'
  })
}

// 导出划拔回调记录
export function exportRecords(query) {
  return request({
    url: '/operation/records/export',
    method: 'get',
    params: query
  })
}