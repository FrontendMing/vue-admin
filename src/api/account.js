import http from '@/request'

export function getAccountList(params, data) {
  return http.post(`/sys/user/list?${params}`, data)
}

export function addAccount(data) {
  return http.post(`/sys/user/save`, data)
}

export function updateAccount(data) {
  return http.post(`/sys/user/update`, data)
}

export function delAccount(data){
  return http.post(`/sys/user/delete`, data)
}
