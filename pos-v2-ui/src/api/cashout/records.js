import request from '@/utils/request'

// 查询提现记录列表
export function listRecords(query) {
  return request({
    url: '/cashout/records/list',
    method: 'get',
    params: query
  })
}

// 查询提现记录详细
export function getRecords(cashoutId) {
  return request({
    url: '/cashout/records/' + cashoutId,
    method: 'get'
  })
}

// 新增提现记录
export function addRecords(data) {
  return request({
    url: '/cashout/records',
    method: 'post',
    data: data
  })
}

// 修改提现记录
export function updateRecords(data) {
  return request({
    url: '/cashout/records',
    method: 'put',
    data: data
  })
}

// 删除提现记录
export function delRecords(cashoutId) {
  return request({
    url: '/cashout/records/' + cashoutId,
    method: 'delete'
  })
}

// 导出提现记录
export function exportRecords(query) {
  return request({
    url: '/cashout/records/export',
    method: 'get',
    params: query
  })
}