import request from '@/utils/request'

// 查询离用户消息列表
export function listOffline(query) {
  return request({
    url: '/message/offline/list',
    method: 'get',
    params: query
  })
}

// 查询离用户消息详细
export function getOffline(msgId) {
  return request({
    url: '/message/offline/' + msgId,
    method: 'get'
  })
}

// 新增离用户消息
export function addOffline(data) {
  return request({
    url: '/message/offline',
    method: 'post',
    data: data
  })
}

// 修改离用户消息
export function updateOffline(data) {
  return request({
    url: '/message/offline',
    method: 'put',
    data: data
  })
}

// 删除离用户消息
export function delOffline(msgId) {
  return request({
    url: '/message/offline/' + msgId,
    method: 'delete'
  })
}

// 导出离用户消息
export function exportOffline(query) {
  return request({
    url: '/message/offline/export',
    method: 'get',
    params: query
  })
}