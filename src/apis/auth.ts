import axios from 'axios'

// ✅ `access_token`을 쿠키에서 가져오는 함수
export const getAccessTokenFromCookie = (): string | null => {
  const cookies = document.cookie.split('; ') // 모든 쿠키를 배열로 분리
  console.log(cookies)
  const tokenCookie = cookies.find((row) => row.startsWith('accessToken=')) // access_token 찾기

  return tokenCookie ? tokenCookie.split('=')[1] : null // 값만 반환
}

// ✅ `refresh_token`을 사용하여 새로운 `access_token`을 가져오는 함수
export const refreshAccessToken = async (): Promise<void> => {
  try {
    // ✅ 쿠키에서 새 액세스 토큰을 받을 때만 `withCredentials: true` 사용
    await axios.post('https://www.kuchat.site/auth/refresh-token', {}, { withCredentials: true })
  } catch (error) {
    console.error('토큰 갱신 실패:', error)
    alert('세션이 만료되었습니다. 다시 로그인해주세요.')

    window.location.href = 'https://www.kuchat.site/login'
  }
}
