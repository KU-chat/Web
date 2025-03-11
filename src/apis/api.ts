import axios from 'axios'
import { refreshAccessToken } from './auth'

const api = axios.create({
  baseURL: 'https://www.kuchat.site',
  withCredentials: true,
})

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      const refreshed = await refreshAccessToken()

      if (refreshed) {
        return api(originalRequest)
      }
    }

    return Promise.reject(error)
  },
)

export default api
