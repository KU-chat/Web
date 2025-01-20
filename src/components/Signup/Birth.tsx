import { useState } from 'react'
import SignupConfirmButton from './SignupConfirmButton'
import SignupInputBox from './SignupInputBox'
import SignupTitle from './SignupTitle'

type BirthProps = {
  data: { birth: string }
  updateData: (field: 'birth', value: string) => void
  nextStep: () => void
  prevStep: () => void
}

const Birth = ({ data, updateData, nextStep, prevStep }: BirthProps) => {
  const [isValid, setIsValid] = useState(false)

  const validateDate = (value: string) => {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/
    const isValidFormat = dateRegex.test(value)

    setIsValid(isValidFormat)
    updateData('birth', value)
  }

  return (
    <div>
      <SignupTitle title='생년월일을 알려주세요' prevStep={prevStep} />
      <SignupInputBox
        type='text'
        placeholder='YYYY-MM-DD 형식으로 입력'
        onChange={(value: string) => validateDate(value)} // 유효성 검사 실행
        data={data.birth}
      />
      <SignupConfirmButton
        text='확인'
        onClick={nextStep}
        disabled={!isValid} // 유효하지 않으면 버튼 비활성화
      />
    </div>
  )
}

export default Birth
