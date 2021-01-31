import request from '@/utils/request'

// 查询报件商户信息列表
export function listMerchant(query) {
  return request({
    url: '/merchant/merchant/list',
    method: 'get',
    params: query
  })
}

// 查询报件商户信息详细
export function getMerchant(merchId) {
  return request({
    url: '/merchant/merchant/' + merchId,
    method: 'get'
  })
}

// 新增报件商户信息
export function addMerchant(data) {
  return request({
    url: '/merchant/merchant',
    method: 'post',
    data: data
  })
}

// 修改报件商户信息
export function updateMerchant(data) {
  return request({
    url: '/merchant/merchant',
    method: 'put',
    data: data
  })
}

// 删除报件商户信息
export function delMerchant(merchId) {
  return request({
    url: '/merchant/merchant/' + merchId,
    method: 'delete'
  })
}

// 导出报件商户信息
export function exportMerchant(query) {
  return request({
    url: '/merchant/merchant/export',
    method: 'get',
    params: query
  })
}
export function treeselect() {
  return request({
    url: '/merchant/merchant/tree',
    method: 'get'
  })
}
export function getChildMerchantDict(){
   return request({
     url: '/merchant/merchant/dict',
     method: 'get'
   })
}
