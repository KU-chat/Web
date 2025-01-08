/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

interface SignupConfirmButtonProps {
  text: string
  onClick: () => void
}

const SignupConfirmButton = (props: SignupConfirmButtonProps) => {
  const { text, onClick } = props

  return (
    <button
      onClick={onClick}
      css={css`
        padding: 0.8em;
        border-radius: 4px;
        border: 1px solid #ccc;
        margin: 2vw 7vw 0 7vw;
        width: 86vw;
        box-sizing: border-box;
        font-size: 16px;
        background-color: #046b40;
        color: #fff;
        cursor: pointer;
        display: flex;
        position: fixed;
        bottom: 4vh;
        justify-content: center;
      `}
    >
      {text}
    </button>
  )
}

export default SignupConfirmButton
