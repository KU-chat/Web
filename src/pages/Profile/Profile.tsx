import { Row, Col } from '../../components/commons/Flex'
import settingImg from '../../assets/images/User_Profile_Setting.svg'
import Header from '../../components/commons/Header'
import { flagImages } from '../../constants/flags'
import { useProfile } from '../../apis/profile/useProfile'

const Profile = () => {
  const { profile, isLoading, error } = useProfile()

  if (isLoading) return <p>로딩 화면</p>
  if (error) return <p>{error.message || 'message 안잡히는 오류'}</p>
  if (!profile) return <p>데이터 없음</p>

  return (
    <Col>
      <Header title='나의 프로필' isRightButton rightButton={settingImg} />
      <Row>
        <div style={{ position: 'relative', marginRight: '10px' }}>
          <img
            src={profile.profileImg || 'https://via.placeholder.com/72'}
            alt='프로필 이미지'
            style={{ borderRadius: '50%', width: '72px', height: '72px' }}
          />
          {profile.hometown && flagImages[profile.hometown] && (
            <img
              src={flagImages[profile.hometown]}
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
            <span>{profile.name || '이름 없음'}</span>
            {profile.gender === '남성' ? '♂' : '♀'}
            <span>{profile.age || '나이 미입력'}</span>
          </Row>
          <div>{profile.plusId || '플러스 ID 없음'}</div>
          <div>{profile.department || '학과 정보 없음'}</div>
          <Row>
            <span>🌐 선호언어:</span>
            <span>{profile.firstLanguage || '미입력'}</span>
            <span>{profile.secondLanguage || '미입력'}</span>
          </Row>
        </Col>
      </Row>

      <textarea
        placeholder='자기소개를 입력하세요.'
        value={profile.aboutMe || ''}
        readOnly
        style={{
          width: '100%',
          minHeight: '80px',
          marginTop: '10px',
          padding: '8px',
          borderRadius: '8px',
          border: '1px solid #ddd',
        }}
      />

      <button
        style={{
          marginTop: '10px',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '8px',
          backgroundColor: '#046b40',
          color: '#fff',
          cursor: 'pointer',
          fontSize: '16px',
        }}
      >
        ✏️ 프로필 수정하기
      </button>
    </Col>
  )
}

export default Profile
