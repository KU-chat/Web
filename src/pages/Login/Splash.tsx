import { css } from '@emotion/react'
import KUchat_Logo from '../../assets/images/KUchat_logo.svg'

const Splash = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        padding-top: 30vh;
        box-sizing: border-box;
        align-items: center;
        background-color: #046b40;
        width: 100vw;
        height: 100vh;
        font-weight: 600;
        font-size: 36px;
        color: #fff;
        font-family: 'Baloo Da 2', cursive;
      `}
    >
      <img
        css={css`
          width: 160px;
          height: 160px;
        `}
        src={KUchat_Logo}
      ></img>
      <div>KU chat</div>
    </div>
  )
}

export default Splash
