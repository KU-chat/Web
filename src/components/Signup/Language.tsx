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
      <h2>Step 1: Email and Password</h2>
      <input
        type='text'
        value={data.appLanguage}
        onChange={(e) => updateData('appLanguage', e.target.value)}
        placeholder='Email'
      />
      <input
        type='text'
        value={data.firstStudyLanguage}
        onChange={(e) => updateData('firstStudyLanguage', e.target.value)}
        placeholder='Password'
      />{' '}
      <input
        type='text'
        value={data.secondStudyLanguage}
        onChange={(e) => updateData('secondStudyLanguage', e.target.value)}
        placeholder='Password'
      />
      <button onClick={nextStep}>Next</button>
    </div>
  )
}

export default Language
