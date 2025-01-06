/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import LeftArrowImg from '../../assets/images/left_arrow.svg'

interface SignupTitleProps {
  title: string
  hasBackButton?: boolean
}

const SignupTitle = ({ title, hasBackButton = true }: SignupTitleProps) => {
  return (
    <>
      {hasBackButton && (
        <img
          src={LeftArrowImg}
          css={css`
            margin: 24px;
            width: 16px;
            height: 16px;
          `}
        ></img>
      )}
      <div
        css={css`
          font-size: 24px;
          font-weight: 700;
          margin: 24px;
        `}
      >
        {title}
      </div>
    </>
  )
}

export default SignupTitle
