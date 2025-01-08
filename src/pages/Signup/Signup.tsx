import { useState } from 'react'
import Language from '../../components/Signup/Language'

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
    appLanguage: '',
    firstStudyLanguage: '',
    secondStudyLanguage: '',
    country: '',
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

  return (
    <div>
      {step === 1 && (
        <Language data={signupData} updateData={updateSignupData} nextStep={nextStep} />
      )}
    </div>
  )
}

export default Signup
