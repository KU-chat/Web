import SignupConfirmButton from './SignupConfirmButton'
import SignupTitle from './SignupTitle'

type IdCheckProps = {
  nextStep: () => void
  prevStep: () => void
}
const IDCheck = ({ nextStep, prevStep }: IdCheckProps) => {
  return (
    <div>
      <SignupTitle title='학생증을 촬영해주세요' prevStep={prevStep} />
      <SignupConfirmButton text='확인' onClick={nextStep}></SignupConfirmButton>
    </div>
  )
}

export default IDCheck
