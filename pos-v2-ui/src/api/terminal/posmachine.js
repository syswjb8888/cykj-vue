import request from '@/utils/request'

// 查询终端设备信息列表
export function listPosmachine(query) {
  return request({
    url: '/terminal/posmachine/list',
    method: 'get',
    params: query
  })
}

// 查询终端设备信息详细
export function getPosmachine(posId) {
  return request({
    url: '/terminal/posmachine/' + posId,
    method: 'get'
  })
}

// 新增终端设备信息
export function addPosmachine(data) {
  return request({
    url: '/terminal/posmachine',
    method: 'post',
    data: data
  })
}

// 修改终端设备信息
export function updatePosmachine(data) {
  return request({
    url: '/terminal/posmachine',
    method: 'put',
    data: data
  })
}

// 删除终端设备信息
export function delPosmachine(posId) {
  return request({
    url: '/terminal/posmachine/' + posId,
    method: 'delete'
  })
}

// 导出终端设备信息
export function exportPosmachine(query) {
  return request({
    url: '/terminal/posmachine/export',
    method: 'get',
    params: query
  })
}
export function allocatePosMachine(data) {
  return request({
    url: '/terminal/posmachine/allocation',
    method: 'post',
    data:data
  })
}
export function adjustPosMachine(posIds) {
  return request({
    url: '/terminal/posmachine/adjustion',
    method: 'post',
    data: posIds
  })
}
