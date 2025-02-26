import { css } from '@emotion/react'
import SignupConfirmButton from './SignupConfirmButton'
import SignupTitle from './SignupTitle'

type GenderProps = {
  data: { gender: string }
  updateData: (field: 'gender', value: string) => void
  nextStep: () => void
  prevStep: () => void
}

const buttonContainerStyle = css`
  display: flex;
  justify-content: center;
  gap: 10vw;
  margin: 6vh 0;
`

const buttonStyle = (selected: boolean) => css`
  font-size: 16px;
  padding: 0.8em 2.4em;
  border: 2px solid ${selected ? '#046B40' : '#ccc'};
  border-radius: 30px;
  background-color: ${selected ? '#A5CAAB' : '#fff'};
  color: ${selected ? '#fff' : '#000'};
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    border-color: #046b40;
    background-color: ${selected ? '#046B40' : '#f0f0f0'};
    color: ${selected ? '#fff' : '#000'};
  }
`

const Gender = ({ data, updateData, nextStep, prevStep }: GenderProps) => {
  const handleGenderSelect = (gender: string) => {
    updateData('gender', gender)
  }

  return (
    <div>
      <SignupTitle title='성별을 알려주세요' prevStep={prevStep} />
      <div css={buttonContainerStyle}>
        <button
          css={buttonStyle(data.gender === '남성')}
          onClick={() => handleGenderSelect('남성')}
        >
          남자
        </button>
        <button
          css={buttonStyle(data.gender === '여성')}
          onClick={() => handleGenderSelect('여성')}
        >
          여자
        </button>
      </div>
      <SignupConfirmButton text='확인' onClick={nextStep} />
    </div>
  )
}

export default Gender
