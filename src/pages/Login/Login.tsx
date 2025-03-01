import { useEffect, useState } from 'react'
import Splash from './Splash'
import KUchat_Logo from '../../assets/images/KUchat_logo.svg'
import GoogleImg from '../../assets/images/Login_Google_img.svg'
import { css } from '@emotion/react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore'
import axios from 'axios'

const Login = () => {
  const [showSplash, setShowSplash] = useState(true)
  const navigate = useNavigate()
  const setTokens = useAuthStore((state) => state.setTokens)

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  const handleGoogleLogin = async () => {
    try {
      const response = await axios.get('https://www.kuchat.site/oauth2/authorization/google')
      if (response.data.responseStatus.code === 1000) {
        const { accessToken, refreshToken } = response.data
        setTokens(accessToken, refreshToken)
        navigate('/')
      }
    } catch (error) {
      console.error('구글 로그인 처리 중 오류 발생:', error)
    }
  }

  return showSplash ? (
    <Splash />
  ) : (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        padding-top: 30vh;
        box-sizing: border-box;
        align-items: center;
        background-color: #fff;
        width: 100vw;
        height: 100vh;
        font-weight: 600;
        font-size: 36px;
        color: #046b40;
        font-family: 'Baloo Da 2', cursive;
      `}
    >
      <img src={KUchat_Logo} alt='KU chat logo' />
      <div
        css={css`
          margin-top: 2vh;
        `}
      >
        KU chat
      </div>
      <button
        css={css`
          display: flex;
          gap: 4px;
          border: 0;
          padding: 0.8em 4.8em;
          justify-content: center;
          align-items: center;
          margin-top: 4vh;
        `}
        onClick={handleGoogleLogin}
      >
        <img src={GoogleImg} alt='Google logo' />
        <div>Start with Google</div>
      </button>
    </div>
  )
}

export default Login
