import request from '@/utils/request'

// 查询分润规则制订列表
export function listProfitRule(query) {
  return request({
    url: '/profit/profitRule/list',
    method: 'get',
    params: query
  })
}

// 查询分润规则制订详细
export function getProfitRule(profitId) {
  return request({
    url: '/profit/profitRule/' + profitId,
    method: 'get'
  })
}

// 新增分润规则制订
export function addProfitRule(data) {
  return request({
    url: '/profit/profitRule',
    method: 'post',
    data: data
  })
}

// 修改分润规则制订
export function updateProfitRule(data) {
  return request({
    url: '/profit/profitRule',
    method: 'put',
    data: data
  })
}

// 删除分润规则制订
export function delProfitRule(profitId) {
  return request({
    url: '/profit/profitRule/' + profitId,
    method: 'delete'
  })
}

// 导出分润规则制订
export function exportProfitRule(query) {
  return request({
    url: '/profit/profitRule/export',
    method: 'get',
    params: query
  })
}