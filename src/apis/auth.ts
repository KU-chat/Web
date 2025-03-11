import axios from 'axios'

export const refreshAccessToken = async (): Promise<boolean> => {
  try {
    await axios.post('https://www.kuchat.site/auth/refresh-token', {}, { withCredentials: true })
    console.log('access token 갱신 성공')
    return true
  } catch (error) {
    console.error('토큰 갱신 실패:', error)
    alert('세션이 만료되었습니다. 다시 로그인해주세요.')

    window.location.href = 'https://www.kuchat.site/login'
    return false
  }
}
