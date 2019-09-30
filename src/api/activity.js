import http from '@/request'

export function getActivityList(pager, data) {
  return http.post(`/work/activity/getList?${pager}`, data)
}

export function addActivity(data){
  return http.post('/work/activity/addActivity', data)
}