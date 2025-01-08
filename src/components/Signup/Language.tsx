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
      ></SignupInputBox>
      <SignupInputBox
        type='toggle'
        title='희망 학습언어'
        toggleOption={['한국어', '영어', '중국어', '일본어']}
        onChange={(value: string) => updateData('firstStudyLanguage', value)}
        placeholder='1순위'
      ></SignupInputBox>
      <SignupInputBox
        type='toggle'
        toggleOption={['한국어', '영어', '중국어', '일본어']}
        onChange={(value: string) => updateData('secondStudyLanguage', value)}
        placeholder='2순위'
      ></SignupInputBox>
      <button onClick={nextStep}>Next</button>
    </div>
  )
}

export default Language
