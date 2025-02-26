import axios from 'axios'
import { useAuthStore } from '../store/authStore'

export const refreshAccessToken = async (): Promise<string | null> => {
  const refreshToken = useAuthStore.getState().refreshToken
  if (!refreshToken) {
    useAuthStore.getState().clearTokens()
    return null
  }

  try {
    const response = await axios.post('https://www.kuchat.site/auth/refresh-token', {
      refreshToken,
    })
    const { accessToken, refreshToken: newRefreshToken } = response.data

    useAuthStore.getState().setTokens(accessToken, newRefreshToken)
    return accessToken
  } catch (error) {
    console.error('토큰 갱신 실패:', error)
    alert('세션이 만료되었습니다. 다시 로그인해주세요.')
    useAuthStore.getState().clearTokens()
    window.location.href = 'https://www.kuchat.site/login'
    return null
  }
}
