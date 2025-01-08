import SignupInputBox from './SignupInputBox'
import SignupTitle from './SignupTitle'

type LanguageProps = {
  data: { appLanguage: string; firstStudyLanguage: string; secondStudyLanguage: string }
  updateData: (
    field: 'appLanguage' | 'firstStudyLanguage' | 'secondStudyLanguage',
    value: string,
  ) => void
  nextStep: () => void
}

const Language = ({ data, updateData, nextStep }: LanguageProps) => {
  return (
    <div>
      <SignupTitle title='언어를 선택해주세요'></SignupTitle>
      <SignupInputBox
        type='toggle'
        title='어플 설정언어'
        toggleOption={['한국어', '영어', '중국어', '일본어']}
        onChange={(value: string) => updateData('appLanguage', value)}
      ></SignupInputBox>{' '}
      <SignupInputBox
        type='text'
        title='어플 설정언어'
        toggleOption={['한국어', '영어', '중국어', '일본어']}
        onChange={(value: string) => updateData('appLanguage', value)}
      ></SignupInputBox>
      <button onClick={nextStep}>Next</button>
    </div>
  )
}

export default Language
