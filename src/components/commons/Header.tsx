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
        justify-content: space-between;
        width: 100%;
        padding: 10px 16px;
      `}
    >
      <h3
        css={css`
          font-size: 20px;
          font-weight: bold;
          margin: 0;
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
          `}
        >
          <img
            src={rightButton}
            alt='settings'
            css={css`
              width: 24px;
              height: 24px;
            `}
          />
        </button>
      )}
    </div>
  )
}

export default Header
