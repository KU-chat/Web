import { useState } from 'react'
import Language from '../../components/Signup/Language'
import { Col } from '../../components/commons/Flex'
import Country from '../../components/Signup/Country'
import Name from '../../components/Signup/Name'
import IDCheck from '../../components/Signup/IDCheck'
import MajorAndStudentId from '../../components/Signup/MajorAndStudentId'
import Gender from '../../components/Signup/Gender'
import Birth from '../../components/Signup/Birth'
import Complete from '../../components/Signup/Complete'

type SignupData = {
  appLanguage: string
  firstStudyLanguage: string
  secondStudyLanguage: string
  country: string
  name: string
  major: string
  studentIdNumber: string
  gender: string
  birth: string
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
    studentIdNumber: '',
    gender: '',
    birth: '',
  })

  const nextStep = () => setStep((prev) => prev + 1)
  const prevStep = () => setStep((prev) => prev - 1)

  const updateSignupData = (field: keyof SignupData, value: string | number) => {
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
      {step === 3 && (
        <Name
          data={signupData}
          updateData={updateSignupData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 4 && <IDCheck nextStep={nextStep} prevStep={prevStep} />}
      {step === 5 && (
        <MajorAndStudentId
          data={signupData}
          updateData={updateSignupData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}{' '}
      {step === 6 && (
        <Gender
          data={signupData}
          updateData={updateSignupData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 7 && (
        <Birth
          data={signupData}
          updateData={updateSignupData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 8 && <Complete signupData={signupData} />}
    </Col>
  )
}

export default Signup
