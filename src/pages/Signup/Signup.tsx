import { useState } from 'react'
import Language from '../../components/Signup/Language'
import { Col } from '../../components/commons/Flex'
import Country from '../../components/Signup/Country'

type SignupData = {
  appLanguage: string
  firstStudyLanguage: string
  secondStudyLanguage: string
  country: string
  name: string
  major: string
  studentIdNumber: number
  gender: string
  birth: number
}

const Signup = () => {
  const [step, setStep] = useState(1)
  const [signupData, setSignupData] = useState<SignupData>({
    appLanguage: '한국어',
    firstStudyLanguage: '영어',
    secondStudyLanguage: '일본어',
    country: '대한민국',
    name: '',
    major: '',
    studentIdNumber: 0,
    gender: '',
    birth: 0,
  })

  const nextStep = () => setStep((prev) => prev + 1)
  const prevStep = () => setStep((prev) => prev - 1)

  const updateSignupData = (field: keyof SignupData, value: string) => {
    setSignupData({ ...signupData, [field]: value })
  }

  console.log(signupData)
  return (
    <Col>
      {step === 1 && (
        <Language
          data={signupData}
          updateData={updateSignupData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 2 && (
        <Country
          data={signupData}
          updateData={updateSignupData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
    </Col>
  )
}

export default Signup
