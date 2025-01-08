import SignupConfirmButton from './SignupConfirmButton'
import SignupInputBox from './SignupInputBox'
import SignupTitle from './SignupTitle'

type CountryProps = {
  data: { country: string }
  updateData: (field: 'country', value: string) => void
  nextStep: () => void
}

const Country = ({ data, updateData, nextStep }: CountryProps) => {
  return (
    <div>
      <SignupTitle title='출신국가를 알려주세요'></SignupTitle>
      <SignupInputBox
        type='toggle'
        toggleOption={['대한민국', '미국', '중국', '일본', '몽골', '기타국가']}
        onChange={(value: string) => updateData('country', value)}
        data={data.country}
      />
      <SignupConfirmButton text='확인' onClick={nextStep}></SignupConfirmButton>
    </div>
  )
}

export default Country
