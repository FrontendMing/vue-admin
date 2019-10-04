import http from '@/request'

export function getOutletsList(params, data) {
  return http.post(`/work/store/getStoreList?${params}&sysUserId=''`, data)
}

export function addOutlets(data) {
  return http.post(`/work/store/addStore`, data)
}
