import { Row, Col } from '../../components/commons/Flex'
import settingImg from '../../assets/images/User_Profile_Setting.svg'
import { css } from '@emotion/react'

const Profile = () => {
  return (
    <Col>
      <Row>
        <div
          css={css`
            background-color: #22f;
            font-size: 50px;
          `}
        >
          dddd
        </div>
        <img src={settingImg} alt='settingImg' />
        <Col>쿠챗</Col>
      </Row>
      <input type='text' />
      <button>d</button>
    </Col>
  )
}

export default Profile
