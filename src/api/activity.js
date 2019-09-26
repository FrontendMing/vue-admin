import http from '@/request'

export function getActivityList(data) {
  return http.post('/work/activity/getList', data)
}

export function addActivity(data){
  return http.post('/work/activity/addActivity', data)
}