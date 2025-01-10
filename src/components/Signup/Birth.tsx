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
  return (
    <div>
      <SignupTitle title='생년월일을 알려주세요' prevStep={prevStep}></SignupTitle>
      <SignupInputBox
        type='text'
        onChange={(value: string) => updateData('birth', value)}
        data={data.birth}
      />
      <SignupConfirmButton text='확인' onClick={nextStep}></SignupConfirmButton>
    </div>
  )
}

export default Birth
