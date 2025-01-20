/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

interface SignupConfirmButtonProps {
  text: string
  onClick: () => void
  disabled?: boolean
}

const SignupConfirmButton = (props: SignupConfirmButtonProps) => {
  const { text, onClick, disabled } = props

  return (
    <button
      onClick={onClick}
      css={css`
        padding: 0.8em;
        border-radius: 6px;
        border: 1px solid #ccc;
        margin: 2vw 7vw 0 7vw;
        width: 86vw;
        box-sizing: border-box;
        font-size: 16px;
        background-color: ${disabled ? '#ccc' : '#046b40'};
        color: #fff;
        cursor: ${disabled ? 'not-allowed' : 'pointer'};
        display: flex;
        position: fixed;
        bottom: 4vh;
        justify-content: center;
        opacity: ${disabled ? 0.6 : 1};
      `}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default SignupConfirmButton
