import axios from 'axios'
import { useAuthStore } from '../store/authStore'
import { isTokenExpired } from '../utils/authUtils'
import { refreshAccessToken } from './auth'
const api = axios.create({
  baseURL: 'https://www.kuchat.site',
})

api.interceptors.request.use(async (config) => {
  let accessToken = useAuthStore.getState().accessToken

  if (isTokenExpired(accessToken) && !config.url?.includes('/auth/refresh')) {
    const newAccessToken = await refreshAccessToken()
    if (newAccessToken) {
      accessToken = newAccessToken
    }
  }

  if (accessToken && !config.url?.includes('/member/signup')) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }

  return config
})

export default api
