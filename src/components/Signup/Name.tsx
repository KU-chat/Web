import SignupConfirmButton from './SignupConfirmButton'
import SignupInputBox from './SignupInputBox'
import SignupTitle from './SignupTitle'

type NameProps = {
  data: { name: string }
  updateData: (field: 'name', value: string) => void
  nextStep: () => void
  prevStep: () => void
}

const Name = ({ data, updateData, nextStep, prevStep }: NameProps) => {
  return (
    <div>
      <SignupTitle title='사용하실 이름을 알려주세요' prevStep={prevStep}></SignupTitle>
      <SignupInputBox
        type='text'
        onChange={(value: string) => updateData('name', value)}
        data={data.name}
      />
      <SignupConfirmButton text='확인' onClick={nextStep}></SignupConfirmButton>
    </div>
  )
}

export default Name
