import request from '@/utils/request'

// 查询分润结算信息列表
export function listSettle(query) {
  return request({
    url: '/profit/settle/list',
    method: 'get',
    params: query
  })
}

// 查询分润结算信息详细
export function getSettle(settId) {
  return request({
    url: '/profit/settle/' + settId,
    method: 'get'
  })
}

// 新增分润结算信息
export function addSettle(data) {
  return request({
    url: '/profit/settle',
    method: 'post',
    data: data
  })
}

// 修改分润结算信息
export function updateSettle(data) {
  return request({
    url: '/profit/settle',
    method: 'put',
    data: data
  })
}

// 删除分润结算信息
export function delSettle(settId) {
  return request({
    url: '/profit/settle/' + settId,
    method: 'delete'
  })
}

// 导出分润结算信息
export function exportSettle(query) {
  return request({
    url: '/profit/settle/export',
    method: 'get',
    params: query
  })
}
export function profitCaculate(caculateYear,caculateMonth) {
  return request({
    url: '/profit/settle/profitCaculate?caculateYear='+caculateYear+'&caculateMonth='+caculateMonth,
    method: 'post',
    data:{'caculateYear':caculateYear,'caculateMonth':caculateMonth}
  })
}
export function settlePayment(settId) {
  return request({
    url: '/profit/settle/payment',
    method: 'post',
    data: settId
  })
}
export function batchSettlePayment(settIds) {
  return request({
    url: '/profit/settle/batchPayment',
    method: 'post',
    data: settIds
  })
}
