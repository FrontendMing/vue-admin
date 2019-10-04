import http from '@/request'

export function getQrcodeList(params, data) {
  return http.post(`/work/store/getStoreList?${params}`, data)
}
