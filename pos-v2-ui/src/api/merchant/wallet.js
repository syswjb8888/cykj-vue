import request from '@/utils/request'

// 查询商户钱包列表
export function listWallet(query) {
  return request({
    url: '/merchant/wallet/list',
    method: 'get',
    params: query
  })
}

// 查询商户钱包详细
export function getWallet(walletId) {
  return request({
    url: '/merchant/wallet/' + walletId,
    method: 'get'
  })
}

// 新增商户钱包
export function addWallet(data) {
  return request({
    url: '/merchant/wallet',
    method: 'post',
    data: data
  })
}

// 修改商户钱包
export function updateWallet(data) {
  return request({
    url: '/merchant/wallet',
    method: 'put',
    data: data
  })
}

// 删除商户钱包
export function delWallet(walletId) {
  return request({
    url: '/merchant/wallet/' + walletId,
    method: 'delete'
  })
}

// 导出商户钱包
export function exportWallet(query) {
  return request({
    url: '/merchant/wallet/export',
    method: 'get',
    params: query
  })
}