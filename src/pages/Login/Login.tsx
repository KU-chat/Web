import { useEffect, useState } from 'react'

import Splash from './Splash'
import KUchat_Logo from '../../assets/images/KUchat_logo.svg'
import GoogleImg from '../../assets/images/Login_Google_img.svg'
import { css } from '@emotion/react'

const Login = () => {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  const handleGoogleLogin = () => {
    const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID
    const redirectUri = 'https://kuchat.netlify.app/login/callback'
    const scope = encodeURIComponent('email profile openid')
    const authUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}&access_type=offline`

    window.location.href = authUrl
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
          cursor: pointer;
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
