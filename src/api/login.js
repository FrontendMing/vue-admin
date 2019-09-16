import http from '@/request'

export function login(data) {
  return http.post('/user/login', data)
}
