/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react'
import Splash from './Splash'
import KUchat_Logo from '../../assets/images/KUchat_logo.svg'
import GoogleImg from '../../assets/images/Login_Google_img.svg'

const Login = () => {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 300000)
    return () => clearTimeout(timer)
  }, [])

  const handleClick = () => {
    window.location.href = 'https://www.kuchat.site/oauth2/authorization/google'
  }

  return showSplash ? (
    <Splash />
  ) : (
    <div>
      <div>
        <img src={KUchat_Logo} alt='KU chat logo' />
        <div>KU chat</div>
        <button onClick={handleClick}>
          <img src={GoogleImg} alt='Google logo' />
          <div>Start with Google</div>
        </button>
      </div>
    </div>
  )
}

export default Login
