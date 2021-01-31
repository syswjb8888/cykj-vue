import request from '@/utils/request'

// 查询交易记录列表
export function listRecords(query) {
  return request({
    url: '/transaction/records/list',
    method: 'get',
    params: query
  })
}

// 查询交易记录详细
export function getRecords(transId) {
  return request({
    url: '/transaction/records/' + transId,
    method: 'get'
  })
}

// 新增交易记录
export function addRecords(data) {
  return request({
    url: '/transaction/records',
    method: 'post',
    data: data
  })
}

// 修改交易记录
export function updateRecords(data) {
  return request({
    url: '/transaction/records',
    method: 'put',
    data: data
  })
}

// 删除交易记录
export function delRecords(transId) {
  return request({
    url: '/transaction/records/' + transId,
    method: 'delete'
  })
}

// 导出交易记录
export function exportRecords(query) {
  return request({
    url: '/transaction/records/export',
    method: 'get',
    params: query
  })
}