import http from '@/request'

export function getRecommandList(data) {
  return http.post('/work/static/recommendList', data)
}
