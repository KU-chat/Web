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
          'https://www.kuchat.site/auth/google',
          { code },
          { withCredentials: true },
        )

        console.log('로그인 성공:', response.data)
        navigate('/')
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
