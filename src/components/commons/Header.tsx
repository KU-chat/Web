import { css } from '@emotion/react'

interface HeaderProps {
  title: string
  isRightButton?: boolean
  rightButton?: string
  buttonClick?: () => void
}

const Header = ({ title, isRightButton = false, rightButton, buttonClick }: HeaderProps) => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 10px 16px;
        box-sizing: border-box;
        margin-top: 12px;
      `}
    >
      <h3
        css={css`
          font-size: 20px;
          font-weight: 500;
        `}
      >
        {title}
      </h3>
      {isRightButton && rightButton && (
        <button
          onClick={buttonClick}
          css={css`
            background: none;
            border: none;
            cursor: pointer;
            padding: 0;
            display: flex;
            align-items: center;
            position: absolute;
            right: 5%;
          `}
        >
          <img
            src={rightButton}
            alt='setting Img'
            css={css`
              width: 32px;
              height: 32px;
            `}
          />
        </button>
      )}
    </div>
  )
}

export default Header
