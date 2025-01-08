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
            margin: 7vw;
            width: 16px;
            height: 16px;
          `}
        ></img>
      )}
      <div
        css={css`
          font-size: 24px;
          font-weight: 700;
          margin: 7vw;
        `}
      >
        {title}
      </div>
    </>
  )
}

export default SignupTitle
