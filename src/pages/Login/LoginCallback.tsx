import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const LoginCallback = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const sendCodeToBackend = async () => {
      const urlParams = new URLSearchParams(window.location.search)
      const code = urlParams.get('code')

      if (!code) {
        console.error('구글 로그인 코드가 없습니다.')
        navigate('/login')
        return
      }

      try {
        const response = await axios.post(
          'https://www.kuchat.site/oauth/google',
          { code },
          { withCredentials: true },
        )
        const guestToken = response.data.guestToken
        console.log(guestToken)
        localStorage.setItem('guestToken', guestToken)

        if (guestToken) {
          console.log('게스트 유저입니다. 회원가입 페이지로 이동')
          localStorage.setItem('guestToken', guestToken)
          navigate('/signup')
        } else {
          console.log('로그인 성공, 홈으로 이동')
          navigate('/profile')
        }
      } catch (error) {
        console.error('구글 로그인 실패:', error)
        navigate('/login')
      }
    }

    sendCodeToBackend()
  }, [navigate])

  return <div>로그인 처리 중...</div>
}

export default LoginCallback
