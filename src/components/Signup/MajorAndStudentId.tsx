import SignupConfirmButton from './SignupConfirmButton'
import SignupInputBox from './SignupInputBox'
import SignupTitle from './SignupTitle'

type MajorAndStudentIdProps = {
  data: { major: string; studentIdNumber: string }
  updateData: (field: 'major' | 'studentIdNumber', value: string) => void
  nextStep: () => void
  prevStep: () => void
}

const MajorAndStudentId = ({ data, updateData, nextStep, prevStep }: MajorAndStudentIdProps) => {
  return (
    <div>
      <SignupTitle title='학과와 학번을 알려주세요' prevStep={prevStep} />
      <SignupInputBox
        type='text'
        title='학과'
        onChange={(value: string) => updateData('major', value)}
        data={data.major}
      />
      <SignupInputBox
        type='text'
        title='학번'
        onChange={(value: string) => updateData('studentIdNumber', value)}
        data={data.studentIdNumber}
      />
      <SignupConfirmButton text='확인' onClick={nextStep} />
    </div>
  )
}

export default MajorAndStudentId
