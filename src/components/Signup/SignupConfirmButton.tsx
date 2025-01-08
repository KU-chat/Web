/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

interface SignupConfirmButtonProps {
  text: string
  onclick: () => void
}

const SignupConfirmButton = (props: SignupConfirmButtonProps) => {
  const { text } = props

  return (
    <button
      css={css`
        padding: 8px;
        border-radius: 4px;
        border: 1px solid #ccc;
        margin: 2vw 7vw 0 7vw;
        width: 86vw;
        box-sizing: border-box;
        font-size: 16px;
        position: fixed;
        bottom: 0;
        background-color: #fff;
        color: black;
        cursor: pointer;
      `}
    >
      {text}
    </button>
  )
}

export default SignupConfirmButton
