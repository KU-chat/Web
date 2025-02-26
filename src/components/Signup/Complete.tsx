/** @jsxImportSource @emotion/react */
import Lottie from 'lottie-react'
import lottieCheck from '../../assets/lotties/lottieCheck.json'
import SignupConfirmButton from './SignupConfirmButton'
import { css } from '@emotion/react'
import { useNavigate } from 'react-router-dom'
import { signup } from '../../apis/signup/signup'

const Complete = ({ signupData }: { signupData: any }) => {
  let accessToken = ''
  let refreshToken = ''
  const handleSignupSubmit = async () => {
    try {
      const response = await signup(signupData)
      accessToken = response.accessToken
      refreshToken = response.refreshToken
      navigate('/')
    } catch (error: any) {
      alert(error.message)
    }
  }
  const navigate = useNavigate()
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
      `}
    >
      <Lottie
        animationData={lottieCheck}
        loop={false}
        css={css`
          margin-top: 4em;
        `}
      />
      <span
        css={css`
          font-size: 24px;
          font-weight: 700;
        `}
      >
        회원가입을 완료했어요!
      </span>
      <SignupConfirmButton text='KU chat 시작하기' onClick={handleSignupSubmit} />
    </div>
  )
}

export default Complete
