/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

interface SignupInputBoxProps {
  type: 'text' | 'toggle'
  placeholder?: string
  toggleOption?: string[]
  title?: string
  onChange: (value: string) => void
}

const boxStyle = css`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin: 2vw 7vw 0 7vw;
  width: 86vw;
  box-sizing: border-box;
  font-size: 16px;
`

const SignupInputBox = (props: SignupInputBoxProps) => {
  const { type, placeholder, toggleOption, onChange, title } = props
  return (
    <>
      {title && (
        <div
          css={css`
            font-size: 12px;
            margin: 3em 0 0 8vw;
          `}
        >
          {title}
        </div>
      )}
      {type === 'text' && (
        <input
          type='text'
          placeholder={placeholder}
          css={boxStyle}
          onChange={(e) => onChange(e.target.value)}
        ></input>
      )}
      {type === 'toggle' && toggleOption && (
        <select css={boxStyle} onChange={(e) => onChange(e.target.value)}>
          {toggleOption.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
    </>
  )
}
export default SignupInputBox
