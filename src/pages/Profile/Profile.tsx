import { Row, Col } from '../../components/commons/Flex'
import settingImg from '../../assets/images/User_Profile_Setting.svg'

import Header from '../../components/commons/Header'
import { flagImages } from '../../constants/flags'
import { useProfile } from '../../apis/profile/useProfile'

const Profile = () => {
  const { profile, isLoading, error } = useProfile()

  if (isLoading) return <p>로딩 중...</p>
  if (error) return <p>에러 발생: {error.message}</p>
  if (!profile) return <p>데이터가 없습니다.</p>

  return (
    <Col>
      <Header title='나의 프로필' isRightButton rightButton={settingImg} />
      <Row>
        <div style={{ position: 'relative', marginRight: '10px' }}>
          <img
            src={profile.profileImg}
            alt='프로필 이미지'
            style={{ borderRadius: '50%', width: '72px', height: '72px' }}
          />
          {profile.hometown && (
            <img
              src={flagImages[profile.hometown] || ''}
              alt='국기'
              style={{
                position: 'absolute',
                bottom: '0',
                left: '20%',
                transform: 'translateX(-50%)',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.3)',
              }}
            />
          )}
        </div>
        <Col>
          <Row>
            <span>{profile.name}</span>
            {profile.gender === '남성' ? '♂' : '♀'}
            <span>{profile.age}</span>
          </Row>
          <div>{profile.plusId}</div>
          <div>{profile.department}</div>
          <Row>
            <span>선호언어</span>
            <span>{profile.firstLanguage}</span>
            <span>{profile.secondLanguage}</span>
          </Row>
        </Col>
      </Row>
      <input
        type='text'
        placeholder='자기소개를 입력하세요.'
        value={profile.aboutMe || ''}
        readOnly
      />
      <button>
        <span>🖊</span> 프로필 수정하기
      </button>
    </Col>
  )
}

export default Profile
