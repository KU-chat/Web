import axios from 'axios'

export const signup = async (signupData: any) => {
  const guestToken = localStorage.getItem('guestToken')
  if (!guestToken) {
    throw new Error('Guest token이 존재하지 않습니다. 다시 시도해 주세요.')
  }
  try {
    const requestData = {
      ...signupData,
      guestToken,
    }
    const response = await axios.post('https://www.kuchat.site/member/signup', requestData)
    return response.data
  } catch (err: any) {
    throw new Error(err.message || '회원가입에 실패했습니다.')
  }
}
