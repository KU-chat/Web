import axios from 'axios'
import { useAuthStore } from '../store/authStore'

const api = axios.create({
  baseURL: 'https://www.kuchat.site',
})

api.interceptors.request.use((config) => {
  const accessToken = useAuthStore.getState().accessToken

  if (accessToken && !config.url?.includes('/member/signup')) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }

  return config
})

export default api
