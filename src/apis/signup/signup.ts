import axios from 'axios'

export const signup = async (signupData: any) => {
  try {
    const response = await axios.post('https://www.kuchat.site/member/signup', signupData)
    return response.data
  } catch (err: any) {
    throw new Error(err.message || '회원가입에 실패했습니다.')
  }
}
