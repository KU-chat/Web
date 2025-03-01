import axios from 'axios'
import { refreshAccessToken, getAccessTokenFromCookie } from './auth'

const api = axios.create({
  baseURL: 'https://www.kuchat.site',
})

// ✅ 요청 인터셉터 (쿠키에서 `access_token` 가져와 `Authorization` 헤더 설정)
api.interceptors.request.use(async (config) => {
  try {
    // ✅ `access_token`을 쿠키에서 가져옴
    const accessToken = getAccessTokenFromCookie()

    if (!accessToken) {
      console.warn('access_token이 쿠키에서 발견되지 않았습니다.')
    } else {
      config.headers.Authorization = `Bearer ${accessToken}`
    }

    // ✅ 토큰이 만료되었을 경우 자동 갱신 (쿠키에서 새로운 토큰을 가져옴)
    await refreshAccessToken()
  } catch (error) {
    console.error('토큰 갱신 실패:', error)
  }

  return config
})

export default api
